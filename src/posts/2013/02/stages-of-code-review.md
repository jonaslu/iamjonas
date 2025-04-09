---
title: "Stages of a code review"
date: 2013-02-24
summary: "Code reviews are great! Your team will evolve with it - but not without initial bumps. Where’s what to expect when code reviews are brought into a team"
---

My team at work have been doing code reviews for about 2 years now. Its gotten to the point where I’m actually a bit surprised and disappointed if I don’t get “I’d prefer you’d not submit this” with some questions or comments.

Code reviews are four wishes in one really: quality assurance (this is a no brainier), replicating knowledge throughout the team, a great learning tool and educational tool and finally – this is probably the most important one – it’s a great synchronizer of product vision and architecture (i e where are we going with this and how does it look when we get there?).

In the academic world all teams go through [4 phases](http://en.wikipedia.org/wiki/Group_development) when forming:
*   The formal phase
*   The ugly phase
*   The solving phase
*   The constructive phase

Introducing code reviews on my team went through roughly the same 4 phases. I’ll walk you through its incantations – (and yes, the phases have been amped up a bit for dramatic effect).

## The formal phase
Everyone is nice and lets too much ugly stuff pass (others code of course) but underneath the surface the tension is growing. Flames starts to erupt more and more and we transition into…

## The ugly phase
The guns come out blazing. Knit picking and overly zealous code reviews. Rages through restrained comments. The focus is usually myopic – variable prefixes, should all parameters be final, checked vs unchecked exceptions etc with an all or nothing approach. Some will try to quiet this phase by calling for “review documents” and “standards”. Books are scoured, internets are searched for an acceptable formal definition and ingredients of a code review. Do resist that urge – I’ll get to why in the end of this post.

A word of comfort for the poor souls in this phase – this is good. Stay with it. Your team is feeling concerned for the code, but the concern is a bit misguided at superficial things. Use this to focus on the real concern – architecture and the great product you’re supposed to be building. Use the discussions as a setup for getting to the how and the why on a larger scale.

Let the gloves come off and let them stay off until the discussion gets constructive. It’ll pay off.

## The solving phase
We’re not out of the woods yet, but we’re starting to move in the right direction. Egos are starting to subside and the other side is listened to. Its not yet a fully constructive dialogue but at least other arguments besides your own are heard. Use this to move forward.

Try to get to the root cause of the discussions. Chances are you have technical debt and the code is not where you want it to be. Your vision in the team is not in sync. This will show up in code reviews. Call it teamnical debt (clever huh?). Code and approaches are not being discussed enough so everyone has their own view of what you’re building and how to build it.

## The constructive phase
How did we get here from the last phase? By getting to the root cause of the discussions I’m hoping everyone starts noticing that we all want the same end result – the best product ever made by man. Its just different approaches to this. Its no longer about being right, its about generating the best approach and… well, just getting things done really.

You’ll be very happy that you didn’t settle on some “formal review standard”. Its easy to get caught up in trying to control the growing flames but this will also take away from the end result – no document can ever substitute judgment of each particular case. The end result is the ability to discuss architecture and code structure.

This also the most relaxed place. The micro-concern of syntax and formalia are replaced with the macro-concern of building a great product. Its more pragmatic and constructive. Quality is everyones concern.

## Y u no fail review?
So how do you know where your team is on that scale? In my book if reviews are failed more often than they are approved but everyone is still smiling you’ve nailed it. Its that nice place where you appreciate someone else comments and look forward to getting them to improve your code – make it more readable, fix some bugs when they’re still cheap to fix or align your vision of the perfect product.
