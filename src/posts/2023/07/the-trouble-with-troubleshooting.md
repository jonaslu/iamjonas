---
date: 2023-07-28
title: The trouble with troubleshooting
summary: "Sigh. That didn't work either. Why can't someone else have already solved this? Maybe it's a bug? I'll upgrade and hope that works."
---

In your daily developer life I bet you use many many programs that you didn't write. A few come to mind: the OS, the window manager, the compiler, the IDE, git, databases, browsers, package managers, shells, the gnu command-line suite, curl/wget.

Once in a while they don't work as expected. Or at all. And these are battle tested programs with plenty of documentation. It's enough to have you stuck scratching your head.

Then we have lesser known programs without the battle testing or documentation.

## The trivial case
What we're at, [again](https://www.iamjonas.me/2021/08/i-dont-understand-this-yet.html), my friends is trying to understand why it does what it does. If you wrote the program it would hopefully be trivial to you. But in our sad sad case we did not write those magnificent programs.

So we're stuck. There are two cases that at the outset are the same - the source code is either not there or not ours. Efforts to learn the program are futile in the first case and very time-consuming in the second case.

What we want is "Oh, it's doing THIS because of THAT. And if I change THAT to THIS it does what I want". This requires shortcuts and a bit of luck. *

## Semper git clone
First things first, grab any source code you can. The problem with an unknown code-base is just that. It's unknown and any part may be important. By using shortcuts we can zoom in on the correct part of the code and then dig out the why. So get the code no matter the size or how hairy it is.

Make sure you check out the same version of the code as the program you're having trouble with. Then spend a short amount of time randomly greping for what you think could be the cause. This is the first shortcut and maybe just maybe you get lucky and hit the correct context straight away.

If nothing turns up you haven't wasted your time. When using other shortcuts go back and grep again for whatever you just found. With luck you'll wind up in the correct part of the code.

If it's closed source this is obviously a no go and you need to directly move on.

## Make it talk
Always try to launch the program from a terminal if possible. Most programs that run from a terminal can output diagnostics, sometimes useful error messages and logs without doing anything to it.

If it doesn't it's time to make it talk. Logs are textual outputs from a running program. Logs are usually a mix of something akin to stack traces and the program state. Any decent unix command line program has the -v, -vv and -vvv switches that turn up the log level from 0 to 11.

Other programs may have environment variables that control logging level. Examples of this are git (GIT_TRACE_*), nodejs (NODE_DEBUG) and terraform (TF_LOG). Spend at least a couple of minutes trying to find out if it's possible to get logs or traces from the program.

A good log contains a timestamp, the log level and a log message. Just glancing at the log when it goes wrong might be enough. If not, in [git bisect](https://git-scm.com/docs/git-bisect) tradition, get the log for some good known states and then compare with the logs for your bad state.

With the logs you can sometimes infer the flow of the code and internal data-structures. If nothing else it will give you more context to go greping in the source.

## Probe points
In making the program talk we're at the mercy of the developers of the program. If they deemed logging to be useful enough, and that the log message you need to make sense of the error was put in - peachy peaches!

If the devs did not put in enough helpful log messages or the program isn't outputting anything there are still options. Making sense of the error can happen outside of the program itself. The definition of a probe is to physically explore or examine (something) with the hands or an instrument.

Sadly physically probing code with our bare hands isn't on the table yet. But reaching for an instrument is very much on the table.

A program does not exist in isolation.

## strace
First up is a program that deserves a special mention: the invaluable [strace](https://en.wikipedia.org/wiki/Strace). This fine program intercepts calls to the operating system, prints out any parameters passed into the system call and prints out what the OS returns.

The output is somewhat terse but extremely valuable if you're willing to spend some time. The more you know C and making calls to the kernel the easier it'll be to read. Consider this an opportunity to read up on system calls if nothing else.

This should be your first stop after making the program itself talk. Strace it just once, even if nothing makes sense just yet, and devote some minutes to staring at the output. This is how the program interacts with its primary environment - the operating system for that run.

Get the output for some good known state and your bad bad state and compare them. As with the logs you can hopefully infer a good deal of what the program does between the OS calls.

And again you now have more material when greping in the source code.

## More probe points
Often there is more interaction than with just the OS. If you look closer - does it use a database? Does it send stuff over the internet? Does it read and write to files? In all of these places we can probe for context ourselves. Databases are highly inspectable. You can seed the database with values and you can later inspect the database after the program has run.

Files are inspectable but not always human readable. Even then hex-dumping out files are at least some way of getting more context. You could even use [inotify](https://en.wikipedia.org/wiki/Inotify) to watch for changes and compare the diffs.

There are plenty of network intercepting proxies and tools such as [wireshark](https://en.wikipedia.org/wiki/Wireshark) and [tcpdump](https://en.wikipedia.org/wiki/Tcpdump). These you can use to probe and dump out what's going over the network. In all of the places where the program interacts with something - look for or invent reasons to write your own probe.

I've written plenty of throw away http servers to intercept, log and return some canned answers.

## The troubleshooting section
Why is this not first in the list? Because of that growing hope of a quick fix. Someone else might have solved the problem for you. Oh, there was a bug in version 3.8.1 which probably caused this error. I'll upgrade and that's that!

Quick fixes are not a substitute for understanding. You still need to do that. It's about speeding up the process of getting the right context and as much information as quickly as possible in order to understand.

To further compound the problem, troubleshooting sections tends to be written by the authors of the program. As experts they're unaware of how much stuff you don't know. There are hidden contexts, prerequisites and caveats that are not mentioned. Because they're not obvious to an expert.

This is called the [curse of expertise](https://en.wikipedia.org/wiki/Curse_of_knowledge) and can set you way off track. Stay clear of any troubleshooting that is not obviously basic and beginner friendly. And knowing that takes experience of troubleshooting itself. Only once you've got some logs or some other output of what's happening and have thought and tried your hands at the problem for a while then go try your luck with one or two items.

Same goes for random googling. Now you're really hoping for a quick fix to your pesky problem and are asking to be led astray.

Be wary of both until you know what you don't know.

## Benefits
In the short run you'll spend less and less time being stuck. The more context you can gather the faster you can infer what's happening and solve it. Being stuck with a problem with a full set of tools is not that frustrating.

You pick some tool that looks promising and try it. If you're out of luck you try the next one and so on until you hit upon the solution. Being stuck with a problem with no way to attack is terribly frustrating on the other hand.

In the long run there are more benefits. You'll be able to rule out classes of error-sources in one go. This comes with having seen programs misbehave enough to know that this type of error cannot be related to this class of problems.

This turns the error-searching into a categorization kind of game. Try this class of errors. Nope, rule it out. Try that class of errors, yes got some more context. Must be this kind of error.

Taken to the extreme this is wizard territory where you can go "Oh, it's probably expecting a file but got a folder - I'll have a look" and be right a terrifying amount of the time.

\* To quote Louis Pasteur: "Luck favors the prepared mind"
