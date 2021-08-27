import { postData } from "../services/requests";

const forms = () => {

    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const upload = document.querySelectorAll('[name="upload"]');

    const massage = {
        acept: 'Спасибо! С Вами кто-то свяжется',
        loading: 'Загрузка данных',
        fail: 'Что-то пошло не так',
        ok: 'assets/img/ok.png',
        failImg:'assets/img/fail.png',
        loadSpinner: 'assets/img/spinner.gif'
    }

    const path = {
        general: 'assets/server.php',
        questions: 'assets/questions.php'
    }

    function clearInputs() {
        inputs.forEach(input => {
            input.value = '';
        });

        upload.forEach(item => {
            item.previousElementSibling.textContent = "Файл не выбран";
        });
    }

    upload.forEach(item => {
        item.addEventListener('input', () => {
            let dots;
            const arr = item.files[0].name.split('.');
            
            arr[0].length > 6 ? dots = '...' : dots = '.';

            const name = arr[0].substring(0, 6) + dots + arr[1];

            item.previousElementSibling.textContent = name;
        })
    })

    // const postData = async (url, data) => {
    //     const res = await fetch(url, {
    //         method: 'POST',
    //         body: data,


    //     });

    //     return await res.text();
    // }

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMassage = document.createElement('div');
            statusMassage.classList.add('status');
            form.parentNode.appendChild(statusMassage);

            form.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                form.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', massage.loadSpinner);
            statusImg.classList.add('animated', 'fadeInup');
            statusMassage.appendChild(statusImg);

            let statusText = document.createElement('div');
            statusText.textContent = massage.loading;
            statusMassage.appendChild(statusText);

            const formData = new FormData(form);
            // const json = JSON.stringify(Object.fromEntries(formData.entries()));

            let api;

            form.closest('.popup-design') || form.classList.contains('calc_form') ? api = path.general : api = path.questions;


            postData(api, formData)
                .then(data => {
                    console.log(data);
                    statusImg.setAttribute('src', massage.ok);
                    statusText.textContent = massage.acept;
                })
                .catch(() => {
                    statusMassage.setAttribute('src', massage.failImg);
                    statusText.textContent = massage.fail;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMassage.remove();
                        form.style.display = 'block';
                        form.classList.remove('fadeOutUp');
                        form.classList.add('fadeInUp');
                    }, 4000)
                })
        })
    })

}


export default forms;