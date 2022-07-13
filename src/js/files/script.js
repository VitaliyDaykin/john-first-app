// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


function updateLinks() {
	const links = document.querySelectorAll(".menu__link");
	const currentUrl = window.location;
	for (const anchor of links) {
		anchor.classList.remove("active");
		const linkUrl = new URL(anchor.href);
		if (linkUrl.pathname === currentUrl.pathname) {
			anchor.classList.add("active");
		}
	}
}
updateLinks();
