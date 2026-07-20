document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nds-lang-toggle");
  const dropdown = document.querySelector(".nds-lang-dropdown");

  if (toggle) {
    toggle.addEventListener("click", () => {
      dropdown.classList.toggle("open");
      toggle.classList.toggle("open");
    });
  }

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
      toggle.classList.remove("open");
    }
  });

  const popup = document.querySelector("[data-newsletter-popup]");

  if (!popup) {
    return;
  }

  const form = popup.querySelector("[data-newsletter-form]");
  const status = popup.querySelector("[data-newsletter-status]");
  const closeButtons = popup.querySelectorAll("[data-newsletter-close]");
  const openButtons = document.querySelectorAll("[data-newsletter-open]");
  const endpoint = popup.dataset.endpoint;
  const storageKey = popup.dataset.storageKey || "nds-newsletter-popup-dismissed";
  const successMessage = popup.dataset.successMessage || "Thanks. Your details were received.";
  const errorMessage = popup.dataset.errorMessage || "The subscription could not be saved. Please try again.";
  const invalidMessage = popup.dataset.invalidMessage || "Please complete the required fields.";
  const submitMessage = popup.dataset.submitMessage || "Submitting your details...";

  let isVisible = false;
  let isDismissed = false;

  try {
    const pageKey = `${storageKey}:${window.location.pathname}`;
    popup.dataset.pageStorageKey = pageKey;
    isDismissed = window.localStorage.getItem(pageKey) === "true";
  } catch (_error) {
    isDismissed = false;
  }

  if (!endpoint || !form || !status) {
    return;
  }

  const showPopup = (force = false) => {
    if (isVisible || (isDismissed && !force)) {
      return;
    }

    popup.hidden = false;
    window.requestAnimationFrame(() => {
      popup.classList.add("is-visible");
    });
    isVisible = true;
  };

  const closePopup = (persist) => {
    popup.classList.remove("is-visible");
    window.setTimeout(() => {
      popup.hidden = true;
    }, 220);
    isVisible = false;

    if (persist) {
      try {
        window.localStorage.setItem(popup.dataset.pageStorageKey || storageKey, "true");
      } catch (_error) {
        // Ignore storage failures.
      }
      isDismissed = true;
    }
  };

  const triggerFromScroll = () => {
    const docHeight = document.documentElement.scrollHeight;
    const nearBottom = window.scrollY + window.innerHeight >= docHeight - 16;

    if (nearBottom) {
      showPopup();
      window.removeEventListener("scroll", triggerFromScroll);
    }
  };

  window.addEventListener("scroll", triggerFromScroll, { passive: true });

  openButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      showPopup(true);
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      closePopup(true);
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      status.textContent = invalidMessage;
      status.dataset.state = "error";
      return;
    }

    const formData = new FormData(form);
    if (String(formData.get("company") || "").trim() !== "") {
      closePopup(true);
      return;
    }

    const submitButton = form.querySelector("button[type='submit']");
    if (submitButton) {
      submitButton.disabled = true;
    }

    status.textContent = "";
    status.dataset.state = "";

    status.textContent = submitMessage;
    status.dataset.state = "";

    try {
      const iframeName = "newsletter-popup-target";
      let iframe = document.querySelector(`iframe[name="${iframeName}"]`);

      if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.name = iframeName;
        iframe.title = "Newsletter submission target";
        iframe.hidden = true;
        document.body.appendChild(iframe);
      }

      const submitForm = document.createElement("form");
      submitForm.action = endpoint;
      submitForm.method = "POST";
      submitForm.target = iframeName;
      submitForm.hidden = true;

      const fields = {
        name: String(formData.get("name") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        lang: document.documentElement.lang || "",
        page: window.location.href,
        source: "newsletter-popup"
      };

      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        submitForm.appendChild(input);
      });

      document.body.appendChild(submitForm);
      submitForm.submit();

      window.setTimeout(() => {
        if (document.body.contains(submitForm)) {
          submitForm.remove();
        }
      }, 2000);

      status.textContent = successMessage;
      status.dataset.state = "success";
      form.reset();
      window.setTimeout(() => {
        closePopup(true);
      }, 1800);
    } catch (_error) {
      status.textContent = errorMessage;
      status.dataset.state = "error";
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
      }
    }
  });
});
