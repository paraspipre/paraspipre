import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
  return (
    // <Link href={`/projects/${project.name.split(" ").join("_").toLowerCase()}`}>
      <div className={styles.card}>
        {/* <iframe
        style={{
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
          border: "none",
        }}
        src={project.demo}
        width="100%"
        height="250px"
        allow="autoplay"
        allowFullScreen
      /> */}
        <Image src={project.image} width={"1920"} height={"1080"} />

        <div className={styles.content}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className={styles.cta}>
            {project.source_code && (
              <a
                href={project.source_code}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.underline}
              >
                Source Code
              </a>
            )}
            {project?.demo && (
              <a
                href={project?.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.underline}
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    // </Link>
  );
};

export default ProjectCard;
