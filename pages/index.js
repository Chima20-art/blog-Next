import client from "../client";

import Img from "next/image";
import SanityImage from "../sanityImage";

import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer/footer";

export default function Home(props) {
  var { posts } = props;
  var firstPost = posts[0];
  var restOfPosts = posts.slice(0, 1);

  console.log(restOfPosts);
  return (
    <div className={styles.container}>
      <Header />
      <SanityImage source={firstPost?.mainImage} />
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
