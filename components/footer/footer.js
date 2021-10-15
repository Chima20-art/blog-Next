import styles from "./footer.module.css";
import Script from "next/script";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.scrollDiv}>
        <div>Magic</div>
        <div>Think</div>
        <div>Magic</div>
        <div>Think</div>
        <div>Magic</div>
        <div>Think</div>
        <div>Magic</div>
        <div>Think</div>
      </div>

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
