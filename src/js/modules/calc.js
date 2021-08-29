const calc = (size, material, options, result, promocode) => {

    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionslBlock = document.querySelector(options),
          resultBlock = document.querySelector(result),
          promocodeBlock = document.querySelector(promocode);

    let sum = 0;

    function clacTo() {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionslBlock.value));

        if (sizeBlock.value && materialBlock.value == '') {
            resultBlock.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
        
    }

    sizeBlock.addEventListener('change', clacTo);
    materialBlock.addEventListener('change', clacTo);
    optionslBlock.addEventListener('change', clacTo);
    promocodeBlock.addEventListener('input', clacTo);

}

export default calc;