---
title: "Do only punks chunk?"
date: 2014-10-29
summary: "Lessons learnt taking the course learning how to learn on coursera and how you can apply advices given there to learning code better"
---

**Update**: I've written a more hands-on and methodical post on how to learn a new code-base [here](https://www.iamjonas.me/2020/08/how-to-read-code.html).

I'm currently enrolled in an [MOOC](http://en.wikipedia.org/wiki/Massive_open_online_course) taking the course [learning how to learn](https://www.coursera.org/course/learning). I figured this might be some well invested time since learning its a large part of any coders day. I mean - why not see that you are up to speed with the latest and greatest?

This post is actually an assignment in where I try to pass forward how to learn more efficiently and with better retention backed by current research.

## The goal and purpose
This post will be focusing on effectively learning code - with a large and unknown code base as an example.

But really, any code base is in part large and or unknown. Even if its the same code base where you have spent years and years things still happen in it. Either your team mates or your former self from yesteryear have made changes that you need to learn and re-learn.

## Introducing: chunking
[Chunking](http://en.wikipedia.org/wiki/Chunking_(psychology)) is a term used in the course above denoting:

"Chunking is the mental leap that helps you form bits of information together through meaning. The chunk will be easier to fit into the larger picture of what you're trying to learn"

Sounds familiar right? A large code base is uncharted territory - you have no gauge on what is what. Where are the important parts? What are (for now) irrelevant details?

In other words how you learn any large piece of information - take small scattered bits in pieces to unite them into more coherent pieces iterating on those pieces in turn with the goal of relating the pieces together to form a big picture / overview.

## Forming chunks
How then are these chunks formed? According to the course - the best way to form chunks reliably is to:

**Focus to use all of your working memory** - that means uninterrupted time spent studying the information you want to retain and relate. Since the working memory slots are [very limited](http://en.wikipedia.org/wiki/Working_memory#Capacity) that means that any distractions during your focus time will steal away precious resources for building the memory. I e - bye twitter, bye youtube, bye cellphone.

**By understanding the main idea** - try to summarize what the main points are. What are details that are relevant to the understanding and what is not. In code this means what are the main methods, classes, members, files, packages etc.

**By using the chunk in practice** - A chunk is something you know outside and inside. Something you can pull up from memory in a flash. You also know when the information can be applied and - this is key - when it is not applicable. You need to translate the information from mere fact to an a active living piece.

This is done by using it in practice. Write a test-harness for it. Launch it in a debugger. One of my favorites is to break it. What happens when you give it random values? When you remove a piece? How does it break - and why does it break the way it does?

## Chunks and your memory
For a chunk to be of any use it must be stored in long term memory with easy retrieval. So our next task is to transfer it from working / short term memory to long term memory. This is easier said than done - it does take time and perseverance. There are however some proven methods that speed up this process.

Recalling facts from memory right after studying them [helps strengthen the memory](http://lrc.cornell.edu/events/Papers_13/Haarman5.pdf). Look at the piece of code - then look away and try to remember the key facts.

Now that the code makes sense - try this. Make a session a day of actively remembering the code and its key concepts.[Spacing out repetitions](http://en.wikipedia.org/wiki/Spaced_repetition) of active recalling something has [shown to increase the retention](http://memory.psych.purdue.edu/downloads/2007_Karpicke_Roediger_JEPLMC.pdf) of the memory. Software such as [anki](http://ankisrs.net/) can help you with this.

Related to memory but not in the active sense is that memory is consolidated and [strengthened during sleep](http://newsinhealth.nih.gov/issue/apr2013/feature2) - so for both your health's sake and for your professional career - don't skimp on sleeping :) Get what you need (which is for most folks at least 7 and ideally 8 hours per night).

Any type of memory also [benefits from exercise](http://www.webmd.com/fitness-exercise/news/20070313/get-fit-improve-memory) - so again for the sake of your health and professional career make some time for exercise during your week. You're now sleeping andrunningfar away from anykeyboard - and you're still learning code. Great huh?

## Put the chunk in context
The chunk means little if it does not have a place and context in the bigger picture. Remember that we are trying to fit things together to form a bigger picture.

I like to beef up and place the chunk in context with questions. Questions is a great learning tool. For example:

Where does the chunk live?  
Where does it connect with the the rest of the application?  
What are its ins?  
What are its outs?  
Who is it calling?  
Who is calling it?  
What does it add to the application?  
Why was it created?  
Could it be replaced with something different - if so - what?  

And so forth. Its all about relating the chunk to its surroundings and validating its existence (a good validation of that its worth remembering is that it fits snugly in with other pieces).

## Chunking a large code base
This should have come as the first section but had to go after the concept of chunking was clarified. Chunking is good and all - but can be ineffective in building the big picture understanding unless you apply it in the correct order.

Its about learning the main points before delving into details. In books you can do something called a picture walk where you glance over the pages quickly to get the overall gist and get some ins on where the main concepts are (those worth learning first).

A code base is maybe like a book if you're lucky. There might be a well defined entry point, a nice package structure with documentation to go laying out the main concepts. If its anything like it usually goes there is no such thing. Everything is intermingled with only [RTFS](http://catb.org/jargon/html/R/RTFS.html) as documentation.

So how to get an in on the main concepts? A primitive hack is to actually talk to colleagues. Ask them what the main entry points are.

Another way in is to mine any version control data. Classes that change often might be prime candidates for main concepts. Classes that are referred to often by others are other main concepts.

Do spend some time on getting grips on the main actors before delving in to building chunks or will have a hard time relating chunks to each other since vital main parts are still missing.

## The ancient art of remembering
Actually trying to remember code does seem a bit vestigial. I mean you have the files on your computer right? Why not simply search through them when needed - look up on demand so to say.

I'm guilty of not trying to recall and build an active memory over the code base. In this day of IDEs and grep:s the need to recall things are marginalized. And its a pity.

Through recalling you'll build stronger chunks - and via stronger and larger chunks you'll gain insight to spur creativity with making new and better things. But all of this starts with a deep knowledge and active understanding of the material. And it starts inside your head - not in your IDE.

Problem solving (as in finding bugs for example) is not a passive activity. Its a very active. The more and stronger chunks you have - the more ins you have on a potential solution. When problem solving you need to see patterns - and having passive knowledge will not help you.

## The kicker: the goal
I started off this post with stating the goal of it. I really think that this is the most important advice in all of this. Know your goals with where you are heading. That simple question - what is the purpose or goal of this.

Time is precious - use it on things that you have a clear goal or purpose of (the purpose could be curiosity about something new - that's totally fine). The goal is then to learn something new - but be clear on why you want to learn it and what the purpose of learning it is.

Its like thinking about the learning as a chunk and where it fits in with your larger picture of what you are heading with your learning.

So no - not only punks chunk. Everyone should chunk!
