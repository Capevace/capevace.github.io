#!/bin/bash
# Exit immediately if a pipeline returns a non-zero status.
set -e

echo "🚀 Starting deployment"

# Here we are using the variables
# - GITHUB_ACTOR: It is already made available for us by Github. It is the username of whom triggered the action
# - GITHUB_TOKEN: That one was intentionally injected by us in our workflow file.
# Creating the repository URL in this way will allow us to `git push` without providing a password
# All thanks to the GITHUB_TOKEN that will grant us access to the repository

# We need to clone the repo here.
# Remember, our Docker container is practically pristine at this point

echo "🏋️ Building website..."
JEKYLL_ENV=production bundle exec jekyll build
echo "Jekyll build done"

# Now lets go to the generated folder by Jekyll
# and perform everything else from there
cd _site

echo "☁️ Publishing website"

# We don't need the README.md file on this branch
rm -f README.md

# Now we init a new git repository inside _site
# So we can perform a commit
git init
git add .
# That will create a nice commit message with something like:
# Github Actions - Fri Sep 6 12:32:22 UTC 2019
git commit -m "Deploy - $(date)"
echo "Build branch ready to go. Pushing to Github..."
# Force push this update to our gh-pages
git push --force git@github.com:Capevace/capevace.github.io master
# Now everything is ready.
# Lets just be a good citizen and clean-up after ourselves
rm -fr .git
cd ..
echo "🎉 New version deployed 🎊"