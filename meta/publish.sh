#!/bin/bash

# create dist
rm -r ../dist
mkdir ../dist

# compile style
sass ../src/style/style.scss ../dist/style.css
rm ../dist/style.css.map

# copy html
cp ../src/*.html ../dist/

# copy assets
cp -r ../src/assets ../dist/assets