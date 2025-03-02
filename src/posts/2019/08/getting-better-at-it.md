---
title: Getting better at it
date: 2019-08-13
summary: Want to get better at programming? Me too!
---
I love programming! It's even worse now after having done it for almost three decades.

I thought that it would perhaps settle down and become more of a bread-winner and less of an exciting game - but on the contrary, it just gets more and more exciting. Here's why...

## Except it wasn't like that...
Well, not entirely true. Back up about 3 years and I was really in a slump when it came to programming. There were dark thoughts about ageism and that you either got it or not. And that will show at an early age. If it did not - you're were out of luck.

But - even if this was true - branching out on my own meant I had to do **something** to become an at least average marketable product. From there the research started.

## Getting better: what does that mean?
It's a noble and lofty goal to get better at something. It sounds great at cocktail partys (do those still exist?). It's also almost practically useless. What does mean to get better at programming? Is it  possible or is it just innate? How can  you even measure if you are progressing?

Actually you can (to some extent). A while into my research on the topic I stumbled upon a book called [Peak: Secrets from the New Science of Expertise](https://en.wikipedia.org/wiki/Peak:_Secrets_from_the_New_Science_of_Expertise) by a fellow named Anders K Ericsson. Anders K has spent the better part of his life studying how people become experts at something in a variety of fields and incidentally became an expert on how experts become experts.

Is there a common thread to expertise? Luckily for this blog post and Anders K Ericsson - there is.

## You've got to, y'know, practice
The cycle to becoming better (all the way up to world-class performance) is of course to practice. No one is born mastering a skill. During Anders K Ericssons career he has found very few obstacles that a performer could not move beyond (and practically all of them where physical).

So there is a way you say? ... It turns out this is more hopeful but still quite useless advice. How and what to practice? Lots of people practice - but few become experts in their chosen fields. Then these people must be practicing in the wrong way? Or in Anders K Ericsson words - naïve practice.

## Naïve practice
This is practice by doing something over and over with little to no thought on if it works for you or not. The sad thing is that it's hard to see it happening. At the outset of any new field of practice you will improve simply because you're a novice. Anything learned is a new gain.

Progressing from novice to advanced beginner is not that hard. You can usually get pretty decent at something with [20 hours of practice](https://www.amazon.com/First-20-Hours-Learn-Anything/dp/1591846943). But fairly quickly you'll hit a plateau where it starts to level off. This is the part that's hard to see (or admit) since you were progressing just some mere hours ago. Now all that's left is hard work.

As the practiced skill becomes more and more automatic and you stop improving and actually might even become less skilled at it as time goes on as you are now doing the same repetitions (and mistakes) over and over again. And more importantly - you stop paying attention to any progress.

## Deliberate practice
Luckily for this blog-post and for Anders K Ericssons career - there is an anti-dote to the naïve pattern. That anti-dote is called deliberate practice.
Deliberate practice is defined as purposeful and systematic. It is focused attention and is conducted with the specific goal of improving performance.

It's practice where you've identified an area of weakness, broken down the steps you need to do to do that thing well and then sequencing the steps - paying close attention to direct feedback of your progress - until you can do it without thinking. Then you move on to the next thing.

If you want to get better at say tennis - this is not merely showing up at the tennis court to hit some balls (e g naïve practice). This is showing up at the tennis court to work on your backhand up front at the net because there's an area where you often miss.

You'll notice deliberate practice because it's often (at least in the beginning) quite dreary and boring whilst doing it. You are now constantly doing and repeating things you're bad at getting out of your comfort zone - which is where most practice and never venture outside of. What better ways to spend an afternoon than getting your self-esteem in the dumps?

When top violinists were asked if they enjoyed the deliberate practice they'd put in to become top performers most answered - no. They would rather be on the couch eating potato chips.

But wait! There's more bad news.

## The sad scene of computer programming
To get at the top of a discipline via deliberate practice you're best off if the discipline has:

*   Been around for a couple of hundred years
*   There's some ranking or scoring system
*   There's a long tradition of teaching
*   There's a fairly known straight line progression from novice to expert
*   There's a tight feedback loop if you're doing great or if you're fairing badly
  
The canonical example is chess. It's been around for some 1500 years. There are competitions and a world ranking chart. There are schools teaching chess and ample of books all directed at becoming better and reaching the top. The mere fact that chess is played in competition with someone else  provides a good feedback loop and opportunities to find weaknesses to work on.
In a nutshell everything programming is not. Boo... So now I've wasted your time on lots of words just to come to this conclusion.

## Then what to aim for?
There's two quotes from [Max Alexander Kanat](https://max.kanat-alexander.com/) that has stuck with me and has been a guide to what to practice for. First quote goes [like this](https://www.codesimplicity.com/post/the-singular-secret-of-the-rockstar-programmer/)  - "There are no rockstar programmers. There's only people who understand what they're doing far, far better than average or mediocre programmers."

Second from the same post is - "The better that you understand the _most fundamental level_ of your field, the easier it will be to learn the next level." This sounds very much like deliberate practice doesn't it?
It also gives a good indication of what to aim for when starting to practice. To understand what you're doing, you need to know the fundamentals of the level below you (and so forth).

## But seriously, what are the fundamentals?
Somewhere you've got to draw the line - there's so much stuff to learn and only a mere lifetime to waste on it. Things that are too far removed from what you currently know will be harder to understand. The best learning happens at the edge of what you now know - where you can tie and relate the new knowledge to present knowledge.

Let's look around a bit at where most of us are standing for some fundamentals that knowing about will have an direct impact on what you do. See - there are some things that 99.9999% of all programmers use on a daily basis - yet few I've met (including me) actually know how they work.

## Compilers!
You've hade a sheltered upbringing and you're hardly aware of it. Compilers shield modern programmers from the low levels of how a computer works underneath. You know with the CPU registers, cache, memory access and interrupts and whatnot.

Knowing just a small subset of how a compiler works will give you a whole new arsenal in your toolkit - [programs that write programs](https://pragprog.com/book/tpdsl/language-implementation-patterns). Trite as that might sound - once you hit a certain scale of things (say an ORM) automating the creation of new skeleton files will mean saving weeks or years of bug-prone manual work.

There's no need to dive off the deep end if you haven't made a compiler yet. You can start off with the compilers second cousin - an interpreter. The interpreter doesn't compile into vm / machine code but simply reads a text-file and executes the instructions in that file in the native language.

Here's a [good start](https://github.com/kanaka/mal). And here's an even [simpler one](https://eloquentjavascript.net/12_language.html).

When you've done a compiler - here's a really good primer (in manageable chunks) on how to do a compiler [compiling to assembly language](http://scheme2006.cs.uchicago.edu/11-ghuloum.pdf).

## C!
Yes, it's a programming language (the only one) on this list. Why that will help you improve as a programmer has several significant points.

1) The programming language you're using is most probably a descendant of C. There will be bits and pieces that harken back to C even if its not a descendant due to

2) Libraries! There's a vast (vast) sea of libraries out there of C code. There might be bindings or a different implementation in your language but it most probably came from here

3) You'll appreciate modern programming languages with memory management and garbage collection even more
I've been following [this book](https://learning.oreilly.com/library/view/learn-c-the/9780133124385/) with gusto - in part because of Zed Shaws teaching style which I found really enlightening (the parts on making index cards, try to destroy the program etc are things I now routinely use). [This](https://www.amazon.com/Expert-Programming-Peter-van-Linden/dp/0131774298) is also good and really funny.
But the most important reason why is the next:

## Operating systems!
The operating system is out there lurking. It rears its head at times - like when you [run out of file handles](https://www.iamjonas.me/2015/02/chromium-too-many-open-files-tabs-come.html). What is that stuff? It's how the resources of the computer are shared / divided among many programs and how those programs are secured from misbehaving towards each other in turn. That's a fine high level overview - but what about the dirty details?

There are two parts to knowing an operating system (or any library you're interacting with). One is merely using it's services as a consumer. This is where knowing C comes in. Doing system calls requires you to do C. Reaching for another language that has OS bindings is cheating. It probably shields you from the dirty details - which is exactly what you want to know.

The second part of knowing an operating system is building something that resembles one yourself. How enlightening! Processes, threads, memory management all those weird flags and buffer-sizes you sometimes have to set. Now you'll know what those actually mean and why they are there.

This looked promising: [The little book about OS development](https://ordoflammae.github.io/littleosbook/) (its a fork of the [original](https://littleosbook.github.io/): which seems to have died - the fork includes all issues reported on the original book), but at a closer inspection there are several mistakes (see the [issue list](https://github.com/littleosbook/littleosbook/issues)). I've been following [this](http://www.jamesmolloy.co.uk/tutorial_html/) which is more complete than the little book in combination with [this](http://www.osdever.net/tutorials/view/brans-kernel-development-tutorial) and the book above. The three of them makes for a complete tutorial enough.

Not a full programming tutorial - but a fascinating read: [The linux insides](https://0xax.gitbooks.io/linux-insides/content/).

## Networking!
Even tough this ties in with the OS above (since the lower layers of the networking stack is a part of the OS) it deserves a chapter of it's own because of it's intricacies. It starts at your computer but it goes well beyond the OS (physically). First up like with the OS is merely calling the OS operations to set up your [whatever protocol](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml) you're playing with.

Then the second part - can you yourself write a TCP/IP implementation? If only just a small subset and toyish one at that? Now stuff like handshake, half-open connections will make sense. And you'll be so much more ready for diagnosing connectivity problems between whatever your service is talking to.

## Why bother though?
There are topics beyond these four but in my view most of them will touch on these more fundamental layers at some point. This is my plan of deliberate practice to become a better programmer and I've been implementing parts of it for more than a year.

But really, why bother? I said at the outset that I love programming more now than ever. At the same time I also said that deliberate practice as a pain in the butt whilst doing it. What gives?

## It does get better
Another stumble along the way was a book called [So good they can't ignore](https://www.amazon.com/Good-They-Cant-Ignore-You/dp/1455509124) you by Cal Newport. The gist of this book is that what profession you choose does not matter as much as how good you are (or become) at it.

The people who enjoy their work the most are the people who have put in the time to become really good at it. Daniel Pink touches upon the same topic in [Drive](https://www.danpink.com/drive./) - where he traces what seems to motivate an individual. Autonomy, mastery and purpose. Mastery is where this post hits home, and guess what? Our old friend deliberate practice turns up here too.

While actually doing the deliberate practice might suck - especially at the outset - it does get better and better. Not knowing what you're doing becomes the new normal after a while and longer into the journey it's even addictive.

Having done lots of stuff you didn't know you could do, new things become more and more 'yeah, I'll figure it out' since you have actually just done that in the past. Figured it out. And it becomes more and more of a marvelous adventure. Even the most complex of software are made up of the same keywords available to you in that language.

And you know what? As much as it sucks doing the deliberate practice not doing it sucks even more.
