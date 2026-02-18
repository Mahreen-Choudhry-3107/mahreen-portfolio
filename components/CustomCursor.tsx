
import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-[9999] transition-transform duration-300 ease-out flex items-center justify-center mix-blend-difference hidden lg:flex`}
        style={{ 
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isHovering ? 2.5 : 1})`,
        }}
      >
        <div className="w-1 h-1 bg-white rounded-full"></div>
      </div>
    </>
  );
};

export default CustomCursor;
