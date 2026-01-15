import { useEffect, useRef } from "react";

const ParticleNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let animationId;
    let mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const PARTICLE_COUNT = Math.min(window.innerWidth / 15, 80);
    const CONNECTION_DISTANCE = 140;
    const MOUSE_RADIUS = 180;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.5 + 1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#00ffd5";
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MOUSE_RADIUS) {
            this.vx -= dx / dist * 0.02;
            this.vy -= dy / dist * 0.02;
          }
        }
      }
    }

    particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());

    const connect = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            ctx.strokeStyle = "rgba(0, 255, 213, 0.12)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      connect();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("mousemove", e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-40"
    />
  );
};

export default ParticleNetwork;
