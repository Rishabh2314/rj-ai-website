// DOM Elements
const imageOptionBtn = document.getElementById('imageOption');
const videoOptionBtn = document.getElementById('videoOption');
const generateBtn = document.getElementById('generateBtn');
const promptTextarea = document.getElementById('prompt');
const resultArea = document.getElementById('generatedContent');
const placeholderIcon = document.getElementById('placeholderIcon');
const placeholderText = document.getElementById('placeholderText');
const loader = document.getElementById('loader');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');
const styleButtons = document.querySelectorAll('.style-btn');
const durationButtons = document.querySelectorAll('.duration-btn');
const durationOptions = document.getElementById('durationOptions');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const generationTimeElement = document.getElementById('generationTime');
const creditsUsedElement = document.getElementById('creditsUsed');
const totalGenerationsElement = document.getElementById('totalGenerations');
const adBoxes = document.querySelectorAll('.ad-box');

// Prompt-based content database
const contentDatabase = {
    // Images database based on prompts
    images: {
        realistic: {
            "mountain": [
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1464278533981-50106e6176b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            ],
            "ocean": [
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            ],
            "forest": [
                "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            ],
            "city": [
                "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            ],
            "sunset": [
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            ],
            "animal": [
                "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            ]
        },
        artistic: {
            "abstract": [
                "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            ],
            "painting": [
                "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            ]
        },
        anime: {
            "character": [
                "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            ],
            "fantasy": [
                "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            ]
        },
        futuristic: {
            "city": [
                "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            ],
            "technology": [
                "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            ]
        }
    },
    
    // Videos database based on prompts
    videos: {
        "nature": [
            "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
            "https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-through-a-mountain-range-41576-large.mp4"
        ],
        "city": [
            "https://assets.mixkit.co/videos/preview/mixkit-traffic-on-a-bridge-at-night-4073-large.mp4",
            "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-city-at-night-4253-large.mp4"
        ],
        "ocean": [
            "https://assets.mixkit.co/videos/preview/mixkit-white-clouds-passing-by-1166-large.mp4",
            "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4"
        ],
        "people": [
            "https://assets.mixkit.co/videos/preview/mixkit-a-girl-blowing-a-bubble-gum-at-an-amusement-park-1226-large.mp4",
            "https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-partying-happily-4640-large.mp4"
        ],
        "technology": [
            "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-computer-circuit-board-41935-large.mp4",
            "https://assets.mixkit.co/videos/preview/mixkit-close-view-of-electronic-circuit-board-42822-large.mp4"
        ],
        "abstract": [
            "https://assets.mixkit.co/videos/preview/mixkit-abstract-geometric-shapes-rotating-41654-large.mp4",
            "https://assets.mixkit.co/videos/preview/mixkit-colorful-abstract-shapes-rotating-41652-large.mp4"
        ]
    }
};

// App State
let isImageMode = true;
let selectedStyle = 'realistic';
let selectedDuration = 10;
let totalGenerations = 0;
let startTime;
let progressInterval;

// Initialize app
function initApp() {
    // Load saved state from localStorage
    const savedGenerations = localStorage.getItem('rjai_totalGenerations');
    if (savedGenerations) {
        totalGenerations = parseInt(savedGenerations);
        totalGenerationsElement.textContent = totalGenerations;
    }
    
    // Set first style button as active
    document.querySelector('.style-btn').classList.add('active');
    
    // Set first duration button as active
    document.querySelector('.duration-btn').classList.add('active');
    
    // Set example prompt
    promptTextarea.value = "A beautiful mountain landscape at sunset";
    
    // Auto-generate example after a short delay
    setTimeout(() => {
        simulateGeneration();
    }, 1500);
}

// Toggle between image and video mode
imageOptionBtn.addEventListener('click', function() {
    isImageMode = true;
    imageOptionBtn.classList.add('active');
    videoOptionBtn.classList.remove('active');
    durationOptions.style.display = 'none';
    promptTextarea.placeholder = "Describe the image you want to create... For example: 'A serene mountain landscape at sunset with a lake reflecting the colors'";
});

videoOptionBtn.addEventListener('click', function() {
    isImageMode = false;
    videoOptionBtn.classList.add('active');
    imageOptionBtn.classList.remove('active');
    durationOptions.style.display = 'block';
    promptTextarea.placeholder = "Describe the video you want to create... For example: 'A drone flying over a forest during autumn with falling leaves'";
});

// Style selection
styleButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all style buttons
        styleButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Update selected style
        selectedStyle = this.getAttribute('data-style');
    });
});

// Duration selection
durationButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all duration buttons
        durationButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Update selected duration
        selectedDuration = parseInt(this.getAttribute('data-duration'));
    });
});

// Generate content
generateBtn.addEventListener('click', simulateGeneration);

function simulateGeneration() {
    const prompt = promptTextarea.value.trim().toLowerCase();
    
    if (!prompt) {
        showNotification('Please enter a prompt to generate content!', 'error');
        promptTextarea.focus();
        return;
    }
    
    // Show loader and hide placeholder
    loader.style.display = 'block';
    placeholderIcon.style.display = 'none';
    placeholderText.style.display = 'none';
    resultArea.style.display = 'none';
    progressBar.style.display = 'block';
    progressFill.style.width = '0%';
    
    // Record start time for generation time calculation
    startTime = Date.now();
    
    // Start progress bar animation
    let progress = 0;
    clearInterval(progressInterval);
    progressInterval = setInterval(() => {
        progress += 1;
        progressFill.style.width = `${progress}%`;
        
        if (progress >= 100) {
            clearInterval(progressInterval);
        }
    }, 50);
    
    // Simulate AI generation delay (random between 2-4 seconds)
    const delay = 2000 + Math.random() * 2000;
    
    setTimeout(() => {
        clearInterval(progressInterval);
        progressFill.style.width = '100%';
        
        setTimeout(() => {
            loader.style.display = 'none';
            progressBar.style.display = 'none';
            resultArea.style.display = 'block';
            
            // Calculate generation time
            const endTime = Date.now();
            const generationTime = ((endTime - startTime) / 1000).toFixed(1);
            generationTimeElement.textContent = generationTime;
            
            // Update credits used
            const credits = isImageMode ? 1 : 3;
            creditsUsedElement.textContent = credits;
            
            // Update total generations
            totalGenerations++;
            totalGenerationsElement.textContent = totalGenerations;
            
            // Save to localStorage
            localStorage.setItem('rjai_totalGenerations', totalGenerations.toString());
            
            // Clear previous content
            resultArea.innerHTML = '';
            
            // Generate content based on prompt
            if (isImageMode) {
                generateImageBasedOnPrompt(prompt);
            } else {
                generateVideoBasedOnPrompt(prompt);
            }
            
            // Show success message
            setTimeout(() => {
                showNotification(`${isImageMode ? 'Image' : 'Video'} generated successfully! You can now download it.`, 'success');
            }, 500);
            
            // Rotate ads after generation
            rotateAds();
            
        }, 300);
        
    }, delay);
}

function generateImageBasedOnPrompt(prompt) {
    // Find matching keywords in the prompt
    let matchedCategory = null;
    let matchedUrls = [];
    
    // Check each keyword in the database
    for (const [category, urls] of Object.entries(contentDatabase.images[selectedStyle])) {
        if (prompt.includes(category)) {
            matchedCategory = category;
            matchedUrls = urls;
            break;
        }
    }
    
    // If no specific match found, use random from selected style
    if (!matchedCategory) {
        const categories = Object.keys(contentDatabase.images[selectedStyle]);
        matchedCategory = categories[Math.floor(Math.random() * categories.length)];
        matchedUrls = contentDatabase.images[selectedStyle][matchedCategory];
    }
    
    // Randomly select an image from matched URLs
    const randomIndex = Math.floor(Math.random() * matchedUrls.length);
    const imageUrl = matchedUrls[randomIndex];
    
    resultArea.innerHTML = `
        <h3>Generated ${selectedStyle.charAt(0).toUpperCase() + selectedStyle.slice(1)} Image</h3>
        <p class="prompt-display"><strong>Prompt:</strong> "${prompt}"</p>
        <p class="prompt-match"><i class="fas fa-lightbulb"></i> Matched with: "${matchedCategory}" theme</p>
        <img src="${imageUrl}" alt="Generated Image" onerror="this.src='https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'">
        <a href="${imageUrl}" download="rjai-${selectedStyle}-image.jpg" class="download-btn">
            <i class="fas fa-download"></i> Download Image (HD)
        </a>
        <div class="image-info">
            <p><i class="fas fa-info-circle"></i> Resolution: 1920x1080 | Style: ${selectedStyle} | Size: 2.4 MB</p>
        </div>
    `;
}

function generateVideoBasedOnPrompt(prompt) {
    // Find matching keywords in the prompt
    let matchedCategory = null;
    let matchedUrls = [];
    
    // Check each keyword in the database
    for (const [category, urls] of Object.entries(contentDatabase.videos)) {
        if (prompt.includes(category)) {
            matchedCategory = category;
            matchedUrls = urls;
            break;
        }
    }
    
    // If no specific match found, use random
    if (!matchedCategory) {
        const categories = Object.keys(contentDatabase.videos);
        matchedCategory = categories[Math.floor(Math.random() * categories.length)];
        matchedUrls = contentDatabase.videos[matchedCategory];
    }
    
    // Randomly select a video from matched URLs
    const randomIndex = Math.floor(Math.random() * matchedUrls.length);
    const videoUrl = matchedUrls[randomIndex];
    
    resultArea.innerHTML = `
        <h3>Generated Video (${selectedDuration}s)</h3>
        <p class="prompt-display"><strong>Prompt:</strong> "${prompt}"</p>
        <p class="prompt-match"><i class="fas fa-lightbulb"></i> Matched with: "${matchedCategory}" theme</p>
        <video controls autoplay muted>
            <source src="${videoUrl}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <a href="${videoUrl}" download="rjai-${matchedCategory}-video.mp4" class="download-btn">
            <i class="fas fa-download"></i> Download Video (HD)
        </a>
        <div class="image-info">
            <p><i class="fas fa-info-circle"></i> Duration: ${selectedDuration}s | Resolution: 1080p | Size: ${(selectedDuration * 0.8).toFixed(1)} MB</p>
        </div>
    `;
}

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', function() {
    const navUl = mainNav.querySelector('ul');
    navUl.classList.toggle('active');
    
    // Change icon
    const icon = this.querySelector('i');
    if (navUl.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Ad click handlers
adBoxes.forEach((adBox, index) => {
    const button = adBox.querySelector('.ad-cta');
    button.addEventListener('click', function() {
        // Track ad click
        trackAdClick(index + 1);
        
        // Show ad redirect message
        showNotification(`Redirecting to advertiser... Thank you for supporting RJ AI!`, 'info');
        
        // In a real website, this would redirect to the advertiser
        // For demo, we'll just show a message
        setTimeout(() => {
            alert(`This is a demonstration advertisement. Ad #${index + 1} clicked.\n\nIn a real website, this would redirect to the advertiser's website.`);
        }, 500);
    });
});

// Ad rotation function
function rotateAds() {
    // Simple ad rotation - randomly show/hide ads
    adBoxes.forEach(adBox => {
        // 25% chance to hide an ad (simulating ad rotation)
        if (Math.random() < 0.25) {
            adBox.style.opacity = '0.5';
            adBox.style.transform = 'scale(0.95)';
            
            // Show "Ad loading..." text
            const adContent = adBox.querySelector('.ad-content');
            if (adContent) {
                const originalText = adContent.textContent;
                adContent.textContent = 'Ad loading...';
                
                // Restore after 2 seconds
                setTimeout(() => {
                    adBox.style.opacity = '1';
                    adBox.style.transform = 'scale(1)';
                    adContent.textContent = originalText;
                }, 2000);
            }
        }
    });
}

// Track ad clicks
function trackAdClick(adNumber) {
    let adClicks = localStorage.getItem('rjai_adClicks') || '0';
    adClicks = parseInt(adClicks) + 1;
    localStorage.setItem('rjai_adClicks', adClicks.toString());
    
    console.log(`Ad #${adNumber} clicked. Total ad clicks: ${adClicks}`);
}

// Show notification
function showNotification(message, type) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <p>${message}</p>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Add CSS for prompt match
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .prompt-display {
        background-color: #1e293b;
        padding: 10px 15px;
        border-radius: 8px;
        margin-bottom: 10px;
        color: #cbd5e1;
        font-size: 16px;
    }
    
    .prompt-match {
        background-color: #1e3a8a;
        padding: 8px 15px;
        border-radius: 8px;
        margin-bottom: 15px;
        color: #cbd5e1;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .prompt-match i {
        color: #fbbf24;
    }
    
    .image-info {
        margin-top: 15px;
        padding: 10px;
        background-color: #1e293b;
        border-radius: 8px;
        font-size: 14px;
        color: #94a3b8;
    }
    
    .image-info i {
        color: #60a5fa;
        margin-right: 5px;
    }
    
    video {
        background-color: #000;
    }
`;
document.head.appendChild(additionalStyles);

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);