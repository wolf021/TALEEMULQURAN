const Courses = ({ courses }) => {
  return (
    <div className=" bg-green-300 bg-opacity-5 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-green-700 font-bold text-center mb-10">
          Our Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-green-700 font-bold mb-4">
                {course.title}
              </h3>
              <p className="text-gray-600">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses
