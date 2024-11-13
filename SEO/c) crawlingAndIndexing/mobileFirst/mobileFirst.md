# Mobile site and mobile-first indexing best

### How google bot crawl you website

first google bot will crawl URLs form you site with the desktop and mobile user agent, with the original desktop-first-indexing the indexing system will get the page information from the desktop page content, finally the page will be shown in the search results if the information has enough relevance for user queries, but with the new mobile-first-indexing, the indexing system will look at the mobile page instead of the desktop page for information

don't show less information on your mobile version, primary content on both desktop and mobile should be the same, if your mobile version has less content google won't be able to serve your site as before mobile first indexing, because they can't get enough information as before

if you have any of these metatags in one of your bages it tells googlebot not to crawl and index these pages
```html
<meta name="robots" content="noindex">
<meta name="googlebot" content="noindex">
```

### elements consideration
- Create a mobile-friendly site with same URLs in all devices
- user `h1` tags when needed and don't replace it with manual styling 
- use meaningful alt image attribute
- specifying `<meta name="viewport" content="width=device-width, initial-scale=1">` in head tag
There are two values, separated by commas. The first one is `width=device-width`. This tells the browser to assume the width of the website is the same as the width of the device (instead of assuming the width of the website is 980 pixels). The second value is `initial-scale=1`. This tells the browser how much or how little scaling to do. With a responsive design, you don't want the browser to do any scaling at all.
