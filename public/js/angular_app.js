/*
    Params:
        'app.todos': angular app name
        []: other dependencies/modules
*/
let app = angular.module('app.todos', ['xeditable']);

/*
    ['$scope', '$log', ...]: services in angular will be used in controller
*/
app.controller('todoController', ['$scope', 'todoService', ($scope, todoService) => {
    $scope.appName = "TO-DO Dashboard";
    $scope.formData = {};
    $scope.todos = [];
    $scope.loading = true;

    todoService.getToDos().then((response) => {
        $scope.todos = response.data;
        $scope.loading = false;
    });

    $scope.addToDo = () => {
        $scope.loading = true;
        let newToDo = {
            text: $scope.formData.text,
            isDone: false
        };

        todoService.createToDo(newToDo).then((response) => {
            $scope.todos = response.data;
            $scope.formData.text = "";
            $scope.loading = false;
        });
    }

    $scope.updateToDo = (todo) => {
        $scope.loading = true;
        todoService.updateToDo(todo).then((response) => {
            $scope.todos = response.data;
            $scope.loading = false;
        });
    }

    $scope.deleteToDo = (todo) => {
        $scope.loading = true;
        todoService.deleteToDo(todo._id).then((response) => {
            $scope.todos = response.data;
            $scope.loading = false;
        });
    }
}]);