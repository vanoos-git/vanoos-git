(function() {

  'use strict';

  var app = angular.module('app', ['ui.router', 'firebase']);

  app.controller("subController", function($scope, $firebaseArray) {
    $scope.submitFunc = function() {
      var inpErr = '';
      if (!$scope.text) {
        inpErr += "Fill name field <br>\n";
      }
      if (!$scope.email) {
        inpErr += "Invalid email field\n";
      }
      if (inpErr != '')
        document.getElementById('txtf').innerHTML = inpErr;
      else {
        document.getElementById('txtf').innerHTML = "Thanks";
        $scope.ShowOrHide();
      }
    };
  })

  app.controller("portController", function($scope, $firebaseArray, GetArr) {
    $scope.flexblocks = GetArr("flexblocks");
  })

  app.service('GetArr', function($firebaseArray) {
    return function(url) {
      var ref = firebase.database().ref().child(url);
      return $firebaseArray(ref);
    };
  })

  app.service('GetObj', function($firebaseObject) {
    return function(url) {
      var ref = firebase.database().ref().child(url);
      return $firebaseObject(ref);
    };
  })



  app.controller("servController", function($scope, $firebaseArray, GetArr, GetObj, $firebaseObject) {
    $scope.services = GetArr("services");
    $scope.ShowOrHide = function() {
      if ($("#pop2").css("display") != "none") {
        $('#pop2').fadeOut(500);
        $('#hl').fadeOut(500);
        document.body.style.overflow = 'visible';
        $('#dmenu').show();
      } else {
        $('#hl').fadeIn(500);
        $("#pop2").fadeIn(500);
        document.body.style.overflow = 'hidden';
        $('#dmenu').hide();
        $('#hl').click(function() {
          $('#pop2').fadeOut(500);
          $('#hl').fadeOut(500);
          document.body.style.overflow = 'visible';
          $('#dmenu').show();
        });
      }
    }

    $scope.ReadMore = function(N) {
      $scope.data = GetObj("blocks/" + N);
      $scope.ShowOrHide();
    }



  })

  app.controller('headerController', ['$scope', function($scope) {
    $scope.ShowOrHide = function() {
      if ($("#pop1").css("opacity") == 1) {
        $("#pop1").css("opacity", "0");
        setTimeout(function() {
          $("#pop1").hide()
        }, 500);
        //    $("#pop1").hide();
      } else {
        $("#pop1").show();
        $("#pop1").css("opacity", "1");
      }
    }

    $scope.ShowMenu = function() {
      if ($("#menu").css("right") < "0") {
        $("#menu").css("right", "5%");
      } else {
        $("#menu").css("right", "-80%");
      }
    }

    var it = 0;
    var slides = ['Road_s', 'Cat_s', 'Bird_s'];

    $scope.right = function() {
      if (it === slides.length - 1) {
        it = -1;
      }
      it++;
      $("#myHeader").css("background-image", "url(images/" + slides[it] + ".jpg)");
    }

    $scope.left = function() {
      if (it === 0) {
        it = slides.length;
      }
      it--;
      $("#myHeader").css("background-image", "url(images/" + slides[it] + ".jpg)");
    }

  }])

  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/state1");
    $stateProvider
      .state('state1', {
        url: "",
        templateUrl: "aboutus.html",
        controller: function($scope) {
          $scope.myText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.";
        }
      })
      .state('state2', {
        templateUrl: "getstarted.html",
        controller: function($scope) {
          $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
      })
      .state('state3', {
        templateUrl: "finish.html",
        //controller: 'Controller3'
      })
  })
})();
