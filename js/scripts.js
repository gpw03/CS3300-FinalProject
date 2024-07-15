document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dataForm');
    const output = document.getElementById('output');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        // Retrieve the values entered in each text box
        const userData1 = document.getElementById('userData1').value;
        const userData2 = document.getElementById('userData2').value;
        const userData3 = document.getElementById('userData3').value;

        // Display the entered data
        output.innerHTML = `
            <p>You entered:</p>
            <p>First data: ${userData1}</p>
            <p>Second data: ${userData2}</p>
            <p>Third data: ${userData3}</p>
        `;
    });
});

