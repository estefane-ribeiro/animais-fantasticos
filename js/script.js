import ScrollSuave from "./scrollSuave.js";
import initAnimacaoScroll from "./initAnimacaoScroll.js";
import TabNav from "./tabMenu.js";
import Accordion from "./accordion.js";
import goToTop from "./toUp.js";
import Modal from "./modal.js";
import Tooltip from "./tooltip.js";
import initDropdownMenu from "./dropdown-menu.js";
import initMenuMobile from "./menu-mobile.js";
import initFuncionamento from "./initFuncionamento.js";
import fetchAnimais from "./fetch-animais.js";
import fetchBitcoin from "./fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('.js-menu a[href^="#"]');
scrollSuave.init();
const accordion = new Accordion(".js-accordion dt");
accordion.init();

const tabNav = new TabNav(".js-tabmenu li", ".js-tabcontent section");
tabNav.init();

const modal = new Modal(".container-modal", "[data-modal=fechar]", ".login");
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

fetchAnimais("animaisapi.json", ".numeros-grid");
fetchBitcoin(".btc-preco", "https://blockchain.info/ticker");

initAnimacaoScroll();

goToTop();

initDropdownMenu();
initMenuMobile();
initFuncionamento();
