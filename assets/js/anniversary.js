/**
 * Anniversary Page JavaScript
 * Handles drag-drop photo uploads and testimonial form submission.
 *
 * ============================================================================
 * SETUP INSTRUCTIONS
 * ============================================================================
 *
 * This file handles two features that need backend services to fully function:
 *   1. Photo uploads (drag-drop zone)
 *   2. Testimonial form submissions
 *
 * Currently both simulate success. Follow the instructions below to connect
 * to real services.
 *
 * ----------------------------------------------------------------------------
 * OPTION A: FORMSPREE (Easiest - Free tier: 50 submissions/month)
 * ----------------------------------------------------------------------------
 * Best for: Testimonial form submissions (sends to email)
 *
 * Setup steps:
 *   1. Go to https://formspree.io and create a free account
 *   2. Click "New Form" and name it (e.g., "CLC Testimonials")
 *   3. Copy your form ID (looks like: xyzabcde)
 *   4. In CONFIG below, uncomment and set:
 *        formspreeEndpoint: 'https://formspree.io/f/xyzabcde'
 *   5. In handleTestimonialSubmit(), replace the simulated submission with:
 *        await fetch(CONFIG.formspreeEndpoint, {
 *          method: 'POST',
 *          body: formData,
 *          headers: { 'Accept': 'application/json' }
 *        });
 *
 * Note: File uploads via Formspree are limited. Use Cloudinary for photos.
 *
 * ----------------------------------------------------------------------------
 * OPTION B: CLOUDINARY (Recommended for photos - Free tier: 25GB storage)
 * ----------------------------------------------------------------------------
 * Best for: Photo uploads with automatic optimization
 *
 * Setup steps:
 *   1. Go to https://cloudinary.com and create a free account
 *   2. In your Dashboard, find your "Cloud Name" (e.g., "dxyz123ab")
 *   3. Go to Settings > Upload > Upload Presets
 *   4. Click "Add upload preset"
 *        - Signing Mode: Unsigned (required for frontend uploads)
 *        - Folder: "clc-anniversary" (optional, keeps photos organized)
 *        - Save the preset name (e.g., "clc_unsigned")
 *   5. In CONFIG below, uncomment and set:
 *        cloudinaryCloudName: 'dxyz123ab',
 *        cloudinaryUploadPreset: 'clc_unsigned'
 *   6. In handleUpload(), replace simulateUpload() with:
 *        for (const file of selectedFiles) {
 *          await uploadToCloudinary(file);
 *        }
 *   7. Uncomment the uploadToCloudinary() function below (around line 320)
 *
 * To view uploaded photos: Log into Cloudinary > Media Library
 *
 * ----------------------------------------------------------------------------
 * OPTION C: FIREBASE STORAGE (Advanced - Free tier: 5GB storage)
 * ----------------------------------------------------------------------------
 * Best for: Full control, real-time database integration
 *
 * Setup steps:
 *   1. Go to https://console.firebase.google.com
 *   2. Create a new project (or use existing)
 *   3. Go to Build > Storage and click "Get Started"
 *   4. Set security rules (start in test mode for development)
 *   5. Go to Project Settings > General > Your apps > Web
 *   6. Register your app and copy the config object
 *   7. Add Firebase SDK to anniversary.html (before this script):
 *        <script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js"></script>
 *        <script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-storage-compat.js"></script>
 *        <script>
 *          firebase.initializeApp({
 *            apiKey: "YOUR_API_KEY",
 *            authDomain: "YOUR_PROJECT.firebaseapp.com",
 *            projectId: "YOUR_PROJECT",
 *            storageBucket: "YOUR_PROJECT.appspot.com"
 *          });
 *        </script>
 *   8. In handleUpload(), replace simulateUpload() with:
 *        const storage = firebase.storage();
 *        for (const file of selectedFiles) {
 *          const ref = storage.ref(`anniversary/${Date.now()}_${file.name}`);
 *          await ref.put(file);
 *        }
 *
 * ----------------------------------------------------------------------------
 * TESTING WITHOUT A SERVICE
 * ----------------------------------------------------------------------------
 * The current code simulates successful uploads and submissions.
 * Users will see success messages, but no data is actually saved.
 * This is useful for testing the UI before connecting a real service.
 *
 * ============================================================================
 */

(function() {
  'use strict';

  // -------------------------------------------------------------------------
  // CONFIGURATION - Edit these values to connect to your services
  // -------------------------------------------------------------------------
  const CONFIG = {
    // File validation settings
    maxFileSize: 5 * 1024 * 1024, // 5MB in bytes
    allowedTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    maxFiles: 10,

    // ----- UNCOMMENT AND CONFIGURE YOUR CHOSEN SERVICE(S) BELOW -----

    // Formspree (for testimonial form)
    // formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',

    // Cloudinary (for photo uploads)
    // cloudinaryCloudName: 'YOUR_CLOUD_NAME',
    // cloudinaryUploadPreset: 'YOUR_UPLOAD_PRESET'

    // Firebase is configured via <script> tags in the HTML (see instructions above)
  };

  // State
  let selectedFiles = [];

  // DOM Elements
  const uploadZone = document.getElementById('upload-zone');
  const fileInput = document.getElementById('file-input');
  const previewContainer = document.getElementById('upload-preview');
  const uploadActions = document.getElementById('upload-actions');
  const uploadProgress = document.getElementById('upload-progress');
  const uploadSubmit = document.getElementById('upload-submit');
  const uploadClear = document.getElementById('upload-clear');
  const uploadMessage = document.getElementById('upload-message');
  const testimonialForm = document.getElementById('testimonial-form');
  const testimonialStatus = document.getElementById('testimonial-message-status');

  // Initialize if elements exist
  if (uploadZone) {
    initUploadZone();
  }
  if (testimonialForm) {
    initTestimonialForm();
  }

  /**
   * Initialize drag-drop upload zone
   */
  function initUploadZone() {
    // Click to open file browser
    uploadZone.addEventListener('click', () => fileInput.click());

    // Keyboard accessibility
    uploadZone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        fileInput.click();
      }
    });

    // File input change
    fileInput.addEventListener('change', (e) => {
      handleFiles(e.target.files);
    });

    // Drag events
    uploadZone.addEventListener('dragenter', handleDragEnter);
    uploadZone.addEventListener('dragover', handleDragOver);
    uploadZone.addEventListener('dragleave', handleDragLeave);
    uploadZone.addEventListener('drop', handleDrop);

    // Action buttons
    if (uploadSubmit) {
      uploadSubmit.addEventListener('click', handleUpload);
    }
    if (uploadClear) {
      uploadClear.addEventListener('click', clearFiles);
    }
  }

  /**
   * Handle drag enter event
   */
  function handleDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    uploadZone.classList.add('drag-over');
  }

  /**
   * Handle drag over event
   */
  function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    uploadZone.classList.add('drag-over');
  }

  /**
   * Handle drag leave event
   */
  function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    // Only remove class if leaving the zone entirely
    if (!uploadZone.contains(e.relatedTarget)) {
      uploadZone.classList.remove('drag-over');
    }
  }

  /**
   * Handle drop event
   */
  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    uploadZone.classList.remove('drag-over');

    const files = e.dataTransfer.files;
    handleFiles(files);
  }

  /**
   * Process selected/dropped files
   */
  function handleFiles(fileList) {
    clearMessage();
    const files = Array.from(fileList);
    const errors = [];

    files.forEach(file => {
      // Check max files limit
      if (selectedFiles.length >= CONFIG.maxFiles) {
        errors.push(`Maximum ${CONFIG.maxFiles} files allowed.`);
        return;
      }

      // Validate file type
      if (!CONFIG.allowedTypes.includes(file.type)) {
        errors.push(`"${file.name}" is not a supported image format.`);
        return;
      }

      // Validate file size
      if (file.size > CONFIG.maxFileSize) {
        errors.push(`"${file.name}" exceeds the 5MB size limit.`);
        return;
      }

      // Check for duplicates
      if (selectedFiles.some(f => f.name === file.name && f.size === file.size)) {
        errors.push(`"${file.name}" is already selected.`);
        return;
      }

      selectedFiles.push(file);
    });

    // Show errors if any
    if (errors.length > 0) {
      showMessage(errors.join(' '), 'error');
    }

    updatePreview();
    updateActions();
  }

  /**
   * Update file preview grid
   */
  function updatePreview() {
    previewContainer.innerHTML = '';

    selectedFiles.forEach((file, index) => {
      const item = document.createElement('div');
      item.className = 'preview-item';
      item.setAttribute('data-animate', 'scale');

      // Create image preview
      const img = document.createElement('img');
      img.alt = file.name;

      // Read file as data URL for preview
      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);

      // File name
      const name = document.createElement('span');
      name.className = 'preview-name';
      name.textContent = truncateFilename(file.name, 20);

      // Remove button
      const removeBtn = document.createElement('button');
      removeBtn.className = 'preview-remove';
      removeBtn.setAttribute('aria-label', `Remove ${file.name}`);
      removeBtn.innerHTML = '&times;';
      removeBtn.addEventListener('click', () => removeFile(index));

      item.appendChild(img);
      item.appendChild(name);
      item.appendChild(removeBtn);
      previewContainer.appendChild(item);
    });
  }

  /**
   * Update action buttons visibility
   */
  function updateActions() {
    if (selectedFiles.length > 0) {
      uploadActions.hidden = false;
    } else {
      uploadActions.hidden = true;
    }
  }

  /**
   * Remove a file from selection
   */
  function removeFile(index) {
    selectedFiles.splice(index, 1);
    updatePreview();
    updateActions();
    clearMessage();
  }

  /**
   * Clear all selected files
   */
  function clearFiles() {
    selectedFiles = [];
    fileInput.value = '';
    updatePreview();
    updateActions();
    clearMessage();
  }

  /**
   * Handle upload submission
   * NOTE: This simulates upload. Replace with actual service integration.
   */
  async function handleUpload() {
    if (selectedFiles.length === 0) {
      showMessage('Please select at least one photo.', 'error');
      return;
    }

    uploadSubmit.disabled = true;
    uploadSubmit.textContent = 'Uploading...';
    uploadProgress.style.width = '0%';

    try {
      // Simulate upload progress
      // Replace this section with actual upload logic when ready
      await simulateUpload();

      showMessage('Photos submitted successfully! We\'ll review and add them to our gallery.', 'success');
      clearFiles();
    } catch (error) {
      showMessage('Upload failed. Please try again later.', 'error');
      console.error('Upload error:', error);
    } finally {
      uploadSubmit.disabled = false;
      uploadSubmit.textContent = 'Upload Photos';
      uploadProgress.style.width = '0%';
    }
  }

  /**
   * Simulate upload with progress animation
   * Replace with actual upload implementation
   */
  function simulateUpload() {
    return new Promise((resolve) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          setTimeout(resolve, 300);
        }
        uploadProgress.style.width = progress + '%';
      }, 200);
    });
  }

  // -------------------------------------------------------------------------
  // CLOUDINARY UPLOAD FUNCTION
  // -------------------------------------------------------------------------
  // To enable: Uncomment the function below and configure CONFIG values above.
  // Then in handleUpload(), replace `await simulateUpload();` with:
  //   for (const file of selectedFiles) {
  //     await uploadToCloudinary(file);
  //   }
  // -------------------------------------------------------------------------
  /*
  async function uploadToCloudinary(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CONFIG.cloudinaryUploadPreset);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CONFIG.cloudinaryCloudName}/image/upload`,
      { method: 'POST', body: formData }
    );

    if (!response.ok) {
      throw new Error('Cloudinary upload failed');
    }

    return response.json();
  }
  */

  /**
   * Show status message
   */
  function showMessage(text, type) {
    uploadMessage.textContent = text;
    uploadMessage.className = `upload-message ${type}`;
    uploadMessage.hidden = false;
  }

  /**
   * Clear status message
   */
  function clearMessage() {
    uploadMessage.textContent = '';
    uploadMessage.className = 'upload-message';
    uploadMessage.hidden = true;
  }

  /**
   * Truncate filename for display
   */
  function truncateFilename(name, maxLength) {
    if (name.length <= maxLength) return name;
    const ext = name.split('.').pop();
    const base = name.slice(0, maxLength - ext.length - 4);
    return `${base}...${ext}`;
  }

  /**
   * Initialize testimonial form
   */
  function initTestimonialForm() {
    testimonialForm.addEventListener('submit', handleTestimonialSubmit);
  }

  /**
   * Handle testimonial form submission
   */
  async function handleTestimonialSubmit(e) {
    e.preventDefault();

    const submitBtn = testimonialForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    try {
      // Gather form data
      const formData = new FormData(testimonialForm);
      const data = Object.fromEntries(formData.entries());

      // Simulate submission (replace with actual endpoint)
      // Example: await fetch(CONFIG.formspreeEndpoint, { method: 'POST', body: formData });
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Success
      showTestimonialMessage('Thank you for sharing your story! We appreciate you being part of our 15-year journey.', 'success');
      testimonialForm.reset();
    } catch (error) {
      showTestimonialMessage('Submission failed. Please try again or email us directly at coloradolawgolf@gmail.com', 'error');
      console.error('Form submission error:', error);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Your Story';
    }
  }

  /**
   * Show testimonial form status message
   */
  function showTestimonialMessage(text, type) {
    testimonialStatus.textContent = text;
    testimonialStatus.className = `form-message ${type}`;

    // Scroll to message
    testimonialStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

})();
