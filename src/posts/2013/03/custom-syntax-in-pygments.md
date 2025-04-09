---
title: "Custom syntax in pygments"
date: 2013-03-02
summary: "How to create a custom syntax highlighter for octopress using pygments"
---

Guide to get started with a new syntax or tweaking an existing one in pygments.

## Background
As said in [this](/2013/02/fantom-language.html) post I’m gonna cover Fantom a wee bit since I really like it. But alas! ~~There is no builtin code highlight for Fantom (yet :) in octopress.~~

**Edit**: Turns out that there actually is support since pygments 1.5 thanks to [Ivan Inozemtsev](https://bitbucket.org/ivan_inozemtsev) (one of the folks behind the [f4 IDE](http://www.xored.com/products/f4/)), its just not listed in their [list of languages](http://pygments.org/languages/) and it resides in the compiled.py file, not the jvm.py file as you might expect. Still this post might serve as a springboard if you want to tweak the syntax of existing languages or introduce new languages.

## Pygments, whaaa?
Although octopress runs on ruby it’s using the python library [pygments](http://pygments.org/) as its code syntax highlighter. As does [jekyll](https://github.com/mojombo/jekyll) the github markdown generator which octopress was born out of. A python in the ruby jungle? Probably because pygments already has a huge support for different languages – so its already got momentum.

Pygments turns source code to markup (or other formats – lots supported) by parsing the contents into tokens and applying different CSS styles to different tokens. The code becomes more readable and looks more like it would in an IDE. Pygments does this via [lexers](http://pygments.org/docs/lexerdevelopment/) – essentially a large regex matched against code that emits different categorizations of the tokens.

## Installing pygments
Python comes with its own package manager and build tools kit called [setuptools](http://peak.telecommunity.com/DevCenter/setuptools).

This is available in the ubuntu repos so to install it type:

``` bash
sudo apt-get install python-setuptools
```

Next up we install pygments itself using easy\_install that comes with the now installed setuptools

``` bash
sudo easy_install Pygments
```

Pygments enables custom plugins via something called [entrypoints](http://pygments.org/docs/plugins/#entrypoints) in setuptools. In this post I can swiftly move on to how you enable an entrypoint – but when reading this the first time I was stumped. What? Setuptools.. uhm ok. Entrypoints, right… pygments docs kind of went dead there assuming some python knowledge on the readers part. It took me quite a while of googling to understand what setuptools was and how you use entrypoints.

What it sums up to is that setuptools is a build and distribution kit for python which can create a distributable called an egg (I get it, a python lays binary distributable units.. very clever). Entry points are hooks that allow an egg to hook into an existing framework – essentially extending it with functionality later on.

## Module structure
So, lets create an egg to hook our new lexer into pygments.

This can probably be done in more way than this, but from what I got working the module needs something like this as a directory structure:

``` text
|- FantomLexer
   |- fantomlexer
   |  |- __init__.py
   |  |- lexer.py
   |- setup.py
```

The `__init__.py` file can be empty but it needs to be there so its enough to simply touch it. The `lexer.py` will contain the regex lexer for pygments.
The contents of the `setup.py` goes as following:

``` python
from setuptools import setup, find_packages

setup (
  name='fantomlexer',
  packages=find_packages(),
  entry_points =
  """
  [pygments.lexers]
  fantomlexer = fantomlexer.lexer:FantomLexer
  """,
)
```

There is that pygments.lexer entry point! It points to the module fantomlexer (directory for the `lexer.py` file) dot lexer (the source file with the lexer class inside) colon FantomLexer – the acutal lexer class inside the `lexer.py` file.

## Installing the entry point module
Python modules can be either installed as an egg – or simply linked in as a file link. I recommend using the file link style since you can then iterate by simply editing the `lexer.py` file instead of having remember to run install every time.

Open up a terminal in the FantomLexer directory and type:

``` bash
sudo python setup.py develop
```

To verify that its there type `easy_install` and it’ll print an error message telling you what folder the eggs are installed on your machine. On mine its in `/usr/local/lib/python2.7/dist-packages/`. Cd into that folder – there should now be at least two files (and one folder with Pygments egg installed previously) – `easy-install.pth` and `fantomlexer.egg-link`. List the content of `easy-install.pth` and verify that there is an entry pointing to your FantomLexer folder created above.

`lexer.py` is now ready to parse your code into tokens. A quick start is to copy some already existing lexer close to your language and tweak it. To get a highlighted file with your new syntax type:

``` bash 
pygmentize -f html -O full Testfile.fan > temp.html
```

And view the results in a browser.

## Python knowledge disclaimer
This is one of my first close contacts with python so take this guide as a newbie trying to lead other newbies through the process. If you are a python aficionado and see some way of improving this please let me know in the comments. Thanks.

## Ubuntu sided disclaimer
Also, I’m running ubuntu so this guide will be using ubuntu paths and default setups. I’m hoping it shouldn’t be too hard to convert to other distros (or even OS’es). I’m assuming python is installed on your box.

All of the commands above uses sudo as ubuntu apt-get needs sudo – and from there it just cascades, but there is an alternative using [virtualenv](http://www.virtualenv.org/en/1.9.X/#what-it-does) (similar to rvm) that you can run with your own user instead of root.
