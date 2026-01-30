/**
 * ==========================================================================
 * COLORADO LAW CLASSIC - Registration Form JavaScript (Mockup Version)
 * ==========================================================================
 *
 * Multi-step registration form with:
 * - Package selection with dynamic pricing
 * - Dynamic player fields based on package
 * - Form validation
 * - Order summary generation
 * - Payment method switching
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
 *
 * DOCUMENTATION RULES:
 * 1. Documentation in code — Include comments explaining what each section does
 * 2. Don't make assumptions — Ask clarifying questions when intent is unclear
 * 3. Include these rules — Reference these principles as reminders
 */

(function() {
  'use strict';

  // ==========================================================================
  // Configuration
  // ==========================================================================

  const CONFIG = {
    packages: {
      individual: { price: 150, players: 1, name: 'Individual Player' },
      foursome: { price: 600, players: 4, name: 'Foursome' },
      hole_sponsor: { price: 500, players: 0, name: 'Hole Sponsor' }
    },
    addons: {
      beverage: { price: 750, name: 'Beverage Cart Sponsor' },
      lunch: { price: 1000, name: 'Luncheon Sponsor' },
      contest: { price: 500, name: 'Contest Sponsor' }
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
    playerCount: 0,
    total: 0,
    formData: {}
  };

  // ==========================================================================
  // DOM Elements
  // ==========================================================================

  const elements = {
    form: document.getElementById('registration-form'),
    steps: null,
    progressSteps: null,
    nextButtons: null,
    backButtons: null,
    packageInputs: null,
    addonInputs: null,
    additionalPlayers: null,
    summaryItems: null,
    summaryTotal: null,
    paymentTotal: null,
    playerSummaryList: null,
    requestsSummary: null,
    requestsSummaryText: null,
    submitBtn: null,
    termsCheckbox: null,
    paymentMethodInputs: null,
    cardPaymentForm: null,
    paypalPaymentForm: null,
    step1Total: null
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
    const yOffset = -100;
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
    elements.steps.forEach(function(step) {
      step.classList.remove('active');
      if (parseInt(step.dataset.step) === stepNumber) {
        step.classList.add('active');
      }
    });

    // Update progress indicators
    elements.progressSteps.forEach(function(step) {
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
      if (!state.selectedPackage) {
        alert('Please select a registration package to continue.');
        isValid = false;
      }
    } else if (stepNumber === 2) {
      // Only validate player fields if package requires players
      if (state.playerCount > 0) {
        isValid = validatePlayerFields();
      }
    } else if (stepNumber === 3) {
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
      const firstNameField = document.getElementById('player' + i + '_firstName');
      const lastNameField = document.getElementById('player' + i + '_lastName');

      if (!firstNameField || !lastNameField) continue;

      clearFieldError(firstNameField);
      clearFieldError(lastNameField);

      if (!firstNameField.value.trim()) {
        showFieldError(firstNameField, 'First name is required');
        isValid = false;
      }

      if (!lastNameField.value.trim()) {
        showFieldError(lastNameField, 'Last name is required');
        isValid = false;
      }

      // Player 1 also needs email and phone
      if (i === 1) {
        const emailField = document.getElementById('player1_email');
        const phoneField = document.getElementById('player1_phone');

        if (emailField) {
          clearFieldError(emailField);
          if (!emailField.value.trim()) {
            showFieldError(emailField, 'Email is required');
            isValid = false;
          } else if (!isValidEmail(emailField.value.trim())) {
            showFieldError(emailField, 'Please enter a valid email address');
            isValid = false;
          }
        }

        if (phoneField) {
          clearFieldError(phoneField);
          if (!phoneField.value.trim()) {
            showFieldError(phoneField, 'Phone number is required');
            isValid = false;
          } else if (!isValidPhone(phoneField.value.trim())) {
            showFieldError(phoneField, 'Please enter a valid phone number');
            isValid = false;
          }
        }
      }
    }

    if (!isValid) {
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
    document.querySelectorAll('.package-card').forEach(function(card) {
      card.classList.remove('selected');
    });
    input.closest('.package-card').classList.add('selected');

    // Show/hide additional player fields
    updatePlayerFields();

    // Update total
    calculateTotal();
    updateTotalDisplay();
  }

  /**
   * Show/hide player fields based on package selection
   */
  function updatePlayerFields() {
    // Primary player section visibility
    const primaryPlayer = document.querySelector('.primary-player');
    if (primaryPlayer) {
      if (state.playerCount > 0) {
        primaryPlayer.style.display = 'block';
      } else {
        primaryPlayer.style.display = 'none';
      }
    }

    // Additional player sections
    elements.additionalPlayers.forEach(function(section) {
      const playerNum = parseInt(section.dataset.player);
      if (playerNum <= state.playerCount) {
        section.style.display = 'block';
        section.querySelectorAll('input[id$="_firstName"], input[id$="_lastName"]').forEach(function(input) {
          input.required = true;
        });
      } else {
        section.style.display = 'none';
        section.querySelectorAll('input').forEach(function(input) {
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
      state.selectedAddons = state.selectedAddons.filter(function(a) {
        return a !== addonType;
      });
    }

    input.closest('.addon-item').classList.toggle('selected', input.checked);

    calculateTotal();
    updateTotalDisplay();
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
    state.selectedAddons.forEach(function(addon) {
      const addonConfig = CONFIG.addons[addon];
      if (addonConfig) {
        total += addonConfig.price;
      }
    });

    state.total = total;
    return total;
  }

  /**
   * Update total display on step 1
   */
  function updateTotalDisplay() {
    if (elements.step1Total) {
      elements.step1Total.textContent = formatCurrency(state.total);
    }
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
    state.selectedAddons.forEach(function(addon) {
      const addonConfig = CONFIG.addons[addon];
      if (addonConfig) {
        items.push({
          name: addonConfig.name,
          price: addonConfig.price
        });
      }
    });

    // Render items
    if (elements.summaryItems) {
      elements.summaryItems.innerHTML = items.map(function(item) {
        return '<div class="summary-item"><span>' + item.name + '</span><span>' + formatCurrency(item.price) + '</span></div>';
      }).join('');
    }

    // Update total
    if (elements.summaryTotal) {
      elements.summaryTotal.textContent = formatCurrency(state.total);
    }
  }

  /**
   * Update player summary on review step
   */
  function updatePlayerSummary() {
    const players = [];

    for (let i = 1; i <= state.playerCount; i++) {
      const firstNameEl = document.getElementById('player' + i + '_firstName');
      const lastNameEl = document.getElementById('player' + i + '_lastName');
      const emailEl = document.getElementById('player' + i + '_email');
      const handicapEl = document.getElementById('player' + i + '_handicap');
      const dietaryEl = document.getElementById('player' + i + '_dietary');

      const firstName = firstNameEl ? firstNameEl.value.trim() : '';
      const lastName = lastNameEl ? lastNameEl.value.trim() : '';
      const email = emailEl ? emailEl.value.trim() : '';
      const handicap = handicapEl ? handicapEl.value.trim() : 'N/A';
      const dietary = dietaryEl ? dietaryEl.value.trim() : 'None';

      if (firstName || lastName) {
        players.push({
          number: i,
          name: firstName + ' ' + lastName,
          email: email,
          handicap: handicap || 'N/A',
          dietary: dietary || 'None'
        });
      }
    }

    if (elements.playerSummaryList) {
      if (players.length > 0) {
        elements.playerSummaryList.innerHTML = players.map(function(player) {
          return '<div class="player-summary-item">' +
            '<strong>Player ' + player.number + ': ' + player.name + '</strong>' +
            (player.email ? '<br><small>Email: ' + player.email + '</small>' : '') +
            '<br><small>Handicap: ' + player.handicap + ' | Dietary: ' + player.dietary + '</small>' +
            '</div>';
        }).join('');
      } else {
        elements.playerSummaryList.innerHTML = '<p class="no-players">Sponsorship only - no player registration required.</p>';
      }
    }

    // Special requests
    const specialRequestsEl = document.getElementById('special_requests');
    const specialRequests = specialRequestsEl ? specialRequestsEl.value.trim() : '';

    if (elements.requestsSummary && elements.requestsSummaryText) {
      if (specialRequests) {
        elements.requestsSummary.style.display = 'block';
        elements.requestsSummaryText.textContent = specialRequests;
      } else {
        elements.requestsSummary.style.display = 'none';
      }
    }
  }

  /**
   * Update payment total display
   */
  function updatePaymentTotal() {
    if (elements.paymentTotal) {
      elements.paymentTotal.textContent = formatCurrency(state.total);
    }
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
    if (elements.cardPaymentForm) {
      elements.cardPaymentForm.style.display = method === 'card' ? 'block' : 'none';
    }
    if (elements.paypalPaymentForm) {
      elements.paypalPaymentForm.style.display = method === 'paypal' ? 'block' : 'none';
    }

    // Update visual state
    document.querySelectorAll('.payment-method-card').forEach(function(card) {
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
    if (elements.submitBtn && elements.termsCheckbox) {
      elements.submitBtn.disabled = !elements.termsCheckbox.checked;
    }
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
      addonNames: state.selectedAddons.map(function(a) {
        return CONFIG.addons[a]?.name;
      }),
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
        firstName: formData.get('player' + i + '_firstName'),
        lastName: formData.get('player' + i + '_lastName'),
        email: formData.get('player' + i + '_email') || '',
        phone: i === 1 ? formData.get('player1_phone') : '',
        company: i === 1 ? formData.get('player1_company') : '',
        handicap: formData.get('player' + i + '_handicap') || '',
        dietary: formData.get('player' + i + '_dietary') || ''
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
    if (elements.termsCheckbox && !elements.termsCheckbox.checked) {
      alert('Please accept the terms and conditions to continue.');
      return;
    }

    // Collect form data
    const data = collectFormData();
    console.log('Registration data:', data);

    // Show loading state
    const btnText = elements.submitBtn.querySelector('.btn-text');
    const btnLoading = elements.submitBtn.querySelector('.btn-loading');
    if (btnText) btnText.style.display = 'none';
    if (btnLoading) btnLoading.style.display = 'inline-flex';
    elements.submitBtn.disabled = true;

    // ==========================================================================
    // PAYMENT INTEGRATION POINT
    // ==========================================================================
    // This is where you would integrate with your chosen payment processor.
    //
    // Option 1: Zeffy (0% fees) - Recommended for nonprofits
    // - Redirect to Zeffy hosted checkout with registration data
    // - window.location.href = 'https://zeffy.com/your-checkout-url?' + params
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
    // For now, we'll redirect to the existing registration page
    // ==========================================================================

    setTimeout(function() {
      // Reset loading state
      if (btnText) btnText.style.display = 'inline';
      if (btnLoading) btnLoading.style.display = 'none';
      elements.submitBtn.disabled = false;

      // Show confirmation and offer to redirect
      const redirectConfirm = confirm(
        'Registration details collected!\n\n' +
        'Package: ' + data.packageName + '\n' +
        (data.addonNames.length > 0 ? 'Add-ons: ' + data.addonNames.join(', ') + '\n' : '') +
        'Total: ' + formatCurrency(data.total) + '\n\n' +
        'Click OK to complete your registration on our payment site,\n' +
        'or Cancel to return to the form.'
      );

      if (redirectConfirm) {
        // Redirect to the external registration page
        window.location.href = 'https://coloradolawclassic.org/home/register-here/';
      }

      // Log data for development
      console.log('Registration would submit:', JSON.stringify(data, null, 2));
    }, 1500);
  }

  // ==========================================================================
  // Event Listeners
  // ==========================================================================

  function initEventListeners() {
    // Package selection
    if (elements.packageInputs) {
      elements.packageInputs.forEach(function(input) {
        input.addEventListener('change', handlePackageSelect);
      });
    }

    // Add-on selection
    if (elements.addonInputs) {
      elements.addonInputs.forEach(function(input) {
        input.addEventListener('change', handleAddonChange);
      });
    }

    // Next buttons
    if (elements.nextButtons) {
      elements.nextButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
          const nextStep = parseInt(btn.dataset.next);
          goToStep(nextStep);
        });
      });
    }

    // Back buttons
    if (elements.backButtons) {
      elements.backButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
          const prevStep = parseInt(btn.dataset.back);
          goToStep(prevStep);
        });
      });
    }

    // Payment method toggle
    if (elements.paymentMethodInputs) {
      elements.paymentMethodInputs.forEach(function(input) {
        input.addEventListener('change', handlePaymentMethodChange);
      });
    }

    // Terms checkbox
    if (elements.termsCheckbox) {
      elements.termsCheckbox.addEventListener('change', handleTermsChange);
    }

    // Form submission
    if (elements.form) {
      elements.form.addEventListener('submit', handleSubmit);
    }

    // Clear field errors on input
    document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(function(field) {
      field.addEventListener('input', function() {
        clearFieldError(field);
      });
    });
  }

  // ==========================================================================
  // Initialization
  // ==========================================================================

  function init() {
    // Only run if registration form exists on page
    if (!document.getElementById('registration-form')) return;

    // Cache DOM elements
    elements.form = document.getElementById('registration-form');
    elements.steps = document.querySelectorAll('.form-step');
    elements.progressSteps = document.querySelectorAll('.progress-step');
    elements.nextButtons = document.querySelectorAll('.btn-next');
    elements.backButtons = document.querySelectorAll('.btn-back');
    elements.packageInputs = document.querySelectorAll('input[name="package"]');
    elements.addonInputs = document.querySelectorAll('input[data-addon]');
    elements.additionalPlayers = document.querySelectorAll('.additional-player');
    elements.summaryItems = document.getElementById('summary-items');
    elements.summaryTotal = document.getElementById('summary-total');
    elements.paymentTotal = document.getElementById('payment-total');
    elements.playerSummaryList = document.getElementById('player-summary-list');
    elements.requestsSummary = document.getElementById('requests-summary');
    elements.requestsSummaryText = document.getElementById('requests-summary-text');
    elements.submitBtn = document.getElementById('submit-btn');
    elements.termsCheckbox = document.getElementById('terms_accepted');
    elements.paymentMethodInputs = document.querySelectorAll('input[name="payment_method"]');
    elements.cardPaymentForm = document.getElementById('card-payment-form');
    elements.paypalPaymentForm = document.getElementById('paypal-payment-form');
    elements.step1Total = document.getElementById('step1-total');

    initEventListeners();

    // Set initial payment method visual state
    const selectedPaymentMethod = document.querySelector('input[name="payment_method"]:checked');
    if (selectedPaymentMethod) {
      selectedPaymentMethod.closest('.payment-method-card').classList.add('selected');
    }

    console.log('Registration form (mockup) initialized');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
