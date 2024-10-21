import Link from 'next/link'
import s from '../app/delete.module.css'

const Post = ({ title, slug, cover }) => {
  return (
    <article className={s.post}>
      <img
        className={s.cover}
        src={cover.responsiveImage.src}
      />
      <div className={s.content}>
        <h3>{title}</h3>
        <Link
          href={`/posts/${slug}`}
        >See more</Link>
      </div>
    </article>
  )
}

export default Post
