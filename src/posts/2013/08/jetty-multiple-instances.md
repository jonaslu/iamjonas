---
title: "Jetty Multiple Instances"
date: 2013-08-01
summary: "Running multiple instances of jetty from the same installation"
---

**Edit:** This post was written using Jetty 9.0.4 - and I haven't kept up with later releases. This might be simpler or changed in later versions.

Having fought Jetty the last couple of days I’d thought I’d document this. Its not such a far fetched use case – running multiple webservers from the same installation.

## Background
First off, if you’re thinking about using Jetty – do it! Jetty is pretty awesome and with the event of jetty 9 moving its documentation to [github](https://github.com/jetty-project/jetty-documentation) it has really taken off. It used to be a bit arcane with little documentation, but I’m really impressed with Jetty 9 so far. Its open source and its pretty simple to get up and running.

However Jetty seems more geared towards the “simple” use case of embedding it or running it for deploying one or maybe a few webapps from the `webapps/` directory using one instance. While that’s part of the simple to get up and running deal it wasn’t too obvious how to get several instances from the same install (i e the dev, stage and production instances).

## Y u want servers?
So, why all this? The reasons were these: the production server runs only on one install with one webapp. Staying as close to the production setup spares some gray hairs. Also Jetty can only set one debug port per instance and since its the same code base but different versions of it, it would be difficult to catch your request to a specific version – you’d have to somehow filter on the incoming request path in your breakpoint if its even possible. Plus only one webapp can be mapped to the root context `/`.

At the same time wanting to avoid maintenance and hard to find bugs due to version differences when upgrading it should all be served from the same install.

## Webapp folder structure
Here’s the setup I went for: All applications are kept under the same folder (webapps/ in the Jetty installation). This stemmed mostly from experience that Jetty seems very tied to its installation folder. Running things from elsewhere turned up paths not found errors. This might be possible to do with system properties, but I didn’t manage to get them into all places they needed to go. Staying with the Jetty installation folder as a base makes it more portable as you can use the install dir as a starting path for everything. So a fresh install should (in theory) just be to move the webapps folders into the new installations webapps folder.

The folder structure looks like this:

``` text
  | - etc
  ...
  | - webapps
    | - dev
      | - dev.xml
      | - dev.war
      | - start.d
  | - dev.ini
  | - dev\_jetty\_config.xml
    | - stage
      | - stage.xml
      | - stage.war
      | - start.d
        | - stage.ini
        | - stage\_jetty\_config.xml
    ...
```

We’ll get to the start.d folders in the hot deploy section.

## .ini vs .xml
A custom `.ini` per app – according to the docs this is just command line parameters to the jvm and can be passed as such. But I like command line parameters more in a file so you can put it in version control and deploy it with the webapp. If its buried in command line switches you’d have to go and edit the windows service by hand each time something changed – and as the rule goes: If it involves manual steps – doh, I forgot!

Also you need an `jetty.xml` file per app. The Jetty docs says that you can edit the `etc/` files (e g `etc/jetty.xml`) in the install to contain several server configs but this sounds again like maintenance problems to me. By putting all config for one instance in one xml you can also keep it in your scm and deploy it with the app itself so it can move with the code.

In this setup the `dev.ini` contains only jvm parameters such as remote debug ports – I kept the rest in xml (no real reason, mostly because its easier to have all config in one file – and that file is the xml file since not all config can go into the `.ini` file)

## Xml file structure
The meat of a server instance configuration goes into its xml file.

Each instance needs its own unique `<Configure id="dev" class="org.eclipse.jetty.server.Server">` tag – its in the docs, but not so [easy to find](http://www.eclipse.org/jetty/documentation/current/serving-webapp-from-particular-port.html#creating-server-instances). It does not mention however if this applies when running in separate jvm:s or if it only applies in the same jvm. Better safe then sorry and have a separate tag for each separate jvm instance.

Start with the `jetty.xml` as a base – then cut and paste goodies from the other `etc/*.xml` files as you go into your own single `.xml` file. I ended up editing out some parts that were not interesting in hindsight, but I thought it was a better approach to get it all in there and then remove things that were not interesting afterwards.

## Hot deploy
This was a treat. We do continuous integration with the latest version built and deployed directly, so having Jetty scan a directory and hot-deploy anything uploaded there was a perfect fit. It saves some scripts shutting down the service, waiting for it to finish, ftp the .war file and starting up the service again.

Since the hot deploy scanner can only be set on a single dir this was done via context-descriptor files and separate dirs for each instance (deploying all webapps to the same folder would not work since all instances would pick up all files).

Jetty ignores any folder named `*.d`, so the start.d folders inside the webapps are used for the config files (e g `dev.ini` and `dev_jetty_conf.xml`). This way all config can be [ftp:ed](ftp://ed/) up to the webapp and start.d folder keeping them in sync.

The hot deploy mechanism scans for `.xml` and `.war` files (in that order). But because the context path (where the webapp is accessed under) is set to the folder it resides in (i e `http://localhost:8080/dev`) by default you also need a context path file named the same as the `.war` file (e g `dev.xml` for the dev webapp). The web-context file contains only what war and under what path it is served from.

## Test it
As follows:

``` bash
$> java -jar start.jar --ini==dev/start.d/dev\_jetty\_config.ini dev/start.d/dev.xml
```

In the Jetty installation folder and see what happens. Jetty will complain if some xml is malformatted or tags out of place, took some googling to correct the errors but nothing paramount.

If you’re on windows there’s now a follow up post on how to [run the start.jar as a service](/2013/11/jar-as-service-on-windows.html).

## Troubleshooting config errors
The config you have in `.xml` files are merely read by a reflection framework for instantiating the corresponding java code, so you could actually type in the corresponding code you have in your xml and debug the error straight from your IDE if some config error trips you up. Didn’t do this, but it helps explain the error messages from Jetty more.

As a last resort – get the source for Jetty – if you get error-messages in the terminal or stderr log it can be checked against the source to get a hint of what’s failing. It helped me, you know, [don’t try at random – get verifiable facts](/2013/06/bug-repellants.html).

## Multiple instances
You’re almost there! Create another with the same folder structure as dev (stage in the folder structure above) and change every reference in folders and files to stage instead. You’re now serving dev and stage from the same install with diffrent instances.

## Finally – example files
And since you’ve made it all the way down – here’s the [example setup files in a repo](https://github.com/jonaslu/jettyconfigs). Oh, don’t worry – the password and the keystore are the default that Jetty ships with.
