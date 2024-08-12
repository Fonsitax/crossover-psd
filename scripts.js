document.addEventListener('DOMContentLoaded', function () {
    const dropdownTrigger = document.getElementById('dropdownTrigger');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const demosTrigger = document.getElementById('demosTrigger');
    const demosMenu = document.getElementById('demosMenu');

    // Toggle main dropdown menu
    dropdownTrigger.addEventListener('click', function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('hidden');
    });

    // Toggle sub-dropdown menu
    demosTrigger.addEventListener('click', function (event) {
        event.preventDefault();
        demosMenu.classList.toggle('hidden');
    });

    // Close the dropdown if clicking outside of it
    document.addEventListener('click', function (event) {
        if (!dropdownTrigger.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.add('hidden');
        }
        if (!demosTrigger.contains(event.target) && !demosMenu.contains(event.target)) {
            demosMenu.classList.add('hidden');
        }
    });
});
