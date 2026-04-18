# Contributing

We are in need of contributors! Please contribute to this reposotory. When
contributing to this repository, if the issue is not mentioned in the
[org file](https://github.com/Keyboard1000n17/OSPedia/master/ospedia.org) please
first discuss the change you wish to make via issue, email, or any other method
with the owner of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions
with the project.

## Before you contribute...

You must know what is used in this project. The project uses
[Eleventy](https://www.11ty.dev/) and [SCSS (Sass)](https://sass-lang.com/).
Therefore, to contribute to this repository, a basic understanding of the two is
required, along with Nunjucks, the templating language used here. We only use
minimal features, and if you are only writing content, you shouldn't need to
worry about Sass or Nunjucks!

The files for the site are stored under `assets/`.

If you are wondering how Eleventy works, Eleventy takes a template and a
Markdown file and converts the Markdown to HTML and inserts it into the
template, creating an HTML file, and this is repeated for every `.md` file in
`assets/`.

## How do I contribute?

There are a few things you can do:

- Change the file structure
- Change the styles/Making new themes
- Write or update content The process of contributing for these are given below.

### Changing the file structure

Since this project uses Eleventy, all the structure is stored in
`assets/_includes/base.njk`, which is a template. There are some other `.njk`
files in the folder, but they are mostly extensions to the base file. For
example, `_nav.njk` is an include file for the base template, and contains the
structure for the `nav` element. If you are changing the file structure, you
will likely need to style them too, which is documented below.

### Changing the styles/Making new themes

The styles are written in SCSS, but you need very little understanding of it
here. There is documentation online (of course), so if any part of the SCSS file
confuses you, you can search it up online.

Styles should be under `assets/global/scss/`, and most styles are defined in
`_mixins.scss`. Other files are references to mixins in the `_mixins.scss`. Most
mixins have parameters so a mixin can be passed with various styles, paving the
way for easy theme generation.

If you make a theme, make sure that it is related to accessibility, like high
contrast, or an operating system UI, like Aero (Windows) or Platinum (Mac OS
8/9).

If you make a mixin, be sure to add parameters if the mixin very visbly modifies
the style of the website (which it usually does).

### Writing or updating content

If you are writing content, thank you!

You do not need much technical understanding to write content. In fact, you
don't even need to know how to code at all! The content is written in Markdown,
which is quite simple. You don't need to worry about the fact that websites are
written in HTML, but if you are really curious, the site uses Eleventy, as
mentioned before. Read up there! You should also add front matter, and if you
don't know what to do about the front matter, create an issue and we will guide
you!

If you're adding new content, you should make a new folder with the name of the
operating system you are writing for. Under the folder, you should make a file
prefixed with the operating system name and the version appended to it along
with the codename. For example, this is how the Ubuntu folder should look like:

```
ubuntu/
- ubuntu-4.10-warty-warthog.md
- ubuntu-5.04-hoary-hedgehog.md
- ubuntu-5.10-breezy-badger.md
- ubuntu-6.06-dapper-drake.md
```

You can find the content for operating systems online, especially on Wikipedia.
They are in fact the main source of information on the website!

## Work on the project

Your workflow will look something like this:

1. Start the local development server
2. Open the code editor
3. Pull changes (just in case, you don't want a merge conflict)
4. Make changes
5. Commit changes
6. Push changes

You should have a way to use Git. It can be:

- a GUI like GitHub Desktop
- a TUI like `lazygit` or
- the Git CLI.

If you are unfamilliar with Git, it is much easier to use a GUI. If you are
using VS Code as your editor, there is abuilt-in Git interface.

To actually start working on the project:

1. You need to fork the repository and then clone the forked repository. You can
   do this from GitHub Desktop or run:
   `git clone https://github.com/Keyboard1000n17/OSPedia --depth 10` A depth of
   10 means you'll copy the last 10 commits. You don't want the whole history!
2. You need to run: `pnpm i` For this, you need to install PNPM. Once you
   install PNPM, open the terminal, either in VS Code or the terminal program,
   and run the command. Make sure to navigate to the cloned folder with the `cd`
   command if you open the real terminal.
3. In the terminal, run: `pnpm dev` This starts the Eleventy and Sass watch
   servers.
4. Now, you can actually start coding. If you use a terminal editor like Vim,
   Emacs, Neovim, Helix, etc., look into `tmux`. It will make your experience
   better!
5. Once you're done making changes, commit them. There is no standard for
   commits here, just make your commits are as short as possible. If you use the
   CLI, run:
   ```
   git add .
   git commit -m "Commit message"
   ```
   `git add` stages the files to commit. You don't have to push all the files;
   you can exclude a file if it is incomplete
6. Create a pull request!

This is how you start contributing! If you contribute more changes and you have
already done all these steps, you only need to do steps 2-7!
