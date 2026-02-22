# Anant Academy – SEO Guide

## What’s already done in the project

- **`public/sitemap.xml`** – Lists all public pages (home, about-us, book-demo, join-as-tutor, policies).  
  Admin routes (`/admin/`) are not included.
- **`public/robots.txt`** – Allows all crawlers, disallows `/admin/`, points to your sitemap.
- **`index.html`** – Title, meta description, keywords, canonical URL, and Open Graph tags set for SEO and sharing.
- **`public/_redirects`** – `/* /index.html 200` for Netlify so Vue Router (history mode) works and crawlers get the SPA.

---

## Step 1: Deploy to Netlify

```bash
git add .
git commit -m "SEO: sitemap, robots.txt, meta tags, redirects"
git push
```

After deploy, check:

- https://anantacademy.co.in/sitemap.xml → XML with list of URLs  
- https://anantacademy.co.in/robots.txt → Shows `User-agent`, `Allow`, `Sitemap`  
- https://anantacademy.co.in/ → Page title in browser tab = “Anant Academy | Best Online Tuition…”

---

## Step 2: Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add property: **https://anantacademy.co.in** (or your exact live URL).
3. Verify ownership (HTML file upload, DNS, or meta tag – use the method Netlify supports).
4. After verification: **Sitemaps** → add **sitemap.xml** (or full URL `https://anantacademy.co.in/sitemap.xml`) → Submit.
5. In a few days, check **Coverage** / **Pages** to see indexed URLs.

---

## Step 3: Target keywords (already in title/description)

- online classes  
- online tuition  
- best online tuition  
- Anant Academy  
- 1 to 1 tuition  
- Class 6 to 12  
- Physics, Maths, Chemistry, Biology  
- CBSE, Angondhalli  

Ranking takes time (weeks–months). Search Console helps you see queries and impressions.

---

## Step 4: Optional – next-level SEO

1. **Per-page title & description (Vue)**  
   Use `vue-router` + `document.title` and a meta/head utility (e.g. small composable or `@vueuse/head`) so each route has its own `<title>` and `meta name="description"`. Keeps Google and social sharing correct for each URL.

2. **Structured data (JSON-LD)**  
   Add a `WebSite` or `EducationalOrganization` schema on the homepage (in `index.html` or via a component that injects a script tag). Helps rich results and knowledge panel.

3. **Local SEO**  
   If you have a physical location (e.g. Angondhalli), add a Google Business Profile and use the same name, address, phone, and website (anantacademy.co.in). Mention “Angondhalli” and city in key pages (e.g. About, footer).

4. **Content & links**  
   Add a short blog or “Resources” section with useful content (e.g. “Tips for Class 10”, “How to choose online tuition”). Internal links from homepage/footer to these pages. Get listed on education directories or local sites with a link to anantacademy.co.in.

5. **Performance**  
   Keep the site fast (Netlify is good). Use lazy loading for images and avoid heavy JS so mobile and Core Web Vitals stay good.

---

## Quick checklist

- [ ] Deploy and confirm sitemap.xml and robots.txt open correctly.
- [ ] Verify and add sitemap in Google Search Console.
- [ ] Check after 1–2 weeks: “site:anantacademy.co.in” on Google to see indexed pages.
- [ ] (Optional) Add per-route meta tags and JSON-LD.
- [ ] (Optional) Create Google Business Profile and basic content for local + keyword visibility.
