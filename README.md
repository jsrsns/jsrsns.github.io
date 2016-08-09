# jsrsns.github.io
Personal website

### Directory
```
.
|
|-- css
|   |
|   |-- main.css
|
|-- images
|   |
|   |-- ...
|
|-- js
|   |
|   |-- script.js
|
|-- README.md
|
|-- index.thml

```

### HTML
#### Syntax
* Nested elements should be indented once.
* Always use double quotes, never single quotes, on attributes.
* Don't omit optional closing tags (e.g. ``` </li> ``` or ``` </body > ```.

```html
<!DOCTYPE HTML>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <img src="images/logo.svg" alt="logo">
    <h1 class="hello world">Hello, world!</h1>
  </body>
</html>
```

#### HTML5 Doctype
Enforce standard mode and consistent rendering with the doctype at the beginning of every HTML page.

#### Langauge attribute
From the HTML5 spec:
> Authors are encouraged to specify a lang attribute on the root html
> element, giving the document's language. This aids speech synthesis
> tools to determine what pronunciations to use, translation tools to
> determine what rules to use, and so forth.

```html
<html lang="en-us">
  <!-- ... -->
</html>
```
#### IE compatibilty mode
Unless circumstances require otherwise, it's most useful to instruct IE to use the latest supported mode with **edge mode**.

```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```

#### Character encoding
Ensure proper rendering of your content by declaring an explicit character encoding. Avoid using character entities in your HTML.

```html
<head>
  <meta charset="UTF-8">
</head>
```

#### CSS and JavaScript includes
Typically there is no need to specify a ``` type ``` when including CSS and JavaScript files as ``` text/css ``` and ``` text/javascript ``` are their respective default values.

#### Don't use ``` @import ```
Compared to ``` <link> ```s, ``` @import``` is slower, adds extra page requests, and can cause problems.
* Use multiple ``` <link> ``` elements.
* Compile CSS with a preprocessor like Sass or Less into a single file.
* Use features provided by Jekyll, Rails or other environments to concatenate CSS.

```html
<!-- use link elements -->
<link rel="stylesheet" href="stye.css">

<!-- avoid @import -->
<style>
  @import url("style.css");
</style>
```

#### Attribute order
HTML attributes should come in this order
* ``` class ```
* ``` id ```, ```name ```
* ``` src ```, ``` href ```
* ``` title ```, ``` alt ```

### Reduce markup
Whenever possible, avoid superfluous parent elements.

```html
<!-- Not so good -->
<span class="icon">
  <img src="...">
</span>

<!-- Better -->
<img class="icon" src="...">
```

### CSS
#### Syntax
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
#### Declaration order
Property declarations should be grouped in the following order:
1. Positioning
2. Box model
3. Typographie
4. Visual

#### Media query
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
#### Single declarations
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
#### Shorthand notation
Limit use of shorthand notations to instances where you must explicitly set all the available values.
Common overused shorthand properties:
* ``` padding ```
* ``` margin ```
* ``` font ```
* ``` background ```
* ``` border ```

#### Comments
Ensure code is descriptive, well documented, and approacable. Use comments to convey context and purpose.

#### Class names
* Keep class names lowercase.
* Use dashes and not underscore or camelCase (e.g. ``` .btn-confirm ``` and not ``` btn_confirm ``` or ``` btnConfirm ```.
* Avoid excessive and arbitrary shorthand ``` .btn ``` is short for *button*, but ``` .s ``` does not mean anything.
* Keep class names short.
* Use meaningful mames.
* Prefix classes based on the closest parent class.
 
#### Organization
* Organize sections of code by component.
* Develop a consistent hierarchy.
* Use white space when seperating sections of code.


