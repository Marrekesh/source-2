const modals = () => {

    function bindModals(triggerSelector, modalSelector, closeSelector, closeOverlay = true) {

        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        window = document.querySelectorAll('[data-modal]');


        trigger.forEach(item => {
            item.addEventListener('click', (e) => {

                if (e.target) {
                    e.preventDefault();
                }

                window.forEach(item => {
                    item.style.display = 'none'
                });

                modal.style.display = "flex";
                document.body.style.overflow = "hidden";
                clearTimeout(timer);
            });
        })

        close.addEventListener('click', () => {

            window.forEach(item => {
                item.style.display = 'none'
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeOverlay) {

                window.forEach(item => {
                    item.style.display = 'none'
                });

                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });
    }


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
    // let showModalByTime = (selector, time) => {
    //     setTimeout(function() {
    //         let display;

    //         document.querySelectorAll('[data-modal]').forEach(item => {
    //             if (getComputedStyle(item).display !== "none") {
    //                 display = 'asd';
    //             }
    //         });

    //         if (!display) {
    //             document.querySelector(selector).style.display = 'flex';
    //             document.body.style.overflow = "hidden";
    //         }

    //     }, time)

    // }


    bindModals('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModals('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');

    // showModalByTime('.popup-design', 2000);
};

export default modals;