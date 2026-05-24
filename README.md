# ClearWave Dental Studio Template

A static medical and dental website template for client projects. It includes three live pages, responsive styling, appointment request behavior, service filters, and reusable sections.

## Pages

- `index.html` - homepage with hero, trust stats, service highlights, and testimonial call to action
- `services.html` - procedure cards, working category filters, and FAQ content
- `appointment.html` - working appointment request form that saves demo submissions in `localStorage`
- `assets/images/` - generated clinic visuals included locally for portable GitHub Pages demos

## Customize

Edit these files for each client:

- `assets/styles.css` - colors, spacing, typography, responsive layout
- `index.html` - clinic name, hero copy, highlights, testimonials
- `services.html` - treatments, categories, FAQs
- `appointment.html` - contact details, hours, appointment reasons
- `assets/images/` - replace generated demo images with client-approved photography when available

## Run Locally

This is a static site. You can open `index.html` directly in a browser, or run a small local server:

```bash
python -m http.server 5173
```

Then visit:

```text
http://localhost:5173
```

## Publish To A New GitHub Repo

From inside this folder:

```bash
git init
git add .
git commit -m "Initial medical dental website template"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/medical-dental-template.git
git push -u origin main
```

For GitHub Pages:

1. Open the repository on GitHub.
2. Go to Settings > Pages.
3. Set Source to `Deploy from a branch`.
4. Choose `main` and `/root`.
5. Save and wait for the public URL.
