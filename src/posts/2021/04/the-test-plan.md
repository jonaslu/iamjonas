---
title: "The test-plan"
date: 2021-04-26
summary: >
  "The tests are timing out again" someone yells. "Alright I'll bump them" you instinctively respond. Then you pause and feel uneasy. Is there another way?
---

This is just between you and me, ok? I'm not comfortable with releasing code that's only been unit-tested. I've [preached](https://www.iamjonas.me/2021/01/literate-atomic-commits.html) [at](https://www.iamjonas.me/2020/11/how-to-own-code.html) [lengths](https://www.iamjonas.me/2020/06/overview-mode.html) on this blog on how being correct is the single most important thing for a developer.

How can I get away with that?

## Why u no unit-test?
This has been a long time concern for me. While the world seems to embrace unit-tests and code coverage as a measure of quality I've grown more distant to it. The back-story is as following: I've rarely been saved by a unit-test.

I'm saved by them mostly when I'm new to a project or have been working too long on the same feature. I've spent considerable time on writing unit-tests and even more time fixing them when they break.

Unit-testing can easily take up to twice the time it took doing the actual change. I've rarely thrown away unit tests out of fear that something might break. I've done terrible things to get a piece of code under test. Good examples are dependency injection from hell, putting in interfaces just to get values out and exposing private methods of a file.

I feel bad about faking data in tests. Since test-cases take many lines of code to set up I set the bare minimum per case. And even If I would set up all the data it's not the real thing. I've spent considerable time fixing broken tests on the rare occasion a project tried to use production data in their tests.

And the worst part: I stop thinking when there's a buffer in front of me. It's the same story that brought [overview-mode](https://www.iamjonas.me/2020/06/overview-mode.html). I love to write code but unless I know pre-hand the direction and what to do there's plenty of time to waste finding out the hard way.

And I'm still not convinced it works when it hits production.

## What's a unit-test?
For the sake of discussion let's nail down what a [unit-test](https://en.wikipedia.org/wiki/Unit_testing) does. The unit word refers to testing the smallest possible unit of code at a time. This means testing a method in a file.

A unit-test is a program that is used to prove or disprove facts about another program (the code under test). It comes in some form of setup of data, execution of the routine under test and an inspection of the result comparing it to an expected outcome.

There are two main flavors:
[Black box testing](https://en.wikipedia.org/wiki/Software_testing#Black-box_testing) where the details of the method is unknown and you only look at the result returned from the method given some input.

[White box testing](https://en.wikipedia.org/wiki/Software_testing#White-box_testing) where the test knows about the details inside the method under test. The test includes passing stubs / fakes / mocks that are used to record calls to other methods that the method under test does.

The stubs / fakes / mocks can then be inspected after the method under test returns to see that the right calls were made in the correct order with the correct arguments.

## What problems do unit-tests solve?
After extensive research and thinking I've come to the conclusion that unit-tests solves two major concerns developers have:

1\) It's a tangible "proof" that your unit under test works as intended. It's a way for you to show yourself and others that your code works as you said it would. Code coverage is often used in combination with unit-testing as some measure of how well tested a code base is.

2\) Regression. Computers are fast and plenty these days. The computer does not forget but you do. So when your memory of that the program is supposed to do lapses the computer catches it and saves your face!

There are other arguments for unit-testing too such as documentation and as a method to drive the design using TDD. But all of these add up to the two above. Proof and peace of mind when you make changes.

## What's the cost?
It's not all rainbows and unicorns. Unit-tests have their drawbacks.

The first and foremost problem is maintenance cost. Unit tests by their very nature must be tightly coupled with the code they're supposed to test. If the production code (meaning the code under test) changes so must the test-code.

Testing often include having to change the production code for the worse in order to make unit-testing possible. DHH calls this [test induced design damage](https://dhh.dk/2014/test-induced-design-damage.html). Thus production code becomes harder to reason about and by consequence harder to prove correct.

## What about data?
Unit-tests also introduce the thorny problem of what data to feed the code under test. Most methods worth testing take some object as input. Unless your data is static for now and ever the data you feed the method and data in production will diverge.

The more complex the object you send in the more ways of combining input you have. The amount of combinations of input-data easily sums up to more atoms than we have in the known universe.

Better think closely on what combinations of those you choose to run. James O'Copliens eye opening article [why most unit testing is waste](https://rbcs-us.com/documents/Why-Most-Unit-Testing-is-Waste.pdf) goes into detail on how knowing what combination to test is at best guesswork.

Then there's the problem of how close you want to inspect the result after a test. Only the simplest of black-box testing when returning something like a digit or boolean can be completely checked.

If it's an object of some type returned - do you check every property or just a couple? If it's mocks and stubs involved are you ok with shrugging saying "it was called 2 times, that's enough" or do you verify each argument of each invocation for all tests?

## Test code is code
Tests is code and contribute to the cognitive load regardless even if your IDE hides them from you. You are not free to reason and think only of your production code.

You need to take into consideration the tests whether you like it or not. And as code tests are not immune to bugs. Tests operate under the same laws as any piece of code: you will make mistakes here too.

Tests tend to get the stepchild treatment. Production code is what hits users. Users are what informs CEO:s and eventually your salary. That tends to put developers on the same page: Don't ship bugs. Do the best job you can.

The architecture of production code gets debated endlessly. Testing and the test-architecture seldom does. I've heard "we do unit-tests here", but I've yet to hear "Here's how and what we unit-test".

I've often seen unit-tests violate the [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself). A unit-test is supposed to verify one and one thing only. It's an anti-pattern to check several things in one test. This can lead to a fair amount of duplication of setup-code only to test a slightly different result or a side-effect of generating a result.

Refactor you say? That's really hard unless you're sure you've tested all there is to test as the next case might break what you thought was the general rule.

Here's the final straw: I'm still not sure the code works. The individual pieces seem correct, but what happens when it hits production? If I make a change over here, will the tests over there catch the errors?

It depends is not a reassuring answer...

## An alternative
I've used a concept called test-plan in my commits for longer than 7 years. Both on professional projects and on my side-projects. It originated at a team I was part of as a way of describing how you had verified your changes when there were no unit-tests.

I've read about other teams using the same concept too notably in react native with [this article](https://medium.com/@martinkonicek/what-is-a-test-plan-8bfc840ec171) from Martin Konicek.

Here's how it works:
Last in your commit-message under the heading test-plan in ascii bullet-form describe how you verified your change. It involves the same building blocks as a unit-test: some form of setup, execution and result verification.

In my plans I'll start with the negative cases first and end with the often much fewer happy-path cases. For me it helps to think of breaking things before I congratulate myself for a job well done.

Here's a cherry-picked commit message as an example from one of my repos:

``` markdown
Add reading of a .env file

Using env-variables as variables gets tedious to always set
them when running ain.

By using an .env file we can persist values.

This will also help saving off history files by slurping up the
.env file in the future.

Test plan:
* Run ain in a directory with no .env file.
  Verify command works as before (no regression).
* Add an .env file and make it not readable (chmod +x).
  Verify ain exists with an error-message on file
  not readable.
* Add an .env file.
  Make an error in it (such as an empty variable GOAT=).
  Verify ain exits with an error from envparse.
* Have a template with some environment variable in it
  that is not set in the usual shell environment.
  Add the variable to the .env file, run ain and verify
  value is used from the .env file.
* Override the env-variable set in the file on the
  command line and verify overrides takes precedence.
```

The leading question when writing a test-plan is:

"How can I confidently verify this as quickly as possible?".

## Executing the test-plan
A test-plan might sound like it's all manual testing. While there usually is a fair amount of manual testing in my case it does not put code to verify code off limits. The fastest path to verification can include code and I often add code to verify.

Here's an another example:
``` markdown
Test plan:
* Have some body-content and hack the tempfile-creation
  and set it to a non-writeable folder.
  Verify ain errors out with "Could not create tempfile"
  and exits.
* Omit body and verify no temp-file is created or included
  in the backend-call by commenting out the tmpFile.Close()
  (file should be left in the temp-directory if used in the call).
* Verify the happy path (such as having some valid json
  with the header Content-Type: application/json) and
  POST it to an endpoint. Verify both curl and httpie can
  successfully post content.
* Run the call above and verify temp-file is removed when
  ain exits.
```

The two major differences to a unit test is that firstly I don't commit that code. It's throwaway code for verification purposes. Also I'm now free to do even more terrible things to a file in order to verify it than I could with a unit-test.

I'll happily sprinkle printfs, comment parts out, dump data to file, intercept network calls and so on. Then I simply git reset away that code. How it was done is documented in the test-plan.

The second difference is that the focus is not on the unit level. It's at the minimal level necessary for making sure the whole system works with the new change. Everything is fair game in order to obtain "proof" it works as it should with your new change.

Since it's text-only you can (and should) test two things ore more in one setup. You can refer back to previous setups in a new case or reuse state from previous bullets. Use code-coverage if you can when executing the test-plan.

Code coverage is a questionable proxy for quality but it is a good check for covering your bases.

## Compared to unit-tests
Just as unit-tests are something concrete shipped with the code change so is a test-plan. Since the test-plan is attached to a specific commit there is no maintenance to do. It is forever true because it's frozen with the code in the commit.

A simple git blame on whatever row you're on will bring up how that row was verified. Coupled with [literate atomic commits](https://www.iamjonas.me/2021/01/literate-atomic-commits.html) you now have a wealth of context on not only why the change was done but also how it was supposed to work given the test plan.

Test-plans can and should be something to include and comment on in a code-review. The reviewer should have input on what and how you tested. They can themselves run your tests as you've described them and assure themselves you knew what you were doing.

## Think first
What I like most is the fact that I have to think first. Akin to [overview-mode](https://www.iamjonas.me/2020/06/overview-mode.html) it forces me to focus on the what to verify before I focus on the how. This makes code verification a surprisingly creative act.

There's no end to the options when you are no longer tied to frameworks, tools and code. Need a custom service to read values sent over a network call? Build one! Need to inject values from some third party application? Build a fake service for that! Need to quickly set up a certain state? Script that out!

At the end of a project I'll usually have dozens of scripts and external fakes I use heavily in verifying my code. [Sider](https://github.com/jonaslu/sider) is an artifact of this. I also believe that here is where you can speed up development time.

As the leading question goes: "How can I confidently verify this as **quickly as possible**?".

## Exploratory testing included
Starting at the system level and scoping down to the minimal level needed to verify means you'll learn the application much deeper than seen only through the lens of unit- and integration-tests.

At the beginning of a project this means going end-to-end while inserting measuring points to verify. This is of course time consuming. But as time progresses you'll know more on how to scope things down from the entire system to smaller levels while still being positive that the system works.

This is why I feel a lot more confident in code I've tested using my own scripted test-plan. It's been tested at the system-level under conditions and data as close to production as I can reasonably make it.

A unit-test is simply too far away from the real thing and too sterile to reassure me. It feels like tapping on a mic and yelling "Hey, is this still on?"

## What about regression?
The obvious drawback of test-plans is that they do not help with regression. Here's a thought experiment for you: what would happen if you decided right now to throw away all of your unit-tests in one daring commit?

A big whopping nothing, that's what. Nothing changed except the tests are now gone. Your application is as correct (or buggy) as the previous commit. Only a new change would jeopardize this wonderful zen state of yours.

That's where the concept of [literate atomic commits](https://www.iamjonas.me/2021/01/literate-atomic-commits.html) come into play. The focus which correlates to the size of the commit is your foremost weapon against regression.

The smaller your commit is the less can regress and then more you can know where regression would happen. Make sure you're rebased to the top of the branch you're merging to so you can isolate what happened in your changes.

Trust that the app is in a good state before your change (or fix that first).

## What about refactorings?
The same answer holds again: more focused changes = less chance of regression. And even if you do get the code under test before a huge refactoring as suggested in Martin Fowlers [Refactoring](https://martinfowler.com/books/refactoring.html) there's nothing to say you can't throw those tests away once done.

Putting code under test helps you build mental models of how the application works. But so does writing test-plans. So you could swap out getting the code under test to retroactively writing a test plan for the (small) piece code you are about to change and execute that test-plan with your changes.

## What to automate?
If we've invented so much computing power, what do we do with it? There's got to be something we can automate, right? Here's where you can get smart on a testing strategy and the time spent on automating.

There is usually no talk about risks when I hear testing mentioned among developers. It's an all or nothing approach. The gold standard is 100% coverage regardless if 1% of that coverage carries 99% of the risk.

Each application has a few critical paths that cannot fail. It usually involves where the money is generated. These carry enormous risk. An example is an e-commerce site. If you can't add items to the basket and place an order then there is no point in having that site.

This is a highly critical path. Automating tests on this path would have a high risk / reward ratio. So for that extra peace of mind: automate a few selected critical path-tests as end-to-end and as close to production as you possibly can.

Actively maintain these tests with great care. Refresh data, review, update and prune regularly.

## Hypocrite
If you answered the question "How can I get away with this?" at the outset with: "By being a self-righteous hypocrite", you're were correct! Using test-plans and a few carefully selected end-to-end automated tests has saved me tons of time while keeping the bug count low over the years.

This means I have time over to focus on being an even more self-righteous hypocrite.
