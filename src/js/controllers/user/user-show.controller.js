angular
 .module('ldnFabric')
 .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.inject = ['User', '$stateParams'];
function UsersShowCtrl(User, $stateParams) {
  const vm = this;
  vm.user = {};

  vm.user = User.get({ id: $stateParams.id });
  
}
