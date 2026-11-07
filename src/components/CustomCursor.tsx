import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    let targetX = -100;
    let targetY = -100;
    let currentTrailX = -100;
    let currentTrailY = -100;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: targetX, y: targetY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('[role="button"]') ||
          target.getAttribute('data-cursor') === 'pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const loop = () => {
      currentTrailX += (targetX - currentTrailX) * 0.18;
      currentTrailY += (targetY - currentTrailY) * 0.18;
      setTrailing({ x: currentTrailX, y: currentTrailY });
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block" aria-hidden="true">
      {/* Small dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#D4FF3F] rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 shadow-[0_0_8px_#D4FF3F]"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${isHovered ? 0 : 1})`,
        }}
      />
      {/* Trailing circle */}
      <div
        className="fixed top-0 left-0 rounded-full border border-[#D4FF3F]/80 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-150 ease-out"
        style={{
          width: isHovered ? '48px' : '26px',
          height: isHovered ? '48px' : '26px',
          transform: `translate3d(${trailing.x}px, ${trailing.y}px, 0) scale(1)`,
          backgroundColor: isHovered ? 'rgba(212, 255, 63, 0.15)' : 'transparent',
          boxShadow: isHovered ? '0 0 15px rgba(212, 255, 63, 0.4)' : 'none',
        }}
      />
    </div>
  );
};
