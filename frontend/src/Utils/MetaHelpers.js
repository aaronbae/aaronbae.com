import React from 'react';
import Helmet from "react-helmet";
import { isMyImageURL, convertMyImageURL } from "./HelperFunctions";

export function metaFromPost(thisPost) {
  let description = thisPost.content.join(" ").substring(0, 200) + "...";
  let img = ""
  for( let c in thisPost.content) {
    if(isMyImageURL(c)){
      img = convertMyImageURL(c);
      break;
    }
  }
  return (
    <Helmet>
      <title>{thisPost.title}</title>
      <meta name="title" content={thisPost.title} />
      <meta name="description" content={description} />
      <meta property="og:url" content={"https://www.aaronbae.com/blog/"+thisPost._id} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={thisPost.title} />
      <meta property="og:description" content={description} />
      {img !== "" && <meta property="og:image" content={img} />}
    </Helmet>
  )
}
export function metaDefault() {
  let description = 'A Website created and maintained by Aaron Bae.'
    +" On this website, many of the achievements and projects are highlighted to show "
    +"passions and interests of Aaron Bae. Make sure to share the website with "
    +"whomever might be intersted in working with him or get his opinion on something.";
  return (
    <Helmet>
      <meta charset="utf-8" />
      <title>AaronBae | Software Engineer</title>
      <meta name="title" content="AaronBae | Software Engineer" />
      <meta name="description" content={description} />
      <meta property="og:url" content={"https://www.aaronbae.com/"} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="AaronBae | Software Engineer" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://github.com/aaronbae/aaronbae.com/blob/master/aaronbae.com.screencapture.PNG" />
      <meta name="robots" content="index, follow" />
      <meta name="referrer" content="origin" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  )
}