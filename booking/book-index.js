const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const checkin = document.getElementById("checkin-date").value;
    const checkout = document.getElementById("checkout-date").value;
    const roomType = document.getElementById("room-type").value;
    const numGuests = document.getElementById("num-guests").value;
    console.log(`Check-in Date: ${checkin}`);
    console.log(`Check-out Date: ${checkout}`);
    console.log(`Room Type: ${roomType}`);
    console.log(`Number of Guests: ${numGuests}`);
});