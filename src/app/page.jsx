import Image from 'next/image'
import styles from './page.module.css'
import Hero from "public/hero.png"

export default function Home() {
  return (
    <div className={styles.container}>
      <Image src={Hero} alt="" className={styles.img} />
    </div>
  )
}
