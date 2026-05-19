document.addEventListener('DOMContentLoaded', () => {
    // 1. Efeito de entrada suave nos links (Fade-in stagger)
    const links = document.querySelectorAll('.elite-link');
    
    links.forEach((link, index) => {
        // Define um atraso de animação dinâmico para cada link
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        link.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 200 + (index * 150)); // O primeiro aparece em 200ms, o segundo em 350ms...
    });

    // 2. Feedback tátil rápido para telas Touch (essencial para o Instagram)
    links.forEach(link => {
        link.addEventListener('touchstart', () => {
            link.style.transform = 'scale(0.98)';
            link.style.background = 'rgba(255, 255, 255, 0.05)';
        });
        
        link.addEventListener('touchend', () => {
            link.style.transform = 'translateY(0) scale(1)';
            link.style.background = 'var(--card-bg)';
        });
    });
});