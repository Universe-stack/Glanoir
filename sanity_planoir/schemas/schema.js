import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import products from './products';
import banner from './banner';
import trending from './trending';
import usersChoice from './users-choice';
import monthlyTrendies from './monthly-trendies';

export default createSchema({
  
  name: 'default',
  
  types: schemaTypes.concat([banner, products,trending,usersChoice,monthlyTrendies ]),
})
