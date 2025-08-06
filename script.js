document.getElementById('rzp-button').onclick = function (e) {
    var options = {
        "key": "rzp_test_XXXXXXX", // ✅ Replace with your Razorpay key_id
        "amount": "100", // Amount in paise = ₹1
        "currency": "INR",
        "name": "Your Company",
        "description": "Download after payment",
        "image": "https://your-logo-url.png", // Optional
        "handler": function (response){
            // ✅ Redirect to success page after payment
            window.location.href = "success.html";
        },
        "prefill": {
            "name": "Customer Name",
            "email": "customer@example.com",
            "contact": "9999999999"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
    e.preventDefault();
};
