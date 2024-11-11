### SEO
- it is the process of **increasing the visibility of website pages on search engines** in order to attract more relevant traffic.
- search engine optimization is about helping search engines understand your content, and helping users find your site
- assess if google can see you site first using `site: your website` in google search bar

## key best practice

### 1. **create helpful, reliable, people-first content**
- not to gain search engine rankings
1. **self assess your content if helpful and reliable**
    - does the content provide **original information**, roporting, researh or analysis?
    - does the content provide a substantial, complete, or **conmprehensive description** of the topic?
    - does the content provide insightful analysis or interesting information that is **beyond the obvious**?
    - If the content draws on other sources, does it avoid simply copying or rewriting those sources, and instead provide substantial **additional value** and originality?
    - Does the **main heading or page title** provide a descriptive, helpful summary of the content?
    - Does the main heading or page title **avoid exaggerating** or being shocking in nature?
    - Is this the sort of page you'd want to **bookmark**, share with a friend, or recommend?
    - Would you expect to see this content in or **referenced by** a printed magazine, encyclopedia, or book?
    - Does the content provide **substantial value when compared to other pages** in search results?
    - Does the content have any **spelling or stylistic issues**?
    - Is the content **produced well**, or does it appear sloppy or hastily produced?
    - Is the content mass-produced by or outsourced to a large number of creators, or spread across a large network of sites, so that individual pages or sites don't get as much attention or care?
    - Does the content present information in a way that **makes you want to trust it**, such as clear sourcing, evidence of the expertise involved, background about the author or the site that publishes it, such as through links to an author page or a site's **About page**?
    - If someone researched the site producing the content, would they come away with an impression that it is well-trusted or widely-recognized as an authority on its topic?
    - Is this content written or **reviewed by an expert** or enthusiast who demonstrably knows the topic well?
    - Does the content have any **easily-verified factual errors**?
2. **peer assess you content if helpful and reliable**
3. **provide a great page experience**
    - do your pages have good core web vitals?

        Core Web Vitals are a set of metrics that Google uses to measure and evaluate a webpage’s user experience, focusing on three main aspects: **loading performance**, **interactivity**, and **visual stability**. These metrics are part of Google's Page Experience signals, and improving them can help enhance SEO by aligning your site with what Google considers a "great page experience."

Here’s a breakdown of the **Core Web Vitals** metrics and how they impact your pages:

1. **Largest Contentful Paint (LCP)** – *Loading Performance*
   - **What it measures**: LCP tracks the time it takes for the largest visible element on the page (like a main image or large text block) to load.
   - **Goal**: Keep LCP under 2.5 seconds to ensure that pages load quickly for users.
   - **Why it matters**: Faster load times improve user experience, as visitors can access content promptly, reducing bounce rates and increasing user engagement.

2. **First Input Delay (FID)** – *Interactivity*
   - **What it measures**: FID measures the delay between when a user first interacts with a page (like clicking a button) and when the browser responds.
   - **Goal**: FID should be under 100 milliseconds for optimal responsiveness.
   - **Why it matters**: Quick response times are essential for interactivity, as delays can frustrate users and may lead them to abandon the page.

3. **Cumulative Layout Shift (CLS)** – *Visual Stability*
   - **What it measures**: CLS evaluates unexpected layout shifts during page load, like elements moving around due to delayed loading or resizing.
   - **Goal**: Keep CLS under 0.1 to ensure content is stable.
   - **Why it matters**: Visual stability is important because it prevents users from accidentally clicking the wrong elements or losing their place on the page. 

   **Cumulative Layout Shift (CLS)** is a metric that measures how much a webpage's content shifts unexpectedly as it loads. It’s part of Google’s Core Web Vitals and is crucial for evaluating **visual stability**—how reliably elements stay in place during loading. A high CLS score indicates poor user experience, as unexpected shifts can make the page feel unstable and frustrating.

### How CLS Works
CLS calculates layout shifts by assessing how often and by how much elements on the page move as the page loads. This movement can occur when:
- **Images** without specified dimensions load and push content down.
- **Ads, banners, or iframes** load and shift surrounding content.
- **Fonts** load slowly, causing text to change size or style unexpectedly.
- **Dynamic content** (such as user-generated content or notifications) is added to the page without space allocation.

### How CLS is Scored
CLS is a score ranging from 0 (no shifting) to 1 or more (significant shifting). According to Google, a **good CLS score is 0.1 or lower**, while a score higher than 0.25 is considered poor.

### Why CLS Matters
Poor CLS can be frustrating for users, especially on mobile devices. If content shifts unexpectedly, users might accidentally click the wrong buttons or links, leading to confusion, mistakes, or even causing users to abandon the page.

### Common Causes of High CLS
1. **Images without dimensions**: If images don’t specify width and height in the HTML/CSS, they load dynamically, causing layout shifts.
2. **Ads and iframes**: Ads that load after the main content can push text or other elements down the page.
3. **Web fonts**: Fonts that load slowly or change size cause "flash of unstyled text" (FOUT), which can shift content unexpectedly.
4. **Pop-ups and banners**: Content that appears after the page loads, like banners or pop-ups, can disrupt the layout.

### How to Reduce CLS
To improve CLS, you can:
- **Set width and height** for images and videos to reserve space.
- **Reserve space for ads and embeds** so they don’t shift content when loading.
- **Use a web font loader** to manage font loading and avoid unexpected text shifts.
- **Add dynamic content below the fold** (the part of the page users don’t see initially) to avoid layout disruption.


### Why Core Web Vitals Matter for SEO
Google uses Core Web Vitals as part of its ranking criteria, meaning that pages with good scores on these metrics are more likely to rank higher in search results. This makes them important for SEO, as pages that offer a smooth and responsive experience align with Google’s focus on user satisfaction.

**How to Improve Core Web Vitals**
To optimize Core Web Vitals, you can:
- Minimize and defer large images and resources for faster loading.
- Optimize JavaScript to reduce blocking elements.
- Use techniques like lazy loading and caching.
- Monitor performance regularly with tools like **Google PageSpeed Insights** or **Lighthouse**.

    - are your pages served in a secure fashion?
    - does your content display well on mobile devices?
    - does your content avoid using an excessive amount of ads that distract from or interfere with the main content
    - do your pages avoid using intusive intersitials?
    - is your page designed so visistors can easily distinguish the main content form other content on you page?
