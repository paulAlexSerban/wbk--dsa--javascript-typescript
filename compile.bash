#!/bin/bash
rm -rfv ./*/dist
rm -rfv ./*/*/dist
# Find TypeScript files in nested directories, ignoring 'dist' and 'node_modules' directories
find . -name '*.ts' -not -path '*/dist/*' -not -path '*/node_modules/*' | while read file; do
    # Get the directory of the file
    dir=$(dirname "$file")
    # Compile the TypeScript file and output to a dist directory within the same directory
    npx tsc --lib es2015,es2021,dom "$file" --outDir "$dir"/dist
    if [ $? -eq 0 ]; then
        echo "[ COMPILED SUCCESS ] $file"
    fi
done
