// Add functionality for links and button actions

document.getElementById('phone-pay-link').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecting to Phone Pay...');
    // You can add redirection logic here, for example:
    // window.location.href = 'phonepay://';
  });
  
  document.getElementById('paytm-link').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecting to Paytm...');
    // Add redirection logic for Paytm app
    // window.location.href = 'paytm://';
  });
  
  document.getElementById('google-pay-link').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecting to Google Pay...');
    // Add Google Pay redirection if needed
    // window.location.href = 'gpay://';
  });
  
  document.getElementById('amazon-pay-link').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecting to Amazon Pay...');
    // Add Amazon Pay redirection logic
    // window.location.href = 'amazonpay://';
  });
  
  document.getElementById('bank-transfer-link').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Please follow the bank transfer instructions provided.');
    // Provide bank account details or redirect user to a page with instructions
    // window.location.href = 'bank-details-page.html';
  });
  
  document.getElementById('confirm-payment').addEventListener('click', function() {
    alert('Payment Successful! Thank you for your order.');
    // You can redirect the user to an order confirmation page after payment
    // window.location.href = 'order-confirmation.html';
  });
  