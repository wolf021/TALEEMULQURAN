import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"



const WhatsappButton = () => {
  return (
    <a href="https://wa.me/00923214308481">

    <div className='w-10 h-10 fixed  bg-green-900  border-black right-3 animate-pulse bottom-5 p-[2px] flex items-center justify-center rounded-full'>
     <FontAwesomeIcon className='text-white' icon={faWhatsapp} />
    </div>
    </a>
  )
}

export default WhatsappButton