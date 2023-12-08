import React from 'react';

function Background() {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen' >
      <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-4xl font-semibold tracking-wider'>        
        Documents
      </div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-stone-500 text-[12vw] font-semibold leading-none tracking-tighter'>
          Docs.
        </h1>
    </div>
    </>
  )
}

export default Background;