import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>Software</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <Image
              className={styles.pic}
              width={200}
              height={200}
              src="/paras.jpeg"
            />
            <h1 className={styles.name}>Paras Pipre</h1>
            <h6 className={styles.bio}>
              Software Engineer <br />
              MERN | ML&AI
            </h6>
            <div className={styles.btncont}>
              <Link href="/projects">
                <button className={styles.button}>My Work</button>
              </Link>
              <Link href="/contact">
                <button className={styles.outlined}>Contact Me</button>
              </Link>
              <Link
                href="/resume"
                target="_blank"
              >
                <button className={styles.outlined}>
                  Resume
                </button>
              </Link>
            </div>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
