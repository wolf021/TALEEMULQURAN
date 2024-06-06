import Image from "next/image"
export const InfoPanel = ({ title, description, imageUrl }) => {
  return (
    <div className=" bg-green-300 bg-opacity-5 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-10 mb-4 md:mb-0">
          <Image
            src={imageUrl}
            alt="Section Image"
            className="w-full md:max-w-sm mx-auto"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl text-green-700 font-bold mb-4">{title}</h2>
          <p className="text-lg mb-6">{description}</p>
        </div>
      </div>
    </div>
  )
}


export const InfoPanel2 = ({ title, description, imageUrl }) => {
  return (
    <div className=" bg-green-300 bg-opacity-5 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-1/2 md:pr-10 mb-4 md:mb-0">
          <Image
            src={imageUrl}
            alt="Section Image"
            className="w-full md:max-w-sm mx-auto"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl text-green-700 font-bold mb-4">{title}</h2>
          <p className="text-lg mb-6">{description}</p>
        </div>
      </div>
    </div>
  )
}


