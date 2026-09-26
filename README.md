# Big Brain Way — Facebook Landing Page

A conversion-focused landing page for Big Brain Way's Facebook campaign, focused on **Local Trust & Reputation Builders**.

The landing page is designed for contractors and local agency owners who want to improve their local visibility, reputation, and ability to generate more calls.

## 🎯 Project Overview

The landing page promotes a:

**Free Local Visibility & Search Audit**

The page uses an educational and consultative approach to help businesses understand their local visibility and reputation.

The primary call to action is:

**CHECK MY LOCAL VISIBILITY**

## 🛠️ Technologies

* Astro
* HTML
* CSS
* JavaScript
* Google Apps Script
* Google Sheets

## 📁 Project Structure

```text
/

├── public/
│   └── image/
│       └── BBW Logo.png
│
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── style.css
│
├── astro.config.mjs
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

Astro uses the `src/pages/` directory for page routes. The main landing page is located at:

```text
src/pages/index.astro
```

Static assets such as logos and images are stored in:

```text
public/
```

## 📝 Main Features

* Facebook-focused landing page
* Local visibility and reputation messaging
* Free local search audit
* Local trust and reputation positioning
* Google Maps 3-Pack demonstration
* Lead generation form
* Google Apps Script form submission
* Google Sheets lead storage
* Responsive design
* Mobile-friendly layout
* Educational and consultative content
* Clear conversion-focused CTA
* No Calendly dependency

## 🔎 Local Visibility Section

The landing page demonstrates local search visibility using a Google Maps 3-Pack style example.

Example businesses used in the demonstration include:

* Summit Home Services
* North Ridge Roofing
* BluePeak Local Agency

These examples are used as visual demonstration content within the landing page.

## 📋 Form Submission

The landing page uses **Google Apps Script** to process form submissions.

When a visitor submits the form, the landing page sends the form data to a Google Apps Script web endpoint.

The Apps Script processes the submission and stores the lead information in a connected **Google Sheet**.

### Submission Flow

```text
Visitor
   ↓
Facebook Landing Page
   ↓
Lead Form
   ↓
Google Apps Script Web App
   ↓
Google Sheets
```

This setup allows submitted leads to be stored and managed directly through Google Sheets without relying on Netlify Forms.

## 🚀 Running the Project

Install the dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

The project will normally be available at:

```text
http://localhost:4321
```

Build the production version:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## 🌐 Deployment

The Facebook landing page is maintained in the Big Brain Way GitHub organization repository on the:

```text
master
```

branch.

The form submission system is handled separately through Google Apps Script and Google Sheets.

## 🧹 Generated Files

Generated Astro files and dependencies are intentionally excluded from Git.

The `.gitignore` file excludes:

```text
node_modules/
.astro/
dist/
.env
```

The `dist/` folder is generated automatically when running:

```sh
npm run build
```

It should not be committed to the repository.

## 🧞 Astro Commands

| Command                   | Action                                |
| :------------------------ | :------------------------------------ |
| `npm install`             | Installs project dependencies         |
| `npm run dev`             | Starts the local development server   |
| `npm run build`           | Builds the production site            |
| `npm run preview`         | Previews the production build locally |
| `npm run astro ...`       | Runs Astro CLI commands               |
| `npm run astro -- --help` | Displays Astro CLI help               |

## 📚 Learn More

For Astro documentation, visit:

https://docs.astro.build

For Astro project information:

https://astro.build
