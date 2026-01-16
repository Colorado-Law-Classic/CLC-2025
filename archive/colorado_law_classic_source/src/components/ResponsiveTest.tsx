import React from 'react';

const ResponsiveTest = () => {
  const [screenSize, setScreenSize] = React.useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getDeviceType = () => {
    const { width } = screenSize;
    if (width < 640) return 'Mobile';
    if (width < 768) return 'Small Tablet';
    if (width < 1024) return 'Tablet';
    if (width < 1280) return 'Laptop';
    return 'Desktop';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg border border-gray-200 z-50 text-sm">
      <div className="font-semibold">Responsive Testing</div>
      <div>Width: {screenSize.width}px</div>
      <div>Height: {screenSize.height}px</div>
      <div>Device: {getDeviceType()}</div>
    </div>
  );
};

export default ResponsiveTest;
