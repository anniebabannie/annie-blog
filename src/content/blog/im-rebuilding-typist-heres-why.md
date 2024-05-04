---
title: I'm rebuilding my notes app, Typist, and here's why
publishDate: 2024-05-05
excerpt: I'm starting on a journey to rebuild my note-taking app, Typist. If you don't know (and why would you?), several years ago, I built a simple note-taking app for software engineers.
tags: ["typist", "side hustle", "open-source"]
---
I'm starting on a journey to rebuild my note-taking app, Typist. If you don't know (and why would you?), several years ago, I built a simple note-taking app for software engineers. It was basically Apple Notes, but with a markdown WYSIWYG. No bells and whistles. It was snappy and easy to use, and I used to use it every day. Not to mention, it was beautiful:

![](https://fly.storage.tigris.dev/rough-night-1901/blog/2024/im-rebuilding-typist-heres-why/typist-app-screenshot.png)

## Why I abandoned Typist

My efforts on this project stopped when I took a sabbatical from tech at the end of 2022. I was burnt out on everything. I didn't want to be an engineer. So, I quit my job and pursued a different career for a short time.

When I came back to tech towards the end of 2023, I had run out of money – twice. I was so thankful to have a job, and the idea of picking up my old side hustle was the last thing I wanted to do. And even now, as I dust off this little project, I am wary. I have a tendency of getting too excited, diving in too deep, too quickly. When I fall, I fall hard, so this time around, I am putting up guard rails.

## The new rules

Outside of work, I spent much of my free time building Typist, back when it was my current infatuation. It was almost a compulsion, how much I was drawn to work on it. It was thrilling, and also, it sucked the life out of me.

**I am too fucking old for that shit now.** I refuse to put all of my joy-eggs in that engineering basket. I refuse to get my hopes up, refuse to get so caught up in the future of what it _could_ be that I miss the everyday delights of small progress. So, in order to protect myself, I am enforcing four rules:

1. Whatever I build, it must be open-source
1. Monetization is off-limits
1. I must document my progress publically
1. Do it for fun

## How it's going, and what's different

I am starting Typist over from scratch; the only thing I'm keeping is the design. I probably won't even keep the name – I want a fresh slate.

### The backend: Electron → Tauri

The scariest change I'm going to be making is switching from Electron to Tauri. Electron is really convenient, but it's _massive_ because it bundles Chromium. As a result, it's far too easy for small apps to be hundreds of megabytes in size.

Enter Tauri: A Rust-based alternative that uses the underlying web view for whatever operating system you're using. On macOS, this is Safari, on Windows, its Edge. This makes the app bundle MUCH smaller.

The cons of using Tauri? I now have to learn Rust. Wish me luck.

### The frontend: React → Svelte?

I am not sold on this change, but I'd like to _try_ Svelte. I've started writing a bit of the interface in Svelte already, and I really like that it has strong support for accessibility. I'm also just kind of burnt out on React.

React had originally attracted me because of its simplicity. Back in the olden days, after trying Angular 1.0, React was a breath of fresh air. All you needed to know was, like, six-ish methods? And then you were good to go. I ate that shit up. Goodbye, spaghetti jQuery code.

But now? I'm less excited, and if I'm being brutally honest, I just find it hard to keep up. My whole world is not React, and while I don't know if I'll like Svelte over the long-term, I'd like to give it a shot.

### Note storage: Database → MDX files

Typist used a database called Realm, which I think was purchased by Mongo at some point. I had gone back and forth between using a database to store notes and using physical markdown files, but I chose a database because I knew I wanted to store metadata, and I wanted something that would automatically handle write-conflicts.

However, when I started getting users, one of the most common complaints was not knowing how to access their data. Plus, I didn't yet have a way of importing/exporting `.md` files.

This time around, I'm going to store them not only as actual markdown files but also as MDX files, which allows for _frontmatter_. Frontmatter is just another term for metadata, and in `.mdx` files, it's stored at the top of the file in a list of key-value pairs.

### Desktop-only → Web app + Desktop

Typist was an Electron app, but it never had a web version, and I'd like to change that so notes can be accessed on any computer.

### New name???

I think I have a new name for my open-source, non-money-making version of Typist, but I don't want to share it just yet so I can let it simmer in my head for a bit. Will share when I finally publish the first iteration on Github. 😉

That's all for now! As per rule #2, I will keep everyone posted on my progress. I am hesitantly excited. Let's see how this goes!