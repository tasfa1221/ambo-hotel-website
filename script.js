// 1. FUNCTION (ተግባር) - ሂሳብ የሚያሰላ ክፍል
function calculateTotalCost(roomPrice, numberOfDays) {
    // Variable - ንዑስ ድምር
    let subTotal = roomPrice * numberOfDays;
    // Variable - 15% ታክስ (VAT)
    let tax = subTotal * 0.15;
    // Variable - ጠቅላላ ድምር
    let total = subTotal + tax;
    
    return total;
}

// ፎርሙ ሲላክ የሚሰራው ዋናው ኮድ
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // 2. VARIABLES (መለዋወጫዎች) - ከፎርሙ መረጃዎችን መሰብሰቢያ
    let name = document.getElementById('fullname').value;
    let selectedRoom = document.getElementById('room-type').value;
    let daysBooked = document.getElementById('days').value;
    
    // ሌላ Variable - እንደ ክፍሉ አይነት ዋጋ መወሰኛ
    let pricePerNight = 0;

    if (selectedRoom === "standard") {
        pricePerNight = 3000;
    } else if (selectedRoom === "deluxe") {
        pricePerNight = 5000;
    } else if (selectedRoom === "vip") {
        pricePerNight = 9000;
    }

    // 3. FUNCTION መጥራት (Calling the function)
    let finalBill = calculateTotalCost(pricePerNight, daysBooked);

    // መልዕክት ማሳያ
    alert("እናመሰግናለን " + name + "!\n" + 
          daysBooked + " ቀን ሙሉ በተሳካ ሁኔታ አስይዘዋል።\n" + 
          "የአንድ ሌሊት ዋጋ፡ " + pricePerNight + " ብር\n" + 
          "ጠቅላላ የሚከፍሉት ሂሳብ (ከ 15% ታክስ ጋር)፦ " + finalBill + " ብር ነው።");

    this.reset();
});
