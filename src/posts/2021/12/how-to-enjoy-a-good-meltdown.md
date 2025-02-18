---
title: How to enjoy a good meltdown
date: 2021-12-21
summary: It's down! Production is down! You're working at an intense pace yet you have a serene calm feeling. You are prepared for this. It's showtime!
---

At most places I've worked there has been one or more great meltdowns. A great meltdown is when an important part of production is down or not working properly. As I work in web development this means the site is down.

It could be the server restarts every 2 minutes, the database doesn't respond or some certificate has timed out.  All are errors that hit the end users of your product. Naturally this is not appreciated by anyone.

You're tasked with fixing it right now, because you built it, mkay? This is stress inducing and stress is the last thing you need in order to think clearly and fix it.

## Do you even prepare?
Preparing for a particular meltdown is not possible. If it was, you'd have fixed the root cause before it became a meltdown. A meltdown is a black swan event. Something so out of the ordinary that you could not have foreseen it.

Preparing for a meltdown in general is on the other hand possible. A great meltdown is caused by something, however random it seems. But things are only random if you don't know how they work and what they do.

Hence your greatest line of defense is a little knowledge of all the moving pieces in your entire system setup.

## Two principles
To drive the process of accumulating this knowledge I've used two principles. The first principle is "I'll check it out" and means whenever I hear about a system, technology or something that relates to the product I'm working on and I haven't heard of before I'll go and briefly check it out.

It doesn't matter if it's code or a proprietary tool. I'll use the technique outlined in the "[Want to be great? Know a lot](https://www.iamjonas.me/2021/10/want-to-be-great-know-lot.html)" post. I'll note down some low number of important concepts in that system. I will then try to ask someone who's knowledgeable in that system for a very brief introduction.

I also make an effort to find out what other systems this thing is linked to in turn in order to get some kind of eventual system map outlined. The best place to start if you're just getting into this is locally and spiral out from there. It will make much more sense if it's initially linked to your day to day job.

I bet there are services that you start up when developing locally that you've never taken the time to examine. Do that first. What does it do? Why do we talk to it? Who does it talk to in turn?

## Clone out all repos
I always keep a folder called reference/ on my machine where I clone out any open source repo I encounter while applying the "I'll check it out" principle. Once cloned out quickly scan it for folder structure and file names.

Then check if there's any READMEs, configs and sample some random files that seem important. Just briefly so you've seen it. When the great meltdown hits, being able to search the source itself is very helpful.

Even if the error message is crisp and clear, getting vital context on its surroundings can be of help. Just make sure you've got the right version checked out so it matches what's running in production (and automate this).

## Love the log
The log merits a special mention. Most applications that run unsupervised output logs as a way of reporting their internal state. Logs are invaluable in trying to find root causes.

The principle "I'll check it out" applies to logs too. Whenever you hear of an application in your system setup, see if it outputs any logs. If it does spend some time examining the log. Try to note what it looks like when the application is in a normal state.

Note the size of the logs and if they can be eye-balled or if text manipulation tools are needed. Sometimes logs are aggregated into a log ingester. If so then check that out too.

What systems are reporting, how do their raw logs look and what query options do I have?

## Be where it hits
The purpose of spiraling out from your local machine is to eventually end up in production. Even if production means different things to different programmers - e g the actual device for an embedded developer, the browser for a frontender or the server for a backender, this is where the great meltdown will hit.

Clearly the more you know about it the better. And the best way I know of learning it is to interact with it. Or poke around as I like to call it. But here is another problem. It's production and not knowing what you're doing can cause great damage.

So most places keep access to production to a minimum. Be this server login access or deploying new versions with more telemetry. Why? Because we don't know if you know what you're doing.

I've found over the years that the gateway to proving this is whenever you hear of a manual step (the canonical example is deploying a new version) and ask if you can sit in, watch and take notes.

Or even better, if you can get them to instruct you on your machine so you can screenshot and take notes yourself.

## Do it once
Then ask if you can do it the next time or anytime soon. This is the second principle I apply: "Do it once, just to have done it". Get that manual step done so it's not magic and scary anymore. This has almost always been appreciated as any manual steps are boring and disliked.

Simply being interested in sharing the burden will give you a shot at proving you know what you're doing. Then do it carefully. You'll be given the opportunity once or twice. Do this over and over with any new manual step you hear of.

Before you know it you will have seen, interacted and been given access to most other systems besides your local machine. Often all the way into production. It's a gradual process, yet the more systems you have seen and have access to the more information you can gather when the great meltdown hits.

Needless to say, treat this access with respect and care. When given access it's important to check stuff read only out whatever that means in your field. For me as a preferred web backender it's the load on the server, where logs are kept, any other applications running in there, network load etc.

Really big places have a hard limit on what some teams can do. That's fine. You can still ask to sit alongside someone on a different team and see what they're doing. Ask the questions you would ask when poking around yourself.

It's less tangible, but nevertheless important information.

## Automate all the things
Take every chance you get to automate. It always feels like a waste of time when doing the automation. Such is the nature of automation - doing it manually wins this time and probably the next time. But soon you've recouped your investment.

Prime candidates for automation in my field are getting into important systems, downloading logs locally, calling any health check endpoints even down to opening links in a browser to the correct environment.

Take stock of what takes too long and is too error prone. You don't want to be looking in the wrong place when it hits.

## Freedom to move
There is an extra silver lining to checking stuff out and doing it once to have done it. What keeps change at bay? Given that it's a reasonable thing to do in cost vs benefit: Fear. Be it yours or the managers fear, but this is what holds innovation and doing things that need to be done back. Fear of breaking things because there are unknowns.

When you know a little about every moving piece of your system setup you can not only accurately judge the impact of changes, you can also fix any mistakes faster. You are now prepared to fix your self made great meltdowns should they occur.

This means having the freedom to move and do major changes because you're not so afraid that things will break and you can't fix them.

## Enter the great meltdown
So here we are. Some are screaming, some are crying and a few are silent. The great meltdown hits. Somewhere in this haystack something is causing these other things to fail. Since you've been checking stuff out and doing it once to have done it you got a great head start on finding the root cause.

You may have access to where it's going down - in production. You know how to do any manual steps along the way. You know what the logs look like in a good state. You have all the source repos to search through for error messages or get more context on what's happening.

This is where any automation pays double dividends. You can get important data faster. Be it logging into where it's happening or downloading logs and searching or grepping in the repositories you've accumulated during your "I'll check it out" sessions.

If you've spent some time automating the most laborious steps you can search for multiple clues in parallel and let the machine do the heavy lifting for you.

## The aftermath
I've often said at the end of a great meltdown - "Well, this was fun" and meant it. Why? Because it's the acid test of how well you have prepared and how well you're able to think on your toes. You're not caught off guard, you've been preparing for this. It's exciting. It's showtime!

With all the knowledge you've accumulated you can now run through the things you know about the entire system setup, generate hypotheses where the cause is most likely to happen and collect evidence to falsify or fix it.

These preparations need a fair amount of skunk work. You probably will never get the time or the resources to do all this work. This is because a great meltdown is not expected and thus not allocated for. That's ok.

You need yourself to take a little time each day to work on it. It's better to ask for forgiveness than to ask for permission. Schedule in check out sessions. As little as 15 minutes per day will get you a long way.

When a great meltdown has hit - do a review session to see how well you were prepared. If there are grey areas or things you did not yet know about it's time to go check them out.

![image of an atom bomb exploding](./kaboom.jpg)

Kaboom! Enjoy!
