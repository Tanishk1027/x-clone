import Feed from '@/components/Feed';
import Share from '@/components/Share';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div className='px-4 pt-4 flex justify-between text-textGray font-bold border-b-[1px] border-borderGray'>
        <Link className='pb-3 border-b-4 border-iconBlue' href="/">For you</Link>
        <Link className='pb-3' href="/">Following</Link>
        <Link className='hidden md:flex pb-3' href="/">React.js</Link>
        <Link className='hidden md:flex pb-3' href="/">Javascript</Link>
        <Link className='hidden md:flex pb-3' href="/">CSS</Link>
      </div>
      <Share />
      <Feed/>
    </div>
  )
}

export default HomePage
