import ScrollSuave from "./scrollSuave.js";
import initAnimacaoScroll from "./initAnimacaoScroll.js";
import TabNav from "./tabMenu.js";
import Accordion from "./accordion.js";
import goToTop from "./toUp.js";
import initModal from "./modal.js";
import initTooltip from "./tooltip.js";
import initDropdownMenu from "./dropdown-menu.js";
import initMenuMobile from "./menu-mobile.js";
import initFuncionamento from "./initFuncionamento.js";
import initFetchAnimais from "./fetch-animais.js";
import initFetchBitcoin from "./fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('.js-menu a[href^="#"]');
scrollSuave.init();
const accordion = new Accordion(".js-accordion dt");
accordion.init();

const tabNav = new TabNav(".js-tabmenu li", ".js-tabcontent section");
tabNav.init();

initAnimacaoScroll();

goToTop();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
