document.addEventListener('DOMContentLoaded', function () {
    // Section 1: Show/hide different sections
    const section1Button = document.querySelector('#section1Button');
    const section2Button = document.querySelector('#section2Button');
    const section3Button = document.querySelector('#section3Button');

    const section1 = document.querySelector('#section1');
    const section2 = document.querySelector('#section2');
    const section3 = document.querySelector('#section3');

    section1Button.addEventListener('click', function () {
        section1.style.display = 'block';
        section2.style.display = 'none';
        section3.style.display = 'none';
    });

    section2Button.addEventListener('click', function () {
        section1.style.display = 'none';
        section2.style.display = 'block';
        section3.style.display = 'none';
    });

    section3Button.addEventListener('click', function () {
        section1.style.display = 'none';
        section2.style.display = 'none';
        section3.style.display = 'block';
    });

    // Section 2: Handle file download
    const downloadButtons = document.querySelectorAll('.button');

    downloadButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Tải xuống tài liệu!');
        });
    });

    // Section 3: Handle file upload
    const uploadForm = document.querySelector('#uploadForm');
    const successMessage = document.querySelector('#success-message');
    const errorMessage = document.querySelector('#error-message');

    uploadForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const fileInput = document.querySelector('#fileInput');
        const file = fileInput.files[0];

        if (file) {
            successMessage.innerText = 'Tài liệu đã được tải lên thành công!';
            errorMessage.innerText = '';
        } else {
            errorMessage.innerText = 'Vui lòng chọn một tài liệu để tải lên!';
            successMessage.innerText = '';
        }
    });
});
