#!/bin/bash

# ensure correct directory
dir="$( cd "$( dirname "$0" )" && cd .. && pwd )"

echo "Using project root '$dir'"

# remove old dist
rm -r $dir/dist
rm $dir/dist.zip

# create dist
mkdir $dir/dist

# compile style
sass $dir/src/style/style.scss $dir/dist/style.css
rm $dir/dist/style.css.map

# copy html
cp $dir/src/*.html $dir/dist/

# copy javascript
cp $dir/src/*.js $dir/dist/

# copy assets
cp -r $dir/src/assets $dir/dist/assets

# copy other files
cp $dir/src/dist/* $dir/dist/

# create a zip
cd $dir/dist
zip -r $dir/dist.zip * > /dev/null