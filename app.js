function toggleInfo(infoId) {
    const infoDiv = document.getElementById(infoId);
    infoDiv.style.display = infoDiv.style.display === "block" ? "none" : "block";
  }
  function toggleInfo(id) {
    var element = document.getElementById(id);
    
    // Check if the element is currently hidden or visible
    if (element.style.display === "block") {
      element.style.display = "none";  // Hide the link
    } else {
      element.style.display = "block"; // Show the link
    }
  }
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-list ul');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  // chatbot.js
const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotWindow = document.getElementById('chatbot-window');
const sendBtn = document.getElementById('send-btn');
const messageInput = document.getElementById('message');
const chatContent = document.getElementById('chat-content');
const deleteBtn = document.getElementById('delete-btn');
const brightnessBtn = document.getElementById('brightness-btn');

chatbotIcon.addEventListener('click', () => {
    chatbotWindow.style.display = chatbotWindow.style.display === 'flex' ? 'none' : 'flex';
});

sendBtn.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        const userMessage = document.createElement('div');
        userMessage.classList.add('user-message', 'message');
        userMessage.textContent = message;
        chatContent.appendChild(userMessage);
        messageInput.value = '';
        const botResponse = document.createElement('div');
        botResponse.classList.add('bot-message', 'message');
        botResponse.textContent = "I'm here to help!";
        chatContent.appendChild(botResponse);
        chatContent.scrollTop = chatContent.scrollHeight;
    }
});

deleteBtn.addEventListener('click', () => {
    chatContent.innerHTML = '<div class="bot-message message">Hey, my name is Shawty, how can I help you?</div>';
});

let isDarkMode = false;
brightnessBtn.addEventListener('click', () => {
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
