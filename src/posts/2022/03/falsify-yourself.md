---
title: "Falsify yourself"
date: 2022-03-10
summary: "You've solved it! Until someone asks a simple question and you're stunned. Why didn't I think of that? Because you're hardwired not to see holes in your own solutions. Let's fix that"
---

I had been brought in to replace an old component that ran its own database to use the existing database instead. I read and looked at code, scratched my head, cursed and whiteboarded for a long time. Eventually I came up with a pretty nice solution. According to me.

I told the person I shared office with that it's done! I drew boxes with arrows on the whiteboard and waited for an applause. "Wait - let me get the rest of the team" the reply came back. The rest of the team walked into the room, took a quick glance at the whiteboard and started tearing the solution to pieces.

Needless to say my fragile ego took a serious blow as I'd thought long and hard about this. I guess it showed. "Wait, so we like this solution and it's probably going to work out. But we want to cover all bases and see if there are any holes in it" someone said.

After much scrutiny the solution was given ok by all people and was put in place. When the dust had settled and I had once again puffed up my ego to extreme heights I came to like the experience.

You really had to get your shit together before you announced something as "done"! Needless to say, thinking "Why didn't I think of that?" isn't a peachy experience. You knew it, you just didn't think of it.

You learn nothing new. "I could never ever have thought of that myself" is much easier experience to accept.

At least you'll learn something.

## Falsify thyself
We are not hardwired to be critical of our own solutions. On the contrary, we're prone to disregard or downplay evidence that points to us being wrong. This is called [confirmation bias](https://en.wikipedia.org/wiki/Confirmation_bias). It feels good to be right and look smart. It is painful to be wrong.

But strain you must if you want to be objective about your solution. And avoid embarrassment not thinking it through hard enough. Here's another rub: In the world of scientific theories it's usually entirely false or true so far we know it.

The theory that all swans are white holds true until the first black swan is found. Then that theory is discarded. It has been falsified. In the unglamorous world of software development it's rarely the case that an entire solution is falsified and discarded.

There are many moving parts, and while one aspect of it might be proven to not solve a part of the problem, the rest if it might work could work just fine. It depends. This makes it harder to search for falsifying evidence as it's all gray-areas.

It might work fine until a certain load. It might be ok until a certain input is hit. It might require a restart every week but still solve the problem when running. It all depends.

But try you must. So how do you do that?

I'm glad you asked.

## Constraint overdrive
Your solution is an answer to a problem description somewhere. And in that problem there are constraints. Either explicitly stated or indirectly assumed by you. The easy to list are the ones given in the description of the problem. The hard ones will be your implicitly assumed constraints.

A mundane real world example: you're building a file importer, you massage the data and insert it into a database. Let's list some constraints on that example. The file must be assumed to have some max, min and average size.

The data massage will run for some period of time, have some big-o boundary, and consume some amount of memory and CPU. The database is assumed to have some number of tables, rows and connections to it.

Once you've listed all you can think of, go over each one of them and make the constraints extreme. In the example, what if you get a file 10x the size you expect? What if the file has no rows?

What if it has broken rows? What if it's not at all the format you're expecting? What if there's no file for weeks? Or what if there's 5 files at the same time with the same content?

What if the machine it's running on has no memory left? Or the CPU is maxed out? What if your algo is way too slow? Or way too fast so the database is overloaded? Or interrupted half-way through by an exception?

At the other end - what if the database contains millions of rows already? What if it contains no rows? Or no schema? Or an old schema? What if there are other processes using up all the resources?

What if you're spawning way too many connections? What if it stops replying? Push the constraints you've listed to the extreme and see what happens to your solution.

Write the constraint down and your response to what would happen.

## List the trade-offs
In the talk [hammock driven development](https://www.youtube.com/watch?v=f84n5oFoZBc) Rich Hickey eloquently says on the subject of tradeoffs "Usually when they talk about tradeoffs in their software, they're talking about the parts of their software that suck. I had to make these tradeoffs. That is not what a tradeoff is, right?".

In the real world few decisions are a clear cut good or bad. It's all grayzones. This is what a tradeoff is. You gain this, but you lose that. You've done trade-offs in your solution even though you may not be aware of it.

Since we're looking for the less flattering properties of our creation - the thing(s) we've traded off are just that. We've gained this but lost that. Needless to say if you want to be objective, you've got to know these.

To better list the choices you've made, grab your solution. It might be arrows and boxes diagraming what data goes where, but it might be an algorithm with sequential steps.

Whatever it is, go around each part of it and ask "What is the downside of having this box / step do that?". Try to make your tradeoffs clear to yourself. Even down to the choices base techonolgies (e g database, language etc) which like everything else has strong and weak points.

Then having listed the tradeoffs in your solution construct a contrasting solution that inverts the downsides of your current solution. This forces you to explicitly see the other side of what you've traded off.

When you're done, write down the trade-offs you've done and the consequences of that trade-off.

Example: It will run 10% slower but use 20% less memory.

## Seek out other solutions
A frequent and possibly annoying saying of mine is "we can't be the only people in the world to have this problem". The chance that you're a unique snowflake with an unsolved problem is very slim. And that's a good thing because you can expand your horizon of possible solutions.

This step is intentionally placed as the last step, because if you haven't done the steps before you may not recognize another solution as solving your problem. This is because you didn't know the problem well enough.

Spend some time searching, asking and reading up how others have tackled this problem of yours. But be very discerning when you do. Because the authors of that solution may not have read this over insightful blog post and glossed over important trade-offs or parts themselves.

Just as you are biased towards your solution, so are they. The mere exposure to other ideas in the same problem space may set you off in new and better directions. And at least your understanding of the problem and it's many solutions will have expanded.

When you're done write down other solutions and how they contrast and coincide with yours.

And list the trade-offs they've done. And write those down too.

## Still need other people
What you've done up until now is expanding your horizon. We've searched for negative evidence in your solution three different ways: by pushing constraints, by listing trade-offs and by comparing it with others.

Some of your findings are undoubtedly outright bugs and should be fixed. Especially in the pushing constraints part. But there are many things that are not bugs. They are trade-offs. You get this, but lose that.

These you must know in order to see your solution with more objectivity. And there are almost certainly many many ways to solve the same problem. Some worse, some better and many equally good (or bad).

Knowing a bit of what you're competing with will also help you broaden your horizons and get less subjective about your own baby creation. There may still be blind spots and your best bet against blind spots are other people. They're not married to the idea. It's not their ego on the line.

But having gone through all this you should feel good about saying it's done and bring in the rest of the team. You've done your part as far as you can. If someone finds a hole in your solution you shouldn't get that "Why didn't I think of that" feeling.

It should be "I could never ever have thought of that myself".

Which could also be called learning something new.

And that's good.
