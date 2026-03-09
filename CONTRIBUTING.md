# Contributing

We are in need of contributors! Please contribute to this reposotory.
When contributing to this repository, if the issue is not mentioned in the 
[org file](https://github.com/Keyboard1000n17/OSPedia/master/ospedia.org)
please first discuss the change you wish to make via issue, email, or any
other method with the owner of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Before you contribute...
You must know what is used in this project. The project uses 
[Eleventy](https://www.11ty.dev/) and [SCSS (Sass)](https://sass-lang.com/).
Therefore, to contribute to this repository, a basic understanding of the 
two is required, along with Nunjucks, the templating language used here.
We only use minimal features, and if you are only writing content,
you shouldn't need to worry about Sass or Nunjucks!

The files for the site are stored under `assets/`.

If you are wondering how Eleventy works, Eleventy takes a template and
a Markdown file and converts the Markdown to HTML and inserts it into the
template, creating an HTML file, and this is repeated for every `.md` file
in `assets/`.


## How do I contribute?
There are a few things you can do:
* Change the file structure
* Change the styles/Making new themes
* Write or update content
The process of contributing for these are given below.

### Changing the file structure
Since this project uses Eleventy, all the structure is stored in
`assets/_includes/base.njk`, which is a template. There are some
other `.njk` files in the folder, but they are mostly extensions
to the base file. For example, `_nav.njk` is an include file for
the base template, and contains the structure for the `nav` element.
If you are changing the file structure, you will likely need to style
them too, which is documented below.

### Changing the styles/Making new themes
The styles are written in SCSS, but you need very little understanding
of it here. There is documentation online (of course), so if any part
of the SCSS file confuses you, you can search it up online.

Styles should be under `assets/global/scss/`, and most styles are defined in 
`_mixins.scss`. Other files are references to mixins in the `_mixins.scss`.
Most mixins have parameters so a mixin can be passed with various styles,
paving the way for easy theme generation.

If you make a theme, make sure that it is related to accessibility, like
high contrast, or an operating system UI, like Aero (Windows) or Platinum
(Mac OS 8/9).

If you make a mixin, be sure to add parameters if the mixin very visbly
modifies the style of the website (which it usually does).

### Writing or updating content
If you are writing content, thank you!

You do not need much technical understanding to write content. In fact,
you don't even need to know how to code at all! The content is written
in Markdown, which is quite simple. You don't need to worry about the
fact that websites are written in HTML, but if you are really curious,
the site uses Eleventy, as mentioned before. Read up there! You should
also add front matter, and if you don't know what to do about the front
matter, create an issue and we will guide you!

If you're adding new content, you should make a new folder with the name
of the operating system you are writing for. Under the folder, you should
make a file prefixed with the operating system name and the version appended
to it along with the codename. For example, this is how the Ubuntu folder 
should look like:

```
ubuntu/
- ubuntu-4.10-warty-warthog.md
- ubuntu-5.04-hoary-hedgehog.md
- ubuntu-5.10-breezy-badger.md
- ubuntu-6.06-dapper-drake.md
```

You can find the content for operating systems online, especially on
Wikipedia. They are in fact the main source of information on the website!

## Work on the project

Your workflow will look something like this:
1. Start the local development server
2. Open the code editor
3. Pull changes (just in case, you don't want a merge conflict)
4. Make changes
5. Commit changes
6. Push changes

You should have a way to use Git. It can be:
* a GUI like GitHub Desktop
* a TUI like `lazygit` or
* the Git CLI.

If you are unfamilliar with Git, it is much easier to use a
GUI. If you are using VS Code as your editor, there is abuilt-in
Git interface.

To actually start working on the project:
1. You need to fork the repository and then clone the forked repository. You can
   do this from GitHub Desktop or run:
   ```git clone https://github.com/Keyboard1000n17/OSPedia --depth 10```
   A depth of 10 means you'll copy the last 10 commits. You don't want the whole
   history!
3. You need to run:
   ```pnpm i```
   For this, you need to install PNPM. Once you install PNPM, open the terminal,
   either in VS Code or the terminal program, and run the command. Make sure to
   navigate to the cloned folder with the `cd` command if you open the real
   terminal.
4. In the terminal, run:
   ```pnpm dev```
   This starts the Eleventy and Sass watch servers.
5. Now, you can actually start coding. If you use a terminal editor like Vim, Emacs,
   Neovim, Helix, etc., look into `tmux`. It will make your experience better!
6. Once you're done making changes, commit them. There is no standard for commits here,
   just make your commits are as short as possible. If you use the CLI, run:
   ```
   git add .
   git commit -m "Commit message"
   ```
   `git add` stages the files to commit. You don't have to push all the files; you can exclude
   a file if it is incomplete
7. Create a pull request!

This is how you start contributing! If you contribute more changes and you have already done all
these steps, you only need to do steps 2-7!

## Code of Conduct

This project adopts Hack Club's system. Professionalism is not required, or encouraged for that
matter. However, you **should**, and really, ***should***, use friendly language and simple
words. Avoid being cold in your conversation! THe formal conduct is given below:

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or
advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic
  address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at [keyboard1000n17@gmail.com]. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

### Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4,
available at [http://contributor-covenant.org/version/1/4][version]

[homepage]: http://contributor-covenant.org
[version]: http://contributor-covenant.org/version/1/4/
