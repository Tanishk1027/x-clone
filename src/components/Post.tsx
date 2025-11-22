import React from 'react'
import ImageComp from './ImageComp'
import PostInfo from './PostInfo'

const Post = () => {
    return (
        <div className='p-4 border-y-[1px] border-borderGray'>
            {/* POST TYPE */}
            <div className='flex items-center gap-2 text-sm test-textGray mb-2 font bold'>
                icon
                <span>Tanishk reposted</span>
            </div>
            {/* POST CONTENT */}
            <div className='flex gap-4'>
                {/* AVATAR */}
                <div className='w-10 h-10 rounded-full overflow-hidden'>
                    <ImageComp src="general/avatar.png" alt="" w={100} h={100} />
                </div>
                {/* CONTENT */}
                <div className='flex-1 flex flex-col gap-2'>
                    {/* TOP */}
                    <div className='flex items-center justify-between gap-2'>
                        <div className='flex items-center gap-2 flex-wrap'>
                            <h1 className='text-md font-bold'>Tanishk Agarwal</h1>
                            <span className='text-textGray'>@lamaWebDev</span>
                            <span className='text-textGray'>1 day ago</span>
                        </div>
                        <PostInfo />
                    </div>
                    {/* TEXT and MEDIA */}
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores vel eos odio animi. Omnis sint aspernatur nostrum nobis aperiam,
                        placeat odit quia voluptates, minima voluptate, soluta alias provident eaque enim quisquam quasi! 
                        Nulla incidunt, sit magni illum expedita quam omnis necessitatibus odio eligendi,
                        officia, voluptatem doloribus! Quas, quo. Quod, repellat.
                    </p>
                    <ImageComp src='general/post.jpeg' alt='' w={600} h={600}/>
                </div>
            </div>
        </div>
    )
}

export default Post
