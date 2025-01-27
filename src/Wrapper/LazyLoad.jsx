import React, { useState, useEffect, useRef, Suspense } from 'react';
import SkeletonLoader from '../components/loaders/SkeletonLoader';

const LazyLoad = ({ children, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true); // Fallback to visible if not supported
      return; // Exit early
    }
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
  
    if (ref.current) {
      observer.observe(ref.current);
    }
  
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  

  return (
    <div ref={ref}>
      {isVisible ? (
        <Suspense fallback={<SkeletonLoader id={id} />}>
          {children}
        </Suspense>
      ) : (
        <div id={id} style={{ height: '100px' }} /> // Placeholder to maintain layout
      )}
    </div>
  );
};

export default LazyLoad;