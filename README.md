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
- Contact-choice popup with Email Me, Contact me and Work With Me actions
- Work With Me form mapped to Google Sheets through `apps-script.gs`

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

## Connect the Work With Me form to Google Sheets

1. Create or open the Google Sheet where you want to receive work requests.
2. Open **Extensions → Apps Script** and paste the contents of `apps-script.gs` into the script editor.
3. Click **Deploy → New deployment**, choose **Web app**, set **Execute as** to your account and **Who has access** to **Anyone**.
4. Copy the deployed Web App URL.
5. Open `script.js` and replace `PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE` with that URL.
6. Upload the updated `index.html`, `styles.css`, `script.js`, `apps-script.gs` and `assets` folder together.

The Apps Script automatically creates a `Work Requests` sheet tab and stores the timestamp, name, phone, email, company, service, website/app URL and project brief in separate columns.
