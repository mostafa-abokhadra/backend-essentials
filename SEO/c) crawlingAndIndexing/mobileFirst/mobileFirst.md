# Mobile site and mobile-first indexing best
### How google bot crawl you website
first google bot will crawl URLs form you site with the desktop and mobile user agent, with the original desktop-first-indexing the indexing system will get the page information from the desktop page content, finally the page will be shown in the search results if the information has enough relevance for user queries, but with the new mobile-first-indexing, the indexing system will look at the mobile page instead of the desktop page for information

don't show less information on your mobile version
don't make your server response differently according to user-agent

if you have any of these metatags in one of your bages it tells google bot not to crawl and index these pages
```html
<meta name="robots" content="noindex">
<meta name="googlebot" content="noindex">
```
- Create a mobile-friendly site
    - Google recommends Responsive Web Design because it's the easiest design pattern to implement and maintain. (same URL for all devices)

- meaningful alt attribute