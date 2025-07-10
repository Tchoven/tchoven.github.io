// js/layout.js

const navLinks = [
    { href: "index.html", text: "Início" },
    { href: "sobre.html", text: "Sobre<br>& História" }, // Mantém a quebra de linha
    { href: "eventos.html", text: "Eventos" },
    { href: "contato.html", text: "Apoiadores<br>& Contato" }, // ADICIONADA a quebra de linha aqui para simetria
];

function createHeader(activePage) {
    let desktopNavHTML = '';
    let mobileNavHTML = '';

    navLinks.forEach(link => {
        const isActive = link.href === activePage;
        // Para o menu mobile, removemos a quebra de linha para um visual mais limpo
        const mobileText = link.text.replace('<br>', ' '); 

        desktopNavHTML += `<a href="${link.href}" class="nav-link ${isActive ? 'active' : ''}">${link.text}</a>`;
        mobileNavHTML += `<a href="${link.href}" class="text-xl ${isActive ? 'text-[#FFD500]' : 'hover:text-[#FFD500] transition-colors'}">${mobileText}</a>`;
    });

    const headerHTML = `
    <header class="bg-[#081525]/80 py-4 border-b border-[#005BBB]/30 sticky top-0 z-50 backdrop-blur-sm">
        <div class="container mx-auto px-4 flex justify-between items-center">
            <a href="index.html" class="flex items-center gap-3">
                <img src="https://i.imgur.com/UHfW6h7.png" alt="Tchóven Logo" class="h-10 w-10">
                <span class="text-lg font-bold hidden md:inline-block">Grupo Folclórico Ucraniano Tchóven</span>
            </a>
            <nav class="hidden md:flex items-center space-x-8">${desktopNavHTML}</nav>
            <button id="menu-toggle-btn" class="md:hidden text-2xl"><i class="fas fa-bars"></i></button>
        </div>
    </header>
    <div id="mobile-menu" class="hidden md:hidden fixed top-20 left-0 w-full bg-[#0d1a2b]/95 backdrop-blur-sm z-40">
        <nav class="flex flex-col items-center space-y-6 py-8">${mobileNavHTML}</nav>
    </div>
    `;
    
    document.getElementById('header-placeholder').innerHTML = headerHTML;

    document.getElementById('menu-toggle-btn').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    });
}

function createFooter() {
    const footerHTML = `
    <footer class="bg-[#0d1a2b] py-12 border-t border-[#005BBB]/20">
        <div class="container mx-auto px-4 text-center">
            <p class="text-gray-500 text-sm">© 2025 Grupo Folclórico Ucraniano Tchóven. Todos os direitos reservados.</p>
            <div class="flex justify-center space-x-6 mt-4">
                <a href="https://www.facebook.com/p/Grupo-Folcl%C3%B3rico-Ucraniano-Tch%C3%B3ven-100063499751781/?_rdr" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-[#FFD500] transition"><i class="fab fa-facebook-f text-lg"></i></a>
                <a href="https://www.instagram.com/folcloretchoven" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-[#FFD500] transition"><i class="fab fa-instagram text-lg"></i></a>
            </div>
        </div>
    </footer>
    `;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
}