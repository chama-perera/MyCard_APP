// Make sure page fades in on back navigation
window.addEventListener('pageshow', () => {
    document.body.style.opacity = '1';
});

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

// About Me button
const aboutMeButton = createButton('About Me', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '0';

    setTimeout(() => {
        window.location.href = 'AboutMe.html';
    }, 500);
});
buttonsContainer.appendChild(aboutMeButton);

// Contact Me button (navigates to ContactMe.html)
const contactMeButton = createButton('Contact Me', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '0';

    setTimeout(() => {
        window.location.href = 'ContactMe.html';
    }, 500);
});
buttonsContainer.appendChild(contactMeButton);
