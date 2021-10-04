import client from "../../client";

const Post = (props) => {
  return (
    <article>
      <h1>{props.slug.current}</h1>
    </article>
  );
};
Post.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  const data = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]
  `,
    { slug }
  );

  console.log("sanity data : ", data);
  return data;
};
export default Post;
