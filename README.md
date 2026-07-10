# Dmytro Pishchenkov | Portfolio

This is the source code for my personal portfolio at `portfolio.dmytro-dev.net`. I use it as a focused engineering profile for Platform Engineering, Cloud Operations, and DevSecOps work.

## What It Includes

I built the site to be fast, accessible, readable, and easy to keep updated. It currently includes:

* **Trilingual support:** English, Ukrainian, and Polish via `react-i18next`.
* **Adaptive theming:** Language-specific visual themes with light and dark mode support.
* **Portfolio assets:** Direct access to my CV, live demos, repository links, and contact options.
* **Engineering focus:** Kubernetes automation, Terraform, Go/Python/Bash scripting, cloud operations, security, and observability.
* **Machine-readable structure:** Prerendered HTML, semantic sections, SEO metadata, OpenGraph tags, `robots.txt`, `sitemap.xml`, and JSON-LD profile data.

## Featured Work

The portfolio highlights selected work across platform engineering and cloud infrastructure:

* **Splunk Operator:** PostgreSQL Platform Controllers
* **AWS RDS Fleet Upgrade & Graviton Migration**
* **Serverless Cloud-Native Web Application**

## Stack

The frontend is intentionally lightweight and built with:

* **Vite**
* **React**
* **Chakra UI**
* **i18next / react-i18next**

The production build prerenders the main route into static HTML so the primary content is visible to crawlers before client-side hydration.

## Spin It Up Locally

**1. Install dependencies:**

```bash
npm install
```

**2. Start the dev server:**

```bash
npm run dev
```

**3. Build for production, including prerendering:**

```bash
npm run build
```

**4. Preview the production build:**

```bash
npm run preview
```

## Deployment

The site is deployed and hosted with **Azure Static Web Apps**.

* **Live site:** `https://portfolio.dmytro-dev.net`
* **CI/CD pipeline:** GitHub Actions workflow at `.github/workflows/azure-static-web-apps-ashy-bay-06902e503.yml`.
* **Workflow target:** Pushes to `master` trigger deployments from the `/` app location, publishing the `dist` output.
* **Routing and headers:** Azure Static Web Apps behavior is configured through `public/staticwebapp.config.json`.
