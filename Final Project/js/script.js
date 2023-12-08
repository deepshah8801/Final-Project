document.addEventListener("DOMContentLoaded", function () {
    // Fetch the header content and inject it into the header-container div
    fetch('../header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            // Once the header is loaded, you can perform additional operations if needed
        })
        .catch(error => console.error('Error loading header:', error));

    // Fetch the footer content and inject it into the footer-container div
    fetch('../footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
            // Once the footer is loaded, you can perform additional operations if needed
        })
        .catch(error => console.error('Error loading footer:', error));
});
