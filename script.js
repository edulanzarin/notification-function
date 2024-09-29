// Função para criar notificações empilháveis
function createNotification(message, backgroundColor, borderColor) {
    // Cria um novo elemento de notificação
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    notification.style.backgroundColor = backgroundColor;
    notification.style.border = `2px solid ${borderColor}`;
    notification.style.position = 'fixed';
    notification.style.right = '10px';
    notification.style.padding = '10px';
    notification.style.zIndex = 1000;

    // Define a posição 'top' com base nas notificações existentes
    const topOffset = calculateNotificationOffset();
    notification.style.top = `${topOffset}px`;

    // Adiciona a notificação ao body
    document.body.appendChild(notification);

    // Remove a notificação após 5 segundos e atualiza as posições
    setTimeout(() => {
        notification.remove();
        updateNotificationPositions(); 
    }, 5000);
}

// Função para calcular a posição 'top' da nova notificação
function calculateNotificationOffset() {
    const notifications = document.querySelectorAll('.notification');
    let topOffset = 80; 

    notifications.forEach(notification => {
        topOffset += notification.offsetHeight + 10; 
    });

    return topOffset; 
}