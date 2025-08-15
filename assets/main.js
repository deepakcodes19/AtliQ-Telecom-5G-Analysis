document.addEventListener('DOMContentLoaded', () => {
	const navToggle = document.querySelector('.nav-toggle');
	const navLinks = document.querySelector('.nav-links');
	const yearEl = document.getElementById('year');

	if (yearEl) {
		yearEl.textContent = new Date().getFullYear();
	}

	if (navToggle && navLinks) {
		navToggle.addEventListener('click', () => {
			const isOpen = navLinks.style.display === 'flex';
			navLinks.style.display = isOpen ? 'none' : 'flex';
			navLinks.style.flexDirection = 'column';
			navLinks.style.gap = '12px';
			navToggle.setAttribute('aria-expanded', String(!isOpen));
		});
	}

	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			const href = this.getAttribute('href');
			if (!href) return;
			const target = document.querySelector(href);
			if (!target) return;
			e.preventDefault();
			target.scrollIntoView({ behavior: 'smooth' });
		});
	});
});