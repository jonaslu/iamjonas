---
title: "Surviving Vistitor Spikes"
date: 2013-11-16
summary: "Does your webapp survive several hundred percent more visitors than what you’re used to? Practical tips on handling this (and having fun with it)"
---

A big tech vendor whos logo resembles an Apple recently released their latest phone. One thing they do know is how to drum up hype around a release. Release parties with dj:s and high fives abound – pressure also mounts on webapps vending their new product.

The expected load was about 2M visitors on that day, whereas around 40-50k concurrent visitors the first couple of minutes. We normally serve about 2-3k users (per day) so needless to say this was something out of the ordinary.

How do you go about handling that kind of load? it’s like a towering storm at the horizon and all you’ve got is cardboard for shelter.

## Initial shortcuts
Throwing more hardware at this situation is a tempting shortcut. Beef up with a couple of more cores on the CPU and double, no wait, triple the memory. This is a good strategy if you know that hardware is the problem.

But to be able to throw more hardware at the problem you still need to see what happens when you max out the number of users. Hardware might not be your problem at all and only by knowing that hardware is the limitation can you solve it by adding more hardware.

Another tempting solution (with more geek flair) was to tune the parameters of all applications involved. The black box kind of thing – tune up the number of idle and max threads. Scratch your head a bit, go hmmm… the connections close to early, better tune up the SO linger param. Those things that polish your ego a bit because man, this is not science – **this is art!**

## No shortcuts
However, it soon became apparent that none of these solutions were the right way to go. These are fine solutions, if they are your bottleneck for scaling out. But they weren’t.

Just like when debugging we fell for the ol’ [problem origin bias](/2013/06/bug-repellants.html). These weren’t the origin of our inability to scale.

## Get your data!
You need to max out your application. Not only because it’s fun (and it is) but because you need to see what’s happening when it’s happening. And you need to let go of any pre-baked solution however cool and or easy it might have been. You need verifiable data on what the bottleneck is.

To do this – try to get some numbers on expected load. You want to know the peak concurrent users and numbers from similar launches are a good starting point. If you get users per hour (common measurement when using some analytics tool) – you can use some [online counter](http://www.webperformance.com/library/tutorials/CalculateNumberOfLoadtestUsers/).

But be careful, do [read up](http://blog.xceptance.com/2013/07/26/concurrent-users-the-art-of-calculation/) on what concurrent users really mean, both in the load tool you’re using and compare it to what you actually expect. If you have an estimated page load of 80 / hour – think carefully about how the curve of the load looks like.

If its a real spike, most of the 80k page views per hour will come at t0. If you survive this, the downside of the curve is easy peasy.

## Minimize impacted pages
Also, try to get info on all access paths through your webapp that the users will take during the spike. See if you can limit the number of paths – ideally limit it to one path – starting with one page. The fewer paths you have that the users can take, the more time you have to optimize these pages.

If you spread the users throughout many pages there is a high risk that one of these pages (and it will be the page you didn’t check) do something suboptimal and brings the server down. Since this is a short period user flow, we need to focus on the landing page(s) first and most. If it does not load fast enough, users will start pressing refresh thusly increasing the load even more.

Past the first page, there will be a slowdown. Some will hesitate or look around so the number of requests for the second page will drop significantly. If your users gets the first page that is. So focus intently on load testing the first page(s), or the pages until there is a natural pause.

## Monitoring tools
I’ll assume for simplicity that the webapp consists of a webserver and a database part. For monitoring on windows good tools are:
*   [Currports](http://www.nirsoft.net/utils/cports.html) for checking open connections
*   [Process explorer](http://technet.microsoft.com/en-us/sysinternals/bb896653.aspx) for cpu, disk and network IO

And for linux:
*   [lsof](http://linux.die.net/man/8/lsof) / [netstat](http://linux.die.net/man/8/netstat) for open connections
*   [iftop](http://linux.die.net/man/8/iftop) for network IO
*   [atop](http://linux.die.net/man/1/atop) for cpu, memory and disk IO

For the database itself there is usually some built in tool for checking active connections and running queries (such as [innotop](http://linux.die.net/man/1/innotop) for mysql).

Also enable logging of slow queries. Enable all exceptions and debug messages in the webapp to get more diagnostics.

## Load test tools
The default of test tools is usually to hammer the server constantly at full load. To simulate normal usage this is not such a good strategy as this represents the worst case. If you’re constantly expecting this load, you need to simulate users more carefully.

But during spikes the hammering test-tools are good enough since users actually will be hammering your server for the same page. So this is ok – you want the worst case.

We used [siege](http://www.joedog.org/siege-home/) because it was easy to install (`sudo apt-get install siege`) and did the job of hammering well. Siege takes a parameter for concurrent users: `siege -c <no_of_concurrent_users> <page>`
Siege can be configured via its .siegerc. Run `siege.config` to generate the rc file in your home folder. Make sure you turn on expire-session in the .siegerc file so you simulate new users accessing your pages.

## Fire in the hole
Now you’re all set. Fire up siege and watch all the gauges on the monitoring tools. Your app will hit a wall at some point. Siege will spit errors on connection refused and shut down the test. Hopefully one of your gauges on the monitoring tools will max out. Repeat this with siege and less (or more) concurrent visitors until your app just barely survives.

This is your baseline, and this is what you need to raise to the expected level of users. The gauge maxed out in the monitoring tools is your bottleneck. In our case it was the database as its disk IO maxed out during tests. It also showed up as connection timed out because of locks on rows and tables in the database.

## Raising the bottleneck
Remember that your only mission, Jim, is to survive the tidal wave. It might only last a few minutes or hours. During this time anythings fair game to increase page serving.

Anything that can be deferred, made static, cached or simply removed is a good candidate. Be as lazy as you possibly can and do only the minimal work fulfill the path visitors will take. Put most of your work on the landing page so it serves really fast. Avoid users pressing refresh because your site is taking too long to respond.

## Procrastinate
Shut everything non-critical down. Any type of background jobs, backups (but do remember to enable them again when the spike is over) indexings, mailers, system updates and what have you. Timed jobs that might run during the spike and will eat up precious resources.

Anything that is calculated again and again even though it returns the same result – insert a cache. Such as heavy computations or large database reads. Just make sure that what you cache does not change or that the cache is invalidated when the underlying content do change.

Another one of my favorite optimizations – defer doing things until the latest possible time. Anything that makes a round trip to the database (and especially things that write to disk such as inserts, deletes and updates) costs much. Do them only when you really have to (and be grumpy about it when you do).
This was your particular life saver. We were creating a bunch of rows upon user login causing the disk IO to max out. Of course coupled with long running transactions making sure that when we hit the wall – everyone was locked out because of table and row locks.

## Go static
Static webpages serves almost instantly. Parts of your page that is generated dynamically might be made static for the duration of the spike. Find those spots where its not critical that everything is updated and make it static. Or better yet – my favorite optimization – remove it completely.

## Self goals
Check for long running transactions. They increase the chances of something locking in the database when a write is performed somewhere inside of them. They also have the nasty effect of cascading – that once a transaction starts locking too much, all others will timeout. It’s almost like a mutex section through the database.

Check for ajax-calls on your pages. These will multiply each page load with the number of calls (and possibly database calls in turn). Can you defer some of these? Can you cache them – or make them static? Or remove them entirely for the short time being?

## Disposable webapp
Armed with all of this – if you have to – make a one-time version of your webapp with any found optimizations above. You can revert to your standard version as soon as the spike has ended.


If you take this to the extreme (and this is probably what we would like to have done if we had more time) is to build an as static version of the site as possible. Take the old site offline and put up a new static frontend with only forms to collect data.

You could then write out files with collected data and read those files into your regular site – not disrupting the normal workflow that still needs to be served. Think about what actually needs to be dynamic during the peak hour. Your only target is to survive the massive first wave.

## Conclusion
Our initial reaction of throwing more hardware coupled with tuning parameters on the webserver and the database server was way off! The parameter tuning turned out to be almost useless. The hardware would not have helped because disk IO was the bottleneck, and swapping out the disks for SSD:s were not feasible.

Another good reminder to get verifiable data on the problem first so you solve the right problem.
