import styles from './Card.module.css';

interface data{
  children: React.ReactNode;
}

const Card = (props:data) => {
  return <div className={`${styles.card} ${styles.marginTop}`}>{props.children}</div>
};

export default Card;