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

This wasn't too bad. I had to fix some Css. I had a class named box twice and that gave me some issues but once I got that a changed some of the flex on the game page it worked much better. ALso had to fix a link so it would work again when you click on my icon.

# Default notes under this
## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
