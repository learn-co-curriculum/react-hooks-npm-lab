# Node Package Management Code-Along

## Overview

When using npm, it is often the case that we aren't familiar with _all_ of the
code in the dependency tree. Building modern JavaScript applications relies on
our ability to use the tools built for us by others. As it turns out, most of
those tools are _also_ built using _other people's_ tools. One package may be
used in another, which is used in another, and another, and so on...

Using npm, we download specific packages of code. If those packages have
dependencies, the dependencies are also downloaded in a recursive manner. For
the purposes of our own application, however, **we only need to know about the
node packages _we_ specifically need to get our app working**. We don't need to
worry about what packages _those_ packages need. Why? Because every node package
includes a `package.json` file that lists out all dependencies. This file lets
Node know what to download when we run `npm install`. Node will download all the
packages, check the `package.json` files present, then download any additional
packages, and repeat.

We will see in future labs that as the number of packages increases, more and
more happens when we run `npm install`. All _we_ need to worry about, though, is
the top-level - what is listed in _our_ application's `package.json` file.

In this code-along, we are going to practice the process of setting up a
`package.json` file. We will also install an npm package or two and use their
functionality in new code we write.

## Objectives

- Practice initializing a `package.json` file
- Practice installing an npm package
- Introduce how to _import_ a package into a different JavaScript file

## Getting Started

Before we can create a `package.json` file, we'll need an project and a project
folder to contain all the files. For this code-along, we'll be building out a
clock application that changes color every second.

In this lesson, a sub-folder has been created for us to use, `color-clock`, that
contains some basic starter files for a project. If you look at
`color-clock/index.html`, you'll see a script tag:

```html
<script src="./node_modules/moment/moment.js"></script>
```

Reading from the `src` value, this script is expecting a folder called
`node_modules` in the same directory as the HTML file. Inside `node_modules` is another folder, `moment` which contains `moment.js`.

There is a second script tag in our `index.html` file:

```html
<script src="index.js"></script>
```

Taking a look inside `index.js`, we can see that this script relies on a unique
function call, `moment().format('MMMM Do YYYY, h:mm:ss a')`. Our goal is to get this code working. **We do not need to change `index.js`**. Instead, we will need to set up a `package.json` file and install the [MomentJS](https://momentjs.com/) package.

## Navigate to the Project Directory

The first thing to do is change directory into this folder in your terminal by
typing the command `cd color-clock`.

> **Note**: The next step will create a `package.json` file in whatever
> directory you are in, which in turn will be where the `node_modules` folder
> is. If you do not change directory into `color-clock`, you'll end up creating
> a file in the main directory of this lesson, and `color-clock/index.html` will
> be looking for `node_modules` in the wrong directory.

### Create a `package.json` File

The `package.json` can be written quickly from scratch, but we actually have a
handy command for creating these files: `npm init`.

Run `npm init` and you will be prompted to confirm the information that will
be stored in `package.json`, starting with the name of the project.

Most prompts will provide a default value. Some are blank and can be left this
way for now. Follow the prompts until the end and a fully constructed
`package.json` file will appear in the `color-clock` directory.

### Add a Script

In the process of creating the `package.json` file, you wre prompted to
write a test script. Let's add a working script in to see how this works.

Open the newly created `package.json` file and look for a section
titled `"scripts"`. Let's replace the default `"test"` script with
an shell command:

```json
"scripts": {
  "test": "echo 'Hello World!'"
}
```

We can now call this script and have it run by using the command `npm test` in the terminal (if that doesn't work, try `npm run test`). You
should see a print out of `Hello World!`.

In all the JavaScript-based labs you've encountered so far, this sort
of script is how we run tests. If you look at the `"test"` script on
previous labs, most will have something like this:

```bash
"test": "mocha -R mocha-multi --reporter-options spec=-,json=.results.json"
```

This is actually a command that you can run in the terminal. This is a call to
the testing package, `mocha`, along with a second package, `mocha-multi` that
helps with reporting. When you run `learn` or `learn test` in a lab, `npm test` _gets called_.

Scripts are often useful for things like testing or to start a necessary
process, like a local server.

### Install a Package

With `package.json` set up, we can now add a package we want to include
in our project.

Now, we're building a colorful clock - the project is simple enough that we
_could_ build it entirely out of custom code. Here's the thing though &mdash;
one of the reasons packages exist and are so useful is because programmers often
run into the same problems over and over. Node packages are written so we don't
have to re-find a solution other programmers have found.

In the case of a colorful clock, we have to deal with formatting time. This is
such a common problem, that a package has been created to help us:
[Moment.js][moment]. Moment.js is a handy package that comes with a number of
functions that make displaying dates and times simpler than trying to figure out
JavaScripts built-in functions.

Let's install Moment.js and incorporate into our clock. To install a package and save it to your `package.json` file, run `npm install`
followed by the package name. In our case, that would be:

```bash
npm install moment
```

This command will add the package to the list of dependencies in `package.json`. When `npm install` is run, all dependencies are installed. If you were to publish this repository on GitHub, other users would now be able to clone down the repo and install whatever is listed in `pakage.json` to get the program working.

If `package.json` file has the correct package, and the node module has been
installed, open `index.html` and you should see a colorful clock appear!

To submit your work in this lesson, you'll have to run `cd ..` to get back to
the main lesson directory before running `learn submit`.

## Conclusion

We've departed from the shore and are now afloat on the sea of code. When
building our own applications, we will often rely on existing packages to handle
specific pieces of a project.

Although we only installed one package in this lab, there are many layers of
dependencies for them, and many of additional dependencies were installed.
It isn't necessary to understand _how_ each of these works. The main thing to
grasp is how to implement and use the specific dependencies you need.

[moment]: https://momentjs.com/
