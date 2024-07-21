export const filters = [
  {
    id: 'color',
    name: 'Color',
    filter: 'filterByColor',
    options: [
      {value: 'white', label: 'White'},
      {value: 'beige', label: 'Beige'},
      {value: 'blue', label: 'Blue'},
      {value: 'brown', label: 'Brown'},
      {value: 'green', label: 'Green'},
      {value: 'yellow', label: 'Yellow'},
    ],
  },
  {
    id: 'size',
    name: 'Size',
    filter: 'filterBySize',
    options: [
      {value: 'S', label: 'S'},
      {value: 'M', label: 'M'},
      {value: 'L', label: 'L'},
    ],
  },
];

export const singleFilter = [
  {
    id: 'price',
    name: 'Price',
    filter: 'filterByPriceRange',
    options: [
      {value: '159-399', label: '159-399'},
      {value: '399-999', label: '399-999'},
      {value: '999-1999', label: '999-1999'},
      {value: '1999-2999', label: '1999-2999'},
      {value: '2999-3999', label: '2999-3999'},
      {value: '3999-4999', label: '3999-4999'},
    ],
  },
  {
    id: 'discount',
    name: 'Discount Range',
    filter: 'filterByDiscount',
    options: [
      {value: '10', label: '10'},
      {value: '20', label: '20'},
      {value: '30', label: '30'},
      {value: '40', label: '40'},
      {value: '50', label: '50'},
      {value: '60', label: '60'},
      {value: '70', label: '70'},
      {value: '80', label: '80'},
    ],
  },
  {
    id: 'stock',
    name: 'availability',
    filter: 'filterByAvailability',
    options: [
      {value: 'in_stock', label: 'In_stock'},
      {value: 'out_of_stock', label: 'Out_of_stock'},
    ],
  },
];
