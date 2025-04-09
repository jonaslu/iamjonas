---
title: "If It Weren't for the ... Customers"
date: 2013-03-24
summary: "Code reuse increases business profits and customer satisfaction. Everyone wins right? Not so fast there is a cost to code reuse. But sharing ideas is a win win"
---

I’ve had the luxury of being on a team having a dedicated code base to only one target user. Sure, that user has some different groupings within – but on the whole its coherent enough to see it as one customer. We’re basically free to model the software after this one customer. Its been a hot bed for invention and full speed development (in a good way).

For the sake of taxonomy – here’s what I mean by a target user: If Bob and Alice both are accountants they might be one target user. It depends on if they have the roughly the same workflow and crunch roughly the same numbers. Then they’re one target user. In all other situations they’re two (specially if Alice is really a welder).

## Let’s share!
So it came up for discussions with the business side this week that it would be benificial to bring other customers into the fold. I’m really split on this. I guess I can see the business benefits of it. We can now make an active pitch to a new segment of customers. But the thing is we’ve come from just that. We took the product from a 30+ different customers in the same code base and branched out. And we’ve cleaned and thrown out things to make it manageable thusly transforming it into the need of this one customer. Now the product looks different enough from where we started to be marketed to a new group of customers.

## The dilemma of good software
There’s some kind of paradox – the best software naturally appeals and serves the most people. It would be rather pointless to put hours of work into something that only a few can use. Its supposed to help folks, preferably lots. But lots of people means lots of compromises and complexity which equals bugs. And buggy software isn’t good for your sanity or for your customers satisfaction. The only good way to reduce bugs is to reduce complexity (= code), but then it will appeal and help less people. My take is that the sweet spot lies much farther on the one target user side. Here’s why:

## Limit the scope of target users
If you have a low target user count you can tailor it to their exact needs. You’ll help fewer people but in return you can help these fewer people extremely well. And your software will be more stable and malleable into what they need. Code can be cleaned and optimized much harder because its not going to affect someone else.

With several target users in the same code base – things may superficially look the same – but in detail turns out to most often not be. If Bob does income and Alice does asset accounting it might on the surface look like they’re doing the same things (moving numbers around) but in detail its different numbers moving in different ways. And that is solved by either compromising – both gets less then what they wanted – or you raise the complexity (and bug count) by making it essentially two pieces of software in the same code base.

## But is this practical?
No. Of course not. You have to accept some compromises and some ifdefs on sections in the code. Even with one target customer its going to happen. But strive to keep it as low as possible. This is of course from a coders standpoint. From a business standpoint I guess more target users in the same code base means you serve more with less effort. You can target groups that are similar saying “look here, we’re no 1 in accounting software with all these fine customers already on board. Join us, we’ll make it fit for you”. But its a curse in disguise because you also give lip service and raise the bug count for all target users already sharing the code base by making it fit one more.

I’d err more on the great customized and tailored service with less bugs and more shared ideas approach. I also think that shared code base will dampen creativity and exploration of pushing the software in new directions. And that in turn means missed business opportunities in helping your most important customer – the returning kind.

## Let’s share ideas! Not code (base)
Ideas are cool in that they are not fixed in form. One idea carries some concept that may or may not apply. But it can be fuzzy on the details which can be filled out to fit the specific situation. And it can spark new ideas that fit better.

Shared code base is fixed in form. More than stake holder is depending on it being the same way. If someone wants to evolve it or break from it, all target users have to agree on this – otherwise you’re stuck. I’m not saying don’t ever share code. Do share code.. as a means to share ideas. But don’t share code mechanically just by saving a few keystrokes or fixing bugs faster (because on the flip side you’re probably introducing bugs faster too). Instead at each turn consider branching out a very possible option. Abandon the safe what is for the more exciting what could be.
