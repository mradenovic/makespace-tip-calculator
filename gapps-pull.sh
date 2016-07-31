#/bin/bash

# gapps-pull pulls latest version of the project to the local directory.
# Development is done in Google App Script Editor. Version control is
# done with git.
# Run this script when ready to commit.

PROJECT_ID="1U-8PnrjqvLR3WNy9fDGPTIPs_wWksz6i06ML3QwBabi4AOLs8_QQYyQn"

echo 'removing src...'
rm -rf src

echo 'removing gapps.config.json'
rm gapps.config.json

echo 'initializing project ' $PROJECT_ID
gapps init $PROJECT_ID
