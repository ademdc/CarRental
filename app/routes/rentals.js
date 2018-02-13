import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: 'grand-old-mansion',
      title: 'Grand Old Mansion',
      owner: 'Veruca Salt',
      city: 'San Francisco',
      category: 'Estate',
      bedrooms: 15,
      image: 'http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2018/01/08113103/2018-SH-GMP-Cars-Coffee-Trevor-Ryan_053-1200x800.jpg',
      description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
    }, {
      id: 'urban-living',
      title: 'Urban Living',
      owner: 'Mike TV',
      city: 'Seattle',
      category: 'Condo',
      bedrooms: 1,
      image: 'https://cdn.vox-cdn.com/thumbor/HtsyeSUY5qMjCaPLtMIO1IoQ21Y=/0x0:2880x1350/1200x800/filters:focal(1102x445:1562x905)/cdn.vox-cdn.com/uploads/chorus_image/image/56659171/model_s_001.0.jpg',
      description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'
    }, {
      id: 'downtown-charm',
      title: 'Downtown Charm',
      owner: 'Violet Beauregarde',
      city: 'Portland',
      category: 'Apartment',
      bedrooms: 3,
      image: 'https://images.honestjohn.co.uk/imagecache/file/crop/1200x800/media/5688864/Volkswagen~Golf~2013~(14).jpg',
      description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
    }];
  }
});
