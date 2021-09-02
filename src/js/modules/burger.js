const burger = (burgerBtn, burgerContent) => {

    const burgerButton = document.querySelector(burgerBtn),
          burgerMenu = document.querySelector(burgerContent);

    burgerMenu.style.display = 'none';

    burgerButton.addEventListener('click', () => {

        if (burgerMenu.style.display == "none" && window.screen.availWidth < 993) {
            burgerMenu.style.display = 'block';
        } else {
            burgerMenu.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            burgerMenu.style.display = 'none';
        }
    })

}

export default burger;

  
