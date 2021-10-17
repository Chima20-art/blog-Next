import styles from "../styles/Home.module.css";
import Link from "next/dist/client/link";
const header = ({ headerClassName }) => {
  return (
    <Link href="/">
      <div className={headerClassName}>NORDIC ROSE</div>
    </Link>
  );
};

export default header;
