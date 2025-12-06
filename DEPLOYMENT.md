# GitHub Pages Deployment Guide

## Quick Start

1. **Initialize Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: PWA shortcuts app"
   ```

2. **Create GitHub Repository**
   - Go to https://github.com/new
   - Create a new repository (e.g., "shortcuts-app")
   - Don't initialize with README (we already have one)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/shortcuts-app.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings"
   - Scroll to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait a few minutes for deployment

5. **Access Your App**
   - Your app will be available at: `https://YOUR_USERNAME.github.io/shortcuts-app/`
   - Share this URL with any device you want to use the app on

## Installing as PWA

### On Mobile (iOS/Android)
1. Open the app URL in your mobile browser
2. **iOS Safari**: Tap the Share button → "Add to Home Screen"
3. **Android Chrome**: Tap the menu (⋮) → "Add to Home Screen" or "Install App"

### On Desktop
1. Open the app URL in Chrome/Edge
2. Look for the install icon (⊕) in the address bar
3. Click "Install"

## Updating the App

After making changes:
```bash
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically update in a few minutes.

## Custom Domain (Optional)

1. Buy a domain from any registrar
2. Add a `CNAME` file with your domain name
3. Configure DNS settings at your registrar
4. Update in GitHub Pages settings

## Troubleshooting

### Service Worker Not Working
- Make sure you're accessing via HTTPS (GitHub Pages provides this automatically)
- Clear browser cache and reload

### Icons Not Showing
- Verify icon-192.png and icon-512.png exist in root directory
- Check manifest.json paths are correct
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)

### App Not Installable
- Ensure you're accessing via HTTPS
- Check that manifest.json is valid
- Icons must be present and correctly referenced
- Service worker must register successfully

## Privacy Note

All user data (shortcuts) is stored locally in the browser's localStorage. When you install the app on different devices, each device will have its own separate list of shortcuts. No data is synchronized or shared between devices or users.
