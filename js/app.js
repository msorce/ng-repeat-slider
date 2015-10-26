var app = angular.module('app', []);
app
  .directive('slickSlider', ['$http', function($http) {
    return {
      restrict: 'A',
      link: function(scope, el, attrs) {
        setTimeout(function() {
          $(el).slick(scope.$eval(attrs.slickSlider));
        }, 0)
      },
      controller: function($scope) {
        $http({
          method: 'GET',
          url: '/data/slide-data.json'
        }).then(function(result) {
          $scope.slides = result.data.slides;
          console.log($scope.slides);
        }, function(result) {
          alert("Error: No data returned");
        });
      },
    };
  }]);

app
  .controller('footerCtrl', ['$scope', function($scope) {
    $scope.date = new Date();
  }]);
