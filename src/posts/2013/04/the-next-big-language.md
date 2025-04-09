---
title: "The next big language"
date: 2013-04-24
summary: "Everyones favourite prediction - what the next big language will be. Meta-style"
---

This is a hot topic, there’s no shortage of blog posts already. So all the reason for me to join in and throw my prediction in the pile.

But first a trip down memory lane. The first language used in teaching I encountered was [Pascal](http://en.wikipedia.org/wiki/Pascal_\(programming_language%29). The more I’ve thought about it the more it stands that this was for a good reason. Pascal had strictness on form built into the language. Turns out this even had a name wich I didn’t know about – [structured programming](http://en.wikipedia.org/wiki/Structured_programming).

## Why Pascal was used
There was more to Pascal besides the actual mechanics of programming – to emphasize structure and form. In the small you were given your first lesson in how to successfully communicate your ideas through code. Most probably this was only to your teacher for passing the assignments or for your future self revisiting the code some months down the line. But it was an important first lesson.

## Java/C# is the Pascal of the industry
The much cursed verbosity of these languages are actually IMHO their reason for making it as an industrial language. They force you to flesh out more on your intent and expose more details (that’s where the devil hides) of your ideas. More typing for you – but more benefits for the large team or corporation.

I think this is why javascript is having a resurgence and why node.js has been so successful – the introduction of the module pattern and that variables and functions are hoisted to the top of each function. It’s really a blessing in disguise because you’re now forced by [Crockford](http://en.wikipedia.org/wiki/Douglas_Crockford) via [jslint](http://www.jslint.com/) to declare variables in the top of the function. This helps clear up intentions. Same goes with the module pattern. You’re more bound to one common form and others can more easily spot what you’re trying to convey.

Java has this built in – you’re forced to follow a pretty strict pattern when writing code. Perl does not and I’m thinking this is why it hasn’t been used that much for large projects despite being around for so long. Its good for the one-off scripts that you and a few of you’re colleagues on the same team will read. But if you scale it up – there’s [too much freedom](http://perl.plover.com/obfuscated/) or rather too much room for personal style. Ideas will be hard to convey unless everyone agrees on a formal standard and what better way to enforce a standard than built into a language?

## The form should help collaboration
Every new programming language that’s coming out is touting type less get more done as its main selling point. Its an amicable aim to reduce the amount of code having to be written since bugs tend to correlate with the lines of code. There will be abundant examples of how you can write this or that problem in so few lines of code compared to that language. All good so far, its got to start somewhere and you the programmer is its main target for adoption.

But how few lines of code you can write something isn’t really a good gauge of a new language. How well someone can understand your intent of the code you wrote is much more so. Remember that you’re seldom writing code for yourself but most of it for others (or your future self that tends to forget what that so compact one liner really meant).

This has to be if not more important than at least as important as reducing the lines of code. The reduction should only be made if the intent and message is still as clear sans the lines reduced.

## The next big language
My bet is that it will be strict on form and structure. It maybe will reduce the lines of code somewhat, but not by as much as you’d hope for – because transparency cannot be sacrificed for terseness. It just won’t work across larger code bases and teams.

I think it won’t be decided by you the programmer as much as it will be decided by teams trying to get stuff done. In true pragmatic fashion lanugages that do not convey the message clearly enough will be thrown out in favour for languages that do. Call it democracy by pragmatism.
