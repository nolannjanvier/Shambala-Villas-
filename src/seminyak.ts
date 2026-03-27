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
  'images/seminyak/shambalavillabali_1650000064_2816727150481957683_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1650098269_2817550956121490971_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1651908037_2832732394051546210_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1651916836_2832806198383715403_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1670231906_2986444142716725154_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1670462036_2988374613089862684_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1670482068_2988542657773266270_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1670736230_2990674721196902341_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1674805499_3024810222090515448_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1677373908_3046355602491495638_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1679969020_3068124980356565166_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1681091887_3077544266571276183_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1682490538_3089276998916089732_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1684021685_3102121191725781675_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1692517523_3173389447215966849_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1695695092_3200044833687615585_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1697001833_3211006567273315998_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1708471698_3307222773247932665_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1720229181_3405851689851967490_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1724581344_3442360273715475835_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1730379712_3491000513842529129_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1734343012_3524247077527245414_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1740216864_3573520520898001275_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1743734679_3603030095885444689_52884410060_1.jpg',
];

initNavbar();
initHamburger();
initScrollReveal();
initLightbox(images);
initAccordion();
initCalendar({ containerId: 'sem-cal-wrap', prevBtnId: 'sem-prev', nextBtnId: 'sem-next', villaKey: 'seminyak' });
initMap('villa-map', 115.1592329, -8.6867097);
