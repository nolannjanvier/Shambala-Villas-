import './styles/main.css';
import { initHamburger } from './components/navbar';
import { initScrollReveal } from './components/scrollReveal';

const allImages: string[] = [
  // Lembongan (0-23)
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
  'images/lembongan/theshambalalembongan_1684392463_3105231509694319858_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1684560651_3106642366605046472_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1693043434_3177801113110090985_56937094430_1.jpg',
  'images/lembongan/theshambalalembongan_1694127340_3186893573308312708_56937094430_1.jpg',
  // Seminyak (24-73)
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
  'images/seminyak/shambalavillabali_1681263794_3078986325362677453_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1682490538_3089276998916089732_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1683529308_3097990837685837542_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1684021685_3102121191725781675_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1684558719_3106626164277314883_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1692517523_3173389447215966849_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1695695092_3200044833687615585_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1696378181_3205774995481889643_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1697001833_3211006567273315998_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1698725407_3225464955092798668_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1708471698_3307222773247932665_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1720229181_3405851689851967490_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1721888548_3419771469117878051_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1724581344_3442360273715475835_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1725707606_3451808049321429134_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1727671057_3468278668890564617_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1728969999_3479174977843520530_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1730081323_3488497442763635595_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1730379712_3491000513842529129_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1730691396_3493615106431495456_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1731916527_3503892253284695189_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1734343012_3524247077527245414_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1736504621_3542379975048612277_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1737444582_3550264934966477289_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1738825964_3561852808178392368_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1739697940_3569167471224045507_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1740216864_3573520520898001275_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1742210454_3590243968682207569_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1743734679_3603030095885444689_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1745801896_3620371166940017017_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1746928006_3629817663360111125_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1748049276_3639223553096051544_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1749347422_3650113196762998256_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1750660547_3661128489928765661_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1760758806_3745838824270909936_52884410060_2.jpg',
  'images/seminyak/shambalavillabali_1760758806_3745838824279274739_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1763022901_3764831425339173961_52884410060_1.jpg',
  'images/seminyak/shambalavillabali_1771825453_3838671535419285715_52884410060_1.jpg',
];

let visibleIndices: number[] = allImages.map((_, i) => i);
let current = 0;

function updateLightbox(): void {
  const realIdx = visibleIndices[current];
  const img = document.getElementById('lb-img') as HTMLImageElement | null;
  const count = document.getElementById('lb-count');
  if (img) img.src = allImages[realIdx];
  if (count) count.textContent = `${current + 1} / ${visibleIndices.length}`;
}

function openLightbox(idx: number): void {
  current = visibleIndices.indexOf(idx);
  if (current === -1) current = 0;
  updateLightbox();
  document.getElementById('lightbox')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(): void {
  document.getElementById('lightbox')?.classList.remove('active');
  document.body.style.overflow = '';
}

function shiftLightbox(dir: number): void {
  current = (current + dir + visibleIndices.length) % visibleIndices.length;
  updateLightbox();
}

(window as any).openLightbox = openLightbox;
(window as any).closeLightbox = closeLightbox;
(window as any).shiftLightbox = shiftLightbox;

document.getElementById('lightbox')?.addEventListener('click', function (e) {
  if (e.target === this) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!document.getElementById('lightbox')?.classList.contains('active')) return;
  if (e.key === 'ArrowRight') shiftLightbox(1);
  if (e.key === 'ArrowLeft') shiftLightbox(-1);
  if (e.key === 'Escape') closeLightbox();
});

// Gallery filter tabs
const tabs = document.querySelectorAll('.g-tab');
const items = document.querySelectorAll('.masonry-item');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = (tab as HTMLElement).dataset.filter;

    visibleIndices = [];
    items.forEach((item, i) => {
      const villa = (item as HTMLElement).dataset.villa;
      const show = filter === 'all' || villa === filter;
      if (show) {
        item.classList.remove('hidden');
        visibleIndices.push(i);
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

// Gallery page: navbar always scrolled
const navbar = document.getElementById('navbar');
if (navbar) navbar.classList.add('scrolled');
window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.add('scrolled');
});

initHamburger();
initScrollReveal(0.06);
