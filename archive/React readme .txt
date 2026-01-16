Integrating Your Colorado Law Classic React App with Bluehost/WordPress & Payments
This guide provides step-by-step instructions to take the React application we've built and deploy it to your coloradolawclassic.org website hosted on Bluehost, leveraging your existing WordPress installation. We'll also cover how to properly integrate your PayPal and Square payment buttons.
1. Getting Your React App Ready (Local Steps)
Before uploading, you need to compile your React application into static files that web browsers can understand.
Prerequisites:
 * Node.js & npm/yarn: Ensure you have Node.js and either npm (Node Package Manager) or yarn installed on your computer. You can download Node.js from nodejs.org. npm is included with Node.js; yarn can be installed separately (npm install -g yarn).
Steps:
 * Create a New React Project (if you haven't already):
   * Open your computer's terminal or command prompt.
   * Navigate to a directory where you want to store your project (e.g., cd Documents/Websites).
   * Run one of the following commands to create a new React project:
     npx create-react-app colorado-law-classic-app
# OR
yarn create react-app colorado-law-classic-app

   * Navigate into the newly created project directory:
     cd colorado-law-classic-app

 * Replace App.js with Your Custom Code:
   * Open the colorado-law-classic-app folder in your code editor (like VS Code).
   * Locate the file src/App.js.
   * Copy the entire React code that I provided in our last interaction (the code block starting with import React, { useState, useEffect } from 'react'; and ending with export default App;).
   * Paste this code to completely replace the existing content of src/App.js.
 * Ensure index.js is Correct (Usually Already Is):
   * Open src/index.js. It should look similar to this (ensure it imports App and renders it):
     import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css'; // You can comment out or delete this line if you're only using Tailwind via CDN
import App from './App'; // This is your App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

   * If there's an index.css file in src/, and you're only using Tailwind via CDN as in the provided code, you can safely delete src/index.css.
 * Install Font Awesome (if not already in package.json):
   * While the code loads Font Awesome via CDN, sometimes create-react-app might expect it to be installed. If you encounter issues, run:
     npm install --save @fortawesome/fontawesome-free
# OR
yarn add @fortawesome/fontawesome-free

     (You can then remove the <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link> line from App.js if you choose to install it locally and import it via JS, but the CDN method is simpler for this guide).
 * Build the React App for Production:
   * In your terminal, while still in the colorado-law-classic-app directory, run:
     npm run build
# OR
yarn build

   * This command will create a new folder named build (or dist) in your project's root directory. This build folder contains all the optimized HTML, CSS, and JavaScript files ready for deployment.
2. Uploading the Built React App to Bluehost (Server Steps)
Now you'll transfer the compiled React app files to your Bluehost server.
Steps:
 * Log in to Your Bluehost Account: Go to bluehost.com and log in.
 * Access cPanel File Manager:
   * From your Bluehost dashboard, look for a section like "Advanced" or "cPanel" and click on it.
   * Find and click on "File Manager."
 * Create a New Directory for Your App:
   * In File Manager, navigate to the public_html directory. This is the root folder for your main website (coloradolawclassic.org).
   * Click on the "+ Folder" or "New Folder" icon in the toolbar.
   * Name the new folder something clear, like golf-tournament-app or classic-react-app.
   * Click "Create New Folder."
 * Upload the Contents of Your build Folder:
   * Enter the new folder you just created (e.g., public_html/golf-tournament-app).
   * Click the "Upload" icon in the toolbar.
   * On the upload page, click "Select File" or drag and drop all the files and subfolders (like static/) from the build folder on your local computer into the upload area.
   * Ensure that the index.html file from your local build folder is placed directly inside public_html/golf-tournament-app/.
 * Verify Direct Access to the App:
   * Once the upload is complete, open your web browser.
   * Go to the URL: https://coloradolawclassic.org/golf-tournament-app/ (replace golf-tournament-app with the actual folder name you used).
   * You should see your full React application loading. This confirms the upload was successful.
3. Embedding the React App into a WordPress Page
This is the simplest way to display your React app within your existing WordPress site.
Steps:
 * Log in to Your WordPress Dashboard: Go to https://coloradolawclassic.org/wp-admin and log in.
 * Create a New WordPress Page:
   * In the WordPress admin menu, go to Pages > Add New.
   * Give your new page a clear title, e.g., "Official Tournament Website" or "Registration Portal."
 * Switch to Code Editor:
   * If you are using the Gutenberg editor (the default WordPress editor), click on the three vertical dots in the top right corner of the editor.
   * Select "Code editor" (or "HTML editor" if you're using a classic editor). This allows you to paste raw HTML.
 * Paste the <iframe> Code:
   * In the code editor, paste the following <iframe> tag:
     <iframe
  src="https://coloradolawclassic.org/golf-tournament-app/"
  style="width:100%; height:1200px; border:none;"
  title="Colorado Law Classic Tournament Application"
  loading="lazy"
></iframe>

   * Crucial Adjustments:
     * src attribute: Replace https://coloradolawclassic.org/golf-tournament-app/ with the exact URL where you uploaded your React app (from step 5 in Section 2).
     * height attribute: The height="1200px" is a starting point. You will likely need to adjust this value after publishing the page to ensure the entire React application fits without excessive scrolling within the iframe. You might need to experiment with 1500px, 2000px, or even higher, depending on the content.
     * border:none; ensures there's no visible border around the embedded app.
     * title and loading="lazy" are good for accessibility and performance.
 * Publish the WordPress Page:
   * Click the "Publish" button (usually in the top right corner).
   * View the page to see your React application embedded.
 * Add to WordPress Navigation Menu (Optional but Recommended):
   * In your WordPress dashboard, go to Appearance > Menus.
   * Find the page you just created (e.g., "Official Tournament Website") in the "Pages" box on the left.
   * Check the box next to it and click "Add to Menu."
   * Drag and drop the menu item to your desired position.
   * Click "Save Menu."
4. Integrating Payment Buttons (PayPal & Square)
The payment buttons in your React app are currently placeholders. You need to configure them with your actual, live payment links from PayPal and Square.
Steps:
 * Generate Your PayPal Payment Links:
   * Log in to your PayPal Business account.
   * Navigate to the section for creating payment buttons (often under "Tools" -> "All Tools" -> "PayPal Buttons" or "PayPal Checkout").
   * Create a "Buy Now" button for Individual Golfer ($150).
     * Set the item name (e.g., "CLC Individual Registration").
     * Set the price to $150.
     * Crucially, look for an option like "Allow customers to add a percentage to help cover costs" or similar to enable registrants to cover the fees. This is highly recommended for charities.
     * After creating, look for the "Email" tab or a direct URL option. Copy this direct URL.
   * Repeat the process for Foursome Team ($600). Get its direct URL.
 * Generate Your Square Payment Links:
   * Log in to your Square Dashboard.
   * Navigate to "Online Checkout" or "Payment Links."
   * Create a new "Checkout Link" for Individual Golfer ($150).
     * Set the item name (e.g., "CLC Individual Reg").
     * Set the price to $150.
     * Square may have options to pass fees to the buyer; check their settings.
     * Copy the generated direct link (e.g., https://square.link/u/YOUR_INDIVIDUAL_SQUARE_LINK).
   * Repeat the process for Foursome Team ($600). Get its direct URL.
 * Update the React Code with Your Live Payment Links:
   * Open your local src/App.js file (the one you saved in Section 1, Step 2).
   * Find the Registration section.
   * Locate the <a> tags for the "Register with PayPal" and "Register with Square" buttons for both "Individual Golfer" and "Foursome Team."
   * Replace the placeholder href values with the actual, full URLs you copied from PayPal and Square.
   Example of what to replace:
   // For Individual Golfer PayPal
<a
    href="YOUR_ACTUAL_INDIVIDUAL_PAYPAL_LINK_HERE" // <--- PASTE YOUR PAYPAL LINK HERE
    target="_blank"
    rel="noopener noreferrer"
    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md text-xl transition-colors duration-300 transform hover:scale-105 shadow-lg text-center"
    aria-label="Register Individual with PayPal"
>
    <i className="fab fa-paypal mr-2"></i> Register with PayPal
</a>

// For Individual Golfer Square
<a
    href="YOUR_ACTUAL_INDIVIDUAL_SQUARE_LINK_HERE" // <--- PASTE YOUR SQUARE LINK HERE
    target="_blank"
    rel="noopener noreferrer"
    className="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md text-xl transition-colors duration-300 transform hover:scale-105 shadow-lg text-center"
    aria-label="Register Individual with Square"
>
    <i className="fab fa-square mr-2"></i> Register with Square
</a>

// ... (do the same for the Foursome Team buttons) ...

 * Re-Build and Re-Upload the React App:
   * This is CRUCIAL! After making changes to src/App.js, you must rebuild the application.
   * In your terminal, navigate back to your colorado-law-classic-app directory.
   * Run:
     npm run build
# OR
yarn build

   * Then, re-upload the entire new contents of the build folder to the public_html/golf-tournament-app/ directory on Bluehost, overwriting the old files. This ensures your website displays the updated payment links.
5. Important Considerations & Next Steps
 * Security: By using PayPal's and Square's hosted payment pages, you are leveraging their robust security infrastructure. You are not handling sensitive credit card information directly on your server, which is crucial for PCI compliance.
 * Saving on Fees: The most effective way for a charity to save on payment processing fees is to enable the "pass fees to donor/registrant" option within your PayPal and Square settings.
 * Content Updates: To update any content or features in your React app (e.g., change dates, add new sections, modify AI prompts):
   * Edit your local src/App.js file.
   * Run npm run build (or yarn build).
   * Re-upload the entire contents of the build folder to your Bluehost golf-tournament-app directory, overwriting existing files.
 * WordPress Navigation: Ensure your main WordPress navigation prominently links to the page where you've embedded this React application.
 * Advanced Features: For more complex registration flows (e.g., collecting custom participant data before payment, managing teams dynamically), you would typically need a dedicated event registration plugin for WordPress (which might have its own payment integrations) or a custom backend solution. The current setup is excellent for directing users to external payment processors.
 * Troubleshooting: If the app doesn't appear or updates don't show:
   * Clear your browser cache.
   * Double-check all file paths and URLs in your <iframe> and src attributes.
   * Ensure all files from your build folder were uploaded correctly.
By following these detailed instructions, you should be able to successfully integrate your modern React website into your Bluehost/WordPress environment and manage your registrations effectively.
