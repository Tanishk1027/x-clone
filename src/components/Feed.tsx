import React from 'react'
import Post from './Post'
import { prisma } from '@/prisma'

const Feed = async () => {

  const posts = await prisma.post.findMany()

  return (
    <div className=''>
      {posts.map((posts) => (
        <div key={posts.id}>
          <Post/>
        </div>
      ))}
    </div>
  )
}

export default Feed
