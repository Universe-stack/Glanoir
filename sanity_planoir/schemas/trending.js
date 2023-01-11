export default {
    name: 'trending',
    title: 'trending',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      { 
        name: 'details',
        title: 'Details',
        type: 'string',
      },
      { 
        name: 'rating',
        title: 'Rating',
        type: 'number',
      },
      { 
        name:'form',
        title: 'Form',
        type: 'string',
      },
      { 
        name: 'type',
        title: 'Type',
        type: 'string',
      },
      { 
        name: 'brand',
        title: 'Brand',
        type: 'string',
      },
      { 
        name: 'size',
        title: 'Size',
        type: 'number',
      }
    ]
  }