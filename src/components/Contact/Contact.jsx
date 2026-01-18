import React, { useEffect, useState } from 'react';
import style from './Contact.module.css';

export default function Contact() {

    const [counter, setCounter] = useState();
    useEffect(() => {
        
        return () => {
            
        };
    }, []);

  return <>
  <h1 className='text-4xl font-bold bg-amber-500'>Contact Copmonents</h1>
  <p className='bg-amber-950'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, deleniti!</p>
  </>
}
