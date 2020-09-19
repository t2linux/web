#!/bin/bash

# ensure correct directory
cd "$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )"

# watch scss
sass ../src/style/style.scss ../src/style.css --watch