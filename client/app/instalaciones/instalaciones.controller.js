'use strict';

angular.module('clubEstudiantesApp')
  .controller('InstalacionesCtrl', function ($scope, Auth) {

   window.scrollTo(0,0);

    var self = $scope;

    self.isAdmin = Auth.isAdmin;

    self.myInterval = 3000;
    self.noWrapSlides = false;
    self.active = 0;
    var slides = self.slides = [];
    var currIndex = 0;

    self.addSlide = function() {

      slides.push({
          image: '/assets/images/home1.png',
          text: ['Club Estudiantes'],
          id: currIndex++
        },
        {
          image: '/assets/images/home2.png',
          text: ['Club Estudiantes'],
          id: currIndex++
        },
        {
          image: '/assets/images/home3.png',
          text: ['Club Estudiantes'],
          id: currIndex++
        }
      );
    };
    //<h4 class="image-text">{{slide.text}}</h4>

    self.randomize = function() {
      var indexes = generateIndexesArray();
      assignNewIndexesToSlides(indexes);
    };

    for (var i = 0; i < 1; i++) {
      self.addSlide();
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
