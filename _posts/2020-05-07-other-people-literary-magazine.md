---
title: Other People Literary Magazine
role: Brand, Product, Developer
category: UX/UI — Branding
thumb: "/uploads/thumbnail-01-01.png"
date: 2020-04-19 00:00:00 +0000
layout: study
medium: Creative Cloud, Figma, Jekyll, Sass
link: https://otherpeoplesd.com/
excerpt: Building and developing a web reader predicated on readership, modularity,
  and management
role2:
- Brand
- Product
- Developer

---
## The site
![](/uploads/otherpeople01.png)_Hero_

![](/uploads/otherpeople02.png)_Homepage explorer_

![](/uploads/otherpeople04.png)_Fiction_

![](/uploads/otherpeople05.png)_Visual Arts_

## The menu

![](/uploads/otherpeople07.png)_Dropdown menu_

![](/uploads/otherpeople06.png)_Globally implemented instant search function_

## Branding

### Logo
![](/uploads/56E20A87-FC33-4B52-9B77-0669479E46D3.JPG)

### Typography
![](/uploads/basier-font-06.jpg)![](/uploads/basier-font-03.jpg)_[_Basier_](https://www.atipofoundry.com/fonts/basier) by Atipo Foundry_

## Objective

The objective of this project was to create a website for Other People Literary Magazine. I also had the task of leading a team of designers and developers to build it. In having a team of students that would eventually graduate and go off start adulting, we needed to be mindful of making a site that could easily be passed onto others.

## Role

The team consisted of the other creative co-director and a product designer.  I was responsible for overseeing and developing the **UX/UI design**, **frontend development**, as well as designing the overall **brand/identity** of Other People. The team worked in conjunction during our ideation.

## Brainstorming

When first brainstorming this project, we wanted to **create an experience focused on readership/viewership**. We also wanted to **create a modular design system**; In doing so would pave way for succeeding developers to carry on the work fluidly. The third objective was to **create a site on a content management system** so that the editorial team can easily update the front matter.

And, of course, it had to be responsive on mobile, tablet, and desktop.

## Proposal

Our proposal was to, first, create a **minimalist/brutalist design** for the site that would place focus on the contributions (literature and art). It allowed for minimal distractions and prioritized the readership/viewership.

Our second proposal was to use a coding language that could not only be modular, but easily learned/recognized. For this, we decided to use a **Jekyll/Sass** combo.

Our third proposal was to use a headless content management system, so that — in the case of a system falling off trend — the designers could easily chop the head off and replace it. For this, we decided to use **Forestry.io**.

* Use a minimalist/brutalist design for max readability.
* Make an easy/modular coding design system
* Use a headless CMS

## Process

### Research

One of the things that drew us into creating a brutalist design for Other People was the capacity to make an easy design system. Further, having these modules/components enabled the designers and developers to work more closely together as it acted like a sort of buffer between the two. We utilized Figma to translate design into development.

Another thing that drew us to a brutalist design was that stray away from a corporate look to a more liberal and human design.

![](/uploads/Screen Shot 2020-05-09 at 4.17.31 PM.png)_Brutalist web design mood boards_

We also used Jekyll to build modules through "includes", making each component of the site easily modifiable/replaceable. This also made the index.html page simple to explore.

Example:

{% highlight html linenos=table %}
{* header.html *}

<!-- LITERATURE MODULES OR SOMETHING -->
{* include poetrymodule.html _}
{_ include fictionmodule.html _}
{_ include nonfictionmodule.html _}
{_ include visualartsmodule.html *}

{* footer.html *}
{% endhighlight %}

### Wireframes

![](/uploads/Screen Shot 2020-05-09 at 3.54.52 PM.png)