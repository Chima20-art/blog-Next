import client from "../client";
import Link from "next/link";

import Img from "next/image";
import SanityImage from "../sanityImage";

import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer/footer";

export default function Home(props) {
  var { posts } = props;
  var firstPost = posts[0];
  var restOfPosts = posts.slice(1, posts.length);

  console.log(restOfPosts);
  return (
    <div className={styles.container}>
      <Header headerClassName={styles.headerTitle} />

      <div className={styles.content}>
        <Link href={"/post/" + firstPost?.slug?.current}>
          <a key={firstPost?.slug?.current} className={styles.firstPost}>
            <SanityImage
              source={firstPost?.mainImage}
              imgClassName={styles.firstPostImage}
            />
            <div className={styles.firstPostTitle}>{posts[0].title}</div>
            <div className={styles.postDescription}>{posts[0].description}</div>
            <div className={styles.solid} />
          </a>
        </Link>
        <div className={styles.border} />

        <div className={styles.allArticles}>
          <div className={styles.articlesTitle}>All articles</div>

          <div className={styles.articles}>
            {restOfPosts.map((post) => (
              <Link
                key={post?.slug?.current}
                href={"/post/" + post?.slug?.current}
              >
                <a>
                  <div className={styles.post}>
                    <SanityImage
                      source={post.mainImage}
                      imgClassName={styles.postImage}
                    />
                    <div className={styles.postTitle}>{post.title}</div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const posts = await client.fetch(
    '*[_type == "post" ]{title, slug, mainImage, description}'
  );
  console.log();
  return {
    props: { posts },
  };
}
