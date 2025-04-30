import React, { useRef, useEffect } from "react";

const MouseTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let mouseX = 0;
    let mouseY = 0;
    let trailLength = 20;
    let trail = [];

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      trail.push({ x: mouseX, y: mouseY });
      if (trail.length > trailLength) {
        trail.shift();
      }

      for (let i = 0; i < trail.length; i++) {
        const point = trail[i];
        const opacity = i / trail.length;
        context.beginPath();
        context.arc(point.x, point.y, 2, 0, 2 * Math.PI);
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fill();
      }

      requestAnimationFrame(draw);
    };

    const handleMouseMove = (event) => {
      mouseX = event.clientX - canvas.offsetLeft;
      mouseY = event.clientY - canvas.offsetTop;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    draw();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default MouseTrail;
