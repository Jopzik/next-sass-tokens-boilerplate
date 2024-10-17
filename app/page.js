import s from './delete.module.css'
import { BoxAdd } from 'iconsax-react'

export default function Home() {
  return (
    <div className={s.container}>
      <BoxAdd
        size="128"
        color="#0573E6"
        variant="Bulk"
      />
      <h1>Next Boilerplate + Design Tokens</h1>
      <p>By <a
        target="_blank"
        href="https://www.alexismora.design/"
      >Alexis Mora</a> (Jopzik).</p>
    </div>
  )
}
