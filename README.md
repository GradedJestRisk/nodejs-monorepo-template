# A template NodeJs monorepo

## Install

### Create repository

<!-- markdownlint-disable-next-line MD013 -->
When [creating a Github repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template), select this repository as a template

### Setup repository

Add protection to the default branch:

- PR required before merge
- Require branch to be up-to-date
- Enforce for administrators

Add continuous integration

- Create CircleCI project, trigger a test on default branch and check it pass
- Add check to default branch

Add Github action integration

- Create a personal access token with following scopes: `repo` and `workflow`
- Add it to repository secrets under `AUTO_MERGE_TOKEN` name
- Create two labels `:rocket: Ready to Merge` and `!:warning: Blocked`

Check entire workflow

- Create a branch with untested code in `app-foo/src`
- Create a pull request
- Add `:rocket: Ready to Merge` label
- Check the PR is not merged because CI fails on coverage
- Remove  `:rocket: Ready to Merge` label
- Add `!:warning: Blocked` label
- Add `/* istanbul ignore next */` before untested code
- Check the PR is not merged although CI pass
- Add `:rocket: Ready to Merge` label
- Check the PR is merged

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

Test coverage: Nyc

## Continuous integration

Tests are executed by CircleCi in 2 steps:

- test repository-wide scope
- test each application separately

Pull request

- are merged automatically when `:rocket: Ready to Merge` label is added
- are rebased if needed
