### media query
Websites are often displayed on screens but CSS can also be used to style websites for other outputs too. You might want your web pages to look one way on a screen but different when printed out. Querying media types makes this possible.

In this example, the background color is set to grey. But if the page is printed, the background color should be transparent. This saves the user's printer ink.

```css
body {
  color: black;
  background-color: grey;
}

@media print {
  body {
    background-color: transparent;
  }
}
```
you can make a separate stylesheet and use the media attribute on a link element:
```html
<link rel="stylesheet" href="print.css" media="print">
```
If you don't specify any media type for your CSS, it will automatically have a media type value of all. These two blocks of CSS are equivalent:
```css
body {
  color: black;
  background-color: white;
}
@media all {
   body {
     color: black;
     background-color: white;
   }
}
```
These two lines of HTML are also equivalent:
```html
<link rel="stylesheet" href="global.css">
<link rel="stylesheet" href="global.css" media="all">
```
