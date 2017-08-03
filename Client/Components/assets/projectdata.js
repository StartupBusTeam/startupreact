import craft1 from './randomgoods/ethnic jewlery.jpg';
import craft2 from './randomgoods/handcrafted-forged-chef-knives.jpg';
import craft3 from './randomgoods/necklace.jpg';
import craft4 from './randomgoods/Colorful beaded necklace.jpg';
import craft5 from './randomgoods/hand made textiles.jpg';
import craft6 from './randomgoods/handcrafted ring.jpg';
import craft7 from './randomgoods/traditional knife.jpg';
import craft8 from './randomgoods/Ceramic cup.jpg';
import craft9 from './spoon-carving-1.jpg';
import craft10 from  './randomgoods/3D paper sculpture art.jpg';
import craft11 from  './randomgoods/Hand-Carved-Wooden-Sculpture.jpg';
import craft12 from  './randomgoods/basket.jpg';
import James from './James.jpg'

import spoon1 from './craftstory/spoon-carving1.jpg';
import spoon2 from './craftstory/spoon-carving-2.jpg';
import spoon3 from './craftstory/spoon-carving-3.jpg';
import spoon4 from './craftstory/spoon-carving-4.jpg';
module.exports = {
  data: [
    {
      name: 'ethnic jewlery',
      image: craft1,
      category: 'Jewelry',
    },
    {
      name: 'Colorful beaded neckace',
      image: craft4,
      category: 'Other',
    },
    {
      name: 'hand made textiles',
      image: craft5,
      category: 'Textiles',
    },
    {
      name: 'traditional knife',
      image: craft7,
      category: 'Metal',
    },
    {
      name: '3D paper sculpture art',
      image: craft10,
      category: 'Paper',
    },
    {
      name: 'Ceramic cup',
      image: craft8,
      category: 'Ceramics',
    },
    {
      name: 'Wooden Sculpture',
      image: craft11,
      category: 'Wood',
    },
    {
      name: 'Hand woven Basket',
      image: craft12,
      category: 'Basketry',
    },
    {
      name: 'necklace',
      image: craft3,
      category: '',
    },
  ],
  craftStory: [
    {
      image: spoon1,
      step: 'Dishing the Bowl',
      description: 'Makeing rough cuts across the grain and finishing cuts with the grain, to rough out the bowl.',
    },
    {
      image: spoon3,
      step: 'Shape the Outside of the Bowl',
      description: 'Working on the outside of the bowl. Used a drawknife and handsaw to shape three large chamfers, two on each side and one on the end. Used a spokeshave to round over the edges of the facets.',
    },
    {
      image: spoon4,
      step: 'The Finishing Touches',
      description: 'Finally, use the spokeshave to narrow down the shoulders.Leaving too much wood here, makes the spoon heavy, and bulky, so I prefer to use a rasp.',
    },
  ],
  artistBio: {
    name: 'James Goedert',
    image: James,
    bio: 'James is a New Orleans wood craftsman with multiple years experience in\
    making home goods like tables, chairs and construction.',
  },
  woodenSpoon: {
    name: 'Wooden Spoon',
    image: craft9,
    category: 'Wood Carving',
  },
};
