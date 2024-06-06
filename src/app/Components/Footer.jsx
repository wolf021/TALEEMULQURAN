import Image from "next/image"
import Logo from "../Assets/Logo2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import Head from 'next/head';
const Footer = () => {
  
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 justify-center md:grid-cols-3 gap-8">
          {/* Logo */}
          <div className="md:col-span-1 flex flex-col items-center justify-center">
            <Image src={Logo} alt="Logo" className="h-20  w-20 mb-4 bg-blend-overlay " />
            <p>
              &copy;{" "}
              <span className="text-green-700">2024 Taleem Ul Quran. </span>All
              rights reserved.
            </p>
          </div>
          {/* Website Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-green-700 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-green-700">
                  Home
                </a>
              </li>
             
              <li>
                <a href="#" className="hover:text-green-700">
                  Courses
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-green-700 mb-4">
              Connect with Us
            </h3>
            <ul className="flex space-x-4">
              <li>
                <a href="https://wa.me/00923214308481">
                <div className=' w-7 h-7   '>
     <FontAwesomeIcon className='text-white hover:text-green-900 cursor-pointer' icon={faWhatsapp} />
    </div>
                </a>
            
              </li>
              <li>
                <a href="/">
                <div className='w-7 h-7   '>
     <FontAwesomeIcon className='text-white hover:text-green-900 cursor-pointer' icon={faInstagram} />
    </div>
                </a>
             
             </li>
             <li>
                <a href="https://www.facebook.com/profile.php?id=61560086531161&mibextid=kFxxJD">
                <div className='w-7 h-7   '>
     <FontAwesomeIcon className='text-white hover:text-green-900 cursor-pointer' icon={faFacebook} />
    </div>
                </a>
             
             </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
