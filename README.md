# Big Brain Way — LinkedIn Landing Page

A conversion-focused landing page for Big Brain Way's LinkedIn campaign. The page is designed to help business owners identify operational inefficiencies, understand automation opportunities, and book a free consultation.

## 🎯 Project Overview

The landing page uses an educational and consultative approach to introduce Big Brain Way's AI-enabled business growth systems.

It focuses on common operational challenges such as:

* Too much manual work
* Slow lead response
* Disconnected systems
* Reporting and data issues
* Other operational challenges

The primary call to action is:

**BOOK A FREE CONSULTATION**

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

* LinkedIn-focused landing page
* Free consultation offer
* Business operations assessment
* AI and automation messaging
* ROI-focused dashboard
* Lead generation form
* Google Apps Script form submission
* Google Sheets lead storage
* Responsive design
* Mobile-friendly layout
* Educational and consultative content
* Conversion-focused CTA

## 📊 ROI Dashboard

The landing page presents an example operational efficiency dashboard containing:

* **12 hrs/wk** — Manual tasks
* **68%** — Automation potential
* **3.5x** — ROI

These figures are presented as part of the landing page's marketing content and dashboard demonstration.

## 📋 Consultation Form

The consultation form collects information from visitors interested in discussing their business operations and automation opportunities.

The form includes fields such as:

* First Name
* Last Name
* Business Name
* Email
* Phone
* Website
* Main Operational Challenge

Available challenge options include:

* Too much manual work
* Slow lead response
* Disconnected systems
* Reporting / data issues
* Other

## 🔄 Form Submission

The LinkedIn landing page uses **Google Apps Script** to process consultation form submissions.

When a visitor submits the form, the landing page sends the submitted information to a Google Apps Script web endpoint.

The Apps Script processes the data and stores the consultation lead in a connected **Google Sheet**.

### Submission Flow

```text
Visitor
   ↓
LinkedIn Landing Page
   ↓
Consultation Form
   ↓
Google Apps Script Web App
   ↓
Google Sheets
```

This setup allows consultation leads to be collected and managed through Google Sheets without relying on Netlify Forms.

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

The LinkedIn landing page is maintained in the Big Brain Way GitHub organization repository on the:

```text
linkedin
```

branch.

The form submission system is handled separately through Google Apps Script and Google Sheets.

## 🧹 Generated Files

Generated Astro files and dependencies are intentionally excluded from Git.

The `.gitignore` file should exclude:

```text
node_modules/
.astro/
dist/
.env
```

The `dist/` directory is generated automatically when running:

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
