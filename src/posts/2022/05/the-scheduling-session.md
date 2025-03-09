---
title: "The scheduling session"
date: 2022-05-08
summary: "Multitasking and interruptions? All bad! Unless you do it yourself. Then it's all right!"
---

Don't multitask. Multitasking is really bad. You'll get less things done and spend precious time context switching. So the general advice goes. Science [backs this up](https://en.wikipedia.org/wiki/Human_multitasking#Research) we're not actually multitasking, we're like a single-core computer context-switching between tasks. And that costs.

Ok. So don't multitask.

## The promise of single tasking
But exactly what is the cost of multitasking and why is it so bad? The first cost is less attention. When multitasking some of your working memory will be occupied with the other tasks. This will slow performance on the current task.

In turn that impacts learning since you need to load stuff firmly in your working memory in order to then transfer it into long term memory. The second cost is the actual task switching. When you jump from one task to the next you have to discard one mental model and load up a new mental model.

This is the same work the computer is doing. Swapping out old context for a new one. It takes time and effort. Then we have the third cost which is attention residue. Cal Newport discusses this phenomenon in his book [Deep Work](https://www.calnewport.com/books/deep-work/).

The task you've just swapped out will still linger in your mind even though it has no value to do so. It's hard to let go of what you've just been thinking about. This again degrades your performance on the current task.

So what do you do then? Single task sounds like a good idea. One thing until it's done. And then you go find another task that you work on tirelessly until it's done.

And then you… and so on.

## Drawbacks of single tasking
Programming is a highly creative act. You have to understand what problem you're trying to solve. Then you have to actually solve that problem. Then you need to structure code to be as readable as possible and efficient while not sacrificing readability.

Then you need to think of ways to verify that it works. Then you review someone else's code and have to think up opinions on that. In all of these activities you are creating something out of nothing. We've talked before about [einstellung](https://www.iamjonas.me/2021/08/i-dont-understand-this-yet.html).

It's when you get too caught up in the same way of thinking to see new ways to solve a problem. We've also talked about [confirmation bias](https://www.iamjonas.me/2022/03/falsify-yourself.html). This is when you're so involved with your ideas you can't take a dispassionate look at the trade-offs on what you've created. These two problems thrive when single tasking. And those two points are bad when it comes to producing good solutions.

The first will cost you time by trying to solve the same problem with the same approach over and over again. And the second will have you choose an inefficient solution at best and a faulty solution at worst. 

It will also cause you to test your code too lightly and avoid seeing and blind spots you have before it hits production.

## Incoming work vs you
Chances are work coming your way doesn't drop in as you're finishing one task. Equally slim is the chance that the incoming work is the exact amount you can handle. It's more like there's 5x more requests for work coming in, and it's coming in ALL THE TIME.

These things carry a mental burden. Even though you're trying to only think of what you're supposed to do, a small part of your brain will fret away at the things you could and should be doing instead.

And while impulsively abandoning tasks are bad, so is staying on the same task when there are other really urgent things that need to be done.

## Interrupt thyself
We have einstellung, confirmation bias and the fact that the task may not be the most urgent thing to work on right now stacking up against single tasking. Interruptions during high focus work are bad as they [cost you time](https://www.researchgate.net/publication/221516226_No_Task_Left_Behind_Examining_the_Nature_of_Fragmented_Work) getting back into a focused state again.

But what if the interruption came at the right time, at the right place and from a person you narcissisistically love and overly respect? That's right, you're going to interrupt yourself.

Used wisely interrupting yourself and switching tasks puts you at a distance, leaving space for creative insight to happen. We have three tools to soften the blow against losing attention, the cost of mental model switching and any attention residue.

We'll go over them before the switch, when making the switch and after the switch.

## Saving context
I've spent a lot of time simply trying to recall what I was doing before I was interrupted. So have you. You know, you're in the middle of something, Bob comes by your desk and complains about the printer, you nod and say a-ha for a couple of minutes.

When you finally get back to the screen with the blinking cursor you're blanking. You have this haunting feeling that everything wasn't ok before you were interrupted but you can't recall what it was. The act of writing down context will not only lessen attention residue later, it also saves you precious time getting back to speed on an old task.

Here's how it's done: you write down as much as you can on where you currently are and what you were doing. I was here (in the code where you should be), doing this, the problem was that, I've tried this and that didn't work, I have this theory that I want to test and so on.

Anything relevant should go in there. You'll get better with time on writing less with more context, but in the beginning opt for verbose rather than cryptically short. This simple habit will bring you much faster back into that context when you're coming back to the task.

Also take a moment to think about where you place that note. It's a waste if it's a fine written context dump that you can't find when you eventually get back. To solve this I've made a special habit of leaving a // WASHERE comment in the codebase with the context dump.

Because it's an uncommon phrase it's easy to grep for and you'll likely just hit yours when you're coming back. Once there, read it, then delete or copy it elsewhere so you don't accumulate // WASHERE in the code.

This will speed up the process of swapping in the mental model you had in your tiny skull before you left off.

![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2fn4yKcF6jo3QIZdEWsed7an5mZXgfLr-c2wDuQ6FBKxUXM5EQeYUiMJp7uX1TkPoI2e5JW3wENbmWojuZ7AXGEHOCSwun-3J_SsiBXbii_KN2LC8TbiHOc99C3PKDhI45FJc22I3shK229p4mhGyoBlXo7Uzee1S8jrwR78Ntgtv2OK92fFkIH0y7g/s16000/WASHERE.jpg)

## The scheduling session
Now we're at the point where we can switch tasks. If only we knew what to work on next. At this point I'll do something I've given the catchy name of a scheduling session. It's deceptively simple.

Plans are a frail estimate or projection of the future and as such often fail. Thus, keep the session short. I set a timer for 3 minutes and at the end I'll have something to work on. Then dump out all the things you have in your head you're supposed to do.

Rank them for whatever ranking algorithm you fancy at that point: how interesting, how urgent, how short or even how random. Then start to work on your new task. Dumping out all the things you have in your head have two major benefits.

It frees up your working memory. Stuff that's unsaid lingers in your mind. Getting it out on paper (or into a buffer) frees you from thinking of it. The second is peace of mind. When I see the list of tasks I almost invariably go "Well, it's not **that** bad". It gives you some relief to see it out in the open.

It's always fewer items than it seems in your head.

![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwWvfuNGj1rVto19vbc2FiVbfB-ICCXYuIgU75H3GX_dGkrSDiQljHsbDtKkfLEeUqHkDi-dD_4loghqCpGB296zB1Wac8VxXfpZ-b1CC6gDGOI4oIuDXfu--nX7_d9wDXdlmtkxWywsqc7mT0-5qgRTyeWmVn4Yiro4GFSLrB13yhvqMGED69awRz_Q/s16000/scheduling.jpg)

## Attention residue
Good, so now we've made the switch and can start on another task. If you've saved context before making the switch properly, the attention residue might not be so bad. You are clearly done and you've written all there is to know right up until this point.

It should be easy to let it go for now since you are going nowhere. You should get all excited about the next project you're about to take on. In theory that is. In practice it's harder because of that feeling of being [so close to nailing it](https://www.iamjonas.me/2020/06/overview-mode.html).

What to do about that lingering attention residue? I go for pen and paper first and write down the context again. And write down that it's time to leave it be for a while. If that doesn't help I try to relax for a short period of time to calm the mind down. 

And in extreme cases when even that does not help I go for a quick walk outside.

## The sweet spot for interruption
So how do you know when to interrupt yourself? Too soon and you'll be breaking off before any real work has been done. Then you are wasting precious time loading up context in your brain only to swap it out again. This would be a clever and tiresome way of procrastinating.

On the other side is staying too long on a task. That is when einstellung and confirmation bias starts rearing their ugly heads and you lose your ability to see but this one way of doing it. So how to find that sweet spot? I use my intensity level as a gauge for when to stop. 

Whenever I start [skipping breaks](https://www.iamjonas.me/2014/12/the-walk-o-doro-1ing-your-creativity.html) and have to come back to the task because I know the solution is just around the corner: this is exactly when I need to stop and switch.

To describe the correct amount of time before interrupting we'd have to use the Swedish word [lagom](https://en.wikipedia.org/wiki/Lagom). Meaning not too little and not too much.

## Slow multitasking
While researching this article I stumbled upon the concept of slow multitasking. Shockingly I wasn't the first to think of how to leverage this. It's defined as working on multiple projects in parallel switching between them when you get stuck on one.

In [the talk](https://www.ted.com/talks/tim_harford_a_powerful_way_to_unleash_your_natural_creativity/transcript?language=en) Tim Harford gives plenty of examples where the slow interleaving has cross-fertilized and insights from one project took hold in another.

With context save, a scheduling session and removing attention residue we make the transition as smooth as possible going from one task to the next. And your wonderful eclectic mix of projects might just spark something bigger than its individual pieces.

The word in Swedish for this would be jävligt häftigt. Meaning hot diggity damn awesome.