'use strict';

angular.module('clubEstudiantesApp')
  .controller('MainController', function ($scope) {
    var self = $scope;

    //Filter News
    $('select#sort-news').change(function() {
      var filter = $(this).val()
      filterList(filter);
    });

//News filter function
    function filterList(value) {
      var list = $(".news-list .news-item");
      $(list).fadeOut("fast");
      if (value == "All") {
        $(".news-list").find("article").each(function (i) {
          $(this).delay(200).slideDown("fast");
        });
      } else {
        //Notice this *=" <- This means that if the data-category contains multiple options, it will find them
        //Ex: data-category="Cat1, Cat2"
        $(".news-list").find("article[data-category*=" + value + "]").each(function (i) {
          $(this).delay(200).slideDown("fast");
        });
      }
    }


    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {

      slides.push({
          image: '/assets/images/rsz_home1.png',
          text: ['texto 1'],
          id: currIndex++
        }
      );
    };

    $scope.randomize = function() {
      var indexes = generateIndexesArray();
      assignNewIndexesToSlides(indexes);
    };

    for (var i = 0; i < 1; i++) {
      $scope.addSlide();
    }

    // Randomize logic below

    function assignNewIndexesToSlides(indexes) {
      for (var i = 0, l = slides.length; i < l; i++) {
        slides[i].id = indexes.pop();
      }
    }

    function generateIndexesArray() {
      var indexes = [];
      for (var i = 0; i < currIndex; ++i) {
        indexes[i] = i;
      }
      return shuffle(indexes);
    }

    // http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
      var tmp, current, top = array.length;

      if (top) {
        while (--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
      }

      return array;
    }

  });

