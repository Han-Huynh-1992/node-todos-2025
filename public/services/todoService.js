// app object is already declared in 'todoController'

app.factory('todoService', ['$http', ($http) => {
    return {
        getToDos: function () {
            return $http.get('/api/todos');
        },
        createToDo: function (newToDo) {
            return $http.post('/api/todo', newToDo);
        },
        updateToDo: function (todo) {
            return $http.put('/api/todo', todo);
        },
        deleteToDo: function (id) {
            return $http.delete('/api/todo/' + id);
        }
    };
}]);