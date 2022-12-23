import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import journyImg from '../../image/january_banner.jpg'

const ModalForHome = () => {
    const [checked, setChecked] = useState(false);
  
  
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setChecked(true)
      }, 5000);
      return () => clearTimeout(timer);
    }, []);
  
  
  
    return (
      <div>
  
  
  
  
        <input type="checkbox" id="my-modal-4" className="modal-toggle" defaultChecked={checked} onChange={() => setChecked(false)} />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative w-11/12 max-w-5xl" >
          <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
         <div className='mb-5'>
         <h3 className="text-lg font-bold mb-4">ভর্তি চলছে !! নতুন জাপানিজ ল্যাঙ্গুয়েজ কোর্সে !!</h3>
<Image width={1200} height={600} src={journyImg} alt="" />
            <p className='mt-4'>নতুন জাপানিজ ল্যাঙ্গুয়েজ ব্যাচ-এ ভর্তি চলছে !!
 <span className='block my-4'>নতুন জাপানিজ ল্যাঙ্গুয়েজ ব্যাচে - ২০২০ জাপানিজ উচ্চ শিক্ষার সেশনে ভর্তি চলছেে!!</span></p>
         </div>
         <div className='flex justify-end'>

         
         <Link href='/contact'><button className='btn btn-ghost'>read more</button></Link>
         </div>
          </label>
        </label>
      </div>
    );
  };
  
  export default ModalForHome;