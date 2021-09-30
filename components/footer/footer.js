import styles from "./footer.modules.css";

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
        <p>NORDIC ROSE</p>
        <p>
          By nurturing a close relationship with design and neighbouring
          subjects, Nordic Rose strives to distill the essence of their combined
          beauty into clarity of the tomorrow.
        </p>
      </div>
    </div>
  );
};

export default footer;
