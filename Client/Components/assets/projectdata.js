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

import Leslie from './Leslie/leslie.jpg'
import tablecraft from './Leslie/finished.jpg'
import step1 from './Leslie/pw02-01.jpg'
import step2 from './Leslie/pw02-04.jpg'
import step3 from './Leslie/pw02-05.jpg'
import step4 from './Leslie/pw02-06.jpg'

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
      image: step1,
      step: 'The Raw materials',
      description: 'Marking rough black walnut for milling',
    },
    {
      image: step4,
      step: 'Glue-up process',
      description: 'Gluing planks up into tops',
    },
    {
      image: step3,
      step: 'Laying out',
      description: 'Laying out slabs after sections have been glued-up',
    },
    {
      image: step4,
      step: 'Dry Assembly',
      description: 'Verify construction by dry fitting all the pieces together',
    },
    {
      image: tablecraft,
      step: 'Final product',
      description: 'Spray finish completed, and product is ready to hand over',
    },
  ],
  artistBio: {
    name: 'Leslie Selting',
    image: Leslie,
    bio: 'Leslie is a New Orleans wood craftsperson with multiple years experience in\
    making home goods like tables, chairs and construction.',
  },
  woodenSpoon: {
    name: 'Wooden Table',
    image: tablecraft,
    category: 'Wood Carving',
  },
};
