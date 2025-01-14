import Image from "next/image";
import styles from "../styles/HomePage.module.css";
const AboutPage = () => {
  return (
    <>
      <div>
        <h2 style={{ marginBottom: "20px" }}>A Little Bit About Me...</h2>
        <Image
          className={styles.pic}
          width={150}
          height={150}
          src="/paras.jpeg"
        />
      </div>
      <ul>
        <li>
          <h3 style={{ marginTop: "20px" }}>
            I am a BTech graduate with a robust academic background in courses
            such as Operating Systems, Database Management System, Computer
            Networking, Data Structures, and Algorithms, I have gained hands-on
            experience as a SDE at Sri Sri Tattva, Full Stack Web Developer
            Intern at Tapop and an App Developer Intern at Sameep.
          </h3>
        </li>
        <li>
          <h3 style={{ marginTop: "20px" }}>
            My technical expertise spans languages like C/C++, JavaScript, and
            Python, with proficiency in a range of developer tools and
            frameworks like Reactjs , Nextjs, MongoDB , Nodejs . Notable
            projects include a AI avatar generation website using Stable
            Diffusion, a user-friendly blogging platform using MERN stack, and a
            React Native mobile app for plant disease detection using CNN (deep
            learning).
          </h3>
        </li>
        <li>
          <h3 style={{ marginTop: "20px" }}>
            In addition to my development skills, I am well-versed in cloud
            services, particularly AWS, and possess knowledge in DevOps
            practices. I have successfully applied my skills in machine
            learning, utilizing frameworks such as TensorFlow and Keras.
          </h3>
        </li>
        {/* <li>
          <h3 style={{ marginTop: "20px" }}>
            Driven by a passion for technology and a commitment to excellence, I
            am eager to contribute my skills and dedication to innovative
            projects.
          </h3>
        </li> */}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
