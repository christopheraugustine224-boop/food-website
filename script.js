// Order form submission
document.getElementById('orderForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you! Your order has been submitted.');
  this.reset();
});

// Reservation form submission
document.getElementById('reservationForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you! Your reservation has been received.');
  this.reset();
});

// WhatsApp order button
const whatsappBtn = document.getElementById('whatsappOrder');
whatsappBtn.addEventListener('click', function() {
  const name = document.querySelector('#orderForm input[type="text"]').value || "Customer";
  const phone = document.querySelector('#orderForm input[type="tel"]').value || "";
  const details = document.querySelector('#orderForm textarea').value || "No details";
  const message = `Hello, I am ${name}. I want to place an order: ${details}`;
  const phoneNumber = "2348138078778"; // WhatsApp number
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
});

// WhatsApp reservation button
const whatsappReserveBtn = document.getElementById('whatsappReserve');
whatsappReserveBtn.addEventListener('click', function() {
  const name = document.querySelector('#reservationForm input[type="text"]').value || "Customer";
  const phone = document.querySelector('#reservationForm input[type="tel"]').value || "";
  const date = document.querySelector('#reservationForm input[type="date"]').value || "No date";
  const message = `Hello, I am ${name}. I want to reserve a table for ${date}.`;
  const phoneNumber = "2348138078778"; // WhatsApp number
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
});