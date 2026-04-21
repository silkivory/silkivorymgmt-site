# Silk Ivory — silkivorymgmt.com

Artist Management, Boutique Imprint & Production House
Los Angeles, CA

## Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `silkivorymgmt`)
2. Push this folder:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/YOUR_USERNAME/silkivorymgmt.git
   git push -u origin main
   ```
3. Go to repo **Settings → Pages → Source: Deploy from branch → main → / (root)**
4. Site goes live at `https://YOUR_USERNAME.github.io/silkivorymgmt`

## Connect silkivorymgmt.com

1. In repo Settings → Pages → Custom domain → type `silkivorymgmt.com`
2. At your domain registrar add these DNS records:
   ```
   A     @    185.199.108.153
   A     @    185.199.109.153
   A     @    185.199.110.153
   A     @    185.199.111.153
   CNAME www  YOUR_USERNAME.github.io
   ```
3. DNS propagation takes up to 48 hours

## Contact Form

Replace `YOUR_FORM_ID` in contact.html with a free Formspree ID (formspree.io)

## File Structure

```
silkivorymgmt/
├── index.html
├── about.html
├── services.html
├── roster.html
├── contact.html
├── css/main.css
├── js/main.js
└── README.md
```
