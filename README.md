
# Node Package Management Lab

## Problem Statement

When using npm, it is often the case that we don't fully understand _everything_
that happens under the hood.  When building web applications in React, along
with Angular, Vue, etc... we work with the framework provided. Using npm, we can
download specific packages of code, the 'framework', and connect them up to the files
_we create_, allowing us to wield their powerful tools.

In this lab, we are going to practice the process of setting up a `package.json`
file, installing an npm package and connecting it to a JavaScript file.

## Objectives

- Practice initializing a `package.json` file
- Practice installing an npm package
- Introduce how to _import_ a package into a different JavaScript file

#### The Tests Are Not Working

There is only one tests for this lab written in `test/indexTest.js`. However, if
you run `learn`, you should see an error in the terminal:

```
> learn
This directory doesn't appear to have any specs in it.
```

The `learn` command is currently unable to run the tests. When we run `learn` in
the terminal, it fires off the `npm install` command to set up the lab with the
right dependencies. If we run `npm install`, though, we get an error that there
is no `package.json` file:

```
ENOENT: no such file or directory, open '.../package.json'
```

So, first, to even get to the tests on this lab, we will need to _create_ the
file.

#### Create a `package.json` File

The `package.json` can be written manually pretty quickly, but we have already
have a handy command for creating these files: `npm init`

Run `npm init` and follow the prompts until a `package.json` file is created.

Try running `npm install` again - ah, no error, but nothing else happens. The
tests aren't running yet.

#### Install a Package

In addition to `package.json`, we also need to add in the necessary dependencies
that will run our tests.

In the terminal, run `npm install learn-browser`. You should see `npm` take
action start installing.  In `package.json`, when `npm` is finished, a new key
will appear, `dependencies`, with one dependency inside:

```
=======
# Intro to NPM

## Problem Statement

JavaScript has been around for many years now, and continues to serve as a
critical part of the modern, interactive web. There are web developers all over
the world writing JavaScript code, each contributing their own bits of work.
That's _a lot_ of code! In fact, there is a lot of _duplicate_ code. Multiple
web developers, over the years, have solved the same problems over and over.

It is important you learn to write your own code in your own projects. At the
same time, though, we don't need to always be _reinventing the wheel_ and
writing code that may already exist. In fact, with the amount of developers out
in the world, it is likely someone else has not only already invented the same
wheel, but tested, upgraded and innovated on it so that it is way better than
anything we could write ourselves in a short period of time.

For these situations, we have JavaScript _packages_. A package is a file or set
of files full of existing, _reusable_ code. They are designed to be shared,
allowing many web developers to use the same code in their own projects.

To help organize these packages in relation to our own work, we use _npm_, or
_Node Package Manager_. In this lesson, we will be briefly discussing how npm
works and why it is useful.

## Objectives

- Introduce npm and www.npmjs.com
- Ensure you are fully set up to use NPM
- Review some important concepts related to package management in JavaScript

## Setting Up the Node Package Manager

Before we continue, let's make sure you're environment is all set to work with
npm.

npm is automatically installed along with _Node.js_, which should already be
installed on your system if you've worked through the JavaScript coursework.  To
confirm you have node installed, enter the following into your command line:

```sh
node -v
```

If a version appears, you have Node.js. If, by chance, you do not have Node.js
installed, you can use the [Node Version Manager][nvm] to install Node.js and
keep it up to date.

You can also double check npm by running the following:

```sh
npm -v
```

A version number should appear in your terminal. If you'd like, you can update
npm by entering the following:

```sh
npm install --global npm
```

or, for short:

```sh
npm install -g npm
```

**Note:** If you are using the in-browser Learn IDE, you already have node and npm
configured, but will not be able to update global packages.

Okay, so what is npm exactly?

## Introduce the Node Package Manager

As mentioned, npm is a package manager for JavaScript. This means that npm works
with your JavaScript project directories via the command line, allowing you to
install packages of preexisting code.

What sort of code? All kinds! Some packages are quite small, like
[isNumber][isNumber], a package that has one function: to check if a value is a
number. Some packages are much, much more complicated. Huge libraries and
frameworks, including [React][react] and [Express][expjs], are available as npm
packages. These more complicated packages are often _themselves_ built using a
combination of other packages.

This modular design, the ability to build a package using other packages, allows
for developers to continuously expand the JavaScript universe, creating new,
more powerful tools and applications on top of existing, tried and tested code.

## Introduce `npm install` and `package.json`

All JavaScript labs on Learn rely on npm packages for their tests. Many use the
`learn-browser` npm package, which is built using hundreds of supporting
packages, including the test framework, [Mocha][mocha].

The lesson itself doesn't actually contain all of these packages. Instead, it
contains a list of _dependencies_ in a file called `package.json`.

The `package.json` file tells you (and `npm`) everything about what packages are
required for a specific JavaScript application, listing out each package name.

When we run the command `npm install` in a directory where a `package.json` file
is present, `npm` reads the names of each dependency and downloads the packages
from [npmjs.com][npmjs], where they are hosted. It then begins installing those
packages - _BUT!_ those packages also have _their own_ `package.json` with their
own dependencies! `npm` must also get those packages, and if _those packages_
have any dependencies, get them as well. So on and so on.

If you are using the in-browser Learn IDE, `npm install` is run immediately
after the lesson is forked and cloned from GitHub.  If you are working in a
local environment, it is also built in to the `learn` command. Running `npm
install` creates a folder called `node_modules`, which contains all the
downloaded packages.

When building a project from scratch, as you build it, you may realize you
_need_ some specific package. Running `npm install` while inside a project
directory _will not work_ unless there is a correctly structured `package.json`
file present.

## A Little More on `package.json`

The `package.json` is a key part of sharing JS code repositories on sites like
GitHub.  Instead of having to bundle all the `node_modules` with every project,
we just include a small file, listing out what npm needs to get for the project.

The file also typically includes information about the project, such as the
name, version, author and license.

The `package.json` file is written in JSON, so like an object in JavaScript, it
is always wrapped in curly braces, and includes keys and values. A basic
example:

```json
{
  "name": "intro-to-npm-readme",
  "version": "1.0.0",
  "description": "An introduction to npm and package.json",
  "main": "index.js",
  "scripts": {
    "test": "echo 'hot dog'"
  },
  "dependencies": {
    "learn-browser": "^0.1.17"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/learn-co-curriculum/intro-to-npm-readme.git"
  },
  "author": "flatironschool",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/learn-co-curriculum/intro-to-npm-readme/issues"
  },
  "homepage": "https://github.com/learn-co-curriculum/intro-to-npm-readme#readme"
}
```

In your terminal, if you are in a directory with the above `package.json` file
present, running `npm test` will return "hot dog." This lesson actually does include this `package.json` file, so try it for yourself!

Having this file present also means it is possible to install additional packages.  There is one dependency already included:

```json
"dependencies": {
  "learn-browser": "^0.1.17"
}
```

<<<<<<< HEAD
The version may be different, but this confirms that we've set up the package
correctly.

#### Add the Test Script

The `learn-browser` package relies on a test script that will trigger a new
browser window with the tests inside.  Replace the `scripts` part of your
`package.json` file with the following:

```
"scripts": {
  "test": "node_modules/browser-sync/bin/browser-sync.js start --config node_modules/learn-browser/bs-config.js"
},
```

Try running `learn` now. You should see tests! Hooray, now we can solve the tests!

#### Add a Second Package

The tests are looking for a `moment()`, a function that comes with
[moment.js][moment].  Moment.js is a handy package for displaying dates and
time.

Install the `moment` package and run `learn` once again.

If `package.json` file has the correct packages, and the node modules have been
installed, the test will pass and you should see a colorful clock appear!

## Conclusion

We've departed from the shore and are now afloat on the sea of code. When
building our own applications, we will often rely on existing packages to handle
specific pieces of the project.

Although we only installed two packages in this lab, there are many layers of
dependencies for them, and hundreds of additional dependencies were installed.
It isn't necessary to understand _how_ each of these works.  The main thing to
grasp is how to implement and use the specific dependencies you need, in this
case, `learn-browser` and `moment`.

[moment]: https://momentjs.com/
=======
Running something like `npm install react` will add a second dependency:

```json
"dependencies": {
  "learn-browser": "^0.1.17",
  "react": "^16.4.1"
}
```

## `npm init`

Since npm relies on a `package.json` file, it has a built in command to _build_
`package.json` files. Running `npm init` on the command line will begin a series
of prompts, asking about specific content to included in the file. At the end,
it will create a file or edit an existing `package.json` file. Very handy when
you are creating your own projects from scratch!

#### Key Terms

- npm - Node Package Manager, a command line tool for handling packages of reusable
JavaScript code
- Node - Node is a JavaScript runtime, allowing JavaScript to be run in a computer
terminal, instead of in a browser

## Conclusion

For all advanced JavaScript lessons, including React and Redux, we rely on npm
to set up a lot of things 'under the hood.' The applications we build are made
possible by the contributions of thousands of other coders before us!

[nvm]: https://github.com/creationix/nvm
[isNumber]: https://www.npmjs.com/package/isnumber
[react]: https://www.npmjs.com/package/react
[expjs]: https://expressjs.com/
[mocha]: https://mochajs.org/
[npmjs]: https://www.npmjs.com/
