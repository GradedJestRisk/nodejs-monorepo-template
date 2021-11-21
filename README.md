# A template NodeJs monorepo

## Install

### Create repository

When creating a Github repository, select this repository as a template

### Setup repository

Add protection to the default branch:

- PR required before merge
- Require branch to be up-to-date
- Enforce for administrators

Add continuous integration

- Create CircleCI project, trigger a test on default branch and check it pass
- Add check to default branch

## Developer assistance

Formatters:

- prettier
- JSON

Auto-fix lint hooks (git pre-commit)

## Test

### Static test : lint

File system is linted:

- directory names
- file names

The following files are linted:

- JavaScript
- JSON
- markdown
- YAML (todo)

## Dynamic test

Runner: Mocha

Assertion: Chai

## Continuous integration

Tests are executed by CircleCi in 2 steps:

- test repository-wide scope
- test each application separately

Pull request

- are merged automatically when `:rocket: Ready to Merge` label is added
- are rebased if needed
