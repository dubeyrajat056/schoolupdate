document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            // Get the filter category
            const filter = button.getAttribute('data-filter');

            // Show/Hide items based on the filter
            galleryItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                }
            });
        });
    });

    // Trigger 'All' filter on page load
    document.querySelector('.filter-btn[data-filter="all"]').click();
});


// rule page str

// Function to toggle the visibility of rule details
function toggleRuleDetails(ruleId) {
    const ruleDetails = document.getElementById(ruleId);
    
    // Toggle the display of the details
    if (ruleDetails.style.display === "none" || ruleDetails.style.display === "") {
        ruleDetails.style.display = "block";
    } else {
        ruleDetails.style.display = "none";
    }
}

// rule end