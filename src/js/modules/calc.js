const calc = (size, material, options, result, promocode, resultC) => {

    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionslBlock = document.querySelector(options),
          resultBlock = document.querySelector(result),
          promocodeBlock = document.querySelector(promocode);

    let sum = 0;

    function clacTo() {

        resultC['size'] = sizeBlock.value;
        resultC['material'] = materialBlock.value;
        resultC['options'] = optionslBlock.value;

        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionslBlock.value));

        if (sizeBlock.value && materialBlock.value == '') {
            resultBlock.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }

        resultC['sum'] = sum;
        // console.log(resultC);
    }

    sizeBlock.addEventListener('change', clacTo);
    materialBlock.addEventListener('change', clacTo);
    optionslBlock.addEventListener('change', clacTo);
    promocodeBlock.addEventListener('input', clacTo);

}

export default calc;