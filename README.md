# A template for NodeJs monorepo

* [Goal](#goal)
* [Install](#install)
  * [Create repository](#create-repository)
  * [Setup repository](#setup-repository)
* [Features](#features)
  * [Build](#build)
  * [Developer assistance](#developer-assistance)
  * [Test](#test)
    * [Static test : lint](#static-test---lint)
    * [Dynamic test](#dynamic-test)
  * [Continuous integration](#continuous-integration)

## Goal

There is so many great tools to help you coding.
However, [setting them up](https://github.com/GradedJestRisk/js-training/wiki)
at each new repository is tedious and tricky, especially in a monorepo.

## Use

### Create repository

<!-- markdownlint-disable-next-line MD013 -->
When [creating a Github repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template), select this repository as a template

### Setup repository

Clone repository and enter it

If you use `nvm`, check it has read the configuration

```shell
Found 'nodejs-monorepo-template/.nvmrc' with version <14.17.0>
Now using node v14.17.0 (npm v6.14.13)
```

Install all dependencies

```shell
npm ci
cd app-foo && npm ci && cd ..
```

Activate hooks
<!-- markdownlint-disable-next-line MD013 -->
* Copy [hooks templates](./.githooks) to  actual [hooks](./.git/hooks), eg. `cp ./.githooks/pre-commit ./.git/hooks/`
* Grant them execution rights, eg `chmod +x ./.git/hooks/pre-commit`

Add protection to the default branch:

* PR required before merge
* Require branch to be up-to-date
* Enforce for administrators

Add continuous integration

* Create CircleCI project, trigger a test on default branch and check it pass
* Add check to default branch

Add Github action integration

* Create a personal access token with following scopes: `repo` and `workflow`
* Add it to repository secrets under `AUTO_MERGE_TOKEN` name
* Create two labels `:rocket: Ready to Merge` and `!:warning: Blocked`

Check entire workflow

* Create a branch with untested code in `app-foo/src`
* Create a pull request
* Add `:rocket: Ready to Merge` label
* Check the PR is not merged because CI fails on coverage
* Remove  `:rocket: Ready to Merge` label
* Add `!:warning: Blocked` label
* Add `/* istanbul ignore next */` before untested code
* Check the PR is not merged although CI pass
* Add `:rocket: Ready to Merge` label
* Check the PR is merged

## Features

### Build

Check nodeJs expected version from `engine` node in `package.json`

### Developer assistance

Install nodeJs expected version with minimal friction (`nvm`)

Formatters:

* prettier
* JSON

Auto-fix lint hooks (git pre-commit)

### Test

#### Static test : lint

File system is linted:

* directory names
* file names

The following files are linted:

* JavaScript
* JSON
* markdown
* YAML (GithubAction, CircleCi, docker-compose)

The following files are spelled-checked:

* Javascript

Custom word should be added to the application [dictionary](./app-foo/dictionaries/custom.txt)

Dependencies are checked for unused dependencies

`package.json` is checked for sorting and mandatory attributes

#### Dynamic test

Runner: Mocha

Assertion: Chai

Test coverage: Nyc

### Continuous integration

Tests are executed by CircleCi in 2 steps:

* test repository-wide scope
* test each application separately

Pull request

* are merged automatically when `:rocket: Ready to Merge` label is added
* are rebased if needed
