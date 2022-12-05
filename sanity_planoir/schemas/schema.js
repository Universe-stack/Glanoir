import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import productMen from './product-men';
import productWomen from './product-women';
import banner from './banner';

export default createSchema({
  
  name: 'default',
  
  types: schemaTypes.concat([banner, productMen,productWomen ]),
})
