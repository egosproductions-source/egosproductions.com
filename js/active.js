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
var slideLayer =
welcomeSlide.find('.owl-item.active').find("[data-animation]");
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
{ label: "HOME", url: "/index.html", color: palette.blue, glow:
palette.blueSoft, baseAngle: 0.2, distance: 260, size: 13, isBold: true },
{ label: "ABOUT", url: "/about.html", color: palette.blue, glow:
palette.blueSoft, baseAngle: 1.7, distance: 290, size: 15, isBold: true },
{ label: "AUDIO", url: "/audio.html", color: palette.blue, glow:
palette.blueSoft, baseAngle: 3.4, distance: 265, size: 15, isBold: true },
{ label: "VIDEO", url: "/video.html", color: palette.blue, glow:
palette.blueSoft, baseAngle: 5.2, distance: 300, size: 15, isBold: true },
{ label: "VISUAL", url: "/visual.html", color: palette.blue, glow:
palette.blueSoft, baseAngle: 6.8, distance: 270, size: 15, isBold: true },
{ label: "PERFORMANCE", url: "/performance.html", color:
palette.blue, glow: palette.blueSoft, baseAngle: 0.9, distance: 155, size: 15,
isBold: true },
{ label: "EVENTS", url: "/events.html", color: palette.orange, glow:
palette.orangeSoft, baseAngle: 2.9, distance: 170, size: 10 },
{ label: "CONTACT", url: "/contact.html", color: palette.white,
glow: palette.whiteSoft, baseAngle: 5.1, distance: 165, size: 10 },
{ label: "INSTAGRAM", url: "https://instagram.com", color:
palette.purple, glow: palette.purpleSoft, baseAngle: 1.1, distance: 72, size: 6 },
{ label: "SPOTIFY", url: "https://spotify.com", color:
palette.purple, glow: palette.purpleSoft, baseAngle: 2.5, distance: 78, size: 6 },
{ label: "SOUNDCLOUD", url: "https://soundcloud.com", color:
palette.purple, glow: palette.purpleSoft, baseAngle: 4.2, distance: 82, size: 6 },
{ label: "BOOKING", url: "mailto:booking@egos.com", color:
palette.purple, glow: palette.purpleSoft, baseAngle: 5.8, distance: 74, size: 6 }
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
const orbit = this.baseAngle + Math.sin(time * 0.00012 +
this.phase) * 0.14;
const distance = this.distance + drift;
this.x = cx + Math.cos(orbit) * distance;
this.y = cy + Math.sin(orbit) * distance;
this.pulse = 1 + Math.sin(time * 0.0016 + this.phase) * 0.8;
const target = this.isHovered ? 1 : 0;
this.hoverScale += (target - this.hoverScale) * 0.08;
}
draw() {
const glowRadius = this.radius + this.pulse * 7 +
this.hoverScale * 12;
// soft outer halo
ctx.beginPath();
ctx.arc(this.x, this.y, glowRadius, 0, Math.PI * 2);
ctx.fillStyle = this.glow;
ctx.fill();
// inner glow bloom
ctx.beginPath();
ctx.arc(this.x, this.y, this.radius + this.pulse * 4 +
this.hoverScale * 8, 0, Math.PI * 2);
ctx.fillStyle = this.glow.replace("0.35", "0.22").replace("0.2",
"0.22");
ctx.fill();
// node core
ctx.beginPath();
ctx.arc(this.x, this.y, this.radius + this.hoverScale * 4, 0,
Math.PI * 2);
ctx.fillStyle = this.color;
ctx.fill();
// soft center highlight
ctx.beginPath();
ctx.arc(this.x, this.y, Math.max(1.6, this.radius * 0.35), 0,
Math.PI * 2);
ctx.fillStyle = "rgba(255,255,255,0.8)";
ctx.fill();
// label
ctx.fillStyle = this.color === palette.white ? "#f8fafc" :
this.color;
ctx.font = this.isBold ? "700 13px Segoe UI, sans-serif" : "600 10px Segoe UI, sans-serif";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.letterSpacing = "0.08em";
ctx.globalAlpha = 0.7 + this.hoverScale * 0.25;
const labelAngle = Math.atan2(this.y - height / 2, this.x -
width / 2);
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
this.color = ["#f8fafc", "#1d4ed8",
"#4c1d95"][Math.floor(Math.random() * 3)];
}
update() {
this.x += this.vx;
this.y += this.vy;
if (this.x < 0 || this.x > width) this.vx *= -1;
if (this.y < 0 || this.y > height) this.vy *= -1;
this.x = Math.min(width, Math.max(0, this.x));
this.y = Math.min(height, Math.max(0, this.y));
this.alpha = 0.2 + (Math.sin(performance.now() * 0.0018 +
this.phase) + 1) * 0.25;
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
this.baseColor = a.color === palette.white ? palette.white :
a.color;
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
const distance = Math.hypot(nodes[i].x - nodes[j].x,
nodes[i].y - nodes[j].y);
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
title: 'e-GoS Productions',
text: 'Check out e-GoS Productions',
url: window.location.href
});
} else if (navigator.clipboard) {
navigator.clipboard.writeText(window.location.href).then(function() {alert('Link copied! You can now paste it anywhere to share e-GoS Productions.');
});
} else {
alert('Copy this page URL to share e-GoS Productions: ' +
window.location.href);
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

var arrow = document.querySelector('.arrow');
if (arrow) {
const arrow = document.querySelector('.arrow');
window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
arrow.classList.add('hidden');
} else {
arrow.classList.remove('hidden');
}
});

}

class Carousel {
  constructor(id, imageArray, {
    autoplay, aspectRatio, imageSize, transition, indicatorBar } =
  {}) {
    this.dom = {};
    this.imageArray = imageArray;

    this.settings = {
      autoplay: autoplay || null,
      aspectRatio: aspectRatio || '4:3',
      imageSize: imageSize || 'contain',
      transition: transition || 'horizontal',
      indicatorBar: indicatorBar || 'interior' };


    this.state = {
      id,
      quantity: 0,
      slidesArr: [],
      isSliding: false,
      direction: '',
      currentImage: {},
      currentMarker: null };


    this.viewport = {};

    this.touchCtrls = {
      slideOffset: {
        top: null,
        bottom: null,
        left: null,
        right: null },

      viewmasterFactor: null,
      startX: null,
      startY: null,
      distX: null,
      distY: null,
      startD: null,
      duration: null,
      slides: [],
      scheduledAnimationFrame: false };


    this.rafManager = this.rafManager.bind(this);

    this.init(this.imageArray);
  }

  init() {
    // inject carousel html into dom
    this.createCarouselElements();

    // cache carousel elements from dom
    this.dom.carousel = document.querySelector(`#${this.state.id}.carousel`);
    this.dom.leftControl = this.dom.carousel.querySelector('.carousel__controls--left');
    this.dom.rightControl = this.dom.carousel.querySelector('.carousel__controls--right');
    if (this.settings.indicatorBar !== 'off') {
      this.dom.indicatorBar = this.settings.indicatorBar === 'interior' ?
      this.dom.carousel.querySelector('.carousel__indicator-bar--interior') :
      this.dom.carousel.querySelector('.carousel__indicator-bar--exterior');
    }

    this.dom.viewport = this.dom.carousel.querySelector('.carousel__viewport');
    this.dom.viewportWrapper = this.dom.carousel.querySelector('.carousel__viewport-wrapper');

    // bind controller events
    this.dom.leftControl.addEventListener('mousedown', this.backward.bind(this));
    this.dom.rightControl.addEventListener('mousedown', this.forward.bind(this));
    this.dom.carousel.addEventListener('keydown', this.keyDownControls.bind(this));

    // bind touch events
    this.dom.viewportWrapper.addEventListener('touchstart', this.rafManager, false);
    this.dom.viewportWrapper.addEventListener('touchend', this.rafManager, false);

    if (this.imageArray) this.buildCarousel();
  }

  rafManager(e) {
    e.preventDefault();
    switch (e.type) {
      case 'touchmove':
        if (this.touchCtrls.scheduledAnimationFrame) return;
        this.touchCtrls.scheduledAnimationFrame = true;
        requestAnimationFrame(() => {
          this.touchMoveRenders(e);
        });
        break;
      case 'touchend':
        requestAnimationFrame(() => {
          this.touchEndRenders(e);
        });
        break;
      default:
        requestAnimationFrame(() => {
          this.touchStartRenders(e);
        });}

  }

  createCarouselElements() {
    const carouselElements = `
      <div class="carousel__viewport-wrapper">
        <button type="button" class="carousel__controls carousel__controls--left">
          <div class="carousel__focus-ring"></div>
          <div class="carousel__controls-background carousel__controls-background--arrow"></div>
          <svg class="carousel__icon-left" viewBox="0 0 62.826 169.29">
            <g transform="translate(370.32 -123.05)">
              <path
                d="m-312.54 287.28c-52.709-78.69-52.709-78.69-52.709-78.69m52.709-80.481c-52.747 80.11-52.747 80.11-52.747 80.11"
                style="fill:none;stroke-linecap:round;stroke-width:10"
              />
            </g>
          </svg>
        </button>
        <button type="button" class="carousel__controls carousel__controls--right">
          <div class="carousel__focus-ring"></div>
          <div class="carousel__controls-background carousel__controls-background--arrow"></div>
          <svg class="carousel__icon-right" viewBox="0 0 62.826 169.29">
            <g transform="translate(370.32 -123.05)">
              <path
                d="m-365.28 287.28c52.709-78.69 52.709-78.69 52.709-78.69m-52.709-80.481c52.747 80.11 52.747 80.11 52.747 80.11"
                style="fill:none;stroke-linecap:round;stroke-width:10"
              />
            </g>
          </svg>
        </button>
        ${this.settings.indicatorBar === 'interior' ? `
          <div class="carousel__indicator-bar carousel__indicator-bar--interior">
            <div class="carousel__controls-background carousel__controls-background--indicator"></div>
          </div>
        ` : ''}

        <div class="carousel__viewport"></div>
      </div>
        ${this.settings.indicatorBar === 'exterior' ? '<div class="carousel__indicator-bar carousel__indicator-bar--exterior"></div>' : ''}
    `;
    document.getElementById(this.state.id).innerHTML = carouselElements;
  }

  buildCarousel() {
    // update quantity
    this.state.quantity = this.imageArray.length;

    // clear and build slides
    while (this.dom.viewport.firstChild) {
      this.dom.viewport.removeChild(this.dom.viewport.firstChild);
    }
    this.buildSlides();

    // push img nodelist into slidesArr as objects with id and pos
    this.state.slidesArr = [];
    for (let i = 0; i < this.state.quantity; i++) {
      this.state.slidesArr.push({ id: i, pos: i });
    }

    // remove controls for single image display
    if (this.state.quantity === 1) {
      this.dom.leftControl.classList.add('hidden');
      this.dom.rightControl.classList.add('hidden');
      if (this.dom.indicatorBar) this.dom.indicatorBar.classList.add('hidden');
      return;
    }
    this.dom.leftControl.classList.remove('hidden');
    this.dom.rightControl.classList.remove('hidden');

    if (this.dom.indicatorBar) {
      this.dom.indicatorBar.classList.remove('hidden');

      // clear and build indicatorBar
      if (this.dom.indicatorBar.contains(document.querySelector('.carousel__indicator-wrapper'))) {
        this.dom.indicatorBar.removeChild(document.querySelector('.carousel__indicator-wrapper'));
      }
      this.buildindicatorBar();
    }

    // render default positioning
    this.initialRender();
  }

  buildSlides() {
    let imageReel = '';
    this.imageArray.forEach(el => {
      const slideString = `
      <div class="carousel__slide-container">
        <div class="carousel__slide-wrapper">
          <img class="carousel__slide" src="${el.url}" alt="${el.alt}">
          <div class="carousel__slide-overlay"></div>
        </div>
      </div>
      `;
      imageReel += slideString;
    });
    this.dom.viewport.insertAdjacentHTML(
    'beforeend',
    imageReel);


    this.dom.slideContainers = [...this.dom.carousel.querySelectorAll('.carousel__slide-container')];

    this.dom.slides = this.dom.slideContainers.map(val => ({
      wrapper: val.querySelector('.carousel__slide-wrapper'),
      img: val.querySelector('.carousel__slide') }));


    this.dom.slides.forEach(val => {
      const poll = setInterval(() => {
        if (val.img.naturalWidth) {
          clearInterval(poll);
          this.addOrientationStyles(val);
        }
      }, 10);
    });
  }

  addOrientationStyles(slide) {
    const imgAspectRatioQuotient = (slide.img.naturalWidth / slide.img.naturalHeight).toFixed(2);
    const viewAspectRatioQuotient = (() => {
      const [x, y] = this.settings.aspectRatio.split(':').map(el => parseInt(el, 10));
      return (x / y).toFixed(2);
    })();

    if (this.settings.imageSize === 'contain') {
      if (imgAspectRatioQuotient > viewAspectRatioQuotient) {
        slide.wrapper.classList.add('carousel__slide-wrapper--landscape');
        const wrapperHeight = viewAspectRatioQuotient / imgAspectRatioQuotient * 100;
        slide.wrapper.style.height = `${wrapperHeight}%`;
      } else if (imgAspectRatioQuotient < viewAspectRatioQuotient) {
        slide.wrapper.classList.add('carousel__slide-wrapper--portrait');
        const wrapperWidth = imgAspectRatioQuotient / viewAspectRatioQuotient * 100;
        slide.wrapper.style.width = `${wrapperWidth}%`;
      } else {
        slide.wrapper.classList.add('carousel__slide-wrapper--landscape', 'carousel__slide-wrapper--portrait');
      }
    } else if (imgAspectRatioQuotient > viewAspectRatioQuotient) {
      slide.wrapper.classList.add('carousel__slide-wrapper--portrait');
      const wrapperWidth = imgAspectRatioQuotient / viewAspectRatioQuotient * 100;
      slide.wrapper.style.width = `${wrapperWidth}%`;
    } else if (imgAspectRatioQuotient < viewAspectRatioQuotient) {
      slide.wrapper.classList.add('carousel__slide-wrapper--landscape');

      const wrapperHeight = viewAspectRatioQuotient / imgAspectRatioQuotient * 100;
      slide.wrapper.style.height = `${wrapperHeight}%`;
    } else {
      slide.wrapper.classList.add('carousel__slide-wrapper--landscape', 'carousel__slide-wrapper--portrait');
    }
  }

  buildindicatorBar() {
    const indicatorMarker = '<div class="carousel__indicator-marker"></div>';
    let indicatorString = '';
    for (let i = 0; i < this.state.quantity; i++) {
      indicatorString += indicatorMarker;
    }
    const indicatorWrapper = `
      <div class="carousel__indicator-wrapper">
        ${indicatorString}
      </div>`;
    this.dom.indicatorBar.insertAdjacentHTML(
    'beforeend',
    indicatorWrapper);

    document.querySelector('.carousel__indicator-wrapper').addEventListener('click', this.jumpToMarker.bind(this));
    this.dom.indicatorMarkers = [...document.querySelectorAll('.carousel__indicator-marker')];
  }

  updateindicatorBar() {
    if (this.state.currentMarker) {
      this.state.currentMarker.classList.remove('carousel__indicator-marker--active');
    }
    this.state.currentMarker = this.dom.indicatorMarkers[this.state.slidesArr[1].id];
    this.state.currentMarker.classList.add('carousel__indicator-marker--active');
  }

  initialRender() {
    this.state.slidesArr.forEach(el => {
      el.pos === this.state.quantity - 1 ? el.pos = 0 : el.pos += 1;
    });
    this.sortImageArray();
    this.dom.slideContainers[this.state.slidesArr[0].id].classList.add('prev');
    this.dom.slideContainers[this.state.slidesArr[0].id].classList.add('hide');
    if (this.state.quantity > 2) {
      for (let i = 2; i < this.state.quantity; i++) {
        this.dom.slideContainers[this.state.slidesArr[i].id].classList.add('hide');
        this.dom.slideContainers[this.state.slidesArr[i].id].classList.add('queue');
      }
    }
    if (this.dom.indicatorBar) this.updateindicatorBar();

    if (this.settings.autoplay) {
      this.initializeAutoplay();
    }
  }

  initializeAutoplay() {
    let autoplay = setInterval(() => {
      this.forward();
    }, this.settings.autoplay);

    this.dom.viewportWrapper.addEventListener('mouseenter', () => {
      clearInterval(autoplay);
    });
    this.dom.viewportWrapper.addEventListener('mouseleave', () => {
      autoplay = setInterval(() => {
        this.forward();
      }, this.settings.autoplay);
    });
    this.dom.viewportWrapper.addEventListener('touchstart', () => {
      clearInterval(autoplay);
    });
    this.dom.viewportWrapper.addEventListener('touchend', () => {
      autoplay = setInterval(() => {
        this.forward();
      }, this.settings.autoplay);
    });
  }

  jumpToMarker(e) {
    let jumpAmount;
    let jumpInterval;
    let jumpTicker = 1;
    if (e.target.classList.contains('carousel__indicator-marker')) {
      this.dom.slideContainers.forEach(el => el.classList.add('carousel__slide-container--jumper'));

      jumpAmount = this.dom.indicatorMarkers.indexOf(e.target) - this.dom.indicatorMarkers.indexOf(this.state.currentMarker);

      if (jumpAmount > 0) {
        this.forward(e);
        jumpInterval = setInterval(function () {
          if (jumpTicker === jumpAmount) {
            clearInterval(jumpInterval);
            this.dom.slideContainers.forEach(el => el.classList.remove('carousel__slide-container--jumper'));
            return;
          }
          this.forward(e);
          jumpTicker++;
        }.bind(this), 75);
      } else {
        jumpAmount = jumpAmount * -1;
        this.backward(e);
        jumpInterval = setInterval(function () {
          if (jumpTicker === jumpAmount) {
            clearInterval(jumpInterval);
            this.dom.slideContainers.forEach(el => el.classList.remove('carousel__slide-container--jumper'));
            return;
          }
          this.backward(e);
          jumpTicker++;
        }.bind(this), 75);
      }
    }
  }

  touchStartRenders(e) {
    this.viewport = this.dom.viewportWrapper.getBoundingClientRect();

    if (this.settings.transition === 'viewmaster' || this.settings.transition === 'horizontal') {
      this.touchCtrls.slideOffset.left = this.viewport.left - this.viewport.width;
      this.touchCtrls.slideOffset.right = this.viewport.left + this.viewport.width;
    }
    if (this.settings.transition === 'vertical') {
      this.touchCtrls.slideOffset.top = this.viewport.top - this.viewport.height;
      this.touchCtrls.slideOffset.bottom = this.viewport.top + this.viewport.height;
    }
    if (this.settings.transition === 'viewmaster') {
      this.touchCtrls.viewmasterFactor = this.viewport.height / 2 / this.viewport.width;
    }
    this.touchCtrls.slides = [
    this.dom.slideContainers[this.state.slidesArr[0].id],
    this.dom.slideContainers[this.state.slidesArr[1].id],
    this.dom.slideContainers[this.state.slidesArr[2].id]];

    const d = new Date();
    this.touchCtrls.startD = d.getTime();
    const touchobj = e.touches[0];
    this.touchCtrls.startX = parseInt(touchobj.clientX, 10);
    this.touchCtrls.startY = parseInt(touchobj.clientY, 10);
    if (this.settings.transition !== 'dissolve') {
      this.touchCtrls.slides.forEach(val => {
        val.classList.add('carousel__slide-container--no-trans');
        val.classList.remove('hide');
      });
    }

    this.dom.viewportWrapper.addEventListener('touchmove', this.rafManager, false);
  }

  touchMoveRenders(e) {
    let viewportWidth;let viewportHeight;
    const touch = this.touchCtrls;
    const touchobj = e.touches[0];
    if (document.elementFromPoint(touchobj.clientX, touchobj.clientY) !== e.target) {
      touch.scheduledAnimationFrame = false;
      requestAnimationFrame(() => {
        this.touchEndRenders(e);
      });
      return;
    }
    if (this.viewport.width) {
      viewportWidth = parseFloat(this.viewport.width.toFixed(1));
    }
    if (this.viewport.height) {
      viewportHeight = parseFloat(this.viewport.height.toFixed(1));
    }
    if (this.settings.transition !== 'vertical') {
      touch.distX = parseInt(touchobj.clientX, 10) - touch.startX;
    }
    switch (this.settings.transition) {
      case 'viewmaster':
        if (touch.distX > 0) {
          touch.slides[1].style.transform = `translate(${touch.distX}px, ${touch.distX * touch.viewmasterFactor}px)`;
        } else {
          touch.slides[1].style.transform = `translate(${touch.distX}px, ${touch.distX * -touch.viewmasterFactor}px)`;
        }
        if (touch.slideOffset.left + touch.distX >= touch.slideOffset.left) {
          touch.slides[0].style.transform = `translate(${touch.distX - viewportWidth}px, ${viewportHeight * 0.5 - touch.distX * touch.viewmasterFactor}px)`;
        } else {
          touch.slides[0].style.transform = null;
        }
        if (touch.slideOffset.right + touch.distX <= touch.slideOffset.right) {
          touch.slides[2].style.transform = `translate(${viewportWidth + touch.distX}px, ${viewportHeight * 0.5 + touch.distX * touch.viewmasterFactor}px)`;
        } else {
          touch.slides[2].style.transform = null;
        }
        break;
      case 'vertical':
        touch.distY = parseInt(touchobj.clientY, 10) - touch.startY;
        touch.slides[1].style.transform = `translate(0, ${touch.distY}px)`;
        if (touch.slideOffset.top + touch.distY >= touch.slideOffset.top) {
          touch.slides[0].style.transform = `translate(0, ${touch.distY - viewportHeight}px)`;
        } else {
          touch.slides[0].style.transform = null;
        }
        if (touch.slideOffset.bottom + touch.distY <= touch.slideOffset.bottom) {
          touch.slides[2].style.transform = `translate(0, ${viewportHeight + touch.distY}px)`;
        } else {
          touch.slides[2].style.transform = null;
        }
        break;
      case 'dissolve':
        break;
      default:
        touch.slides[1].style.transform = `translate(${touch.distX}px, 0)`;
        if (touch.slideOffset.left + touch.distX >= touch.slideOffset.left) {
          touch.slides[0].style.transform = `translate(${touch.distX - viewportWidth}px, 0)`;
        } else {
          touch.slides[0].style.transform = null;
        }
        if (touch.slideOffset.right + touch.distX <= touch.slideOffset.right) {
          touch.slides[2].style.transform = `translate(${viewportWidth + touch.distX}px, 0)`;
        } else {
          touch.slides[2].style.transform = null;
        }}

    touch.scheduledAnimationFrame = false;
  }

  touchEndRenders(e) {
    this.dom.viewportWrapper.removeEventListener('touchmove', this.rafManager, false);

    const dist = this.settings.transition === 'vertical' ?
    this.touchCtrls.distY :
    this.touchCtrls.distX;
    const threshold = this.settings.transition === 'vertical' ?
    this.viewport.height * 0.4 :
    this.viewport.width * 0.4;

    this.touchCtrls.slides.forEach(val => {
      val.classList.remove('carousel__slide-container--no-trans');
      val.style.transform = null;
    });
    const d = new Date();
    this.touchCtrls.duration = d.getTime() - this.touchCtrls.startD;
    if (this.touchCtrls.duration < 200 && Math.abs(dist) > 70) {
      if (this.settings.transition !== 'dissolve') {
        this.touchCtrls.slides.forEach(val => {
          val.classList.add('carousel__slide-container--flick-trans');
        });
      }
      if (dist > 0) this.backward(e);
      if (dist < 0) this.forward(e);
    } else if (Math.abs(dist) > threshold) {
      if (dist > 0) this.backward(e);
      if (dist < 0) this.forward(e);
    }

    // reset all touchCtrls
    this.touchCtrls.distX = null;
    this.touchCtrls.distY = null;
    [...Object.keys(this.touchCtrls.slideOffset)].forEach(val => {
      this.touchCtrls.slideOffset[val] = null;
    });
  }

  backwardRender() {
    if (this.state.quantity === 2) {
      this.dom.slideContainers[this.state.slidesArr[1].id].classList.remove('queue');
      this.dom.slideContainers[this.state.slidesArr[1].id].classList.add('prev');
      this.dom.slideContainers[this.state.slidesArr[0].id].classList.add('queue');

      setTimeout(function () {
        this.dom.slideContainers[this.state.slidesArr[1].id].classList.remove('hide');
        this.dom.slideContainers[this.state.slidesArr[1].id].classList.remove('prev');
      }.bind(this), 1);
    } else {
      this.dom.slideContainers[this.state.slidesArr[0].id].classList.add('hide');
      this.dom.slideContainers[this.state.slidesArr[0].id].classList.add('prev');

      this.dom.slideContainers[this.state.slidesArr[0].id].classList.remove('queue');
      this.dom.slideContainers[this.state.slidesArr[1].id].classList.remove('hide');
      this.dom.slideContainers[this.state.slidesArr[1].id].classList.remove('prev');
      this.dom.slideContainers[this.state.slidesArr[2].id].classList.add('queue');
    }
  }

  forwardRender() {
    if (this.state.quantity === 2) {
      this.dom.slideContainers[this.state.slidesArr[0].id].classList.add('prev');
      this.dom.slideContainers[this.state.slidesArr[1].id].classList.remove('prev');
      this.dom.slideContainers[this.state.slidesArr[1].id].classList.add('queue');

      setTimeout(function () {
        this.dom.slideContainers[this.state.slidesArr[1].id].classList.remove('hide');
        this.dom.slideContainers[this.state.slidesArr[1].id].classList.remove('queue');
      }.bind(this), 1);
    } else {
      this.dom.slideContainers[this.state.slidesArr[0].id].classList.add('prev');
      this.dom.slideContainers[this.state.slidesArr[1].id].classList.remove('hide');
      this.dom.slideContainers[this.state.slidesArr[1].id].classList.remove('queue');
      this.dom.slideContainers[this.state.slidesArr[this.state.quantity - 1].id].classList.add('hide');
      this.dom.slideContainers[this.state.slidesArr[this.state.quantity - 1].id].classList.add('queue');
      this.dom.slideContainers[this.state.slidesArr[this.state.quantity - 1].id].classList.remove('prev');
    }
  }

  backward(e) {
    if (e) {
      if (!e.target.classList.contains('carousel__indicator-marker')) {
        if (e.type === 'mousedown' && e.buttons !== 1) return;
        e.preventDefault();
        if (this.state.isSliding) return;
        this.state.isSliding = true;
        this.state.direction = 'backward';
      }
    }

    // adding handler to current slide will disable controls during animation
    this.state.currentImage = this.dom.slideContainers[this.state.slidesArr[1].id];
    this.boundSliderTransitionend = this.sliderTransitionend.bind(this);
    this.state.currentImage.addEventListener('transitionend', this.boundSliderTransitionend);

    // update, sort, and render new positions
    this.state.slidesArr.forEach(el => {
      el.pos === this.state.quantity - 1 ? el.pos = 0 : el.pos += 1;
    });
    this.sortImageArray();
    this.backwardRender();
  }

  forward(e) {
    if (e) {
      if (!e.target.classList.contains('carousel__indicator-marker')) {
        if (e.type === 'mousedown' && e.buttons !== 1) return;
        e.preventDefault();
        if (this.state.isSliding) {return;}
        this.state.isSliding = true;
        this.state.direction = 'forward';
      }
    }

    // adding handler to current slide will disable controls during animation
    this.state.currentImage = this.dom.slideContainers[this.state.slidesArr[1].id];
    this.boundSliderTransitionend = this.sliderTransitionend.bind(this);
    this.state.currentImage.addEventListener('transitionend', this.boundSliderTransitionend);

    // update, sort, and render new positions
    this.state.slidesArr.forEach(el => {
      el.pos === 0 ? el.pos = this.state.quantity - 1 : el.pos -= 1;
    });
    this.sortImageArray();
    this.forwardRender();
  }

  sliderTransitionend() {
    this.state.isSliding = false;
    if (this.state.quantity === 2 && this.state.direction === 'backward') {
      this.dom.slideContainers[this.state.slidesArr[0].id].classList.add('hide');
      this.dom.slideContainers[this.state.slidesArr[0].id].classList.remove('queue');
      this.dom.slideContainers[this.state.slidesArr[0].id].classList.add('prev');
    }
    if (this.state.quantity === 2 && this.state.direction === 'forward') {
      this.dom.slideContainers[this.state.slidesArr[0].id].classList.add('hide');
      this.dom.slideContainers[this.state.slidesArr[0].id].classList.remove('prev');
      this.dom.slideContainers[this.state.slidesArr[0].id].classList.add('queue');
    }
    this.touchCtrls.slides.forEach(val => val.classList.remove('carousel__slide-container--flick-trans'));
    if (this.dom.indicatorBar) this.updateindicatorBar();
    this.state.currentImage.removeEventListener('transitionend', this.boundSliderTransitionend);
  }

  keyDownControls(e) {
    if (!e.target.classList.contains('carousel__controls')) return;
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      if (e.target.classList.contains('carousel__controls--left')) {
        this.backward(e);
      } else {
        this.forward(e);
      }
    }
    if (e.key === 'ArrowLeft' || e.key === 'Left') {
      this.dom.leftControl.focus();
      this.backward(e);
    }
    if (e.key === 'ArrowRight' || e.key === 'Right') {
      this.dom.rightControl.focus();
      this.forward(e);
    }
  }

  sortImageArray() {
    function compare(a, b) {
      if (a.pos < b.pos) return -1;
      if (a.pos > b.pos) return 1;
      return 0;
    }
    this.state.slidesArr.sort(compare);
  }}
new Carousel(
	egos,
	[yourImageArrayHere],
	{ autoplay: '5000', aspectRatio: '16:9' }
)
