---
title: "Fantom the language"
date: 2013-02-18
summary: "Introduction to the jvm language Fantom (formerly known as Fan)"
---

I’ve been working on the JVM for about 4 years now. Its been a pleasant ride so far but lately I’ve started to outgrow Java. The JVM platform is brilliant in itself. The speed is almost on par with native code, its easy to install and get an app running – there’s plenty of tooling and performance monitors for it. Its stable and mature, has a large user base and it runs on many platforms (really the top reason for staying with it).

But Java the language feels a bit dated. Or rather, once you start looking at more current languages with a functional edge and other goodies – it’s hard to go back and doing that stuff manually. Granted, Java 8 seems to be getting some of these features like closures and lambda expressions. But there still will be plenty of things to miss given its rather verbose syntax and constructs.

There is a current upsurge of languages building on the JVM – with Scala and Clojure getting the most love. I’ve tried Scala but eventually had to abandon and move on – the hunt was on for a new language.

## Enter Fantom
It was actually [this](http://www.devoxx.com/display/DV11/Is+Fantom+light+years+ahead+of+Scala) presentation of [Stephen Colebourne](http://blog.joda.org/) that peaked my interest.

Written by Brian and Andy Frank for their own company [Skyfoundry](http://skyfoundry.com/) after trying on different languages for their new company (more on why [here](http://fantom.org/doc/docIntro/WhyFantom.html)).

## The pros
(Super) readable syntax. My #1 reason. If you know Java or C# with just a hint of Ruby you can pretty much be productive right away with less typing.

Multiline strings and string interpolation. Probably my #2 reason. The whole templating deal in Java is largely a solution to this problem. There is going to creep in HTML in the code, and it might as well align and read nicely.

Built in make- system complete with versioning of dependent libs. I’ve spent too much time on several languages at the setting up a project phase. Breaking backwards compatibility is tends generate a chicken race where everyone waits for someone else to upgrade to the latest and greatest. In such languages using external libs quickly becomes a trial and error of what versions you can run against what language version (and usually the make tool also is versioned against those libs and the language). In fantom you clearly state in your pod (think of it as a versioned lib) what libraries and what versions of those libraries you depend on. The make tool is built in so its compatible with the release you’re running. You’ll even get a compile error if you try to use a class in a pod which you have not declared as a dependency.

Type system built for reflection. I tend to stay away from reflection in Java because it introduces too much magic in the code. Refactoring code always feels a bit uneasy because you don’t know if someone reflectively invokes that method or class you just removed. It’ll show up in production at the worst time of course. In fantom you’ll get a compile time error if your reflective type is missing.

There’s plenty of dogfooding. One concern many seem to have is that its relatively unknown and unused. Skyfoundry was based on their own language so its being used in production by its own authors. The authors are betting their own company on this language – so its actually backed by a corporation already. There are some replies in this thread to that concern.

## The cons
IDEs support. This is not a bash on the editors out there (f4, netbeans plugin and some text editors) – its just that being on the JVM you’re gonna get compared to eclipse or netbeans. And compared to these they are still lacking – again lots of hard work has been put into these editors so its not a fault of their respective authors. Its just a little hard getting used to after such stellar IDEs in Java.

Its a bit quiet. The community is great and helpful but its still moving rather slow for such a mature (and great) language. I’m hoping more converts show up and make the community a bit more vibrant.

Not that many libraries. Goes hand in hand with the quiet community. There is a CPAN / gem / maven central style repo tool build into the language. But the default address in fanr still goes nowhere. Thibaut Colar has been kind enough to host a repo in the meantime (found here including instructions on how to use it). Also not all frameworks are in that repo. They are scattered across bitbucket and github with no real way of finding them, save for searching the forum, bitbucket and github. Again, more converts means more libs so its a matter of bootstrapping both the community and the libs.

Examples and snippets of how you do things. The documentation is quite very detailed – but as soon as you hit the code there is all those small cases that are not covered. In the begining you will probably write java code with fantom syntax. There are a lot of gems and small shortcuts that make more idiomatic, buts its much a trial and error way there. The distribution does ship with the entire source and its a great source for idiomatic code – but its a heavy digest if you’re not into compiler construction.

## The whys
I’m a sucker for good engineering trade-offs. I really like how fantom focuses on getting work out the door. Its shuns the extremes and often takes the “middle road”. I love this kind of stuff – it just spells good engineering to me.

One thing that’s been hitting me a lot when doing some code is how often I started out doing something – only to find out that there’s already method for that. Compact as the API may be this again seems like the authors knowing what will be useful to put into the API. This makes it a gem to code with, much less manual stuff than a quick glance may reveal.

[Now go! Try it.](http://fantom.org/) I’ll be writing more on it here in coming posts.
