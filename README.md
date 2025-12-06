# My Shortcuts PWA

A Progressive Web App for managing website shortcuts that works offline and can be installed on any device.

## Features

- 📱 **Installable PWA**: Add to home screen on mobile devices
- 💾 **Offline Support**: Works without internet connection via service worker
- 🔒 **Private**: All data stored locally on your device
- 🌐 **Two Opening Modes**: 
  - Open in App: Navigate within the PWA
  - Open in Browser: Open in your default browser
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- 🚀 **GitHub Pages Ready**: Deploy directly to GitHub Pages

## Setup for GitHub Pages

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "main" branch as source
   - Save

3. **Access Your App**:
   - Visit: `https://yourusername.github.io/your-repo/`
   - Install it to your device using the browser's install prompt

## Local Development

Simply open `index.html` in a web browser. For full PWA features (service worker), you'll need to serve it over HTTPS or localhost.

Using Python:
```bash
python -m http.server 8000
```

Then visit: `http://localhost:8000`

## File Structure

```
├── index.html          # Main HTML file
├── manifest.json       # PWA manifest
├── sw.js              # Service worker for offline support
├── app.js             # Main application logic
├── styles.css         # Styling
├── icon-192.png       # App icon (192x192)
├── icon-512.png       # App icon (512x512)
└── README.md          # This file
```

## How It Works

### Data Storage
- Uses **localStorage** to save shortcuts directly on your device
- Each device maintains its own separate list of shortcuts
- No server or database required
- Data persists across sessions

### Opening Shortcuts
- **Open in App**: Navigates to the URL within the PWA window
- **Open in Browser**: Opens URL in a new tab in your default browser

### PWA Features
- **Service Worker**: Caches app files for offline use
- **Manifest**: Enables "Add to Home Screen" functionality
- **Responsive**: Adapts to any screen size

## Browser Support

Works on all modern browsers:
- Chrome/Edge (Desktop & Mobile)
- Safari (Desktop & iOS)
- Firefox (Desktop & Mobile)
- Samsung Internet

## Privacy

All data is stored locally on your device using browser localStorage. No data is sent to any server or shared between devices. Each device/browser maintains its own independent list of shortcuts.

## Customization

### Change App Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #D64545;  /* Muted red color */
    --bg-color: #0D0D0D;       /* Black background */
    /* ... */
}
```

### Change App Name
Update in `manifest.json`:
```json
{
  "name": "My Shortcuts",
  "short_name": "Shortcuts"
}
```

## License

Free to use and modify.
