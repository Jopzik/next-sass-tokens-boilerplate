'use client'
import s from '../../app/delete.module.css'
import { BoxAdd } from 'iconsax-react'
import PostsList from '@/components/PostsList'

const HomePage = ({ data }) => {
  const { allPosts } = data
  
  return (
    <>
      <div className={s.container}>
        <BoxAdd
          size="128"
          color="#0573E6"
          variant="Bulk"
        />
        <h1>{data?.homePage?.title}</h1>
        <a
          target="_blank"
          href="https://www.alexismora.design/"
        >{data?.homePage?.caption}</a>
      </div>
      <PostsList allPosts={allPosts} />
    </>
  )
}

export default HomePage
