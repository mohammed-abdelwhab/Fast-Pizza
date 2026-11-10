import { useState, useEffect, useRef } from "react";

function LazyImage({ src, alt, className = "", ...props }) {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Set up the observer to watch this specific component wrapper
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Unwatch immediately; we only need to load it once
        }
      },
      { rootMargin: "200px" }, // Proactively load 200px before coming into view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect(); // Clean up if component unmounts mid-scroll
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full bg-stone-100">
      {/* Skeleton Loading Indicator: Displays until the network payload arrives */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-stone-200" />
      )}

      {/* Actual Image Element: Only injected into the DOM when close to viewport */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          // Combines parent custom styles with smooth transition management
          className={`transition-all duration-500 ${className} ${
            isLoaded ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
          {...props}
        />
      )}
    </div>
  );
}

export default LazyImage;
