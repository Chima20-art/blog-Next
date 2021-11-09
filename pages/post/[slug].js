import client from "../../client";
import { useRouter } from "next/router";
import BlockContent from "@sanity/block-content-to-react";
import SanityImage from "../../sanityImage";
import Link from "next/link";
import Home from "..";

import YouTube from "react-youtube";
import Header from "../../components/header";
import Footer from "../../components/footer/footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../../styles/Home.module.css";
const Post = (props) => {
  const slug = props.slug;
  const post = props.post;
  const posts = props.posts;

  if (!slug || !post || !post.title) {
    return (
      <div>
        <p>post not found</p>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Header headerClassName={styles.postHeader} />

      <article className={styles.article}>
        <h1 className={styles.articleTitle}>{post?.title}</h1>
        <h2>{post?.minutesOfRead}</h2>
        <p className={styles.headerDescription}>{post?.description}</p>
        <SanityImage
          source={post?.headerImage}
          imgClassName={styles.headerImage}
        />

        <div className={styles.block}>
          {post?.body.map((item) => {
            if (item._type == "block") {
              return <BlockContent blocks={item} />;
            }
            if (item._type == "youtubevideo") {
              return <YouTube videoId={item.url} />;
            }
            if (item._type == "thin-divider") {
              return <div className={styles.solid} />;
            }
            if (item._type == "image") {
              return (
                <SanityImage source={item} imgClassName={styles.postImage} />
              );
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
                <Link href={item.URL}>
                  <a className={styles.linkParagraph}>
                    <div className={styles.bookMark}></div>
                    <div className={styles.paragraph}>
                      <div className={styles.linkParagraphTitle}>
                        {item.title}
                      </div>
                      <div className={styles.description}>
                        {item.description}
                      </div>
                      <div className={styles.footer}>{item.footer}</div>
                    </div>
                  </a>
                </Link>
              );
            }
          })}
        </div>

        <div className={styles.media}>
          <div className={styles.facebookDiv}>
            <img className={styles.fbLogo} />
            share on facebook
          </div>
          <div className={styles.twiterDiv}>
            <img className={styles.tweetLogo} />
            share on twiter
          </div>
        </div>

        <div className={styles.tags}>
          <div>Tags: &nbsp;</div>
          <div className={styles.tagsArangement}>
            {post.tags.map((item, index) => {
              return (
                <div key={item.title}>
                  {item.title + (post.tags.length - 1 != index ? "," : ".")}
                  &nbsp;
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.author}>
          <SanityImage
            source={post?.author.image}
            imgClassName={styles.authorImage}
          />
          <div className={styles.authorBio}>
            <b>{post?.author.name}</b> {post?.author.bio}
          </div>
        </div>
      </article>
      <div className={styles.eyesBorder} />

      <div className={styles.next}>
        <div className={styles.nextTitle}>What to read next</div>

        <div className={styles.articles}>
          {posts.map((post) => (
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

      <Footer />
    </div>
  );
};

export default Post;
export async function getServerSideProps(context) {
  const { slug = null } = context.query;
  const query =
    "*[_type == 'post' && slug.current=='" +
    slug +
    "'][0]{ _createdAt,title,headerImage, description, author->,  author-> , body, mainImage, minutesOfRead, tags[]->, }";
  const post = await client.fetch(query);
  const posts = await client.fetch(
    '*[_type == "post" && slug.current!="' +
      slug +
      '" ]{title, slug, mainImage, description}'
  );

  return {
    props: {
      slug,
      post,
      posts,
    },
  };
}
