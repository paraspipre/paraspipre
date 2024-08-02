import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiMailFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD Software</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>
              <p>P</p>
              <p>a</p>
              <p>r</p>
              <p>a</p>
              <p>s</p>
              <p>_</p>
              <p>P</p>
              <p>i</p>
              <p>p</p>
              <p>r</p>
              <p>e</p>
            </h1>
            <h6 className={styles.bio}>Software Engineer</h6>
            <div className={styles.btncont}>
              <Link href="/projects">
                <button className={styles.outlined}>Projects</button>
              </Link>
              <Link href="/contact">
                <button className={styles.outlined}>Contact</button>
              </Link>
              <Link href="/resume" target="_blank">
                <button className={styles.outlined}>Resume</button>
              </Link>
            </div>
            <div className={styles.iconcont}>
              <Link
                href="https://www.linkedin.com/in/paraspipre/"
                target="_blank"
              >
                <p className={styles.icon}>
                  <FaLinkedin />
                </p>
              </Link>
              <Link href="https://github.com/paraspipre/" target="_blank">
                <p className={styles.icon}>
                  <FaGithubSquare />
                </p>
              </Link>
              <Link href="mailto:paras11917@gmail.com" target="_blank">
                <p className={styles.icon}>
                  <IoMdMail />
                </p>
              </Link>
              <Link href="https://leetcode.com/paraspipre" target="_blank">
                <p className={styles.icon}>
                  <SiLeetcode />
                </p>
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
