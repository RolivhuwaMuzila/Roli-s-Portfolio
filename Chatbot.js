const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotWindow = document.getElementById('chatbot-window');
const sendBtn = document.getElementById('send-btn');
const messageInput = document.getElementById('message');
const chatContent = document.getElementById('chat-content');
const deleteBtn = document.getElementById('delete-btn');
const brightnessBtn = document.getElementById('brightness-btn');

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list ul');

hamburger.addEventListener('click', () => {
    // Toggle active class
    hamburger.classList.toggle('active');
    
    // Toggle nav list visibility
    navList.classList.toggle('active');
});

// Portfolio information (as defined earlier)
const portfolioInfo = { 
    name: "Rolivhuwa Muzila",
    surname: "Muzila",
    pages: 6,
    aboutMe: "I'm a passionate software developer with a love for coding and technology. I enjoy solving problems and creating efficient solutions that make life easier for users.",
    recentProjects: [
        "Kitchen Bliss Website",
        "Tic-Tac-Toe game",
        "Login Authentication",
    ],
    technicalSkills: ["Web Development", "Software Development", "HTML & CSS", "JavaScript"],
    softSkills: ["Communication", "Teamwork", "Problem Solving", "Time management"],
    education: [
        "Bachelor of Science in Information Technology",
        "Diploma in Information Technology",
        "Matric"
    ],
    certification: [
        "MS-900 Certificate",
        "MD-102 Certificate",
        "AI Certificate",
        "Software Development Certificate",
        "System Administration Certificate",
    ],
    experience: [
        "Capaciti/Absa intern-current",
        "Tender Office Administrator",
    ],
    location: "Kagiso, Krugersdorp, Gauteng",
    contact: {
        email: "rollymuzila@gmail.com",
        phone: "069 997 3153 / 072 017 6890",
        socialMedia: {
            linkedin: "https://www.linkedin.com/in/rolivhuwa-muzila-bb13a5287/",
            instagram: "https://www.instagram.com/_rolly.m/",
            facebook: "https://www.facebook.com/RollyMuzila/",
            github: "https://github.com/RolivhuwaMuzila"
        }
    }
};

// Toggle chatbot window visibility
chatbotIcon.addEventListener('click', () => {
    chatbotWindow.style.display = chatbotWindow.style.display === 'flex' ? 'none' : 'flex';
    
    // Apply the shake animation
    chatbotIcon.classList.add('shake');

    // Remove the shake class after animation ends to allow re-triggering
    setTimeout(() => {
        chatbotIcon.classList.remove('shake');
    }, 500); // Match duration of the animation
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
        // Create user message
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
        if (message.includes('hey') || message.includes('hi') || message.includes('hello') || message.includes('greeting')) {
            botResponse.innerHTML += "Hey there! 👋 How's it going? I’m here to help you dig into Rolly's portfolio—ask away, and let’s geek out together! 🚀💻";
        } else if (message.includes('name')) {
            botResponse.innerHTML += `Your name is ${portfolioInfo.name}.`;
        }else if (message.includes('about me')) {
                botResponse.innerHTML += `Kindly please <a href="#about" target="_self">click here</a> to view my About Me section in the portfolio.`;     
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
            botResponse.innerHTML += `You can be reached at: <br> Email: ${portfolioInfo.contact.email} <br> Phone: ${portfolioInfo.contact.phone}`;
        } else if (message.includes('certification')) {
            botResponse.innerHTML += `Your certifications include: ${portfolioInfo.certification.join(', ')}.`;
        } else if (message.includes('experience')) {
            botResponse.innerHTML += `Your experience includes: ${portfolioInfo.experience.join(', ')}.`;
        } else if (message.includes('social media')) {
            botResponse.innerHTML += `
                Find me on social media here: <br>
                <div class="social-item">
                    <a href="${portfolioInfo.contact.socialMedia.linkedin}" target="_blank">
                        <img src="https://img.icons8.com/bubbles/100/000000/linkedin.png" alt="LinkedIn" />
                    </a>
                </div>
                <div class="social-item">
                    <a href="${portfolioInfo.contact.socialMedia.instagram}" target="_blank">
                        <img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" alt="Instagram" />
                    </a>
                </div>
                <div class="social-item">
                    <a href="${portfolioInfo.contact.socialMedia.facebook}" target="_blank">
                        <img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" alt="Facebook" />
                    </a>
                </div>
                <div class="social-item">
                    <a href="${portfolioInfo.contact.socialMedia.github}" target="_blank">
                        <img src="https://img.icons8.com/bubbles/100/000000/github.png" alt="GitHub" />
                    </a>
                </div>`;
        } else {
            // This is where the prompt will go for unrecognized messages
            botResponse.innerHTML += "Please contact me for more information!";
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
        chatbotWindow.style.width = `${newWidth}px`;
        chatbotWindow.style.height = `${newHeight}px`;
    }
});
