# jsrsns.github.io
Personal website

**Syntax**
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
  padding:15px;
  margin:0px 0px 15px;
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
```
