document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // 레니스 선언 (모바일에서 파괴)
  let lenis = null;
  let rafId = null;

  function initLenis() {
    // 모바일에서는 실행 안 함
    if (window.innerWidth <= 1024) return;

    // 이미 있으면 중복 생성 방지
    if (lenis) return;

    lenis = new Lenis({
      smoothWheel: true,
      syncTouch: false,

      prevent: (node) => {
        return node.closest(".modal");
      },
    });

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);
  }

  function destroyLenis() {
    if (!lenis) return;

    cancelAnimationFrame(rafId);

    lenis.destroy();
    lenis = null;
  }

  function handleLenisByScreen() {
    if (window.innerWidth <= 1024) {
      destroyLenis();
    } else {
      initLenis();
    }
  }

  // 최초 실행
  handleLenisByScreen();

  // 리사이즈 대응
  window.addEventListener("resize", handleLenisByScreen);

  // // 마우스모양 커스텀
  // var cur = document.getElementById('cursor'), ring = document.getElementById('cursor-ring'), mx = 0, my = 0, rx = 0, ry = 0;
  // document.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; });
  // gsap.ticker.add(function () {
  //     gsap.set(cur, { x: mx, y: my });
  //     rx += (mx - rx) * .1; ry += (my - ry) * .1;
  //     gsap.set(ring, { x: rx, y: ry });
  // });

  // PROGRESS
  var prog = document.getElementById("progress");
  if (lenis) {
    lenis.on("scroll", function ({ scroll, limit }) {
      prog.style.width = (scroll / limit) * 100 + "%";
    });
  }

  // NAV
  var nav = document.getElementById("nav");
  ScrollTrigger.create({
    start: 60,
    onEnter: function () {
      nav.classList.add("scrolled");
    },
    onLeaveBack: function () {
      nav.classList.remove("scrolled");
    },
  });

  document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      // lenis.scrollTo() 메서드 사용 (라이브러리 선언부 아래에 작성하세요)
      lenis.scrollTo(targetId); 
    });
  });


  let lastScroll = 0;
  const threshold = 10;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // 최상단
    if (currentScroll <= 0) {
      nav.classList.remove('hide');
      return;
    }

    // 아래로 스크롤
    if (
      currentScroll > lastScroll &&
      currentScroll > threshold
    ) {
      nav.classList.add('hide');
    }

    // 위로 스크롤
    else {
      nav.classList.remove('hide');
    }

    lastScroll = currentScroll;
  });

  // HERO intro
  var htl = gsap.timeline({ defaults: { ease: "power4.out" } });
  htl
    .to(".hero-name-line span", { y: "0%", duration: 1.1, stagger: 0.14 })
    .to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.8 }, "-=.7")
    .to(".hero-title-block", { opacity: 1, y: 0, duration: 0.8 }, "-=.55")
    .to("#heroScroll", { opacity: 1, duration: 0.6 }, "-=.3");

  // section lines
  gsap.utils.toArray(".section-line-el").forEach(function (el) {
    gsap.from(el, {
      scaleX: 0,
      transformOrigin: "left",
      duration: 1.3,
      ease: "expo.out",
      scrollTrigger: { trigger: el, start: "top 88%" },
    });
  });
  gsap.utils.toArray(".section-title").forEach(function (el) {
    gsap.from(el, {
      x: 70,
      opacity: 0,
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%" },
    });
  });
  gsap.utils.toArray(".section-num").forEach(function (el) {
    gsap.from(el, {
      opacity: 0,
      y: 10,
      duration: 0.7,
      scrollTrigger: { trigger: el, start: "top 90%" },
    });
  });

  // ABOUT
  gsap.from(".about-quote", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: { trigger: ".about-quote", start: "top 80%" },
  });
  gsap.from(".about-card", {
    opacity: 0,
    y: 50,
    stagger: 0.18,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: { trigger: "#aboutCards", start: "top 80%" },
  });

  // SKILLS
  gsap.from(".skill-block", {
    opacity: 0,
    y: 80,
    stagger: 0.13,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: { trigger: "#skillsGrid", start: "top 78%" },
  });

  // CAREER
  gsap.utils.toArray(".career-item").forEach(function (item) {
    var bar = item.querySelector(".career-item-bar");
    var tl = gsap.timeline({
      scrollTrigger: { trigger: item, start: "top 82%" },
    });
    tl.from(item, { opacity: 0, x: -50, duration: 0.9, ease: "power3.out" }).to(
      bar,
      { scaleY: 1, duration: 1.1, ease: "power2.out" },
      "-=.6",
    );
  });

  // PROJECT LIST
  gsap.from(".plist-row", {
    opacity: 0,
    y: 30,
    stagger: 0.055,
    duration: 0.75,
    ease: "power2.out",
    scrollTrigger: { trigger: "#plistWrap", start: "top 82%" },
  });

  // EDUCATION
  gsap.from(".edu-item", {
    opacity: 0,
    x: -40,
    stagger: 0.16,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: { trigger: "#eduList", start: "top 82%" },
  });

  // CONTACT
  var ctaTL = gsap.timeline({
    scrollTrigger: { trigger: ".contact", start: "top 70%" },
  });
  ctaTL
    .from("#ctaEyebrow", {
      opacity: 0,
      y: 20,
      duration: 0.7,
      ease: "power3.out",
    })
    .from(
      "#ctaHead",
      { 
        opacity: 0, y: 60, duration: 1, ease: "power4.out",
        onStart: function() {
          document.querySelector("#ctaHead").classList.add("active");
        }
      },
      "-=.3",
    )
    .from(
      "#ctaDesc",
      { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" },
      "-=.5",
    );

  // FLOATING BANNER
  // var fb = document.getElementById('floatBanner');
  // var fbClose = document.getElementById('floatClose');

  // // entrance: slide up from bottom after 1.5s
  // gsap.from(fb, { y: 60, opacity: 0, duration: .8, ease: 'power3.out', delay: 1.8 });

  // // hide on scroll near top, show otherwise
  // ScrollTrigger.create({
  //     start: 100,
  //     onEnter: function () { gsap.to(fb, { opacity: 1, y: 0, duration: .4, ease: 'power2.out', pointerEvents: 'all' }); fb.classList.remove('hide'); },
  //     onLeaveBack: function () { fb.classList.add('hide'); }
  // });

  // fbClose.addEventListener('click', function () {
  //     gsap.to(fb, { opacity: 0, y: 16, duration: .4, ease: 'power2.in', onComplete: function () { fb.style.display = 'none'; } });
  // });

  // MODAL
  document.querySelectorAll(".pj-modal").forEach(function (el) {
    el.addEventListener("show.bs.modal", function () {
      if (lenis) lenis.stop();
    });

    el.addEventListener("hidden.bs.modal", function () {
      if (lenis) lenis.start();
    });
  });

  // MODAL: content entrance animation
  document.querySelectorAll(".pj-modal").forEach(function (modal) {
    modal.addEventListener("show.bs.modal", function () {
      var content = modal.querySelector(".modal-content");
      gsap.from(content, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        clearProps: "all",
      });
    });
  });

  const kpSwiper = new Swiper('#kpGrid', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 16,
    speed: 800,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // PROJECT FILTER
  (function () {
    var btns = document.querySelectorAll(".filter-btn");
    var rows = document.querySelectorAll("#plistWrap .plist-row");
    var current = "all";

    function runFilter(filter) {
      current = filter;

      btns.forEach(function (b) {
        b.classList.toggle("is-active", b.dataset.filter === filter);
      });

      var show = [],
        hide = [];
      rows.forEach(function (row) {
        var type = row.dataset.type;
        if (filter === "all" || type === filter) show.push(row);
        else hide.push(row);
      });

      if (hide.length) {
        gsap.to(hide, {
          opacity: 0,
          y: -10,
          duration: 0.25,
          ease: "power2.in",
          onComplete: function () {
            hide.forEach(function (r) {
              r.classList.add("is-hidden");
            });

            ScrollTrigger.refresh();
            lenis.resize();
          },
        });
      }

      show.forEach(function (r) {
        r.classList.remove("is-hidden");
        gsap.set(r, { opacity: 0, y: 14 });
      });
      gsap.to(show, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
        stagger: 0.055,
        delay: hide.length ? 0.22 : 0,
        onComplete: function () {
          ScrollTrigger.refresh();
          lenis.resize();
        },
      });
    }

    // 버튼 클릭 이벤트
    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (btn.dataset.filter === current) return;
        runFilter(btn.dataset.filter);
      });
    });
  })();
});
