import { FluidObject } from 'gatsby-image';

type ImageQuerySharp = {
  placeholderImage: {
    childImageSharp: {
      fluid: FluidObject | FluidObject[]
    }
  }
};

type Meta = {
  title: string,
  description: string
};

type SiteData<M = Meta> = {
  site: {
    siteMetadata: M
  }
};
