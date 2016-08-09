# jsrsns.github.io
Personal website

## HTML
## CSS
### Syntax
* When grouping selectors, keep individual selectors to a single line.
* Include one space before the opening brace of declaration blocks.
* Place closing braces of declaration blocks on a new line.
* Include one space after `:` for each declaration.
* Each declaration should appear on its own line.
* End all declarations with a semi-colon.
* Comma-separated property values should include a space after each comma.
* Don't prefix property values of color parameters with a leading zero (e.g. `.5` instead of `0.5` and `-.5px` instead of `-0.5px`).
* Lowercase all hex values (e.g. `#fff`).
* Use shorthand hex values when available (e.g. `#fff` instead of `#ffffff`).
* Avoid specifying units for zero values (e.g. `margin: 0;` instead of `margin: 0px`).

```css
/* Bad */
.selector,.selector-two,.selector-three{
  padding:15px; margin:0px 0px 15px;
  background-color:rba(0, 0, 0, 0.5);
  box-shadow:0px 1px 2px #CCC,inset 0 1px #FFFFFF }
  
/* Good */
.selector,
.selector-two,
.selector-three {
  padding: 15px;
  margin-bottom: 15px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 1px 2px #ccc, inset 0 1px #fff;
}
```
### Declaration order
Property declarations should be grouped in the following order:
1. Positioning
2. Box model
3. Typographie
4. Visual

### Media query
Place media queries close to their relevant rule sets and not in a seperate stylesheet or at the end of the document.

```css
.element { ... }
.element-two { ... }
.element-threee { ... }

@media (min-width: 480px) {
  .element { ... }
  .element-two { ... }
  .element-three { ... }
}
```
### Single declarations
Remove line breaks from rule sets with only a single declaration.

```css
/* Single declarations in a single line */
.element-one    { width: 60px; }
.element-two    { width: 140px; }
.element-three  { width: 220px; }

/* Multiple declarations, one per line */
.element {
  display: inline-block;
  width: 16px;
  height: 15px;
  background-image: url(../img/background.png);
}
.element-two    { background-position: 0 0; }
.element-three  { background-position: 0 -20px; }
.element-four   { background-position: 0 -40px; }
```
