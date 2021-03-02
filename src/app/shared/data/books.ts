import { IBook } from '../../models/book';
import { Category } from '../../models/category';

export const books: IBook[] = [
  {
    id: '1',
    name: 'News of the World',
    img: 'https://images-production.bookshop.org/spree/images/attachments/4928756/original/9780062409218.jpg?1589084875',
    author: 'Paulette Jiles',
    description: 'In the aftermath of the Civil War, an aging itinerant news reader agrees to transport a young captive of the Kiowa back to her people in this exquisitely rendered, morally complex, multilayered novel of historical fiction from the author of Enemy Women that explores the boundaries of family, responsibility, honor, and trust.',
    price: 15.63,
    category: Category.HISTORICAL,
    createDate: Date.parse('June 20, 2017'),
    isAvailable: true
  },
  {
    id: '2',
    name: 'The Flight Attendant',
    img: 'https://images-production.bookshop.org/spree/images/attachments/13362997/original/9780593314005.jpg?1603833450',
    author: 'Chris Bohjalian',
    description: 'Now a limited series on HBO Max starring Kaley Cuoco and Rosie Perez, a powerful story about the ways an entire life can change in one night: a flight attendant wakes up in the wrong hotel, in the wrong bed, with a dead man--and no idea what happened.',
    price: 14.72,
    category: Category.DETECTIVE,
    createDate: Date.parse('December 08, 2020'),
    isAvailable: true
  },
  {
    id: '3',
    name: 'Cherry',
    img: 'https://images-production.bookshop.org/spree/images/attachments/248719/original/9780525435938.jpg?1588299938',
    author: 'Nico Walker',
    description: 'National Bestseller Soon to be a Major Motion Picture\n' +
      '"A miracle of literary serendipity, a triumph." --The Washington Post\n' +
      'A young medic returns from deployment in Iraq to two things: the woman he loves, and the opioid crisis sweeping across the Midwest. Soon deep in the thrall of heroin addiction, he arrives at what seems like the only logical solution: robbing banks. Written by a singularly talented, wildly imaginative debut novelist, Cherry is a bracingly funny and unexpectedly tender work of fiction straight from the dark heart of America.',
    price: 15.59,
    category: Category.LITERARY,
    createDate: Date.parse('June 25, 2019'),
    isAvailable: true
  },
  {
    id: '4',
    name: 'The Queen\'s Gambit',
    img: 'https://images-production.bookshop.org/spree/images/attachments/1489246/original/9781400030606.jpg?1608645771',
    author: 'Walter Tevis',
    description: 'Engaging and fast-paced, this gripping coming-of-age novel of chess, feminism, and addiction speeds to a conclusion as elegant and satisfying as a mate in four. Now an acclaimed Netflix series.',
    price: 15.59,
    category: Category.LITERARY,
    createDate: Date.parse('March 11, 2003'),
    isAvailable: true
  },
  {
    id: '5',
    name: 'American Gods',
    img: 'https://images-production.bookshop.org/spree/images/attachments/2579105/original/9780062572110.jpg?1588424973',
    author: 'Neil Gaiman',
    description: 'Now a STARZ(R) Original Series produced by FremantleMedia North America starring Ricky Whittle, Ian McShane, Emily Browning, and Pablo Schreiber.',
    price: 9.19,
    category: Category.FANTASY,
    createDate: Date.parse('March 28, 2017'),
    isAvailable: true
  },
  {
    id: '6',
    name: 'The Underground Railroad',
    img: 'https://images-production.bookshop.org/spree/images/attachments/4188602/original/9780345804327.jpg?1588686392',
    author: 'Colson Whitehead',
    description: 'In this #1 New York Times bestseller, Cora is a young slave on a cotton plantation in Georgia. An outcast even among her fellow Africans, she is on the cusp of womanhood--where greater pain awaits. And so when Caesar, a slave who has recently arrived from Virginia, urges her to join him on the Underground Railroad, she seizes the opportunity and escapes with him.',
    price: 15.59,
    category: Category.HISTORICAL,
    createDate: Date.parse('January 30, 2018'),
    isAvailable: true
  },

]
