#command line --->  bash ./git_gh-pages.sh

git checkout gh-pages
git rm -rf .
git checkout master _dist/jekyll_dist/
git checkout master _dist/jekyll_dist/.gitignore
git mv _dist/jekyll_dist/**/ ./
git mv _dist/jekyll_dist/*.* ./
rm -rf _dist
mv gitignore.txt .gitignore
git add .gitignore
git add gitignore.txt
git add *
git commit -m "GH PAGES sync"
git push
git checkout master