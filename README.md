# color guess game

- [color guess game](#color-guess-game)
  - [learning](#learning)
  - [about](#about)
  - [stages](#stages)
    - [1: setting up the game screen](#1-setting-up-the-game-screen)

## learning
while implementing the game, you will practice dom manipulations, generate random colors, manage user interactions, and control game flow with loops and conditions.

## about
the color guess game is a simple web-based game where players are presented with a target rgb color value displayed in text form. below the target color are several color blocks, each representing a different rgb color. players must click on the color block they believe matches the target color.

## stages
### 1: setting up the game screen 
<details>
<summary>add the html elements to set the layout of the game</summary>

#### 1.1 description
welcome, contestants, to the "color guess game"!

in this project, you'll be putting your rgb color knowledge to the test! can you decipher the mysterious rgb code and select the correct color block? the stage is set with 6 vibrant color blocks waiting for your keen eye to pick out the right one.

let's set the scene for our first stage, shall we? you'll need the following html elements to kick off this colorful game:

- an eye-catching `<h1>` element to grab your attention and set the tone for the challenge ahead.
- a mesmerizing `<p>` tag displaying the rgb color value, teasing you with its cryptic code.
- 6 dazzling `<div>` elements, each representing a different color block for you to choose from.
- and of course, a handy-dandy "restart" button to reset the game and try your luck once more!

get ready to dive into the world of hues, shades, and rgb mysteries as you take your first steps into the "color guess game"! are you up for the challenge? let the games begin!

to make the color-blocks similar to examples you can use this style for the color-block class:
```css
.color-block {
 display: inline-block;
 margin: 10px;
 border-radius: 5px;
 cursor: pointer;
 padding: 20px;
}
```

#### 1.2 objectives
in this stage, you should:

1. create an html document with the specified structure.
2. set up the title of the game as "color guess game" using an h1 element.
3. display the rgb color to be guessed using a paragraph element with the id "rgb-color". the text should be "rgb(255, 0, 0)".
4. show the initial status message "start guessing!" using a paragraph element with the id "status".
5. include a button element with the id "restart" for restarting the game.
6. create six color blocks, each represented by a div element with the class "color-block".
7. set the background color of each color block using css with the specified rgb values.
  - following this order, colors are:
    1. rgb(255, 0, 0)
    2. rgb(255, 255, 0)
    3. rgb(0, 255, 0)
    4. rgb(0, 255, 255)
    5. rgb(0, 0, 255)
    6. rgb(255, 0, 255)

#### 1.3 examples
example 1:

![color game design](./s01.png)

</details>

[<<](https://github.com/eucarizan/front-end/blob/main/README.md)
<!--
:%s/\(Sample \(Input\|Output\) \d:\)\n\(.*\)/```\r\r**\1**\r```\3/gc

### 0: 
<details>
<summary></summary>

#### 0.1 description

#### 0.2 objectives

#### 0.3 examples

</details>
-->

