const apiKey = "ced6b1491cd2a537e307b0a0e6b6a71b";
const lang = "pt_br";
const units = "metric";

const app = angular.module("weatherApp", []);
app.controller("weatherController", function ($scope, $http) {
  $scope.cityName = "";
  $scope.city = "";
  $scope.cardActive = false;
  $scope.temperature = "";
  $scope.feelslike = "";
  $scope.minTemperature = "";
  $scope.maxTemperature = "";
  $scope.humidity = "";
  $scope.windVelocity = "";
  $scope.windOrientation = "";
  $scope.iconUrl = "";

  $scope.callApi = async () => {
    const city = $scope.city || localStorage.getItem("city") || "São Paulo";

    const response = await $http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`
    );

    const { data } = response;

    console.log(data);

    const icon = data.weather[0].icon;
    $scope.iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

    $scope.temperature = Math.round(data.main.temp);
    $scope.feelslike = Math.round(data.main.feels_like);
    $scope.minTemperature = Math.round(data.main.temp_min);
    $scope.maxTemperature = Math.round(data.main.temp_max);
    $scope.humidity = data.main.humidity.toLocaleString();

    $scope.windVelocity = data.wind.speed.toLocaleString();
    $scope.windOrientation = data.wind.deg.toLocaleString();

    $scope.cityName = data.name;

    $scope.cardActive = true;
    localStorage.setItem("city", data.name);
    $scope.$apply();
  };

  $scope.callApi();
});
