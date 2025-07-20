// components/ResponsiveBackground.jsx
// import Image from 'next/image';
export default function ResponsiveBackground({ children }) {
  return (
    <div className="relative min-h-screen flex justify-center items-start overflow-hidden">
      {/* <Image
        src="/images/sewing-theme-background3.jpg"
        alt="Desktop Background"
        className="absolute top-0 left-0 object-cover z-0"
        fill
        priority
        quality={100}
      /> */}
      <div
        className="absolute inset-0 bg-repeat bg-[url('/images/sewing-theme-background3.jpg')] z-0"
        style={{ backgroundSize: 'auto' }} // Optional: control tile size
      />
      <div className="relative w-full max-w-[440px] bg-white min-h-screen shadow-md z-10">
        {children}
      </div>
    </div>
  );
}
