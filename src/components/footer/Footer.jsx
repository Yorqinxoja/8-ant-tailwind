import React from 'react'
import MORENT from "../../assets/MORENT.png"

const Footer = () => {
  return (
  <>
 
 <div className='p-[50px] bg-[#F6F7F9] w-full my-[50px]' >
 <div className='flex gap-[100px]  '>
        <div className='my-[20px]'>
                <img className='mx-[-0px]' src={MORENT} alt="" />
                <br />
                <p className='text-[#90A3BF] max-w-[300px]'>Our vision is to provide convenience and help increase your sales business.</p>
        </div>
        <div className='flex  gap-[100px]'>
          <div>
          <strong>About</strong>
          <br />
          <p>How it works</p>
          <br />
          <p>Featured</p>
          <br />
          <p>Partnership</p>
          <br />
          <p>Bussiness Relation</p>
        </div>
        <div>
          <strong className='text-xl'>Community</strong>
          <br />
          <p>Events</p>
          <br />
          <p>Blog</p>
          <br />
          <p>Podcast</p>
          <br />
          <p> Invite a friend</p>
        </div>
        <div>
          <strong className='text-xl'>Socials</strong>
          <br />
          <p>Discord</p>
          <br />
          <p>Instagram</p>
          <br />
          <p>Twitter</p>
          <br />
          <p>Facebook</p>
        </div>
        </div>
 </div>
 <hr className='my-[30px]' />
 <div className='flex  gap-[400px]'>
  <strong>©2022 MORENT. All rights reserved</strong>
  <div className='flex gap-[150px]'>
    <strong>Privacy & Policy</strong>
    <strong>Terms & Condition</strong>
  </div>
 </div>
 </div>


  </>
  )
}

export default Footer