# Incorporating Flyer and Logo into WordPress Website

## Logo Integration Best Practices

### 1. Logo File Preparation
- **Recommended Formats**: 
  - Primary: SVG (scalable, best quality across devices)
  - Alternative: PNG with transparent background
- **Size Guidelines**:
  - Width: 200-300px for standard layouts
  - Height: 50-100px (maintain aspect ratio)
- **Resolution**: 72-144 DPI for web use
- **Color Profile**: RGB (not CMYK)
- **Variants to Create**:
  - Full color version
  - White/light version for dark backgrounds
  - Favicon version (square format, 512x512px, can be reduced)

### 2. Logo Placement Options in WordPress

#### Header Logo
- **Standard Location**: Top left of header
- **WordPress Implementation**:
  ```
  - Go to WordPress Dashboard > Appearance > Customize
  - Select "Site Identity" or "Header"
  - Upload logo file
  - Adjust size settings if available
  - Save changes
  ```
- **Theme-Specific Settings**:
  - Astra: Appearance > Customize > Site Identity
  - Divi: Divi Theme Options > Logo
  - GeneratePress: Appearance > Customize > Site Identity
  - Kadence: Appearance > Customize > Header > Site Branding

#### Footer Logo
- **Implementation**:
  ```
  - Go to Appearance > Widgets
  - Add an Image widget to footer area
  - Upload or select logo
  - Add alt text: "Colorado Law Classic Logo"
  ```
- **Alternative Method**: Use theme footer customizer if available

#### Favicon (Browser Tab Icon)
- **Implementation**:
  ```
  - Create square version of logo (512x512px)
  - Go to Appearance > Customize > Site Identity
  - Upload as "Site Icon"
  ```

## Tournament Flyer Integration

### 1. Flyer File Preparation
- **Recommended Format**: 
  - Web display: JPG or PNG (optimize for web)
  - Downloadable version: PDF
- **Size Optimization**:
  - Web display: Max width 1200px, compressed to under 300KB
  - PDF: Optimized for both quality and file size
- **Responsive Considerations**:
  - Create mobile-friendly version with readable text size
  - Consider creating text-based alternative for key information

### 2. Flyer Display Options

#### Option 1: Featured Image on Homepage
- **Implementation**:
  ```
  - Edit Homepage
  - Set flyer as Featured Image
  - Adjust image settings for proper display
  ```
- **Pros**: Simple implementation
- **Cons**: Limited control over placement and responsiveness

#### Option 2: Image Block in Content
- **Implementation**:
  ```
  - Edit page where flyer should appear
  - Add Image block
  - Upload flyer image
  - Configure size and alignment
  - Add caption if needed
  ```
- **Pros**: More control over placement
- **Cons**: Basic functionality

#### Option 3: Lightbox Gallery Plugin (Recommended)
- **Plugin Options**:
  - FooGallery (Free)
  - Modula Image Gallery (Free/Premium)
  - Envira Gallery (Premium)
- **Implementation**:
  ```
  - Install chosen gallery plugin
  - Create new gallery
  - Upload flyer image
  - Configure lightbox settings
  - Add gallery shortcode to desired page
  ```
- **Pros**: 
  - Professional presentation
  - Click to enlarge functionality
  - Better mobile experience
- **Cons**: Additional plugin required

#### Option 4: Downloadable PDF
- **Implementation**:
  ```
  - Upload PDF version to Media Library
  - Add button or link on page
  - Link to PDF file
  - Set to open in new tab or download directly
  ```
- **Pros**: Visitors can download, print, or share
- **Cons**: Requires additional click

### 3. Combined Approach (Recommended)

#### Homepage Implementation
1. **Hero Section**:
   - Logo prominently displayed in header
   - Simplified version of flyer as background image
   - Registration button overlay

2. **Flyer Section**:
   - Thumbnail of flyer with "Click to enlarge" text
   - Lightbox functionality when clicked
   - "Download Flyer" button linking to PDF

3. **Technical Implementation**:
   ```
   - Use theme's header customization for logo
   - Use page builder (Elementor, Gutenberg, etc.) for flyer section
   - Add gallery plugin for lightbox functionality
   - Add media file link for PDF download
   ```

## WordPress Plugins for Media Enhancement

### 1. Image Optimization
- **Recommended Plugin**: Smush (Free/Premium)
- **Purpose**: Automatically optimize uploaded images
- **Implementation**:
  ```
  - Install and activate Smush
  - Configure automatic optimization
  - Bulk optimize existing images
  ```

### 2. Lightbox Functionality
- **Recommended Plugin**: Simple Lightbox (Free)
- **Purpose**: Allow visitors to click and view flyer in larger format
- **Implementation**:
  ```
  - Install and activate Simple Lightbox
  - Enable for images or galleries
  - Configure animation and display settings
  ```

### 3. PDF Embedding
- **Recommended Plugin**: PDF Embedder (Free)
- **Purpose**: Display PDF flyer directly on page
- **Implementation**:
  ```
  - Install and activate PDF Embedder
  - Add PDF block to page
  - Upload or select PDF file
  - Configure display settings
  ```

## Mobile Responsiveness Considerations

### Logo Responsiveness
- **Implement Mobile-Specific Logo Size**:
  ```
  - Use theme's mobile header settings
  - Test on multiple device sizes
  - Ensure logo is readable on smallest screens
  ```

### Flyer Responsiveness
- **Mobile-Friendly Approach**:
  ```
  - Create text-based version of key flyer information
  - Show text version on mobile, image on desktop
  - Use responsive image settings
  ```
- **Implementation with Elementor**:
  ```
  - Create two sections with Display condition
  - Set first section to hide on mobile
  - Set second section to hide on desktop
  ```

## Step-by-Step Implementation Guide

### 1. Prepare Media Files
```
- Optimize logo in multiple formats (SVG, PNG)
- Create favicon version of logo
- Optimize flyer for web display
- Create PDF version of flyer
```

### 2. Upload Media to WordPress
```
- Go to Media > Add New
- Upload all prepared files
- Add proper titles and alt text
```

### 3. Configure Logo in Theme
```
- Go to Appearance > Customize > Site Identity
- Upload logo file
- Set favicon (site icon)
- Adjust size if needed
- Save changes
```

### 4. Add Flyer to Homepage
```
- Edit Homepage
- Add Image or Gallery block
- Upload or select flyer image
- Configure lightbox if using gallery plugin
- Add download button linking to PDF
```

### 5. Test on Multiple Devices
```
- View site on desktop, tablet, and mobile
- Check logo appearance in header
- Verify flyer is readable or has alternative
- Test lightbox and download functionality
```

### 6. Optimize Performance
```
- Run image optimization plugin
- Check page load speed
- Adjust image sizes if needed
```
