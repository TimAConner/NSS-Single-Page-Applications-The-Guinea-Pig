# NSS-Single-Page-Applications-The-Guinea-Pig

## Synopsis
The practice's guidelines were:

1. There is sample HTML file content below so create an index.html for it and place the content in the body tag.
1. Link in a JavaScript file named events.js.
1. Link in a CSS file named events.css. You'll be using element.classList to manipulate the CSS classes on elements.
    > ✏️ Output target is the output-target element.
1. When any section is clicked the output target text should be "You clicked on the {text of the section} section"
1. When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
1. When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
1. When you type characters into the input field, the output element should mirror the text in the input field.
1. When you click the "Add color" button, the guinea-pig element's text color should change to blue.
1. When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
1. When you click the "Capture it" button, the guinea-pig element should have a border added to it.
1. When you click the "Rounded" button, the guinea-pig element's border should become rounded.
1. The first section's text should be bold.
1. The last section's text should be bold and italicized.
1. Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
## Motivation
This was practice while attending the [Nashville Software School](http://nashvillesoftwareschool.com/).

## Sample HTML From Instructions

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
