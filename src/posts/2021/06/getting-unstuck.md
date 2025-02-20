---
title: Getting unstuck
date: 2021-06-18
summary: You sigh. Maybe the compilation didn't work? You recompile and run it again. Nope. Still the same problem. You stare out the window.
---
You're stuck. But what exactly is this thing we call being stuck? It's when your mental model of a program does not match the actual program. You expect it to work in a certain way but it does not. As a developer this happens daily.

Thankfully some hiccups are resolved easily and you move on. But some are not. Being stuck is dangerous as you can easily go off on wrong tangents and down rabbit-holes.

## Two shades of stuck
Being stuck can come in two shades. The first is when you're missing information. I'll call this not knowing (yet). The second is when you have all the information necessary but it's not related in the way the program is. I'll call this you don't understand (yet). There's a [part II](https://www.iamjonas.me/2021/08/i-dont-understand-this-yet.html) that deals with things you don't understand (yet).

They stem from the same source: your mental model of the program is incorrect. An example of the first shade not knowing (yet) is when you call some well known third party library routines and the program does something wildly different.

The way you're calling those third party routines is not right. Because the error is in your code ([select isn't broken](https://pragprog.com/tips/)) you're very likely to miss information on how to call it and get unstuck.

An example of the second shade not understanding (yet) is when a pure function you wrote returns something else than you expect it to. Your view of what the function should do and what it actually does is off.

Since you wrote it you're very likely to have all the information necessary to fix it and get unstuck.  

Because there is an overlap, how can you tell which one of the two modes you're likely to be stuck in?An indicator is the time spent programming in the new language of framework.

The longer time you've spent, the more probable it is it's things [you do not understand (yet)](https://www.iamjonas.me/2021/08/i-dont-understand-this-yet.html).


This post will focus on the first shade of stuck: Not knowing (yet).

## Ego is the enemy
The longer I've programmed the more likely I am to get badly stuck once I do get stuck. Why is that? My fragile inflated ego. Programming for a long time equals the "I know what I'm doing" mindset.

It is true that I know far more now than when I set out on this crazy journey. The "I know what I'm doing" mindset lets you take shortcuts by making assumptions on how things work.

Some of the time you get away with this. But when you don't it backfires wildly. "I know what I'm doing" makes it hard to recognize what you don't know (yet) and hard to admit.

Expectations will also be higher because of accumulated experience. This makes it even harder to admit.  Simply recognizing the possibility helps you get off that ivory tower. I try to say it out loud: "I might not know this (yet)".

There. It feels better now. Let's fix that!

## The good case of not asking
Before thumbing away at the manuals: there are things you can read up on and there are things you can't read up on. In the first category we have things that are written down and accessible to everyone.

Programming languages, frameworks, algorithms, data structures, patterns etc falls into this category. Here you could (and should) learn by yourself. The experts started out where you did and have learnt from the same sources that you could.

Here it's wasteful to ask. Not only because you would be wasting someone's time, but because you will learn it better and at a deeper level if you look it up yourself.

The harder it is to figure out the [better it'll stick](https://en.wikipedia.org/wiki/Desirable_difficulty).

## The dumb case of not asking
The second category is domain and project knowledge. This is likely not written down and often quite arbitrary. "Oh Steve liked to write in a functional style. He quit years ago, we're slowly migrating off it".

It's stuff that exists in the head of someone who's been around on the project. This is at best random to you. In this category it's wasteful not to ask. An approach to learning this is detailed in [feeder and feedee post](https://www.iamjonas.me/2016/05/feeder-and-feedee-project-onboarding.html).

It's easy to file stuff into this category, but when In doubt assume it's stuff you can read up on. Even if it turns out it isn't. The answer will stick better via the [generation effect](https://en.wikipedia.org/wiki/Generation_effect). Always give it a good go before filing it into the can't read up on category.

## Choose sources wisely
So here we are in the first category: things we can read up on. In the book [Ultralearning](https://www.scotthyoung.com/blog/ultralearning/) by Scott H Young there is a chapter devoted to the importance of choosing your first sources wisely (dubbed metalearning).

Using the wrong sources could mean learning unimportant concepts or worse flat out wrong information. Over the years I've found that good sources tend to be any official page the language / framework have.

Second, I look for books with many recommendations. The reason is that both of these sources put a lot of thought into how to best organize material for newcomers. This means starting off with the basics.


If it's an open source repo I clone it and inspect the top-level folder. Don't go any deeper or dig into the source. Just clone it. I do this because it takes the magic out of it. It is written in some language using constructs I could learn myself after all.

Then let it sit so I can go back to it once I know enough.

## Learning the basicks
When you're new to a subject everything is equally important because you don't know (yet) what's not important. Trying to understand without having the base foundation is a huge waste of time.

The good sources start with these key concepts because everything else builds upon those. Find them out and understand them. Be aware of skipping ahead. The concepts can be deceptive as one concept can mean something else in another language or framework.

These are the worst cases of where the "I know what I'm doing" mindset backfires. An example is the concept of regexp:s. While the same basic idea, the engine, its rules and return values slightly differ from language to language.

Assuming you know regexe:s because you know one variant of them will get you stuck firmly. Good sources usually come with examples. Do all examples by hand yourself without copy pasting. This means looking at the example, then switch over to your buffer and write from memory.

This is the [active recall effect](https://en.wikipedia.org/wiki/Active_recall) at play.

## Learn to self-help
Once the basics are down we have enough vocabulary to understand and make sense of a more helpful answer. A few cases of stuck will fall away directly because of this. If it doesn't we haven't yet hit upon the information we need to get unstuck.

In a spoken foreign language one of the best questions you can learn to ask when the basic words are down is "what does that mean?". This will hopefully get you back an explanation of the concept you do not yet know in that language.

The key is that the explanation is given in the target language and not a translation. Subtle clues and nuances are lost when translating. And you're not practicing in the target language anymore.

If the explanation is given in the target language it will give you more things to read up on and understand in turn. Your knowledge and understanding expands rapidly this way.

In programming the question "what does that mean" translates into asking **where** to look and then looking at **what** is going. Being able to do this will help immensely on what to read up next.

## States and stacks
**Where to look** equals getting a call-stack out so you can trace the program flow. **What is going on** equals to dumping out values of variables at some location.

Here it's wise to shop around for a while on good tooling. Spend time using debuggers which combine the two above. See if you can print stack-traces to the console. See if you can dump out state from a program using some serialization format.

Try to find out if there's a [pry](https://en.wikipedia.org/wiki/Pry_(software)) equivalent in your language where you can influence a program at runtime. If your language has a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) check that out. Anything that can give you the stack and the state is worth at least looking at.

The more context you have on an unknown part the better "what does that mean?" questions you can ask. You've now bootstrapped yourself into the self-help club.

You can now ask questions, investigate those questions and read up more where those answers take you.

## Seek out pitfalls
There's a second source of information that more experienced programmers are very likely to ignore because of the "I know what I'm doing" mindset. It's admitting you are a beginner. And as a beginner you will be doing what all beginners tend to do. Mistakes.

Google a while for common mistakes, top pitfalls, troubleshooting and so on in your topic of choice. Read up and, just as with the basics examples, do any examples you find by hand without copy pasting.

This is the stuff that people like you are likely to encounter even though you know what you're doing. Having heard about them and done them yourself by hand will enable you to more easily spot them again.

## The self-help club
Since a young age I've made it my business to **not** ask for help unless I've really really tried myself first. It's probably my fragile ego again not wanting to ask stupid or trivial questions.

But in hindsight I'm happy to still be doing so. I learn at a much deeper level. This makes me look slow at the outset but given some time I usually start knowing a lot. This is the interest rate of self-help compounding.

It's a good feeling to be able to say, "Yes, I've already tested that", "No, that doesn't work because of this" and "It's happening at line 43 with the variable having the value 5". Once asking a question you're likely to get counter-questions back. Anticipate and answer those yourself first.

After a while you become self-sufficient. This is a must when mastering something. Once you get far enough there won't be any experts left to ask and you have to rely on yourself. Knowing how to self-help becomes mandatory. Might as well get that shit out of the way.

I've also noticed I become more fearless. Done enough times you know you can get unstuck at anything because you've gotten unstuck previously. Not to mention the time you save by not being stuck for so long.

In me this translates into an even more inflated and fragile ego. I'll wear the "I don't know what I'm doing" badge and the inflated ego at the same time while being oblivious to the irony of that statement in a zen-esque, koan kind of way.

![dont-know-club](./dont-know-club.png)
