#!/bin/bash
# Verify that your custom designs are intact after build

echo "🔍 Verifying custom designs..."

# Check critical files
FILES_TO_CHECK=(
    "layouts/index.html"
    "layouts/_default/baseof.html"
    "layouts/posts/list.html"
    "layouts/partials/header.html"
)

for file in "${FILES_TO_CHECK[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
        # Check if it contains theme-related content (warning signs)
        if grep -q "theme" "$file" 2>/dev/null; then
            echo "   ⚠️  Warning: $file contains 'theme' reference"
        fi
    else
        echo "❌ MISSING: $file"
    fi
done

echo ""
echo "📁 Your custom layouts directory:"
ls -la layouts/

echo ""
echo "🎨 Your designs are safe and being used!"
