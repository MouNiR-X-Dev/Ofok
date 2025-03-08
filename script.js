var stripe = Stripe('YOUR_PUBLIC_KEY');
var checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', function() {
    stripe.redirectToCheckout({
        sessionId: 'YOUR_SESSION_ID'
    });
});