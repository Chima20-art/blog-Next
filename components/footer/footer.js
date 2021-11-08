import styles from "./footer.module.css";
import Script from "next/script";
import Head from "next/head";

const footer = () => {
  var tags = [
    "Digital product design",
    "UX design",
    "Remote work",
    "Creativity",
    "Strategy",
    "Design",
    "Magic",
    "Failure",
    "Suspense",
    "Why",
    "Why not",
    "Growth",
    "Sabotage",
    "Clarity",
    "Confusion",
    "Processes",
    "People",
    "Create",
    "Destroy",
  ];

  return (
    <div className={styles.footerContainer}>
      <p className={styles.p}>
        {tags.map((tag, i) => {
          tag = tag.toUpperCase();
          if (i % 2 == 0) {
            return (
              <p key={tag} className={styles.b}>
                {tag}
              </p>
            );
          } else {
            return (
              <p key={tag} className={styles.p1}>
                {tag}
              </p>
            );
          }
        })}
      </p>

      <div className={styles.description}>
        <p className={styles.title}>NORDIC ROSE</p>
        <p className={styles.textDescription}>
          By nurturing a close relationship with design and neighbouring
          subjects, Nordic Rose strives to distill the essence of their combined
          beauty into clarity of the tomorrow.
        </p>
      </div>
      <div className={styles.mediaLinks}>
        <div className={styles.link}>Twiter</div>
        <div className={styles.link}>LinkedIn</div>
        <div className={styles.link}>RSS</div>
      </div>
      <div className={styles.footerBottomText}>
        <p>© 2012-2021 Nordic Rose Co.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
};

export default footer;
