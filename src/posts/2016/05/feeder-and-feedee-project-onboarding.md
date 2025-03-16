---
title: "Feeder and feedee: project onboarding"
date: 2016-05-01
summary: "Tools to onboarding a new person onto a project with more gained and less time wasted"
---

I've recently switched from being the longest standing person on one project to being the newest on another project.

In doing so: I've witnessed both blank stares from people trying to take in a way too much information dumped on them. And I've myself participated in estimation rounds where I was staring blankly into the void for not understanding anything being discussed.

## The problem
The thing rarely spoken is the huge knowledge gap between newcomers and old-timers. Umpteen years of domain knowledge will cause trouble in estimation sessions.

This is what Fred Brooks talked about in [the mythical man month](https://en.wikipedia.org/wiki/The_Mythical_Man-Month). Newcomers will slow down the project because of the knowledge gap. But having been on both sides I think that there are more effective ways of onboarding someone.

## Map and feeder analogies
A new person(s) arrives at the project. From hereon named the onboardee since i like words with to ee:s in them. If we assume that the onboardee fills all requirements: knows the language and techniques du jour, speaks agile, lean and kanban the map of the application and domain would look something like when starting out in an RPG (think old warcraft). Black means unknown:

![Map of the earth with all countries black](./map-of-a-black-earth.png)

The onboarder and the onbardees job to both uncover the map and by well chosen new spots.

These are fine and quite obvious words, but how do you actually do that whilst keeping the onboarder and the onboardee as productive as possible? We need the onboardee understanding more and more of the big picture to actually produce code and also not inadvertently screw things up.

Well in order to get fat on that knowledge you need a feeder and a feedee. If you are going to get big and chubby fast someone needs to direct the feeding and someone needs to eat.

![Horse eating from a feeding bag](./horse-eating-from-a-feeding-bag.png)

## It's going to take time
The boring disclaimer: there is no silver bullet. No-one gets fat overnight. No one gets ripped overnight (or in X weeks despite the [PT:s hating](http://knowyourmeme.com/memes/trainers-hate-him)).

Your brain needs time, sleep and doing dishes to physically store and build memory traces. There is no way around this and in fact - all of the methods below are designed explicitly to let the brain absorb a reasonable amount of information at the right level and build memory traces of that information. 

With this upper bound of how much information you can take in during a day - there are still better or worse ways on how to utilize those memory traces given. Memory and understanding builds much faster if you can relate things to already known things.

Or in essence: [chunking a subject](http://www.catchmecode.com/2014/10/do-only-punks-chunk.html) with help.

## Onboarder: the tourist tour
The most serious mistake is to go off the deep end and dive into too much details. We need to go from general to carefully selected detailed knowledge. Going the other direction the details will just confuse and possibly contradict unless the whole domain is known.

Enter the tourist tour.

![A tourist taking a picture with a camera](./tourist-with-camera.png)

It's a 10-15 minute long session done once or twice per week by the feeder for the feedee(s) where the feeder shows the tourist attractions = main landmarks of the application. How would a typical user interact with the application? It there a main flow? What problem does it solve? Akin to how you would present a user manual for a new prospect.

Make this session very very informal. No meeting rooms, no booked agendas - simply gather around someones screen. This will dampen the "stupid questions factor" where the onboardee will act like they understand because of fear of looking dumb.

Also: try to make the session interactive by asking questions to the onboardee. Did you get that? What did this do? Have the onboardee repeat back in their own words what you just said. Sweet memory-traces here we come!!

The key is to feed more general knowledge about the domain the application lives in and the application itself that the onboardee can then latch onto the detailed small islands where the work must begin.

The onboarder is responsible for trying to serve knowledge in the most useful and efficient way. This means thinking through what are irrelevant details (for now) and what are the general gist of a domain and application. Things have to make sense with only the knowledge presented and up till now known.

It's good if the onboarder has some self-insight trying to think back on what they did not know coming to the project.

## Dreyfus model
If you've read the fabulous book [Refactoring your wetware](https://pragprog.com/book/ahptl/pragmatic-thinking-and-learning) by Andy Hunt of pragmatic programmer fame you are probably familiar with the [Dreyfus model](https://en.wikipedia.org/wiki/Dreyfus_model_of_skill_acquisition). If not - it basically states that as you go from novice to expert you progress from relying heavily on guidance and rigid rules to a more holistic and intuitive approach. The key asset for progressing is deep knowledge and understanding of whatever you're working in.

This model will dictate how an onboardee can efficiently can contribute to the project. And what you need to do to get from novice to the next stage.

The onboardees work will be with very isolated small tasks that require minimal overall knowledge and can be rigidly specified (think small bugs). They are like small isolated islands in your overall map. Uncovering an area is very costly at first so if an area has been uncovered the payoff is highest if the task is centered there (and only there) in that area.

The problem is that it's very easy to get stuck in this mode and never achieve general knowledge. It's also comfortable for the onboarder as they get to waste less time on the onboardee.

This is also the place where self-deception happens. The onboarder thinks the onboardee gets it (forgetting the years of implicit knowledge acquired themselves). The onboardee is just happy to be contributing and will smile and nod when details fly all around because the onboardee thinks that it will probably make sense sometime later.

Or plain just zones out because there is too much to take in.

## Onboardee: world building sessions
Getting general knowledge of an application can can be sped up dramatically if the onboardee is willing to put some effort into it.

Between the onboarding sessions the onboardee must take regular breaks (2 or 3 times a day at first) and spend some minutes actively connecting whatever you are working on with the rest of the world.

![Map of the earth with some spots visible](./earth-with-some-visible-spots.png)

Recall from memory what was said at the last onboarding session and write down questions for the next session. Accumulate feedback for the onboarder to act upon - the onboarder cannot after the initial sessions keep track of what the onboardee do and do not know.

Feedback that information so that the onboarder can make calls on if explaining a new area will pay off right now - or if it's irrelevant to the big picture understanding.

## Estimates and planning
I include estimates since they happen in the epicenter of the knowledge gap. They are often promoted as knowledge transfer sessions but since this requires stern discipline from all parties involved. If they are too long and too detailed they will just end up being [sheep dunking](http://adam.kahtava.com/journal/2009/10/05/the-sheep-dip-developer-boot-camps-training-events-and-evangelism/). You are working against how the brain builds memory traces - via useful relevant information in small pieces with plenty of time for repetition.

The key to effectiveness is to give the onboardee a reasonable chance to contribute. Two points (and one addendum) needs to be considered.

1. Notice is given what areas will be estimated.
2. The areas of estimation are located close enough to the onboardees current knowledge.

But wait! This sounds like a job for.... the tourist tour! For each area that is up for estimation, schedule a tourist tour of that area and allow at least a day (preferably more) for the information to stick before entering estimation rounds.

The addendum is: Keep estimation rounds short and schedule more if needed.

A wall of information will cause even the most keen brain to discard information. If a thing is going to stick, it has to be favored over something else. Just like starting to speak a a second language - the fatigue of trying to understand will make the estimation session fruitless after a short period.

## Playfüllness für alle
The last thing you want to do is corporatize the onboarding sessions. I thoroughly believe that the best learning happens when the stakes are low and there is ample room for any type of questions. I won't say dumb questions because that's the point.

After a while - mix up the sessions to relieve some pressure from the onboarder. Have the onboardee show off what areas are known at the screen. Or let a new person try to accomplish something during these sessions without giving hints as to how first.

There is ample room for variation - as long as an eye is kept on what we're trying to achieve - a full uncovered map with no blank spots starting with the most obvious landmarks and ending with small obscure details.

![Map of the earth with all countries visible](./earth-with-all-countries-visible.png)
