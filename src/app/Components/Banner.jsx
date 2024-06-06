const Banner = ({ title, description, buttonText, buttonLink, imageUrl }) => {
  return (
    <div className="bg-gray-800 text-white py-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row lg:flex-row items-center">
        <div className=" text-center md:text-left ">
          <h2 className="text-3xl text-green-700 font-bold mb-4">{title}</h2>
          <p className="text-lg mb-6">{description}</p>
         
        </div>
      </div>
    </div>
  )
}

export default Banner
