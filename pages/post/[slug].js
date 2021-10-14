import client from "../../client";
import { useRouter } from "next/router";
import BlockContent from "@sanity/block-content-to-react";
import SanityImage from "../../sanityImage";

import YouTube from "react-youtube";
import styles from "../../styles/Home.module.css";
const Post = (props) => {
  const slug = props.slug;
  const post = props.post;
  console.log(post);
  if (!slug || !post || !post.title) {
    return (
      <div>
        <p>post not found</p>
      </div>
    );
  }

  return (
    <article>
      <h1>{post?.title}</h1>
      <h2>{post?.minutesOfRead}</h2>
      {post?.body.map((item) => {
        if (item._type == "block") {
          return <BlockContent className={styles.block} blocks={item} />;
        }
        if (item._type == "youtubevideo") {
          return <YouTube videoId={item.url} />;
        }
        if (item._type == "thin-divider") {
          return <div className={styles.solid} />;
        }
        if (item._type == "image") {
          return <SanityImage source={item} imgClassName={styles.postImage} />;
        }
        if (item._type == "thick-divider") {
          return <div className={styles.bold} />;
        }
        if (item._type == "customized-divider") {
          return (
            <div className={styles.roseDivider}>
              <div className={styles.before}></div>
              <div className={styles.rose}></div>
              <div className={styles.after}></div>
            </div>
          );
        }
        if (item._type == "linkParagraph") {
          return (
            <div className={styles.block}>
              <div className={styles.linkParagraphTitle}>{item.title}</div>
              <div>{item.description}</div>
            </div>
          );
        }
        {
        }
      })}
    </article>
  );
};

export default Post;
export async function getServerSideProps(context) {
  const { slug = null } = context.query;
  const query =
    "*[_type == 'post' && slug.current=='" +
    slug +
    "'][0]{ _createdAt,title, author->, body, mainImage, minutesOfRead, tags[]->, }";
  const post = await client.fetch(query);

  return {
    props: {
      slug,
      post,
    },
  };
}
