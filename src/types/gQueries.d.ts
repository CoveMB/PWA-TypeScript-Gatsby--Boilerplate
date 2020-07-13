import { FluidObject } from 'gatsby-image';

type ImageQuerySharp = {
  placeholderImage: {
    childImageSharp: {
      fluid: FluidObject | FluidObject[]
    }
  }
};
