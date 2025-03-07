---
title: Semantic CSS vs Tailwind Components
publishDate: 2024-03-12
excerpt: Often semantic CSS and Tailwind are seen as opposites approaches, but could they have more in common than we think?
image: semantic-css-vs-tailwind-components-thumb.jpg
image_alt: An illustration of two fighter women facing each other as if at the beginnging of a fighter game match. Under each woman, is a bit of code depicting, on the left, semantic class syntax of "dot button". On the right, it's the React-style component syntax of "<Button/>". The letters V.S. are stamped right in the middle of the image.
tags: ["tailwind", "css", "semantic css"]
---

The debate between semantic CSS and Tailwind often makes it seem like there's only one camp to belong to, but I don't think it's that simple. In this article, I want to take a look at _why_ each method exists, why you might want to choose one over the other, and if there might even be a compromise between the two.

<h2>Let's define semantic CSS</h2>

To me, no library better exemplifies semantic CSS than Bootstrap. If you weren't building websites in the 2010's, you might not have used it before, but Bootstrap was the most popular styling library at the time and is still used by millions of sites today. Semantic CSS was the foundation of how Bootstrap worked, and why it was so loved.

Let's take a look at an example.

If you wanted to output various "alert" elements using Bootstrap, you could do something like this:

```html
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert—check it out!
</div>
```

…To achieve this:

![](https://fly.storage.tigris.dev/rough-night-1901/blog/2024/semantic-css-vs-tailwind-components/bootstrap-alert-demo.png)

In other words, **semantic CSS defines classes for specific design components.**

_Pssst: Some of you already know that Bootstrap also includes utility classes similar to Tailwind. We'll get to that later. 😉_

<h2>Let's define Tailwind components</h2>

Tailwind is made up entirely of _utility classes_ that make immediately apparent what styles they apply. The term _Tailwind component_ is a term I've coined for this article, but it's nothing new to folks who regularly use Tailwind with frameworks like React. A Tailwind component might look something like this:

```tsx
export default function Button({ children }) {
  return(
    <button 
      className="rounded bg-blue-600 hover:bg-blue-700 text-white px-2 py-8 focus:ring-2 focus:ring-blue-100">
      {children}
    </button>
  )
}
```

At first glance, Tailwind components look messier and more complicated than their semantic CSS counterparts. That's a lot of classes for one button! However, this is only true for the _definition_ of these elements; using them inside your app is as simple as this:

```tsx
<Button>Sign up!</Button>
```

So, to all the Tailwind haters: yes, Tailwind can look ugly. And you'll likely find the ugliest Tailwind spaghetti inside your components. However, if you are using a design system and properly componentizing your commonly-used elements, then most of the time you won't be seeing those novelas of classes.

<h2>Shared goals (and problems)</h2>

Semantic CSS and Tailwind components have the same purpose: to abstract away the details for a cleaner, simpler element. However, in both cases, **this is a double-edged sword.** When the underlying styles are hidden – either inside a class OR a component name – you lose visibility on _what that element looks like_.

Now, is this _really_ a problem? No. We _want_ abstraction, particularly when building the elements of a design system. Still, even with this shared issue, I prefer Tailwind, and this is why.

<h2>Tailwind abstracts it better</h2>


So, while both semantic CSS and Tailwind abstract away details, Tailwind does it better. It is always quicker to write the Tailwind class than the underlying CSS. For example, let's say you're building a grid of elements with three columns. In Tailwind, you could use the class <code>grid-cols-3</code> , which is much shorter than its definition: <code>grid-template-columns: repeat(3, minmax(0, 1fr));</code>

![](https://fly.storage.tigris.dev/rough-night-1901/blog/2024/semantic-css-vs-tailwind-components/tailwind-tweet.png)

In both approaches, you're still having to apply the same underlying styles, but with Tailwind, it's simpler. Plus, you don't have to switch to a separate stylesheet to make the changes – you can just make your edits to the markup directly.

<h2>Tailwind's greatest advantage is not seen in components</h2>

Despite all this talk of abstracting away styles, the biggest reason I will always reach for Tailwind is that it prevents me from having to come up with names for things that do not need to be named. For example, you might just want to center some elements, or adjust the margins a bit. **You don't need bespoke semantic classes for positioning elements.** _This_ is where utility classes really shine.

<h2>A compromise</h2>

If you _still_ hate Tailwind and love your semantic CSS, but acknowledge the usefulness of utility classes for positioning and minor tweaks, I want to give an example of a library that does a great job at combining the best of both worlds: **purple3.**

![](https://fly.storage.tigris.dev/rough-night-1901/blog/2024/semantic-css-vs-tailwind-components/purple3-screenshot.png)

This is the [CSS library used by Heroku](https://design.herokai.com/purple3). It's essentially a bespoke Bootstrap-like library that contains a mix of semantic and utility classes. It's worth pointing out that the Heroku dashboard is written in Ember (or at least it was when I worked there). Having purple3 meant that if you weren't on the Dashboard team, but still wanted to build tooling for users (as was my job), you could use whatever frontend framework you liked (for me, React) and still adhere to branding guidelines, all thanks to a single CSS library.

For example, you could use single class names for defining buttons:

![](https://fly.storage.tigris.dev/rough-night-1901/blog/2024/semantic-css-vs-tailwind-components/purple3-semantic-classes.png)

But you could _also_ reap the benefits of atomic utility CSS classes like these:

![](https://fly.storage.tigris.dev/rough-night-1901/blog/2024/semantic-css-vs-tailwind-components/purple3-utility-classes.png)

The list of utility classes in purple3 is not as comprehensive as Tailwind, but it's pretty damn close.

Even though I've moved away from these types of libraries and prefer Tailwind, I still think these types of CSS frameworks are a great compromise between semantic CSS and Tailwind components. What do you think?

<h2>Conclusion</h2>

Of course, there's more we could dig in to: how should you define variants of design elements or use semantic CSS _in_ Tailwind? But that's for another post. Either way, I hope this article made you think, and perhaps, made you a bit less antagonistic about the other side, no matter which approach you like best.
