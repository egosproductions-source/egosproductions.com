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
            alert('Link copied! You can now paste it anywhere to share e-GoS Productions.');
        });
    } else {
        alert('Copy this page URL to share e-GoS Productions: ' + window.location.href);
    }
}

(function () {
    function updateHeaderLogo() {
        document.body.classList.toggle(
            'header-docked',
            window.scrollY > 100
        );
    }

    window.addEventListener('scroll', updateHeaderLogo, { passive: true });
    window.addEventListener('load', updateHeaderLogo);
    updateHeaderLogo();
})();


/* =========================================
   e-GoS VISUAL GALLERY LIGHTBOX
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("egos-lightbox");

    // Do nothing on pages without the gallery popup
    if (!lightbox) return;

    const lightboxImage = document.getElementById("egos-lightbox-image");
    const lightboxTitle = document.getElementById("egos-lightbox-title");
    const lightboxMedium = document.getElementById("egos-lightbox-medium");
    const closeButton = document.getElementById("egos-lightbox-close");

    const galleryImages = document.querySelectorAll(
        ".egos-visual-grid-item img"
    );

    let previouslyFocusedImage = null;

    function openLightbox(image) {
        previouslyFocusedImage = image;

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt || "";

        lightboxTitle.textContent = image.dataset.title || "";
        lightboxMedium.textContent = image.dataset.medium || "";

        lightboxTitle.style.display =
            image.dataset.title ? "block" : "none";

        lightboxMedium.style.display =
            image.dataset.medium ? "block" : "none";

        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";

        closeButton.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
        lightboxImage.src = "";
        document.body.style.overflow = "";

        if (previouslyFocusedImage) {
            previouslyFocusedImage.focus();
        }
    }

    galleryImages.forEach(function (image) {
        image.setAttribute("tabindex", "0");
        image.setAttribute("role", "button");

        image.addEventListener("click", function () {
            openLightbox(image);
        });

        image.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openLightbox(image);
            }
        });
    });

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (
            event.key === "Escape" &&
            lightbox.classList.contains("is-open")
        ) {
            closeLightbox();
        }
    });
});

  const arrow = document.querySelector('.arrow');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      arrow.classList.add('hidden');
    } else {
      arrow.classList.remove('hidden');
    }
  });
