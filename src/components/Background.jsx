import { useEffect, useRef } from 'react';

// SET TO 'false' TO DISABLE THE NEURAL NETWORK BACKGROUND ANIMATION
const ENABLE_NEURAL_NETWORK = false;

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!ENABLE_NEURAL_NETWORK) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particlesArray;
    let mouse = { x: null, y: null, radius: 150 };
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      mouse.radius = ((canvas.height / 80) * (canvas.height / 80));
      initParticles();
    };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    const handleMouseOut = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    // Initial sizing
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() * 1.5) - 0.75;
        this.speedY = (Math.random() * 1.5) - 0.75;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;

        // Mouse Repel Logic
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          if (mouse.x < this.x && this.x < canvas.width - 10) this.x += 2;
          if (mouse.x > this.x && this.x > 10) this.x -= 2;
          if (mouse.y < this.y && this.y < canvas.height - 10) this.y += 2;
          if (mouse.y > this.y && this.y > 10) this.y -= 2;
        }
      }
      draw() {
        const isDark = document.documentElement.classList.contains('dark');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? '#6366f1' : '#0ea5e9';
        ctx.fill();
      }
    }

    function initParticles() {
      particlesArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function connectParticles() {
      const isDark = document.documentElement.classList.contains('dark');
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
                         ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));

          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - (distance / 20000);
            ctx.strokeStyle = isDark
              ? `rgba(99, 102, 241, ${opacityValue})`
              : `rgba(14, 165, 233, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animateParticles() {
      animationFrameId = requestAnimationFrame(animateParticles);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connectParticles();
    }

    initParticles();
    animateParticles();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gray-50 dark:bg-[#020617] transition-colors duration-300">
        
        {/* NEURAL CANVAS CONTROLLED BY ENABLE_NEURAL_NETWORK CONSTANT */}
        {ENABLE_NEURAL_NETWORK && (
          <canvas 
            ref={canvasRef} 
            id="neural-canvas" 
            className="absolute inset-0 w-full h-full opacity-100 transition-opacity duration-1000"
          ></canvas>
        )}

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] animate-pulse delay-1000"></div>

          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150"></div>
        </div>

        <div className="waves-container">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: '#0ea5e9', stopOpacity: 0.6 }} />
              </linearGradient>
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="url(#wave-gradient)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="url(#wave-gradient)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="url(#wave-gradient)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="url(#wave-gradient)" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Background;
