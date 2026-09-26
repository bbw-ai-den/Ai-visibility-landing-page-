# Big Brain Way — Instagram Landing Page

A conversion-focused landing page for Big Brain Way's Instagram campaign. The page introduces the **Digital Maturity Checklist** and guides visitors through five stages of digital maturity before collecting their contact information.

## 🎯 Project Overview

This landing page is designed for Instagram traffic and focuses on helping businesses understand their current level of digital maturity.

The page presents five stages:

* Manual
* Digitized
* Connected
* Automated
* AI-Enabled

The primary call to action is:

**GET YOUR FREE CHECKLIST**

Visitors can select their current digital maturity stage and submit their contact information through the lead form.

## 🛠️ Technologies

* Astro
* HTML
* CSS
* JavaScript
* Netlify Forms

## 📁 Project Structure

```text
/

├── public/
│   ├── image/
│   │   └── BBW Logo.png
│   └── media/
│       ├── stage-loop.gif
│       ├── gaps-loop.gif
│       └── next-loop.gif
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

Static assets such as images, logos, and GIFs are stored in:

```text
public/
```

## 📝 Main Features

* Instagram-focused landing page
* Digital maturity assessment
* Five-stage maturity journey
* Lead capture form
* First Name field
* WhatsApp or Email field
* Selected maturity stage submitted with the form
* Netlify Forms integration
* Responsive design
* Mobile-friendly layout
* Animated visual content
* Astro-based static site

## 📋 Lead Form

The main form uses Netlify Forms for lead collection.

The form includes:

* First Name
* WhatsApp or Email
* Selected digital maturity stage
* Hidden campaign source

The campaign source is:

```text
Instagram
```

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

The project is connected to the Big Brain Way GitHub organization repository.

The Instagram landing page is maintained on the:

```text
main
```

branch.

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
