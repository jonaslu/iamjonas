---
title: "Sider 1.0 - an ode to yak shaving"
date: 2020-05-13
summary: "Why my greatest open source hit so far: sider almost never existed"
---

Let me present to you what I've been working on for the last half a year: An almost complete rewrite of my greatest open source hit so far - [sider](https://github.com/jonaslu/sider/wiki/Changelog#v100):

## The elevator pitch for sider
[Sider](https://www.npmjs.com/package/@jonaslu/sider) has saved me tens or even hundreds of hours not having to start, stop and restore databases myself. Sider manages settings such as port-number and version. It runs databases via docker so you don't have to sudo install system-wide packets. All this keeping snapshots of the imported data so you can revert or start afresh.

## The little longer story
All of my projects as a freelancer so far has involved starting, messing up and stopping databases as part of a normal workflow. Databases come with some perils - there is no easy or widely available version control. If you destroy the data (for example via running a faulty migration) - you're left restoring a backup. If you had one.

Running a database locally is serious business. Often you have to install it with sudo-rights. It's hard to change ports once installed and running several side by side is even harder since it often defaults to some config in a specified system folder.

Backing up data and restoring it is even more serious business. One slip and you've sudo rm -rf the wrong folder. Or dropped one table too many. Noticing I was spending a lot of time and anxiety doing these things was the initial seed of what would later be known as sider.

But there might not have been a story at all… If it wasn't for being stubborn and having a penchant for shaving yaks.

## About that wheel...
There are lots of words of wisdom out there. Don't reinvent the wheel is one of them. The problem with words of wisdom or maxims is that they only apply at times. But knowing when they apply or not needs addendums. And those addendums need addendums. And will soon turn them into a tangled web of flow-charts. Reality cannot be compressed into a single sentence.

It's a hard earned lesson baked into a statement that must be tempered with context. Not knowing the context makes don't reinvent the wheel dangerous because while it superficially might look like the same wheel - most of the time it's not.

## Is there an RFC?
Examples when don't reinvent the wheel strictly applies are when there's an RFC for what you're trying to do. I've seen many (failed) attempts at wringing an regexp for email-validation.

The real (from the simplified [RFC](https://www.ietf.org/rfc/rfc5322.txt)) deal is [terrifying](https://emailregex.com/) and nothing I'd ever come up with in a justifiable time-frame. Neither will you. Your wheel should be identical to the already invented one - and reinventing it is dangerous. You will accept invalid emails because the time getting it right requires deep knowledge of the RFC spec.

But most of the time it's not the same wheel. It's only superficially the same wheel.

## Why bother?
I have myself been known to joke and allude to the [xkcd strip](https://imgs.xkcd.com/comics/automation.png) as a form of don't reinvent the wheel.

There is a good enough wheel already in place. It'll get the job done. Why waste time inventing another?

The xkcd strip is partially right: the time spent automating the task will seldom save you the time spent doing it manually or working around it. The existing wheel works fine enough. What's worth it is not the script in and of itself:

## You'll learn something
I guess this should come as no surprise - a good way to better and to more deeply understand something is to build it yourself. By hand. The whys of it will become painfully more clear when you yourself face solving the same problem. For the mere sake of a deeper knowledge of the problem, reinvent it yourself.

I hope you steal ideas. I do. Shamelessly. This is the other good side-effect. You'll have to research and contrast different solutions in order to re-invent your own. That means exposing yourself to others code on a deep level. Chances are they are good at what they do and if you take the time to dissect their craft - so will you be.

Letting this then marinate in the cess-pool of your brain - an almost inevitable side-effect of reinventing something is that better solutions will occur to you on the way. Or solutions to some other problem you've been having.

## You'll have scrap-value
Even if the learning experience is discounted - to a surprisingly large amount of times part or whole of the actual code will be cut'n'pasteable in some slightly different context down the road.

What you're doing is you're building up a bank of more and more usable snippets that can be sprinkled over future tasks. I've seen it myself enough to trust that time spent automating something is worth it. Not for the time spent on that actual task but for time saved on future tasks down the road: the missed point is that the scrap value is far above zero.

## You'll leave a trail
One of my own personal gauges if I'm dealing with a good developer or not is as follows: do they leave a trail behind? When (not if) they open up a terminal - are there lots of custom commands and programs you've never seen before making them fast and accurate? No? Want to be one?

Trails are made up of tangible things - scripts, tools, workflows that have been automated. The trail will be visible and valuable. Not only to you but to someone trying to gauge you from a distance. Maybe yourself some years down the road?

## What about the yaks?
I came across the term [yak shaving](https://en.wiktionary.org/wiki/yak_shaving) the first time I tried to suffer through making a vim-script myself. This was via the venerable [Junegunn Choi](https://junegunn.kr/about/) - author of [fzf](https://github.com/junegunn/fzf) and [vim-plug](https://github.com/junegunn/vim-plug) fame. Vim-plug was the reason winding up on Junegunns pages.

The term yak shaving has a negative and a positive connotation according to the definition of the term. On one hand it is useless procrastination and on the other hand it's only apparently useless when doing it with a happy later outcome.

Junegunn's [story](https://junegunn.kr/2013/09/writing-my-own-vim-plugin-manager) on vim-plug was such an enlightening example I took it to heart. There were plenty of very capable vim-plugin managers around. Still he went for writing one himself because the current ones were causing growing impatience.

The last section is adorable: "vim-plug works for me… it is highly likely that I will be the only one using it in the end, but I don't care. It was fun building it, and I learned a whole lot more about Vim in the process".

At 18.8k stars on [github](https://github.com/junegunn/vim-plug) at the time of writing I guess we can pinpoint that to the latter definition of yak shaving.

Because maybe, just maybe this wheel will not only be fun and and learning about technology  in the process. Maybe it'll be the one hugely useful to others too? Wouldn't you like to find that out?

## Is the irony lost?
Yes. Sadly the irony is almost always lost in a self-promoting post. You should totally use [sider](https://www.npmjs.com/package/@jonaslu/sider) and reinvent some other wheel.