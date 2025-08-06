document.getElementById("payButton").onclick = function (e) {
  var options = {
    key: "rzp_test_YHtBWPdUAndxTt", // your test key
    amount: 4900, // in paisa (₹49)
    currency: "INR",
    name: "Savita Comics",
    description: "Premium Content Access",
    image: "https://yourdomain.com/logo.png", // optional
    handler: function (response) {
      window.location.href = "success.html";
    },
      
    theme: {
      color: "#FFD700"
    }
  };
  var rzp1 = new Razorpay(options);
  rzp1.open();
  e.preventDefault();
};
