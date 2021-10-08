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
      <div className={styles.content}>
        <div className={styles.firstPost}>
          <SanityImage
            source={firstPost?.mainImage}
            imgClassName={styles.firstPostImage}
          />
          <div className={styles.firstPostTitle}>{posts[0].title}</div>
          <div className={styles.postDescription}>{posts[0].description}</div>
          <div className={styles.solid} />
        </div>
        <div className={styles.allArticles}>
          <div className={styles.articlesTitle}>All articles</div>

          {posts.map((post) => (
            <div className={styles.articles}>
              <div>
                <SanityImage
                  source={post.mainImage}
                  imgClassName={styles.postImage}
                />
                <div>{post.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const posts = await client.fetch(
    '*[_type == "post" ]{title, mainImage, description}'
  );

  return {
    props: { posts },
  };
}
