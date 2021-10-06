import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";

import sanityClient from "./client";

export default function SanityImage({ source }) {
  if (!source) return null;
  if (source._type != "image") return null;
  const imageProps = useNextSanityImage(sanityClient, source);

  return (
    <Img
      {...imageProps}
      layout="responsive"
      sizes="(max-width: 800px) 100vw, 800px"
    />
  );
}
