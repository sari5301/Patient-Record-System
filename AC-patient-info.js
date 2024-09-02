document.addEventListener('DOMContentLoaded', () => {
    const patientForm = document.getElementById('patient-form');
    const patientList = document.getElementById('patient-list');

    let patients = JSON.parse(localStorage.getItem('patients')) || [];
    let editingIndex = null;

    function renderPatientList() {
        patientList.innerHTML = '';
        patients.forEach((patient, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>Ward Number:</strong> ${patient.wardNumber}<br>
                <strong>Bed Number:</strong> ${patient.bedNumber}<br>
                <strong>First Name:</strong> ${patient.firstName}<br>
                <strong>Last Name:</strong> ${patient.lastName}<br>
                <strong>Middle Name:</strong> ${patient.middleName}<br>
                <strong>Age:</strong> ${patient.age}<br>
                <strong>Date of Birth:</strong> ${patient.dateOfBirth}<br>
                <strong>Gender:</strong> ${patient.gender}<br>
                <strong>Contact Number:</strong> ${patient.contactNumber}<br>
                <strong>Address:</strong> ${patient.address}<br>
                <strong>Date of Admission:</strong> ${patient.dateOfAdmission}<br>
                <strong>Reason for Admission:</strong> ${patient.reasonForAdmission}<br>
                <strong>Emergency Contact Name:</strong> ${patient.emergencyContactName}<br>
                <strong>Relationship to Patient:</strong> ${patient.emergencyContactRelationship}<br>
                <strong>Emergency Contact Number:</strong> ${patient.emergencyContactNumber}<br>
                <strong>Doctor-in-Charge:</strong> ${patient.doctorInCharge}<br>
                <strong>Specialization:</strong> ${patient.specialization}<br>
                <strong>Doctor Contact Number:</strong> ${patient.doctorContactNumber}<br>
                <strong>Last Consultation:</strong> ${patient.lastConsultation}<br>
                <button class="edit-button" data-index="${index}">Edit</button>
                <button class="delete-button" data-index="${index}">Delete</button>
            `;
            patientList.appendChild(li);
        });
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        const formData = new FormData(patientForm);
        const patient = {
            wardNumber: formData.get('wardNumber'),
            bedNumber: formData.get('bedNumber'),
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            middleName: formData.get('middleName'),
            age: formData.get('age'),
            dateOfBirth: formData.get('dateOfBirth'),
            gender: formData.get('gender'),
            contactNumber: formData.get('contactNumber'),
            address: formData.get('address'),
            dateOfAdmission: formData.get('dateOfAdmission'),
            reasonForAdmission: formData.get('reasonForAdmission'),
            emergencyContactName: formData.get('emergencyContactName'),
            emergencyContactRelationship: formData.get('emergencyContactRelationship'),
            emergencyContactNumber: formData.get('emergencyContactNumber'),
            doctorInCharge: formData.get('doctorInCharge'),
            specialization: formData.get('specialization'),
            doctorContactNumber: formData.get('doctorContactNumber'),
            lastConsultation: formData.get('lastConsultation'),
        };

        if (editingIndex !== null) {
            patients[editingIndex] = patient;
            editingIndex = null;
        } else {
            patients.push(patient);
        }

        localStorage.setItem('patients', JSON.stringify(patients));
        patientForm.reset();
        renderPatientList();
    }

    function handleEditButtonClick(event) {
        if (event.target.classList.contains('edit-button')) {
            const index = event.target.dataset.index;
            const patient = patients[index];

            patientForm.elements['wardNumber'].value = patient.wardNumber;
            patientForm.elements['bedNumber'].value = patient.bedNumber;
            patientForm.elements['firstName'].value = patient.firstName;
            patientForm.elements['lastName'].value = patient.lastName;
            patientForm.elements['middleName'].value = patient.middleName;
            patientForm.elements['age'].value = patient.age;
            patientForm.elements['dateOfBirth'].value = patient.dateOfBirth;
            patientForm.elements['gender'].value = patient.gender;
            patientForm.elements['contactNumber'].value = patient.contactNumber;
            patientForm.elements['address'].value = patient.address;
            patientForm.elements['dateOfAdmission'].value = patient.dateOfAdmission;
            patientForm.elements['reasonForAdmission'].value = patient.reasonForAdmission;
            patientForm.elements['emergencyContactName'].value = patient.emergencyContactName;
            patientForm.elements['emergencyContactRelationship'].value = patient.emergencyContactRelationship;
            patientForm.elements['emergencyContactNumber'].value = patient.emergencyContactNumber;
            patientForm.elements['doctorInCharge'].value = patient.doctorInCharge;
            patientForm.elements['specialization'].value = patient.specialization;
            patientForm.elements['doctorContactNumber'].value = patient.doctorContactNumber;
            patientForm.elements['lastConsultation'].value = patient.lastConsultation;

            editingIndex = index;
        }
    }

    function handleDeleteButtonClick(event) {
        if (event.target.classList.contains('delete-button')) {
            const index = event.target.dataset.index;
            patients.splice(index, 1);
            localStorage.setItem('patients', JSON.stringify(patients));
            renderPatientList();
        }
    }

    patientForm.addEventListener('submit', handleFormSubmit);
    patientList.addEventListener('click', handleEditButtonClick);
    patientList.addEventListener('click', handleDeleteButtonClick);

    renderPatientList();
});
