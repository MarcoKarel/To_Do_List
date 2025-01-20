function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('iframeContainer');
    const toggleButton = document.getElementById('toggleBtn');

    sidebar.classList.toggle('open'); // Toggle sidebar visibility
    content.classList.toggle('shifted'); // Shift the main content

    // Adjust toggle button position dynamically
    if (sidebar.classList.contains('open')) {
        toggleButton.style.left = '270px'; // Move button outside sidebar
    } else {
        toggleButton.style.left = '20px'; // Default position
    }
}


$(document).ready(function(){
    $("#Profile_SidebarButton").click(function(){
        $("#Profile_iFrame_Container").toggle();        
    }) 
});

$(document).ready(function () {
    // Function to show the iframe with a specific URL
    function showIframe(url) {
        $('#dynamicIframe').attr('src', url); // Set iframe src
        $('#iframeContainer').show(); // Show the container
    }

    // Function to close iframe
    function closeIframe() {
        $('#dynamicIframe').attr('src', ''); // Clear the iframe content
        $('#iframeContainer').hide(); // Hide the container
    }

    // Button to show the first iframe
    $('#Home_SidebarButton').on('click', function () {
        showIframe('CentralHub.html'); // Show first iframe
    });

    // Button to show the second iframe
    $('#ToDo_SidebarButton').on('click', function () {
        closeIframe(); // First close the existing iframe
        showIframe('toDoList.html'); // Open new iframe
    });

    $('#Calendar_SidebarButton').on('click', function () {
        closeIframe(); // First close the existing iframe
        showIframe('Calendar.html'); // Open new iframe
    });

    $('#Profile_SidebarButton').on('click', function () {
        closeIframe(); // First close the existing iframe
        showIframe('Profile_Page.html'); // Open new iframe
    });

    $('#SignOut_SidebarButton').on('click', function () {
        closeIframe(); // First close the existing iframe
        showIframe('Login_Registration_Page.html'); // Open new iframe
    });
});