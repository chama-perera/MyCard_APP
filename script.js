const buttonsContainer = document.querySelector('.buttons');

const createButton = (text, onClick) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.style.padding = '10px 20px';
    button.style.borderRadius = '12px';
    button.style.border = 'none';
    button.style.backgroundColor = '#007AFF';
    button.style.color = '#fff';
    button.style.fontSize = '16px';
    button.style.margin = '10px';
    button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    button.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
    button.onmouseover = () => {
        button.style.transform = 'scale(1.05)';
        button.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.2)';
    };
    button.onmouseout = () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    };
    button.onclick = onClick;
    return button;
};

const aboutMeButton = createButton('About Me', () => {
    // Add smooth fade-out transition
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '0';

    // Navigate after fade
    setTimeout(() => {
        window.location.href = 'AboutMe.html';
    }, 500);
});

buttonsContainer.appendChild(aboutMeButton);

const contactMeButton = createButton('Contact Me', () => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';

    const modal = document.createElement('div');
    modal.style.backgroundColor = '#fff';
    modal.style.padding = '20px';
    modal.style.borderRadius = '12px';
    modal.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    modal.textContent = 'Contact Me clicked!';
    overlay.appendChild(modal);

    overlay.onclick = () => document.body.removeChild(overlay);
    document.body.appendChild(overlay);
});
buttonsContainer.appendChild(contactMeButton);
