(function ($) {
    'use strict';

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 2.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#oneMusicNav').classyNav();
    }

    // :: 3.0 Sliders Active Code
    if ($.fn.owlCarousel) {
        var welcomeSlide = $('.hero-slides');
        var testimonials = $('.testimonials-slide');
        var albumSlides = $('.albums-slideshow');

        welcomeSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });

        welcomeSlide.on('translate.owl.carousel', function () {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        welcomeSlide.on('translated.owl.carousel', function () {
            var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        testimonials.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            dots: false,
            autoplay: true
        });

        albumSlides.owlCarousel({
            items: 5,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 750,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    }

    // :: 4.0 Masonary Gallery Active Code
    if ($.fn.imagesLoaded) {
        $('.oneMusic-albums').imagesLoaded(function () {
            // filter items on button click
            $('.catagory-menu').on('click', 'a', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.oneMusic-albums').isotope({
                itemSelector: '.single-album-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single-album-item'
                }
            });
        });
    }

    // :: 5.0 Video Active Code
    if ($.fn.magnificPopup) {
        $('.video--play--btn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
    }

    // :: 6.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }

    // :: 7.0 CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 8.0 Sticky Active Code
    if ($.fn.sticky) {
        $(".oneMusic-main-menu").sticky({
            topSpacing: 0
        });
    }

    // :: 9.0 Progress Bar Active Code
    if ($.fn.circleProgress) {
        $('#circle').circleProgress({
            size: 160,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#000000',
            thickness: '3',
            reverse: true
        });
        $('#circle2').circleProgress({
            size: 160,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#000000',
            thickness: '3',
            reverse: true
        });
        $('#circle3').circleProgress({
            size: 160,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#000000',
            thickness: '3',
            reverse: true
        });
        $('#circle4').circleProgress({
            size: 160,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#000000',
            thickness: '3',
            reverse: true
        });
    }

    // :: 10.0 audioPlayer Active Code
    if ($.fn.audioPlayer) {
        $('audio').audioPlayer();
    }

    // :: 11.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip()
    }

    // :: 12.0 prevent default a click
$('a[href="#"]').on('click', function (e) {
    e.preventDefault();
});

    // :: 13.0 wow Active Code
    if (browserWindow.width() > 767) {
        new WOW().init();
    }
    
    // :: 14.0 Gallery Menu Active Code
    $('.catagory-menu a').on('click', function () {
        $('.catagory-menu a').removeClass('active');
        $(this).addClass('active');
    })
        })(jQuery);
// Modal Controls
const modal = document.getElementById("web-modal");
const openBtn = document.getElementById("open-web");
const goBtn = document.getElementById("go-button");
const closeBtn = document.getElementById("close-web");

function openModal(e) {
    if (e) e.preventDefault();

    if (modal) {
        modal.classList.add("open");
    }
}

function closeModal(e) {
    if (e) e.preventDefault();

    if (modal) {
        modal.classList.remove("open");
    }
}

if (openBtn) {
    openBtn.addEventListener("click", openModal);
}

if (goBtn) {
    goBtn.addEventListener("click", openModal);
}

if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
}

if (modal) {
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}
   

  
        const canvas = document.getElementById("network-canvas");
        if (canvas) {
            const ctx = canvas.getContext("2d");

            let width = canvas.width = window.innerWidth;
            let height = canvas.height = window.innerHeight;

            const palette = {
                blue: "#1d4ed8",
                purple: "#4c1d95",
                orange: "#f97316",
                white: "#f8fafc",
                blueSoft: "rgba(29, 78, 216, 0.35)",
                purpleSoft: "rgba(76, 29, 149, 0.35)",
                orangeSoft: "rgba(249, 115, 22, 0.35)",
                whiteSoft: "rgba(248, 250, 252, 0.2)"
            };

            const navigationNodes = [
                { label: "HOME", url: "/index.html", color: palette.blue, glow: palette.blueSoft, baseAngle: 0.2, distance: 260, size: 13, isBold: true },
                { label: "ABOUT", url: "/about.html", color: palette.blue, glow: palette.blueSoft, baseAngle: 1.7, distance: 290, size: 15, isBold: true },
                { label: "AUDIO", url: "/audio.html", color: palette.blue, glow: palette.blueSoft, baseAngle: 3.4, distance: 265, size: 15, isBold: true  },
                { label: "VIDEO", url: "/video.html", color: palette.blue, glow: palette.blueSoft, baseAngle: 5.2, distance: 300, size: 15, isBold: true },
                { label: "VISUAL", url: "/visual.html", color: palette.blue, glow: palette.blueSoft, baseAngle: 6.8, distance: 270, size: 15, isBold: true },
                { label: "PERFORMANCE", url: "/performance.html", color: palette.blue, glow: palette.blueSoft, baseAngle: 0.9, distance: 155, size: 15, isBold: true },
                
                { label: "EVENTS", url: "/events.html", color: palette.orange, glow: palette.orangeSoft, baseAngle: 2.9, distance: 170, size: 10 },
                { label: "CONTACT", url: "/contact.html", color: palette.white, glow: palette.whiteSoft, baseAngle: 5.1, distance: 165, size: 10 },

                { label: "INSTAGRAM", url: "https://instagram.com", color: palette.purple, glow: palette.purpleSoft, baseAngle: 1.1, distance: 72, size: 6 },
                { label: "SPOTIFY", url: "https://spotify.com", color: palette.purple, glow: palette.purpleSoft, baseAngle: 2.5, distance: 78, size: 6 },
                { label: "SOUNDCLOUD", url: "https://soundcloud.com", color: palette.purple, glow: palette.purpleSoft, baseAngle: 4.2, distance: 82, size: 6 },
                { label: "BOOKING", url: "mailto:booking@egos.com", color: palette.purple, glow: palette.purpleSoft, baseAngle: 5.8, distance: 74, size: 6 }
            ];

            let nodes = [];
            let particles = [];
            let tendrils = [];

            class InteractiveNode {
                constructor(config) {
                    this.label = config.label;
                    this.url = config.url;
                    this.baseAngle = config.baseAngle;
                    this.distance = config.distance;
                    this.color = config.color;
                    this.glow = config.glow;
                    this.radius = config.size;
                    this.size = config.size;
                    this.isBold = config.isBold || false;

                    this.x = 0;
                    this.y = 0;
                    this.hoverScale = 0;
                    this.pulse = 0;
                    this.phase = Math.random() * Math.PI * 2;
                    this.isHovered = false;
                }

                update(time) {
                    const cx = width / 2;
                    const cy = height / 2;

                    const drift = Math.sin(time * 0.00018 + this.phase) * 8;
                    const orbit = this.baseAngle + Math.sin(time * 0.00012 + this.phase) * 0.14;
                    const distance = this.distance + drift;

                    this.x = cx + Math.cos(orbit) * distance;
                    this.y = cy + Math.sin(orbit) * distance;

                    this.pulse = 1 + Math.sin(time * 0.0016 + this.phase) * 0.8;

                    const target = this.isHovered ? 1 : 0;
                    this.hoverScale += (target - this.hoverScale) * 0.08;
                }

                draw() {
                    const glowRadius = this.radius + this.pulse * 7 + this.hoverScale * 12;

                    // soft outer halo
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, glowRadius, 0, Math.PI * 2);
                    ctx.fillStyle = this.glow;
                    ctx.fill();

                    // inner glow bloom
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius + this.pulse * 4 + this.hoverScale * 8, 0, Math.PI * 2);
                    ctx.fillStyle = this.glow.replace("0.35", "0.22").replace("0.2", "0.22");
                    ctx.fill();

                    // node core
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius + this.hoverScale * 4, 0, Math.PI * 2);
                    ctx.fillStyle = this.color;
                    ctx.fill();

                    // soft center highlight
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, Math.max(1.6, this.radius * 0.35), 0, Math.PI * 2);
                    ctx.fillStyle = "rgba(255,255,255,0.8)";
                    ctx.fill();

                    // label
                    ctx.fillStyle = this.color === palette.white ? "#f8fafc" : this.color;
                    ctx.font = this.isBold ? "700 13px Segoe UI, sans-serif" : "600 10px Segoe UI, sans-serif";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.letterSpacing = "0.08em";
                    ctx.globalAlpha = 0.7 + this.hoverScale * 0.25;

                    const labelAngle = Math.atan2(this.y - height / 2, this.x - width / 2);
                    const labelDistance = this.radius + 20 + this.hoverScale * 8;
                    const lx = this.x + Math.cos(labelAngle) * labelDistance;
                    const ly = this.y + Math.sin(labelAngle) * labelDistance;

                    ctx.fillText(this.label, lx, ly);
                    ctx.globalAlpha = 1;
                }

                hitTest(mx, my) {
                    const dist = Math.hypot(this.x - mx, this.y - my);
                    const hitRadius = this.radius + 14 + this.hoverScale * 10;
                    this.isHovered = dist < hitRadius;
                    return this.isHovered;
                }
            }

            class GlitterParticle {
                constructor() {
                    this.x = Math.random() * width;
                    this.y = Math.random() * height;
                    this.vx = (Math.random() - 0.5) * 0.18;
                    this.vy = (Math.random() - 0.5) * 0.18;
                    this.size = Math.random() * 1.8 + 0.5;
                    this.alpha = Math.random() * 0.7 + 0.2;
                    this.phase = Math.random() * Math.PI * 2;
                    this.color = ["#f8fafc", "#1d4ed8", "#4c1d95"][Math.floor(Math.random() * 3)];
                }

                update() {
                    this.x += this.vx;
                    this.y += this.vy;

                    if (this.x < 0 || this.x > width) this.vx *= -1;
                    if (this.y < 0 || this.y > height) this.vy *= -1;

                    this.x = Math.min(width, Math.max(0, this.x));
                    this.y = Math.min(height, Math.max(0, this.y));

                    this.alpha = 0.2 + (Math.sin(performance.now() * 0.0018 + this.phase) + 1) * 0.25;
                }

                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fillStyle = this.color;
                    ctx.globalAlpha = this.alpha;
                    ctx.fill();
                    ctx.globalAlpha = 1;
                }
            }

            class Tendril {
                constructor(a, b) {
                    this.a = a;
                    this.b = b;
                    this.offset = Math.random() * Math.PI * 2;
                    this.baseColor = a.color === palette.white ? palette.white : a.color;
                }

                update(time) {
                    this.offset = time * 0.00008 + this.offset * 0.02;
                }

                draw() {
                    const dx = this.b.x - this.a.x;
                    const dy = this.b.y - this.a.y;
                    const midX = (this.a.x + this.b.x) / 2;
                    const midY = (this.a.y + this.b.y) / 2;
                    const curve = 18;

                    const waveX = midX + Math.sin(this.offset) * curve;
                    const waveY = midY + Math.cos(this.offset * 1.4) * curve;

                    ctx.beginPath();
                    ctx.moveTo(this.a.x, this.a.y);
                    ctx.quadraticCurveTo(waveX, waveY, this.b.x, this.b.y);

                    ctx.strokeStyle = this.baseColor;
                    ctx.lineWidth = 0.7;
                    ctx.globalAlpha = 0.18;
                    ctx.stroke();

                    // faint glow layer
                    ctx.beginPath();
                    ctx.moveTo(this.a.x, this.a.y);
                    ctx.quadraticCurveTo(waveX, waveY, this.b.x, this.b.y);

                    ctx.strokeStyle = this.baseColor;
                    ctx.lineWidth = 2.2;
                    ctx.globalAlpha = 0.04;
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }

            function createTendrils() {
                tendrils = [];
                for (let i = 0; i < nodes.length; i++) {
                    for (let j = i + 1; j < nodes.length; j++) {
                        const distance = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
                        if (distance < 420) {
                            tendrils.push(new Tendril(nodes[i], nodes[j]));
                        }
                    }
                }
            }

            function initScene() {
                nodes = navigationNodes.map(config => new InteractiveNode(config));
                particles = [];

                for (let i = 0; i < 120; i++) {
                    particles.push(new GlitterParticle());
                }

                createTendrils();
            }

            function animate(time) {
                ctx.clearRect(0, 0, width, height);

                particles.forEach(p => p.update());
                nodes.forEach(node => node.update(time));

                // draw tendrils first
                tendrils.forEach(t => t.update(time));
                tendrils.forEach(t => t.draw());

                // draw particles
                particles.forEach(p => p.draw());

                // draw nodes
                nodes.forEach(node => node.draw());

                requestAnimationFrame(animate);
            }

            let lastPointer = { x: 0, y: 0 };
            let pointerActive = false;

            canvas.addEventListener("mousemove", (event) => {
                const rect = canvas.getBoundingClientRect();
                const mx = event.clientX - rect.left;
                const my = event.clientY - rect.top;

                lastPointer.x = mx;
                lastPointer.y = my;
                pointerActive = true;

                let hoverFound = false;
                nodes.forEach(node => {
                    if (node.hitTest(mx, my)) {
                        hoverFound = true;
                    }
                });

                canvas.style.cursor = hoverFound ? "pointer" : "default";
            });

            canvas.addEventListener("mouseleave", () => {
                pointerActive = false;
                nodes.forEach(node => {
                    node.isHovered = false;
                });
                canvas.style.cursor = "default";
            });

            canvas.addEventListener("click", (event) => {
                const rect = canvas.getBoundingClientRect();
                const mx = event.clientX - rect.left;
                const my = event.clientY - rect.top;

                for (const node of nodes) {
                    if (node.hitTest(mx, my)) {
                        window.location.href = node.url;
                        return;
                    }
                }
            });

            window.addEventListener("resize", () => {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
                initScene();
            });

            initScene();
            requestAnimationFrame(animate);
        }

function shareEGos(event) {
    event.preventDefault();

    if (navigator.share) {
        navigator.share({
            title: 'e-Gos Productions',
            text: 'Check out e-Gos Productions',
            url: window.location.href
        });
    } else if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href).then(function() {
            alert('Link copied! You can now paste it anywhere to share e-Gos Productions.');
        });
    } else {
        alert('Copy this page URL to share e-Gos Productions: ' + window.location.href);
    }
}

(function () {
    var selectors = [
        '.hero-image-main',
        '.egos-page-title-image',
        '.egos-internal-hero-content h2',
        '.egos-internal-hero'
    ];

    var target = null;
    for (var i = 0; i < selectors.length && !target; i++) {
        target = document.querySelector(selectors[i]);
    }
    if (!target) { return; }

    document.body.classList.add('header-ready');

    function update() {
        var r = target.getBoundingClientRect();
        // Docked once the title's bottom edge is above the viewport top
        document.body.classList.toggle('header-docked', r.bottom < 60);
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
})();
