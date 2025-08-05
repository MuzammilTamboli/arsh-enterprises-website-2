# How to Change Images in ARSH ENTERPRISES Website

## Current Image Locations in Code:

### 1. Hero Section (src/components/Hero.tsx)
```jsx
// Background pattern
src="https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&w=1200"

// Main hero image
src="https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=800"
```

### 2. Services Section (src/components/Services.tsx)
```jsx
// AC Installation
image: 'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&w=600'

// AC Uninstallation  
image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=600'

// AC Maintenance
image: 'https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=600'

// VRV/VRF Systems
image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600'

// Annual Contracts
image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600'

// Emergency Repairs
image: 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=600'
```

### 3. About Section (src/components/About.tsx)
```jsx
src="https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800"
```

### 4. Contact Section (src/components/Contact.tsx)
```jsx
src="https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=1200"
```

### 5. Testimonials Section (src/components/Testimonials.tsx)
```jsx
// Customer avatars
avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
// ... more avatars
```

## Method 1: Use Different Stock Images

### Step 1: Find New Images
- Go to [Pexels.com](https://pexels.com)
- Search for: "AC repair", "air conditioning", "HVAC technician", "AC installation"
- Right-click on image → "Copy image address"

### Step 2: Replace URLs in Code
Replace the existing URLs with new ones. For example:

**OLD:**
```jsx
src="https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=800"
```

**NEW:**
```jsx
src="https://images.pexels.com/photos/NEW-IMAGE-ID/pexels-photo-NEW-IMAGE-ID.jpeg?auto=compress&cs=tinysrgb&w=800"
```

## Method 2: Use Your Own Images

### Step 1: Prepare Your Images
- Resize images appropriately:
  - Hero images: 800-1200px wide
  - Service images: 600px wide
  - Avatars: 150px wide
- Save as JPG or PNG format
- Name them descriptively (e.g., `ac-technician-repair.jpg`)

### Step 2: Add Images to Project
Create a folder structure:
```
src/
  assets/
    images/
      hero-ac-repair.jpg
      service-installation.jpg
      service-maintenance.jpg
      about-team.jpg
      contact-location.jpg
```

### Step 3: Import and Use Images
In your component files, add imports at the top:

```jsx
import heroImage from '../assets/images/hero-ac-repair.jpg';
import installationImage from '../assets/images/service-installation.jpg';
```

Then use them:
```jsx
<img src={heroImage} alt="AC technician repairing unit" />
```

## Method 3: Use Online Image URLs

If you have images hosted online (Google Drive, Dropbox, etc.):

### Step 1: Get Direct Image URLs
- Upload images to image hosting service
- Get direct link to image file
- Make sure URL ends with .jpg, .png, etc.

### Step 2: Replace URLs in Code
```jsx
// Replace this
src="https://images.pexels.com/photos/old-image.jpeg"

// With your URL
src="https://your-image-host.com/your-ac-image.jpg"
```

## Quick Image Replacement Example

Let's say you want to change the main hero image:

1. **Find the file:** `src/components/Hero.tsx`
2. **Locate this line:**
   ```jsx
   src="https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=800"
   ```
3. **Replace with new URL:**
   ```jsx
   src="https://images.pexels.com/photos/NEW-ID/pexels-photo-NEW-ID.jpeg?auto=compress&cs=tinysrgb&w=800"
   ```
4. **Save the file**
5. **Refresh browser** - new image appears!

## Recommended AC-Related Images to Search:
- "HVAC technician working"
- "Air conditioning repair"
- "AC installation process"
- "Commercial HVAC system"
- "VRV VRF air conditioning"
- "AC maintenance service"
- "Split AC unit"
- "Central air conditioning"

## Image Size Guidelines:
- **Hero images:** 1200x600px or larger
- **Service cards:** 600x400px
- **About section:** 800x500px
- **Contact/location:** 1200x400px
- **Customer avatars:** 150x150px

After changing any image URL, save the file and refresh your browser to see the changes!