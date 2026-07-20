+++
date = '{{ .Date }}'
draft = true
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
analytics_tag = '{{ .File.ContentBaseName | urlize }}'
+++
