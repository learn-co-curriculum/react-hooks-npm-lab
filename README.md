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
"dependencies": {
  "learn-browser": "^0.1.17"
}
```

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
