---
id: 1
title: Loupe
# image field is not mandatory
# you can skip it to keep the size of blog cards small
# image: /images/web-development.png 
createdAt: "2020-03-06 5:00:00"
tags:
  - javascript
  - opensource
  - programming
category: project
author:
  name: sudoshivam
  twitter: sudoshivam
  image: /images/profile.png
---

Loupe is a little visualisation tool to help you understand how JavaScript's call stack/event loop/callback queue interact with each other.

<!--more-->

![Loupe](/images/loupe.png)

Loupe
================

Instructions
--------------------------

1. Write some code in the text editor on the left.
2. Hit the save-and-run button and watch it run.
3. You can create html elements in the gray box at the bottom left by hitting the edit button.
4. Listen for DOM events on them with $.on("button", "click", function () { console.log("hello") }
5. Hit the tool icon at the top left to open a menu with extra settings.

How does this work?
---------------------------------------------
<ul>
<li>Loupe runs entirely in your browser.</li>
<li>It takes your code.</li>
<li>Runs it through esprima, a JS parser.</li>
<li>Instruments it a bunch so that loupe knows where function calls, timeouts, dom events, etc happen.</li>
<li>Adds a whole bunch of while loops everywhere to slow down the code as it runs.</li>
<li>This modified code is then turned back into JavaScript and sent to a webworker (in your browser) which runs it.</li>
<li>As it runs, the instrumentation sends messages to the visualisation about what is going on so it can animate things at the right time.</li>
<li>It also has some extra magic to make dom events, and timers work properly.</li>
</ul>

Code is on <a href="https://github.com/sudoshivam/loupe">Github</a>
