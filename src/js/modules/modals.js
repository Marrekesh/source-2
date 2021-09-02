const modals = () => {
    let pressed = false;

    function bindModals(triggerSelector, modalSelector, closeSelector, closeOverlay = true) {

        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              dataModal = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();  

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {

                if (e.target) {
                    e.preventDefault();
                }

                dataModal.forEach(item => {
                    item.style.display = 'none'
                });

                pressed = true;

                modal.style.display = "flex";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
                // clearTimeout(timer);

                if (e.target.classList.contains('fixed-gift')) {
                    item.remove();
                }
            });
        })

        close.addEventListener('click', () => {

            dataModal.forEach(item => {
                item.style.display = 'none'
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeOverlay) {

                dataModal.forEach(item => {
                    item.style.display = 'none'
                });

                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            }
        });
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    //auto modal

    // const timer = setTimeout(showModalByTime, 2000);

    // function showModalByTime() {
    //     let display;

    //     document.querySelectorAll('[data-modal]').forEach(item => {
    //         if (getComputedStyle(item).display !== "none") {
    //             display = 'asd';
    //         }
    //     });

    //     if (!display) {
    //         document.querySelector('.popup-design').style.display = 'flex';
    //         document.body.style.overflow = "hidden";
    //     }
    // }


    //show scroll in bottom

    function showModalByScroll() {
        const modal = document.querySelector('.popup-design');

        if (!pressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);


    bindModals('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModals('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModals('.fixed-gift', '.popup-gift', '.popup-gift .popup-close');

};

export default modals;