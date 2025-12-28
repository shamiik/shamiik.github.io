import { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);
    const requestRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const outlinePos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Initial setup
        const dot = dotRef.current;
        const outline = outlineRef.current;
        
        if (!dot || !outline) return;

        // Verify device pointer capabilities
        if (window.matchMedia("(pointer: fine)").matches) {
            
            // 1. Track Mouse Position Instantly
            const handleMouseMove = (e) => {
                mousePos.current.x = e.clientX;
                mousePos.current.y = e.clientY;
                
                // Move Dot Instantly
                dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
            };

            // 2. Animate Outline with Delay (Lerp)
            const animate = () => {
                // Linear Interpolation: Move 15% of the distance each frame
                const delay = 0.15; 
                
                outlinePos.current.x += (mousePos.current.x - outlinePos.current.x) * delay;
                outlinePos.current.y += (mousePos.current.y - outlinePos.current.y) * delay;

                outline.style.transform = `translate(${outlinePos.current.x}px, ${outlinePos.current.y}px) translate(-50%, -50%)`;
                
                requestRef.current = requestAnimationFrame(animate);
            };

            // 3. Hover Effects
            const addHoverEffect = () => {
                outline.classList.add('cursor-hover');
                dot.classList.add('opacity-0'); // Hide dot when hovering
            };
            const removeHoverEffect = () => {
                outline.classList.remove('cursor-hover');
                dot.classList.remove('opacity-0');
            };

            const handleMouseOver = (e) => {
                const target = e.target;
                if (target.matches('a, button, .gradient-border-card, .filter-btn') || target.closest('a, button, .gradient-border-card, .filter-btn')) {
                    addHoverEffect();
                } else {
                    removeHoverEffect();
                }
            };

            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseover', handleMouseOver);
            requestRef.current = requestAnimationFrame(animate);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseover', handleMouseOver);
                cancelAnimationFrame(requestRef.current);
            };
        }
    }, []);

    return (
        <>
            <div id="cursor-dot" ref={dotRef}
                className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full z-[9999] pointer-events-none hidden md:block transition-opacity duration-300">
            </div>
            <div id="cursor-outline" ref={outlineRef}
                className="fixed top-0 left-0 w-10 h-10 border border-primary rounded-full z-[9999] pointer-events-none hidden md:block transition-all duration-300 ease-out">
            </div>
        </>
    );
};

export default CustomCursor;
