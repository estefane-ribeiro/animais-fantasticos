import ScrollSuave from "./scrollSuave.js";
import TabNav from "./tabMenu.js";
import Accordion from "./accordion.js";
import goToTop from "./toUp.js";
import Modal from "./modal.js";
import Tooltip from "./tooltip.js";
import DropdownMenu from "./dropdown-menu.js";
import MenuMobile from "./menu-mobile.js";
import fetchAnimais from "./fetch-animais.js";
import fetchBitcoin from "./fetch-bitcoin.js";
import AnimacaoScroll from "./initAnimacaoScroll.js";
import Funcionamento from "./initFuncionamento.js";

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

fetchAnimais("./animaisapi.json", ".numeros-grid");
fetchBitcoin(".btc-preco", "https://blockchain.info/ticker");

const animacaoScroll = new AnimacaoScroll(".js-scroll");
animacaoScroll.init();

goToTop();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]");
funcionamento.init();
