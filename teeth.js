document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('appointmentForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // prevent form submission

        let name = document.getElementById('name').value;
        let age = document.getElementById('age').value;
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value;
        let date = document.getElementById('date').value;
        let time = document.getElementById('time').value;
        let appointmentType = document.getElementById('appointmentType').value;
        let appointmentCategory = document.getElementById('Category').value;
        let dentist = document.getElementById('dentist').value;

        // Validate form fields
        let isValid = true;

        if (name.trim() === '') {
            alert('Please enter your name');
            isValid = false;
        }

        if (age.trim() === '' || isNaN(age) || age < 1) {
            alert('Please enter a valid age');
            isValid = false;
        }

        // if (phone.trim() === '' || phone.value.length!== 10) {
        //     alert('Please enter a valid phone number');
        //     isValid = false;
        // }

        if (email.trim() === '' ||!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            alert('Please enter a valid email address');
            isValid = false;
        }

        if (date.trim() === '') {
            alert('Please select a date');
            isValid = false;
        }

        if (time.trim() === '') {
            alert('Please select a time');
            isValid = false;
        }

        if (appointmentType.trim() === '') {
            alert('Please select an appointment type');
            isValid = false;
        }

        if (appointmentCategory.trim() === '') {
            alert('Please select an appointment category');
            isValid = false;
        }

        if (dentist.trim() === '') {
            alert('Please select a dentist');
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        // Check if slot is available (dummy data, replace with actual logic)
        let slotAvailable = false;
        if (date === '2024-06-25' && time === '10:00' && dentist === 'Dr. Smith') {
            slotAvailable = true;
        } else if (date === '2024-06-30' && time === '14:00' && dentist === 'Dr. johnson') {
            slotAvailable = true;
        } else if (date === '2024-07-01' && time === '09:00' && dentist === 'Dr.Anddy') {
            slotAvailable = true;
        }

        if (slotAvailable) {
            // Display summary
            document.getElementById('summaryDetails').innerText = `Name: ${name}\nAge: ${age}\nPhone: ${phone}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nAppointment Type: ${appointmentType}\nCategory: ${appointmentCategory}\nDentist: ${dentist}`;

            // Calculate fees based on appointment type
            let fees = 0;
            if (appointmentType === 'checkup') {
                fees = 50;
            } else if (appointmentType === 'cleaning') {
                fees = 80;
            } else if (appointmentType === 'filling') {
                fees = 100;
            }

            document.getElementById('fees').innerText = `Consultation Fees: $${fees}`;
        } else {
            document.getElementById('summaryDetails').innerText = `Sorry, no slot is available for the selected date and time. Please try again.`;
            document.getElementById('fees').innerText = '';
        }

        // Show the summary
        document.getElementById('summary').style.display = 'block';
    });
});