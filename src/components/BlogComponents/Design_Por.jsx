export default function ComingSoonBanner() {
  return (
    <div className="relative w-full py-10 text-center bg-red-200 overflow-hidden px-2 md:px-10 lg:px-36 pb-10 lg:pb-20 my-10 mt-10">
      {/* Background Gradient & Effect */}
      <div className="shadow-lg shadow-purple-200 absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-200 opacity-70"></div>
  {/* Adding margin-top and margin-bottom for the gap */}
  <div className=" rounded-lg absolute inset-0 flex justify-center items-center">
    <h1 className="  text-[40px] font-bold text-color-primary animate-scroll">
      DESIGN COOL PORTFOLIO IS COMING SOON
    </h1>
  </div>
      {/* Animated Dots Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatAnimation ${1 + Math.random() * 2}s ease-in-out infinite alternate`
            }}
          ></span>
        ))}
      </div>
      <style jsx>{`
        @keyframes floatAnimation {
          from { transform: translateY(0); }
          to { transform: translateY(5px); }
        }
        @keyframes scroll {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }
        .animate-scroll {
          display: inline-block;
          white-space: nowrap;
          animation: scroll 8s linear infinite;
        }
      `}</style>
    </div>
  );
}