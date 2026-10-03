# Sravan Portfolio Template

A responsive, static HTML/CSS/JavaScript portfolio website based on the supplied visual reference and populated with the professional information from Sravan's resume.

## Sections

- Hero portfolio introduction
- Section 02: Selected Portfolio Work with exactly four visible portfolio cards and an interactive workflow preview
- Performance Marketing as the first visible task card, with a mobile-optimised portfolio popup distilled from the Q2 marketing review
- CRO-Optimized Landing Pages as the second visible task card, with a responsive popup linking to 18 performance-marketing landing pages
- SEO & Organic Growth as the third visible task card, with a portfolio case-study popup covering traffic, content, website journeys, OTP/PDF capture, rankings, leads and revenue
- AI-Powered Marketing Automation as the fourth visible task card, with an AI Search Report and UTM Link Builder plus URL Shortener case-study popup
- About and capability areas
- Selected measurable outcomes
- Professional experience timeline
- Marketing tools and technology stack
- Education, strengths and contact CTA

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

The page uses Google Fonts. All personal and professional content can be edited directly in `index.html`. Update the email, phone number, experience text and outcome figures before publishing if any details change.

The Performance Marketing and SEO popups are presented as portfolio case-study pages with written briefs and outcome metrics rather than raw PPT slide images. This keeps the portfolio view clean and avoids slide numbers and deck logos.

The landing-page popup opens the linked pages in a new browser tab and presents the supplied PageSpeed/Core Web Vitals positioning for desktop and mobile.

The SEO report popup uses selected facts from the supplied Q1 and Q2 SEO AOP reviews plus a step-by-step growth flow from organic discovery to revenue attribution.

The AI automation popup uses `assets/automation/ai-search-report.png` and `assets/automation/utm-builder-shortener.png` as project visuals. Keep `assets/automation/` beside `index.html` when uploading or moving the site.
