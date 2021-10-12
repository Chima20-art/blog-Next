import client from "../../client";
import { useRouter } from "next/router";
import BlockContent from "@sanity/block-content-to-react";

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
      {post?.body.map((block) => {
        if (block._type == "block") {
          return <BlockContent blocks={block} />;
        } else {
          if (block._type == "youtubevideo") {
            return <h1> video</h1>;
          }
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
