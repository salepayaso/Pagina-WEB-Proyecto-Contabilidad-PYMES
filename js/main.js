document.addEventListener('DOMContentLoaded', () => {
    console.log('Contabilidad CMP Website initialized');

    // WhatsApp Chat Widget functionality
    const whatsappBtn = document.getElementById('whatsappBtn');
    const whatsappBubble = document.getElementById('whatsappBubble');
    const closeChat = document.getElementById('closeChat');

    // Toggle chat bubble when button is clicked
    if (whatsappBtn && whatsappBubble) {
        whatsappBtn.addEventListener('click', () => {
            whatsappBubble.classList.toggle('active');
        });
    }

    // Close chat bubble when X is clicked
    if (closeChat && whatsappBubble) {
        closeChat.addEventListener('click', () => {
            whatsappBubble.classList.remove('active');
        });
    }
});
