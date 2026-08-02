document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. LOADER LOGIC ---
    const loader = document.getElementById("loader");
    const loaderFill = document.getElementById("loader-fill");
    const loaderPct = document.getElementById("loader-pct");
    const loaderMsg = document.getElementById("loader-msg");
    
    const messages = [
        "INITIALIZING CORE MATRIX...",
        "CONNECTING TO DIGITAL FRONTIER...",
        "DECRYPTING NEURAL ASSETS...",
        "COMPILING ARMILLARY ENGINE...",
        "SYSTEMS ONLINE."
    ];
    
    let progress = 0;
    let msgIndex = 0;
    
    const bootInterval = setInterval(() => {
        
        progress += Math.floor(Math.random() * 10) + 1;
        if (progress > 100) progress = 100;
        
        loaderFill.style.width = `${progress}%`;
        loaderPct.textContent = `${progress}%`;
        
        if (progress > (msgIndex + 1) * 20 && msgIndex < messages.length - 1) {
            msgIndex++;
            loaderMsg.textContent = messages[msgIndex];
        }
        
        if (progress === 100) {
            clearInterval(bootInterval);
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
                initMetrics();
            }, 600);
        }
    }, 70);

    // --- 2. CANVAS BACKGROUND ANIMATION ---
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    let width, height, particles;
    
    function initCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        particles = [];
        
        const particleCount = window.innerWidth < 768 ? 40 : 80;
        
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 0.5
            });
        }
    }
    
    function animateCanvas() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "rgba(148, 163, 184, 0.5)"; 
        ctx.strokeStyle = "rgba(0, 245, 255, 0.05)"; 
        
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animateCanvas);
    }
    
    initCanvas();
    animateCanvas();
    window.addEventListener("resize", initCanvas);

    // --- 3. CUSTOM CURSOR LOGIC ---
    const cursorDot = document.getElementById("cur-dot");
    const cursorRing = document.getElementById("cur-ring");
    
    if (window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener("mousemove", (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            
            cursorRing.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 150, fill: "forwards" });
        });
    }

    // --- 4. 3D CARD TILT EFFECT (UPDATED FOR MULTIPLE CARDS) ---
    const dlWraps = document.querySelectorAll(".dl-wrap");
    
    if (window.matchMedia("(pointer: fine)").matches) {
        dlWraps.forEach(dlWrap => {
            const dlCard = dlWrap.querySelector(".dl-card");
            
            if (dlCard) {
                dlWrap.addEventListener("mousemove", (e) => {
                    const rect = dlWrap.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    
                    const multiplier = 15;
                    const xRotate = -(y / (rect.height / 2)) * multiplier;
                    const yRotate = (x / (rect.width / 2)) * multiplier;
                    
                    dlCard.style.transform = `rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
                });
                
                dlWrap.addEventListener("mouseleave", () => {
                    dlCard.style.transform = `rotateX(0) rotateY(0)`;
                });
            }
        });
    }

    // --- 5. NUMBER COUNTER METRICS ---
    function initMetrics() {
        const counters = document.querySelectorAll(".m-val");
        const speed = 200;
        
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute("data-count");
                const count = +counter.innerText;
                const inc = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                }
            };
            
            // Only animate if the target is greater than 0
            if (+counter.getAttribute("data-count") !== 0) {
                updateCount();
            }
        });
    }

    // --- 6. SCROLL ANIMATION OBSERVER ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.sc-rev').forEach((el) => {
        observer.observe(el);
    });
});