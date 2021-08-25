const forms = () => {

    const forms = document.querySelectorAll('forms');

    const massage = {
        acept: 'Спасибо! С Вами кто-то свяжется',
        loading: 'Загрузка данных',
        fail: 'Что-то пошло не так'
    }

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    }

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMassage = document.createElement('div');
            statusMassage.classList.add('status');
            form.appendChild(statusMassage);

            const formData = new FormData(form);

            postData('assets/server.php', formData)
                .then(data => {
                    console.log(data);
                    statusMassage.textContent = massage.acept;
                })
                .catch(() => statusMassage.textContent = massage.fail)
                .finally(() => {
                    form.reset();
                    setTimeout(() => {
                        statusMassage.remove();
                    }, 4000)
                })

        })


    })

}

export default forms;