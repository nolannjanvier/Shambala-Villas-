import './styles/main.css';
import { initNavbar, initHamburger } from './components/navbar';
import { initScrollReveal } from './components/scrollReveal';
import { initCarousel } from './components/carousel';
import './components/forms';

initNavbar();
initHamburger();
initScrollReveal(0.12);
initCarousel();
