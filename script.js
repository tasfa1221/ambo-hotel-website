// 1. FUNCTION (ተግባር) - ሂሳብ የሚያሰላ ክፍል
// በአንተ ላፕቶፕ ብሮውዘር ላይ ብቻ የሚቀመጥ ምስጢራዊ መለያ
localStorage.setItem('my_laptop_secret', 'ambo_verified_2026');
function calculateTotalCost(roomPrice, numberOfDays) {
    let subTotal = roomPrice * numberOfDays;
    let tax = subTotal * 0.15;
    let total = subTotal + tax;
    return total;
}

// ፎርሙ ሲላክ የሚሰራው ዋናው ኮድ
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // VARIABLES - ከፎርሙ መረጃዎችን መሰብሰቢያ
    let name = document.getElementById('fullname').value;
    let selectedRoom = document.getElementById('room-type').value;
    let daysBooked = document.getElementById('days').value;
    
    let pricePerNight = 0;

    if (selectedRoom === "standard") {
        pricePerNight = 3000;
    } else if (selectedRoom === "deluxe") {
        pricePerNight = 5000;
    } else if (selectedRoom === "vip") {
        pricePerNight = 9000;
    }

    let finalBill = calculateTotalCost(pricePerNight, daysBooked);

    // ================= [ አዲስ የዛሬ ኮድ ] =================
    // የደንበኛውን መረጃ ወደ አንድ ዕቃ (Object) መሰብሰብ
    let newBooking = {
        name: name,
        phone: document.getElementById('phone').value,
        room: selectedRoom,
        days: daysBooked
    };

    // በብሮውዘሩ ሚሞሪ ውስጥ ከበፊቱ የተቀመጡ መረጃዎች ካሉ ማምጣት
    let currentBookings = JSON.parse(localStorage.getItem('hotelBookings')) || [];
    
    // አዲሱን ደንበኛ ወደ ዝርዝሩ መጨመር
    currentBookings.push(newBooking);
    
    // የተሟላውን ዝርዝር መልሶ በብሮውዘሩ ሚሞሪ (LocalStorage) ውስጥ መቆለፍ
    localStorage.setItem('hotelBookings', JSON.stringify(currentBookings));
    // ===================================================

    // ለደንበኛው መልዕክት ማሳያ
    alert("እናመሰግናለን " + name + "!\n" + 
          daysBooked + " ቀን ሙሉ በተሳካ ሁኔታ አስይዘዋል።\n" + 
          "የአንድ ሌሊት ዋጋ፡ " + pricePerNight + " ብር\n" + 
          "ጠቅላላ የሚከፍሉት ሂሳብ (ከ 15% ታክስ ጋር)፦ " + finalBill + " ብር ነው።");

    this.reset();
});
