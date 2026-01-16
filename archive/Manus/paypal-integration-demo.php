<?php
// PayPal Integration Demo for Colorado Law Classic

// PayPal Configuration
$paypal_config = array(
    'sandbox_mode' => true, // Set to false for production
    'client_id' => 'YOUR_PAYPAL_CLIENT_ID', // Replace with actual client ID in production
    'client_secret' => 'YOUR_PAYPAL_CLIENT_SECRET', // Replace with actual client secret in production
    'currency' => 'USD',
    'return_url' => 'https://coloradolawclassic.org/payment-success',
    'cancel_url' => 'https://coloradolawclassic.org/payment-cancelled'
);

// Registration Options
$registration_options = array(
    'individual' => array(
        'name' => 'Individual Player Registration',
        'price' => 150.00,
        'description' => 'Individual registration for Colorado Law Classic Golf Tournament'
    ),
    'team' => array(
        'name' => 'Team Registration (Foursome)',
        'price' => 600.00,
        'description' => 'Team registration (4 players) for Colorado Law Classic Golf Tournament'
    ),
    'platinum' => array(
        'name' => 'Platinum Sponsorship',
        'price' => 2500.00,
        'description' => 'Platinum Sponsorship for Colorado Law Classic Golf Tournament'
    ),
    'gold' => array(
        'name' => 'Gold Sponsorship',
        'price' => 2000.00,
        'description' => 'Gold Sponsorship for Colorado Law Classic Golf Tournament'
    ),
    'hole_with_golf' => array(
        'name' => 'Hole Sponsorship with Golf',
        'price' => 1500.00,
        'description' => 'Hole Sponsorship with Golf for Colorado Law Classic Golf Tournament'
    ),
    'hole_without_golf' => array(
        'name' => 'Hole Sponsorship (Without Golf)',
        'price' => 1000.00,
        'description' => 'Hole Sponsorship without Golf for Colorado Law Classic Golf Tournament'
    )
);

// Function to create PayPal order
function create_paypal_order($option_key, $config, $options) {
    if (!isset($options[$option_key])) {
        return array('error' => 'Invalid registration option');
    }
    
    $option = $options[$option_key];
    
    // In a real implementation, this would make an API call to PayPal
    // For demo purposes, we'll simulate the response
    
    $order_id = 'DEMO_' . strtoupper(uniqid());
    
    return array(
        'id' => $order_id,
        'status' => 'CREATED',
        'links' => array(
            array(
                'href' => 'https://www.sandbox.paypal.com/checkoutnow?token=' . $order_id,
                'rel' => 'approve',
                'method' => 'GET'
            )
        )
    );
}

// Function to capture PayPal payment
function capture_paypal_payment($order_id, $config) {
    // In a real implementation, this would make an API call to PayPal
    // For demo purposes, we'll simulate the response
    
    return array(
        'id' => $order_id,
        'status' => 'COMPLETED',
        'payer' => array(
            'email_address' => 'demo_payer@example.com',
            'name' => array(
                'given_name' => 'John',
                'surname' => 'Doe'
            )
        ),
        'purchase_units' => array(
            array(
                'reference_id' => 'REF_' . substr($order_id, 5),
                'shipping' => array(
                    'name' => array(
                        'full_name' => 'John Doe'
                    ),
                    'address' => array(
                        'address_line_1' => '123 Main St',
                        'admin_area_2' => 'Denver',
                        'admin_area_1' => 'CO',
                        'postal_code' => '80202',
                        'country_code' => 'US'
                    )
                )
            )
        )
    );
}

// Process registration form submission
function process_registration_form() {
    global $paypal_config, $registration_options;
    
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['registration_type'])) {
        $registration_type = $_POST['registration_type'];
        
        // Create PayPal order
        $order = create_paypal_order($registration_type, $paypal_config, $registration_options);
        
        if (isset($order['error'])) {
            return array('error' => $order['error']);
        }
        
        // In a real implementation, you would store the order details in your database
        // and redirect the user to the PayPal approval URL
        
        // For demo purposes, we'll return the approval URL
        foreach ($order['links'] as $link) {
            if ($link['rel'] === 'approve') {
                return array('approval_url' => $link['href']);
            }
        }
    }
    
    return array('error' => 'Invalid request');
}

// Handle PayPal webhook notifications
function handle_paypal_webhook() {
    global $paypal_config;
    
    // In a real implementation, this would verify the webhook signature
    // and process the event based on the event type
    
    $payload = file_get_contents('php://input');
    $event = json_decode($payload, true);
    
    if ($event && isset($event['event_type'])) {
        switch ($event['event_type']) {
            case 'PAYMENT.CAPTURE.COMPLETED':
                // Payment was completed successfully
                $order_id = $event['resource']['id'];
                
                // Update order status in database
                // Send confirmation email to customer
                // etc.
                
                http_response_code(200);
                echo json_encode(array('status' => 'success'));
                exit;
                
            case 'PAYMENT.CAPTURE.DENIED':
                // Payment was denied
                $order_id = $event['resource']['id'];
                
                // Update order status in database
                // Send notification to customer
                // etc.
                
                http_response_code(200);
                echo json_encode(array('status' => 'success'));
                exit;
                
            default:
                // Unhandled event type
                http_response_code(200);
                echo json_encode(array('status' => 'success'));
                exit;
        }
    }
    
    http_response_code(400);
    echo json_encode(array('status' => 'error', 'message' => 'Invalid webhook payload'));
    exit;
}

// Handle PayPal return URL
function handle_paypal_return() {
    global $paypal_config;
    
    if (isset($_GET['token'])) {
        $order_id = $_GET['token'];
        
        // Capture the payment
        $capture = capture_paypal_payment($order_id, $paypal_config);
        
        if ($capture['status'] === 'COMPLETED') {
            // Payment was completed successfully
            
            // In a real implementation, you would:
            // 1. Update the order status in your database
            // 2. Send a confirmation email to the customer
            // 3. Redirect to a thank you page
            
            return array(
                'status' => 'success',
                'message' => 'Payment completed successfully',
                'order_id' => $order_id
            );
        } else {
            // Payment failed
            return array(
                'status' => 'error',
                'message' => 'Payment failed',
                'order_id' => $order_id
            );
        }
    }
    
    return array(
        'status' => 'error',
        'message' => 'Invalid return URL'
    );
}

// Demo usage
if (isset($_GET['action'])) {
    switch ($_GET['action']) {
        case 'process_registration':
            $result = process_registration_form();
            echo json_encode($result);
            exit;
            
        case 'webhook':
            handle_paypal_webhook();
            exit;
            
        case 'return':
            $result = handle_paypal_return();
            echo json_encode($result);
            exit;
            
        default:
            http_response_code(400);
            echo json_encode(array('status' => 'error', 'message' => 'Invalid action'));
            exit;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PayPal Integration Demo - Colorado Law Classic</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-8 text-center">PayPal Integration Demo</h1>
        
        <div class="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
                <h2 class="text-xl font-semibold mb-4">Registration Options</h2>
                
                <form id="registration-form" method="post" action="?action=process_registration">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="registration_type">
                            Select Registration Type
                        </label>
                        <select class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="registration_type" name="registration_type">
                            <option value="individual">Individual Player - $150</option>
                            <option value="team">Team (Foursome) - $600</option>
                            <option value="platinum">Platinum Sponsorship - $2,500</option>
                            <option value="gold">Gold Sponsorship - $2,000</option>
                            <option value="hole_with_golf">Hole Sponsorship with Golf - $1,500</option>
                            <option value="hole_without_golf">Hole Sponsorship (Without Golf) - $1,000</option>
                        </select>
                    </div>
                    
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Your Name">
                    </div>
                    
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Your Email">
                    </div>
                    
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Proceed to Payment
                        </button>
                    </div>
                </form>
            </div>
        </div>
        
        <div id="payment-result" class="max-w-md mx-auto mt-8 hidden">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <div class="p-6">
                    <h2 class="text-xl font-semibold mb-4">Payment Result</h2>
                    <div id="result-message" class="mb-4"></div>
                    <div class="flex justify-center">
                        <button id="back-button" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Back to Registration
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="max-w-md mx-auto mt-8 bg-blue-100 rounded-lg p-4">
            <h3 class="font-semibold text-blue-800">Demo Notes:</h3>
            <p class="text-sm text-blue-800">This is a demonstration of PayPal integration. No actual payments will be processed.</p>
            <p class="text-sm text-blue-800 mt-2">In a production environment, this would connect to the PayPal API and process real payments.</p>
        </div>
    </div>
    
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('registration-form');
            const resultDiv = document.getElementById('payment-result');
            const resultMessage = document.getElementById('result-message');
            const backButton = document.getElementById('back-button');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // In a real implementation, this would submit the form data to the server
                // and redirect to PayPal for payment
                
                // For demo purposes, we'll simulate a successful payment
                
                const registrationType = document.getElementById('registration_type').value;
                let optionName, optionPrice;
                
                switch (registrationType) {
                    case 'individual':
                        optionName = 'Individual Player Registration';
                        optionPrice = '$150.00';
                        break;
                    case 'team':
                        optionName = 'Team Registration (Foursome)';
                        optionPrice = '$600.00';
                        break;
                    case 'platinum':
                        optionName = 'Platinum Sponsorship';
                        optionPrice = '$2,500.00';
                        break;
                    case 'gold':
                        optionName = 'Gold Sponsorship';
                        optionPrice = '$2,000.00';
                        break;
                    case 'hole_with_golf':
                        optionName = 'Hole Sponsorship with Golf';
                        optionPrice = '$1,500.00';
                        break;
                    case 'hole_without_golf':
                        optionName = 'Hole Sponsorship (Without Golf)';
                        optionPrice = '$1,000.00';
                        break;
                    default:
                        optionName = 'Unknown Option';
                        optionPrice = '$0.00';
                }
                
                // Show PayPal button (in a real implementation)
                form.style.display = 'none';
                resultDiv.classList.remove('hidden');
                
                // Simulate PayPal redirect and return
                resultMessage.innerHTML = `
                    <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
                        <p class="font-bold">Payment Successful!</p>
                        <p>Thank you for registering for the Colorado Law Classic.</p>
                    </div>
                    <div class="border rounded p-4 mb-4">
                        <p class="font-semibold">Registration Details:</p>
                        <p><strong>Option:</strong> ${optionName}</p>
                        <p><strong>Amount:</strong> ${optionPrice}</p>
                        <p><strong>Transaction ID:</strong> DEMO_${Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                    </div>
                    <p class="text-sm text-gray-600">A confirmation email has been sent to your email address.</p>
                `;
            });
            
            backButton.addEventListener('click', function() {
                form.style.display = 'block';
                resultDiv.classList.add('hidden');
            });
        });
    </script>
</body>
</html>
