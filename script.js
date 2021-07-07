'use strict'

$(function () {
   // Якоря
   $('.header__menu-list').on('click', 'a', function () {
      // Элемент к которому скроллится документ
      let id = $(this).attr('href');

      // Координат целевого элемента, относительно начала документа
      let scroll = $(id).offset().top;
      $('html').animate({ 'scrollTop': scroll }, 800);

   })

   //появление кнопки при скролле
   $(window).scroll(function () {
      // после остановки скролла показать/скрыть стрелку
      setTimeout(function () {
         if ($(this).scrollTop() >= window.innerHeight) {
            $('.scrollBtn').fadeIn(300);
         } else {
            $('.scrollBtn').fadeOut(300);
         }
      }, 0);

   });

   //скролл вверх при клике
   $('.scrollBtn').click(function () {
      $('html').animate({ scrollTop: 0 }, 800);
      return false;
   });

   //показать/спрятать секцию
   let btn = $('.slideBtn');
   btn.click(function () {
      $('.rate__gallery').slideToggle(800, function () {
         if (btn.html() === 'Скрыть') {
            btn.html('Показать');
         } else {
            btn.html('Скрыть');
         }
      });
   })
})






