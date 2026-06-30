import { Link } from "react-router";

// Direct production Unsplash IDs targeting portraits of actual barbers
const teamMembers = [
  {
    name: "James Anderson",
    title: "Master Barber",
    img: "user1.avif",
  },
  {
    name: "William Carter",
    title: "Styling Specialist",
    img: "user2.avif",
  },
  {
    name: "Benjamin Clark",
    title: "Beard Specialist",
    img: "user3.avif",
  },
  {
    name: "Liam Mitchell",
    title: "Shave Expert",
    img: "user4.jfif",
  },
];

const BarberTeamSection = () => {
  return (
    <section className="bg-[#1B4D43] px-6 py-8 md:px-12 text-center text-[#F7F4ED] w-full flex items-center justify-center md:h-screen md:max-h-[850px] overflow-hidden">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between py-4">
        
        {/* Header Block */}
        <div className="mb-6 md:mb-8 flex-shrink-0">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-[#E0B18D] mb-2">
            Meet Our Experts
          </p>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl leading-tight max-w-2xl mx-auto">
            Skilled Barbers Crafting Your Perfect Look.
          </h2>
        </div>

        {/* Content/Grid Block - Constrained on desktop to prevent overflow */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 my-auto max-h-[60vh] md:max-h-none overflow-y-auto md:overflow-visible">
          {teamMembers.map((m) => (
            <Link
              to="/about"
              key={m.name}
              className="group flex flex-col items-center justify-center transition-all text-center h-full"
            >
              {/* Profile Image - Smooth rounded edge styling matches image_a2a92e.png */}
              <div className="w-full aspect-[3/4] rounded-xl overflow-hidden relative bg-[#F7F4ED]/5 border border-[#F7F4ED]/10 shadow-lg">
                <img 
                  src={m.img} 
                  alt={m.name} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                  loading="eager"
                />
              </div>
              
              {/* Identity Meta Container - Applied exact 4px padding-bottom via pb-1 */}
              <div className="mt-3 w-full px-1 pb-1">
                <p className="text-[#F7F4ED] text-sm md:text-base font-semibold tracking-wide truncate group-hover:text-[#E0B18D] transition-colors">
                  {m.name}
                </p>
                <p className="text-[#A5CFC9] text-xs font-normal truncate mt-0.5">
                  {m.title}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Dots Footer */}
        <div className="flex items-center justify-center gap-2 mt-6 md:mt-8 flex-shrink-0">
          <div className="w-2 h-2 rounded-full bg-[#F7F4ED] opacity-100"></div>
          <div className="w-2 h-2 rounded-full bg-[#F7F4ED] opacity-30"></div>
          <div className="w-2 h-2 rounded-full bg-[#F7F4ED] opacity-30"></div>
          <div className="w-2 h-2 rounded-full bg-[#F7F4ED] opacity-30"></div>
        </div>

      </div>
    </section>
  );
};

export default BarberTeamSection;