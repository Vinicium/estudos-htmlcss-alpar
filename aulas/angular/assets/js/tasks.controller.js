app.controller("TaskController", function ($scope, TaskService) {
  $scope.showCompletedOnly = false;
  $scope.showIncocompletedOnly = false;
  $scope.showToday = false;
  $scope.modalActive = false;
  $scope.today = new Date().toLocaleDateString();
  $scope.tasks = TaskService.getTasks();

  $scope.taskInput = {
    title: "",
    date: "",
  };

  $scope.toggleModal = () => {
    $scope.modalActive = !$scope.modalActive;
  };

  $scope.handleSubmitAddTask = () => {
    console.log($scope.taskInput.title, $scope.taskInput.date);

    const title = $scope.taskInput.title;
    const date = $scope.taskInput.date;
    const dateStr = $scope.taskInput.date.toLocaleDateString();

    if (!title || !date) return;

    TaskService.addTask(title, date, dateStr);
    $scope.tasks = TaskService.getTasks();

    $scope.toggleModal();
    $scope.taskInput.date = "";
    $scope.taskInput.title = "";
  };

  $scope.toggleCheckedTask = () => {
    TaskService.toggleCheck();
    $scope.tasks = TaskService.getTasks();
  };

  $scope.deleteTask = (currentTask) => {
    TaskService.removeTask(currentTask.id);
    $scope.tasks = TaskService.getTasks();
  };

  $scope.validate = (error, touched) => {
    console.log(touched);
    if (!touched) {
      return {};
    }
    const values = Object.values(error);
    if (values.length === 0) {
      console.log({});
      return {};
    }

    const isTrue = values.reduce((acc, cur) => acc && cur, true);

    if (isTrue) {
      console.log({ "border-color": "red" });
      return { "border-color": "red" };
    }
  };
  /* 
  $scope.validateForm = (form) =>{
    console.log(form)
  } */
});
