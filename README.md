# SDEV DMIT2008 - Section A03 - Fall 2025

This contains all:
- Examples done in class
- Slides
- Exercises that are not marked

For the section A03, these will also be linked in the brightspace.


## Choices of how to work with this repo


- You can just clone the entire url
git clone <repo-url>
- Periodically after/during the class pull the repo.
git pull

## Using degit

- install `degit` locally
`npm install -g degit`
- download all of the files locally
`npx degit https://github.com/dmit-2008/dmit2008-A01-Winter-2025/<folder-name> .`

### If you're using Degit you can setup a handy command

```
doskey download-js-example=npx degit https://github.com/NAIT-DMIT2008-Fall2025/DMIT2008-A03-Fall2025/$1 $1
```
- once you restart your conemu you can use the command
```
download-js-example <folder-name>
```
example
```
download-js-example 02-review-astronauts-example-COMPLETE
```
should download to a folder in the path where you executed the command.
