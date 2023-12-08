import React,{useRef}  from 'react'
import Card from './Card';

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum sit amet adipisicing elit. Ipsum commodi, temporibus cum repellat quis repudiandae nam? " ,
      filesize: ".4mb",
      close: true ,
      tag: {isOpen: true, tagTitle: "Uploaad Now", tagColor: "blue"} 
    },
    {
      desc: "Lorem ipsum sit amet adipisicing elit. Ipsum commodi, temporibus cum repellat quis repudiandae nam? " ,
      filesize: ".4mb",
      close: false ,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"} 
    },
    {
      desc: "Lorem ipsum elit. Ipsum commodi, temporibus cum nam? " ,
      filesize: ".4mb",
      close: true ,
      tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green" } 
    },
  ]

  return (
    <div>
      <div ref={ref}  className='fixed left-0 top-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5' >
        {data.map((item,index) => ( <Card data={item} reference={ref} /> ) )}
     </div>
    </div>
  )
}

export default Foreground;