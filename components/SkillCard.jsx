import styles from '../styles/ContactCode.module.css';



const SkillCard = ({item}) => {
  return (
    <div>
      <p className={styles.line}>
        <span className={styles.className}>&nbsp;&nbsp;"{item.title}" : </span>{" "}
        [
      </p>
      {item?.skills?.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item} ,
        </p>
      ))}
      <p className={styles.line}>&nbsp;&nbsp;],</p>
    </div>
  );
};

export default SkillCard;
