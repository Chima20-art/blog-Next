import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";

import sanityClient from "./client";

export default function SanityImage({ source, imgClassName }) {
  if (!source) return null;
  if (source._type != "image") return null;
  const imageProps = useNextSanityImage(sanityClient, source);

  return <img {...imageProps} className={imgClassName} />;
}
