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

    // Fetch Financial Indicators
    fetchIndicadores();

    // Start Clock
    updateClock();
    setInterval(updateClock, 1000);
});

function updateClock() {
    const dateElement = document.getElementById('current-date');
    if (!dateElement) return;

    const now = new Date();
    // Format: "Lunes, 02 de Enero | 14:30:05"
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const dateString = now.toLocaleDateString('es-CL', options);
    const timeString = now.toLocaleTimeString('es-CL');

    // Capitalize first letter
    const formattedDate = dateString.charAt(0).toUpperCase() + dateString.slice(1);

    dateElement.textContent = `${formattedDate} | ${timeString}`;
}

// Function to fetch economic indicators
async function fetchIndicadores() {
    const ufElement = document.getElementById('ind-uf');
    const utmElement = document.getElementById('ind-utm');
    const dolarElement = document.getElementById('ind-dolar');

    if (!ufElement) return; // Exit if elements don't exist (e.g. other pages if not added there)

    // Check Cache (1 hour)
    const cachedData = localStorage.getItem('indicadoresData');
    const cachedTime = localStorage.getItem('indicadoresTime');
    const ONE_HOUR = 3600000;

    if (cachedData && cachedTime && (Date.now() - cachedTime < ONE_HOUR)) {
        renderIndicadores(JSON.parse(cachedData), ufElement, utmElement, dolarElement);
        return;
    }

    try {
        const response = await fetch('https://mindicador.cl/api');
        if (!response.ok) throw new Error('Error al obtener indicadores');

        const data = await response.json();

        // Save to Cache
        localStorage.setItem('indicadoresData', JSON.stringify(data));
        localStorage.setItem('indicadoresTime', Date.now());

        renderIndicadores(data, ufElement, utmElement, dolarElement);

    } catch (error) {
        console.error('Error fetching indicators:', error);
        const bar = document.getElementById('indicadores-bar');
        // Don't hide bar if we have clock, just hide indicators text? 
        // Better to hide just the empty spans or leave "..."
    }
}

function renderIndicadores(data, uf, utm, dolar) {
    const formatCLP = (value) => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);

    if (data.uf) uf.innerHTML = `UF: ${formatCLP(data.uf.valor)}`;
    if (data.utm) utm.innerHTML = `UTM: ${formatCLP(data.utm.valor)}`;
    if (data.dolar) dolar.innerHTML = `Dólar: ${formatCLP(data.dolar.valor)}`;
}
