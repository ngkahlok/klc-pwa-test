// components/ResponsiveBackground.jsx
export default function ResponsiveBackground({ children }) {
  return (
    <div className="relative min-h-screen flex justify-center items-start overflow-hidden">
     <img src="/images/sewing-theme-background.jpg" alt="Desktop Background"  className="absolute top-0 left-0 w-full h-full object-cover z-0"/>
      <div className="relative w-full max-w-[440px] bg-gray-500 min-h-screen shadow-md z-10">
        {children}
      </div>
    </div>
  );
}
