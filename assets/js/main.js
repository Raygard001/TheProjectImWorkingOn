
  let scene = document.getElementById('scene');
  let parallaxInstance = new Parallax(scene);

  //JQuery
  
document.body.onload = function() {
  setTimeout(function() {
    var preloader = document.getElementById('page_preloader');
    if( !preloader.classList.contains('done') ) {
      preloader.classList.add('done');
    }
  }, 2500);
};
/*
function soundClick() {
  let audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'assets/media/L’Accord — трейлер агента Chamber __ VALORANT.mp3'; // Указываем путь к звуку "клика"
  audio.play(); // Автоматически запускаем
  audio.pause();
};

let foo = document.getElementById('soundcard');
foo.pause();  //just bind play/pause to some onclick events on your page
foo.play();

*/

  //modals

const btnClose = document.getElementById('btn__modal-close'),
      overlay = document.getElementById('modal__overlay'),
      modal = document.getElementById('modal__wrapper'),
      //Amaterasu
      btnOpen1 = document.getElementById('btn__god-1'),
      modalAmaterasu = document.getElementById('modal__window_amaterasu'),
      //Achilles
      btnOpen2 = document.getElementById('btn__god-2'),
      modalAchilles = document.getElementById('modal__window_achilles'),
      //Belona
      btnOpen3 = document.getElementById('btn__god-3'),
      modalBelona = document.getElementById('modal__window_belona'),
      //Vamana
      btnOpen4 = document.getElementById('btn__god-4'),
      modalVamana = document.getElementById('modal__window_vamana'),
      //Gercyles
      btnOpen5 = document.getElementById('btn__god-5'),
      modalGercyles = document.getElementById('modal__window_hercules'),
      //Gilgamesh
      btnOpen6 = document.getElementById('btn__god-6'),
      modalGilgamesh = document.getElementById('modal__window_gilgamesh'),
      //Horus
      btnOpen7 = document.getElementById('btn__god-7'),
      modalHorus = document.getElementById('modal__window_horus'),
      //Guan-Yu
      btnOpen8 = document.getElementById('btn__god-8'),
      modalGuanYu = document.getElementById('modal__window_guan-yu'),
      //King-Arthur
      btnOpen9 = document.getElementById('btn__god-9'),
      modalKingArthur = document.getElementById('modal__window_king-arthur'),
      //Cu-Chulainn
      btnOpen10 = document.getElementById('btn__god-10'),
      modalCuChulainn = document.getElementById('modal__window_cu-chulainn'),
      //Mulan
      btnOpen11 = document.getElementById('btn__god-11'),
      modalMulan = document.getElementById('modal__window_mulan'),
      //Nike
      btnOpen12 = document.getElementById('btn__god-12'),
      modalNike = document.getElementById('modal__window_nike'),
      //Odin
      btnOpen13 = document.getElementById('btn__god-13'),
      modalOdin = document.getElementById('modal__window_odin'),
      //Osiris
      btnOpen14 = document.getElementById('btn__god-14'),
      modalOsiris = document.getElementById('modal__window_osiris'),
      //Sun-Wukong
      btnOpen15 = document.getElementById('btn__god-15'),
      modalSunWukong = document.getElementById('modal__window_sun-wukong'),
      //Tir
      btnOpen16 = document.getElementById('btn__god-16'),
      modalTir = document.getElementById('modal__window_tir'),
      //Chaac
      btnOpen17 = document.getElementById('btn__god-17'),
      modalChaac = document.getElementById('modal__window_chaac'),
      //Erlanп-Shen
      btnOpen18 = document.getElementById('btn__god-18'),
      modalErlanпShen = document.getElementById('modal__window_erlanп-shen');

      btnOpen1.addEventListener('click', () => {
          modal.classList.add('active');
          modalAmaterasu.classList.add('active1');
      });

      btnOpen2.addEventListener('click', () => {
        modal.classList.add('active');
        modalAchilles.classList.add('active1');
      });

      btnOpen3.addEventListener('click', () => {
        modal.classList.add('active');
        modalBelona.classList.add('active1');
      });

      btnOpen4.addEventListener('click', () => {
        modal.classList.add('active');
        modalVamana.classList.add('active1');
      });

      btnOpen5.addEventListener('click', () => {
        modal.classList.add('active');
        modalGercyles.classList.add('active1');
      });

        btnOpen6.addEventListener('click', () => {
        modal.classList.add('active');
        modalGilgamesh.classList.add('active1');
      });

        btnOpen7.addEventListener('click', () => {
        modal.classList.add('active');
        modalHorus.classList.add('active1');
      });

      btnOpen8.addEventListener('click', () => {
        modal.classList.add('active');
        modalGuanYu.classList.add('active1');
      });

      btnOpen9.addEventListener('click', () => {
        modal.classList.add('active');
        modalKingArthur.classList.add('active1');
      });

      btnOpen10.addEventListener('click', () => {
        modal.classList.add('active');
        modalCuChulainn.classList.add('active1');
      });

      btnOpen11.addEventListener('click', () => {
        modal.classList.add('active');
        modalMulan.classList.add('active1');
      });

      btnOpen12.addEventListener('click', () => {
        modal.classList.add('active');
        modalNike.classList.add('active1');
      });

      btnOpen13.addEventListener('click', () => {
        modal.classList.add('active');
        modalOdin.classList.add('active1');
      });

      btnOpen14.addEventListener('click', () => {
        modal.classList.add('active');
        modalOsiris.classList.add('active1');
      });

      btnOpen15.addEventListener('click', () => {
        modal.classList.add('active');
        modalSunWukong.classList.add('active1');
      });

      btnOpen16.addEventListener('click', () => {
        modal.classList.add('active');
        modalTir.classList.add('active1');
      });

      btnOpen17.addEventListener('click', () => {
        modal.classList.add('active');
        modalChaac.classList.add('active1');
      });

      btnOpen18.addEventListener('click', () => {
        modal.classList.add('active');
        modalErlanпShen.classList.add('active1');
      });

  const closeModal = () => {
      modal.classList.remove('active');
      modalAmaterasu.classList.remove('active1');
      modalAchilles.classList.remove('active1');
      modalBelona.classList.remove('active1');
      modalVamana.classList.remove('active1');
      modalGercyles.classList.remove('active1');
      modalGilgamesh.classList.remove('active1');
      modalHorus.classList.remove('active1');
      modalGuanYu.classList.remove('active1');
      modalKingArthur.classList.remove('active1');
      modalCuChulainn.classList.remove('active1');
      modalMulan.classList.remove('active1');
      modalNike.classList.remove('active1');
      modalOdin.classList.remove('active1');
      modalOsiris.classList.remove('active1');
      modalSunWukong.classList.remove('active1');
      modalTir.classList.remove('active1');
      modalChaac.classList.remove('active1');
      modalErlanпShen.classList.remove('active1');
  }

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// TABS
$('.button-block').on('click', function (event) {
    event.preventDefault();
    var currTab = $(this).index();

    $('.button-block').removeClass('active');
    $(this).addClass('active');

    $('.tab__icons-gods-bloc_animatic').removeClass('active');
    $('.tab__icons-gods-bloc_animatic').eq(currTab).addClass('active');
});


// @globalAudio - переменная аудио
 const globalAudio = document.getElementById('audiofail');


function playAudioMut() {
     globalAudio.pause();
};

//The function randomly selects one 
//Функция рандомно выбирает одного елемента
//Убийца
var variants2 = Array.from(document.querySelectorAll('.icon-gods_static_status-assassins'));
    function rand2() {
    var index2 = Math.floor(Math.random()*variants2.length);
    variants2.forEach(div => div.classList.remove('active2'));
    variants2[index2].classList.add('active1');
    variants2[index2].classList.add('active2');
  }

  function cleerAssassins() {
    variants2.forEach(div => div.classList.remove('active1'));
    variants2.forEach(div => div.classList.remove('active2'));
};
//Воин
var variants = Array.from(document.querySelectorAll('.icon-gods_static_status'));
    function rand1() {
      var index = Math.floor(Math.random()*variants.length);
      variants.forEach(div => div.classList.remove('active2'));
      variants[index].classList.add('active1');
      variants[index].classList.add('active2');
    }

    function cleerWariors() {
      variants.forEach(div => div.classList.remove('active1'));
      variants.forEach(div => div.classList.remove('active2'));
};

//Страж
var variants1 = Array.from(document.querySelectorAll('.icon-gods_static_status-guardian'));
    function rand() {
      var index1 = Math.floor(Math.random()*variants1.length);
      variants1.forEach(div => div.classList.remove('active2'));
      variants1[index1].classList.add('active1');
      variants1[index1].classList.add('active2');
    }

    function cleerGuardian() {
      variants1.forEach(div => div.classList.remove('active1'));
      variants1.forEach(div => div.classList.remove('active2'));
};

//Маг
var variants3 = Array.from(document.querySelectorAll('.icon-gods_static_status-magic'));
    function rand3() {
      var index3 = Math.floor(Math.random()*variants3.length);
      variants3.forEach(div => div.classList.remove('active2'));
      variants3[index3].classList.add('active1');
      variants3[index3].classList.add('active2');
    }

    function cleerMagic() {
      variants3.forEach(div => div.classList.remove('active1'));
      variants3.forEach(div => div.classList.remove('active2'));
};

//Охотник
var variants4 = Array.from(document.querySelectorAll('.icon-gods_static_status-hunter'));
    function rand4() {
      var index4 = Math.floor(Math.random()*variants4.length);
      variants4.forEach(div => div.classList.remove('active2'));
      variants4[index4].classList.add('active1');
      variants4[index4].classList.add('active2');
    }

    function cleerHunter() {
      variants4.forEach(div => div.classList.remove('active1'));
      variants4.forEach(div => div.classList.remove('active2'));
};