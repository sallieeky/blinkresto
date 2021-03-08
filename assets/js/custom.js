const booking = document.getElementById('booking')

const name = document.getElementById('reservation_name')
const email = document.getElementById('reservation_email')
const phone = document.getElementById('reservation_phone')
const date = document.getElementById('reservation_date')
const hour = document.getElementById('reservation_hour')
const people = document.getElementById('reservation_people')

const list = [name, email, phone, date, hour, people]

const bookingModal = document.getElementById('booking-modal')


booking.addEventListener('click', function(){
    if (name.value == '' || email.value == '' || phone.value == '' || date.value == '' || hour.value == '') {
        alert("Isi data dengan benar")
    } else {
        booking.setAttribute('data-target', '#reservasiModal')

        for(let i = 1 ; i <7 ; i++){
            const variable = document.getElementById('h3'+ i)
            variable.innerText = list[i-1].value
        }
        
        setTimeout(() => {
            booking.removeAttribute('data-target', '#reservasiModal')
        }, 500);
    }
});