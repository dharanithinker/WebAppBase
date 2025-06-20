# AI Solutions Website

A modern, responsive single-page site inspired by [MaayaiAI](https://maayai.ai/) that showcases an AI company, its products, and contact details.  
Built with nothing more than **HTML + CSS + JavaScript**, the project is perfect for static hosting (GitHub Pages, Vercel, Netlify, etc.).

---

## ✨ Key Features

- ⚡ **Lightning-fast static site** – no build process, servers, or frameworks required.  
- 📱 **Fully responsive design** – looks great on mobile, tablet, and desktop.  
- 🎨 **Modern UI/UX** – hero section, animated service cards, scroll-triggered reveals, smooth scrolling.  
- 🍔 **Mobile navigation drawer** – hamburger menu with animated lines.  
- 📨 **Client-side contact form validation** – name, email, subject, and message fields.  
- 🌈 **Easy theme customization** – change colors, fonts, or sections in minutes.  
- 🗂 **Zero-dependency deployment** – drop the files into any static host.

---

## 📂 File Structure

```
ReactApp/               # repo root
├── index.html          # main HTML file
├── styles.css          # site-wide styles
├── script.js           # interactivity & animations
├── images/             # logos, hero, about pictures, etc.
│   └── logo.svg
└── README.md           # (you are here)
```

---

## 🛠 Technologies Used

| Purpose            | Tech / Service                           |
|--------------------|------------------------------------------|
| Markup             | HTML5                                    |
| Styling            | CSS3 (Flexbox, Grid, CSS variables)      |
| Interactivity      | Vanilla JavaScript (ES6+)                |
| Icons              | [Font Awesome 6](https://fontawesome.com)|
| Fonts              | [Google Fonts – Poppins](https://fonts.google.com)|
| Animations         | CSS keyframes & Intersection Observer    |

---

## 🚀 Setup & Local Development

1. **Clone the repo**

   ```bash
   git clone https://github.com/sdktester07/ReactApp.git
   cd ReactApp
   ```

2. **Open locally**

   - Quick preview: double-click `index.html` (works offline).
   - Preferred: serve with a tiny HTTP server for clean routing & CORS.

     ```bash
     # Python 3
     python -m http.server 8080
     # then visit http://localhost:8080
     ```

No build tools are required; changes reflect immediately on refresh.

---

## 🎨 Customization Guide

| Want to change… | Where to edit |
|-----------------|---------------|
| Logo & favicon  | `images/` folder and `<link rel="icon">` in `index.html` |
| Primary colors  | `:root` CSS variables in `styles.css` (`--primary-color`, `--gradient-primary`, etc.) |
| Fonts           | Replace Google Fonts link in `<head>` and update `font-family` declarations |
| Section text    | Update the corresponding `<section>` tags in `index.html` |
| Add/Remove services | Duplicate or delete `.service-card` blocks in **Services** section |
| Animations      | Modify keyframes or JS logic in `script.js` |

---

## 🌍 Deployment

Because the project is pure static files, you can host it **anywhere**:

### GitHub Pages

```bash
# from repo root
git checkout -b gh-pages
git add .
git commit -m "Deploy site"
git push -u origin gh-pages
# then enable Pages in repo settings → branch: gh-pages
```

### Other Static Hosts

- **Vercel / Netlify** – click *New Project*, select the repo, choose **static**.
- **Amazon S3**, **Cloudflare Pages**, **Render**, etc. – upload the same files.

---

## 📬 Contact

AI Solutions  
Building No / Flat No : **488/2, Trichy Road, Singanallur, Coimbatore, Tamil Nadu – 641005**  
☎️ **+91 90435 00128**  
✉️ **contact@aisolutions.ai**

Feel free to reach out for issues, feature requests, or collaboration ideas!
