const app = angular.module("taskModule", []);

app.controller("TaskController", function ($scope) {
  $scope.tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  $scope.showCompletedOnly = false;
  $scope.showIncocompletedOnly = false;
  $scope.showToday = false;
  $scope.today = new Date().toLocaleDateString();
  $scope.modalActive = false;

  $scope.taskInput = {
    title: "",
    date: "",
  };

  $scope.toggleModal = () => {
    $scope.modalActive = !$scope.modalActive;
  };

 


  $scope.handleSubmitAddTask = () => {
    console.log($scope.taskInput.title, $scope.taskInput.date);

    if (!$scope.taskInput.title || !$scope.taskInput.date) return;

    $scope.tasks.push({
      id: Math.random().toString(36).substring(2, 9),
      title: $scope.taskInput.title,
      date: $scope.taskInput.date,
      dateStr: $scope.taskInput.date.toLocaleDateString(),
    });

    localStorage.setItem("tasks", JSON.stringify($scope.tasks));

    $scope.toggleModal();
    $scope.taskInput.date = "";
    $scope.taskInput.title = "";
  };

  $scope.toggleTaskChecked = () => {};

  $scope.toggleCheckedTask = () => {
    localStorage.setItem("tasks", JSON.stringify($scope.tasks));
  };

  $scope.deleteTask = (currentTask) => {
    $scope.tasks = $scope.tasks.filter((task) => task.id !== currentTask.id);
    localStorage.setItem("tasks", JSON.stringify($scope.tasks));
  };
});
