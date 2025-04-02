---
title: "Is Learning Vim Worth It"
date: 2013-09-11
summary: "My attempt at gauging whether vim is worth learning (without spending the time everyone says it takes to). See if you should go for it or not"
---

I’m usually a bit skeptical when something is touted as a one size fits all solution. As some future post surely will reveal, I now extensively use [git](http://git-scm.com/). But it wasn’t all peaches in the start – some back and forth looking at hg and bazaar before git became home. Now everything related to code has a .git in it. Just to be safe y’know.

So where is this going? Vim – that’s where. I’ve known about vim for a number of years. First encounter must have been stuck in ssh on a remote linux box with no sudo / su powers. All it had was ed or vim. I (like most other) eventually figured out how to write _something_ in it and then get the hell out (thinking, phew that was close. Hope it doesn’t happen again).

But (as in the [horror movies](http://www.collegehumor.com/picture/6906024/sharkalanche-movie-makes-obvious-sense)) it _did_ happen again. However this time voluntarily. See, everyone (well most who mentioned vim anyways) kept saying “its super productive”, “pfft, you can do that in less keystrokes in vim” and “I’d write this, but it was already done in vim”. It kept popping up in blogs, hacker news and podcasts.

## Y U run vim?
The no-brainer answer is that it’s available everywhere (at least in the shape of vi).

The brainer answer was part interest and part wanting to know what the hype was about. Would it make me a faster, fiercer and more beautiful programmer? Was it really _the_ powertool and one stop solution?

## Y U not run vim?
And to balance this – the counter question would of course be: is it worth it? Everything else really ties in with this question. It has a long standing reputation for having a high learning curve. Its also begs the question – to mouse or not to mouse. I’ve always used the mouse when programming and not been ashamed of it. The mouse is a good tool for placing the cursor where you want it or visually selecting text.

## Highly scientific speed test
To get verifiable data – here’s an attempt to make some science on it. I chose 5 of my most common code editing moves (the stuff I spend most of my workdays doing) and timed them using a) my old methods of one hand on the mouse, one hand on the keyboard and b) using vim with only keystrokes. Mind you I’m still a novice vim user so while I’m sure there are faster and more compact ways to do this – I took it as a baseline for speed. There might be some room for improvements but even if its a factor of 2X it will still show in the neighborhood what speed gains we’re looking at. To be fair to vim I’ve learned the combos by heart so they’re done at my regular typing speed. Test file was 200 lines long with 10 methods.

Here goes, in no order – what the object is and a description of how it was done in each editor respectively:

1.  Move a method 9 lines long (name known, line number unknown) from middle of the file to after first method in file (name and line number unknown).
2.  Change a method signature (name known, line number unknown) from private to public.
3.  Add a method argument at the end of argument list (name unknown, line number known) on line 175
4.  Swap the order of two method arguments (name unknown, line number known) – cursor already positioned on correct line
5.  Delete last method in file (name and line number unknown) – start at top of file

Plain eclipse:

1.  Ctrl + o for searching for method names in file. Enter when correct method is hit. Select method with mouse, ctrl + x for cutting it, scroll up to insert position ctrl + v for paste
2.  Ctrl + o for searching the method name, use mouse to select private modifier and type public
3.  Ctrl + l for line 175, click on end of method, type in new argument and parameter name
4.  Select first argument type and name with mouse, ctrl + x for cut, put cursor after last argument, type comma, paste cut text, delete trailing comma from first version
5.  Ctrl + end for last in file, select last method with mouse, hit delete once

Vim:

1.  / and search for the method name, n a couple of times for hitting the usage of the method but not the method itself, v for visual select, \}\} twice to select the method, d to delete it, ctrl + u to page up to insert point, p to paste it.
2.  / to search for method name, n a couple of times for hitting the usage of the method but not the method itself, bb twice to back up from the method name to the modifier, cw to delete private modifier and type in public.
3.  175G for going to line 175, % for jumping to the end of the method argument, i for insert, type in new argument and parameter name
4.  wwww for entering the method call parenthesis, v for visual, ww for selecting type and name, c for changing words, del to delete comma, to enter normal mode, % for end of parenthesis, i for insert, type comma, for normal mode, P for paste before cursor.
5.  G to hit end of file, kk for two lines up, v \{\{ to select entire method, d to delete method

Results:
| Case | Eclipse    | Vim       |
|------|------------|-----------|
| 1.   | **10 sec** | 16 sec    |
| 2.   | 8 sec      | **7 sec** |
| 3.   | 10 sec     | **7 sec** |
| 4.   | **7 sec**  | 10 sec    |
| 4.   | 8 sec      | 8 sec     |

## Other claims
If its not the speed, maybe its the automating of repetitive tasks that is the big win. The dot ‘.’ command runs the last edit you made. Macros record key sequences and can be played back. The big hurdle here is you have to think about the sequence when composing these reusable units. If you do it in the wrong sequence the dot command might might do what you wanted it to. I’ve rarely used these features when trying out vim. Even though looking for cases to use them, in reality they came very seldom.

I’m going to leave vim plugins out of the discussion, they’re great if you buy into that its worth learning vim. There are plenty of editors with lots of plugins that do the same thing but without the learning curve.

## Things I did not see coming
Having used it now for over a month one thing has struck me that I didn’t expect. Its actually quite fun to use. There is a certain gamefication element to it, that you search for ways to do stuff faster.
Another thing that also struck me as more useful: remember that vim is everywhere? Its on android too, and having a keyboard hooked up to a tabled writing code or blogposts makes full use of vim. Androids finger pressing makes navigating text much more painful so there’s a clearer benefit of knowing vim.

## So, vim or not vim?
Well. Looking at the speed test, eclipse won in 2 cases, vim in 2 and a time on one (how politically correct, eh :) But really, speed is roughly the same for me. I’ve used [vrapper](http://vrapper.sourceforge.net/home/) in eclipse (my workday IDE) as a vim extra on top of eclipse. Without it as a plugin it would have been a no-brainer to go with Eclipse. It’s built in code assist, refactor support et al makes it much more productive than vim could standalone.

But in combination… I’ve been back and forth a lot. The first week there was a noticeable slowdown. Almost like learning to drive again – at first you’re so focused on the mechanics of driving that you can’t be bothered with the traffic ahead. It has gradually eased till the point where I’m about as productive with vrapper as without.

Another thing that might have had an impact is that I’m a terrible typer (about each 10th keypress is a backspace when I type). Its true that you can do awesome stuff in vim with few keystrokes. I’ve accidentally managed to delete and format lots of text simply by typing like I always do. Regular editors with insert only mode are less forgiving. They type out your character on screen and that’s it. Not so with vim, it will delete your text or some other creative things. So its a hard penalty for typing wrong.

Still, each time I’m done and start to go back to the normal flow, I start missing small stuff. And the fun of learning to use it faster. I’ve got this feeling that its going to become like git in a while, so I’ll stick with it for some more time before taking the final decision.

However, when being in a terminal and or on android its much more worth it. Even though mouses do work in a terminal (assuming you’re running X) this is where it feels at home.

Also editing dynamically typed code or plain text I can much more see the benefit of using it. Because of this I’m going to stick with vim at least in the terminal (I always defaulted to nano but got stuck on not knowing how to make more advanced edits). The payoff is that each new trick learnt carries over on all the other platforms it runs on.

## Should you then?
In my opinion its down to:

*   Do you like or are you ok with using a mouse?
*   Are you using an IDE (with language support) with lots of support for changes (i e refactoring)?
*   Are you editing text / code on other platforms (android, terminals) that doesn’t have good mouse support?

The real payoff was using it in a terminal or on android with bad mouse support. If you are in that situation a lot or expecting to be then I’d go for it. If you are comfortable in your IDE working with the mouse then there’s not that much benefit of knowing it.

## If yes – track yourself
If you do decide to go for it: Do a screencast of yourself using your old editor. Play it back and see how you are doing. Record yourself doing the same thing in vim and compare. Also, for the benefit of not giving up too soon, try to optimize it a bit and speed up the screencast if necessary to regular typing speed. See it as an example of where you could be if you’d spend more time in vim.

If there is a vim wizard near you – seek them out and ask if you could see them in action. Are they as fast as you’d like to become? Is what they do something you should be doing?

If you don’t know a vim wizard – (and even if you do) watch sceencasts of wizards using vim. Try to pick up on what they do and see if its something you’d like to achieve. Does it look natural or akward to you? Switch back to your old ways once in a while. Compare and make sure you’re getting your moneys worth.
window.disqus\_identifier='http://catchmecode.com/blog/2013/09/11/is-learning-vim-worth-it/';
