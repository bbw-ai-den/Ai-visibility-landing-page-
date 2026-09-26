# Big Brain Way — Reddit Landing Page

An interactive technical resource for Big Brain Way's Reddit campaign, focused on **business workflow analysis, automation architecture, system bottlenecks, and operational failure points**.

The page is designed as an educational technical resource rather than a traditional marketing landing page. It provides an interactive way to compare manual business processes with automated pipeline architecture.

## 🎯 Project Overview

The Reddit landing page is built for technically minded and analytical audiences who are interested in understanding how business workflows operate and where manual processes create friction.

The Marketing Week 1 brief defines the Reddit resource as a **Technical Authority** page. The intended approach is a technical, objective analysis of digital workflows without promotional sales messaging.

The page focuses on:

* Manual workflow analysis
* Automated pipeline architecture
* System bottlenecks
* Data state transitions
* Human-dependent processes
* Automation patterns
* API integrations
* Workflow observability
* Failure surfaces
* Technical system mapping

## 🛠️ Technologies

* Astro
* HTML
* CSS
* JavaScript

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
│   ├── scripts/
│   │   └── script.js
│   └── styles/
│       └── style.css
│
├── astro.config.mjs
├── package.json
├── package-lock.json
└── README.md
```

The main landing page is located at:

```text
src/pages/index.astro
```

Static assets such as the Big Brain Way logo are stored in:

```text
public/
```

Interactive JavaScript functionality is handled through:

```text
src/scripts/script.js
```

## 🧠 Technical Resource

The page explains how manual work can introduce:

* Queues
* Duplicate data
* Manual decision points
* Delayed actions
* Inconsistent system state
* Invisible handoffs
* Limited observability

The central idea is to **map the system before deciding what should be automated**.

The page presents the workflow as a sequence of state transitions:

```text
INPUT
  ↓
VALIDATE
  ↓
LOGIC
  ↓
API
  ↓
ACTION
  ↓
OUTPUT
```

## 📊 Interactive Process Comparison

The main feature of the page is an interactive comparison table that maps manual processes against automated pipelines.

The comparison includes:

| Process          | Manual                        | Friction                    | Automated                      |
| :--------------- | :---------------------------- | :-------------------------- | :----------------------------- |
| Lead intake      | Monitor incoming channels     | Disconnected information    | Capture incoming event         |
| Data entry       | Manually re-enter information | Transcription risk          | Move structured payload        |
| Qualification    | Human decision                | Inconsistent decision logic | Evaluate defined rules         |
| Follow-up        | Manual response               | Timing dependency           | Trigger predefined action      |
| CRM update       | Copy information into CRM     | Inconsistent state          | Programmatic API update        |
| Quote generation | Manual preparation            | Process variability         | Structured generation pipeline |
| Notification     | Human handoff                 | Queue points                | Automated event/message        |
| Reporting        | Manual collection             | Separate reporting process  | Recorded events/data layer     |

The Marketing Week 1 brief specifically requires the Reddit resource to use an interactive HTML/CSS comparison table rather than a static image.

## 🔍 Process Analysis

The comparison table can be filtered by:

* All Processes
* Input
* Logic
* Action
* Output

Individual process rows can also be selected to inspect the corresponding technical transition.

## 📡 Friction Analysis

The page identifies four illustrative dependency signals:

### Handoffs

Transfers between people, inboxes, spreadsheets, or systems create additional dependencies.

### Duplication

Re-entering information creates parallel versions of the same business state.

### Latency

A workflow can pause when the next state depends on someone noticing and acting.

### Visibility

Manual workflows can make it difficult to reconstruct what happened, when it happened, and why.

These signals are explicitly presented as **illustrative dependency signals, not performance scores**.

## 🏗️ System Architecture

The interactive architecture section represents automation as a sequence of explicit state transitions:

```text
01 INPUT
   ↓
02 VALIDATE
   ↓
03 LOGIC
   ↓
04 INTEGRATE / API
   ↓
05 AUTOMATE
   ↓
06 LOG
   ↓
07 OUTPUT
```

Each architecture node can be inspected to understand its:

* Purpose
* Example
* Next state

## 🔄 Worked Workflow Example

The page demonstrates a lead-processing workflow:

```text
RECEIVE
   ↓
VALIDATE
   ↓
CLASSIFY
   ↓
UPDATE
   ↓
ACT
   ↓
LOG
```

The example demonstrates how the same system-mapping method can be applied to a real business workflow.

## 🔎 Bottleneck Analysis

The page identifies several common workflow failure surfaces:

* Waiting for someone to notice
* Moving the same data between systems
* Decisions existing only in someone's knowledge
* Lack of useful workflow traces

The purpose is to identify the dependency before deciding whether automation is appropriate.

## 💻 Automation Pattern

The page presents a simplified automation pattern:

```text
TRIGGER
    ↓
VALIDATE
    ↓
DECIDE
    ↓
ACTION
    ↓
VERIFY
    ↓
LOG
```

The corresponding technical examples include:

```text
event.received
payload.is_valid
rules.evaluate(payload)
api.execute()
response.status
workflow.record()
```

## 📋 Form Submission

This landing page **does not contain a lead-generation form**.

There is:

* No form
* No Google Apps Script form submission
* No Google Sheets lead collection
* No Netlify Forms integration
* No Calendly booking flow

The page instead provides an interactive technical resource and directs the visitor to continue analyzing a workflow.

The page itself states:

```text
No pitch. No form. Just the system.
```

## 🎨 Design Approach

The page follows the Reddit campaign requirements from the Marketing Week 1 brief:

* Technical presentation
* Minimalist visual design
* High-typography hierarchy
* Monospace/technical styling
* Interactive data presentation
* No promotional pop-ups
* No glossy marketing imagery
* No unnecessary badges
* Objective educational presentation

The campaign brief describes the intended Reddit audience as analytical users who value detailed process maps and technical information.

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

The Reddit landing page is maintained in the Big Brain Way GitHub organization repository on the:

```text
reddit
```

branch.

The repository uses the same organization repository as the other Big Brain Way landing pages, with each landing page maintained on its own branch.

## 🧹 Generated Files

Generated Astro files and dependencies should not be committed to the repository.

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

It should not be committed to Git.

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

For Astro documentation:

https://docs.astro.build

For Astro project information:

https://astro.build
