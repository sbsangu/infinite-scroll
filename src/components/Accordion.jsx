import React, { useState } from 'react'
import AccordionItem from './AccordionItem';

const data = [
  {
    title: "Accordion Item #1",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "Accordion Item #2",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "Accordion Item #3",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
];

const Accordion = () => {
  const [isOpen,setIsOpen]=useState(0);
  return (
    <div className='mx-auto w-[50%] my-4 gap-4 p-4'>

      {data.map((acc,i)=> <AccordionItem key={i} title={acc.title} index={i} body={acc.body} isOpen={isOpen} setIsOpen={setIsOpen} />)}
    </div>
  )
}

export default Accordion;