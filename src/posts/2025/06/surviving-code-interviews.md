---
title: Surviving code interviews
date: 2025-06-15
summary: Nobody likes them  — neither the hiring side nor the hopeful developers. But since code tests are not going away, let’s talk about why they exist and how get through one alive.
---
When doing an unscientific poll among developer friends two viewpoints quickly emerged. Love or hate. Some love coding interviews saying it is a good way to meet the people you will be working with. Some hated it saying they blank and perform significantly worse despite academic proof of ability.

Let's begin by flipping the table and looking at the hiring side.

# Why are we here?
A incompetent developer can cost a lot. Both in terms of money, broken code and broken morale. Good people leave because of bad code and sloppy programming. Then you need to get rid of the bad coder, pay off incurred technical debt and start the hiring process once again.

People can lie on their resumes, references can give rose-tinted recommendations, certificates prove only what the issuer deems important. A degree in computer science doesn't mean it's a good developer. And a lack of a CS degree doesn't mean it's a bad developer.

Good people come in all sizes and shapes. What they have in common is that they're rare.

Finding an able and reliable developer is a lot harder than it is to type it. 

# Job markets
Adding insult to injury, hiring happens when teams need to scale up. If the job market is hot, good people receive offers fast causing time pressure. If the job market is slow you need to sift through heaps of candidates. That also causes time pressure and buyers remorse.

The people handling the technical interviews are rarely HR people. It's team leads and programmers who hate interpersonal stuff. They have tasks to complete in an already crowded scrum-board.

So summing up the problem: with little time make a technical person find the right candidate. Oh, and avoid the devastating impact of a wrong hire at all costs. 

Here's what we've got to solve this hard problem: the coding interview. Let the candidate prove they're able programmers on a live task. This presents yet another challenge for the hiring side: what constitutes a good task?

And what outcome would be considered good?

# On the job tests
Broadly there are two categories of tests. In the first category you have on the job tasks. At the web backend layer where I spend most of my time tests include opening and reading files, calling an API, querying some database, figuring out a regex or reading snippets of code and saying out loud what it does.

Tests seldom have a hard time limit and tasks can be added or subtracted as the interviewer tries to explore more of what you know. What language and tech stack is usually what is used on the, well, job. It's about watching and interacting with the candidate to figure out the line of reasoning.

On the job tests are time-consuming to construct for the interviewing side. They are also harder to grade with a clear cut percentage. The benefit is that they are unique and indicative of how the person will perform on the job.

They're also impossible to memorize beforehand.

# Algorithmic tests
In the second category you are presented with some problem and your job is to code out an algorithm solving it. Examples include reversing a number, finding unique instances in a list and counting occurrences in a grid. Tasks are self-contained and do not rely on any real external resources such as APIs or files.

Rarely performed tasks during a work day but easy to verify and grade. The leethack, codewars, advent of code type stuff. These tests have a correct answer and deductions are made for sub-par solutions. Some run-time performance calculations (i e Big O notation) is often included in the grade.

In an algorithmic test you can often select from a bunch of languages as algorithms can be implemented in any turing complete language. At the end you get a grade or pass-rate. If online there might be examples and light-weight tests to run your code against but there is also an unknown number of test-cases never shown. Algorithmic tests come with a hard time limit.

A very big plus for the interviewer is that while the tests are hard to construct yourself, ready-made tests are abundant on the internet. There are off-the-shelf solutions that come with grading built in. Saving a few bucks you can google, find a popular question, read up on the answer (that you of course knew, just double checking, right?) and you're set for the interview.

The drawback is that the interviewee can do the same: google some, memorize the most popular questions and get lucky.

# Choke
Researcher [Sian Beilock](https://sianbeilock.com/) played goalie in a soccer team and was pretty good at it until a talent-scout was announced at the game. Right then her performance sank to the ground. Later she became curious as to why this happened.

She set out to do [research](https://www.goodreads.com/book/show/9309079-choke) on the subject of why someone would perform below their level. It turns out thinking gets in the way. In sports when a player tries to think about every movement it interferes with unconscious muscle memory. Don't think, just do.

But code-tests are not sports. Turns out that thinking gets in the way of thinking too. On a math test, if you perceive yourself as being judged, you're going to start worrying about whether you live up to the standard. And that worrying takes up precious working memory.

But if you're smart you should have enough brains to muscle through some worrying? Nope. Counter intuitively the more cognitive power you have the more it drops if choking kicks in. Cognitively strong thinking often relies on more complex models. Those models crumble if enough thinking power is diverted into worrying.

So if choking is your thing, what do you do? Journaling your negative thoughts, meditating, reminding yourself of your strengths, pausing when the choking sets in, reinterpreting your reactions, focus on your successes so far, educate yourself on choking and the #1 tip - practice under pressure all aim at the same thing. 

Don't worry, just think.

# Prepping
If it's a job you care about you should come prepared. But how? On the job tests are the easiest. Read through the job ad and rank all the tech from most to least known. Start brushing up on the most known according to your CV.

I always try to go hands-on with small toy projects to refresh my memory. A todo-list. A database backed REST API with a load-balancer. Then move down to less and less known topics.

Doing this checks that what it says on your CV is cross-referenced with the job ad. And you know the main parts as well as possible.

With algorithmic tests there's two approaches. The long but rewarding road is to brush up on your computer science. List topics in order of least to most well known and start ticking them off. 

The second is to try to get lucky by searching the top n coding interview questions and memorize them. There are a number of books and sites on the subject. Chances are good that you'll be presented with one of them as interviewers will do the same to save time.

Find out if there are any time limits to the interview. If you can't find any, assume it will last an hour since this is probably what most busy interviewers have as budget.

Do the prepping with a timer clearly visible to get some of that practice under fire going.

# Test day
So you've prepped all you can and here you are. You've showered, combed your hair and now stand at the doorstep nervous. It's showtime! After the initial small-talk dies down you're up. You're presented with one or several tasks and you're expected to solve them.

If you haven't already, find out what time frame you have. And double check that you've understood how many tasks you're supposed to solve within this time frame.

First: understand the problem. When taking a test the most important thing you can ever do is understanding the task you're supposed to solve. If you get that wrong nothing that follows matters. Don't rush this.

The bare minimum is to parrot the task back to the interviewer and ask if you've understood it right. If you're doing an online test look away, write down the task from memory and compare it with the original. Verify it says the same thing.

# Verification
Once understood you want to plan ways to verify we've solved it. Essentially you want to answer the question "how do I know am I done?". This means looking at the happy path, but also any edge cases or out of bounds value. Especially on algorithmic tests this highly contributes to the grade.

If passed X it should produce Y as a result. What if X is zero, negative, very large or very small? Those types of questions. This way you'll have something to test your solution against even if there is an unknown battery of tests to follow.

If it's an online algorithmic test there might be some included test cases you can run your solution against. Be very wary of these. Assume they are cherry picked to lure you into believing the task is solved once these pass.

Use them as guidance at best, and do take ample time to construct your own.

# Solution time
Only now do you get to devise a solution. If you're prone to choking this is where it's going to hit the hardest. If you do notice choking, get up, walk and remind yourself that you're not dying. At least not from this test right now. You'll be fine.

You can even say it out loud and see how the interviewer reacts. Are they understanding and reassuring or stonewall you? It's a valuable clue since these might be people you'll be working with.

In person it's also vital to explain lines of reasoning out loud. It's easy to go silent as you have some thinking to do. Once the solution is done, one by one compare the test cases with your solution.

The majority of the time should be spent on the first two parts: understanding and verification. The solution might even fall out as a byproduct. Throughout keep an eye on the clock but don't let that choke you.

Stick with your plan.

# Post test
Phew. Out the door you go and expect a call within the next couple of days. Possibly you want to forget all about it until the dreaded callback day. Maybe you already know what the answer will be.

Self assessing after a test can be a gruesome self-loathing task. But there is valuable insights to be won on how you can do better next time. A couple of hours between you and the test is ok to get away from it all but don't wait too long as your memory will start to fade.

Sit down with pen and paper and make some notes. How was the layout of the test - one task or several tasks? Any ordering as in hard to easy, random, easy to hard? 

Was your prepping on target or were you blindsided? If so, how come you didn't anticipate the correct topics? Can you adjust this in the future? Could you have found out prior to the test? Did you lay out a plan and stick with it?

Did you choke, on what and did anything help to alleviate the choking? When did you choke? Get a sense of how you performed and how well your skills were actually on display.

If you do get an offer on the callback day, congratulations! If not, they were probably jerks anyway. But do ask for feedback in both cases. Why did you get it? Why not? Any pointers to improving in either case?

Any pointers on the test performance?

# Ok. Fine. Alright then!
Starting out writing this article I really wanted to hate on algorithmic tests since that's where I have failed most. On how they are sterile, far from every day work and that they are easily gamed.

I even had this quote from one of the rejections that stings to this day to read. But the grand epilogue where algorithmic tests were written off as useless and on the job type hailed as the one true faith was hard to write.

Here's why: it's easy to see that on the job types more accurately assess if you're a good fit. Few would argue with that and few would be crazy to hire on algorithmic merits alone.

But they are expensive and time consuming to hold. From what I've seen, algorithmic tests are used as screenings. Either when there are too many applicants or when the interviewer has some lowest bar before proceeding.

Why not get the good ones that do know CS if we have plenty to choose from? I do have a CS degree, but even so I go blank on the algorithmic tests. Partly due to choking, but partly because I'm rusty.

And I can't shake the gnawing feeling that I should be better at this. But I'm not. The part of me that wants to hate is the same part that secretly wants to get into the club of algorithmic wizkids. But without the effort they put in to get there of course.

And however much I'd like to, I can't hate away the fact that knowing how to churn out an algorithm will make you a better programmer. The "I should be better at this" part, y'know?

Even if you never code one up on your daily job it's still in the background of much of what you do. Similar to knowing how the machine operates underneath you with heaps and stacks and registers will make you a better programmer.

The goal of this blog is to improve as a programmer. Which means I have to endure irony or...

Ok. Fine. Alright then!

Point taken. 🙄.
