# NSS Guinea Pigs Exercise

### Project Description 
This assignment codes `javascript` event handlers for mouse and keyboard events tied to boilerplate code provided for the `index.html` file. 

#### Guinea Pigs Before Screen + Mouse Event (mouse over `h1` element)
![Guinea Pigs Before Screen Grab](https://raw.githubusercontent.com/SMITHsharon/guineaPigs/master/screen/Guinea%20Pigs%201%20Before%20%2B%20mouse%20event.png)


#### Guinea Pigs After Screen
![Guinea Pigs After Screen Grab](https://raw.githubusercontent.com/SMITHsharon/guineaPigs/master/screen/Guinea%20Pigs%202%20After.png)


### Project Specs
###### Set-Up
1. Boilerplate code was provide for the `index.html` file
2. Linked in JavaScript file: `events.js`
3. Linked in CSS file: `events.css` 
4. `element.classList` is used to manipulate the CSS classes on elements
5. `output-target` is the output target element

###### Javascript Functionality
1. When any section is clicked: 
The output target text displays "You clicked on the {text of the section} section"
2. When the mouse is over the `h1` tag: 
The output element displays "You moved your mouse over the header"
3. When the mouse leaves the `h1` tag: 
The output element displays "You left me!!"
4. When characters are typed into the input field: 
The output element mirrors the text in the input field

###### Javascript <=> CSS Functionality
5. When the `Add Color` button is clicked: 
The guinea-pig element's text color changes to blue
6. When the `Hulkify` button is clicked: 
The guinea-pig element's font size becomes much larger
7. When the `Capture It` button is clicked: 
The guinea-pig element gets bordered
8. When the `Rounded` button is clicked: 
The guinea-pig element's border becomes rounded

###### CSS Styling
9. The first section's text (in the `article` set of `sections`) is bold
10. The last section's text is bold and italicized.
11. Style the buttons to appear as block elements

###### Boilerplate DOM
```
<header id="page-header">
    <h1 id="page-title">Page title</h1>
  </header>

  <ul>
    <li>Unordered list item 1</li>
    <li>Unordered list item 2</li>
    <li>Unordered list item 3</li>
  </ul>

  <article>
    <section class="article-section">Introduction</section>
    <section class="article-section">Body</section>
    <section class="article-section">Section 1</section>
    <section class="article-section">Section 2</section>
    <section class="article-section">Section 3</section>
    <section class="article-section">Conclusion</section>
  </article>

  <input type="text" id="keypress-input">

  <div id="output-target"></div>

  <div id="guinea-pig">Leave me alone</div>
  <button id="add-color">Add color</button>
  <button id="make-large">Hulkify</button>
  <button id="add-border">Capture it</button>
  <button id="add-rounding">Rounded</button>
```

### Technologies Used
- html
- css
- javascript


### How To View The Screen 
#### (Node must be installed on your machine):
```
git clone https://github.com/SMITHsharon/guineaPigs.git
cd cards
npm install http-server -g
http-server -p 8080
```

This will show in your browser at: `http://localhost:8080`


### Contributor
[Sharon Smith](https://github.com/SMITHsharon)