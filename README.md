# GitHub Book

Generate a PDF book from GitHub repo URL

[![Build Status](https://travis-ci.org/devlato/github-book.svg?branch=master)](https://travis-ci.org/devlato/github-book)
[![Coverage Status](https://coveralls.io/repos/github/devlato/github-book/badge.svg?branch=master)](https://coveralls.io/github/devlato/github-book?branch=master)
[![Code Climate](https://codeclimate.com/github/devlato/github-book/badges/gpa.svg)](https://codeclimate.com/github/devlato/github-book)
[![Issue Count](https://codeclimate.com/github/devlato/github-book/badges/issue_count.svg)](https://codeclimate.com/github/devlato/github-book)
[![npm version](https://badge.fury.io/js/github-book.svg)](https://badge.fury.io/js/github-book)


## Dependencies:

The project depends on the following technologies and libraries:
* `Node.js`;
* `TypeScript`;
* `jest` and `ts-jest`;
* `ts-node-dev`;
* `tslint` and `tslint-config-airbnb`.

As you see, there no dependencies but various dev tools.


## Installation

(These installation instructions would be valid after publishing, so the package name could change).

Let's consider you use [Yarn](https://yarnpkg.com/) as your package manager. If you use [npm](https://www.npmjs.com/), 
it would pretty easy for you to translate the commands using 
this [cheatsheet](https://github.com/areai51/yarn-cheatsheet).

To install it as a global binary, use the following command:

```sh
$ yarn global add github-book
```

To install it as your project dependency, run:

```sh
$ yarn add github-book
```


## Usage

If you have the package installed globally, you can use `github-book` as binary name. Otherwise keep 
in mind that you can use `./node_modules/github-book/dist/index.js` or `yarn start` (in development mode) 
instead of `github-book`.

```sh
$ github-book --help

  Syntax: github-book [options]
  Options:
  --url:         [*] URL of the GitHub repo
  --out-file:    [*] Output file path
  
  --version          Print package version
  --help             Print this help message
```

Currently the library has limitation: the repo should be public.


## Building the project

It is recommend to manage Node versions with [NVM](https://github.com/creationix/nvm).

After cloning the project, run

```sh
$ yarn
``` 

to install the project dependencies. Project has only development dependencies: TypeScript, tslint, jest, etc.
As the command succeeded, type

```sh
$ yarn build
```

to build the project locally.
 

## Copyright

Author: Denis Tokarev ([@devlato](https://github.com/devlato))

License: MIT
