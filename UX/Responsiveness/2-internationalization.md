### internationalization

**Logical properties**, on the other hand, refer to the edges of a box as they relate to the flow of content. If the writing mode changes, CSS written with logical properties will update accordingly. That's not the case with directional properties.

Whereas the directional property margin-left always refers to the margin on the left side of a content box, the logical property **margin-inline-start** refers to the margin on the left side of a content box in a left-to-right language, and the margin on the right side of a content box in a right-to-left language.

In order for your designs to adapt to different writing modes, avoid directional properties. Use logical properties instead.

```css
/* don't */
.byline {
  text-align: right;
}
/* do */
.byline {
  text-align: end;
}
```
When CSS has a specific directional value like left or right, there's a corresponding logical property. Where once we had margin-left now we also have **margin-inline-start**

In a language like English where text flows from left to right, **inline-start** corresponds to "left" and **inline-end **corresponds to "right".

Likewise, in a language like English where the text is written from top to bottom, **block-start** corresponds to "top" and **block-end** corresponds to "bottom."

```css
label {
  margin-inline-end: 0.5em;
}
```
if you use logical properties in your CSS, you can use the same stylesheet for translations of your pages. Even if your pages are translated into languages written from right to left or bottom to top, your design will adjust accordingly. You don't need to make separate designs for each language. By using logical properties, your design will respond to every writing mode. 

Modern CSS layout techniques like grid and flexbox use logical properties by default. If you think in terms of inline-start and block-start instead of left and top then you'll find these modern techniques easier to understand.

### lang and hreflang
Attributes like lang and hreflang make your HTML more meaningful for internationalization. Likewise, logical properties make your CSS more adaptable.
```html
<a href="/path/to/german/version" hreflang="de" lang="de">Deutsche Version</a>
```
If you're used to thinking in terms of top, bottom, left, and right, it might be hard to start thinking of block start, block end, inline start and inline end instead. But it's worth it. Logical properties are key to creating truly responsive layouts.