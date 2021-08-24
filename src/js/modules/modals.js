const modals = () => {

    function bindModals(triggerSelector, modalSelector, closeSelector, closeOverlay = true) {

        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              dataModal = document.querySelectorAll('[data-modal]');


        trigger.forEach(item => {
            item.addEventListener('click', (e) => {

                if (e.target) {
                    e.preventDefault();
                }

                dataModal.forEach(item => {
                    item.style.display = 'none'
                });

                modal.style.display = "flex";
                document.body.style.overflow = "hidden";
                clearTimeout(timer);

                if (e.target.classList.contains('fixed-gift')) {
                    e.target.style.display = "none";
                }
            });
        })

        close.addEventListener('click', () => {

            dataModal.forEach(item => {
                item.style.display = 'none'
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeOverlay) {

                dataModal.forEach(item => {
                    item.style.display = 'none'
                });

                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });


        
    }

    //auto modal

    const timer = setTimeout(showModalByTime, 2000);

    function showModalByTime() {
        let display;

        document.querySelectorAll('[data-modal]').forEach(item => {
            if (getComputedStyle(item).display !== "none") {
                display = 'asd';
            }
        });

        if (!display) {
            document.querySelector('.popup-design').style.display = 'flex';
            document.body.style.overflow = "hidden";
        }
    }


    //show scroll in bottom

    function showModalByScroll() {
        const modal = document.querySelector('.popup-design');

        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    //GIFT

    // function gift(selector) {
    //    const giftItem = document.querySelector(selector);
       
    //    giftItem.addEventListener('click', () => {
    //        bindModals('.fixed-gift', '.popup-gift', '.popup-gift .popup-close');
    //    });

    //    giftItem.style.display = "none";
    // }


    bindModals('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModals('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModals('.fixed-gift', '.popup-gift', '.popup-gift .popup-close');
    // gift('.fixed-gift');

};

export default modals;