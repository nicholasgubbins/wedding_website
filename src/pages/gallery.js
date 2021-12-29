
import { graphql } from 'gatsby';
import React from 'react';
import Layout from "../components/layout";

import Gallery from '@browniebroke/gatsby-image-gallery/src';

const gal = ({ data, location }) => {
  const images = data.images.edges.map(({ node }, index) => ({
    ...node.childImageSharp,
    // Generate name based on the index as caption.
    caption: `Alyssa Barletter`,
  }))
  // `images` is an array of objects with `thumb` and `full`
  return (
    <Layout title="Gallery" location={location}>
      <Gallery images={images} />
      Photos Courtesy of Alyssa Barletter
    </Layout>
  )
};

export const pageQuery = graphql`
query ImagesForGallery {
  images: allFile(
    filter: { relativeDirectory: { eq: "gallery" } }
    sort: { fields: name }
  ) {
    edges { 
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
export default gal;
