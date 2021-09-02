const validate = (selector) => {
    const inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
    });
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (!input.value.match(/[^a-z]/ig)) {
                input.value = '';
            }
        });
    });       
}

export default validate;