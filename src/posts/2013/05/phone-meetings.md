---
title: "Phone meetings"
date: 2013-05-10
summary: "Bear Grylls style survival tips for agile teams lost in the corporate jungle"
---

This happens often enough to qualify for a post. Phone meetings. The one where you call in to synchronize some process or project. My workplace does a fair amount of integrations (i e sending data from us to them or vice versa) that this is a real problem. As an agile team, no wait, strike that.. as a team who like to get stuff done have to fend ourselves from spending too much time in those.

Lets delve into this a bit, shall we?

## Background
Let’s clarify first – I’m all for keeping close contact (if needed) and synchronizing schedules. This is pivotal to meeting the integration deadline. Its very dissatisfying to really push through an integration only to find out that the other side is not nearly done. Your code will be in a vacuum until they start testing their pieces and you’ll have to go back and fix all the tings uncovered during their test phase. Nope, it’s about the medium (phone) and the scheduling (not governed by technical needs).

## 4k bandwidth impediment
Software, data-exchange formats and the likes are no pick nick doing in person. I know that if we have a whiteboard it’ll take some time to understand each other, and another chunk of time to get a solution in place. Imposing an artificial impediment such as no visual information and only 4k of bandwidth (fixed phone lines) makes little sense coming from a technical perspective.

I understand that phone is the second best medium for dealing with human relations – but in technical discussions where the objective is to flesh out the details of a transfer format or what webservice port we’re using its maybe the nth best medium. Way superior is something visual – such as mail and or lo-fi snapshots of whiteboards – details needs to be in writing.

## Imposed scheduling
A first meeting is ok – preferably a short one where we say “I’m Jonas – a developer. I’ll be handling the integration from our side. Oh, you’re using .NET? Ok, good to know for webservice quirks and BOM characters. Now, can we go offline and do the rest via mail? Great, nice talking to you all, we’ll keep you updated on the progress”. We are humans after all and a voice and a name goes a long way in better cooperation.

But really, more than that first startup meeting is rarely a good use of time. Now, this is highly dependent on the project manager on the other side. If we’re lucky, they are ok with an on a need to know basis – i e when we hit cases not covered by specs. Most of the time though there are meetings scheduled more out of management needs – e g a status meeting 1h each week to follow up on anything that happened last week. I like to think of these meetings [the everything’s ok alarm](http://simpsonswiki.net/wiki/Everything's_OK_alarm). Or worse, those weekly meetings plus a new meeting anytime a mail even mentions the words problem, bug, issue or the likes.

This gets in the way of producing code – problems rarely align to weekly meetings and weekly meetings are rarely interesting in full to all parties involved.

## They are not stupid
As said from the outset this might seem outlandish to an agile small team – but lets consider context. I’m guessing it makes very much sense in other organizations to have many and recurring meetings. It may be a large corporation where this is the only way managers can keep up with how the project evolves. Being small and agile largely cuts this out. Also consider that many things that seems stupid now started out as being helpful (TPS reports etc) only to later evolve into something that may not be so helpful now – except that there is no better alternative. Or that none dares to go differently.

## You might be the weird one
At many places things don’t happen because someone says so – things happen because there are follow up meetings and agendas. Trying to get out of meetings might signal that you’re work shy. Explain very thoroughly how you work and what you will deliver at what point in time.

## You might be a tiny part of it
Sometimes its hard to gauge the size of the project on the other side. You might be a tiny part in the whole – it’s just that its not apparent. The file you are sending their way might be processed in 15 different systems and all of them needs to implement this new feature. You’ll be spending lots of time listening to their issues and scheduling synchronizations. This is not in defense of huge meetings – but its often a reality and might be of some comfort when trying to understand why there are 10 people in this meeting when you are sending 1 file.

## Eject early, eject often
There is hope however. It may not have to be like this, or it can at least be brought down to a lesser level:

## Inversion of control
In the initial meeting, try to figure out who’s the key technical person on the other side. Get their mail (and phone number if needed). If you’re lucky you can go straight to that person and most things never have to escalate beyond you two (except when it actually is a problem for the whole project). The technician on the other side might be interested in this too – most coders face the same problem with tech specs over phone and meetings gets in the way of producing code.

And if no one seems to be the key person – try to see if someone gives you coherent and intelligent answers. Maybe they can point you in the right direction. Mail only the person you think know have the answer, avoid cc:ing lots of people (unless you’ve promised some project manager to cc your conversation. Include only them in that case). Mail threads tend to accelerate the number of people on the send list fast and if it grows big enough it might trigger a new meeting.

## Get a goal keeper
This should ideally be your project owner or someone who carries enough weight that if they say “we’re doing fine” – its assumed you’re actually doing fine. This person participates in any weekly status meetings on your behalf. Send him a status report saying “we’re ok” (if you’re ok) and ask for condensed information that pertains you (it’s usually very little). The product owner might be interested in covering for you since its project time spent in meetings that could have been used more wisely.

## Round robin the role
If none of the above works – share the burden. You’re doing a good thing – freeing up the rest of the team to get some work done. They’ll get a good laugh when you roll your eyes and do the talking hand motion – and they’ll probably back you up with videos of funny cats and capybaras to ease your pain. And next time you’re off the hook.