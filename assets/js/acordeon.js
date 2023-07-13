const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.closest('.acordeon');
        const content = acordeon.querySelector('.content');
        const isOpen = acordeon.classList.contains('open');

        if (isOpen) {
            acordeon.classList.remove('open');
            content.style.height = '0';
            content.style.opacity = '0';
        } else {
            acordeon.classList.add('open');
            content.style.height = 'auto';
            content.style.opacity = '1';
        }
    });
});