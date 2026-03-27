import './styles/main.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { initNavbar, initHamburger } from './components/navbar';
import { initScrollReveal } from './components/scrollReveal';
import { initLightbox } from './components/lightbox';
import { initAccordion } from './components/accordion';
import { initCalendar } from './components/calendar';
import { initMap } from './components/mapbox';
import './components/forms';

const images = [
  'images/lembongan/theshambalalembongan_1672121282_3002293380627105059_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1672125777_3002331084651827613_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1672127147_3002342577061507973_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1672188858_3002860249184530060_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1672202192_3002972101575062604_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1672202815_3002977326922750063_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1672203051_3002979308664457978_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1674023532_3018250609255565419_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1674024181_3018256054619842624_56937094430_3.jpg',
  'images/lembongan/theshambalalembongan_1674024181_3018256054628204025_56937094430_2.jpg',
  'images/lembongan/theshambalalembongan_1674024181_3018256054636600912_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1674109359_3018970578012418029_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1674473920_3022028735496558522_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1674545971_3022633141103238185_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1677312076_3045836915299191370_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1677496083_3047380476431362713_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1677754034_3049544323854868066_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1678860494_3058825987248481057_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1681969696_3084907864505874775_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1683785484_3100139800924944424_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1684560651_3106642366605046472_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1693043434_3177801113110090985_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1694127340_3186893573308312708_56937094430_1.jpg',
];

initNavbar();
initHamburger();
initScrollReveal();
initLightbox(images);
initAccordion();
initCalendar({ containerId: 'lem-cal-wrap', prevBtnId: 'lem-prev', nextBtnId: 'lem-next', villaKey: 'lembongan' });
initMap('villa-map', 115.4278918, -8.6838351);
