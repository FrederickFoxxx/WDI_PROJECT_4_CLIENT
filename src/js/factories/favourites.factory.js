angular
 .module('ldnFabric')
 .factory('Favourite', FavouritesFactory);

FavouritesFactory.$inject = ['$resource', 'API'];
function FavouritesFactory(API, $resource) {
  return $resource(`${API}/favourites/:id`, { id: '@_id'});
}
