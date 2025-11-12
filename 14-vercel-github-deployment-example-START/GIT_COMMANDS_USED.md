# Commands used

1. to create a new repository
`git init`

2. added all of the files
`git add .`

3. commited
`git commit -m "Initial commit"`

4. push up to a new empty repository on github which is done in three steps

- `git remote add origin https://github.com/dgmouris/deleteme.git`
    - this will show your github connection
- `git branch -M main` renames the "master" branch to "main"
- `git push -u origin main` pushes our main branch to the origin remote.

Note you can check your remotes with `git remote -v`

5. We created a new branch and select it.
`git checkout -b loading-and-error-states`

Note: `-b` creates a new branch.

Now that we have this (you can check this with `git status` or `git branch`)

Note you switch branches with `git checkout branchname`

6. Once you create all of the changes in your files you can see the changes with `git diff` (and if you've added with `git add .` you can use `git diff --staged`)

7. add and commmit them to the branch `loading-and-error-states`

8. push the branch

`git push -u origin loading-and-error-states`
OR
`git push --set-upstream origin loading-and-error-states`

create a pull request
merge the pull request (all github)

9. `git checkout main` go to the main branch on your local computer.

10. `git pull` to bring it back to your local computer.
