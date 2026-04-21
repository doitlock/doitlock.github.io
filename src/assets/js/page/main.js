window.onload = function() {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Language Dropdown
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');

    languageBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('language__dropdown--active');
        languageBtn.classList.toggle('language__btn--active');
    });

    document.addEventListener('click', function () {
        languageDropdown.classList.remove('language__dropdown--active');
        languageBtn.classList.remove('language__btn--active');
    });

    document.querySelectorAll('.language__option').forEach((option) => {
        option.addEventListener('click', function (e) {
            e.preventDefault();
            const selectedLang = this.getAttribute('data-lang');
            languageBtn.textContent = selectedLang;
            languageDropdown.classList.remove('language__dropdown--active');
            languageBtn.classList.remove('language__btn--active');
        });
    });

    // project item Data
    const items = document.querySelectorAll('.project__item');
    const projectImage = document.getElementById('projectImage');
    const projectName = document.getElementById('projectName');

    const itemData = {
        'yoo-young-sang': {
            name: 'YOO YOUNG-SANG',
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMzMzIiByeD0iMTAiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTgwIiByPSI2MCIgZmlsbD0iIzAwRkZCRCIvPgo8L3N2Zz4=',
        },
        'chey-tae-won': {
            name: 'CHEY TAE-WON',
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjNDQ0IiByeD0iMTAiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTgwIiByPSI2MCIgZmlsbD0iIzAwRkZCRCIvPgo8L3N2Zz4=',
        },
        'jensen-huang': {
            name: 'JENSEN HUANG',
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjNTU1IiByeD0iMTAiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTgwIiByPSI2MCIgZmlsbD0iIzAwRkZCRCIvPgo8L3N2Zz4=',
        },
        'kwark-noh-jung': {
            name: 'KWARK NOH-JUNG',
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMjIyIiByeD0iMTAiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTgwIiByPSI2MCIgZmlsbD0iIzAwRkZCRCIvPgo8L3N2Zz4=',
        },
        'pankaj-sharma': {
            name: 'PANKAJ SHARMA',
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjNjY2IiByeD0iMTAiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTgwIiByPSI2MCIgZmlsbD0iIzAwRkZCRCIvPgo8L3N2Zz4=',
        },
        'ben-mann': {
            name: 'BEN MANN',
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMzc3IiByeD0iMTAiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTgwIiByPSI2MCIgZmlsbD0iIzAwRkZCRCIvPgo8L3N2Zz4=',
        },
        'masayoshi-son': {
            name: 'MASAYOSHI SON',
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjNDg4IiByeD0iMTAiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTgwIiByPSI2MCIgZmlsbD0iIzAwRkZCRCIvPgo8L3N2Zz4=',
        },
        'guan-ian': {
            name: 'GUAN IAN',
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjNTk5IiByeD0iMTAiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTgwIiByPSI2MCIgZmlsbD0iIzAwRkZCRCIvPgo8L3N2Zz4=',
        },
        'jeff-cardenas': {
            name: 'JEFF CARDENAS',
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjNmFhIiByeD0iMTAiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTgwIiByPSI2MCIgZmlsbD0iIzAwRkZCRCIvPgo8L3N2Zz4=',
        },
        'song-sang-hoon': {
            name: 'SONG SANG-HOON',
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjN2JiIiByeD0iMTAiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTgwIiByPSI2MCIgZmlsbD0iIzAwRkZCRCIvPgo8L3N2Zz4=',
        },
        'choi-hyun-hee': {
            name: 'CHOI HYUN-HEE',
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjOGNjIiByeD0iMTAiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTgwIiByPSI2MCIgZmlsbD0iIzAwRkZCRCIvPgo8L3N2Zz4=',
        },
    };

    // Function to update item with GSAP animation
    function updateitem(itemId) {
        const data = itemData[itemId];
        if (!data) return;

        // GSAP Timeline for smooth transition
        const tl = gsap.timeline();

        tl.to(projectImage, {
            opacity: 0,
            scale: 0.95,
            duration: 0.3,
            ease: 'power2.inOut',
        })
            .to(
                projectName,
                {
                    opacity: 0,
                    y: -10,
                    duration: 0.2,
                    ease: 'power2.inOut',
                },
                '<0.1'
            )
            .call(() => {
                projectImage.src = data.image;
                projectName.textContent = data.name;
            })
            .to(projectImage, {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: 'power2.out',
            })
            .to(
                projectName,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out',
                },
                '<0.1'
            );
    }

    // Manual item click interaction
    items.forEach((item) => {
        item.addEventListener('click', function () {
            // Remove active class with GSAP animation
            gsap.to('.project__item--active', {
                color: '#FEB05D',
                scale: 1,
                duration: 0.3,
                ease: 'power2.out',
                onComplete: () => {
                    items.forEach((s) => s.classList.remove('project__item--active'));
                },
            });

            // Add active class with GSAP animation
            this.classList.add('project__item--active');
            gsap.fromTo(
                this,
                { scale: 0.95, color: 'rgba(255, 255, 255, 0.3)' },
                {
                    scale: 1,
                    color: '#00FFBD',
                    duration: 0.4,
                    ease: 'back.out(1.2)',
                }
            );

            const itemId = this.getAttribute('data-item');
            updateitem(itemId);
        });
    });    

    // Smooth scrolling with GSAP
    document.querySelectorAll('.nav__link').forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                gsap.to(window, {
                    duration: 1.2,
                    scrollTo: offsetTop,
                    ease: 'power2.inOut',
                });
            }
        });
    });

    // Enhanced button interactions with GSAP
    document.querySelectorAll('.btn').forEach((button) => {
        button.addEventListener('mouseenter', function () {
            gsap.to(this, {
                scale: 1.05,
                y: -3,
                duration: 0.3,
                ease: 'power2.out',
            });
        });

        button.addEventListener('mouseleave', function () {
            gsap.to(this, {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: 'power2.out',
            });
        });

        button.addEventListener('click', function (e) {
            e.preventDefault();
            gsap.to(this, {
                scale: 0.95,
                duration: 0.1,
                ease: 'power2.out',
                yoyo: true,
                repeat: 1,
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        const modal = document.getElementById('promoModal');
        const closeBtn = document.getElementById('closeModalBtn');
        const confirmBtn = document.getElementById('confirmModalBtn');
        const hideTodayCheckbox = document.getElementById('hideTodayCheckbox');

        // Info Modal logic
        const infoModal = document.getElementById('infoModal');
        const openInfoModalBtn = document.getElementById('openInfoModalBtn');
        const closeInfoModalBtn = document.getElementById('closeInfoModalBtn');

        openInfoModalBtn.addEventListener('click', function () {
            infoModal.showModal();
            document.body.style.overflow = 'hidden';
        });

        closeInfoModalBtn.addEventListener('click', function () {
            infoModal.close();
            document.body.style.overflow = '';
        });

        infoModal.addEventListener('close', function () {
            document.body.style.overflow = '';
        });

        // Check localStorage for 'hideModalToday'
        const today = new Date().toISOString().slice(0, 10);
        if (localStorage.getItem('hideModalToday') !== today) {
            modal.showModal();
        }

        function closeModal() {
            modal.close();
            if (hideTodayCheckbox.checked) {
                localStorage.setItem('hideModalToday', today);
            }
        }

        closeBtn.addEventListener('click', closeModal);
        confirmBtn.addEventListener('click', closeModal);
    });

    // GSAP ScrollTrigger for section animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animations
    gsap.fromTo(
        '.hero__main',
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power2.out',
            delay: 0.5,
        }
    );

    gsap.fromTo(
        '.hero__top',
        { opacity: 0, y: -30 },
        {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out',
            delay: 0.3,
        }
    );

    // Section reveal animations
    gsap.utils.toArray('.registration, .apec, .location, .sponsors').forEach((section) => {
        gsap.fromTo(
            section,
            { opacity: 0, y: 80 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    });

    // project section special animation
    gsap.fromTo(
        '.project',
        { opacity: 0 },
        {
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.project',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
            },
        }
    );

    // Parallax effect with GSAP
    gsap.to('.hero__bg', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    });

    // Header background transition with ScrollTrigger
    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: { className: 'header--scrolled', targets: '.header' },
        onEnter: () => {
            gsap.to('.header', {
                backgroundColor: 'rgba(0, 0, 0, 0.95)',
                backdropFilter: 'blur(15px)',
                duration: 0.3,
                ease: 'power2.out',
            });
        },
        onLeaveBack: () => {
            gsap.to('.header', {
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                backdropFilter: 'blur(10px)',
                duration: 0.3,
                ease: 'power2.out',
            });
        },
    });

    // Atom icon enhanced rotation with GSAP
    gsap.to('.atom__orbit--1', {
        rotation: 360,
        duration: 8,
        ease: 'none',
        repeat: -1,
    });

    gsap.to('.atom__orbit--2', {
        rotation: 360,
        duration: 6,
        ease: 'none',
        repeat: -1,
    });

    gsap.to('.atom__orbit--3', {
        rotation: 360,
        duration: 10,
        ease: 'none',
        repeat: -1,
    });

    // Orbit animations with different speeds
    gsap.to('.orbit--1', {
        rotation: 360,
        duration: 20,
        ease: 'none',
        repeat: -1,
    });

    gsap.to('.orbit--2', {
        rotation: -360,
        duration: 25,
        ease: 'none',
        repeat: -1,
    });

    gsap.to('.orbit--3', {
        rotation: 360,
        duration: 18,
        ease: 'none',
        repeat: -1,
    });

    gsap.to('.orbit--4', {
        rotation: -360,
        duration: 30,
        ease: 'none',
        repeat: -1,
    });

    // Sponsors grid stagger animation
    ScrollTrigger.create({
        trigger: '.sponsors__grid',
        start: 'top 80%',
        onEnter: () => {
            gsap.fromTo(
                '.sponsors__item',
                { opacity: 0, scale: 0.8, y: 30 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'back.out(1.7)',
                    stagger: 0.1,
                }
            );
        },
    });

    // Location items stagger animation
    ScrollTrigger.create({
        trigger: '.location__info',
        start: 'top 80%',
        onEnter: () => {
            gsap.fromTo(
                '.location__item',
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    stagger: 0.2,
                }
            );
        },
    });

    const filterButtons = document.querySelectorAll('.project__filter');
    const projectItems = document.querySelectorAll('.project__item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {

            const filter = button.dataset.filter;

            // active 버튼 변경
            filterButtons.forEach(btn => btn.classList.remove('project__filter--active'));
            button.classList.add('project__filter--active');

            // 필터링
            projectItems.forEach(item => {
                const type = item.dataset.type;

                if (filter === 'all' || filter === type) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

        });
    });
};