
import { useEffect, useRef, useState } from 'react';
import './AutoScrollText.css';

interface AutoScrollTextProps {
  children: React.ReactNode;
  scrollSpeed?: number; // pixels per second
  className?: string;
}

const AutoScrollText: React.FC<AutoScrollTextProps> = ({
  children,
  scrollSpeed = 20,
  className = ''
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isManualScrolling, setIsManualScrolling] = useState(false);
  const manualScrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTimestamp = 0;

    const autoScroll = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isHovered && !isManualScrolling && container) {
        const scrollAmount = (scrollSpeed * deltaTime) / 1000;
        container.scrollTop += scrollAmount;

        if (container.scrollTop >= container.scrollHeight - container.clientHeight) {
          container.scrollTop = 0;
        }
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (manualScrollTimeoutRef.current !== null) {
        clearTimeout(manualScrollTimeoutRef.current);
      }
    };
  }, [isHovered, isManualScrolling, scrollSpeed]);

  const handleScroll = () => {
    setIsManualScrolling(true);

    if (manualScrollTimeoutRef.current !== null) {
      clearTimeout(manualScrollTimeoutRef.current);
    }

    manualScrollTimeoutRef.current = window.setTimeout(() => {
      setIsManualScrolling(false);
    }, 2000);
  };

  return (
    <div 
      ref={scrollContainerRef}
      className={`auto-scroll-text ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onScroll={handleScroll}
    >
      {children}
    </div>
  );
};

export default AutoScrollText;
