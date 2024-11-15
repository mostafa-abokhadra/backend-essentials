### sitemap creation
The XML sitemap format is the most versatile of the supported formats.

Using the Google supported sitemap extensions, you can also provide additional information about your images, video, and news content, as well as the localized versions of your pages.


A sitemap is a list of your site's URLs structured in XML.

It helps search engines like Google understand the layout of your site.

#### Structure Overview:

The root tag is `<urlset>`, which contains `<url>` elements.
Each `<url>` element has child elements like:

`<loc>`: URL of the page.

`<lastmod>`: Last modification date.

`<changefreq>`: Expected change frequency.

`<priority>`: Priority relative to other pages

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://example.com/home</loc>
        <lastmod>2024-11-15</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
</urlset>
```
