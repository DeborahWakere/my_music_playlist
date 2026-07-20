import styles from "./Card.module.css";

export default function Card({ image, name, description, audioUrl, embedUrl, videoUrl }) {
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

      {!audioUrl && embedUrl && (
        <div className={styles.embedWrapper}>
          <iframe
            src={embedUrl}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            className={styles.embedPlayer}
          />
        </div>
      )}

      {!audioUrl && !embedUrl && videoUrl && (
        <div className={styles.videoWrapper}>
          <iframe
            width="100%"
            height="315"
            src={videoUrl}
            title={`${name} video player`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={styles.videoPlayer}
          />
        </div>
      )}
    </article>
  );
}