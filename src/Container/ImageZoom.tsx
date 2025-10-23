/**
 * ImageZoom Component
 * Provides a lightbox/modal view for zooming images
 * Click on any image to view it in full screen with zoom controls
 */

import { useEffect, useCallback } from 'react';
import './ImageZoom.css';

interface ImageZoomProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

function ImageZoom({ src, alt, isOpen, onClose }: ImageZoomProps) {
  // Close on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="image-zoom-overlay" onClick={onClose}>
      <div className="image-zoom-container" onClick={(e) => e.stopPropagation()}>
        <button className="image-zoom-close" onClick={onClose} title="Close (Esc)">
          ✕
        </button>
        <img src={src} alt={alt} className="image-zoom-content" />
        <div className="image-zoom-caption">{alt}</div>
      </div>
    </div>
  );
}

export default ImageZoom;

