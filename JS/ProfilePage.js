const fileInput = document.getElementById('fileInput');
const profileImg = document.getElementById('profileImg');

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profileImg.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

const form = document.getElementById('profileForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
});