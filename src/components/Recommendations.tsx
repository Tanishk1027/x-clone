import Link from 'next/link'
import React from 'react'
import ImageComp from './ImageComp'

const Recommendations = () => {
  return (
    <div className='p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4'>
        <h1>Who to follow</h1>
        {/* USER CARD */}
        <div className='flex items-center justify-between'>
            {/* IMAGE and USER INFO */}
            <div className='flex items-center gap-2'>
                <div className='relative rounded-full overflow-hidden w-10 h-10'>
                    <ImageComp src="general/avatar.png" alt='Tanishk' w={100} h={100}/>
                </div>
                <div>
                    <h2 className='text-md font-bold'>Gary Marcus</h2>
                    <span className='text-textGray text-sm'>@abcde</span>
                </div>
            </div>
            {/* BUTTON */}
            <button className='py-1 px-4 font-semibold bg-white text-black rounded-full'>Follow</button>
        </div>
        {/* USER CARD */}
        <div className='flex items-center justify-between'>
            {/* IMAGE and USER INFO */}
            <div className='flex items-center gap-2'>
                <div className='relative rounded-full overflow-hidden w-10 h-10'>
                    <ImageComp src="general/avatar.png" alt='Tanishk' w={100} h={100}/>
                </div>
                <div>
                    <h2 className='text-md font-bold'>Gary Marcus</h2>
                    <span className='text-textGray text-sm'>@abcde</span>
                </div>
            </div>
            {/* BUTTON */}
            <button className='py-1 px-4 font-semibold bg-white text-black rounded-full'>Follow</button>
        </div>
        {/* USER CARD */}
        <div className='flex items-center justify-between'>
            {/* IMAGE and USER INFO */}
            <div className='flex items-center gap-2'>
                <div className='relative rounded-full overflow-hidden w-10 h-10'>
                    <ImageComp src="general/avatar.png" alt='Tanishk' w={100} h={100}/>
                </div>
                <div>
                    <h2 className='text-md font-bold'>Gary Marcus</h2>
                    <span className='text-textGray text-sm'>@abcde</span>
                </div>
            </div>
            {/* BUTTON */}
            <button className='py-1 px-4 font-semibold bg-white text-black rounded-full'>Follow</button>
        </div>
        <Link href='/' className="text-iconBlue">Show More</Link>
    </div>
  )
}

export default Recommendations
