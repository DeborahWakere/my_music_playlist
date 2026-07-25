import styles from "./Card.module.css";

export default function Card({ image, name, description, audioUrl }) {
  return (
    <article className={styles.card}>
      {image && <img src={image} alt={name} className={styles.image} />}

      <div className={styles.cardContent}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      {audioUrl && (
        <div className={styles.audioWrapper}>
          <audio controls className={styles.audioPlayer} src={audioUrl}>
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </article>
  );
}
