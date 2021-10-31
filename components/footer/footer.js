import styles from "./footer.module.css";
import Script from "next/script";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.p}>
        <div>Digital product design</div>
        <div>UX design</div>
        <div>Remote work</div>
        <div>Creativity</div>
        <div>Strategy</div>
        <div>Design</div>
        <div>Magic</div>
        <div>Failure</div>
        <div>Suspense</div>
        <div>Why</div>
        <div>Why not</div>
        <div>Growth</div>
        <div>Sabotage</div>
        <div>Clarity</div>
        <div>Confusion</div>
        <div>Processes</div>
        <div>People</div>
        <div>Create</div>
        <div>Destroy</div>
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
