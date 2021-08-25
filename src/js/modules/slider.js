const slider = (items, dir, prev, next) => {
    const slides = document.querySelectorAll(items);
    let paused = false,
        index = 1;

    function showSlides(n) {
        if (n < 1) {
            index = slides.length;
        }

        if (n > slides.length) {
            index = 1
        }

        slides.forEach(slide => {
            slide.classList.add('animated');
            slide.style.display = 'none';
        });

        slides[index - 1].style.display = 'block';
    }

    showSlides(index);

    function plusSlide(n) {
        showSlides(index += n); 
    }

    try {

        const prevBtn = document.querySelector(prev);
        const nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlide(-1);
            slides[index - 1].classList.remove('slideInLeft');
            slides[index - 1].classList.add('slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            plusSlide(1);
            slides[index - 1].classList.remove('slideInRight');
            slides[index - 1].classList.add('slideInLeft');
        }); 
    } catch(e){}

    function autoSlides() {
        if (dir === 'vertical') {
            paused = setInterval(function() {
                plusSlide(1);
                slides[index - 1].classList.add('slideInDown');
            }, 6000)
        } else {
            paused = setInterval(function() {
                plusSlide(1);
                slides[index - 1].classList.remove('slideInRight');
                slides[index - 1].classList.add('slideInLeft');
            }, 6000)
        }
    }
    autoSlides();

    slides[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    slides[0].parentNode.addEventListener('mouseleave', () => {
        autoSlides();
    });
}

export default slider;
