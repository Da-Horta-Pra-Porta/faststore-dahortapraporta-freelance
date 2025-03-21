import styles from "./about-section.module.scss";
export interface IAbout {
  title: string;
  paragraphs: Array<{ text: string }>;
  image?: Array<{
    src: string;
    alt: string;
  }>;
}

export function AboutSection(props: IAbout) {
  const imageCount = props.image ? props.image.length : 0;
  let imageClass = '';

  if (imageCount === 1) {
    imageClass = styles.oneImage;
  } else if (imageCount === 2) {
    imageClass = styles.twoImages;
  } else if (imageCount === 3) {
    imageClass = styles.threeImages;
  } else if (imageCount >= 4) {
    imageClass = styles.fourImages;
  }

  return (
    <section className={styles.aboutSectionContainer}>
      <div className={`${styles.imageContainer} ${imageClass}`}>
        {props.image && props.image.length > 0 && (
          <>
            {props.image.map((img, index) => (
              <img key={index} src={img.src} alt={img.alt} />
            ))}
          </>
        )}
      </div>
      <div className={styles.textContainer}>
        <h2>{props.title}</h2>
        {props.paragraphs.map((p, index) => (
          <p key={index}>{p.text}</p>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;