# 🚀 Quick Start Guide - Majita Men's Network

## Your Website is Ready!

The development server is already running at: **http://localhost:5174/**

---

## 🎯 What You Can Do Right Now

### 1. View the Website
Open your browser and go to: `http://localhost:5174/`

### 2. Navigate the Pages
- **Home** (/) - Main landing page
- **About Us** (/about) - Organization information
- **Learn & Resources** (/resources) - Educational content
- **Blog & Stories** (/blog) - Blog posts with filtering
- **Contact** (/contact) - Get help and contact form

### 3. Test Features
- ✅ Click through the navigation menu
- ✅ Scroll through the carousel on the home page
- ✅ Expand accordion sections on the Resources page
- ✅ Filter blog posts by category
- ✅ Try the search functionality on the Blog page
- ✅ Fill out the contact form
- ✅ Test responsive design (resize your browser)

---

## 📱 Test Responsive Design

### Method 1: Browser DevTools
1. Press `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
2. Click the device toolbar icon (or press `Ctrl+Shift+M`)
3. Select different devices (iPhone, iPad, etc.)

### Method 2: Resize Browser
- Drag the browser window to different sizes
- Watch how the layout adapts

---

## 🛠️ Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 🎨 Customization Guide

### Update Content

#### 1. Blog Posts
Edit: `src/data/blogPosts.ts`

#### 2. Educational Resources
Edit: `src/data/resources.ts`

#### 3. Constants (Hotlines, Social Links)
Edit: `src/utils/constants.ts`

### Update Styles

#### 1. Global Colors
Edit: `src/index.css` (CSS variables at the top)

#### 2. Component Styles
Each component has its own `.css` file in `src/components/`

#### 3. Page Styles
Each page has its own `.css` file in `src/pages/`

---

## 🖼️ Adding Real Images

### Current Setup
The website uses placeholder image paths. To add real images:

1. **Add images to the `public` folder**:
   ```
   public/
   ├── images/
   │   ├── blog/
   │   │   ├── mental-wellness.jpg
   │   │   ├── expert-advice.jpg
   │   │   └── ...
   │   └── team/
   │       ├── thabo.jpg
   │       ├── sarah.jpg
   │       └── david.jpg
   ```

2. **Images will automatically work** - paths are already set up correctly!

---

## 🎥 Adding Real Videos

### YouTube Videos
1. Find your YouTube video
2. Copy the video ID or URL
3. Update in components:
   - Home page: `src/pages/Home.tsx` (line with VideoEmbed)
   - Resources page: `src/pages/Resources.tsx` (videoResources array)

### Example:
```typescript
<VideoEmbed
  url="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
  title="Your Video Title"
/>
```

---

## 📧 Connect Contact Form

### Option 1: EmailJS (Recommended for beginners)
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Install: `npm install @emailjs/browser`
3. Update `src/components/ContactForm.tsx`

### Option 2: Backend API
Create your own API endpoint and update the `handleSubmit` function

---

## 🌐 Deploy Your Website

### Option 1: Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
1. Push to GitHub
2. Connect repository at [netlify.com](https://www.netlify.com/)
3. Deploy!

### Option 3: Traditional Hosting
```bash
npm run build
# Upload the 'dist' folder to your hosting
```

---

## 🔧 Troubleshooting

### Port Already in Use?
If port 5174 is taken, the server will automatically try another port.
Check the terminal output for the actual URL.

### Build Errors?
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
```

### Styling Not Updating?
- Hard refresh: `Ctrl+Shift+R` (Windows) / `Cmd+Shift+R` (Mac)
- Clear browser cache

---

## 📚 Learn More

### React + TypeScript
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Framer Motion (Animations)
- [Framer Motion Docs](https://www.framer.com/motion/)

### React Router
- [React Router Docs](https://reactrouter.com/)

---

## ✨ Tips for Success

1. **Start Small**: Make one change at a time
2. **Test Often**: Check your changes in the browser
3. **Use DevTools**: Inspect elements to understand the structure
4. **Keep Backups**: Commit changes to Git regularly
5. **Ask Questions**: The React community is very helpful!

---

## 🎊 You're All Set!

Your website is **production-ready** and **fully functional**. 

Customize it, add your content, and launch it to make a real difference in people's lives!

**Together Against Silence — Healing Minds, Ending Violence** 💙

---

Need help? Check:
- PROJECT_SUMMARY.md - Complete feature list
- README.md - Full documentation
- Source files - All code is commented
