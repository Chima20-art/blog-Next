import client from "../client";

import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer/footer";

export default function Home(props) {
  var { posts } = props;
  var firstPost = posts[0];

  posts.splice(0, 1);
  console.log(posts);
  return (
    <div className={styles.container}>
      <Header />

      <div>{posts[0].title}</div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const posts = await client.fetch('*[_type == "post" ]{title, mainImage,}');

  return {
    props: { posts },
  };
}
