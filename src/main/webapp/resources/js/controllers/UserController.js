'use strict';

/**
 * UserController
 */
var UserController = function($scope, $http) {
    $scope.fetchUsersList = function() {
        $http.get('users/userlist.json').success(function(userList){
            $scope.users = userList;
        });
    };

    $scope.addNewUser = function(newUser) {
        $http.post('users/addUser/' + newUser).success(function() {
            $scope.fetchUsersList();
        });
        $scope.userName = '';
    };

    $scope.removeUser = function(userName) {
        $http.delete('users/removeUser/' + userName).success(function() {
            $scope.fetchUsersList();
        });
    };

    $scope.removeAllUsers = function() {
        $http.delete('users/removeAllUsers').success(function() {
            $scope.fetchUsersList();
        });

    };
    $scope.updateUser = function (userId) {
        $http.put('users/updateUser/'+userId).success(function () {
            $scope.fetchUsersList();
        })
    }

    $scope.fetchUsersList();
};