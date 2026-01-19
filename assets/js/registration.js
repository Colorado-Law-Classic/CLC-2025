/**
 * ==========================================================================
 * COLORADO LAW CLASSIC - Registration Form JavaScript
 * ==========================================================================
 *
 * Multi-step registration form with:
 * - Package selection with dynamic pricing
 * - Dynamic player fields based on package
 * - Form validation
 * - Order summary generation
 * - Payment method switching (prepared for processor integration)
 *
 * PAYMENT INTEGRATION NOTES:
 * This form is designed to connect to any payment processor. To integrate:
 * 1. Zeffy: Use their embed code or redirect to hosted checkout
 * 2. PayPal: Add PayPal JS SDK and render buttons in #paypal-button-container
 * 3. Stripe: Add Stripe.js and mount card element in #card-element
 * 4. Square: Add Square Web Payments SDK and mount in #card-element
 *
 * The form collects all registration data which can be:
 * - Sent to a serverless function (Netlify/Vercel) for processing
 * - Passed to payment processor's metadata
 * - Submitted to a Google Form/Sheet for record-keeping
 */

(function() {
  'use strict';

  // ==========================================================================
  // Configuration
  // ==========================================================================

  const CONFIG = {
    packages: {
      individual: { price: 150, players: 1, name: 'Individual Registration' },
      twosome: { price: 280, players: 2, name: 'Twosome Package' },
      foursome: { price: 520, players: 4, name: 'Foursome Package' }
    },
    addons: {
      mulligans: { price: 20, perPlayer: true, name: 'Mulligan Pack (3)' },
      donation: { price: 50, perPlayer: false, name: 'Scholarship Donation' }
    }
  };

  // ==========================================================================
  // State Management
  // ==========================================================================

  const state = {
    currentStep: 1,
    totalSteps: 4,
    selectedPackage: null,
    selectedAddons: [],
    playerCount: 1,
    total: 0,
    formData: {}
  };

  // ==========================================================================
  // DOM Elements
  // ==========================================================================

  const elements = {
    form: document.getElementById('registration-form'),
    steps: document.querySelectorAll('.form-step'),
    progressSteps: document.querySelectorAll('.progress-step'),
    nextButtons: document.querySelectorAll('.btn-next'),
    backButtons: document.querySelectorAll('.btn-back'),
    packageInputs: document.querySelectorAll('input[name="package"]'),
    addonInputs: document.querySelectorAll('input[data-addon]'),
    additionalPlayers: document.querySelectorAll('.additional-player'),
    summaryItems: document.getElementById('summary-items'),
    summaryTotal: document.getElementById('summary-total'),
    paymentTotal: document.getElementById('payment-total'),
    playerSummaryList: document.getElementById('player-summary-list'),
    requestsSummary: document.getElementById('requests-summary'),
    requestsSummaryText: document.getElementById('requests-summary-text'),
    submitBtn: document.getElementById('submit-btn'),
    termsCheckbox: document.getElementById('terms_accepted'),
    paymentMethodInputs: document.querySelectorAll('input[name="payment_method"]'),
    cardPaymentForm: document.getElementById('card-payment-form'),
    paypalPaymentForm: document.getElementById('paypal-payment-form')
  };

  // ==========================================================================
  // Utility Functions
  // ==========================================================================

  /**
   * Format currency for display
   */
  function formatCurrency(amount) {
    return '$' + amount.toLocaleString('en-US');
  }

  /**
   * Validate email format
   */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /**
   * Validate phone format (basic validation)
   */
  function isValidPhone(phone) {
    // Allow various formats: (123) 456-7890, 123-456-7890, 1234567890, etc.
    return /^[\d\s\-\(\)\+\.]{10,}$/.test(phone.replace(/\s/g, ''));
  }

  /**
   * Show validation error on field
   */
  function showFieldError(field, message) {
    field.classList.add('error');
    let errorEl = field.parentNode.querySelector('.field-error');
    if (!errorEl) {
      errorEl = document.createElement('span');
      errorEl.className = 'field-error';
      field.parentNode.appendChild(errorEl);
    }
    errorEl.textContent = message;
  }

  /**
   * Clear validation error on field
   */
  function clearFieldError(field) {
    field.classList.remove('error');
    const errorEl = field.parentNode.querySelector('.field-error');
    if (errorEl) {
      errorEl.remove();
    }
  }

  /**
   * Smooth scroll to element
   */
  function scrollToElement(element) {
    const yOffset = -100; // Account for fixed header
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  // ==========================================================================
  // Step Navigation
  // ==========================================================================

  /**
   * Navigate to a specific step
   */
  function goToStep(stepNumber) {
    // Validate current step before proceeding (except when going back)
    if (stepNumber > state.currentStep && !validateStep(state.currentStep)) {
      return false;
    }

    // Update step visibility
    elements.steps.forEach(step => {
      step.classList.remove('active');
      if (parseInt(step.dataset.step) === stepNumber) {
        step.classList.add('active');
      }
    });

    // Update progress indicators
    elements.progressSteps.forEach(step => {
      const stepNum = parseInt(step.dataset.step);
      step.classList.remove('active', 'completed');
      if (stepNum === stepNumber) {
        step.classList.add('active');
      } else if (stepNum < stepNumber) {
        step.classList.add('completed');
      }
    });

    state.currentStep = stepNumber;

    // Update summary when entering review step
    if (stepNumber === 3) {
      updateOrderSummary();
      updatePlayerSummary();
    }

    // Update payment total when entering payment step
    if (stepNumber === 4) {
      updatePaymentTotal();
    }

    // Scroll to top of form
    scrollToElement(elements.form);

    return true;
  }

  /**
   * Validate current step fields
   */
  function validateStep(stepNumber) {
    let isValid = true;

    if (stepNumber === 1) {
      // Must select a package
      if (!state.selectedPackage) {
        alert('Please select a registration package to continue.');
        isValid = false;
      }
    } else if (stepNumber === 2) {
      // Validate player information
      isValid = validatePlayerFields();
    } else if (stepNumber === 3) {
      // Review step - no validation needed
      isValid = true;
    }

    return isValid;
  }

  /**
   * Validate player fields based on selected package
   */
  function validatePlayerFields() {
    let isValid = true;
    const playerCount = state.playerCount;

    for (let i = 1; i <= playerCount; i++) {
      const firstNameField = document.getElementById(`player${i}_firstName`);
      const lastNameField = document.getElementById(`player${i}_lastName`);

      // Clear previous errors
      clearFieldError(firstNameField);
      clearFieldError(lastNameField);

      // First name required
      if (!firstNameField.value.trim()) {
        showFieldError(firstNameField, 'First name is required');
        isValid = false;
      }

      // Last name required
      if (!lastNameField.value.trim()) {
        showFieldError(lastNameField, 'Last name is required');
        isValid = false;
      }

      // Player 1 also needs email and phone
      if (i === 1) {
        const emailField = document.getElementById('player1_email');
        const phoneField = document.getElementById('player1_phone');

        clearFieldError(emailField);
        clearFieldError(phoneField);

        if (!emailField.value.trim()) {
          showFieldError(emailField, 'Email is required');
          isValid = false;
        } else if (!isValidEmail(emailField.value.trim())) {
          showFieldError(emailField, 'Please enter a valid email address');
          isValid = false;
        }

        if (!phoneField.value.trim()) {
          showFieldError(phoneField, 'Phone number is required');
          isValid = false;
        } else if (!isValidPhone(phoneField.value.trim())) {
          showFieldError(phoneField, 'Please enter a valid phone number');
          isValid = false;
        }
      }
    }

    if (!isValid) {
      // Scroll to first error
      const firstError = document.querySelector('.form-group .error');
      if (firstError) {
        scrollToElement(firstError);
      }
    }

    return isValid;
  }

  // ==========================================================================
  // Package Selection
  // ==========================================================================

  /**
   * Handle package selection
   */
  function handlePackageSelect(event) {
    const input = event.target;
    const packageType = input.value;
    const packageConfig = CONFIG.packages[packageType];

    state.selectedPackage = packageType;
    state.playerCount = packageConfig.players;

    // Update card visual states
    document.querySelectorAll('.package-card').forEach(card => {
      card.classList.remove('selected');
    });
    input.closest('.package-card').classList.add('selected');

    // Show/hide additional player fields
    updatePlayerFields();

    // Update total
    calculateTotal();
  }

  /**
   * Show/hide player fields based on package selection
   */
  function updatePlayerFields() {
    elements.additionalPlayers.forEach(section => {
      const playerNum = parseInt(section.dataset.player);
      if (playerNum <= state.playerCount) {
        section.style.display = 'block';
        // Make fields required
        section.querySelectorAll('input[id$="_firstName"], input[id$="_lastName"]').forEach(input => {
          input.required = true;
        });
      } else {
        section.style.display = 'none';
        // Remove required and clear values
        section.querySelectorAll('input').forEach(input => {
          input.required = false;
          input.value = '';
          clearFieldError(input);
        });
      }
    });
  }

  // ==========================================================================
  // Add-ons
  // ==========================================================================

  /**
   * Handle addon selection
   */
  function handleAddonChange(event) {
    const input = event.target;
    const addonType = input.dataset.addon;

    if (input.checked) {
      if (!state.selectedAddons.includes(addonType)) {
        state.selectedAddons.push(addonType);
      }
    } else {
      state.selectedAddons = state.selectedAddons.filter(a => a !== addonType);
    }

    // Update visual state
    input.closest('.addon-item').classList.toggle('selected', input.checked);

    calculateTotal();
  }

  // ==========================================================================
  // Pricing Calculations
  // ==========================================================================

  /**
   * Calculate total price based on selections
   */
  function calculateTotal() {
    let total = 0;

    // Package price
    if (state.selectedPackage) {
      total += CONFIG.packages[state.selectedPackage].price;
    }

    // Add-ons
    state.selectedAddons.forEach(addon => {
      const addonConfig = CONFIG.addons[addon];
      if (addonConfig.perPlayer) {
        total += addonConfig.price * state.playerCount;
      } else {
        total += addonConfig.price;
      }
    });

    state.total = total;
    return total;
  }

  // ==========================================================================
  // Summary Generation
  // ==========================================================================

  /**
   * Update order summary on review step
   */
  function updateOrderSummary() {
    const items = [];

    // Package
    if (state.selectedPackage) {
      const pkg = CONFIG.packages[state.selectedPackage];
      items.push({
        name: pkg.name,
        price: pkg.price
      });
    }

    // Add-ons
    state.selectedAddons.forEach(addon => {
      const addonConfig = CONFIG.addons[addon];
      let price = addonConfig.price;
      let name = addonConfig.name;

      if (addonConfig.perPlayer && state.playerCount > 1) {
        price = addonConfig.price * state.playerCount;
        name += ` (x${state.playerCount} players)`;
      }

      items.push({ name, price });
    });

    // Render items
    elements.summaryItems.innerHTML = items.map(item => `
      <div class="summary-item">
        <span>${item.name}</span>
        <span>${formatCurrency(item.price)}</span>
      </div>
    `).join('');

    // Update total
    elements.summaryTotal.textContent = formatCurrency(state.total);
  }

  /**
   * Update player summary on review step
   */
  function updatePlayerSummary() {
    const players = [];

    for (let i = 1; i <= state.playerCount; i++) {
      const firstName = document.getElementById(`player${i}_firstName`).value.trim();
      const lastName = document.getElementById(`player${i}_lastName`).value.trim();
      const email = document.getElementById(`player${i}_email`)?.value.trim() || '';
      const handicap = document.getElementById(`player${i}_handicap`)?.value.trim() || 'N/A';
      const dietary = document.getElementById(`player${i}_dietary`)?.value.trim() || 'None';

      players.push({
        number: i,
        name: `${firstName} ${lastName}`,
        email: email,
        handicap: handicap,
        dietary: dietary
      });
    }

    elements.playerSummaryList.innerHTML = players.map(player => `
      <div class="player-summary-item">
        <strong>Player ${player.number}: ${player.name}</strong>
        ${player.email ? `<br><small>Email: ${player.email}</small>` : ''}
        <br><small>Handicap: ${player.handicap} | Dietary: ${player.dietary}</small>
      </div>
    `).join('');

    // Special requests
    const specialRequests = document.getElementById('special_requests').value.trim();
    if (specialRequests) {
      elements.requestsSummary.style.display = 'block';
      elements.requestsSummaryText.textContent = specialRequests;
    } else {
      elements.requestsSummary.style.display = 'none';
    }
  }

  /**
   * Update payment total display
   */
  function updatePaymentTotal() {
    elements.paymentTotal.textContent = formatCurrency(state.total);
  }

  // ==========================================================================
  // Payment Methods
  // ==========================================================================

  /**
   * Handle payment method toggle
   */
  function handlePaymentMethodChange(event) {
    const method = event.target.value;

    // Toggle payment forms
    elements.cardPaymentForm.style.display = method === 'card' ? 'block' : 'none';
    elements.paypalPaymentForm.style.display = method === 'paypal' ? 'block' : 'none';

    // Update visual state
    document.querySelectorAll('.payment-method-card').forEach(card => {
      card.classList.remove('selected');
    });
    event.target.closest('.payment-method-card').classList.add('selected');
  }

  // ==========================================================================
  // Form Submission
  // ==========================================================================

  /**
   * Handle terms checkbox change
   */
  function handleTermsChange() {
    elements.submitBtn.disabled = !elements.termsCheckbox.checked;
  }

  /**
   * Collect all form data
   */
  function collectFormData() {
    const formData = new FormData(elements.form);
    const data = {
      package: state.selectedPackage,
      packageName: CONFIG.packages[state.selectedPackage]?.name,
      addons: state.selectedAddons,
      total: state.total,
      players: [],
      specialRequests: formData.get('special_requests'),
      billing: {
        name: formData.get('billing_name'),
        address: formData.get('billing_address'),
        city: formData.get('billing_city'),
        state: formData.get('billing_state'),
        zip: formData.get('billing_zip')
      },
      paymentMethod: formData.get('payment_method'),
      timestamp: new Date().toISOString()
    };

    // Collect player data
    for (let i = 1; i <= state.playerCount; i++) {
      data.players.push({
        firstName: formData.get(`player${i}_firstName`),
        lastName: formData.get(`player${i}_lastName`),
        email: formData.get(`player${i}_email`) || '',
        phone: i === 1 ? formData.get('player1_phone') : '',
        company: i === 1 ? formData.get('player1_company') : '',
        handicap: formData.get(`player${i}_handicap`) || '',
        dietary: formData.get(`player${i}_dietary`) || ''
      });
    }

    return data;
  }

  /**
   * Handle form submission
   */
  function handleSubmit(event) {
    event.preventDefault();

    // Validate terms accepted
    if (!elements.termsCheckbox.checked) {
      alert('Please accept the terms and conditions to continue.');
      return;
    }

    // Collect form data
    const data = collectFormData();
    console.log('Registration data:', data);

    // Show loading state
    const btnText = elements.submitBtn.querySelector('.btn-text');
    const btnLoading = elements.submitBtn.querySelector('.btn-loading');
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    elements.submitBtn.disabled = true;

    // ==========================================================================
    // PAYMENT INTEGRATION POINT
    // ==========================================================================
    // This is where you would integrate with your chosen payment processor.
    //
    // Option 1: Zeffy (0% fees)
    // - Redirect to Zeffy hosted checkout with registration data
    // - Or embed Zeffy form and pass data
    //
    // Option 2: PayPal
    // - Use PayPal JS SDK to create order and capture payment
    // - Include registration data in order metadata
    //
    // Option 3: Stripe
    // - Create payment intent via serverless function
    // - Use Stripe Elements for card input
    // - Confirm payment on success
    //
    // Option 4: Square
    // - Use Square Web Payments SDK
    // - Create payment via serverless function
    //
    // For now, we'll show a placeholder message
    // ==========================================================================

    setTimeout(() => {
      // Reset loading state
      btnText.style.display = 'inline';
      btnLoading.style.display = 'none';
      elements.submitBtn.disabled = false;

      // Show placeholder message
      alert(
        'Payment integration coming soon!\n\n' +
        'Your registration details have been collected. ' +
        'Please email coloradolawgolf@gmail.com to complete your registration.\n\n' +
        'Total: ' + formatCurrency(state.total)
      );

      // Log data for development
      console.log('Registration would submit:', JSON.stringify(data, null, 2));
    }, 1000);
  }

  // ==========================================================================
  // Event Listeners
  // ==========================================================================

  function initEventListeners() {
    // Package selection
    elements.packageInputs.forEach(input => {
      input.addEventListener('change', handlePackageSelect);
    });

    // Add-on selection
    elements.addonInputs.forEach(input => {
      input.addEventListener('change', handleAddonChange);
    });

    // Next buttons
    elements.nextButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const nextStep = parseInt(btn.dataset.next);
        goToStep(nextStep);
      });
    });

    // Back buttons
    elements.backButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const prevStep = parseInt(btn.dataset.back);
        goToStep(prevStep);
      });
    });

    // Payment method toggle
    elements.paymentMethodInputs.forEach(input => {
      input.addEventListener('change', handlePaymentMethodChange);
    });

    // Terms checkbox
    elements.termsCheckbox.addEventListener('change', handleTermsChange);

    // Form submission
    elements.form.addEventListener('submit', handleSubmit);

    // Clear field errors on input
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(field => {
      field.addEventListener('input', () => clearFieldError(field));
    });
  }

  // ==========================================================================
  // Initialization
  // ==========================================================================

  function init() {
    // Only run if registration form exists on page
    if (!elements.form) return;

    initEventListeners();

    // Set initial payment method visual state
    const selectedPaymentMethod = document.querySelector('input[name="payment_method"]:checked');
    if (selectedPaymentMethod) {
      selectedPaymentMethod.closest('.payment-method-card').classList.add('selected');
    }

    console.log('Registration form initialized');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
