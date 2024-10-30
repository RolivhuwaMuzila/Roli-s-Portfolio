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
    technicalSkills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python"],
    softSkills: ["Communication", "Problem Solving", "Teamwork", "Adaptability"],
    education: [
        "Bachelor of Science in Information Technology",
        "Diploma in Information Technology ",
        "Matric"
    ],
    location: "Kagiso, krugersdorp, Gauteng",
    contact: {
        email: "rollymuzila@gmail.com",
        phone: "123-456-7890", // Replace with actual phone number
        socialMedia: {
            linkedin: "https://linkedin.com/in/yourprofile",
            instagram: "https://instagram.com/yourprofile"
        }
    }
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

// Send message functionality with keyword detection
sendBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click from closing the chatbot
    const message = messageInput.value.trim().toLowerCase();
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

        // Check for keywords in the message
        if (message.includes('name')) {
            botResponse.innerHTML += `Your name is ${portfolioInfo.name}.`;
        } else if (message.includes('pages')) {
            botResponse.innerHTML += `Your portfolio has ${portfolioInfo.pages} pages.`;
        } else if (message.includes('projects')) {
            botResponse.innerHTML += `Your recent projects include: ${portfolioInfo.recentProjects.join(', ')}.`;
        } else if (message.includes('technical skills')) {
            botResponse.innerHTML += `Your technical skills include: ${portfolioInfo.technicalSkills.join(', ')}.`;
        } else if (message.includes('soft skills')) {
            botResponse.innerHTML += `Your soft skills include: ${portfolioInfo.softSkills.join(', ')}.`;
        } else if (message.includes('education')) {
            botResponse.innerHTML += `Your education includes: ${portfolioInfo.education.join(', ')}.`;
        } else if (message.includes('location') || message.includes('from')) {
            botResponse.innerHTML += `You are from ${portfolioInfo.location}.`;
        } else if (message.includes('contact')) {
            botResponse.innerHTML += `You can be reached at: <br> Email: ${portfolioInfo.contact.email} <br> Phone: ${portfolioInfo.contact.phone} <br> LinkedIn: ${portfolioInfo.contact.socialMedia.linkedin} <br> Instagram: ${portfolioInfo.contact.socialMedia.instagram}`;
        } else if (message.includes('certification')) {
            botResponse.innerHTML += `Your certifications include: ${portfolioInfo.education.slice(1).join(', ')}.`; // List certifications if any
        } else {
            botResponse.innerHTML += "Hey there! 👋 How's it going? I’m here to help you dig into Rolly's portfolio—ask away, and let’s geek out together! 🚀💻?";
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

// Resizing functionality
let isResizing = false;
const resizeHandle = document.createElement('div'); // Create a resize handle
resizeHandle.style.width = '10px';
resizeHandle.style.height = '10px';
resizeHandle.style.backgroundColor = 'transparent';
resizeHandle.style.cursor = 'nwse-resize';
resizeHandle.style.position = 'absolute';
resizeHandle.style.bottom = '5px';
resizeHandle.style.right = '5px';
chatbotWindow.appendChild(resizeHandle);

resizeHandle.addEventListener('mousedown', (event) => {
    isResizing = true;
});

document.addEventListener('mouseup', () => {
    isResizing = false; // Stop resizing
});

document.addEventListener('mousemove', (event) => {
    if (isResizing) {
        const newWidth = event.clientX - chatbotWindow.getBoundingClientRect().left;
        const newHeight = event.clientY - chatbotWindow.getBoundingClientRect().top;
        
        // Ensure minimum size
        if (newWidth > 200 && newHeight > 150) {
            chatbotWindow.style.width = newWidth + 'px';
            chatbotWindow.style.height = newHeight + 'px';
        }
    }
});
