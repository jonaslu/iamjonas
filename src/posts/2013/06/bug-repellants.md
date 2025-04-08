---
title: "Bug repellants"
date: 2013-06-15
summary: "Stop typing at random. Start solving bugs - the right way!! Which is really the only way - ask a bunch of questions verify and repeat"
---

I’ve seen this go down a fair amount of times – myself included. I just know why its happening, right. Its this damn line here – there is something with this function call. Change it a bit at random, run a test, see it fail. Why in the name of S is this still failing? Change some more at random – google what I _know_ is the problem – see it fail again. Sounds familiar, right?

My biases on where the problem was and what caused it has cost me a fair of amount of time wasted. Its also the greatest hurdle to get past (since your ego is involved). About 90% of the time if I don’t solve the bug in 30 seconds – its not the cause I thought it was. It usually turns out to be something very different. And the way to get from here to there is to let go of whatever cause you had pictured in your head.

## Get verifiable data
The first step is to free yourself from whatever you think of the bug. Its crucial to keep all options open and then narrow down on the causes and fixes. Take a step back (and some fresh coffee), free of your biases and look at the situation. You need some kind of data to work with. Just guessing at random will not help you (has it ever really?).

I’m fairly reluctant to label the bug too specifically in order to remind myself that it might not be what I’m looking for. Rattling of a “oh, its a threading issue” too soon might cut you off from the real cause. Perhaps its not a threading issue at all – it just looks like it from a distance.

## Ground zero
First step – where does it occur? In some cases such as an exception, its obvious where it occurs. Or is it? What if its an exception caught and rethrown silently? Go to the line and look at it. Make sure you’re looking at the right line.

Can you get it to fail each time? Can you set up some scaffolding to get it into the fail-state? Are you sure its only here? Are there any other paths to where it seems to occur? Can you do some auxiliary small tests to verify that its really where you think it is?

You need to make sure you’re looking at the right neighborhood. If its vague – acknowledge that its vague so you don’t get the wrong impression of knowing where to look. Avoid labeling it.

## Breakpoints
For zeroing in on bugs that you don’t know where they fail – but you now can reproduce the failure each time – breakpoints is an indispensable tool.

If your language supports debugging via breakpoints – good for you :) If not, use good ‘ol print statements. Put a breakpoint far enough up in the call stack so you don’t miss it (unless its a very specific error, such as a NullPointer – then you can set a breakpoint on the NullPointer exception itself and work backwards).

What does the state look like when the bug occurs? The stack trace? Can you go up the stack trace to see who called you and what their state looked like? Can someone else in turn affect the one calling you and so on? Can you compare this state with a stable state you know does the right thing?

## Change state
If your language and tool supports changing values while hanging on a breakpoint – can you change some parameters to get it working? Can you inspect the state of the variables and the stack trace of what got you there? Is there any other way to get here or affect the state you’re currently looking at? If not, use simple assignments along the way to affect the state.

Input other data than what you normally put in. Does it still fail? Can you alter the code path so it works?

## Last known stable state
Next step once you have established where it occurs is to have something to compare it with that you know works / is right. Is there one? If so, can you revert to it (you did commit did you not?). Start from there and trace forward to where the bug was introduced. If you use git – [git bisect](https://www.kernel.org/pub/software/scm/git/docs/git-bisect.html) was done for this.

Can you compare some logs, files, state, stacktrace of when it works the way you want it to? Can you do some auxiliary experiments to get a working stable state to compare with?

## Git blame
Why is it here? What’s the surroundings of the bug? Can you get some historical facts on why it looks like it does? Has there been much action in this area lately (or things that are related to it?). Does the commit message give you some hints on why?

Just knowing when it was introduced (around what time) may give you hints as to what else was going on at that time what might have caused it. Another useful thing is that it might be a bug that someone now relies on. So its actually more of intended (incidental) behavior. Check that if you do fix this nothing else breaks.

## Read up
This comes fairly low on the list because it should be used with caution. Its very easy to get distracted and mislead by seemingly similar problems that others might have. Do check – but take everything you read with a big pinch of salt. Keep in mind that you’re reading the textual representation of their interpretation of the problem. Maybe they haven’t gone through the same thorough investigation you just had (you did get verifiable data, right? :).

When using some someone elses library its more useful – after you’ve established that the problem is in someone elses library. Has someone else had a similar problem? If so – how did they solve it? If not – how probable is it that you’re the only one in the world experiencing this? That last part is aimed at stopping the “its a bug in the OS” type of answers. If its an OS its very well used and thusly its very probable its an already known bug – and if not it’s probably in your code. Not theirs.

What does any documentation say? Have you made the right assumptions? Is there any pre-cond you’re not aware of? Are you using it the way its meant to be used? Can you get the source for whatever you’re looking at (and start from step #1 again above, this time in their code base?)

## Questions?
This post came off more as a huge pack of questions than I originally had planned – but then again, this is usually how (successful) debugging sessions go. A huge amount of questions thrown around to establish where, why and finally how to fix it. Its by no means exhaustive as every bug and every situation is a bit different. These are just the main tools I usually go for when facing an unknown problem.
