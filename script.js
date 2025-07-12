// Project data
const projects = [
    {
        id: 'tic-tac-toe',
        title: 'Tic Tac Toe',
        subtitle: 'Classic Strategy Game',
        description: 'Interactive web-based implementation of the classic Tic Tac Toe game. Features AI opponent with optimal strategies, player vs player mode, and smooth animations.',
        icon: 'fas fa-gamepad',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'C++'],
        liveUrl: 'https://tic-tac-toe-indol-beta.vercel.app/',
        repoUrl: 'https://github.com/prash08484/Tic_Tac_Toe',
        features: [
            'AI Opponent with optimal strategies',
            'Player vs Player mode',
            'Responsive design',
            'Smooth animations',
            'C++ implementation available'
        ]
    },
    {
        id: 'sudoku',
        title: 'Sudoku Solver',
        subtitle: 'Backtracking Algorithm',
        description: 'Interactive Sudoku puzzle solver using backtracking algorithm. Input your custom puzzle and watch the solver find the solution in real-time.',
        icon: 'fas fa-puzzle-piece',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        liveUrl: 'https://sudoku-solver-nine-tau.vercel.app/',
        repoUrl: 'https://github.com/prash08484/Sudoku-Solver',
        features: [
            'Custom puzzle input',
            'Fast backtracking algorithm',
            'Real-time solving visualization',
            'Input validation',
            'Responsive grid design'
        ]
    },
    {
        id: 'n-queen',
        title: 'N-Queen Visualizer',
        subtitle: 'Backtracking Visualization',
        description: 'Visual demonstration of the classic N-Queens problem solution. Watch as the algorithm places queens on the chessboard using backtracking.',
        icon: 'fas fa-chess-queen',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        liveUrl: 'https://n-queen-visualiser-ds-algo-project.vercel.app/',
        repoUrl: 'https://github.com/prash08484/N-Queen-Visualiser',
        features: [
            'Step-by-step visualization',
            'Dynamic board size (N×N)',
            'Backtracking algorithm',
            'All solutions display',
            'Interactive chessboard'
        ]
    },
    {
        id: 'binary-tree',
        title: 'Binary Tree Visualizer',
        subtitle: 'Tree Data Structures',
        description: 'Interactive tool for visualizing binary trees, BSTs, and max heaps. Perform operations and see tree traversals in real-time.',
        icon: 'fas fa-tree',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        liveUrl: 'https://binary-tree-visualiser-ds-algo.vercel.app/',
        repoUrl: 'https://github.com/prash08484/Binary-Tree-Visualiser',
        features: [
            'Binary Tree visualization',
            'BST operations (insert, delete, search)',
            'Max Heap operations',
            'Tree traversals (Inorder, Preorder, Postorder)',
            'Real-time visual feedback'
        ]
    },
    {
        id: 'algorithms',
        title: 'Algorithm Collection',
        subtitle: 'Competitive Programming',
        description: 'Comprehensive collection of algorithms and data structures implemented in C++. Perfect for competitive programming and interview preparation.',
        icon: 'fas fa-code',
        technologies: ['C++', 'Algorithms', 'Data Structures'],
        liveUrl: null,
        repoUrl: 'https://github.com/prash08484/Algorithm',
        features: [
            'Disjoint Set operations',
            'Generic Tree algorithms',
            'Heap operations',
            'Segment & Fenwick Trees',
            'String algorithms',
            'Stack operations'
        ]
    }
];

// DOM elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const projectsGrid = document.getElementById('projectsGrid');

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Create project cards
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-project', project.id);
    
    const techTags = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    const liveButton = project.liveUrl ? 
        `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link link-primary">
            <i class="fas fa-external-link-alt"></i>
            Live Demo
        </a>` : '';
    
    card.innerHTML = `
        <div class="project-header">
            <div class="project-icon">
                <i class="${project.icon}"></i>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-subtitle">${project.subtitle}</p>
        </div>
        <div class="project-body">
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${techTags}
            </div>
            <div class="project-links">
                ${liveButton}
                <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="project-link link-secondary">
                    <i class="fab fa-github"></i>
                    Source Code
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// Load projects
function loadProjects() {
    projectsGrid.innerHTML = '';
    projects.forEach(project => {
        const card = createProjectCard(project);
        projectsGrid.appendChild(card);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.project-card, .feature, .tech-icon');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Parallax effect for floating cards
function initParallax() {
    const floatingCards = document.querySelectorAll('.floating-card');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        floatingCards.forEach((card, index) => {
            const speed = (index + 1) * 0.1;
            card.style.transform = `translateY(${rate * speed}px)`;
        });
    });
}

// Counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.innerText);
        let current = 0;
        const increment = target / 50;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };
        
        // Start animation when element is visible
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    counterObserver.unobserve(entry.target);
                }
            });
        });
        
        counterObserver.observe(counter.parentElement);
    });
}

// Add hover effects to project cards
function initCardHoverEffects() {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    initScrollAnimations();
    initParallax();
    animateCounters();
    
    // Delay card hover effects until cards are loaded
    setTimeout(initCardHoverEffects, 500);
});

// Add some interactive features
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.floating-card');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    cards.forEach((card, index) => {
        const speed = (index + 1) * 0.02;
        const xOffset = (x - 0.5) * 20 * speed;
        const yOffset = (y - 0.5) * 20 * speed;
        
        card.style.transform += ` translate(${xOffset}px, ${yOffset}px)`;
    });
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        
        // Add rainbow animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        konamiCode = [];
    }
});
