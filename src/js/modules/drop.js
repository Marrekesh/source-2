import {postData} from '../services/requests';

const drop = () => {

    const dropInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropInputs.forEach(item => {
            item.addEventListener(eventName, preventDefaults, false)
        });
    });


    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function showStatus(item) {
        item.closest('.file_upload').style.border = '2px solid yellow';
    }

    function hideStatus(item) {
        item.closest('.file_upload').style.border = 'none';
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropInputs.forEach(item => {
            item.addEventListener(eventName, () => showStatus(item) , false)
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropInputs.forEach(item => {
            item.addEventListener(eventName, () => hideStatus(item) , false)
        });
    });

    dropInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;

            let dots;
            const arr = input.files[0].name.split('.');
            
            arr[0].length > 6 ? dots = '...' : dots = '.';

            const name = arr[0].substring(0, 6) + dots + arr[1];

            input.previousElementSibling.textContent = name;

            if (input.closest('.file_upload-fetch')) {

                let formData = new FormData();

                formData.append('file', input.files[0]);

            
                postData('assets/server.php', formData)
                    .then((res) => console.log(res))
                    .catch(() => console.log('какая-то фигня'))
            }
        })
    });

}

export default drop;