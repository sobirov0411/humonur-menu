// Linklarga bosilganda silliq o'tish
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Default xatti-harakatni to'xtatish
        const targetId = this.getAttribute('href').substring(1); // Linkning ID qismini olish
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Navbardan keyingi joyni moslashtirish
                behavior: 'smooth' // Silliq o'tish
            });
        }
    });
});

// Aktiv linkni yangilash
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});
