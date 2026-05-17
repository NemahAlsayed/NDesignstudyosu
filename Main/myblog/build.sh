#!/bin/bash
# Safe build script that preserves custom designs

echo "🔒 Building with custom designs locked..."

# 1. Remove any theme that might interfere
rm -rf themes/

# 2. Backup layouts (just in case)
if [ -d "layouts" ]; then
    cp -r layouts .layouts-backup
    echo "✅ Custom layouts backed up"
fi

# 3. Build with no themes
hugo --cleanDestinationDir --disableTheme

# 4. Restore layouts if something went wrong
if [ ! -d "layouts" ]; then
    cp -r .layouts-backup layouts
    echo "✅ Custom layouts restored"
fi

echo "🎉 Build complete with your custom designs!"
