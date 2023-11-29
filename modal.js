function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // You can perform further processing here, such as making an AJAX request to submit the data
    // For now, let's just display a success message
    Swal.fire(
    'Success!',
    `Thank you, ${name}! Your form has been submitted.`,
    'success'
    );

    closeModal();
}
