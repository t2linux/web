#!/bin/bash

# ensure correct directory
cd "$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )"

# create dist
rm -r ../dist
mkdir ../dist

# compile style
sass ../src/style/style.scss ../dist/style.css
rm ../dist/style.css.map

# copy html
cp ../src/*.html ../dist/

# copy javascript
cp ../src/*.js ../dist/

# copy assets
cp -r ../src/assets ../dist/assets