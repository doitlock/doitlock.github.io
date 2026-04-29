document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
        smoothWheel: true,
        syncTouch: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    // ScrollTrigger 연동은 이걸로
    lenis.on('scroll', function () {
        ScrollTrigger.update();
    });

    // CURSOR
    var cur = document.getElementById('cursor'), ring = document.getElementById('cursor-ring'), mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; });
    gsap.ticker.add(function () {
        gsap.set(cur, { x: mx, y: my });
        rx += (mx - rx) * .1; ry += (my - ry) * .1;
        gsap.set(ring, { x: rx, y: ry });
    });

    // PROGRESS
    var prog = document.getElementById('progress');
    lenis.on('scroll', function ({ scroll, limit }) {
        prog.style.width = (scroll / limit * 100) + '%';
    });

    // NAV
    var nav = document.getElementById('nav');
    ScrollTrigger.create({ start: 60, onEnter: function () { nav.classList.add('scrolled') }, onLeaveBack: function () { nav.classList.remove('scrolled') } });

    // HERO intro
    var htl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    htl.to('.hero-name-line span', { y: '0%', duration: 1.1, stagger: .14 })
        .to('.hero-eyebrow', { opacity: 1, y: 0, duration: .8 }, '-=.7')
        .to('.hero-title-block', { opacity: 1, y: 0, duration: .8 }, '-=.55')
        .to('.hero-desc-block', { opacity: 1, y: 0, duration: .8 }, '-=.6')
        .to('#heroScroll', { opacity: 1, duration: .6 }, '-=.3');

    // blobs float
    gsap.to('.blob-1', { y: -40, x: 18, duration: 6, yoyo: true, repeat: -1, ease: 'sine.inOut' });
    gsap.to('.blob-2', { y: 30, x: -14, duration: 7, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 1 });

    // hero parallax
    gsap.to('.hero-grid-bg', { y: 100, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
    gsap.to(['.blob-1', '.blob-2'], { y: 130, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
    gsap.to('#heroName', { opacity: 0, y: -50, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'center top', end: 'bottom top', scrub: true } });

    // section lines
    gsap.utils.toArray('.section-line-el').forEach(function (el) {
        gsap.from(el, { scaleX: 0, transformOrigin: 'left', duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
    });
    gsap.utils.toArray('.section-title').forEach(function (el) {
        gsap.from(el, { x: 70, opacity: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
    });
    gsap.utils.toArray('.section-num').forEach(function (el) {
        gsap.from(el, { opacity: 0, y: 10, duration: .7, scrollTrigger: { trigger: el, start: 'top 90%' } });
    });

    // ABOUT
    gsap.to('#aboutBar', { height: '100%', duration: 1.4, ease: 'power2.out', scrollTrigger: { trigger: '#aboutBar', start: 'top 78%' } });
    gsap.from('.about-quote', { opacity: 0, y: 50, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.about-quote', start: 'top 80%' } });
    gsap.from('.about-card', { opacity: 0, y: 50, stagger: .18, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: '#aboutCards', start: 'top 80%' } });

    // SKILLS
    gsap.from('.skill-block', { opacity: 0, y: 80, stagger: .13, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '#skillsGrid', start: 'top 78%' } });

    // CAREER
    gsap.utils.toArray('.career-item').forEach(function (item) {
        var bar = item.querySelector('.career-item-bar');
        var tl = gsap.timeline({ scrollTrigger: { trigger: item, start: 'top 82%' } });
        tl.from(item, { opacity: 0, x: -50, duration: .9, ease: 'power3.out' })
            .to(bar, { scaleY: 1, duration: 1.1, ease: 'power2.out' }, '-=.6');
    });

    // KEY PROJECTS
    gsap.from('.kp-card', { opacity: 0, y: 80, stagger: .15, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: '#kpGrid', start: 'top 78%' } });
    document.querySelectorAll('.kp-card').forEach(function (card) {
        card.addEventListener('mouseenter', function () { gsap.to(card, { y: -8, duration: .35, ease: 'power2.out' }); });
        card.addEventListener('mouseleave', function () { gsap.to(card, { y: 0, duration: .4, ease: 'power2.inOut' }); });
    });

    // PROJECT LIST
    gsap.from('.plist-row', { opacity: 0, y: 30, stagger: .055, duration: .75, ease: 'power2.out', scrollTrigger: { trigger: '#plistWrap', start: 'top 82%' } });

    // EDUCATION
    gsap.from('.edu-item', { opacity: 0, x: -40, stagger: .16, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: '#eduList', start: 'top 82%' } });

    // CONTACT
    var ctaTL = gsap.timeline({ scrollTrigger: { trigger: '.contact', start: 'top 70%' } });
    ctaTL.from('#ctaEyebrow', { opacity: 0, y: 20, duration: .7, ease: 'power3.out' })
        .from('#ctaHead', { opacity: 0, y: 60, duration: 1, ease: 'power4.out' }, '-=.3')
        .from('#ctaDesc', { opacity: 0, y: 20, duration: .8, ease: 'power3.out' }, '-=.5');
    gsap.to('.contact-blob', { scale: 1.2, duration: 4, yoyo: true, repeat: -1, ease: 'sine.inOut' });

    // ── FLOATING BANNER ──
    var fb = document.getElementById('floatBanner');
    var fbClose = document.getElementById('floatClose');

    // entrance: slide up from bottom after 1.5s
    gsap.from(fb, { y: 60, opacity: 0, duration: .8, ease: 'power3.out', delay: 1.8 });

    // hide on scroll near top, show otherwise
    ScrollTrigger.create({
        start: 100,
        onEnter: function () { gsap.to(fb, { opacity: 1, y: 0, duration: .4, ease: 'power2.out', pointerEvents: 'all' }); fb.classList.remove('hide'); },
        onLeaveBack: function () { fb.classList.add('hide'); }
    });

    // fbClose.addEventListener('click', function () {
    //     gsap.to(fb, { opacity: 0, y: 16, duration: .4, ease: 'power2.in', onComplete: function () { fb.style.display = 'none'; } });
    // });

    // ── MODAL: prevent GSAP cursor conflict ──
    document.querySelectorAll('.pj-modal').forEach(function (el) {
        el.addEventListener('show.bs.modal', function () {
            lenis.stop();
            document.body.style.cursor = 'auto';
        });

        el.addEventListener('shown.bs.modal', function () {
            // modal 내부 스크롤 영역에서 wheel 이벤트가
            // lenis로 전파되지 않도록 막기
            const modalBody = el.querySelector('.modal-body');
            if (modalBody) {
                modalBody.addEventListener('wheel', function (e) {
                    e.stopPropagation();
                }, { passive: true });
            }
        });

        el.addEventListener('hidden.bs.modal', function () {
            lenis.start();
            document.body.style.cursor = 'none';
        });
    });

    // ── MODAL: content entrance animation ──
    document.querySelectorAll('.pj-modal').forEach(function (modal) {
        modal.addEventListener('show.bs.modal', function () {
            var content = modal.querySelector('.modal-content');
            gsap.from(content, { y: 30, opacity: 0, duration: .5, ease: 'power3.out', clearProps: 'all' });
        });
    });

    // ── PROJECT FILTER ──
    (function () {
        var btns = document.querySelectorAll('.filter-btn');
        var rows = document.querySelectorAll('#plistWrap .plist-row');
        var numEl = document.getElementById('filterNum');
        var current = 'all';

        function runFilter(filter) {
            current = filter;

            btns.forEach(function (b) { b.classList.toggle('is-active', b.dataset.filter === filter); });

            var show = [], hide = [];
            rows.forEach(function (row) {
                var type = row.dataset.type;
                if (filter === 'all' || type === filter) show.push(row);
                else hide.push(row);
            });

            if (hide.length) {
                gsap.to(hide, {
                    opacity: 0, y: -10, duration: .25, ease: 'power2.in',
                    onComplete: function () {
                        hide.forEach(function (r) { r.classList.add('is-hidden'); });

                        // ✅ 숨김 완료 후 ScrollTrigger + Lenis 높이 재계산
                        ScrollTrigger.refresh();
                        lenis.resize();
                    }
                });
            }

            show.forEach(function (r) { r.classList.remove('is-hidden'); gsap.set(r, { opacity: 0, y: 14 }); });
            gsap.to(show, {
                opacity: 1, y: 0,
                duration: .55, ease: 'power3.out',
                stagger: .055,
                delay: hide.length ? .22 : 0,
                onComplete: function () {
                    // ✅ 등장 완료 후에도 한번 더 재계산
                    ScrollTrigger.refresh();
                    lenis.resize();
                }
            });

            numEl.textContent = show.length;

            show.forEach(function (r, i) {
                r.querySelector('.plist-idx').textContent = String(i + 1).padStart(2, '0');
            });
        }

        // 버튼 클릭 이벤트
        btns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                if (btn.dataset.filter === current) return;
                runFilter(btn.dataset.filter);
            });
        });
    })();
});