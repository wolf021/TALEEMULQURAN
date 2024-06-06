import Video from "../../../public/Video.mp4"
const HeroSection = () => {
  return (
    <div className="relative  min-h-[35rem]  h-auto ">
      {/* Video Background */}
      <video
        className="absolute bg-fixed inset-0 w-full h-full object-fill "
        autoPlay
        muted
        loop
      >
        <source src="/Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className=" bg-gray-700 flex bg-opacity-10 min-h-[35rem]  h-auto my-auto text-white py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto my-auto">
          <div className="text-center  flex xs:items-start p-10 bg-black rounded-md bg-opacity-75 sm:items-center md:items-start md:w-1/2 md:text-start lg:items-start lg:text-start  flex-col my-auto ">
            <h1 className="text-4xl font-bold mb-4 text-green-600">
            Discover the Beauty of the Quran with Expert Guidance
            </h1>
            <p className="text-lg mb-8">
            Join our Quran teaching program for all ages and levels. Learn to read and understand the Quran with personalized lessons from experienced instructors. Deepen your connection with the Holy Quran today.
            </p>
            <button className="bg-green-700 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
