#!/bin/bash

# ensure correct directory
cd "$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )"

# remove old dist
rm -r ../dist
rm ../dist.zip

# create dist
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

# copy other files
cp ../src/dist/* ../dist/

# create a zip
cd ../dist
zip -r ../dist.zip * > /dev/null