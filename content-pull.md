# Site Content Pull - blakecampbell.com

## https://blakecampbell.com/
I'm Blake Campbell — Senior Full Stack Engineer with a focus on Frontend. Currently at Argonne. VueJS Professional and NuxtJS Experimenter.
→ LinkedIn
→ Email Me

---

## https://blakecampbell.com/about
I'm Blake Campbell. Senior Developer. Vue/Nuxt/TailwindCSS fan. Coffee drinker. Amateur gardener and chef. Always learning and improving. 🙂
What I use:
• JavaScript for over 8 years
• Cypress for End-to-End testing
• Mac Book Pro Mid-2014
• Two LG Ultrawide Monitors.
• Logitech MX-master mouse
• Corsair Vengeance K65 Compact Mechanical Keyboard
Workflow Software
• Harvest for time tracking
• Pocketcasts for podcasts.
→ LinkedIn

---

## https://blakecampbell.com/work
Blake CampbellWorkAppleAppleRemoteVueJSFrontend DeveloperSenior Full Stack EngineerPropelicyPropelicyPittsburgh PAVueJSFrontend DeveloperFounderBenefitManyBenefitManyRemoteVueJSFrontend DeveloperRailsFounderManyCommManyCommPittsburgh PAVueJSFrontend DeveloperFounderRails

---

## https://blakecampbell.com/works
Blake CampbellWorksWorks Thoughts AboutWorksWorkAppleAppleRemoteVueJSFrontend DeveloperSenior Full Stack EngineerPropelicyPropelicyPittsburgh PAVueJSFrontend DeveloperFounderManyCommManyCommPittsburgh PAVueJSFrontend DeveloperFounderRailsBenefitManyBenefitManyRemoteVueJSFrontend DeveloperRailsFounder

---

## https://blakecampbell.com/manycomm
<div></div><div></div>

---

## https://blakecampbell.com/work/manycomm
was a unique text-chat application to provide service for those in need.
ManyComm is a product dedicated to providing anonymous text and chats for those in need. The idea came out of a partnership with a local domestic abuse hotline. Autoresponders were set to communicate if no service provider was available.
What I handled on ManyComm
As the primary frontend developer on ManyComm I was responsible for:
• Websockets and session handling
• Transferring chats and making calls to the Rails API

---

## https://blakecampbell.com/benefitmany
BenefitMany the do-good agency.
BenefitMany was founded by myself and two partners with the idea to help non-profits through the grant-writing process and be their dedicated tech team. We used our for-profit clients to help supplement work during the process.
Over the three years at BenefitMany we worked on some great projects.
• A local non-profit website for victims of domestic abuse
• An apparel company's internal application to track and manage their workflow
• An application to help measure SAT/ACT scores and return them quickly.
Some of the projects I've worked on at BenefitMany.
What my role was
As the primary frontend developer I was able to pick our framework: VueJS. Across the projects I made a library of components that we were able to take across projects to save clients money and iterate quickly.

---

## https://blakecampbell.com/propelicy
Contracting made easy
Propelicy connects the world of insurance brokers and national carriers through software. An insurance agent used to have to fill out multiple contracting forms to contract with a single carrier. The goal is to fill it out once and send it to national carriers. An agent wants to contract with Aetna or Kaiser, it's simple for them now.
What I did
Propelicy has a huge set of VueJS components. Written primarily by me. NuxtJS on the frontend that's the Vue equivalent of React's NextJS. Storybook to build out a living design system and Cypress to deliver End-to-End testing. Rails API on the backend.

---

## https://blakecampbell.com/apple
Full Stack Development with VueJS and Node. Testing with Vue-test-utils and Jest. My team is focused on developing a review system to help improve Chatbots with Machine Learning. All of my work was internal to Apple so I'm not allowed to share it here.

---

## https://blakecampbell.com/asana-chrome-extension
<div></div><div></div>

---

## https://blakecampbell.com/crisis-center-north
<div></div><div></div>

---

## https://blakecampbell.com/developer-talks
<div></div><div></div>

---

## https://blakecampbell.com/thoughts
Blake CampbellThoughtsWorks Thoughts AboutThoughtsThoughtReadme for a Productive 2021Dec 28, 2020Better readme in 5 minutes. (Snack Pack #1)Feb 28, 2021Questions make you a better developer (Snack Pack #2)Mar 7, 2021Overlooked design, blank states. (Snack Pack #3)Mar 27, 2021Are Default Params in JavaScript bad? (Snack pack #4)Apr 10, 2021Tracing vs Transformation for developersFeb 1, 2022

---

## https://blakecampbell.com/thoughts/thought/are-default-params-in-javascript-bad-snack-pack-4
Not if it's still passed
I wrote this function well over two years ago. It just pops up a notification if the user makes a CRUD call. (Create, Read, Update Delete). The function only takes two defined parameters a message and a notification.
The notification parameter is a boolean.
notification = true // notify user by a pop-up notification = false // inline-notification by form button, or in a defined space
Looking back at this function, it could be much better.
• Instead of a notification boolean, it can be notification style as a string.
• Call with the second parameter everywhere
Back to the question: Default Params in JS bad?
I think so if I'm not explicitly calling with all the params of a function. It's okay to have a fallback, but don't depend on it!
• It's leaves technical debt.
• How is another developer supposed to know what parameters are passed if they only see a partial picture?
• My boolean parameter is bad in this case.
How I refactored this function:
My snack pack reads are intended for a quick read without any fluff or BS.

---

## https://blakecampbell.com/thoughts/thought/better-readme-in-5-minutes-snack-pack-1
Documentation is an easy win
Readmes are often overlooked, abandoned, or forgotten entirely. Don't let a pour readme sour a good project.
A good readme is easy. First off this is just a starting point, there's always room to improve a readme. Here's how I start all my projects.
My template for new Readmes:
https://gist.github.com/BlakeCampbells/58b72751eae87f6891d0fc357298e299
Additional Resources
https://gist.github.com/PurpleBooth/109311bb0361f32d87a2https://github.com/RichardLitt/standard-readme
My snack pack reads are intended for a quick read without any fluff or BS.
- Project Details - Who is the project for? - What does it do? - Set up - How can I get someone up and running on this project? - Tech behind the project. - What frameworks/technologies are we using? - Architecture - How is the folder structure laid out? Just big picture stuff - Testing / Formatting - Do you have formatting or testing and how is it enforced? - FAQs - What's confusing about this project and why?

---

## https://blakecampbell.com/thoughts/thought/overlooked-design-blank-states-snack-pack-3
State not found
Often as developers, we know how our application functions and moves. My grandmother won't know why "her phone is broken" without some help. Design it for her.
Most users aren't as technical as you.
Design shouldn't need an explanation, it should be simple. If the app doesn't give users feedback, it isn't working.
What's the difference between a search with no results and an error? How will your user know the difference?
A "perceived bug" is a bug, it's just a design bug.
Examples of blank states
• User searches for something that doesn't exist.
• User has an empty table without content.
• Placeholders or labels aren't clear or they are hidden while input is focused.
These are all frustrating points for a user.
Visual blank state example
Spotify: Imagine searching for a song and Spotify gives you a blank screen with no feedback on what happened.
Always give users feedback
Additional Resources
I highly recommend Refactoring UI. I'm not the best designer, but this book has helped me a lot in how I think about UI/UX.
Refactoring UI: https://refactoringui.com/ Here's an article describing more about blank states: https://www.innertrends.com/blog/blank-state-examples
Go and make better blank states!
My snack pack reads are intended for a quick read without any fluff, BS, or needless clickbait.
What is your favorite blank state?
• Facebook's animated cards while loading
• Twitter's "What's happening?" text area for blank tweets
• Is there a really good one I'm missing?

---

## https://blakecampbell.com/thoughts/thought/questions-make-you-a-better-developer-snack-pack-2
Ask better questions
Questions are complex and strange. A bad question won't get you much, a short incomplete answer maybe. A great question can get you a lot further.
Great questions will have at least one of three things.
• Specificity, but not too much.
• Phrasing, go in with a better mentality.
• Curiosity, ask questions that can be hard.
Specificity
It's easy to see how vague questions have issues. Breaking down larger questions is part of being a developer.
How do I code a giant project? // It's too vague, break it down How do I add to an array in JavaScript? // Much better, actionable
The phrasing might be the most important of this list, you should always look to communicate clearly.
EX: When looking at a project's old code
Why would you code it like this? // Negative phrasing How can this code be improved? // Better phrasing
Finally, curiosity will bring it all together. These will be questions mostly for yourself. It's hard to have bad questions here, you will still learn.
EX: When asking questions to yourself
How do I become a developer? // Good How do I become a better developer? // Good How do I make an existing project a PWA? // Also good
Good luck with whatever you're working on and ask better questions!
My snack pack reads are intended for a quick read without any fluff or BS.

---

## https://blakecampbell.com/thoughts/thought/readme-for-a-productive-2021
I recently wrote in a #devdiscuss about motivation
Take days off, don't burn out Have a project you enjoy Learn on your own Ask for help if you need it
I should expand on it quite a bit. For reference, I've been a Remote Developer since 2014. It's lonely and frustrating, staying productive can be tough. These are just my general observations to try to help.
Prep Work, pick a theme (optional)
Start by picking a yearly theme instead of a goal.
For References: Yearly Themes explained by CGP Grey
Example: I want to save $X amount this year, changes to the year of Finance. It's less a pass or fails like specific goals and more of a did you improve.
My theme for 2021 is The Year of Refinement, some things that apply to my theme are less time on social media, more time writing posts, becoming more active. All those things become encapsulated in my theme.
Having a theme to focus on makes it easier to review the progress over the year.
Into the mandatory
If you have a home office, clean it. Those old downloads that have been on your computer for 2 years, remove them. I'm no Marie Kondo, but a neat workspace is a big relief. Begin 2021 on a "clean" slate, you never know what's going to happen.
Schedule off time
Don't fall into the trap of always busy is always good. Take time off for yourself when you need to. Reduce eye strain and get a hobby away from the computer if you want.
Taking breaks increases productivity: [Source](https://www.work-fit.com/blog/how-effective-breaks-at-work-increase-productivity#:~:text=Taking breaks at work does,the last hour or so.)
Your Project and learning
Having a project that is uniquely yours is healthy. You get to decide what it is, what you want it to do. Design, code, build. As a developer, not much of a designer it's nice to have tools out there like Tailwind. Learning will always be part of the web, embrace it.
A few years ago I needed to learn AngularJS 1.X, I joke about it now, but it made learning VueJS a few months later easy for a side project. If you have good fundamentals you'll adapt better in the future.
Asking for Help and Feedback
Spinning your wheels and getting frustrated is a spot every developer has been in. Don't be ashamed of it. I've been lucky enough to work with amazing people who will take time and talk through a problem. There are discords/slack channels/StackOverflow and of course DevTo.
You can get feedback, but don't ask without trying first.
Please leave me feedback on how I can improve these posts moving forward.
I recently wrote in a #devdiscuss about motivation
Take days off, don't burn out Have a project you enjoy Learn on your own Ask for help if you need it
I should expand on it quite a bit. For reference, I've been a Remote Developer since 2014. It's lonely and frustrating, staying productive can be tough. These are just my general observations to try to help.
Prep Work, pick a theme (optional)
Start by picking a yearly theme instead of a goal.
For References: Yearly Themes explained by CGP Grey
Example: I want to save $X amount this year, changes to the year of Finance. It's less a pass or fails like specific goals and more of a did you improve.
My theme for 2021 is The Year of Refinement, some things that apply to my theme are less time on social media, more time writing posts, becoming more active. All those things become encapsulated in my theme.
Having a theme to focus on makes it easier to review the progress over the year.
Into the mandatory
If you have a home office, clean it. Those old downloads that have been on your computer for 2 years, remove them. I'm no Marie Kondo, but a neat workspace is a big relief. Begin 2021 on a "clean" slate, you never know what's going to happen.
Schedule off time
Don't fall into the trap of always busy is always good. Take time off for yourself when you need to. Reduce eye strain and get a hobby away from the computer if you want.
Taking breaks increases productivity: [Source](https://www.work-fit.com/blog/how-effective-breaks-at-work-increase-productivity#:~:text=Taking breaks at work does,the last hour or so.)
Your Project and learning
Having a project that is uniquely yours is healthy. You get to decide what it is, what you want it to do. Design, code, build. As a developer, not much of a designer it's nice to have tools out there like Tailwind. Learning will always be part of the web, embrace it.
A few years ago I needed to learn AngularJS 1.X, I joke about it now, but it made learning VueJS a few months later easy for a side project. If you have good fundamentals you'll adapt better in the future.
Asking for Help and Feedback
Spinning your wheels and getting frustrated is a spot every developer has been in. Don't be ashamed of it. I've been lucky enough to work with amazing people who will take time and talk through a problem. There are discords/slack channels/StackOverflow and of course DevTo.
You can get feedback, but don't ask without trying first.
Please leave me feedback on how I can improve these posts moving forward.

---

## https://blakecampbell.com/thoughts/thought/tracing-vs-transformation-for-developers
With millions of tutorials, Twitter threads, and clones of projects, there's a clear distinction between tracing and transformation.
Tracing has its time and place. If you are examining how an application was built, understanding syntax, and so on. Wordle, Flappy Bird, and Todo List clones have value for beginners.
Revenue in this space is sparse and scrappy, but some clones have gotten traction and made tons of money.
Is it right to monetize it? In my opinion: Not really, but I'm not a cop.
Transformation
Transformation is a substantial difference, like AskJeeves vs. Google or Facebook vs. MySpace. Transformation falls into two phases: Minor or Major.
Minor transformation is more than slight tweaks or coloring outside the lines. Adding six letters to the Wordle game instead of 5 is more like tracing. Making it a PWA is more a transformation, in my opinion. Learning is more abundant than purely Tracing. Tutorials should encourage this, expanding the idea past the end. It's small and meaningful changes.
Major Transformation is much more complex—AskJeeves vs. Google or Facebook vs. MySpace. The idea is the same but a constant refinement of critical points. It's easy to see some inspiration, but the list of differences is vast and expanding.
There will always be those tracing others' projects and making cash or getting clout. It's part of the process now. Tracing isn't going to make a lasting product or great developers. It's mostly laziness or lack of creativity.
Lasting products or ideas either fit into Major Transformation or Creation. Creation is much more challenging.
Suppose you're interested in reading more about Creation. I highly recommend the book Zero to One.
I'll leave you with two questions:
• Is this Tracing or a Transformation?
• Does it matter if it's Open-Source? Uses Tech the Original vs Tech Blogs, Launched on Product Hunt
Sorry for The Office memes, but it's a really good show.

---

