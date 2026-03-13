# CS 260 Notes

[My startup - Temple Match](https://templematch.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 3.218.96.100
Sad I couldn't get the credits as I made my account before. :( but it is now running

## Caddy

This went super easy. Hardest part was trying to do control v in git bash

## HTML
First I did the structure CodePen. I am still getting used to HTML but the hardest thing was getting the Image to work because I copied the wrong link. I got the websites link and not the image.

Pushed the Simon code to my website. I changed a few basic things like the quote. Pushing it I had to enable sudo on my pc and also had to fix the path on my key so Git bash could Push the files. 

I coded all the HTML up and got it deployed. I had to learn extra on how the icons for webpages work and I got one for my website. I noticed something strange. Local Host was a lot more forgiving with mistakes on capitalization. On both a Img and anchor tag it worked but once I deployed it it had issues. I ended up needing to fix and redeploy my code. Also with regards to deployment I want to see if there is a way to exclude some file. such as my read.me and notes don't need to be deployed. It might just need to be put in a different folder or something. 


## CSS

Css is the bane of my existence. Bootstrap was a big help but getting things centered and such was not fun. I had to adapt my ideas as I went but I think I got it to a good spot. I used slides for the scores page and tried to keep the navbar the same on all the pages.

I also used a bootstrap popup to replace my scripture.html page. I also had issues with the bootstrap stuff I found was the wrong version. I used the AI to help me convert the version syntax.


## React Part 1: Routing

This wasn't too bad. I had to fix some Css. I had a class named box twice and that gave me some issues but once I got that a changed some of the flex on the game page it worked much better. ALso had to fix a link so it would work again when you click on my icon on the nav bar.


## React Part 2: Reactivity

This was hard. I have decided I do not want to be a front end developer. Also event based programming doesn't fully make sense to me yet but it is starting to get better. I much prefer object oriented programming. I feel like If I was learning it separate from JSX it would be better as with all the tags and such it is hard. I did find AI to be very helpful with figuring out the syntax. It was really cool to see it work now. This is the first program/game that I have made that has had much of a visual gui kinda idea with it. Im interested to see how much effort it takes to use the database to store info rather than putting it in local storage.

I think the hardest thing was figuring out hooks but from what I understand if you want something to happen plan on using one. use state and effect we the most useful one. I did use a usecontext one but I think I could have used local storage for that and just read from it. Also to Get functionality I had to add another "webpage" to my app after the game is over to let you play again. I also changed the nav bar so you can't go to the game until you log in.

## Service
This was much easier and I feel like I am starting to understand fetch and promises now. I liked how doing a front and back end broke up the code and made it easier to understand. Figuring it out at the begain was still hard. For some reason it was really hard to get the username to display I still don't really know what fixed it but it was done. 

Calling the 3rd party service was pretty easy. I just had to figure out how the response was formatted. It now shows a random KJV scripture. You might end up with one of the really random ones or one thats just names. 

Had some issues with it running on the server. It had to do with nav links. not sure why they worked last time but not this time. It took me way to many deployments to get it working but now It is all done!

## Database
This wasn't too hard. I just went over databases in my 240 class. It was a little hard to get them to start saving at first and to get the auth token to be removed but once I figured it out the rest came super easy. Hopefully I have enough commits. This was much faster. Also i had to add so awaits to the code to get it to load. I ran into an issue were it would just freeze without them. AI helped me find where I had missed them. It is really cool how close to being done I am. Although I wish I would have had it done yesterday as I was showing a bunch of people and I lost there scores.