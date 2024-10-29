const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotWindow = document.getElementById('chatbot-window');
const sendBtn = document.getElementById('send-btn');
const messageInput = document.getElementById('message');
const chatContent = document.getElementById('chat-content');
const deleteBtn = document.getElementById('delete-btn');
const brightnessBtn = document.getElementById('brightness-btn');

// Portfolio information
const portfolioInfo = { 
    name: "Rolivhuwa Muzila",
    pages: 6,
    recentProjects: [
        "Kitchen Bliss Website",
        "Tic-Tac-Toe game",
        "Login Authentication",
        "Movie Recommend"
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python"],
    education: "Bachelor of Science in Information Technology",
    location: "Tshamulungwi, Limpopo Venda"
};

// Toggle chatbot window visibility
chatbotIcon.addEventListener('click', () => {
    chatbotWindow.style.display = chatbotWindow.style.display === 'flex' ? 'none' : 'flex';
});

// Prevent click events on input from closing the chatbot
messageInput.addEventListener('click', (event) => {
    event.stopPropagation();
});

// Function to get the current time as a timestamp
function getCurrentTimestamp() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Send message functionality
sendBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click from closing the chatbot
    const message = messageInput.value.trim();
    if (message) {
        const userMessage = document.createElement('div');
        userMessage.classList.add('user-message', 'message');
        userMessage.innerHTML = `<div class="avatar">👤</div>
                                  <div class="message-text">
                                      ${message}
                                      <div class="timestamp">${getCurrentTimestamp()}</div>
                                  </div>`;
        chatContent.appendChild(userMessage);
        messageInput.value = '';

        // Create bot response based on user input
        const botResponse = document.createElement('div');
        botResponse.classList.add('bot-message', 'message');
        botResponse.innerHTML = `<div class="avatar">🤖</div>
                                 <div class="message-text">`;

        if (message.toLowerCase() === 'what is my name?') {
            botResponse.innerHTML += `Your name is ${portfolioInfo.name}.`;
        } else if (message.toLowerCase() === 'how many pages does my portfolio have?') {
            botResponse.innerHTML += `Your portfolio has ${portfolioInfo.pages} pages.`;
        } else if (message.toLowerCase() === 'what are my recent projects?') {
            botResponse.innerHTML += `Your recent projects include: ${portfolioInfo.recentProjects.join(', ')}.`;
        } else if (message.toLowerCase() === 'what skills do i have?') {
            botResponse.innerHTML += `Your skills include: ${portfolioInfo.skills.join(', ')}.`;
        } else if (message.toLowerCase() === 'what is my education?') {
            botResponse.innerHTML += `You hold a ${portfolioInfo.education}.`;
        } else if (message.toLowerCase() === 'where am i from?') {
            botResponse.innerHTML += `You are from ${portfolioInfo.location}.`;
        } else {
            botResponse.innerHTML += "I'm here to help! Can you ask something else?";
        }

        botResponse.innerHTML += `<div class="timestamp">${getCurrentTimestamp()}</div></div>`;
        chatContent.appendChild(botResponse);

        // Scroll to bottom
        chatContent.scrollTop = chatContent.scrollHeight;
    }
});

// Delete the last message functionality
deleteBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click from closing the chatbot
    const messages = chatContent.querySelectorAll('.message');
    if (messages.length > 0) {
        chatContent.removeChild(messages[messages.length - 1]); // Remove last message
    }
});

// Brightness toggle functionality
let isDarkMode = false;
brightnessBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click from closing the chatbot
    if (isDarkMode) {
        chatbotWindow.style.backgroundColor = 'white';
        chatbotWindow.style.color = 'black';
        isDarkMode = false;
        brightnessBtn.textContent = '🔆';
    } else {
        chatbotWindow.style.backgroundColor = 'black';
        chatbotWindow.style.color = 'white';
        isDarkMode = true;
        brightnessBtn.textContent = '🌙';
    }
});
