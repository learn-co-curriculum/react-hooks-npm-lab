# Node Package Management Lab


## Overview

When using npm, it is often the case that we aren't familiar with _all_ of the
code in the dependency tree. Building modern JavaScript applications relies on
our ability to use the tools built for us by others.

When building web applications in React, along with Angular, Vue, etc., we work
within the framework provided. Using npm, we download specific packages of code.
The 'framework' then makes sure they are available in the code _we create_,
allowing us to wield their powerful tools.

In this lab, we are going to practice the process of setting up a `package.json`
file. We will also install an npm package or two and use their functionality in
new code we write.


## Objectives

- Practice initializing a `package.json` file
- Practice installing an npm package
- Introduce how to _import_ a package into a different JavaScript file


## Deliverables

#### Get the Tests Working

There is only one test for this lab written in `test/indexTest.js`, but we
aren't able to run it! Try executing `learn test` or `npm test` (_Note_: `learn
test` _wraps_ `npm test`): 

```
> npm test
This directory doesn't appear to have any specs in it.
```

This output makes sense because we don't have a `package.json` file that
describes what the command `test` is supposed to do! To get the tests working,
we will need to _create_ the file. How do we go about doing that? By running
`npm init` of course! 


###### Create a `package.json` File

The `package.json` can be written quickly from scratch, but we already have a
handy command for creating these files: `npm init`.

Run `npm init` and follow the prompts until a `package.json` file is created.
Following, run the tests with `npm test`: 

```
> npm test
Error: no test specified
```

Bah humbug! Our tests in `test/` still aren't working. We are missing our
testing framework and a `test` script that makes use of it! Let's fix both:

###### Install a Testing Package

We need to add in the necessary dependencies that will run our tests.

In the terminal, run `npm install learn-browser`. You should see `npm` take
action. When `npm` is finished, `package.json` will be updated with a new key:
`dependencies`, with one dependency inside:

```
"dependencies": {
  "learn-browser": "^0.1.17"
}
```

The version may be different, but this confirms that we've installed the package
correctly. Now all we need is to make sure our `npm test` command knows to make
use of that testing package.

###### Create a `test` Command

For `npm test` to work, we need a test script that will trigger the suite to
run. In `package.json`, replace the `scripts` `test` key value with the
following:

```
"scripts": {
  "test": "node_modules/browser-sync/bin/browser-sync.js start --config node_modules/learn-browser/bs-config.js"
},
```

Try running `npm test` now. Everything should be working and our browser should
open up to a test results view. This is because the `test` script is now
correctly saying 'go run the code testing suite code, located in
`browser-sync.js` with `node_modules`'. As you can guess, `browser-sync`
provides us with an in-browser view of our test results.

Let's recap what we just did:
1. Initialized our npm project using `npm init`, which created `package.lock`  
2. Installed a testing framework, `learn-browser`, with `npm install learn-browser`
3. Edited the default `npm test` script to run our testing suite when called


## Add a Second Package

The tests are looking for `moment()`, a function that comes with
[moment.js][moment]. Moment.js is a handy package for displaying dates and
times.

Install the `moment` package and run `npm test` once again.

If `package.json` file has the correct packages, and the node module has been
installed, the test will pass and you should see a colorful clock appear!


## Conclusion

We've departed from the shore and are now afloat on the sea of code. When
building our own applications, we will often rely on existing packages to handle
specific pieces of the project.

Although we only installed two packages in this lab, there are many layers of
dependencies for them, and hundreds of additional dependencies were installed.
It isn't necessary to understand _how_ each of these works. The main thing to
grasp is how to implement and use the specific dependencies you need, in this
case, `learn-browser` and `moment`.

[moment]: https://momentjs.com/
