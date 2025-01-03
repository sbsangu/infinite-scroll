import React from 'react'

const AccordionItem = ({title,body,isOpen,setIsOpen,index}) => {
  return (
    <div className='w-full p-3'>
     <div className='flex justify-between bg-gray-300 p-2 cursor-pointer'>
      <span className='text-black font-bold'>{title}</span>
      <span onClick={()=>isOpen===index? setIsOpen(null) :setIsOpen(index)}>⬇️</span>
     </div>
     <div>
      {isOpen===index && <div>{body}</div>}
     </div>
    </div>
  )
}

export default AccordionItem