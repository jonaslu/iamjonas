---
title: "Get it right"
date: 2013-12-18
summary: "How to be a faster programmer? Get it right the first time! An obvious advice - but maybe something can be learnt from it?"
---

How to be faster? Simple, just get it right the first time! Duh.
![Captain obvious to the rescue saying its done when its done](./captain-obvious-when-its-done.jpg)

In an ideal world, you’d sit down, start typing and word by word, line by line filling files until you’re done. This is the shortest possible time the task could be wrapped up in.

Meanwhile in the real world things don’t work out that way. But what if we could aim for it? Or at least try to work our way backwards to see if some ideas can be applied? Lets go for as close to right the first time as possible.

## Time thieves
Where then is time spent that would not be spent if you did it correctly the first time? Here’s my list: renaming things, refactoring things, removing things and experiments that didn’t work out.

## Renaming things
Its been said that naming things are [one of two hard things](http://martinfowler.com/bliki/TwoHardThings.html) so there will be some percentage of renaming. But what if you could raise the percentage of correctly named variables from the start?

Now assuming you do not still name your variables test1 and stuff2 when you start out (if you do – stop. Its going to go overboard when you can’t keep everything in your head anymore).

What could be made to improve naming things correctly the first time?

## Prime your mind
A big factor for me when getting names wrong is not taking in the entire context before starting. Some time spent priming your mind might be a good investment. Get a quick overview of the problem and try note down some of the keywords. Also look at the vicinity of there the code is going in. Are there any visible naming schemas already in place?

## Be consistent!
I also tend to fluctuate between files when naming similar things. Staying consistent across files will either be correct from the start – and you need to change nothing – or more easily fixed with a grep or similar should you change your mind later.

Also – start with one schema and stick with it until you’re almost done. Then change everything in one fell swoop. If you are consistent but often changing your mind you will also be wasting time renaming and then renaming again. Wait a bit for it and see how it pans out before deciding if it was right or wrong.

## Refactoring
Your code works and has correct variables but its all over the place. You move things in place and create more classes to spread things out in a way that makes more sense. But some of these refactorings would maybe not be necessary. This is especially true for small experiments or trying things out.

Often you know much earlier what should be moved and what should not. Don’t let your code pick up smells – these will cost more to fix later on. So lean on splitting things out earlier (even though naming the new things will be taxing).

## Removing things
This is things like commented out or dead code. Again these tend to crop up during the experimenting phase when you get a feel for the problem. All of these linger because you decided to keep them there (possibly because they might be used again in the future).

If they are cleaned out the minute they become obsolete there is less cleaning to do in the end. Use a versioning tool like git if you need to revert or bring something back – but get it out of your files and your head until you really need it again.

## First as the final version
All of this is geared towards making your first effort something with the same standard as the end product.
A few minutes on naming schemes, how code grows during development and keeping it clean along the way will pay off big – with lesser iterations before getting it right.
