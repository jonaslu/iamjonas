---
title: "Java is verbose? Hurray!"
date: 2013-10-30
summary: "Why javas verbosity is also a good thing"
---

Java has been declared dead for so long that its refreshing to see some [recent posts](http://zeroturnaround.com/rebellabs/10-reasons-why-java-now-rocks-more-than-ever-part-1-the-java-compiler/) actually [disputing this](http://www.drdobbs.com/jvm/if-java-is-dying-it-sure-looks-awfully-h/240162390).

One popular argument for its oncoming demise is that its syntax is being overly verbose. While I agree on some of it (I’d love to have some way of generating simple getters and setters built in to the language) the verbosity does buy you something in return:

## No golf
There is no java golf (based my thorough research of checking the first page on googling java golf vs perl golf) and that’s a good thing. There’s usually only one way to do it. As discussed in [the next big languge](/2013/04/the-next-big-language.html) I think that’s why Java has fared (and continues to) fare so well – it’s syntax.

There is little debate in the Java camp how you write a piece of code the most Java way. More syntactically liberal languages frequently has this: what is the most idiomatic way to write X in language Y?

At a larger project more liberal syntax will turn into a problem because the variations on how you write something slows down the understanding (and thusly the ideas communicated via code). So companies usually set some convention and coding standard – limiting the liberal syntax. Why not have this built in with the compiler enforcing the standard already and save the pain of setting the standard. These standards will usually boil down to limit the same things java does via its syntax – increase readability and decrease the surprise factor.

A bit boring perhaps, but limiting individual style will ensure that code being read is understood faster because variations in syntax will not get in the way.

## Corporate yet open source
Despite being viewed as a corporate language – and the hallmarks of corporatism being patents and closed wall gardens – most java libraries and indeed the reference java implementation itself [OpenJDK](http://openjdk.java.net/) is open source. Politics aside, having a large open source base to choose from means more examples of how you accomplish stuff. See it as a large array of real life example tutorials (without boring prose).

## Verbosity and open source
So viewing the open source space as a large project – since the code standard is set for you (via the compiler) – when you open someone elses library or project – you will more quickly know what they meant. The groking time is less because theres fewer ways of writing it. Do not underestimate this point.

If you aim for your project to go anywhere chances are you will use at least a couple of external libraries. The verbose syntax is easily recouped trying to grok those libraries. If all goes as it usually does you will spend some time stepping and debugging those external libraries enjoying the flip side of a verbose syntax – you get it! Fast!

As all of these qualities are geared towards larger projects they might be a small penalty to pay if you are using it for one off projects or small side stuff. Might
Java is still my go to language if:

*   Its more than a couple of files involved
*   More than me involved (now or if anticipated in the future)
*   It running the application on any another machine than my dev rig

As the verbose syntax pays off in these cases. Only on small one man projects or scripts would I use something else. Do note that this is for projects aimed at going somewhere. There should always be room for experimenting in your programming diet. Experimenting is for learning new languages and ideas on how to code and should not be confused with getting a project off the ground.

So don’t feel bad because you need to use java on your new android project. You’ll recoup the extra keystrokes spent on kludgy syntax with less time trying to understand and debug.
