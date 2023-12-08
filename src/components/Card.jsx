import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { ImDownload } from "react-icons/im";
import { FaWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";

function Card({data, reference}) {
  return (
    <motion.div 
        drag
        dragMomentum={true}
        dragConstraints={reference}  
        dragElastic={0.2}
        whileTap={{ scale: 0.8 }}
    className='relative flex-shrink-0 w-60 h-80 rounded-[45px] bg-zinc-700 text-white px-8 py-10  overflow-hidden'
    >
        <FaFileAlt />
        <p className='text-sm mt-5 px-4 font-semibold leading-tight'>
            {data.desc}
        </p>
        <div className='footer absolute bottom-0 bg-zinc-700 w-full left-0'>
            <div className='flex items-center justify-between mb-3 px-8 py-3'>
                <h4> {data.filesize} </h4>
                <span className='w-8 h-8 rounded-full flex items-center justify-center bg-zinc-600 '> 
                {data.close ? <FaWindowClose /> :  <ImDownload /> }
                </span>
            </div>
            {data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-sky-400" : "bg-green-400" } `} >
                    <h3 className='text-sm font-semibold text-center'> {data.tag.tagTitle}  </h3>
                </div>
             )}
            
        </div>
    </motion.div>
  )
}

export default Card;
