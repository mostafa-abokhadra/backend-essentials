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