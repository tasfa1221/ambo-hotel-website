// ገጹ ሲከፈት በራሱ የሚሰራ ኮድ
document.addEventListener('DOMContentLoaded', function() {
    let bookingListTable = document.getElementById('booking-list');
    
    // ትናንት ደንበኛው የሞላውን መረጃ ከብሮውዘሩ ሚሞሪ (LocalStorage) ማምጫ
    let savedBookings = JSON.parse(localStorage.getItem('hotelBookings')) || [];

    // መረጃው ባዶ ከሆነ መልዕክት ያሳያል
    if (savedBookings.length === 0) {
        bookingListTable.innerHTML = "<tr><td colspan='4' style='text-align:center;'>እስካሁን ምንም የተመዘገበ ደንበኛ የለም።</td></tr>";
        return;
    }

    // መረጃዎቹን በሰንጠረዡ ውስጥ በደረጃ የማስገቢያ Loop ማሽን
    savedBookings.forEach(function(booking) {
        let row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${booking.name}</td>
            <td>${booking.phone}</td>
            <td>${booking.room}</td>
            <td>${booking.days} ቀን</td>
        `;
        
        bookingListTable.appendChild(row);
    });
});
