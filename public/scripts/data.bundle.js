webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);
	__webpack_require__( 3 );
	__webpack_require__( 4 );

	angular.module("weatherApp", ['ngAnimate', 'ui.bootstrap']);

	__webpack_require__(6);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * angular-ui-bootstrap
	 * http://angular-ui.github.io/bootstrap/

	 * Version: 0.14.3 - 2015-10-23
	 * License: MIT
	 */
	angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]);
	angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-popup.html","template/tooltip/tooltip-popup.html","template/tooltip/tooltip-template-popup.html","template/popover/popover-html.html","template/popover/popover-template.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]);
	angular.module('ui.bootstrap.collapse', [])

	  .directive('uibCollapse', ['$animate', '$injector', function($animate, $injector) {
	    var $animateCss = $injector.has('$animateCss') ? $injector.get('$animateCss') : null;
	    return {
	      link: function(scope, element, attrs) {
	        function expand() {
	          element.removeClass('collapse')
	            .addClass('collapsing')
	            .attr('aria-expanded', true)
	            .attr('aria-hidden', false);

	          if ($animateCss) {
	            $animateCss(element, {
	              addClass: 'in',
	              easing: 'ease',
	              to: { height: element[0].scrollHeight + 'px' }
	            }).start().finally(expandDone);
	          } else {
	            $animate.addClass(element, 'in', {
	              to: { height: element[0].scrollHeight + 'px' }
	            }).then(expandDone);
	          }
	        }

	        function expandDone() {
	          element.removeClass('collapsing')
	            .addClass('collapse')
	            .css({height: 'auto'});
	        }

	        function collapse() {
	          if (!element.hasClass('collapse') && !element.hasClass('in')) {
	            return collapseDone();
	          }

	          element
	            // IMPORTANT: The height must be set before adding "collapsing" class.
	            // Otherwise, the browser attempts to animate from height 0 (in
	            // collapsing class) to the given height here.
	            .css({height: element[0].scrollHeight + 'px'})
	            // initially all panel collapse have the collapse class, this removal
	            // prevents the animation from jumping to collapsed state
	            .removeClass('collapse')
	            .addClass('collapsing')
	            .attr('aria-expanded', false)
	            .attr('aria-hidden', true);

	          if ($animateCss) {
	            $animateCss(element, {
	              removeClass: 'in',
	              to: {height: '0'}
	            }).start().finally(collapseDone);
	          } else {
	            $animate.removeClass(element, 'in', {
	              to: {height: '0'}
	            }).then(collapseDone);
	          }
	        }

	        function collapseDone() {
	          element.css({height: '0'}); // Required so that collapse works when animation is disabled
	          element.removeClass('collapsing')
	            .addClass('collapse');
	        }

	        scope.$watch(attrs.uibCollapse, function(shouldCollapse) {
	          if (shouldCollapse) {
	            collapse();
	          } else {
	            expand();
	          }
	        });
	      }
	    };
	  }]);

	/* Deprecated collapse below */

	angular.module('ui.bootstrap.collapse')

	  .value('$collapseSuppressWarning', false)

	  .directive('collapse', ['$animate', '$injector', '$log', '$collapseSuppressWarning', function($animate, $injector, $log, $collapseSuppressWarning) {
	    var $animateCss = $injector.has('$animateCss') ? $injector.get('$animateCss') : null;
	    return {
	      link: function(scope, element, attrs) {
	        if (!$collapseSuppressWarning) {
	          $log.warn('collapse is now deprecated. Use uib-collapse instead.');
	        }

	        function expand() {
	          element.removeClass('collapse')
	            .addClass('collapsing')
	            .attr('aria-expanded', true)
	            .attr('aria-hidden', false);

	          if ($animateCss) {
	            $animateCss(element, {
	              easing: 'ease',
	              to: { height: element[0].scrollHeight + 'px' }
	            }).start().done(expandDone);
	          } else {
	            $animate.animate(element, {}, {
	              height: element[0].scrollHeight + 'px'
	            }).then(expandDone);
	          }
	        }

	        function expandDone() {
	          element.removeClass('collapsing')
	            .addClass('collapse in')
	            .css({height: 'auto'});
	        }

	        function collapse() {
	          if (!element.hasClass('collapse') && !element.hasClass('in')) {
	            return collapseDone();
	          }

	          element
	            // IMPORTANT: The height must be set before adding "collapsing" class.
	            // Otherwise, the browser attempts to animate from height 0 (in
	            // collapsing class) to the given height here.
	            .css({height: element[0].scrollHeight + 'px'})
	            // initially all panel collapse have the collapse class, this removal
	            // prevents the animation from jumping to collapsed state
	            .removeClass('collapse in')
	            .addClass('collapsing')
	            .attr('aria-expanded', false)
	            .attr('aria-hidden', true);

	          if ($animateCss) {
	            $animateCss(element, {
	              to: {height: '0'}
	            }).start().done(collapseDone);
	          } else {
	            $animate.animate(element, {}, {
	              height: '0'
	            }).then(collapseDone);
	          }
	        }

	        function collapseDone() {
	          element.css({height: '0'}); // Required so that collapse works when animation is disabled
	          element.removeClass('collapsing')
	            .addClass('collapse');
	        }

	        scope.$watch(attrs.collapse, function(shouldCollapse) {
	          if (shouldCollapse) {
	            collapse();
	          } else {
	            expand();
	          }
	        });
	      }
	    };
	  }]);

	angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse'])

	.constant('uibAccordionConfig', {
	  closeOthers: true
	})

	.controller('UibAccordionController', ['$scope', '$attrs', 'uibAccordionConfig', function($scope, $attrs, accordionConfig) {
	  // This array keeps track of the accordion groups
	  this.groups = [];

	  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
	  this.closeOthers = function(openGroup) {
	    var closeOthers = angular.isDefined($attrs.closeOthers) ?
	      $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
	    if (closeOthers) {
	      angular.forEach(this.groups, function(group) {
	        if (group !== openGroup) {
	          group.isOpen = false;
	        }
	      });
	    }
	  };

	  // This is called from the accordion-group directive to add itself to the accordion
	  this.addGroup = function(groupScope) {
	    var that = this;
	    this.groups.push(groupScope);

	    groupScope.$on('$destroy', function(event) {
	      that.removeGroup(groupScope);
	    });
	  };

	  // This is called from the accordion-group directive when to remove itself
	  this.removeGroup = function(group) {
	    var index = this.groups.indexOf(group);
	    if (index !== -1) {
	      this.groups.splice(index, 1);
	    }
	  };

	}])

	// The accordion directive simply sets up the directive controller
	// and adds an accordion CSS class to itself element.
	.directive('uibAccordion', function() {
	  return {
	    controller: 'UibAccordionController',
	    controllerAs: 'accordion',
	    transclude: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/accordion/accordion.html';
	    }
	  };
	})

	// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
	.directive('uibAccordionGroup', function() {
	  return {
	    require: '^uibAccordion',         // We need this directive to be inside an accordion
	    transclude: true,              // It transcludes the contents of the directive into the template
	    replace: true,                // The element containing the directive will be replaced with the template
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/accordion/accordion-group.html';
	    },
	    scope: {
	      heading: '@',               // Interpolate the heading attribute onto this scope
	      isOpen: '=?',
	      isDisabled: '=?'
	    },
	    controller: function() {
	      this.setHeading = function(element) {
	        this.heading = element;
	      };
	    },
	    link: function(scope, element, attrs, accordionCtrl) {
	      accordionCtrl.addGroup(scope);

	      scope.openClass = attrs.openClass || 'panel-open';
	      scope.panelClass = attrs.panelClass;
	      scope.$watch('isOpen', function(value) {
	        element.toggleClass(scope.openClass, !!value);
	        if (value) {
	          accordionCtrl.closeOthers(scope);
	        }
	      });

	      scope.toggleOpen = function($event) {
	        if (!scope.isDisabled) {
	          if (!$event || $event.which === 32) {
	            scope.isOpen = !scope.isOpen;
	          }
	        }
	      };
	    }
	  };
	})

	// Use accordion-heading below an accordion-group to provide a heading containing HTML
	.directive('uibAccordionHeading', function() {
	  return {
	    transclude: true,   // Grab the contents to be used as the heading
	    template: '',       // In effect remove this element!
	    replace: true,
	    require: '^uibAccordionGroup',
	    link: function(scope, element, attrs, accordionGroupCtrl, transclude) {
	      // Pass the heading to the accordion-group controller
	      // so that it can be transcluded into the right place in the template
	      // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
	      accordionGroupCtrl.setHeading(transclude(scope, angular.noop));
	    }
	  };
	})

	// Use in the accordion-group template to indicate where you want the heading to be transcluded
	// You must provide the property on the accordion-group controller that will hold the transcluded element
	.directive('uibAccordionTransclude', function() {
	  return {
	    require: ['?^uibAccordionGroup', '?^accordionGroup'],
	    link: function(scope, element, attrs, controller) {
	      controller = controller[0] ? controller[0] : controller[1]; // Delete after we remove deprecation
	      scope.$watch(function() { return controller[attrs.uibAccordionTransclude]; }, function(heading) {
	        if (heading) {
	          element.find('span').html('');
	          element.find('span').append(heading);
	        }
	      });
	    }
	  };
	});

	/* Deprecated accordion below */

	angular.module('ui.bootstrap.accordion')

	  .value('$accordionSuppressWarning', false)

	  .controller('AccordionController', ['$scope', '$attrs', '$controller', '$log', '$accordionSuppressWarning', function($scope, $attrs, $controller, $log, $accordionSuppressWarning) {
	    if (!$accordionSuppressWarning) {
	      $log.warn('AccordionController is now deprecated. Use UibAccordionController instead.');
	    }

	    angular.extend(this, $controller('UibAccordionController', {
	      $scope: $scope,
	      $attrs: $attrs
	    }));
	  }])

	  .directive('accordion', ['$log', '$accordionSuppressWarning', function($log, $accordionSuppressWarning) {
	    return {
	      restrict: 'EA',
	      controller: 'AccordionController',
	      controllerAs: 'accordion',
	      transclude: true,
	      replace: false,
	      templateUrl: function(element, attrs) {
	        return attrs.templateUrl || 'template/accordion/accordion.html';
	      },
	      link: function() {
	        if (!$accordionSuppressWarning) {
	          $log.warn('accordion is now deprecated. Use uib-accordion instead.');
	        }
	      }
	    };
	  }])

	  .directive('accordionGroup', ['$log', '$accordionSuppressWarning', function($log, $accordionSuppressWarning) {
	    return {
	      require: '^accordion',         // We need this directive to be inside an accordion
	      restrict: 'EA',
	      transclude: true,              // It transcludes the contents of the directive into the template
	      replace: true,                // The element containing the directive will be replaced with the template
	      templateUrl: function(element, attrs) {
	        return attrs.templateUrl || 'template/accordion/accordion-group.html';
	      },
	      scope: {
	        heading: '@',               // Interpolate the heading attribute onto this scope
	        isOpen: '=?',
	        isDisabled: '=?'
	      },
	      controller: function() {
	        this.setHeading = function(element) {
	          this.heading = element;
	        };
	      },
	      link: function(scope, element, attrs, accordionCtrl) {
	        if (!$accordionSuppressWarning) {
	          $log.warn('accordion-group is now deprecated. Use uib-accordion-group instead.');
	        }

	        accordionCtrl.addGroup(scope);

	        scope.openClass = attrs.openClass || 'panel-open';
	        scope.panelClass = attrs.panelClass;
	        scope.$watch('isOpen', function(value) {
	          element.toggleClass(scope.openClass, !!value);
	          if (value) {
	            accordionCtrl.closeOthers(scope);
	          }
	        });

	        scope.toggleOpen = function($event) {
	          if (!scope.isDisabled) {
	            if (!$event || $event.which === 32) {
	              scope.isOpen = !scope.isOpen;
	            }
	          }
	        };
	      }
	    };
	  }])

	  .directive('accordionHeading', ['$log', '$accordionSuppressWarning', function($log, $accordionSuppressWarning) {
	    return {
	      restrict: 'EA',
	      transclude: true,   // Grab the contents to be used as the heading
	      template: '',       // In effect remove this element!
	      replace: true,
	      require: '^accordionGroup',
	      link: function(scope, element, attr, accordionGroupCtrl, transclude) {
	        if (!$accordionSuppressWarning) {
	          $log.warn('accordion-heading is now deprecated. Use uib-accordion-heading instead.');
	        }
	        // Pass the heading to the accordion-group controller
	        // so that it can be transcluded into the right place in the template
	        // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
	        accordionGroupCtrl.setHeading(transclude(scope, angular.noop));
	      }
	    };
	  }])

	  .directive('accordionTransclude', ['$log', '$accordionSuppressWarning', function($log, $accordionSuppressWarning) {
	    return {
	      require: '^accordionGroup',
	      link: function(scope, element, attr, controller) {
	        if (!$accordionSuppressWarning) {
	          $log.warn('accordion-transclude is now deprecated. Use uib-accordion-transclude instead.');
	        }

	        scope.$watch(function() { return controller[attr.accordionTransclude]; }, function(heading) {
	          if (heading) {
	            element.find('span').html('');
	            element.find('span').append(heading);
	          }
	        });
	      }
	    };
	  }]);


	angular.module('ui.bootstrap.alert', [])

	.controller('UibAlertController', ['$scope', '$attrs', '$interpolate', '$timeout', function($scope, $attrs, $interpolate, $timeout) {
	  $scope.closeable = !!$attrs.close;

	  var dismissOnTimeout = angular.isDefined($attrs.dismissOnTimeout) ?
	    $interpolate($attrs.dismissOnTimeout)($scope.$parent) : null;

	  if (dismissOnTimeout) {
	    $timeout(function() {
	      $scope.close();
	    }, parseInt(dismissOnTimeout, 10));
	  }
	}])

	.directive('uibAlert', function() {
	  return {
	    controller: 'UibAlertController',
	    controllerAs: 'alert',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/alert/alert.html';
	    },
	    transclude: true,
	    replace: true,
	    scope: {
	      type: '@',
	      close: '&'
	    }
	  };
	});

	/* Deprecated alert below */

	angular.module('ui.bootstrap.alert')

	  .value('$alertSuppressWarning', false)

	  .controller('AlertController', ['$scope', '$attrs', '$controller', '$log', '$alertSuppressWarning', function($scope, $attrs, $controller, $log, $alertSuppressWarning) {
	    if (!$alertSuppressWarning) {
	      $log.warn('AlertController is now deprecated. Use UibAlertController instead.');
	    }

	    angular.extend(this, $controller('UibAlertController', {
	      $scope: $scope,
	      $attrs: $attrs
	    }));
	  }])

	  .directive('alert', ['$log', '$alertSuppressWarning', function($log, $alertSuppressWarning) {
	    return {
	      controller: 'AlertController',
	      controllerAs: 'alert',
	      templateUrl: function(element, attrs) {
	        return attrs.templateUrl || 'template/alert/alert.html';
	      },
	      transclude: true,
	      replace: true,
	      scope: {
	        type: '@',
	        close: '&'
	      },
	      link: function() {
	        if (!$alertSuppressWarning) {
	          $log.warn('alert is now deprecated. Use uib-alert instead.');
	        }
	      }
	    };
	  }]);

	angular.module('ui.bootstrap.buttons', [])

	.constant('uibButtonConfig', {
	  activeClass: 'active',
	  toggleEvent: 'click'
	})

	.controller('UibButtonsController', ['uibButtonConfig', function(buttonConfig) {
	  this.activeClass = buttonConfig.activeClass || 'active';
	  this.toggleEvent = buttonConfig.toggleEvent || 'click';
	}])

	.directive('uibBtnRadio', function() {
	  return {
	    require: ['uibBtnRadio', 'ngModel'],
	    controller: 'UibButtonsController',
	    controllerAs: 'buttons',
	    link: function(scope, element, attrs, ctrls) {
	      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      element.find('input').css({display: 'none'});

	      //model -> UI
	      ngModelCtrl.$render = function() {
	        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.uibBtnRadio)));
	      };

	      //ui->model
	      element.on(buttonsCtrl.toggleEvent, function() {
	        if (attrs.disabled) {
	          return;
	        }

	        var isActive = element.hasClass(buttonsCtrl.activeClass);

	        if (!isActive || angular.isDefined(attrs.uncheckable)) {
	          scope.$apply(function() {
	            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.uibBtnRadio));
	            ngModelCtrl.$render();
	          });
	        }
	      });
	    }
	  };
	})

	.directive('uibBtnCheckbox', function() {
	  return {
	    require: ['uibBtnCheckbox', 'ngModel'],
	    controller: 'UibButtonsController',
	    controllerAs: 'button',
	    link: function(scope, element, attrs, ctrls) {
	      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      element.find('input').css({display: 'none'});

	      function getTrueValue() {
	        return getCheckboxValue(attrs.btnCheckboxTrue, true);
	      }

	      function getFalseValue() {
	        return getCheckboxValue(attrs.btnCheckboxFalse, false);
	      }

	      function getCheckboxValue(attribute, defaultValue) {
	        return angular.isDefined(attribute) ? scope.$eval(attribute) : defaultValue;
	      }

	      //model -> UI
	      ngModelCtrl.$render = function() {
	        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
	      };

	      //ui->model
	      element.on(buttonsCtrl.toggleEvent, function() {
	        if (attrs.disabled) {
	          return;
	        }

	        scope.$apply(function() {
	          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
	          ngModelCtrl.$render();
	        });
	      });
	    }
	  };
	});

	/* Deprecated buttons below */

	angular.module('ui.bootstrap.buttons')

	  .value('$buttonsSuppressWarning', false)

	  .controller('ButtonsController', ['$controller', '$log', '$buttonsSuppressWarning', function($controller, $log, $buttonsSuppressWarning) {
	    if (!$buttonsSuppressWarning) {
	      $log.warn('ButtonsController is now deprecated. Use UibButtonsController instead.');
	    }

	    angular.extend(this, $controller('UibButtonsController'));
	  }])

	  .directive('btnRadio', ['$log', '$buttonsSuppressWarning', function($log, $buttonsSuppressWarning) {
	    return {
	      require: ['btnRadio', 'ngModel'],
	      controller: 'ButtonsController',
	      controllerAs: 'buttons',
	      link: function(scope, element, attrs, ctrls) {
	        if (!$buttonsSuppressWarning) {
	          $log.warn('btn-radio is now deprecated. Use uib-btn-radio instead.');
	        }

	        var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	        element.find('input').css({display: 'none'});

	        //model -> UI
	        ngModelCtrl.$render = function() {
	          element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.btnRadio)));
	        };

	        //ui->model
	        element.bind(buttonsCtrl.toggleEvent, function() {
	          if (attrs.disabled) {
	            return;
	          }

	          var isActive = element.hasClass(buttonsCtrl.activeClass);

	          if (!isActive || angular.isDefined(attrs.uncheckable)) {
	            scope.$apply(function() {
	              ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.btnRadio));
	              ngModelCtrl.$render();
	            });
	          }
	        });
	      }
	    };
	  }])

	  .directive('btnCheckbox', ['$document', '$log', '$buttonsSuppressWarning', function($document, $log, $buttonsSuppressWarning) {
	    return {
	      require: ['btnCheckbox', 'ngModel'],
	      controller: 'ButtonsController',
	      controllerAs: 'button',
	      link: function(scope, element, attrs, ctrls) {
	        if (!$buttonsSuppressWarning) {
	          $log.warn('btn-checkbox is now deprecated. Use uib-btn-checkbox instead.');
	        }

	        var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	        element.find('input').css({display: 'none'});

	        function getTrueValue() {
	          return getCheckboxValue(attrs.btnCheckboxTrue, true);
	        }

	        function getFalseValue() {
	          return getCheckboxValue(attrs.btnCheckboxFalse, false);
	        }

	        function getCheckboxValue(attributeValue, defaultValue) {
	          var val = scope.$eval(attributeValue);
	          return angular.isDefined(val) ? val : defaultValue;
	        }

	        //model -> UI
	        ngModelCtrl.$render = function() {
	          element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
	        };

	        //ui->model
	        element.bind(buttonsCtrl.toggleEvent, function() {
	          if (attrs.disabled) {
	            return;
	          }

	          scope.$apply(function() {
	            ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
	            ngModelCtrl.$render();
	          });
	        });

	        //accessibility
	        element.on('keypress', function(e) {
	          if (attrs.disabled || e.which !== 32 || $document[0].activeElement !== element[0]) {
	            return;
	          }

	          scope.$apply(function() {
	            ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
	            ngModelCtrl.$render();
	          });
	        });
	      }
	    };
	  }]);


	/**
	 * @ngdoc overview
	 * @name ui.bootstrap.carousel
	 *
	 * @description
	 * AngularJS version of an image carousel.
	 *
	 */
	angular.module('ui.bootstrap.carousel', [])

	.controller('UibCarouselController', ['$scope', '$element', '$interval', '$animate', function($scope, $element, $interval, $animate) {
	  var self = this,
	    slides = self.slides = $scope.slides = [],
	    NEW_ANIMATE = angular.version.minor >= 4,
	    NO_TRANSITION = 'uib-noTransition',
	    SLIDE_DIRECTION = 'uib-slideDirection',
	    currentIndex = -1,
	    currentInterval, isPlaying;
	  self.currentSlide = null;

	  var destroyed = false;
	  /* direction: "prev" or "next" */
	  self.select = $scope.select = function(nextSlide, direction) {
	    var nextIndex = $scope.indexOfSlide(nextSlide);
	    //Decide direction if it's not given
	    if (direction === undefined) {
	      direction = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
	    }
	    //Prevent this user-triggered transition from occurring if there is already one in progress
	    if (nextSlide && nextSlide !== self.currentSlide && !$scope.$currentTransition) {
	      goNext(nextSlide, nextIndex, direction);
	    }
	  };

	  function goNext(slide, index, direction) {
	    // Scope has been destroyed, stop here.
	    if (destroyed) { return; }

	    angular.extend(slide, {direction: direction, active: true});
	    angular.extend(self.currentSlide || {}, {direction: direction, active: false});
	    if ($animate.enabled() && !$scope.noTransition && !$scope.$currentTransition &&
	      slide.$element && self.slides.length > 1) {
	      slide.$element.data(SLIDE_DIRECTION, slide.direction);
	      if (self.currentSlide && self.currentSlide.$element) {
	        self.currentSlide.$element.data(SLIDE_DIRECTION, slide.direction);
	      }

	      $scope.$currentTransition = true;
	      if (NEW_ANIMATE) {
	        $animate.on('addClass', slide.$element, function(element, phase) {
	          if (phase === 'close') {
	            $scope.$currentTransition = null;
	            $animate.off('addClass', element);
	          }
	        });
	      } else {
	        slide.$element.one('$animate:close', function closeFn() {
	          $scope.$currentTransition = null;
	        });
	      }
	    }

	    self.currentSlide = slide;
	    currentIndex = index;

	    //every time you change slides, reset the timer
	    restartTimer();
	  }

	  $scope.$on('$destroy', function() {
	    destroyed = true;
	  });

	  function getSlideByIndex(index) {
	    if (angular.isUndefined(slides[index].index)) {
	      return slides[index];
	    }
	    var i, len = slides.length;
	    for (i = 0; i < slides.length; ++i) {
	      if (slides[i].index == index) {
	        return slides[i];
	      }
	    }
	  }

	  self.getCurrentIndex = function() {
	    if (self.currentSlide && angular.isDefined(self.currentSlide.index)) {
	      return +self.currentSlide.index;
	    }
	    return currentIndex;
	  };

	  /* Allow outside people to call indexOf on slides array */
	  $scope.indexOfSlide = function(slide) {
	    return angular.isDefined(slide.index) ? +slide.index : slides.indexOf(slide);
	  };

	  $scope.next = function() {
	    var newIndex = (self.getCurrentIndex() + 1) % slides.length;

	    if (newIndex === 0 && $scope.noWrap()) {
	      $scope.pause();
	      return;
	    }

	    return self.select(getSlideByIndex(newIndex), 'next');
	  };

	  $scope.prev = function() {
	    var newIndex = self.getCurrentIndex() - 1 < 0 ? slides.length - 1 : self.getCurrentIndex() - 1;

	    if ($scope.noWrap() && newIndex === slides.length - 1) {
	      $scope.pause();
	      return;
	    }

	    return self.select(getSlideByIndex(newIndex), 'prev');
	  };

	  $scope.isActive = function(slide) {
	     return self.currentSlide === slide;
	  };

	  $scope.$watch('interval', restartTimer);
	  $scope.$watchCollection('slides', resetTransition);
	  $scope.$on('$destroy', resetTimer);

	  function restartTimer() {
	    resetTimer();
	    var interval = +$scope.interval;
	    if (!isNaN(interval) && interval > 0) {
	      currentInterval = $interval(timerFn, interval);
	    }
	  }

	  function resetTimer() {
	    if (currentInterval) {
	      $interval.cancel(currentInterval);
	      currentInterval = null;
	    }
	  }

	  function timerFn() {
	    var interval = +$scope.interval;
	    if (isPlaying && !isNaN(interval) && interval > 0 && slides.length) {
	      $scope.next();
	    } else {
	      $scope.pause();
	    }
	  }

	  function resetTransition(slides) {
	    if (!slides.length) {
	      $scope.$currentTransition = null;
	    }
	  }

	  $scope.play = function() {
	    if (!isPlaying) {
	      isPlaying = true;
	      restartTimer();
	    }
	  };
	  $scope.pause = function() {
	    if (!$scope.noPause) {
	      isPlaying = false;
	      resetTimer();
	    }
	  };

	  self.addSlide = function(slide, element) {
	    slide.$element = element;
	    slides.push(slide);
	    //if this is the first slide or the slide is set to active, select it
	    if (slides.length === 1 || slide.active) {
	      self.select(slides[slides.length - 1]);
	      if (slides.length === 1) {
	        $scope.play();
	      }
	    } else {
	      slide.active = false;
	    }
	  };

	  self.removeSlide = function(slide) {
	    if (angular.isDefined(slide.index)) {
	      slides.sort(function(a, b) {
	        return +a.index > +b.index;
	      });
	    }
	    //get the index of the slide inside the carousel
	    var index = slides.indexOf(slide);
	    slides.splice(index, 1);
	    if (slides.length > 0 && slide.active) {
	      if (index >= slides.length) {
	        self.select(slides[index - 1]);
	      } else {
	        self.select(slides[index]);
	      }
	    } else if (currentIndex > index) {
	      currentIndex--;
	    }

	    //clean the currentSlide when no more slide
	    if (slides.length === 0) {
	      self.currentSlide = null;
	    }
	  };

	  $scope.$watch('noTransition', function(noTransition) {
	    $element.data(NO_TRANSITION, noTransition);
	  });

	}])

	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.carousel.directive:carousel
	 * @restrict EA
	 *
	 * @description
	 * Carousel is the outer container for a set of image 'slides' to showcase.
	 *
	 * @param {number=} interval The time, in milliseconds, that it will take the carousel to go to the next slide.
	 * @param {boolean=} noTransition Whether to disable transitions on the carousel.
	 * @param {boolean=} noPause Whether to disable pausing on the carousel (by default, the carousel interval pauses on hover).
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	    <uib-carousel>
	      <uib-slide>
	        <img src="http://placekitten.com/150/150" style="margin:auto;">
	        <div class="carousel-caption">
	          <p>Beautiful!</p>
	        </div>
	      </uib-slide>
	      <uib-slide>
	        <img src="http://placekitten.com/100/150" style="margin:auto;">
	        <div class="carousel-caption">
	          <p>D'aww!</p>
	        </div>
	      </uib-slide>
	    </uib-carousel>
	  </file>
	  <file name="demo.css">
	    .carousel-indicators {
	      top: auto;
	      bottom: 15px;
	    }
	  </file>
	</example>
	 */
	.directive('uibCarousel', [function() {
	  return {
	    transclude: true,
	    replace: true,
	    controller: 'UibCarouselController',
	    controllerAs: 'carousel',
	    require: 'carousel',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/carousel/carousel.html';
	    },
	    scope: {
	      interval: '=',
	      noTransition: '=',
	      noPause: '=',
	      noWrap: '&'
	    }
	  };
	}])

	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.carousel.directive:slide
	 * @restrict EA
	 *
	 * @description
	 * Creates a slide inside a {@link ui.bootstrap.carousel.directive:carousel carousel}.  Must be placed as a child of a carousel element.
	 *
	 * @param {boolean=} active Model binding, whether or not this slide is currently active.
	 * @param {number=} index The index of the slide. The slides will be sorted by this parameter.
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	<div ng-controller="CarouselDemoCtrl">
	  <uib-carousel>
	    <uib-slide ng-repeat="slide in slides" active="slide.active" index="$index">
	      <img ng-src="{{slide.image}}" style="margin:auto;">
	      <div class="carousel-caption">
	        <h4>Slide {{$index}}</h4>
	        <p>{{slide.text}}</p>
	      </div>
	    </uib-slide>
	  </uib-carousel>
	  Interval, in milliseconds: <input type="number" ng-model="myInterval">
	  <br />Enter a negative number to stop the interval.
	</div>
	  </file>
	  <file name="script.js">
	function CarouselDemoCtrl($scope) {
	  $scope.myInterval = 5000;
	}
	  </file>
	  <file name="demo.css">
	    .carousel-indicators {
	      top: auto;
	      bottom: 15px;
	    }
	  </file>
	</example>
	*/

	.directive('uibSlide', function() {
	  return {
	    require: '^uibCarousel',
	    restrict: 'EA',
	    transclude: true,
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/carousel/slide.html';
	    },
	    scope: {
	      active: '=?',
	      actual: '=?',
	      index: '=?'
	    },
	    link: function (scope, element, attrs, carouselCtrl) {
	      carouselCtrl.addSlide(scope, element);
	      //when the scope is destroyed then remove the slide from the current slides array
	      scope.$on('$destroy', function() {
	        carouselCtrl.removeSlide(scope);
	      });

	      scope.$watch('active', function(active) {
	        if (active) {
	          carouselCtrl.select(scope);
	        }
	      });
	    }
	  };
	})

	.animation('.item', [
	         '$injector', '$animate',
	function ($injector, $animate) {
	  var NO_TRANSITION = 'uib-noTransition',
	    SLIDE_DIRECTION = 'uib-slideDirection',
	    $animateCss = null;

	  if ($injector.has('$animateCss')) {
	    $animateCss = $injector.get('$animateCss');
	  }

	  function removeClass(element, className, callback) {
	    element.removeClass(className);
	    if (callback) {
	      callback();
	    }
	  }

	  return {
	    beforeAddClass: function(element, className, done) {
	      // Due to transclusion, noTransition property is on parent's scope
	      if (className == 'active' && element.parent() && element.parent().parent() &&
	          !element.parent().parent().data(NO_TRANSITION)) {
	        var stopped = false;
	        var direction = element.data(SLIDE_DIRECTION);
	        var directionClass = direction == 'next' ? 'left' : 'right';
	        var removeClassFn = removeClass.bind(this, element,
	          directionClass + ' ' + direction, done);
	        element.addClass(direction);

	        if ($animateCss) {
	          $animateCss(element, {addClass: directionClass})
	            .start()
	            .done(removeClassFn);
	        } else {
	          $animate.addClass(element, directionClass).then(function () {
	            if (!stopped) {
	              removeClassFn();
	            }
	            done();
	          });
	        }

	        return function () {
	          stopped = true;
	        };
	      }
	      done();
	    },
	    beforeRemoveClass: function (element, className, done) {
	      // Due to transclusion, noTransition property is on parent's scope
	      if (className === 'active' && element.parent() && element.parent().parent() &&
	          !element.parent().parent().data(NO_TRANSITION)) {
	        var stopped = false;
	        var direction = element.data(SLIDE_DIRECTION);
	        var directionClass = direction == 'next' ? 'left' : 'right';
	        var removeClassFn = removeClass.bind(this, element, directionClass, done);

	        if ($animateCss) {
	          $animateCss(element, {addClass: directionClass})
	            .start()
	            .done(removeClassFn);
	        } else {
	          $animate.addClass(element, directionClass).then(function() {
	            if (!stopped) {
	              removeClassFn();
	            }
	            done();
	          });
	        }
	        return function() {
	          stopped = true;
	        };
	      }
	      done();
	    }
	  };
	}]);

	/* deprecated carousel below */

	angular.module('ui.bootstrap.carousel')

	.value('$carouselSuppressWarning', false)

	.controller('CarouselController', ['$scope', '$element', '$controller', '$log', '$carouselSuppressWarning', function($scope, $element, $controller, $log, $carouselSuppressWarning) {
	  if (!$carouselSuppressWarning) {
	    $log.warn('CarouselController is now deprecated. Use UibCarouselController instead.');
	  }

	  angular.extend(this, $controller('UibCarouselController', {
	    $scope: $scope,
	    $element: $element
	  }));
	}])

	.directive('carousel', ['$log', '$carouselSuppressWarning', function($log, $carouselSuppressWarning) {
	  return {
	    transclude: true,
	    replace: true,
	    controller: 'CarouselController',
	    controllerAs: 'carousel',
	    require: 'carousel',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/carousel/carousel.html';
	    },
	    scope: {
	      interval: '=',
	      noTransition: '=',
	      noPause: '=',
	      noWrap: '&'
	    },
	    link: function() {
	      if (!$carouselSuppressWarning) {
	        $log.warn('carousel is now deprecated. Use uib-carousel instead.');
	      }
	    }
	  };
	}])

	.directive('slide', ['$log', '$carouselSuppressWarning', function($log, $carouselSuppressWarning) {
	  return {
	    require: '^carousel',
	    transclude: true,
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/carousel/slide.html';
	    },
	    scope: {
	      active: '=?',
	      actual: '=?',
	      index: '=?'
	    },
	    link: function (scope, element, attrs, carouselCtrl) {
	      if (!$carouselSuppressWarning) {
	        $log.warn('slide is now deprecated. Use uib-slide instead.');
	      }

	      carouselCtrl.addSlide(scope, element);
	      //when the scope is destroyed then remove the slide from the current slides array
	      scope.$on('$destroy', function() {
	        carouselCtrl.removeSlide(scope);
	      });

	      scope.$watch('active', function(active) {
	        if (active) {
	          carouselCtrl.select(scope);
	        }
	      });
	    }
	  };
	}]);

	angular.module('ui.bootstrap.dateparser', [])

	.service('uibDateParser', ['$log', '$locale', 'orderByFilter', function($log, $locale, orderByFilter) {
	  // Pulled from https://github.com/mbostock/d3/blob/master/src/format/requote.js
	  var SPECIAL_CHARACTERS_REGEXP = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

	  var localeId;
	  var formatCodeToRegex;

	  this.init = function() {
	    localeId = $locale.id;

	    this.parsers = {};

	    formatCodeToRegex = {
	      'yyyy': {
	        regex: '\\d{4}',
	        apply: function(value) { this.year = +value; }
	      },
	      'yy': {
	        regex: '\\d{2}',
	        apply: function(value) { this.year = +value + 2000; }
	      },
	      'y': {
	        regex: '\\d{1,4}',
	        apply: function(value) { this.year = +value; }
	      },
	      'MMMM': {
	        regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
	        apply: function(value) { this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value); }
	      },
	      'MMM': {
	        regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
	        apply: function(value) { this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value); }
	      },
	      'MM': {
	        regex: '0[1-9]|1[0-2]',
	        apply: function(value) { this.month = value - 1; }
	      },
	      'M': {
	        regex: '[1-9]|1[0-2]',
	        apply: function(value) { this.month = value - 1; }
	      },
	      'dd': {
	        regex: '[0-2][0-9]{1}|3[0-1]{1}',
	        apply: function(value) { this.date = +value; }
	      },
	      'd': {
	        regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
	        apply: function(value) { this.date = +value; }
	      },
	      'EEEE': {
	        regex: $locale.DATETIME_FORMATS.DAY.join('|')
	      },
	      'EEE': {
	        regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|')
	      },
	      'HH': {
	        regex: '(?:0|1)[0-9]|2[0-3]',
	        apply: function(value) { this.hours = +value; }
	      },
	      'hh': {
	        regex: '0[0-9]|1[0-2]',
	        apply: function(value) { this.hours = +value; }
	      },
	      'H': {
	        regex: '1?[0-9]|2[0-3]',
	        apply: function(value) { this.hours = +value; }
	      },
	      'h': {
	        regex: '[0-9]|1[0-2]',
	        apply: function(value) { this.hours = +value; }
	      },
	      'mm': {
	        regex: '[0-5][0-9]',
	        apply: function(value) { this.minutes = +value; }
	      },
	      'm': {
	        regex: '[0-9]|[1-5][0-9]',
	        apply: function(value) { this.minutes = +value; }
	      },
	      'sss': {
	        regex: '[0-9][0-9][0-9]',
	        apply: function(value) { this.milliseconds = +value; }
	      },
	      'ss': {
	        regex: '[0-5][0-9]',
	        apply: function(value) { this.seconds = +value; }
	      },
	      's': {
	        regex: '[0-9]|[1-5][0-9]',
	        apply: function(value) { this.seconds = +value; }
	      },
	      'a': {
	        regex: $locale.DATETIME_FORMATS.AMPMS.join('|'),
	        apply: function(value) {
	          if (this.hours === 12) {
	            this.hours = 0;
	          }

	          if (value === 'PM') {
	            this.hours += 12;
	          }
	        }
	      }
	    };
	  };

	  this.init();

	  function createParser(format) {
	    var map = [], regex = format.split('');

	    angular.forEach(formatCodeToRegex, function(data, code) {
	      var index = format.indexOf(code);

	      if (index > -1) {
	        format = format.split('');

	        regex[index] = '(' + data.regex + ')';
	        format[index] = '$'; // Custom symbol to define consumed part of format
	        for (var i = index + 1, n = index + code.length; i < n; i++) {
	          regex[i] = '';
	          format[i] = '$';
	        }
	        format = format.join('');

	        map.push({ index: index, apply: data.apply });
	      }
	    });

	    return {
	      regex: new RegExp('^' + regex.join('') + '$'),
	      map: orderByFilter(map, 'index')
	    };
	  }

	  this.parse = function(input, format, baseDate) {
	    if (!angular.isString(input) || !format) {
	      return input;
	    }

	    format = $locale.DATETIME_FORMATS[format] || format;
	    format = format.replace(SPECIAL_CHARACTERS_REGEXP, '\\$&');

	    if ($locale.id !== localeId) {
	      this.init();
	    }

	    if (!this.parsers[format]) {
	      this.parsers[format] = createParser(format);
	    }

	    var parser = this.parsers[format],
	        regex = parser.regex,
	        map = parser.map,
	        results = input.match(regex);

	    if (results && results.length) {
	      var fields, dt;
	      if (angular.isDate(baseDate) && !isNaN(baseDate.getTime())) {
	        fields = {
	          year: baseDate.getFullYear(),
	          month: baseDate.getMonth(),
	          date: baseDate.getDate(),
	          hours: baseDate.getHours(),
	          minutes: baseDate.getMinutes(),
	          seconds: baseDate.getSeconds(),
	          milliseconds: baseDate.getMilliseconds()
	        };
	      } else {
	        if (baseDate) {
	          $log.warn('dateparser:', 'baseDate is not a valid date');
	        }
	        fields = { year: 1900, month: 0, date: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
	      }

	      for (var i = 1, n = results.length; i < n; i++) {
	        var mapper = map[i-1];
	        if (mapper.apply) {
	          mapper.apply.call(fields, results[i]);
	        }
	      }

	      if (isValid(fields.year, fields.month, fields.date)) {
	        if (angular.isDate(baseDate) && !isNaN(baseDate.getTime())) {
	          dt = new Date(baseDate);
	          dt.setFullYear(fields.year, fields.month, fields.date,
	            fields.hours, fields.minutes, fields.seconds,
	            fields.milliseconds || 0);
	        } else {
	          dt = new Date(fields.year, fields.month, fields.date,
	            fields.hours, fields.minutes, fields.seconds,
	            fields.milliseconds || 0);
	        }
	      }

	      return dt;
	    }
	  };

	  // Check if date is valid for specific month (and year for February).
	  // Month: 0 = Jan, 1 = Feb, etc
	  function isValid(year, month, date) {
	    if (date < 1) {
	      return false;
	    }

	    if (month === 1 && date > 28) {
	      return date === 29 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
	    }

	    if (month === 3 || month === 5 || month === 8 || month === 10) {
	      return date < 31;
	    }

	    return true;
	  }
	}]);

	/* Deprecated dateparser below */

	angular.module('ui.bootstrap.dateparser')

	.value('$dateParserSuppressWarning', false)

	.service('dateParser', ['$log', '$dateParserSuppressWarning', 'uibDateParser', function($log, $dateParserSuppressWarning, uibDateParser) {
	  if (!$dateParserSuppressWarning) {
	    $log.warn('dateParser is now deprecated. Use uibDateParser instead.');
	  }

	  angular.extend(this, uibDateParser);
	}]);

	angular.module('ui.bootstrap.position', [])

	/**
	 * A set of utility methods that can be use to retrieve position of DOM elements.
	 * It is meant to be used where we need to absolute-position DOM elements in
	 * relation to other, existing elements (this is the case for tooltips, popovers,
	 * typeahead suggestions etc.).
	 */
	  .factory('$uibPosition', ['$document', '$window', function($document, $window) {
	    function getStyle(el, cssprop) {
	      if (el.currentStyle) { //IE
	        return el.currentStyle[cssprop];
	      } else if ($window.getComputedStyle) {
	        return $window.getComputedStyle(el)[cssprop];
	      }
	      // finally try and get inline style
	      return el.style[cssprop];
	    }

	    /**
	     * Checks if a given element is statically positioned
	     * @param element - raw DOM element
	     */
	    function isStaticPositioned(element) {
	      return (getStyle(element, 'position') || 'static' ) === 'static';
	    }

	    /**
	     * returns the closest, non-statically positioned parentOffset of a given element
	     * @param element
	     */
	    var parentOffsetEl = function(element) {
	      var docDomEl = $document[0];
	      var offsetParent = element.offsetParent || docDomEl;
	      while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent) ) {
	        offsetParent = offsetParent.offsetParent;
	      }
	      return offsetParent || docDomEl;
	    };

	    return {
	      /**
	       * Provides read-only equivalent of jQuery's position function:
	       * http://api.jquery.com/position/
	       */
	      position: function(element) {
	        var elBCR = this.offset(element);
	        var offsetParentBCR = { top: 0, left: 0 };
	        var offsetParentEl = parentOffsetEl(element[0]);
	        if (offsetParentEl != $document[0]) {
	          offsetParentBCR = this.offset(angular.element(offsetParentEl));
	          offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
	          offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
	        }

	        var boundingClientRect = element[0].getBoundingClientRect();
	        return {
	          width: boundingClientRect.width || element.prop('offsetWidth'),
	          height: boundingClientRect.height || element.prop('offsetHeight'),
	          top: elBCR.top - offsetParentBCR.top,
	          left: elBCR.left - offsetParentBCR.left
	        };
	      },

	      /**
	       * Provides read-only equivalent of jQuery's offset function:
	       * http://api.jquery.com/offset/
	       */
	      offset: function(element) {
	        var boundingClientRect = element[0].getBoundingClientRect();
	        return {
	          width: boundingClientRect.width || element.prop('offsetWidth'),
	          height: boundingClientRect.height || element.prop('offsetHeight'),
	          top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
	          left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
	        };
	      },

	      /**
	       * Provides coordinates for the targetEl in relation to hostEl
	       */
	      positionElements: function(hostEl, targetEl, positionStr, appendToBody) {
	        var positionStrParts = positionStr.split('-');
	        var pos0 = positionStrParts[0], pos1 = positionStrParts[1] || 'center';

	        var hostElPos,
	          targetElWidth,
	          targetElHeight,
	          targetElPos;

	        hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);

	        targetElWidth = targetEl.prop('offsetWidth');
	        targetElHeight = targetEl.prop('offsetHeight');

	        var shiftWidth = {
	          center: function() {
	            return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
	          },
	          left: function() {
	            return hostElPos.left;
	          },
	          right: function() {
	            return hostElPos.left + hostElPos.width;
	          }
	        };

	        var shiftHeight = {
	          center: function() {
	            return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
	          },
	          top: function() {
	            return hostElPos.top;
	          },
	          bottom: function() {
	            return hostElPos.top + hostElPos.height;
	          }
	        };

	        switch (pos0) {
	          case 'right':
	            targetElPos = {
	              top: shiftHeight[pos1](),
	              left: shiftWidth[pos0]()
	            };
	            break;
	          case 'left':
	            targetElPos = {
	              top: shiftHeight[pos1](),
	              left: hostElPos.left - targetElWidth
	            };
	            break;
	          case 'bottom':
	            targetElPos = {
	              top: shiftHeight[pos0](),
	              left: shiftWidth[pos1]()
	            };
	            break;
	          default:
	            targetElPos = {
	              top: hostElPos.top - targetElHeight,
	              left: shiftWidth[pos1]()
	            };
	            break;
	        }

	        return targetElPos;
	      }
	    };
	  }]);

	/* Deprecated position below */

	angular.module('ui.bootstrap.position')

	.value('$positionSuppressWarning', false)

	.service('$position', ['$log', '$positionSuppressWarning', '$uibPosition', function($log, $positionSuppressWarning, $uibPosition) {
	  if (!$positionSuppressWarning) {
	    $log.warn('$position is now deprecated. Use $uibPosition instead.');
	  }

	  angular.extend(this, $uibPosition);
	}]);

	angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.position'])

	.value('$datepickerSuppressError', false)

	.constant('uibDatepickerConfig', {
	  formatDay: 'dd',
	  formatMonth: 'MMMM',
	  formatYear: 'yyyy',
	  formatDayHeader: 'EEE',
	  formatDayTitle: 'MMMM yyyy',
	  formatMonthTitle: 'yyyy',
	  datepickerMode: 'day',
	  minMode: 'day',
	  maxMode: 'year',
	  showWeeks: true,
	  startingDay: 0,
	  yearRange: 20,
	  minDate: null,
	  maxDate: null,
	  shortcutPropagation: false
	})

	.controller('UibDatepickerController', ['$scope', '$attrs', '$parse', '$interpolate', '$log', 'dateFilter', 'uibDatepickerConfig', '$datepickerSuppressError', function($scope, $attrs, $parse, $interpolate, $log, dateFilter, datepickerConfig, $datepickerSuppressError) {
	  var self = this,
	      ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl;

	  // Modes chain
	  this.modes = ['day', 'month', 'year'];

	  // Configuration attributes
	  angular.forEach(['formatDay', 'formatMonth', 'formatYear', 'formatDayHeader', 'formatDayTitle', 'formatMonthTitle',
	                   'showWeeks', 'startingDay', 'yearRange', 'shortcutPropagation'], function(key, index) {
	    self[key] = angular.isDefined($attrs[key]) ? (index < 6 ? $interpolate($attrs[key])($scope.$parent) : $scope.$parent.$eval($attrs[key])) : datepickerConfig[key];
	  });

	  // Watchable date attributes
	  angular.forEach(['minDate', 'maxDate'], function(key) {
	    if ($attrs[key]) {
	      $scope.$parent.$watch($parse($attrs[key]), function(value) {
	        self[key] = value ? new Date(value) : null;
	        self.refreshView();
	      });
	    } else {
	      self[key] = datepickerConfig[key] ? new Date(datepickerConfig[key]) : null;
	    }
	  });

	  angular.forEach(['minMode', 'maxMode'], function(key) {
	    if ($attrs[key]) {
	      $scope.$parent.$watch($parse($attrs[key]), function(value) {
	        self[key] = angular.isDefined(value) ? value : $attrs[key];
	        $scope[key] = self[key];
	        if ((key == 'minMode' && self.modes.indexOf($scope.datepickerMode) < self.modes.indexOf(self[key])) || (key == 'maxMode' && self.modes.indexOf($scope.datepickerMode) > self.modes.indexOf(self[key]))) {
	          $scope.datepickerMode = self[key];
	        }
	      });
	    } else {
	      self[key] = datepickerConfig[key] || null;
	      $scope[key] = self[key];
	    }
	  });

	  $scope.datepickerMode = $scope.datepickerMode || datepickerConfig.datepickerMode;
	  $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);

	  if (angular.isDefined($attrs.initDate)) {
	    this.activeDate = $scope.$parent.$eval($attrs.initDate) || new Date();
	    $scope.$parent.$watch($attrs.initDate, function(initDate) {
	      if (initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)) {
	        self.activeDate = initDate;
	        self.refreshView();
	      }
	    });
	  } else {
	    this.activeDate = new Date();
	  }

	  $scope.isActive = function(dateObject) {
	    if (self.compare(dateObject.date, self.activeDate) === 0) {
	      $scope.activeDateId = dateObject.uid;
	      return true;
	    }
	    return false;
	  };

	  this.init = function(ngModelCtrl_) {
	    ngModelCtrl = ngModelCtrl_;

	    ngModelCtrl.$render = function() {
	      self.render();
	    };
	  };

	  this.render = function() {
	    if (ngModelCtrl.$viewValue) {
	      var date = new Date(ngModelCtrl.$viewValue),
	          isValid = !isNaN(date);

	      if (isValid) {
	        this.activeDate = date;
	      } else if (!$datepickerSuppressError) {
	        $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
	      }
	    }
	    this.refreshView();
	  };

	  this.refreshView = function() {
	    if (this.element) {
	      this._refreshView();

	      var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
	      ngModelCtrl.$setValidity('dateDisabled', !date || (this.element && !this.isDisabled(date)));
	    }
	  };

	  this.createDateObject = function(date, format) {
	    var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
	    return {
	      date: date,
	      label: dateFilter(date, format),
	      selected: model && this.compare(date, model) === 0,
	      disabled: this.isDisabled(date),
	      current: this.compare(date, new Date()) === 0,
	      customClass: this.customClass(date)
	    };
	  };

	  this.isDisabled = function(date) {
	    return ((this.minDate && this.compare(date, this.minDate) < 0) || (this.maxDate && this.compare(date, this.maxDate) > 0) || ($attrs.dateDisabled && $scope.dateDisabled({date: date, mode: $scope.datepickerMode})));
	  };

	  this.customClass = function(date) {
	    return $scope.customClass({date: date, mode: $scope.datepickerMode});
	  };

	  // Split array into smaller arrays
	  this.split = function(arr, size) {
	    var arrays = [];
	    while (arr.length > 0) {
	      arrays.push(arr.splice(0, size));
	    }
	    return arrays;
	  };

	  $scope.select = function(date) {
	    if ($scope.datepickerMode === self.minMode) {
	      var dt = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : new Date(0, 0, 0, 0, 0, 0, 0);
	      dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
	      ngModelCtrl.$setViewValue(dt);
	      ngModelCtrl.$render();
	    } else {
	      self.activeDate = date;
	      $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) - 1];
	    }
	  };

	  $scope.move = function(direction) {
	    var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
	        month = self.activeDate.getMonth() + direction * (self.step.months || 0);
	    self.activeDate.setFullYear(year, month, 1);
	    self.refreshView();
	  };

	  $scope.toggleMode = function(direction) {
	    direction = direction || 1;

	    if (($scope.datepickerMode === self.maxMode && direction === 1) || ($scope.datepickerMode === self.minMode && direction === -1)) {
	      return;
	    }

	    $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) + direction];
	  };

	  // Key event mapper
	  $scope.keys = { 13: 'enter', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home', 37: 'left', 38: 'up', 39: 'right', 40: 'down' };

	  var focusElement = function() {
	    self.element[0].focus();
	  };

	  // Listen for focus requests from popup directive
	  $scope.$on('uib:datepicker.focus', focusElement);

	  $scope.keydown = function(evt) {
	    var key = $scope.keys[evt.which];

	    if (!key || evt.shiftKey || evt.altKey) {
	      return;
	    }

	    evt.preventDefault();
	    if (!self.shortcutPropagation) {
	      evt.stopPropagation();
	    }

	    if (key === 'enter' || key === 'space') {
	      if (self.isDisabled(self.activeDate)) {
	        return; // do nothing
	      }
	      $scope.select(self.activeDate);
	    } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
	      $scope.toggleMode(key === 'up' ? 1 : -1);
	    } else {
	      self.handleKeyDown(key, evt);
	      self.refreshView();
	    }
	  };
	}])

	.controller('UibDaypickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
	  var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	  this.step = { months: 1 };
	  this.element = $element;
	  function getDaysInMonth(year, month) {
	    return ((month === 1) && (year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
	  }

	  this.init = function(ctrl) {
	    angular.extend(ctrl, this);
	    scope.showWeeks = ctrl.showWeeks;
	    ctrl.refreshView();
	  };

	  this.getDates = function(startDate, n) {
	    var dates = new Array(n), current = new Date(startDate), i = 0, date;
	    while (i < n) {
	      date = new Date(current);
	      dates[i++] = date;
	      current.setDate(current.getDate() + 1);
	    }
	    return dates;
	  };

	  this._refreshView = function() {
	    var year = this.activeDate.getFullYear(),
	      month = this.activeDate.getMonth(),
	      firstDayOfMonth = new Date(this.activeDate);

	    firstDayOfMonth.setFullYear(year, month, 1);

	    var difference = this.startingDay - firstDayOfMonth.getDay(),
	      numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : - difference,
	      firstDate = new Date(firstDayOfMonth);

	    if (numDisplayedFromPreviousMonth > 0) {
	      firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
	    }

	    // 42 is the number of days on a six-month calendar
	    var days = this.getDates(firstDate, 42);
	    for (var i = 0; i < 42; i ++) {
	      days[i] = angular.extend(this.createDateObject(days[i], this.formatDay), {
	        secondary: days[i].getMonth() !== month,
	        uid: scope.uniqueId + '-' + i
	      });
	    }

	    scope.labels = new Array(7);
	    for (var j = 0; j < 7; j++) {
	      scope.labels[j] = {
	        abbr: dateFilter(days[j].date, this.formatDayHeader),
	        full: dateFilter(days[j].date, 'EEEE')
	      };
	    }

	    scope.title = dateFilter(this.activeDate, this.formatDayTitle);
	    scope.rows = this.split(days, 7);

	    if (scope.showWeeks) {
	      scope.weekNumbers = [];
	      var thursdayIndex = (4 + 7 - this.startingDay) % 7,
	          numWeeks = scope.rows.length;
	      for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
	        scope.weekNumbers.push(
	          getISO8601WeekNumber(scope.rows[curWeek][thursdayIndex].date));
	      }
	    }
	  };

	  this.compare = function(date1, date2) {
	    return (new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate()));
	  };

	  function getISO8601WeekNumber(date) {
	    var checkDate = new Date(date);
	    checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
	    var time = checkDate.getTime();
	    checkDate.setMonth(0); // Compare with Jan 1
	    checkDate.setDate(1);
	    return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	  }

	  this.handleKeyDown = function(key, evt) {
	    var date = this.activeDate.getDate();

	    if (key === 'left') {
	      date = date - 1;   // up
	    } else if (key === 'up') {
	      date = date - 7;   // down
	    } else if (key === 'right') {
	      date = date + 1;   // down
	    } else if (key === 'down') {
	      date = date + 7;
	    } else if (key === 'pageup' || key === 'pagedown') {
	      var month = this.activeDate.getMonth() + (key === 'pageup' ? - 1 : 1);
	      this.activeDate.setMonth(month, 1);
	      date = Math.min(getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth()), date);
	    } else if (key === 'home') {
	      date = 1;
	    } else if (key === 'end') {
	      date = getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth());
	    }
	    this.activeDate.setDate(date);
	  };
	}])

	.controller('UibMonthpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
	  this.step = { years: 1 };
	  this.element = $element;

	  this.init = function(ctrl) {
	    angular.extend(ctrl, this);
	    ctrl.refreshView();
	  };

	  this._refreshView = function() {
	    var months = new Array(12),
	        year = this.activeDate.getFullYear(),
	        date;

	    for (var i = 0; i < 12; i++) {
	      date = new Date(this.activeDate);
	      date.setFullYear(year, i, 1);
	      months[i] = angular.extend(this.createDateObject(date, this.formatMonth), {
	        uid: scope.uniqueId + '-' + i
	      });
	    }

	    scope.title = dateFilter(this.activeDate, this.formatMonthTitle);
	    scope.rows = this.split(months, 3);
	  };

	  this.compare = function(date1, date2) {
	    return new Date(date1.getFullYear(), date1.getMonth()) - new Date(date2.getFullYear(), date2.getMonth());
	  };

	  this.handleKeyDown = function(key, evt) {
	    var date = this.activeDate.getMonth();

	    if (key === 'left') {
	      date = date - 1;   // up
	    } else if (key === 'up') {
	      date = date - 3;   // down
	    } else if (key === 'right') {
	      date = date + 1;   // down
	    } else if (key === 'down') {
	      date = date + 3;
	    } else if (key === 'pageup' || key === 'pagedown') {
	      var year = this.activeDate.getFullYear() + (key === 'pageup' ? - 1 : 1);
	      this.activeDate.setFullYear(year);
	    } else if (key === 'home') {
	      date = 0;
	    } else if (key === 'end') {
	      date = 11;
	    }
	    this.activeDate.setMonth(date);
	  };
	}])

	.controller('UibYearpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
	  var range;
	  this.element = $element;

	  function getStartingYear(year) {
	    return parseInt((year - 1) / range, 10) * range + 1;
	  }

	  this.yearpickerInit = function() {
	    range = this.yearRange;
	    this.step = { years: range };
	  };

	  this._refreshView = function() {
	    var years = new Array(range), date;

	    for (var i = 0, start = getStartingYear(this.activeDate.getFullYear()); i < range; i++) {
	      date = new Date(this.activeDate);
	      date.setFullYear(start + i, 0, 1);
	      years[i] = angular.extend(this.createDateObject(date, this.formatYear), {
	        uid: scope.uniqueId + '-' + i
	      });
	    }

	    scope.title = [years[0].label, years[range - 1].label].join(' - ');
	    scope.rows = this.split(years, 5);
	  };

	  this.compare = function(date1, date2) {
	    return date1.getFullYear() - date2.getFullYear();
	  };

	  this.handleKeyDown = function(key, evt) {
	    var date = this.activeDate.getFullYear();

	    if (key === 'left') {
	      date = date - 1;   // up
	    } else if (key === 'up') {
	      date = date - 5;   // down
	    } else if (key === 'right') {
	      date = date + 1;   // down
	    } else if (key === 'down') {
	      date = date + 5;
	    } else if (key === 'pageup' || key === 'pagedown') {
	      date += (key === 'pageup' ? - 1 : 1) * this.step.years;
	    } else if (key === 'home') {
	      date = getStartingYear(this.activeDate.getFullYear());
	    } else if (key === 'end') {
	      date = getStartingYear(this.activeDate.getFullYear()) + range - 1;
	    }
	    this.activeDate.setFullYear(date);
	  };
	}])

	.directive('uibDatepicker', function() {
	  return {
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/datepicker/datepicker.html';
	    },
	    scope: {
	      datepickerMode: '=?',
	      dateDisabled: '&',
	      customClass: '&',
	      shortcutPropagation: '&?'
	    },
	    require: ['uibDatepicker', '^ngModel'],
	    controller: 'UibDatepickerController',
	    controllerAs: 'datepicker',
	    link: function(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      datepickerCtrl.init(ngModelCtrl);
	    }
	  };
	})

	.directive('uibDaypicker', function() {
	  return {
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/datepicker/day.html';
	    },
	    require: ['^?uibDatepicker', 'uibDaypicker', '^?datepicker'],
	    controller: 'UibDaypickerController',
	    link: function(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0] || ctrls[2],
	        daypickerCtrl = ctrls[1];

	      daypickerCtrl.init(datepickerCtrl);
	    }
	  };
	})

	.directive('uibMonthpicker', function() {
	  return {
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/datepicker/month.html';
	    },
	    require: ['^?uibDatepicker', 'uibMonthpicker', '^?datepicker'],
	    controller: 'UibMonthpickerController',
	    link: function(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0] || ctrls[2],
	        monthpickerCtrl = ctrls[1];

	      monthpickerCtrl.init(datepickerCtrl);
	    }
	  };
	})

	.directive('uibYearpicker', function() {
	  return {
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/datepicker/year.html';
	    },
	    require: ['^?uibDatepicker', 'uibYearpicker', '^?datepicker'],
	    controller: 'UibYearpickerController',
	    link: function(scope, element, attrs, ctrls) {
	      var ctrl = ctrls[0] || ctrls[2];
	      angular.extend(ctrl, ctrls[1]);
	      ctrl.yearpickerInit();

	      ctrl.refreshView();
	    }
	  };
	})

	.constant('uibDatepickerPopupConfig', {
	  datepickerPopup: 'yyyy-MM-dd',
	  datepickerPopupTemplateUrl: 'template/datepicker/popup.html',
	  datepickerTemplateUrl: 'template/datepicker/datepicker.html',
	  html5Types: {
	    date: 'yyyy-MM-dd',
	    'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
	    'month': 'yyyy-MM'
	  },
	  currentText: 'Today',
	  clearText: 'Clear',
	  closeText: 'Done',
	  closeOnDateSelection: true,
	  appendToBody: false,
	  showButtonBar: true,
	  onOpenFocus: true
	})

	.controller('UibDatepickerPopupController', ['$scope', '$element', '$attrs', '$compile', '$parse', '$document', '$rootScope', '$uibPosition', 'dateFilter', 'uibDateParser', 'uibDatepickerPopupConfig', '$timeout',
	function(scope, element, attrs, $compile, $parse, $document, $rootScope, $position, dateFilter, dateParser, datepickerPopupConfig, $timeout) {
	  var self = this;
	  var cache = {},
	    isHtml5DateInput = false;
	  var dateFormat, closeOnDateSelection, appendToBody, onOpenFocus,
	    datepickerPopupTemplateUrl, datepickerTemplateUrl, popupEl, datepickerEl,
	    ngModel, $popup;

	  scope.watchData = {};

	  this.init = function(_ngModel_) {
	    ngModel = _ngModel_;
	    closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? scope.$parent.$eval(attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection;
	    appendToBody = angular.isDefined(attrs.datepickerAppendToBody) ? scope.$parent.$eval(attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody;
	    onOpenFocus = angular.isDefined(attrs.onOpenFocus) ? scope.$parent.$eval(attrs.onOpenFocus) : datepickerPopupConfig.onOpenFocus;
	    datepickerPopupTemplateUrl = angular.isDefined(attrs.datepickerPopupTemplateUrl) ? attrs.datepickerPopupTemplateUrl : datepickerPopupConfig.datepickerPopupTemplateUrl;
	    datepickerTemplateUrl = angular.isDefined(attrs.datepickerTemplateUrl) ? attrs.datepickerTemplateUrl : datepickerPopupConfig.datepickerTemplateUrl;

	    scope.showButtonBar = angular.isDefined(attrs.showButtonBar) ? scope.$parent.$eval(attrs.showButtonBar) : datepickerPopupConfig.showButtonBar;

	    if (datepickerPopupConfig.html5Types[attrs.type]) {
	      dateFormat = datepickerPopupConfig.html5Types[attrs.type];
	      isHtml5DateInput = true;
	    } else {
	      dateFormat = attrs.datepickerPopup || attrs.uibDatepickerPopup || datepickerPopupConfig.datepickerPopup;
	      attrs.$observe('uibDatepickerPopup', function(value, oldValue) {
	          var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
	          // Invalidate the $modelValue to ensure that formatters re-run
	          // FIXME: Refactor when PR is merged: https://github.com/angular/angular.js/pull/10764
	          if (newDateFormat !== dateFormat) {
	            dateFormat = newDateFormat;
	            ngModel.$modelValue = null;

	            if (!dateFormat) {
	              throw new Error('uibDatepickerPopup must have a date format specified.');
	            }
	          }
	      });
	    }

	    if (!dateFormat) {
	      throw new Error('uibDatepickerPopup must have a date format specified.');
	    }

	    if (isHtml5DateInput && attrs.datepickerPopup) {
	      throw new Error('HTML5 date input types do not support custom formats.');
	    }

	    // popup element used to display calendar
	    popupEl = angular.element('<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>');
	    popupEl.attr({
	      'ng-model': 'date',
	      'ng-change': 'dateSelection(date)',
	      'template-url': datepickerPopupTemplateUrl
	    });

	    // datepicker element
	    datepickerEl = angular.element(popupEl.children()[0]);
	    datepickerEl.attr('template-url', datepickerTemplateUrl);

	    if (isHtml5DateInput) {
	      if (attrs.type === 'month') {
	        datepickerEl.attr('datepicker-mode', '"month"');
	        datepickerEl.attr('min-mode', 'month');
	      }
	    }

	    if (attrs.datepickerOptions) {
	      var options = scope.$parent.$eval(attrs.datepickerOptions);
	      if (options && options.initDate) {
	        scope.initDate = options.initDate;
	        datepickerEl.attr('init-date', 'initDate');
	        delete options.initDate;
	      }
	      angular.forEach(options, function(value, option) {
	        datepickerEl.attr(cameltoDash(option), value);
	      });
	    }

	    angular.forEach(['minMode', 'maxMode', 'minDate', 'maxDate', 'datepickerMode', 'initDate', 'shortcutPropagation'], function(key) {
	      if (attrs[key]) {
	        var getAttribute = $parse(attrs[key]);
	        scope.$parent.$watch(getAttribute, function(value) {
	          scope.watchData[key] = value;
	          if (key === 'minDate' || key === 'maxDate') {
	            cache[key] = new Date(value);
	          }
	        });
	        datepickerEl.attr(cameltoDash(key), 'watchData.' + key);

	        // Propagate changes from datepicker to outside
	        if (key === 'datepickerMode') {
	          var setAttribute = getAttribute.assign;
	          scope.$watch('watchData.' + key, function(value, oldvalue) {
	            if (angular.isFunction(setAttribute) && value !== oldvalue) {
	              setAttribute(scope.$parent, value);
	            }
	          });
	        }
	      }
	    });
	    if (attrs.dateDisabled) {
	      datepickerEl.attr('date-disabled', 'dateDisabled({ date: date, mode: mode })');
	    }

	    if (attrs.showWeeks) {
	      datepickerEl.attr('show-weeks', attrs.showWeeks);
	    }

	    if (attrs.customClass) {
	      datepickerEl.attr('custom-class', 'customClass({ date: date, mode: mode })');
	    }

	    if (!isHtml5DateInput) {
	      // Internal API to maintain the correct ng-invalid-[key] class
	      ngModel.$$parserName = 'date';
	      ngModel.$validators.date = validator;
	      ngModel.$parsers.unshift(parseDate);
	      ngModel.$formatters.push(function(value) {
	        scope.date = value;
	        return ngModel.$isEmpty(value) ? value : dateFilter(value, dateFormat);
	      });
	    } else {
	      ngModel.$formatters.push(function(value) {
	        scope.date = value;
	        return value;
	      });
	    }

	    // Detect changes in the view from the text box
	    ngModel.$viewChangeListeners.push(function() {
	      scope.date = dateParser.parse(ngModel.$viewValue, dateFormat, scope.date);
	    });

	    element.bind('keydown', inputKeydownBind);

	    $popup = $compile(popupEl)(scope);
	    // Prevent jQuery cache memory leak (template is now redundant after linking)
	    popupEl.remove();

	    if (appendToBody) {
	      $document.find('body').append($popup);
	    } else {
	      element.after($popup);
	    }

	    scope.$on('$destroy', function() {
	      if (scope.isOpen === true) {
	        if (!$rootScope.$$phase) {
	          scope.$apply(function() {
	            scope.isOpen = false;
	          });
	        }
	      }

	      $popup.remove();
	      element.unbind('keydown', inputKeydownBind);
	      $document.unbind('click', documentClickBind);
	    });
	  };

	  scope.getText = function(key) {
	    return scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
	  };

	  scope.isDisabled = function(date) {
	    if (date === 'today') {
	      date = new Date();
	    }

	    return ((scope.watchData.minDate && scope.compare(date, cache.minDate) < 0) ||
	      (scope.watchData.maxDate && scope.compare(date, cache.maxDate) > 0));
	  };

	  scope.compare = function(date1, date2) {
	    return (new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate()));
	  };

	  // Inner change
	  scope.dateSelection = function(dt) {
	    if (angular.isDefined(dt)) {
	      scope.date = dt;
	    }
	    var date = scope.date ? dateFilter(scope.date, dateFormat) : null; // Setting to NULL is necessary for form validators to function
	    element.val(date);
	    ngModel.$setViewValue(date);

	    if (closeOnDateSelection) {
	      scope.isOpen = false;
	      element[0].focus();
	    }
	  };

	  scope.keydown = function(evt) {
	    if (evt.which === 27) {
	      scope.isOpen = false;
	      element[0].focus();
	    }
	  };

	  scope.select = function(date) {
	    if (date === 'today') {
	      var today = new Date();
	      if (angular.isDate(scope.date)) {
	        date = new Date(scope.date);
	        date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
	      } else {
	        date = new Date(today.setHours(0, 0, 0, 0));
	      }
	    }
	    scope.dateSelection(date);
	  };

	  scope.close = function() {
	    scope.isOpen = false;
	    element[0].focus();
	  };

	  scope.$watch('isOpen', function(value) {
	    if (value) {
	      scope.position = appendToBody ? $position.offset(element) : $position.position(element);
	      scope.position.top = scope.position.top + element.prop('offsetHeight');

	      $timeout(function() {
	        if (onOpenFocus) {
	          scope.$broadcast('uib:datepicker.focus');
	        }
	        $document.bind('click', documentClickBind);
	      }, 0, false);
	    } else {
	      $document.unbind('click', documentClickBind);
	    }
	  });

	  function cameltoDash(string) {
	    return string.replace(/([A-Z])/g, function($1) { return '-' + $1.toLowerCase(); });
	  }

	  function parseDate(viewValue) {
	    if (angular.isNumber(viewValue)) {
	      // presumably timestamp to date object
	      viewValue = new Date(viewValue);
	    }

	    if (!viewValue) {
	      return null;
	    } else if (angular.isDate(viewValue) && !isNaN(viewValue)) {
	      return viewValue;
	    } else if (angular.isString(viewValue)) {
	      var date = dateParser.parse(viewValue, dateFormat, scope.date);
	      if (isNaN(date)) {
	        return undefined;
	      } else {
	        return date;
	      }
	    } else {
	      return undefined;
	    }
	  }

	  function validator(modelValue, viewValue) {
	    var value = modelValue || viewValue;

	    if (!attrs.ngRequired && !value) {
	      return true;
	    }

	    if (angular.isNumber(value)) {
	      value = new Date(value);
	    }
	    if (!value) {
	      return true;
	    } else if (angular.isDate(value) && !isNaN(value)) {
	      return true;
	    } else if (angular.isString(value)) {
	      var date = dateParser.parse(value, dateFormat);
	      return !isNaN(date);
	    } else {
	      return false;
	    }
	  }

	  function documentClickBind(event) {
	    var popup = $popup[0];
	    var dpContainsTarget = element[0].contains(event.target);
	    // The popup node may not be an element node
	    // In some browsers (IE) only element nodes have the 'contains' function
	    var popupContainsTarget = popup.contains !== undefined && popup.contains(event.target);
	    if (scope.isOpen && !(dpContainsTarget || popupContainsTarget)) {
	      scope.$apply(function() {
	        scope.isOpen = false;
	      });
	    }
	  }

	  function inputKeydownBind(evt) {
	    if (evt.which === 27 && scope.isOpen) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      scope.$apply(function() {
	        scope.isOpen = false;
	      });
	      element[0].focus();
	    } else if (evt.which === 40 && !scope.isOpen) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      scope.$apply(function() {
	        scope.isOpen = true;
	      });
	    }
	  }
	}])

	.directive('uibDatepickerPopup', function() {
	  return {
	    require: ['ngModel', 'uibDatepickerPopup'],
	    controller: 'UibDatepickerPopupController',
	    scope: {
	      isOpen: '=?',
	      currentText: '@',
	      clearText: '@',
	      closeText: '@',
	      dateDisabled: '&',
	      customClass: '&'
	    },
	    link: function(scope, element, attrs, ctrls) {
	      var ngModel = ctrls[0],
	        ctrl = ctrls[1];

	      ctrl.init(ngModel);
	    }
	  };
	})

	.directive('uibDatepickerPopupWrap', function() {
	  return {
	    replace: true,
	    transclude: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/datepicker/popup.html';
	    }
	  };
	});

	/* Deprecated datepicker below */

	angular.module('ui.bootstrap.datepicker')

	.value('$datepickerSuppressWarning', false)

	.controller('DatepickerController', ['$scope', '$attrs', '$parse', '$interpolate', '$log', 'dateFilter', 'uibDatepickerConfig', '$datepickerSuppressError', '$datepickerSuppressWarning', function($scope, $attrs, $parse, $interpolate, $log, dateFilter, datepickerConfig, $datepickerSuppressError, $datepickerSuppressWarning) {
	  if (!$datepickerSuppressWarning) {
	    $log.warn('DatepickerController is now deprecated. Use UibDatepickerController instead.');
	  }

	  var self = this,
	    ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl;

	  this.modes = ['day', 'month', 'year'];

	  angular.forEach(['formatDay', 'formatMonth', 'formatYear', 'formatDayHeader', 'formatDayTitle', 'formatMonthTitle',
	    'showWeeks', 'startingDay', 'yearRange', 'shortcutPropagation'], function(key, index) {
	    self[key] = angular.isDefined($attrs[key]) ? (index < 6 ? $interpolate($attrs[key])($scope.$parent) : $scope.$parent.$eval($attrs[key])) : datepickerConfig[key];
	  });

	  angular.forEach(['minDate', 'maxDate'], function(key) {
	    if ($attrs[key]) {
	      $scope.$parent.$watch($parse($attrs[key]), function(value) {
	        self[key] = value ? new Date(value) : null;
	        self.refreshView();
	      });
	    } else {
	      self[key] = datepickerConfig[key] ? new Date(datepickerConfig[key]) : null;
	    }
	  });

	  angular.forEach(['minMode', 'maxMode'], function(key) {
	    if ($attrs[key]) {
	      $scope.$parent.$watch($parse($attrs[key]), function(value) {
	        self[key] = angular.isDefined(value) ? value : $attrs[key];
	        $scope[key] = self[key];
	        if ((key == 'minMode' && self.modes.indexOf($scope.datepickerMode) < self.modes.indexOf(self[key])) || (key == 'maxMode' && self.modes.indexOf($scope.datepickerMode) > self.modes.indexOf(self[key]))) {
	          $scope.datepickerMode = self[key];
	        }
	      });
	    } else {
	      self[key] = datepickerConfig[key] || null;
	      $scope[key] = self[key];
	    }
	  });

	  $scope.datepickerMode = $scope.datepickerMode || datepickerConfig.datepickerMode;
	  $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);

	  if (angular.isDefined($attrs.initDate)) {
	    this.activeDate = $scope.$parent.$eval($attrs.initDate) || new Date();
	    $scope.$parent.$watch($attrs.initDate, function(initDate) {
	      if (initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)) {
	        self.activeDate = initDate;
	        self.refreshView();
	      }
	    });
	  } else {
	    this.activeDate = new Date();
	  }

	  $scope.isActive = function(dateObject) {
	    if (self.compare(dateObject.date, self.activeDate) === 0) {
	      $scope.activeDateId = dateObject.uid;
	      return true;
	    }
	    return false;
	  };

	  this.init = function(ngModelCtrl_) {
	    ngModelCtrl = ngModelCtrl_;

	    ngModelCtrl.$render = function() {
	      self.render();
	    };
	  };

	  this.render = function() {
	    if (ngModelCtrl.$viewValue) {
	      var date = new Date(ngModelCtrl.$viewValue),
	        isValid = !isNaN(date);

	      if (isValid) {
	        this.activeDate = date;
	      } else if (!$datepickerSuppressError) {
	        $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
	      }
	    }
	    this.refreshView();
	  };

	  this.refreshView = function() {
	    if (this.element) {
	      this._refreshView();

	      var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
	      ngModelCtrl.$setValidity('dateDisabled', !date || (this.element && !this.isDisabled(date)));
	    }
	  };

	  this.createDateObject = function(date, format) {
	    var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
	    return {
	      date: date,
	      label: dateFilter(date, format),
	      selected: model && this.compare(date, model) === 0,
	      disabled: this.isDisabled(date),
	      current: this.compare(date, new Date()) === 0,
	      customClass: this.customClass(date)
	    };
	  };

	  this.isDisabled = function(date) {
	    return ((this.minDate && this.compare(date, this.minDate) < 0) || (this.maxDate && this.compare(date, this.maxDate) > 0) || ($attrs.dateDisabled && $scope.dateDisabled({date: date, mode: $scope.datepickerMode})));
	  };

	  this.customClass = function(date) {
	    return $scope.customClass({date: date, mode: $scope.datepickerMode});
	  };

	  // Split array into smaller arrays
	  this.split = function(arr, size) {
	    var arrays = [];
	    while (arr.length > 0) {
	      arrays.push(arr.splice(0, size));
	    }
	    return arrays;
	  };

	  this.fixTimeZone = function(date) {
	    var hours = date.getHours();
	    date.setHours(hours === 23 ? hours + 2 : 0);
	  };

	  $scope.select = function(date) {
	    if ($scope.datepickerMode === self.minMode) {
	      var dt = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : new Date(0, 0, 0, 0, 0, 0, 0);
	      dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
	      ngModelCtrl.$setViewValue(dt);
	      ngModelCtrl.$render();
	    } else {
	      self.activeDate = date;
	      $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) - 1];
	    }
	  };

	  $scope.move = function(direction) {
	    var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
	      month = self.activeDate.getMonth() + direction * (self.step.months || 0);
	    self.activeDate.setFullYear(year, month, 1);
	    self.refreshView();
	  };

	  $scope.toggleMode = function(direction) {
	    direction = direction || 1;

	    if (($scope.datepickerMode === self.maxMode && direction === 1) || ($scope.datepickerMode === self.minMode && direction === -1)) {
	      return;
	    }

	    $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) + direction];
	  };

	  // Key event mapper
	  $scope.keys = { 13: 'enter', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home', 37: 'left', 38: 'up', 39: 'right', 40: 'down' };

	  var focusElement = function() {
	    self.element[0].focus();
	  };

	  $scope.$on('uib:datepicker.focus', focusElement);

	  $scope.keydown = function(evt) {
	    var key = $scope.keys[evt.which];

	    if (!key || evt.shiftKey || evt.altKey) {
	      return;
	    }

	    evt.preventDefault();
	    if (!self.shortcutPropagation) {
	      evt.stopPropagation();
	    }

	    if (key === 'enter' || key === 'space') {
	      if (self.isDisabled(self.activeDate)) {
	        return; // do nothing
	      }
	      $scope.select(self.activeDate);
	    } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
	      $scope.toggleMode(key === 'up' ? 1 : -1);
	    } else {
	      self.handleKeyDown(key, evt);
	      self.refreshView();
	    }
	  };
	}])

	.directive('datepicker', ['$log', '$datepickerSuppressWarning', function($log, $datepickerSuppressWarning) {
	  return {
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/datepicker/datepicker.html';
	    },
	    scope: {
	      datepickerMode: '=?',
	      dateDisabled: '&',
	      customClass: '&',
	      shortcutPropagation: '&?'
	    },
	    require: ['datepicker', '^ngModel'],
	    controller: 'DatepickerController',
	    controllerAs: 'datepicker',
	    link: function(scope, element, attrs, ctrls) {
	      if (!$datepickerSuppressWarning) {
	        $log.warn('datepicker is now deprecated. Use uib-datepicker instead.');
	      }

	      var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      datepickerCtrl.init(ngModelCtrl);
	    }
	  };
	}])

	.directive('daypicker', ['$log', '$datepickerSuppressWarning', function($log, $datepickerSuppressWarning) {
	  return {
	    replace: true,
	    templateUrl: 'template/datepicker/day.html',
	    require: ['^datepicker', 'daypicker'],
	    controller: 'UibDaypickerController',
	    link: function(scope, element, attrs, ctrls) {
	      if (!$datepickerSuppressWarning) {
	        $log.warn('daypicker is now deprecated. Use uib-daypicker instead.');
	      }

	      var datepickerCtrl = ctrls[0],
	        daypickerCtrl = ctrls[1];

	      daypickerCtrl.init(datepickerCtrl);
	    }
	  };
	}])

	.directive('monthpicker', ['$log', '$datepickerSuppressWarning', function($log, $datepickerSuppressWarning) {
	  return {
	    replace: true,
	    templateUrl: 'template/datepicker/month.html',
	    require: ['^datepicker', 'monthpicker'],
	    controller: 'UibMonthpickerController',
	    link: function(scope, element, attrs, ctrls) {
	      if (!$datepickerSuppressWarning) {
	        $log.warn('monthpicker is now deprecated. Use uib-monthpicker instead.');
	      }

	      var datepickerCtrl = ctrls[0],
	        monthpickerCtrl = ctrls[1];

	      monthpickerCtrl.init(datepickerCtrl);
	    }
	  };
	}])

	.directive('yearpicker', ['$log', '$datepickerSuppressWarning', function($log, $datepickerSuppressWarning) {
	  return {
	    replace: true,
	    templateUrl: 'template/datepicker/year.html',
	    require: ['^datepicker', 'yearpicker'],
	    controller: 'UibYearpickerController',
	    link: function(scope, element, attrs, ctrls) {
	      if (!$datepickerSuppressWarning) {
	        $log.warn('yearpicker is now deprecated. Use uib-yearpicker instead.');
	      }

	      var ctrl = ctrls[0];
	      angular.extend(ctrl, ctrls[1]);
	      ctrl.yearpickerInit();

	      ctrl.refreshView();
	    }
	  };
	}])

	.directive('datepickerPopup', ['$log', '$datepickerSuppressWarning', function($log, $datepickerSuppressWarning) {
	  return {
	    require: ['ngModel', 'datepickerPopup'],
	    controller: 'UibDatepickerPopupController',
	    scope: {
	      isOpen: '=?',
	      currentText: '@',
	      clearText: '@',
	      closeText: '@',
	      dateDisabled: '&',
	      customClass: '&'
	    },
	    link: function(scope, element, attrs, ctrls) {
	      if (!$datepickerSuppressWarning) {
	        $log.warn('datepicker-popup is now deprecated. Use uib-datepicker-popup instead.');
	      }

	      var ngModel = ctrls[0],
	        ctrl = ctrls[1];

	      ctrl.init(ngModel);
	    }
	  };
	}])

	.directive('datepickerPopupWrap', ['$log', '$datepickerSuppressWarning', function($log, $datepickerSuppressWarning) {
	  return {
	    replace: true,
	    transclude: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/datepicker/popup.html';
	    },
	    link: function() {
	      if (!$datepickerSuppressWarning) {
	        $log.warn('datepicker-popup-wrap is now deprecated. Use uib-datepicker-popup-wrap instead.');
	      }
	    }
	  };
	}]);

	angular.module('ui.bootstrap.dropdown', ['ui.bootstrap.position'])

	.constant('uibDropdownConfig', {
	  openClass: 'open'
	})

	.service('uibDropdownService', ['$document', '$rootScope', function($document, $rootScope) {
	  var openScope = null;

	  this.open = function(dropdownScope) {
	    if (!openScope) {
	      $document.bind('click', closeDropdown);
	      $document.bind('keydown', keybindFilter);
	    }

	    if (openScope && openScope !== dropdownScope) {
	      openScope.isOpen = false;
	    }

	    openScope = dropdownScope;
	  };

	  this.close = function(dropdownScope) {
	    if (openScope === dropdownScope) {
	      openScope = null;
	      $document.unbind('click', closeDropdown);
	      $document.unbind('keydown', keybindFilter);
	    }
	  };

	  var closeDropdown = function(evt) {
	    // This method may still be called during the same mouse event that
	    // unbound this event handler. So check openScope before proceeding.
	    if (!openScope) { return; }

	    if (evt && openScope.getAutoClose() === 'disabled')  { return ; }

	    var toggleElement = openScope.getToggleElement();
	    if (evt && toggleElement && toggleElement[0].contains(evt.target)) {
	      return;
	    }

	    var dropdownElement = openScope.getDropdownElement();
	    if (evt && openScope.getAutoClose() === 'outsideClick' &&
	      dropdownElement && dropdownElement[0].contains(evt.target)) {
	      return;
	    }

	    openScope.isOpen = false;

	    if (!$rootScope.$$phase) {
	      openScope.$apply();
	    }
	  };

	  var keybindFilter = function(evt) {
	    if (evt.which === 27) {
	      openScope.focusToggleElement();
	      closeDropdown();
	    } else if (openScope.isKeynavEnabled() && /(38|40)/.test(evt.which) && openScope.isOpen) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      openScope.focusDropdownEntry(evt.which);
	    }
	  };
	}])

	.controller('UibDropdownController', ['$scope', '$element', '$attrs', '$parse', 'uibDropdownConfig', 'uibDropdownService', '$animate', '$uibPosition', '$document', '$compile', '$templateRequest', function($scope, $element, $attrs, $parse, dropdownConfig, uibDropdownService, $animate, $position, $document, $compile, $templateRequest) {
	  var self = this,
	    scope = $scope.$new(), // create a child scope so we are not polluting original one
	    templateScope,
	    openClass = dropdownConfig.openClass,
	    getIsOpen,
	    setIsOpen = angular.noop,
	    toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
	    appendToBody = false,
	    keynavEnabled =false,
	    selectedOption = null;


	  $element.addClass('dropdown');

	  this.init = function() {
	    if ($attrs.isOpen) {
	      getIsOpen = $parse($attrs.isOpen);
	      setIsOpen = getIsOpen.assign;

	      $scope.$watch(getIsOpen, function(value) {
	        scope.isOpen = !!value;
	      });
	    }

	    appendToBody = angular.isDefined($attrs.dropdownAppendToBody);
	    keynavEnabled = angular.isDefined($attrs.uibKeyboardNav);

	    if (appendToBody && self.dropdownMenu) {
	      $document.find('body').append(self.dropdownMenu);
	      $element.on('$destroy', function handleDestroyEvent() {
	        self.dropdownMenu.remove();
	      });
	    }
	  };

	  this.toggle = function(open) {
	    return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
	  };

	  // Allow other directives to watch status
	  this.isOpen = function() {
	    return scope.isOpen;
	  };

	  scope.getToggleElement = function() {
	    return self.toggleElement;
	  };

	  scope.getAutoClose = function() {
	    return $attrs.autoClose || 'always'; //or 'outsideClick' or 'disabled'
	  };

	  scope.getElement = function() {
	    return $element;
	  };

	  scope.isKeynavEnabled = function() {
	    return keynavEnabled;
	  };

	  scope.focusDropdownEntry = function(keyCode) {
	    var elems = self.dropdownMenu ? //If append to body is used.
	      (angular.element(self.dropdownMenu).find('a')) :
	      (angular.element($element).find('ul').eq(0).find('a'));

	    switch (keyCode) {
	      case (40): {
	        if (!angular.isNumber(self.selectedOption)) {
	          self.selectedOption = 0;
	        } else {
	          self.selectedOption = (self.selectedOption === elems.length - 1 ?
	            self.selectedOption :
	            self.selectedOption + 1);
	        }
	        break;
	      }
	      case (38): {
	        if (!angular.isNumber(self.selectedOption)) {
	          self.selectedOption = elems.length - 1;
	        } else {
	          self.selectedOption = self.selectedOption === 0 ?
	            0 : self.selectedOption - 1;
	        }
	        break;
	      }
	    }
	    elems[self.selectedOption].focus();
	  };

	  scope.getDropdownElement = function() {
	    return self.dropdownMenu;
	  };

	  scope.focusToggleElement = function() {
	    if (self.toggleElement) {
	      self.toggleElement[0].focus();
	    }
	  };

	  scope.$watch('isOpen', function(isOpen, wasOpen) {
	    if (appendToBody && self.dropdownMenu) {
	      var pos = $position.positionElements($element, self.dropdownMenu, 'bottom-left', true);
	      var css = {
	        top: pos.top + 'px',
	        display: isOpen ? 'block' : 'none'
	      };

	      var rightalign = self.dropdownMenu.hasClass('dropdown-menu-right');
	      if (!rightalign) {
	        css.left = pos.left + 'px';
	        css.right = 'auto';
	      } else {
	        css.left = 'auto';
	        css.right = (window.innerWidth - (pos.left + $element.prop('offsetWidth'))) + 'px';
	      }

	      self.dropdownMenu.css(css);
	    }

	    $animate[isOpen ? 'addClass' : 'removeClass']($element, openClass).then(function() {
	      if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
	        toggleInvoker($scope, { open: !!isOpen });
	      }
	    });

	    if (isOpen) {
	      if (self.dropdownMenuTemplateUrl) {
	        $templateRequest(self.dropdownMenuTemplateUrl).then(function(tplContent) {
	          templateScope = scope.$new();
	          $compile(tplContent.trim())(templateScope, function(dropdownElement) {
	            var newEl = dropdownElement;
	            self.dropdownMenu.replaceWith(newEl);
	            self.dropdownMenu = newEl;
	          });
	        });
	      }

	      scope.focusToggleElement();
	      uibDropdownService.open(scope);
	    } else {
	      if (self.dropdownMenuTemplateUrl) {
	        if (templateScope) {
	          templateScope.$destroy();
	        }
	        var newEl = angular.element('<ul class="dropdown-menu"></ul>');
	        self.dropdownMenu.replaceWith(newEl);
	        self.dropdownMenu = newEl;
	      }

	      uibDropdownService.close(scope);
	      self.selectedOption = null;
	    }

	    if (angular.isFunction(setIsOpen)) {
	      setIsOpen($scope, isOpen);
	    }
	  });

	  $scope.$on('$locationChangeSuccess', function() {
	    if (scope.getAutoClose() !== 'disabled') {
	      scope.isOpen = false;
	    }
	  });

	  var offDestroy = $scope.$on('$destroy', function() {
	    scope.$destroy();
	  });
	  scope.$on('$destroy', offDestroy);
	}])

	.directive('uibDropdown', function() {
	  return {
	    controller: 'UibDropdownController',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      dropdownCtrl.init();
	    }
	  };
	})

	.directive('uibDropdownMenu', function() {
	  return {
	    restrict: 'AC',
	    require: '?^uibDropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if (!dropdownCtrl || angular.isDefined(attrs.dropdownNested)) {
	        return;
	      }

	      element.addClass('dropdown-menu');

	      var tplUrl = attrs.templateUrl;
	      if (tplUrl) {
	        dropdownCtrl.dropdownMenuTemplateUrl = tplUrl;
	      }

	      if (!dropdownCtrl.dropdownMenu) {
	        dropdownCtrl.dropdownMenu = element;
	      }
	    }
	  };
	})

	.directive('uibKeyboardNav', function() {
	  return {
	    restrict: 'A',
	    require: '?^uibDropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      element.bind('keydown', function(e) {
	        if ([38, 40].indexOf(e.which) !== -1) {
	          e.preventDefault();
	          e.stopPropagation();

	          var elems = dropdownCtrl.dropdownMenu.find('a');

	          switch (e.which) {
	            case (40): { // Down
	              if (!angular.isNumber(dropdownCtrl.selectedOption)) {
	                dropdownCtrl.selectedOption = 0;
	              } else {
	                dropdownCtrl.selectedOption = dropdownCtrl.selectedOption === elems.length -1 ?
	                  dropdownCtrl.selectedOption : dropdownCtrl.selectedOption + 1;
	              }
	              break;
	            }
	            case (38): { // Up
	              if (!angular.isNumber(dropdownCtrl.selectedOption)) {
	                dropdownCtrl.selectedOption = elems.length - 1;
	              } else {
	                dropdownCtrl.selectedOption = dropdownCtrl.selectedOption === 0 ?
	                  0 : dropdownCtrl.selectedOption - 1;
	              }
	              break;
	            }
	          }
	          elems[dropdownCtrl.selectedOption].focus();
	        }
	      });
	    }
	  };
	})

	.directive('uibDropdownToggle', function() {
	  return {
	    require: '?^uibDropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if (!dropdownCtrl) {
	        return;
	      }

	      element.addClass('dropdown-toggle');

	      dropdownCtrl.toggleElement = element;

	      var toggleDropdown = function(event) {
	        event.preventDefault();

	        if (!element.hasClass('disabled') && !attrs.disabled) {
	          scope.$apply(function() {
	            dropdownCtrl.toggle();
	          });
	        }
	      };

	      element.bind('click', toggleDropdown);

	      // WAI-ARIA
	      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
	      scope.$watch(dropdownCtrl.isOpen, function(isOpen) {
	        element.attr('aria-expanded', !!isOpen);
	      });

	      scope.$on('$destroy', function() {
	        element.unbind('click', toggleDropdown);
	      });
	    }
	  };
	});

	/* Deprecated dropdown below */

	angular.module('ui.bootstrap.dropdown')

	.value('$dropdownSuppressWarning', false)

	.service('dropdownService', ['$log', '$dropdownSuppressWarning', 'uibDropdownService', function($log, $dropdownSuppressWarning, uibDropdownService) {
	  if (!$dropdownSuppressWarning) {
	    $log.warn('dropdownService is now deprecated. Use uibDropdownService instead.');
	  }

	  angular.extend(this, uibDropdownService);
	}])

	.controller('DropdownController', ['$scope', '$element', '$attrs', '$parse', 'uibDropdownConfig', 'uibDropdownService', '$animate', '$uibPosition', '$document', '$compile', '$templateRequest', '$log', '$dropdownSuppressWarning', function($scope, $element, $attrs, $parse, dropdownConfig, uibDropdownService, $animate, $position, $document, $compile, $templateRequest, $log, $dropdownSuppressWarning) {
	  if (!$dropdownSuppressWarning) {
	    $log.warn('DropdownController is now deprecated. Use UibDropdownController instead.');
	  }

	  var self = this,
	    scope = $scope.$new(), // create a child scope so we are not polluting original one
	    templateScope,
	    openClass = dropdownConfig.openClass,
	    getIsOpen,
	    setIsOpen = angular.noop,
	    toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
	    appendToBody = false,
	    keynavEnabled =false,
	    selectedOption = null;


	  $element.addClass('dropdown');

	  this.init = function() {
	    if ($attrs.isOpen) {
	      getIsOpen = $parse($attrs.isOpen);
	      setIsOpen = getIsOpen.assign;

	      $scope.$watch(getIsOpen, function(value) {
	        scope.isOpen = !!value;
	      });
	    }

	    appendToBody = angular.isDefined($attrs.dropdownAppendToBody);
	    keynavEnabled = angular.isDefined($attrs.uibKeyboardNav);

	    if (appendToBody && self.dropdownMenu) {
	      $document.find('body').append(self.dropdownMenu);
	      $element.on('$destroy', function handleDestroyEvent() {
	        self.dropdownMenu.remove();
	      });
	    }
	  };

	  this.toggle = function(open) {
	    return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
	  };

	  // Allow other directives to watch status
	  this.isOpen = function() {
	    return scope.isOpen;
	  };

	  scope.getToggleElement = function() {
	    return self.toggleElement;
	  };

	  scope.getAutoClose = function() {
	    return $attrs.autoClose || 'always'; //or 'outsideClick' or 'disabled'
	  };

	  scope.getElement = function() {
	    return $element;
	  };

	  scope.isKeynavEnabled = function() {
	    return keynavEnabled;
	  };

	  scope.focusDropdownEntry = function(keyCode) {
	    var elems = self.dropdownMenu ? //If append to body is used.
	      (angular.element(self.dropdownMenu).find('a')) :
	      (angular.element($element).find('ul').eq(0).find('a'));

	    switch (keyCode) {
	      case (40): {
	        if (!angular.isNumber(self.selectedOption)) {
	          self.selectedOption = 0;
	        } else {
	          self.selectedOption = (self.selectedOption === elems.length -1 ?
	            self.selectedOption :
	          self.selectedOption + 1);
	        }
	        break;
	      }
	      case (38): {
	        if (!angular.isNumber(self.selectedOption)) {
	          self.selectedOption = elems.length - 1;
	        } else {
	          self.selectedOption = self.selectedOption === 0 ?
	            0 : self.selectedOption - 1;
	        }
	        break;
	      }
	    }
	    elems[self.selectedOption].focus();
	  };

	  scope.getDropdownElement = function() {
	    return self.dropdownMenu;
	  };

	  scope.focusToggleElement = function() {
	    if (self.toggleElement) {
	      self.toggleElement[0].focus();
	    }
	  };

	  scope.$watch('isOpen', function(isOpen, wasOpen) {
	    if (appendToBody && self.dropdownMenu) {
	      var pos = $position.positionElements($element, self.dropdownMenu, 'bottom-left', true);
	      var css = {
	        top: pos.top + 'px',
	        display: isOpen ? 'block' : 'none'
	      };

	      var rightalign = self.dropdownMenu.hasClass('dropdown-menu-right');
	      if (!rightalign) {
	        css.left = pos.left + 'px';
	        css.right = 'auto';
	      } else {
	        css.left = 'auto';
	        css.right = (window.innerWidth - (pos.left + $element.prop('offsetWidth'))) + 'px';
	      }

	      self.dropdownMenu.css(css);
	    }

	    $animate[isOpen ? 'addClass' : 'removeClass']($element, openClass).then(function() {
	      if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
	        toggleInvoker($scope, { open: !!isOpen });
	      }
	    });

	    if (isOpen) {
	      if (self.dropdownMenuTemplateUrl) {
	        $templateRequest(self.dropdownMenuTemplateUrl).then(function(tplContent) {
	          templateScope = scope.$new();
	          $compile(tplContent.trim())(templateScope, function(dropdownElement) {
	            var newEl = dropdownElement;
	            self.dropdownMenu.replaceWith(newEl);
	            self.dropdownMenu = newEl;
	          });
	        });
	      }

	      scope.focusToggleElement();
	      uibDropdownService.open(scope);
	    } else {
	      if (self.dropdownMenuTemplateUrl) {
	        if (templateScope) {
	          templateScope.$destroy();
	        }
	        var newEl = angular.element('<ul class="dropdown-menu"></ul>');
	        self.dropdownMenu.replaceWith(newEl);
	        self.dropdownMenu = newEl;
	      }

	      uibDropdownService.close(scope);
	      self.selectedOption = null;
	    }

	    if (angular.isFunction(setIsOpen)) {
	      setIsOpen($scope, isOpen);
	    }
	  });

	  $scope.$on('$locationChangeSuccess', function() {
	    if (scope.getAutoClose() !== 'disabled') {
	      scope.isOpen = false;
	    }
	  });

	  var offDestroy = $scope.$on('$destroy', function() {
	    scope.$destroy();
	  });
	  scope.$on('$destroy', offDestroy);
	}])

	.directive('dropdown', ['$log', '$dropdownSuppressWarning', function($log, $dropdownSuppressWarning) {
	  return {
	    controller: 'DropdownController',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if (!$dropdownSuppressWarning) {
	        $log.warn('dropdown is now deprecated. Use uib-dropdown instead.');
	      }

	      dropdownCtrl.init();
	    }
	  };
	}])

	.directive('dropdownMenu', ['$log', '$dropdownSuppressWarning', function($log, $dropdownSuppressWarning) {
	  return {
	    restrict: 'AC',
	    require: '?^dropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if (!dropdownCtrl || angular.isDefined(attrs.dropdownNested)) {
	        return;
	      }

	      if (!$dropdownSuppressWarning) {
	        $log.warn('dropdown-menu is now deprecated. Use uib-dropdown-menu instead.');
	      }

	      element.addClass('dropdown-menu');

	      var tplUrl = attrs.templateUrl;
	      if (tplUrl) {
	        dropdownCtrl.dropdownMenuTemplateUrl = tplUrl;
	      }

	      if (!dropdownCtrl.dropdownMenu) {
	        dropdownCtrl.dropdownMenu = element;
	      }
	    }
	  };
	}])

	.directive('keyboardNav', ['$log', '$dropdownSuppressWarning', function($log, $dropdownSuppressWarning) {
	  return {
	    restrict: 'A',
	    require: '?^dropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if (!$dropdownSuppressWarning) {
	        $log.warn('keyboard-nav is now deprecated. Use uib-keyboard-nav instead.');
	      }

	      element.bind('keydown', function(e) {
	        if ([38, 40].indexOf(e.which) !== -1) {
	          e.preventDefault();
	          e.stopPropagation();

	          var elems = dropdownCtrl.dropdownMenu.find('a');

	          switch (e.which) {
	            case (40): { // Down
	              if (!angular.isNumber(dropdownCtrl.selectedOption)) {
	                dropdownCtrl.selectedOption = 0;
	              } else {
	                dropdownCtrl.selectedOption = dropdownCtrl.selectedOption === elems.length -1 ?
	                  dropdownCtrl.selectedOption : dropdownCtrl.selectedOption + 1;
	              }
	              break;
	            }
	            case (38): { // Up
	              if (!angular.isNumber(dropdownCtrl.selectedOption)) {
	                dropdownCtrl.selectedOption = elems.length - 1;
	              } else {
	                dropdownCtrl.selectedOption = dropdownCtrl.selectedOption === 0 ?
	                  0 : dropdownCtrl.selectedOption - 1;
	              }
	              break;
	            }
	          }
	          elems[dropdownCtrl.selectedOption].focus();
	        }
	      });
	    }
	  };
	}])

	.directive('dropdownToggle', ['$log', '$dropdownSuppressWarning', function($log, $dropdownSuppressWarning) {
	  return {
	    require: '?^dropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if (!$dropdownSuppressWarning) {
	        $log.warn('dropdown-toggle is now deprecated. Use uib-dropdown-toggle instead.');
	      }

	      if (!dropdownCtrl) {
	        return;
	      }

	      element.addClass('dropdown-toggle');

	      dropdownCtrl.toggleElement = element;

	      var toggleDropdown = function(event) {
	        event.preventDefault();

	        if (!element.hasClass('disabled') && !attrs.disabled) {
	          scope.$apply(function() {
	            dropdownCtrl.toggle();
	          });
	        }
	      };

	      element.bind('click', toggleDropdown);

	      // WAI-ARIA
	      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
	      scope.$watch(dropdownCtrl.isOpen, function(isOpen) {
	        element.attr('aria-expanded', !!isOpen);
	      });

	      scope.$on('$destroy', function() {
	        element.unbind('click', toggleDropdown);
	      });
	    }
	  };
	}]);

	angular.module('ui.bootstrap.stackedMap', [])
	/**
	 * A helper, internal data structure that acts as a map but also allows getting / removing
	 * elements in the LIFO order
	 */
	  .factory('$$stackedMap', function() {
	    return {
	      createNew: function() {
	        var stack = [];

	        return {
	          add: function(key, value) {
	            stack.push({
	              key: key,
	              value: value
	            });
	          },
	          get: function(key) {
	            for (var i = 0; i < stack.length; i++) {
	              if (key == stack[i].key) {
	                return stack[i];
	              }
	            }
	          },
	          keys: function() {
	            var keys = [];
	            for (var i = 0; i < stack.length; i++) {
	              keys.push(stack[i].key);
	            }
	            return keys;
	          },
	          top: function() {
	            return stack[stack.length - 1];
	          },
	          remove: function(key) {
	            var idx = -1;
	            for (var i = 0; i < stack.length; i++) {
	              if (key == stack[i].key) {
	                idx = i;
	                break;
	              }
	            }
	            return stack.splice(idx, 1)[0];
	          },
	          removeTop: function() {
	            return stack.splice(stack.length - 1, 1)[0];
	          },
	          length: function() {
	            return stack.length;
	          }
	        };
	      }
	    };
	  });
	angular.module('ui.bootstrap.modal', ['ui.bootstrap.stackedMap'])
	/**
	 * A helper, internal data structure that stores all references attached to key
	 */
	  .factory('$$multiMap', function() {
	    return {
	      createNew: function() {
	        var map = {};

	        return {
	          entries: function() {
	            return Object.keys(map).map(function(key) {
	              return {
	                key: key,
	                value: map[key]
	              };
	            });
	          },
	          get: function(key) {
	            return map[key];
	          },
	          hasKey: function(key) {
	            return !!map[key];
	          },
	          keys: function() {
	            return Object.keys(map);
	          },
	          put: function(key, value) {
	            if (!map[key]) {
	              map[key] = [];
	            }

	            map[key].push(value);
	          },
	          remove: function(key, value) {
	            var values = map[key];

	            if (!values) {
	              return;
	            }

	            var idx = values.indexOf(value);

	            if (idx !== -1) {
	              values.splice(idx, 1);
	            }

	            if (!values.length) {
	              delete map[key];
	            }
	          }
	        };
	      }
	    };
	  })

	/**
	 * A helper directive for the $modal service. It creates a backdrop element.
	 */
	  .directive('uibModalBackdrop', [
	           '$animate', '$injector', '$uibModalStack',
	  function($animate ,  $injector,   $modalStack) {
	    var $animateCss = null;

	    if ($injector.has('$animateCss')) {
	      $animateCss = $injector.get('$animateCss');
	    }

	    return {
	      replace: true,
	      templateUrl: 'template/modal/backdrop.html',
	      compile: function(tElement, tAttrs) {
	        tElement.addClass(tAttrs.backdropClass);
	        return linkFn;
	      }
	    };

	    function linkFn(scope, element, attrs) {
	      // Temporary fix for prefixing
	      element.addClass('modal-backdrop');

	      if (attrs.modalInClass) {
	        if ($animateCss) {
	          $animateCss(element, {
	            addClass: attrs.modalInClass
	          }).start();
	        } else {
	          $animate.addClass(element, attrs.modalInClass);
	        }

	        scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
	          var done = setIsAsync();
	          if ($animateCss) {
	            $animateCss(element, {
	              removeClass: attrs.modalInClass
	            }).start().then(done);
	          } else {
	            $animate.removeClass(element, attrs.modalInClass).then(done);
	          }
	        });
	      }
	    }
	  }])

	  .directive('uibModalWindow', [
	           '$uibModalStack', '$q', '$animate', '$injector',
	  function($modalStack ,  $q ,  $animate,   $injector) {
	    var $animateCss = null;

	    if ($injector.has('$animateCss')) {
	      $animateCss = $injector.get('$animateCss');
	    }

	    return {
	      scope: {
	        index: '@'
	      },
	      replace: true,
	      transclude: true,
	      templateUrl: function(tElement, tAttrs) {
	        return tAttrs.templateUrl || 'template/modal/window.html';
	      },
	      link: function(scope, element, attrs) {
	        element.addClass(attrs.windowClass || '');
	        element.addClass(attrs.windowTopClass || '');
	        scope.size = attrs.size;

	        scope.close = function(evt) {
	          var modal = $modalStack.getTop();
	          if (modal && modal.value.backdrop && modal.value.backdrop !== 'static' && (evt.target === evt.currentTarget)) {
	            evt.preventDefault();
	            evt.stopPropagation();
	            $modalStack.dismiss(modal.key, 'backdrop click');
	          }
	        };

	        // moved from template to fix issue #2280
	        element.on('click', scope.close);

	        // This property is only added to the scope for the purpose of detecting when this directive is rendered.
	        // We can detect that by using this property in the template associated with this directive and then use
	        // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
	        scope.$isRendered = true;

	        // Deferred object that will be resolved when this modal is render.
	        var modalRenderDeferObj = $q.defer();
	        // Observe function will be called on next digest cycle after compilation, ensuring that the DOM is ready.
	        // In order to use this way of finding whether DOM is ready, we need to observe a scope property used in modal's template.
	        attrs.$observe('modalRender', function(value) {
	          if (value == 'true') {
	            modalRenderDeferObj.resolve();
	          }
	        });

	        modalRenderDeferObj.promise.then(function() {
	          var animationPromise = null;

	          if (attrs.modalInClass) {
	            if ($animateCss) {
	              animationPromise = $animateCss(element, {
	                addClass: attrs.modalInClass
	              }).start();
	            } else {
	              animationPromise = $animate.addClass(element, attrs.modalInClass);
	            }

	            scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
	              var done = setIsAsync();
	              if ($animateCss) {
	                $animateCss(element, {
	                  removeClass: attrs.modalInClass
	                }).start().then(done);
	              } else {
	                $animate.removeClass(element, attrs.modalInClass).then(done);
	              }
	            });
	          }


	          $q.when(animationPromise).then(function() {
	            var inputWithAutofocus = element[0].querySelector('[autofocus]');
	            /**
	             * Auto-focusing of a freshly-opened modal element causes any child elements
	             * with the autofocus attribute to lose focus. This is an issue on touch
	             * based devices which will show and then hide the onscreen keyboard.
	             * Attempts to refocus the autofocus element via JavaScript will not reopen
	             * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
	             * the modal element if the modal does not contain an autofocus element.
	             */
	            if (inputWithAutofocus) {
	              inputWithAutofocus.focus();
	            } else {
	              element[0].focus();
	            }
	          });

	          // Notify {@link $modalStack} that modal is rendered.
	          var modal = $modalStack.getTop();
	          if (modal) {
	            $modalStack.modalRendered(modal.key);
	          }
	        });
	      }
	    };
	  }])

	  .directive('uibModalAnimationClass', function() {
	    return {
	      compile: function(tElement, tAttrs) {
	        if (tAttrs.modalAnimation) {
	          tElement.addClass(tAttrs.uibModalAnimationClass);
	        }
	      }
	    };
	  })

	  .directive('uibModalTransclude', function() {
	    return {
	      link: function($scope, $element, $attrs, controller, $transclude) {
	        $transclude($scope.$parent, function(clone) {
	          $element.empty();
	          $element.append(clone);
	        });
	      }
	    };
	  })

	  .factory('$uibModalStack', [
	             '$animate', '$timeout', '$document', '$compile', '$rootScope',
	             '$q',
	             '$injector',
	             '$$multiMap',
	             '$$stackedMap',
	    function($animate ,  $timeout ,  $document ,  $compile ,  $rootScope ,
	              $q,
	              $injector,
	              $$multiMap,
	              $$stackedMap) {
	      var $animateCss = null;

	      if ($injector.has('$animateCss')) {
	        $animateCss = $injector.get('$animateCss');
	      }

	      var OPENED_MODAL_CLASS = 'modal-open';

	      var backdropDomEl, backdropScope;
	      var openedWindows = $$stackedMap.createNew();
	      var openedClasses = $$multiMap.createNew();
	      var $modalStack = {
	        NOW_CLOSING_EVENT: 'modal.stack.now-closing'
	      };

	      //Modal focus behavior
	      var focusableElementList;
	      var focusIndex = 0;
	      var tababbleSelector = 'a[href], area[href], input:not([disabled]), ' +
	        'button:not([disabled]),select:not([disabled]), textarea:not([disabled]), ' +
	        'iframe, object, embed, *[tabindex], *[contenteditable=true]';

	      function backdropIndex() {
	        var topBackdropIndex = -1;
	        var opened = openedWindows.keys();
	        for (var i = 0; i < opened.length; i++) {
	          if (openedWindows.get(opened[i]).value.backdrop) {
	            topBackdropIndex = i;
	          }
	        }
	        return topBackdropIndex;
	      }

	      $rootScope.$watch(backdropIndex, function(newBackdropIndex) {
	        if (backdropScope) {
	          backdropScope.index = newBackdropIndex;
	        }
	      });

	      function removeModalWindow(modalInstance, elementToReceiveFocus) {
	        var body = $document.find('body').eq(0);
	        var modalWindow = openedWindows.get(modalInstance).value;

	        //clean up the stack
	        openedWindows.remove(modalInstance);

	        removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function() {
	          var modalBodyClass = modalWindow.openedClass || OPENED_MODAL_CLASS;
	          openedClasses.remove(modalBodyClass, modalInstance);
	          body.toggleClass(modalBodyClass, openedClasses.hasKey(modalBodyClass));
	          toggleTopWindowClass(true);
	        });
	        checkRemoveBackdrop();

	        //move focus to specified element if available, or else to body
	        if (elementToReceiveFocus && elementToReceiveFocus.focus) {
	          elementToReceiveFocus.focus();
	        } else {
	          body.focus();
	        }
	      }

	      // Add or remove "windowTopClass" from the top window in the stack
	      function toggleTopWindowClass(toggleSwitch) {
	        var modalWindow;

	        if (openedWindows.length() > 0) {
	          modalWindow = openedWindows.top().value;
	          modalWindow.modalDomEl.toggleClass(modalWindow.windowTopClass || '', toggleSwitch);
	        }
	      }

	      function checkRemoveBackdrop() {
	        //remove backdrop if no longer needed
	        if (backdropDomEl && backdropIndex() == -1) {
	          var backdropScopeRef = backdropScope;
	          removeAfterAnimate(backdropDomEl, backdropScope, function() {
	            backdropScopeRef = null;
	          });
	          backdropDomEl = undefined;
	          backdropScope = undefined;
	        }
	      }

	      function removeAfterAnimate(domEl, scope, done) {
	        var asyncDeferred;
	        var asyncPromise = null;
	        var setIsAsync = function() {
	          if (!asyncDeferred) {
	            asyncDeferred = $q.defer();
	            asyncPromise = asyncDeferred.promise;
	          }

	          return function asyncDone() {
	            asyncDeferred.resolve();
	          };
	        };
	        scope.$broadcast($modalStack.NOW_CLOSING_EVENT, setIsAsync);

	        // Note that it's intentional that asyncPromise might be null.
	        // That's when setIsAsync has not been called during the
	        // NOW_CLOSING_EVENT broadcast.
	        return $q.when(asyncPromise).then(afterAnimating);

	        function afterAnimating() {
	          if (afterAnimating.done) {
	            return;
	          }
	          afterAnimating.done = true;

	          if ($animateCss) {
	            $animateCss(domEl, {
	              event: 'leave'
	            }).start().then(function() {
	              domEl.remove();
	            });
	          } else {
	            $animate.leave(domEl);
	          }
	          scope.$destroy();
	          if (done) {
	            done();
	          }
	        }
	      }

	      $document.bind('keydown', function(evt) {
	        if (evt.isDefaultPrevented()) {
	          return evt;
	        }

	        var modal = openedWindows.top();
	        if (modal && modal.value.keyboard) {
	          switch (evt.which) {
	            case 27: {
	              evt.preventDefault();
	              $rootScope.$apply(function() {
	                $modalStack.dismiss(modal.key, 'escape key press');
	              });
	              break;
	            }
	            case 9: {
	              $modalStack.loadFocusElementList(modal);
	              var focusChanged = false;
	              if (evt.shiftKey) {
	                if ($modalStack.isFocusInFirstItem(evt)) {
	                  focusChanged = $modalStack.focusLastFocusableElement();
	                }
	              } else {
	                if ($modalStack.isFocusInLastItem(evt)) {
	                  focusChanged = $modalStack.focusFirstFocusableElement();
	                }
	              }

	              if (focusChanged) {
	                evt.preventDefault();
	                evt.stopPropagation();
	              }
	              break;
	            }
	          }
	        }
	      });

	      $modalStack.open = function(modalInstance, modal) {
	        var modalOpener = $document[0].activeElement,
	          modalBodyClass = modal.openedClass || OPENED_MODAL_CLASS;

	        toggleTopWindowClass(false);

	        openedWindows.add(modalInstance, {
	          deferred: modal.deferred,
	          renderDeferred: modal.renderDeferred,
	          modalScope: modal.scope,
	          backdrop: modal.backdrop,
	          keyboard: modal.keyboard,
	          openedClass: modal.openedClass,
	          windowTopClass: modal.windowTopClass
	        });

	        openedClasses.put(modalBodyClass, modalInstance);

	        var body = $document.find('body').eq(0),
	            currBackdropIndex = backdropIndex();

	        if (currBackdropIndex >= 0 && !backdropDomEl) {
	          backdropScope = $rootScope.$new(true);
	          backdropScope.index = currBackdropIndex;
	          var angularBackgroundDomEl = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');
	          angularBackgroundDomEl.attr('backdrop-class', modal.backdropClass);
	          if (modal.animation) {
	            angularBackgroundDomEl.attr('modal-animation', 'true');
	          }
	          backdropDomEl = $compile(angularBackgroundDomEl)(backdropScope);
	          body.append(backdropDomEl);
	        }

	        var angularDomEl = angular.element('<div uib-modal-window="modal-window"></div>');
	        angularDomEl.attr({
	          'template-url': modal.windowTemplateUrl,
	          'window-class': modal.windowClass,
	          'window-top-class': modal.windowTopClass,
	          'size': modal.size,
	          'index': openedWindows.length() - 1,
	          'animate': 'animate'
	        }).html(modal.content);
	        if (modal.animation) {
	          angularDomEl.attr('modal-animation', 'true');
	        }

	        var modalDomEl = $compile(angularDomEl)(modal.scope);
	        openedWindows.top().value.modalDomEl = modalDomEl;
	        openedWindows.top().value.modalOpener = modalOpener;
	        body.append(modalDomEl);
	        body.addClass(modalBodyClass);

	        $modalStack.clearFocusListCache();
	      };

	      function broadcastClosing(modalWindow, resultOrReason, closing) {
	        return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
	      }

	      $modalStack.close = function(modalInstance, result) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow && broadcastClosing(modalWindow, result, true)) {
	          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
	          modalWindow.value.deferred.resolve(result);
	          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
	          return true;
	        }
	        return !modalWindow;
	      };

	      $modalStack.dismiss = function(modalInstance, reason) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
	          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
	          modalWindow.value.deferred.reject(reason);
	          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
	          return true;
	        }
	        return !modalWindow;
	      };

	      $modalStack.dismissAll = function(reason) {
	        var topModal = this.getTop();
	        while (topModal && this.dismiss(topModal.key, reason)) {
	          topModal = this.getTop();
	        }
	      };

	      $modalStack.getTop = function() {
	        return openedWindows.top();
	      };

	      $modalStack.modalRendered = function(modalInstance) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow) {
	          modalWindow.value.renderDeferred.resolve();
	        }
	      };

	      $modalStack.focusFirstFocusableElement = function() {
	        if (focusableElementList.length > 0) {
	          focusableElementList[0].focus();
	          return true;
	        }
	        return false;
	      };
	      $modalStack.focusLastFocusableElement = function() {
	        if (focusableElementList.length > 0) {
	          focusableElementList[focusableElementList.length - 1].focus();
	          return true;
	        }
	        return false;
	      };

	      $modalStack.isFocusInFirstItem = function(evt) {
	        if (focusableElementList.length > 0) {
	          return (evt.target || evt.srcElement) == focusableElementList[0];
	        }
	        return false;
	      };

	      $modalStack.isFocusInLastItem = function(evt) {
	        if (focusableElementList.length > 0) {
	          return (evt.target || evt.srcElement) == focusableElementList[focusableElementList.length - 1];
	        }
	        return false;
	      };

	      $modalStack.clearFocusListCache = function() {
	        focusableElementList = [];
	        focusIndex = 0;
	      };

	      $modalStack.loadFocusElementList = function(modalWindow) {
	        if (focusableElementList === undefined || !focusableElementList.length) {
	          if (modalWindow) {
	            var modalDomE1 = modalWindow.value.modalDomEl;
	            if (modalDomE1 && modalDomE1.length) {
	              focusableElementList = modalDomE1[0].querySelectorAll(tababbleSelector);
	            }
	          }
	        }
	      };

	      return $modalStack;
	    }])

	  .provider('$uibModal', function() {
	    var $modalProvider = {
	      options: {
	        animation: true,
	        backdrop: true, //can also be false or 'static'
	        keyboard: true
	      },
	      $get: ['$injector', '$rootScope', '$q', '$templateRequest', '$controller', '$uibModalStack', '$modalSuppressWarning', '$log',
	        function ($injector, $rootScope, $q, $templateRequest, $controller, $modalStack, $modalSuppressWarning, $log) {
	          var $modal = {};

	          function getTemplatePromise(options) {
	            return options.template ? $q.when(options.template) :
	              $templateRequest(angular.isFunction(options.templateUrl) ? (options.templateUrl)() : options.templateUrl);
	          }

	          function getResolvePromises(resolves) {
	            var promisesArr = [];
	            angular.forEach(resolves, function(value) {
	              if (angular.isFunction(value) || angular.isArray(value)) {
	                promisesArr.push($q.when($injector.invoke(value)));
	              } else if (angular.isString(value)) {
	                promisesArr.push($q.when($injector.get(value)));
	              } else {
	                promisesArr.push($q.when(value));
	              }
	            });
	            return promisesArr;
	          }

	          var promiseChain = null;
	          $modal.getPromiseChain = function() {
	            return promiseChain;
	          };

	          $modal.open = function(modalOptions) {
	            var modalResultDeferred = $q.defer();
	            var modalOpenedDeferred = $q.defer();
	            var modalRenderDeferred = $q.defer();

	            //prepare an instance of a modal to be injected into controllers and returned to a caller
	            var modalInstance = {
	              result: modalResultDeferred.promise,
	              opened: modalOpenedDeferred.promise,
	              rendered: modalRenderDeferred.promise,
	              close: function (result) {
	                return $modalStack.close(modalInstance, result);
	              },
	              dismiss: function (reason) {
	                return $modalStack.dismiss(modalInstance, reason);
	              }
	            };

	            //merge and clean up options
	            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
	            modalOptions.resolve = modalOptions.resolve || {};

	            //verify options
	            if (!modalOptions.template && !modalOptions.templateUrl) {
	              throw new Error('One of template or templateUrl options is required.');
	            }

	            var templateAndResolvePromise =
	              $q.all([getTemplatePromise(modalOptions)].concat(getResolvePromises(modalOptions.resolve)));

	            function resolveWithTemplate() {
	              return templateAndResolvePromise;
	            }

	            // Wait for the resolution of the existing promise chain.
	            // Then switch to our own combined promise dependency (regardless of how the previous modal fared).
	            // Then add to $modalStack and resolve opened.
	            // Finally clean up the chain variable if no subsequent modal has overwritten it.
	            var samePromise;
	            samePromise = promiseChain = $q.all([promiseChain])
	              .then(resolveWithTemplate, resolveWithTemplate)
	              .then(function resolveSuccess(tplAndVars) {

	                var modalScope = (modalOptions.scope || $rootScope).$new();
	                modalScope.$close = modalInstance.close;
	                modalScope.$dismiss = modalInstance.dismiss;

	                modalScope.$on('$destroy', function() {
	                  if (!modalScope.$$uibDestructionScheduled) {
	                    modalScope.$dismiss('$uibUnscheduledDestruction');
	                  }
	                });

	                var ctrlInstance, ctrlLocals = {};
	                var resolveIter = 1;

	                //controllers
	                if (modalOptions.controller) {
	                  ctrlLocals.$scope = modalScope;
	                  ctrlLocals.$uibModalInstance = modalInstance;
	                  Object.defineProperty(ctrlLocals, '$modalInstance', {
	                    get: function() {
	                      if (!$modalSuppressWarning) {
	                        $log.warn('$modalInstance is now deprecated. Use $uibModalInstance instead.');
	                      }

	                      return modalInstance;
	                    }
	                  });
	                  angular.forEach(modalOptions.resolve, function(value, key) {
	                    ctrlLocals[key] = tplAndVars[resolveIter++];
	                  });

	                  ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
	                  if (modalOptions.controllerAs) {
	                    if (modalOptions.bindToController) {
	                      angular.extend(ctrlInstance, modalScope);
	                    }

	                    modalScope[modalOptions.controllerAs] = ctrlInstance;
	                  }
	                }

	                $modalStack.open(modalInstance, {
	                  scope: modalScope,
	                  deferred: modalResultDeferred,
	                  renderDeferred: modalRenderDeferred,
	                  content: tplAndVars[0],
	                  animation: modalOptions.animation,
	                  backdrop: modalOptions.backdrop,
	                  keyboard: modalOptions.keyboard,
	                  backdropClass: modalOptions.backdropClass,
	                  windowTopClass: modalOptions.windowTopClass,
	                  windowClass: modalOptions.windowClass,
	                  windowTemplateUrl: modalOptions.windowTemplateUrl,
	                  size: modalOptions.size,
	                  openedClass: modalOptions.openedClass
	                });
	                modalOpenedDeferred.resolve(true);

	            }, function resolveError(reason) {
	              modalOpenedDeferred.reject(reason);
	              modalResultDeferred.reject(reason);
	            })
	            .finally(function() {
	              if (promiseChain === samePromise) {
	                promiseChain = null;
	              }
	            });

	            return modalInstance;
	          };

	          return $modal;
	        }
	      ]
	    };

	    return $modalProvider;
	  });

	/* deprecated modal below */

	angular.module('ui.bootstrap.modal')

	  .value('$modalSuppressWarning', false)

	  /**
	   * A helper directive for the $modal service. It creates a backdrop element.
	   */
	  .directive('modalBackdrop', [
	    '$animate', '$injector', '$modalStack', '$log', '$modalSuppressWarning',
	    function($animate ,  $injector,   $modalStack, $log, $modalSuppressWarning) {
	      var $animateCss = null;

	      if ($injector.has('$animateCss')) {
	        $animateCss = $injector.get('$animateCss');
	      }

	      return {
	        replace: true,
	        templateUrl: 'template/modal/backdrop.html',
	        compile: function(tElement, tAttrs) {
	          tElement.addClass(tAttrs.backdropClass);
	          return linkFn;
	        }
	      };

	      function linkFn(scope, element, attrs) {
	        if (!$modalSuppressWarning) {
	          $log.warn('modal-backdrop is now deprecated. Use uib-modal-backdrop instead.');
	        }
	        element.addClass('modal-backdrop');

	        if (attrs.modalInClass) {
	          if ($animateCss) {
	            $animateCss(element, {
	              addClass: attrs.modalInClass
	            }).start();
	          } else {
	            $animate.addClass(element, attrs.modalInClass);
	          }

	          scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
	            var done = setIsAsync();
	            if ($animateCss) {
	              $animateCss(element, {
	                removeClass: attrs.modalInClass
	              }).start().then(done);
	            } else {
	              $animate.removeClass(element, attrs.modalInClass).then(done);
	            }
	          });
	        }
	      }
	    }])

	  .directive('modalWindow', [
	    '$modalStack', '$q', '$animate', '$injector', '$log', '$modalSuppressWarning',
	    function($modalStack ,  $q ,  $animate,   $injector, $log, $modalSuppressWarning) {
	      var $animateCss = null;

	      if ($injector.has('$animateCss')) {
	        $animateCss = $injector.get('$animateCss');
	      }

	      return {
	        scope: {
	          index: '@'
	        },
	        replace: true,
	        transclude: true,
	        templateUrl: function(tElement, tAttrs) {
	          return tAttrs.templateUrl || 'template/modal/window.html';
	        },
	        link: function(scope, element, attrs) {
	          if (!$modalSuppressWarning) {
	            $log.warn('modal-window is now deprecated. Use uib-modal-window instead.');
	          }
	          element.addClass(attrs.windowClass || '');
	          element.addClass(attrs.windowTopClass || '');
	          scope.size = attrs.size;

	          scope.close = function(evt) {
	            var modal = $modalStack.getTop();
	            if (modal && modal.value.backdrop && modal.value.backdrop !== 'static' && (evt.target === evt.currentTarget)) {
	              evt.preventDefault();
	              evt.stopPropagation();
	              $modalStack.dismiss(modal.key, 'backdrop click');
	            }
	          };

	          // moved from template to fix issue #2280
	          element.on('click', scope.close);

	          // This property is only added to the scope for the purpose of detecting when this directive is rendered.
	          // We can detect that by using this property in the template associated with this directive and then use
	          // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
	          scope.$isRendered = true;

	          // Deferred object that will be resolved when this modal is render.
	          var modalRenderDeferObj = $q.defer();
	          // Observe function will be called on next digest cycle after compilation, ensuring that the DOM is ready.
	          // In order to use this way of finding whether DOM is ready, we need to observe a scope property used in modal's template.
	          attrs.$observe('modalRender', function(value) {
	            if (value == 'true') {
	              modalRenderDeferObj.resolve();
	            }
	          });

	          modalRenderDeferObj.promise.then(function() {
	            var animationPromise = null;

	            if (attrs.modalInClass) {
	              if ($animateCss) {
	                animationPromise = $animateCss(element, {
	                  addClass: attrs.modalInClass
	                }).start();
	              } else {
	                animationPromise = $animate.addClass(element, attrs.modalInClass);
	              }

	              scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
	                var done = setIsAsync();
	                if ($animateCss) {
	                  $animateCss(element, {
	                    removeClass: attrs.modalInClass
	                  }).start().then(done);
	                } else {
	                  $animate.removeClass(element, attrs.modalInClass).then(done);
	                }
	              });
	            }


	            $q.when(animationPromise).then(function() {
	              var inputWithAutofocus = element[0].querySelector('[autofocus]');
	              /**
	               * Auto-focusing of a freshly-opened modal element causes any child elements
	               * with the autofocus attribute to lose focus. This is an issue on touch
	               * based devices which will show and then hide the onscreen keyboard.
	               * Attempts to refocus the autofocus element via JavaScript will not reopen
	               * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
	               * the modal element if the modal does not contain an autofocus element.
	               */
	              if (inputWithAutofocus) {
	                inputWithAutofocus.focus();
	              } else {
	                element[0].focus();
	              }
	            });

	            // Notify {@link $modalStack} that modal is rendered.
	            var modal = $modalStack.getTop();
	            if (modal) {
	              $modalStack.modalRendered(modal.key);
	            }
	          });
	        }
	      };
	    }])

	  .directive('modalAnimationClass', [
	    '$log', '$modalSuppressWarning',
	    function ($log, $modalSuppressWarning) {
	      return {
	        compile: function(tElement, tAttrs) {
	          if (!$modalSuppressWarning) {
	            $log.warn('modal-animation-class is now deprecated. Use uib-modal-animation-class instead.');
	          }
	          if (tAttrs.modalAnimation) {
	            tElement.addClass(tAttrs.modalAnimationClass);
	          }
	        }
	      };
	    }])

	  .directive('modalTransclude', [
	    '$log', '$modalSuppressWarning',
	    function ($log, $modalSuppressWarning) {
	    return {
	      link: function($scope, $element, $attrs, controller, $transclude) {
	        if (!$modalSuppressWarning) {
	          $log.warn('modal-transclude is now deprecated. Use uib-modal-transclude instead.');
	        }
	        $transclude($scope.$parent, function(clone) {
	          $element.empty();
	          $element.append(clone);
	        });
	      }
	    };
	  }])

	  .service('$modalStack', [
	    '$animate', '$timeout', '$document', '$compile', '$rootScope',
	    '$q',
	    '$injector',
	    '$$multiMap',
	    '$$stackedMap',
	    '$uibModalStack',
	    '$log',
	    '$modalSuppressWarning',
	    function($animate ,  $timeout ,  $document ,  $compile ,  $rootScope ,
	             $q,
	             $injector,
	             $$multiMap,
	             $$stackedMap,
	             $uibModalStack,
	             $log,
	             $modalSuppressWarning) {
	      if (!$modalSuppressWarning) {
	        $log.warn('$modalStack is now deprecated. Use $uibModalStack instead.');
	      }

	      angular.extend(this, $uibModalStack);
	    }])

	  .provider('$modal', ['$uibModalProvider', function($uibModalProvider) {
	    angular.extend(this, $uibModalProvider);

	    this.$get = ['$injector', '$log', '$modalSuppressWarning',
	      function ($injector, $log, $modalSuppressWarning) {
	        if (!$modalSuppressWarning) {
	          $log.warn('$modal is now deprecated. Use $uibModal instead.');
	        }

	        return $injector.invoke($uibModalProvider.$get);
	      }];
	  }]);

	angular.module('ui.bootstrap.pagination', [])
	.controller('UibPaginationController', ['$scope', '$attrs', '$parse', function($scope, $attrs, $parse) {
	  var self = this,
	      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
	      setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;

	  this.init = function(ngModelCtrl_, config) {
	    ngModelCtrl = ngModelCtrl_;
	    this.config = config;

	    ngModelCtrl.$render = function() {
	      self.render();
	    };

	    if ($attrs.itemsPerPage) {
	      $scope.$parent.$watch($parse($attrs.itemsPerPage), function(value) {
	        self.itemsPerPage = parseInt(value, 10);
	        $scope.totalPages = self.calculateTotalPages();
	      });
	    } else {
	      this.itemsPerPage = config.itemsPerPage;
	    }

	    $scope.$watch('totalItems', function() {
	      $scope.totalPages = self.calculateTotalPages();
	    });

	    $scope.$watch('totalPages', function(value) {
	      setNumPages($scope.$parent, value); // Readonly variable

	      if ( $scope.page > value ) {
	        $scope.selectPage(value);
	      } else {
	        ngModelCtrl.$render();
	      }
	    });
	  };

	  this.calculateTotalPages = function() {
	    var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
	    return Math.max(totalPages || 0, 1);
	  };

	  this.render = function() {
	    $scope.page = parseInt(ngModelCtrl.$viewValue, 10) || 1;
	  };

	  $scope.selectPage = function(page, evt) {
	    if (evt) {
	      evt.preventDefault();
	    }

	    var clickAllowed = !$scope.ngDisabled || !evt;
	    if (clickAllowed && $scope.page !== page && page > 0 && page <= $scope.totalPages) {
	      if (evt && evt.target) {
	        evt.target.blur();
	      }
	      ngModelCtrl.$setViewValue(page);
	      ngModelCtrl.$render();
	    }
	  };

	  $scope.getText = function(key) {
	    return $scope[key + 'Text'] || self.config[key + 'Text'];
	  };

	  $scope.noPrevious = function() {
	    return $scope.page === 1;
	  };

	  $scope.noNext = function() {
	    return $scope.page === $scope.totalPages;
	  };
	}])

	.constant('uibPaginationConfig', {
	  itemsPerPage: 10,
	  boundaryLinks: false,
	  directionLinks: true,
	  firstText: 'First',
	  previousText: 'Previous',
	  nextText: 'Next',
	  lastText: 'Last',
	  rotate: true
	})

	.directive('uibPagination', ['$parse', 'uibPaginationConfig', function($parse, paginationConfig) {
	  return {
	    restrict: 'EA',
	    scope: {
	      totalItems: '=',
	      firstText: '@',
	      previousText: '@',
	      nextText: '@',
	      lastText: '@',
	      ngDisabled:'='
	    },
	    require: ['uibPagination', '?ngModel'],
	    controller: 'UibPaginationController',
	    controllerAs: 'pagination',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/pagination/pagination.html';
	    },
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      if (!ngModelCtrl) {
	         return; // do nothing if no ng-model
	      }

	      // Setup configuration parameters
	      var maxSize = angular.isDefined(attrs.maxSize) ? scope.$parent.$eval(attrs.maxSize) : paginationConfig.maxSize,
	          rotate = angular.isDefined(attrs.rotate) ? scope.$parent.$eval(attrs.rotate) : paginationConfig.rotate;
	      scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : paginationConfig.boundaryLinks;
	      scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : paginationConfig.directionLinks;

	      paginationCtrl.init(ngModelCtrl, paginationConfig);

	      if (attrs.maxSize) {
	        scope.$parent.$watch($parse(attrs.maxSize), function(value) {
	          maxSize = parseInt(value, 10);
	          paginationCtrl.render();
	        });
	      }

	      // Create page object used in template
	      function makePage(number, text, isActive) {
	        return {
	          number: number,
	          text: text,
	          active: isActive
	        };
	      }

	      function getPages(currentPage, totalPages) {
	        var pages = [];

	        // Default page limits
	        var startPage = 1, endPage = totalPages;
	        var isMaxSized = angular.isDefined(maxSize) && maxSize < totalPages;

	        // recompute if maxSize
	        if (isMaxSized) {
	          if (rotate) {
	            // Current page is displayed in the middle of the visible ones
	            startPage = Math.max(currentPage - Math.floor(maxSize/2), 1);
	            endPage   = startPage + maxSize - 1;

	            // Adjust if limit is exceeded
	            if (endPage > totalPages) {
	              endPage   = totalPages;
	              startPage = endPage - maxSize + 1;
	            }
	          } else {
	            // Visible pages are paginated with maxSize
	            startPage = ((Math.ceil(currentPage / maxSize) - 1) * maxSize) + 1;

	            // Adjust last page if limit is exceeded
	            endPage = Math.min(startPage + maxSize - 1, totalPages);
	          }
	        }

	        // Add page number links
	        for (var number = startPage; number <= endPage; number++) {
	          var page = makePage(number, number, number === currentPage);
	          pages.push(page);
	        }

	        // Add links to move between page sets
	        if (isMaxSized && ! rotate) {
	          if (startPage > 1) {
	            var previousPageSet = makePage(startPage - 1, '...', false);
	            pages.unshift(previousPageSet);
	          }

	          if (endPage < totalPages) {
	            var nextPageSet = makePage(endPage + 1, '...', false);
	            pages.push(nextPageSet);
	          }
	        }

	        return pages;
	      }

	      var originalRender = paginationCtrl.render;
	      paginationCtrl.render = function() {
	        originalRender();
	        if (scope.page > 0 && scope.page <= scope.totalPages) {
	          scope.pages = getPages(scope.page, scope.totalPages);
	        }
	      };
	    }
	  };
	}])

	.constant('uibPagerConfig', {
	  itemsPerPage: 10,
	  previousText: '« Previous',
	  nextText: 'Next »',
	  align: true
	})

	.directive('uibPager', ['uibPagerConfig', function(pagerConfig) {
	  return {
	    restrict: 'EA',
	    scope: {
	      totalItems: '=',
	      previousText: '@',
	      nextText: '@',
	      ngDisabled: '='
	    },
	    require: ['uibPager', '?ngModel'],
	    controller: 'UibPaginationController',
	    controllerAs: 'pagination',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/pagination/pager.html';
	    },
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      if (!ngModelCtrl) {
	         return; // do nothing if no ng-model
	      }

	      scope.align = angular.isDefined(attrs.align) ? scope.$parent.$eval(attrs.align) : pagerConfig.align;
	      paginationCtrl.init(ngModelCtrl, pagerConfig);
	    }
	  };
	}]);

	/* Deprecated Pagination Below */

	angular.module('ui.bootstrap.pagination')
	.value('$paginationSuppressWarning', false)
	.controller('PaginationController', ['$scope', '$attrs', '$parse', '$log', '$paginationSuppressWarning', function($scope, $attrs, $parse, $log, $paginationSuppressWarning) {
	  if (!$paginationSuppressWarning) {
	    $log.warn('PaginationController is now deprecated. Use UibPaginationController instead.');
	  }

	  var self = this,
	    ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
	    setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;

	  this.init = function(ngModelCtrl_, config) {
	    ngModelCtrl = ngModelCtrl_;
	    this.config = config;

	    ngModelCtrl.$render = function() {
	      self.render();
	    };

	    if ($attrs.itemsPerPage) {
	      $scope.$parent.$watch($parse($attrs.itemsPerPage), function(value) {
	        self.itemsPerPage = parseInt(value, 10);
	        $scope.totalPages = self.calculateTotalPages();
	      });
	    } else {
	      this.itemsPerPage = config.itemsPerPage;
	    }

	    $scope.$watch('totalItems', function() {
	      $scope.totalPages = self.calculateTotalPages();
	    });

	    $scope.$watch('totalPages', function(value) {
	      setNumPages($scope.$parent, value); // Readonly variable

	      if ( $scope.page > value ) {
	        $scope.selectPage(value);
	      } else {
	        ngModelCtrl.$render();
	      }
	    });
	  };

	  this.calculateTotalPages = function() {
	    var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
	    return Math.max(totalPages || 0, 1);
	  };

	  this.render = function() {
	    $scope.page = parseInt(ngModelCtrl.$viewValue, 10) || 1;
	  };

	  $scope.selectPage = function(page, evt) {
	    if (evt) {
	      evt.preventDefault();
	    }

	    var clickAllowed = !$scope.ngDisabled || !evt;
	    if (clickAllowed && $scope.page !== page && page > 0 && page <= $scope.totalPages) {
	      if (evt && evt.target) {
	        evt.target.blur();
	      }
	      ngModelCtrl.$setViewValue(page);
	      ngModelCtrl.$render();
	    }
	  };

	  $scope.getText = function(key) {
	    return $scope[key + 'Text'] || self.config[key + 'Text'];
	  };

	  $scope.noPrevious = function() {
	    return $scope.page === 1;
	  };

	  $scope.noNext = function() {
	    return $scope.page === $scope.totalPages;
	  };
	}])
	.directive('pagination', ['$parse', 'uibPaginationConfig', '$log', '$paginationSuppressWarning', function($parse, paginationConfig, $log, $paginationSuppressWarning) {
	  return {
	    restrict: 'EA',
	    scope: {
	      totalItems: '=',
	      firstText: '@',
	      previousText: '@',
	      nextText: '@',
	      lastText: '@',
	      ngDisabled:'='
	    },
	    require: ['pagination', '?ngModel'],
	    controller: 'PaginationController',
	    controllerAs: 'pagination',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/pagination/pagination.html';
	    },
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      if (!$paginationSuppressWarning) {
	        $log.warn('pagination is now deprecated. Use uib-pagination instead.');
	      }
	      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      if (!ngModelCtrl) {
	         return; // do nothing if no ng-model
	      }

	      // Setup configuration parameters
	      var maxSize = angular.isDefined(attrs.maxSize) ? scope.$parent.$eval(attrs.maxSize) : paginationConfig.maxSize,
	          rotate = angular.isDefined(attrs.rotate) ? scope.$parent.$eval(attrs.rotate) : paginationConfig.rotate;
	      scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : paginationConfig.boundaryLinks;
	      scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : paginationConfig.directionLinks;

	      paginationCtrl.init(ngModelCtrl, paginationConfig);

	      if (attrs.maxSize) {
	        scope.$parent.$watch($parse(attrs.maxSize), function(value) {
	          maxSize = parseInt(value, 10);
	          paginationCtrl.render();
	        });
	      }

	      // Create page object used in template
	      function makePage(number, text, isActive) {
	        return {
	          number: number,
	          text: text,
	          active: isActive
	        };
	      }

	      function getPages(currentPage, totalPages) {
	        var pages = [];

	        // Default page limits
	        var startPage = 1, endPage = totalPages;
	        var isMaxSized = angular.isDefined(maxSize) && maxSize < totalPages;

	        // recompute if maxSize
	        if (isMaxSized) {
	          if (rotate) {
	            // Current page is displayed in the middle of the visible ones
	            startPage = Math.max(currentPage - Math.floor(maxSize/2), 1);
	            endPage   = startPage + maxSize - 1;

	            // Adjust if limit is exceeded
	            if (endPage > totalPages) {
	              endPage   = totalPages;
	              startPage = endPage - maxSize + 1;
	            }
	          } else {
	            // Visible pages are paginated with maxSize
	            startPage = ((Math.ceil(currentPage / maxSize) - 1) * maxSize) + 1;

	            // Adjust last page if limit is exceeded
	            endPage = Math.min(startPage + maxSize - 1, totalPages);
	          }
	        }

	        // Add page number links
	        for (var number = startPage; number <= endPage; number++) {
	          var page = makePage(number, number, number === currentPage);
	          pages.push(page);
	        }

	        // Add links to move between page sets
	        if (isMaxSized && ! rotate) {
	          if (startPage > 1) {
	            var previousPageSet = makePage(startPage - 1, '...', false);
	            pages.unshift(previousPageSet);
	          }

	          if (endPage < totalPages) {
	            var nextPageSet = makePage(endPage + 1, '...', false);
	            pages.push(nextPageSet);
	          }
	        }

	        return pages;
	      }

	      var originalRender = paginationCtrl.render;
	      paginationCtrl.render = function() {
	        originalRender();
	        if (scope.page > 0 && scope.page <= scope.totalPages) {
	          scope.pages = getPages(scope.page, scope.totalPages);
	        }
	      };
	    }
	  };
	}])

	.directive('pager', ['uibPagerConfig', '$log', '$paginationSuppressWarning', function(pagerConfig, $log, $paginationSuppressWarning) {
	  return {
	    restrict: 'EA',
	    scope: {
	      totalItems: '=',
	      previousText: '@',
	      nextText: '@',
	      ngDisabled: '='
	    },
	    require: ['pager', '?ngModel'],
	    controller: 'PaginationController',
	    controllerAs: 'pagination',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/pagination/pager.html';
	    },
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      if (!$paginationSuppressWarning) {
	        $log.warn('pager is now deprecated. Use uib-pager instead.');
	      }
	      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      if (!ngModelCtrl) {
	         return; // do nothing if no ng-model
	      }

	      scope.align = angular.isDefined(attrs.align) ? scope.$parent.$eval(attrs.align) : pagerConfig.align;
	      paginationCtrl.init(ngModelCtrl, pagerConfig);
	    }
	  };
	}]);

	/**
	 * The following features are still outstanding: animation as a
	 * function, placement as a function, inside, support for more triggers than
	 * just mouse enter/leave, html tooltips, and selector delegation.
	 */
	angular.module('ui.bootstrap.tooltip', ['ui.bootstrap.position', 'ui.bootstrap.stackedMap'])

	/**
	 * The $tooltip service creates tooltip- and popover-like directives as well as
	 * houses global options for them.
	 */
	.provider('$uibTooltip', function() {
	  // The default options tooltip and popover.
	  var defaultOptions = {
	    placement: 'top',
	    animation: true,
	    popupDelay: 0,
	    popupCloseDelay: 0,
	    useContentExp: false
	  };

	  // Default hide triggers for each show trigger
	  var triggerMap = {
	    'mouseenter': 'mouseleave',
	    'click': 'click',
	    'focus': 'blur',
	    'none': ''
	  };

	  // The options specified to the provider globally.
	  var globalOptions = {};

	  /**
	   * `options({})` allows global configuration of all tooltips in the
	   * application.
	   *
	   *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
	   *     // place tooltips left instead of top by default
	   *     $tooltipProvider.options( { placement: 'left' } );
	   *   });
	   */
		this.options = function(value) {
			angular.extend(globalOptions, value);
		};

	  /**
	   * This allows you to extend the set of trigger mappings available. E.g.:
	   *
	   *   $tooltipProvider.setTriggers( 'openTrigger': 'closeTrigger' );
	   */
	  this.setTriggers = function setTriggers(triggers) {
	    angular.extend(triggerMap, triggers);
	  };

	  /**
	   * This is a helper function for translating camel-case to snake-case.
	   */
	  function snake_case(name) {
	    var regexp = /[A-Z]/g;
	    var separator = '-';
	    return name.replace(regexp, function(letter, pos) {
	      return (pos ? separator : '') + letter.toLowerCase();
	    });
	  }

	  /**
	   * Returns the actual instance of the $tooltip service.
	   * TODO support multiple triggers
	   */
	  this.$get = ['$window', '$compile', '$timeout', '$document', '$uibPosition', '$interpolate', '$rootScope', '$parse', '$$stackedMap', function($window, $compile, $timeout, $document, $position, $interpolate, $rootScope, $parse, $$stackedMap) {
	    var openedTooltips = $$stackedMap.createNew();
	    $document.on('keypress', function(e) {
	      if (e.which === 27) {
	        var last = openedTooltips.top();
	        if (last) {
	          last.value.close();
	          openedTooltips.removeTop();
	          last = null;
	        }
	      }
	    });

	    return function $tooltip(ttType, prefix, defaultTriggerShow, options) {
	      options = angular.extend({}, defaultOptions, globalOptions, options);

	      /**
	       * Returns an object of show and hide triggers.
	       *
	       * If a trigger is supplied,
	       * it is used to show the tooltip; otherwise, it will use the `trigger`
	       * option passed to the `$tooltipProvider.options` method; else it will
	       * default to the trigger supplied to this directive factory.
	       *
	       * The hide trigger is based on the show trigger. If the `trigger` option
	       * was passed to the `$tooltipProvider.options` method, it will use the
	       * mapped trigger from `triggerMap` or the passed trigger if the map is
	       * undefined; otherwise, it uses the `triggerMap` value of the show
	       * trigger; else it will just use the show trigger.
	       */
	      function getTriggers(trigger) {
	        var show = (trigger || options.trigger || defaultTriggerShow).split(' ');
	        var hide = show.map(function(trigger) {
	          return triggerMap[trigger] || trigger;
	        });
	        return {
	          show: show,
	          hide: hide
	        };
	      }

	      var directiveName = snake_case(ttType);

	      var startSym = $interpolate.startSymbol();
	      var endSym = $interpolate.endSymbol();
	      var template =
	        '<div '+ directiveName + '-popup '+
	          'title="' + startSym + 'title' + endSym + '" '+
	          (options.useContentExp ?
	            'content-exp="contentExp()" ' :
	            'content="' + startSym + 'content' + endSym + '" ') +
	          'placement="' + startSym + 'placement' + endSym + '" '+
	          'popup-class="' + startSym + 'popupClass' + endSym + '" '+
	          'animation="animation" ' +
	          'is-open="isOpen"' +
	          'origin-scope="origScope" ' +
	          'style="visibility: hidden; display: block; top: -9999px; left: -9999px;"' +
	          '>' +
	        '</div>';

	      return {
	        compile: function(tElem, tAttrs) {
	          var tooltipLinker = $compile(template);

	          return function link(scope, element, attrs, tooltipCtrl) {
	            var tooltip;
	            var tooltipLinkedScope;
	            var transitionTimeout;
	            var showTimeout;
	            var hideTimeout;
	            var positionTimeout;
	            var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
	            var triggers = getTriggers(undefined);
	            var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
	            var ttScope = scope.$new(true);
	            var repositionScheduled = false;
	            var isOpenParse = angular.isDefined(attrs[prefix + 'IsOpen']) ? $parse(attrs[prefix + 'IsOpen']) : false;
	            var contentParse = options.useContentExp ? $parse(attrs[ttType]) : false;
	            var observers = [];

	            var positionTooltip = function() {
	              // check if tooltip exists and is not empty
	              if (!tooltip || !tooltip.html()) { return; }

	              if (!positionTimeout) {
	                positionTimeout = $timeout(function() {
	                  // Reset the positioning.
	                  tooltip.css({ top: 0, left: 0 });

	                  // Now set the calculated positioning.
	                  var ttCss = $position.positionElements(element, tooltip, ttScope.placement, appendToBody);
	                  ttCss.top += 'px';
	                  ttCss.left += 'px';
	                  ttCss.visibility = 'visible';
	                  tooltip.css(ttCss);

	                  positionTimeout = null;
	                }, 0, false);
	              }
	            };

	            // Set up the correct scope to allow transclusion later
	            ttScope.origScope = scope;

	            // By default, the tooltip is not open.
	            // TODO add ability to start tooltip opened
	            ttScope.isOpen = false;
	            openedTooltips.add(ttScope, {
	              close: hide
	            });

	            function toggleTooltipBind() {
	              if (!ttScope.isOpen) {
	                showTooltipBind();
	              } else {
	                hideTooltipBind();
	              }
	            }

	            // Show the tooltip with delay if specified, otherwise show it immediately
	            function showTooltipBind() {
	              if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
	                return;
	              }

	              cancelHide();
	              prepareTooltip();

	              if (ttScope.popupDelay) {
	                // Do nothing if the tooltip was already scheduled to pop-up.
	                // This happens if show is triggered multiple times before any hide is triggered.
	                if (!showTimeout) {
	                  showTimeout = $timeout(show, ttScope.popupDelay, false);
	                }
	              } else {
	                show();
	              }
	            }

	            function hideTooltipBind() {
	              cancelShow();

	              if (ttScope.popupCloseDelay) {
	                if (!hideTimeout) {
	                  hideTimeout = $timeout(hide, ttScope.popupCloseDelay, false);
	                }
	              } else {
	                hide();
	              }
	            }

	            // Show the tooltip popup element.
	            function show() {
	              cancelShow();
	              cancelHide();

	              // Don't show empty tooltips.
	              if (!ttScope.content) {
	                return angular.noop;
	              }

	              createTooltip();

	              // And show the tooltip.
	              ttScope.$evalAsync(function() {
	                ttScope.isOpen = true;
	                assignIsOpen(true);
	                positionTooltip();
	              });
	            }

	            function cancelShow() {
	              if (showTimeout) {
	                $timeout.cancel(showTimeout);
	                showTimeout = null;
	              }

	              if (positionTimeout) {
	                $timeout.cancel(positionTimeout);
	                positionTimeout = null;
	              }
	            }

	            // Hide the tooltip popup element.
	            function hide() {
	              cancelShow();
	              cancelHide();

	              if (!ttScope) {
	                return;
	              }

	              // First things first: we don't show it anymore.
	              ttScope.$evalAsync(function() {
	                ttScope.isOpen = false;
	                assignIsOpen(false);
	                // And now we remove it from the DOM. However, if we have animation, we
	                // need to wait for it to expire beforehand.
	                // FIXME: this is a placeholder for a port of the transitions library.
	                // The fade transition in TWBS is 150ms.
	                if (ttScope.animation) {
	                  if (!transitionTimeout) {
	                    transitionTimeout = $timeout(removeTooltip, 150, false);
	                  }
	                } else {
	                  removeTooltip();
	                }
	              });
	            }

	            function cancelHide() {
	              if (hideTimeout) {
	                $timeout.cancel(hideTimeout);
	                hideTimeout = null;
	              }
	              if (transitionTimeout) {
	                $timeout.cancel(transitionTimeout);
	                transitionTimeout = null;
	              }
	            }

	            function createTooltip() {
	              // There can only be one tooltip element per directive shown at once.
	              if (tooltip) {
	                return;
	              }

	              tooltipLinkedScope = ttScope.$new();
	              tooltip = tooltipLinker(tooltipLinkedScope, function(tooltip) {
	                if (appendToBody) {
	                  $document.find('body').append(tooltip);
	                } else {
	                  element.after(tooltip);
	                }
	              });

	              prepObservers();
	            }

	            function removeTooltip() {
	              unregisterObservers();

	              transitionTimeout = null;
	              if (tooltip) {
	                tooltip.remove();
	                tooltip = null;
	              }
	              if (tooltipLinkedScope) {
	                tooltipLinkedScope.$destroy();
	                tooltipLinkedScope = null;
	              }
	            }

	            /**
	             * Set the inital scope values. Once
	             * the tooltip is created, the observers
	             * will be added to keep things in synch.
	             */
	            function prepareTooltip() {
	              ttScope.title = attrs[prefix + 'Title'];
	              if (contentParse) {
	                ttScope.content = contentParse(scope);
	              } else {
	                ttScope.content = attrs[ttType];
	              }

	              ttScope.popupClass = attrs[prefix + 'Class'];
	              ttScope.placement = angular.isDefined(attrs[prefix + 'Placement']) ? attrs[prefix + 'Placement'] : options.placement;

	              var delay = parseInt(attrs[prefix + 'PopupDelay'], 10);
	              var closeDelay = parseInt(attrs[prefix + 'PopupCloseDelay'], 10);
	              ttScope.popupDelay = !isNaN(delay) ? delay : options.popupDelay;
	              ttScope.popupCloseDelay = !isNaN(closeDelay) ? closeDelay : options.popupCloseDelay;
	            }

	            function assignIsOpen(isOpen) {
	              if (isOpenParse && angular.isFunction(isOpenParse.assign)) {
	                isOpenParse.assign(scope, isOpen);
	              }
	            }

	            ttScope.contentExp = function() {
	              return ttScope.content;
	            };

	            /**
	             * Observe the relevant attributes.
	             */
	            attrs.$observe('disabled', function(val) {
	              if (val) {
	                cancelShow();
	              }

	              if (val && ttScope.isOpen) {
	                hide();
	              }
	            });

	            if (isOpenParse) {
	              scope.$watch(isOpenParse, function(val) {
	                /*jshint -W018 */
	                if (ttScope && !val === ttScope.isOpen) {
	                  toggleTooltipBind();
	                }
	                /*jshint +W018 */
	              });
	            }

	            function prepObservers() {
	              observers.length = 0;

	              if (contentParse) {
	                observers.push(
	                  scope.$watch(contentParse, function(val) {
	                    ttScope.content = val;
	                    if (!val && ttScope.isOpen) {
	                      hide();
	                    }
	                  })
	                );

	                observers.push(
	                  tooltipLinkedScope.$watch(function() {
	                    if (!repositionScheduled) {
	                      repositionScheduled = true;
	                      tooltipLinkedScope.$$postDigest(function() {
	                        repositionScheduled = false;
	                        if (ttScope && ttScope.isOpen) {
	                          positionTooltip();
	                        }
	                      });
	                    }
	                  })
	                );
	              } else {
	                observers.push(
	                  attrs.$observe(ttType, function(val) {
	                    ttScope.content = val;
	                    if (!val && ttScope.isOpen) {
	                      hide();
	                    } else {
	                      positionTooltip();
	                    }
	                  })
	                );
	              }

	              observers.push(
	                attrs.$observe(prefix + 'Title', function(val) {
	                  ttScope.title = val;
	                  if (ttScope.isOpen) {
	                    positionTooltip();
	                  }
	                })
	              );

	              observers.push(
	                attrs.$observe(prefix + 'Placement', function(val) {
	                  ttScope.placement = val ? val : options.placement;
	                  if (ttScope.isOpen) {
	                    positionTooltip();
	                  }
	                })
	              );
	            }

	            function unregisterObservers() {
	              if (observers.length) {
	                angular.forEach(observers, function(observer) {
	                  observer();
	                });
	                observers.length = 0;
	              }
	            }

	            var unregisterTriggers = function() {
	              triggers.show.forEach(function(trigger) {
	                element.unbind(trigger, showTooltipBind);
	              });
	              triggers.hide.forEach(function(trigger) {
	                trigger.split(' ').forEach(function(hideTrigger) {
	                  element[0].removeEventListener(hideTrigger, hideTooltipBind);
	                });
	              });
	            };

	            function prepTriggers() {
	              var val = attrs[prefix + 'Trigger'];
	              unregisterTriggers();

	              triggers = getTriggers(val);

	              if (triggers.show !== 'none') {
	                triggers.show.forEach(function(trigger, idx) {
	                  // Using raw addEventListener due to jqLite/jQuery bug - #4060
	                  if (trigger === triggers.hide[idx]) {
	                    element[0].addEventListener(trigger, toggleTooltipBind);
	                  } else if (trigger) {
	                    element[0].addEventListener(trigger, showTooltipBind);
	                    triggers.hide[idx].split(' ').forEach(function(trigger) {
	                      element[0].addEventListener(trigger, hideTooltipBind);
	                    });
	                  }

	                  element.on('keypress', function(e) {
	                    if (e.which === 27) {
	                      hideTooltipBind();
	                    }
	                  });
	                });
	              }
	            }

	            prepTriggers();

	            var animation = scope.$eval(attrs[prefix + 'Animation']);
	            ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;

	            var appendToBodyVal = scope.$eval(attrs[prefix + 'AppendToBody']);
	            appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;

	            // if a tooltip is attached to <body> we need to remove it on
	            // location change as its parent scope will probably not be destroyed
	            // by the change.
	            if (appendToBody) {
	              scope.$on('$locationChangeSuccess', function closeTooltipOnLocationChangeSuccess() {
	                if (ttScope.isOpen) {
	                  hide();
	                }
	              });
	            }

	            // Make sure tooltip is destroyed and removed.
	            scope.$on('$destroy', function onDestroyTooltip() {
	              cancelShow();
	              cancelHide();
	              unregisterTriggers();
	              removeTooltip();
	              openedTooltips.remove(ttScope);
	              ttScope = null;
	            });
	          };
	        }
	      };
	    };
	  }];
	})

	// This is mostly ngInclude code but with a custom scope
	.directive('uibTooltipTemplateTransclude', [
	         '$animate', '$sce', '$compile', '$templateRequest',
	function ($animate ,  $sce ,  $compile ,  $templateRequest) {
	  return {
	    link: function(scope, elem, attrs) {
	      var origScope = scope.$eval(attrs.tooltipTemplateTranscludeScope);

	      var changeCounter = 0,
	        currentScope,
	        previousElement,
	        currentElement;

	      var cleanupLastIncludeContent = function() {
	        if (previousElement) {
	          previousElement.remove();
	          previousElement = null;
	        }

	        if (currentScope) {
	          currentScope.$destroy();
	          currentScope = null;
	        }

	        if (currentElement) {
	          $animate.leave(currentElement).then(function() {
	            previousElement = null;
	          });
	          previousElement = currentElement;
	          currentElement = null;
	        }
	      };

	      scope.$watch($sce.parseAsResourceUrl(attrs.uibTooltipTemplateTransclude), function(src) {
	        var thisChangeId = ++changeCounter;

	        if (src) {
	          //set the 2nd param to true to ignore the template request error so that the inner
	          //contents and scope can be cleaned up.
	          $templateRequest(src, true).then(function(response) {
	            if (thisChangeId !== changeCounter) { return; }
	            var newScope = origScope.$new();
	            var template = response;

	            var clone = $compile(template)(newScope, function(clone) {
	              cleanupLastIncludeContent();
	              $animate.enter(clone, elem);
	            });

	            currentScope = newScope;
	            currentElement = clone;

	            currentScope.$emit('$includeContentLoaded', src);
	          }, function() {
	            if (thisChangeId === changeCounter) {
	              cleanupLastIncludeContent();
	              scope.$emit('$includeContentError', src);
	            }
	          });
	          scope.$emit('$includeContentRequested', src);
	        } else {
	          cleanupLastIncludeContent();
	        }
	      });

	      scope.$on('$destroy', cleanupLastIncludeContent);
	    }
	  };
	}])

	/**
	 * Note that it's intentional that these classes are *not* applied through $animate.
	 * They must not be animated as they're expected to be present on the tooltip on
	 * initialization.
	 */
	.directive('uibTooltipClasses', function() {
	  return {
	    restrict: 'A',
	    link: function(scope, element, attrs) {
	      if (scope.placement) {
	        element.addClass(scope.placement);
	      }

	      if (scope.popupClass) {
	        element.addClass(scope.popupClass);
	      }

	      if (scope.animation()) {
	        element.addClass(attrs.tooltipAnimationClass);
	      }
	    }
	  };
	})

	.directive('uibTooltipPopup', function() {
	  return {
	    replace: true,
	    scope: { content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/tooltip/tooltip-popup.html',
	    link: function(scope, element) {
	      element.addClass('tooltip');
	    }
	  };
	})

	.directive('uibTooltip', [ '$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibTooltip', 'tooltip', 'mouseenter');
	}])

	.directive('uibTooltipTemplatePopup', function() {
	  return {
	    replace: true,
	    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
	      originScope: '&' },
	    templateUrl: 'template/tooltip/tooltip-template-popup.html',
	    link: function(scope, element) {
	      element.addClass('tooltip');
	    }
	  };
	})

	.directive('uibTooltipTemplate', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibTooltipTemplate', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}])

	.directive('uibTooltipHtmlPopup', function() {
	  return {
	    replace: true,
	    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/tooltip/tooltip-html-popup.html',
	    link: function(scope, element) {
	      element.addClass('tooltip');
	    }
	  };
	})

	.directive('uibTooltipHtml', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibTooltipHtml', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}]);

	/* Deprecated tooltip below */

	angular.module('ui.bootstrap.tooltip')

	.value('$tooltipSuppressWarning', false)

	.provider('$tooltip', ['$uibTooltipProvider', function($uibTooltipProvider) {
	  angular.extend(this, $uibTooltipProvider);

	  this.$get = ['$log', '$tooltipSuppressWarning', '$injector', function($log, $tooltipSuppressWarning, $injector) {
	    if (!$tooltipSuppressWarning) {
	      $log.warn('$tooltip is now deprecated. Use $uibTooltip instead.');
	    }

	    return $injector.invoke($uibTooltipProvider.$get);
	  }];
	}])

	// This is mostly ngInclude code but with a custom scope
	.directive('tooltipTemplateTransclude', [
	         '$animate', '$sce', '$compile', '$templateRequest', '$log', '$tooltipSuppressWarning',
	function ($animate ,  $sce ,  $compile ,  $templateRequest,   $log,   $tooltipSuppressWarning) {
	  return {
	    link: function(scope, elem, attrs) {
	      if (!$tooltipSuppressWarning) {
	        $log.warn('tooltip-template-transclude is now deprecated. Use uib-tooltip-template-transclude instead.');
	      }

	      var origScope = scope.$eval(attrs.tooltipTemplateTranscludeScope);

	      var changeCounter = 0,
	        currentScope,
	        previousElement,
	        currentElement;

	      var cleanupLastIncludeContent = function() {
	        if (previousElement) {
	          previousElement.remove();
	          previousElement = null;
	        }
	        if (currentScope) {
	          currentScope.$destroy();
	          currentScope = null;
	        }
	        if (currentElement) {
	          $animate.leave(currentElement).then(function() {
	            previousElement = null;
	          });
	          previousElement = currentElement;
	          currentElement = null;
	        }
	      };

	      scope.$watch($sce.parseAsResourceUrl(attrs.tooltipTemplateTransclude), function(src) {
	        var thisChangeId = ++changeCounter;

	        if (src) {
	          //set the 2nd param to true to ignore the template request error so that the inner
	          //contents and scope can be cleaned up.
	          $templateRequest(src, true).then(function(response) {
	            if (thisChangeId !== changeCounter) { return; }
	            var newScope = origScope.$new();
	            var template = response;

	            var clone = $compile(template)(newScope, function(clone) {
	              cleanupLastIncludeContent();
	              $animate.enter(clone, elem);
	            });

	            currentScope = newScope;
	            currentElement = clone;

	            currentScope.$emit('$includeContentLoaded', src);
	          }, function() {
	            if (thisChangeId === changeCounter) {
	              cleanupLastIncludeContent();
	              scope.$emit('$includeContentError', src);
	            }
	          });
	          scope.$emit('$includeContentRequested', src);
	        } else {
	          cleanupLastIncludeContent();
	        }
	      });

	      scope.$on('$destroy', cleanupLastIncludeContent);
	    }
	  };
	}])

	.directive('tooltipClasses', ['$log', '$tooltipSuppressWarning', function($log, $tooltipSuppressWarning) {
	  return {
	    restrict: 'A',
	    link: function(scope, element, attrs) {
	      if (!$tooltipSuppressWarning) {
	        $log.warn('tooltip-classes is now deprecated. Use uib-tooltip-classes instead.');
	      }

	      if (scope.placement) {
	        element.addClass(scope.placement);
	      }
	      if (scope.popupClass) {
	        element.addClass(scope.popupClass);
	      }
	      if (scope.animation()) {
	        element.addClass(attrs.tooltipAnimationClass);
	      }
	    }
	  };
	}])

	.directive('tooltipPopup', ['$log', '$tooltipSuppressWarning', function($log, $tooltipSuppressWarning) {
	  return {
	    replace: true,
	    scope: { content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/tooltip/tooltip-popup.html',
	    link: function(scope, element) {
	      if (!$tooltipSuppressWarning) {
	        $log.warn('tooltip-popup is now deprecated. Use uib-tooltip-popup instead.');
	      }

	      element.addClass('tooltip');
	    }
	  };
	}])

	.directive('tooltip', ['$tooltip', function($tooltip) {
	  return $tooltip('tooltip', 'tooltip', 'mouseenter');
	}])

	.directive('tooltipTemplatePopup', ['$log', '$tooltipSuppressWarning', function($log, $tooltipSuppressWarning) {
	  return {
	    replace: true,
	    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
	      originScope: '&' },
	    templateUrl: 'template/tooltip/tooltip-template-popup.html',
	    link: function(scope, element) {
	      if (!$tooltipSuppressWarning) {
	        $log.warn('tooltip-template-popup is now deprecated. Use uib-tooltip-template-popup instead.');
	      }

	      element.addClass('tooltip');
	    }
	  };
	}])

	.directive('tooltipTemplate', ['$tooltip', function($tooltip) {
	  return $tooltip('tooltipTemplate', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}])

	.directive('tooltipHtmlPopup', ['$log', '$tooltipSuppressWarning', function($log, $tooltipSuppressWarning) {
	  return {
	    replace: true,
	    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/tooltip/tooltip-html-popup.html',
	    link: function(scope, element) {
	      if (!$tooltipSuppressWarning) {
	        $log.warn('tooltip-html-popup is now deprecated. Use uib-tooltip-html-popup instead.');
	      }

	      element.addClass('tooltip');
	    }
	  };
	}])

	.directive('tooltipHtml', ['$tooltip', function($tooltip) {
	  return $tooltip('tooltipHtml', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}]);

	/**
	 * The following features are still outstanding: popup delay, animation as a
	 * function, placement as a function, inside, support for more triggers than
	 * just mouse enter/leave, and selector delegatation.
	 */
	angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip'])

	.directive('uibPopoverTemplatePopup', function() {
	  return {
	    replace: true,
	    scope: { title: '@', contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
	      originScope: '&' },
	    templateUrl: 'template/popover/popover-template.html',
	    link: function(scope, element) {
	      element.addClass('popover');
	    }
	  };
	})

	.directive('uibPopoverTemplate', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibPopoverTemplate', 'popover', 'click', {
	    useContentExp: true
	  });
	}])

	.directive('uibPopoverHtmlPopup', function() {
	  return {
	    replace: true,
	    scope: { contentExp: '&', title: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/popover/popover-html.html',
	    link: function(scope, element) {
	      element.addClass('popover');
	    }
	  };
	})

	.directive('uibPopoverHtml', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibPopoverHtml', 'popover', 'click', {
	    useContentExp: true
	  });
	}])

	.directive('uibPopoverPopup', function() {
	  return {
	    replace: true,
	    scope: { title: '@', content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/popover/popover.html',
	    link: function(scope, element) {
	      element.addClass('popover');
	    }
	  };
	})

	.directive('uibPopover', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibPopover', 'popover', 'click');
	}]);

	/* Deprecated popover below */

	angular.module('ui.bootstrap.popover')

	.value('$popoverSuppressWarning', false)

	.directive('popoverTemplatePopup', ['$log', '$popoverSuppressWarning', function($log, $popoverSuppressWarning) {
	  return {
	    replace: true,
	    scope: { title: '@', contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
	      originScope: '&' },
	    templateUrl: 'template/popover/popover-template.html',
	    link: function(scope, element) {
	      if (!$popoverSuppressWarning) {
	        $log.warn('popover-template-popup is now deprecated. Use uib-popover-template-popup instead.');
	      }

	      element.addClass('popover');
	    }
	  };
	}])

	.directive('popoverTemplate', ['$tooltip', function($tooltip) {
	  return $tooltip('popoverTemplate', 'popover', 'click', {
	    useContentExp: true
	  });
	}])

	.directive('popoverHtmlPopup', ['$log', '$popoverSuppressWarning', function($log, $popoverSuppressWarning) {
	  return {
	    replace: true,
	    scope: { contentExp: '&', title: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/popover/popover-html.html',
	    link: function(scope, element) {
	      if (!$popoverSuppressWarning) {
	        $log.warn('popover-html-popup is now deprecated. Use uib-popover-html-popup instead.');
	      }

	      element.addClass('popover');
	    }
	  };
	}])

	.directive('popoverHtml', ['$tooltip', function($tooltip) {
	  return $tooltip('popoverHtml', 'popover', 'click', {
	    useContentExp: true
	  });
	}])

	.directive('popoverPopup', ['$log', '$popoverSuppressWarning', function($log, $popoverSuppressWarning) {
	  return {
	    replace: true,
	    scope: { title: '@', content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/popover/popover.html',
	    link: function(scope, element) {
	      if (!$popoverSuppressWarning) {
	        $log.warn('popover-popup is now deprecated. Use uib-popover-popup instead.');
	      }

	      element.addClass('popover');
	    }
	  };
	}])

	.directive('popover', ['$tooltip', function($tooltip) {

	  return $tooltip('popover', 'popover', 'click');
	}]);

	angular.module('ui.bootstrap.progressbar', [])

	.constant('uibProgressConfig', {
	  animate: true,
	  max: 100
	})

	.controller('UibProgressController', ['$scope', '$attrs', 'uibProgressConfig', function($scope, $attrs, progressConfig) {
	  var self = this,
	      animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;

	  this.bars = [];
	  $scope.max = angular.isDefined($scope.max) ? $scope.max : progressConfig.max;

	  this.addBar = function(bar, element, attrs) {
	    if (!animate) {
	      element.css({'transition': 'none'});
	    }

	    this.bars.push(bar);

	    bar.max = $scope.max;
	    bar.title = attrs && angular.isDefined(attrs.title) ? attrs.title : 'progressbar';

	    bar.$watch('value', function(value) {
	      bar.recalculatePercentage();
	    });

	    bar.recalculatePercentage = function() {
	      var totalPercentage = self.bars.reduce(function(total, bar) {
	        bar.percent = +(100 * bar.value / bar.max).toFixed(2);
	        return total + bar.percent;
	      }, 0);

	      if (totalPercentage > 100) {
	        bar.percent -= totalPercentage - 100;
	      }
	    };

	    bar.$on('$destroy', function() {
	      element = null;
	      self.removeBar(bar);
	    });
	  };

	  this.removeBar = function(bar) {
	    this.bars.splice(this.bars.indexOf(bar), 1);
	    this.bars.forEach(function (bar) {
	      bar.recalculatePercentage();
	    });
	  };

	  $scope.$watch('max', function(max) {
	    self.bars.forEach(function(bar) {
	      bar.max = $scope.max;
	      bar.recalculatePercentage();
	    });
	  });
	}])

	.directive('uibProgress', function() {
	  return {
	    replace: true,
	    transclude: true,
	    controller: 'UibProgressController',
	    require: 'uibProgress',
	    scope: {
	      max: '=?'
	    },
	    templateUrl: 'template/progressbar/progress.html'
	  };
	})

	.directive('uibBar', function() {
	  return {
	    replace: true,
	    transclude: true,
	    require: '^uibProgress',
	    scope: {
	      value: '=',
	      type: '@'
	    },
	    templateUrl: 'template/progressbar/bar.html',
	    link: function(scope, element, attrs, progressCtrl) {
	      progressCtrl.addBar(scope, element, attrs);
	    }
	  };
	})

	.directive('uibProgressbar', function() {
	  return {
	    replace: true,
	    transclude: true,
	    controller: 'UibProgressController',
	    scope: {
	      value: '=',
	      max: '=?',
	      type: '@'
	    },
	    templateUrl: 'template/progressbar/progressbar.html',
	    link: function(scope, element, attrs, progressCtrl) {
	      progressCtrl.addBar(scope, angular.element(element.children()[0]), {title: attrs.title});
	    }
	  };
	});

	/* Deprecated progressbar below */

	angular.module('ui.bootstrap.progressbar')

	.value('$progressSuppressWarning', false)

	.controller('ProgressController', ['$scope', '$attrs', 'uibProgressConfig', '$log', '$progressSuppressWarning', function($scope, $attrs, progressConfig, $log, $progressSuppressWarning) {
	  if (!$progressSuppressWarning) {
	    $log.warn('ProgressController is now deprecated. Use UibProgressController instead.');
	  }

	  var self = this,
	    animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;

	  this.bars = [];
	  $scope.max = angular.isDefined($scope.max) ? $scope.max : progressConfig.max;

	  this.addBar = function(bar, element, attrs) {
	    if (!animate) {
	      element.css({'transition': 'none'});
	    }

	    this.bars.push(bar);

	    bar.max = $scope.max;
	    bar.title = attrs && angular.isDefined(attrs.title) ? attrs.title : 'progressbar';

	    bar.$watch('value', function(value) {
	      bar.recalculatePercentage();
	    });

	    bar.recalculatePercentage = function() {
	      bar.percent = +(100 * bar.value / bar.max).toFixed(2);

	      var totalPercentage = self.bars.reduce(function(total, bar) {
	        return total + bar.percent;
	      }, 0);

	      if (totalPercentage > 100) {
	        bar.percent -= totalPercentage - 100;
	      }
	    };

	    bar.$on('$destroy', function() {
	      element = null;
	      self.removeBar(bar);
	    });
	  };

	  this.removeBar = function(bar) {
	    this.bars.splice(this.bars.indexOf(bar), 1);
	  };

	  $scope.$watch('max', function(max) {
	    self.bars.forEach(function(bar) {
	      bar.max = $scope.max;
	      bar.recalculatePercentage();
	    });
	  });
	}])

	.directive('progress', ['$log', '$progressSuppressWarning', function($log, $progressSuppressWarning) {
	  return {
	    replace: true,
	    transclude: true,
	    controller: 'ProgressController',
	    require: 'progress',
	    scope: {
	      max: '=?',
	      title: '@?'
	    },
	    templateUrl: 'template/progressbar/progress.html',
	    link: function() {
	      if (!$progressSuppressWarning) {
	        $log.warn('progress is now deprecated. Use uib-progress instead.');
	      }
	    }
	  };
	}])

	.directive('bar', ['$log', '$progressSuppressWarning', function($log, $progressSuppressWarning) {
	  return {
	    replace: true,
	    transclude: true,
	    require: '^progress',
	    scope: {
	      value: '=',
	      type: '@'
	    },
	    templateUrl: 'template/progressbar/bar.html',
	    link: function(scope, element, attrs, progressCtrl) {
	      if (!$progressSuppressWarning) {
	        $log.warn('bar is now deprecated. Use uib-bar instead.');
	      }
	      progressCtrl.addBar(scope, element);
	    }
	  };
	}])

	.directive('progressbar', ['$log', '$progressSuppressWarning', function($log, $progressSuppressWarning) {
	  return {
	    replace: true,
	    transclude: true,
	    controller: 'ProgressController',
	    scope: {
	      value: '=',
	      max: '=?',
	      type: '@'
	    },
	    templateUrl: 'template/progressbar/progressbar.html',
	    link: function(scope, element, attrs, progressCtrl) {
	      if (!$progressSuppressWarning) {
	        $log.warn('progressbar is now deprecated. Use uib-progressbar instead.');
	      }
	      progressCtrl.addBar(scope, angular.element(element.children()[0]), {title: attrs.title});
	    }
	  };
	}]);

	angular.module('ui.bootstrap.rating', [])

	.constant('uibRatingConfig', {
	  max: 5,
	  stateOn: null,
	  stateOff: null,
	  titles : ['one', 'two', 'three', 'four', 'five']
	})

	.controller('UibRatingController', ['$scope', '$attrs', 'uibRatingConfig', function($scope, $attrs, ratingConfig) {
	  var ngModelCtrl  = { $setViewValue: angular.noop };

	  this.init = function(ngModelCtrl_) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelCtrl.$render = this.render;

	    ngModelCtrl.$formatters.push(function(value) {
	      if (angular.isNumber(value) && value << 0 !== value) {
	        value = Math.round(value);
	      }
	      return value;
	    });

	    this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
	    this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
	    var tmpTitles = angular.isDefined($attrs.titles)  ? $scope.$parent.$eval($attrs.titles) : ratingConfig.titles ;
	    this.titles = angular.isArray(tmpTitles) && tmpTitles.length > 0 ?
	      tmpTitles : ratingConfig.titles;

	    var ratingStates = angular.isDefined($attrs.ratingStates) ?
	      $scope.$parent.$eval($attrs.ratingStates) :
	      new Array(angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max);
	    $scope.range = this.buildTemplateObjects(ratingStates);
	  };

	  this.buildTemplateObjects = function(states) {
	    for (var i = 0, n = states.length; i < n; i++) {
	      states[i] = angular.extend({ index: i }, { stateOn: this.stateOn, stateOff: this.stateOff, title: this.getTitle(i) }, states[i]);
	    }
	    return states;
	  };

	  this.getTitle = function(index) {
	    if (index >= this.titles.length) {
	      return index + 1;
	    } else {
	      return this.titles[index];
	    }
	  };

	  $scope.rate = function(value) {
	    if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
	      ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue === value ? 0 : value);
	      ngModelCtrl.$render();
	    }
	  };

	  $scope.enter = function(value) {
	    if (!$scope.readonly) {
	      $scope.value = value;
	    }
	    $scope.onHover({value: value});
	  };

	  $scope.reset = function() {
	    $scope.value = ngModelCtrl.$viewValue;
	    $scope.onLeave();
	  };

	  $scope.onKeydown = function(evt) {
	    if (/(37|38|39|40)/.test(evt.which)) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      $scope.rate($scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1));
	    }
	  };

	  this.render = function() {
	    $scope.value = ngModelCtrl.$viewValue;
	  };
	}])

	.directive('uibRating', function() {
	  return {
	    require: ['uibRating', 'ngModel'],
	    scope: {
	      readonly: '=?',
	      onHover: '&',
	      onLeave: '&'
	    },
	    controller: 'UibRatingController',
	    templateUrl: 'template/rating/rating.html',
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	      ratingCtrl.init(ngModelCtrl);
	    }
	  };
	});

	/* Deprecated rating below */

	angular.module('ui.bootstrap.rating')

	.value('$ratingSuppressWarning', false)

	.controller('RatingController', ['$scope', '$attrs', '$controller', '$log', '$ratingSuppressWarning', function($scope, $attrs, $controller, $log, $ratingSuppressWarning) {
	  if (!$ratingSuppressWarning) {
	    $log.warn('RatingController is now deprecated. Use UibRatingController instead.');
	  }

	  angular.extend(this, $controller('UibRatingController', {
	    $scope: $scope,
	    $attrs: $attrs
	  }));
	}])

	.directive('rating', ['$log', '$ratingSuppressWarning', function($log, $ratingSuppressWarning) {
	  return {
	    require: ['rating', 'ngModel'],
	    scope: {
	      readonly: '=?',
	      onHover: '&',
	      onLeave: '&'
	    },
	    controller: 'RatingController',
	    templateUrl: 'template/rating/rating.html',
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      if (!$ratingSuppressWarning) {
	        $log.warn('rating is now deprecated. Use uib-rating instead.');
	      }
	      var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	      ratingCtrl.init(ngModelCtrl);
	    }
	  };
	}]);


	/**
	 * @ngdoc overview
	 * @name ui.bootstrap.tabs
	 *
	 * @description
	 * AngularJS version of the tabs directive.
	 */

	angular.module('ui.bootstrap.tabs', [])

	.controller('UibTabsetController', ['$scope', function ($scope) {
	  var ctrl = this,
	      tabs = ctrl.tabs = $scope.tabs = [];

	  ctrl.select = function(selectedTab) {
	    angular.forEach(tabs, function(tab) {
	      if (tab.active && tab !== selectedTab) {
	        tab.active = false;
	        tab.onDeselect();
	        selectedTab.selectCalled = false;
	      }
	    });
	    selectedTab.active = true;
	    // only call select if it has not already been called
	    if (!selectedTab.selectCalled) {
	      selectedTab.onSelect();
	      selectedTab.selectCalled = true;
	    }
	  };

	  ctrl.addTab = function addTab(tab) {
	    tabs.push(tab);
	    // we can't run the select function on the first tab
	    // since that would select it twice
	    if (tabs.length === 1 && tab.active !== false) {
	      tab.active = true;
	    } else if (tab.active) {
	      ctrl.select(tab);
	    } else {
	      tab.active = false;
	    }
	  };

	  ctrl.removeTab = function removeTab(tab) {
	    var index = tabs.indexOf(tab);
	    //Select a new tab if the tab to be removed is selected and not destroyed
	    if (tab.active && tabs.length > 1 && !destroyed) {
	      //If this is the last tab, select the previous tab. else, the next tab.
	      var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
	      ctrl.select(tabs[newActiveIndex]);
	    }
	    tabs.splice(index, 1);
	  };

	  var destroyed;
	  $scope.$on('$destroy', function() {
	    destroyed = true;
	  });
	}])

	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.tabs.directive:tabset
	 * @restrict EA
	 *
	 * @description
	 * Tabset is the outer container for the tabs directive
	 *
	 * @param {boolean=} vertical Whether or not to use vertical styling for the tabs.
	 * @param {boolean=} justified Whether or not to use justified styling for the tabs.
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	    <uib-tabset>
	      <uib-tab heading="Tab 1"><b>First</b> Content!</uib-tab>
	      <uib-tab heading="Tab 2"><i>Second</i> Content!</uib-tab>
	    </uib-tabset>
	    <hr />
	    <uib-tabset vertical="true">
	      <uib-tab heading="Vertical Tab 1"><b>First</b> Vertical Content!</uib-tab>
	      <uib-tab heading="Vertical Tab 2"><i>Second</i> Vertical Content!</uib-tab>
	    </uib-tabset>
	    <uib-tabset justified="true">
	      <uib-tab heading="Justified Tab 1"><b>First</b> Justified Content!</uib-tab>
	      <uib-tab heading="Justified Tab 2"><i>Second</i> Justified Content!</uib-tab>
	    </uib-tabset>
	  </file>
	</example>
	 */
	.directive('uibTabset', function() {
	  return {
	    restrict: 'EA',
	    transclude: true,
	    replace: true,
	    scope: {
	      type: '@'
	    },
	    controller: 'UibTabsetController',
	    templateUrl: 'template/tabs/tabset.html',
	    link: function(scope, element, attrs) {
	      scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
	      scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
	    }
	  };
	})

	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.tabs.directive:tab
	 * @restrict EA
	 *
	 * @param {string=} heading The visible heading, or title, of the tab. Set HTML headings with {@link ui.bootstrap.tabs.directive:tabHeading tabHeading}.
	 * @param {string=} select An expression to evaluate when the tab is selected.
	 * @param {boolean=} active A binding, telling whether or not this tab is selected.
	 * @param {boolean=} disabled A binding, telling whether or not this tab is disabled.
	 *
	 * @description
	 * Creates a tab with a heading and content. Must be placed within a {@link ui.bootstrap.tabs.directive:tabset tabset}.
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	    <div ng-controller="TabsDemoCtrl">
	      <button class="btn btn-small" ng-click="items[0].active = true">
	        Select item 1, using active binding
	      </button>
	      <button class="btn btn-small" ng-click="items[1].disabled = !items[1].disabled">
	        Enable/disable item 2, using disabled binding
	      </button>
	      <br />
	      <uib-tabset>
	        <uib-tab heading="Tab 1">First Tab</uib-tab>
	        <uib-tab select="alertMe()">
	          <uib-tab-heading><i class="icon-bell"></i> Alert me!</tab-heading>
	          Second Tab, with alert callback and html heading!
	        </uib-tab>
	        <uib-tab ng-repeat="item in items"
	          heading="{{item.title}}"
	          disabled="item.disabled"
	          active="item.active">
	          {{item.content}}
	        </uib-tab>
	      </uib-tabset>
	    </div>
	  </file>
	  <file name="script.js">
	    function TabsDemoCtrl($scope) {
	      $scope.items = [
	        { title:"Dynamic Title 1", content:"Dynamic Item 0" },
	        { title:"Dynamic Title 2", content:"Dynamic Item 1", disabled: true }
	      ];

	      $scope.alertMe = function() {
	        setTimeout(function() {
	          alert("You've selected the alert tab!");
	        });
	      };
	    };
	  </file>
	</example>
	 */

	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.tabs.directive:tabHeading
	 * @restrict EA
	 *
	 * @description
	 * Creates an HTML heading for a {@link ui.bootstrap.tabs.directive:tab tab}. Must be placed as a child of a tab element.
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	    <uib-tabset>
	      <uib-tab>
	        <uib-tab-heading><b>HTML</b> in my titles?!</tab-heading>
	        And some content, too!
	      </uib-tab>
	      <uib-tab>
	        <uib-tab-heading><i class="icon-heart"></i> Icon heading?!?</tab-heading>
	        That's right.
	      </uib-tab>
	    </uib-tabset>
	  </file>
	</example>
	 */
	.directive('uibTab', ['$parse', function($parse) {
	  return {
	    require: '^uibTabset',
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/tabs/tab.html',
	    transclude: true,
	    scope: {
	      active: '=?',
	      heading: '@',
	      onSelect: '&select', //This callback is called in contentHeadingTransclude
	                          //once it inserts the tab's content into the dom
	      onDeselect: '&deselect'
	    },
	    controller: function() {
	      //Empty controller so other directives can require being 'under' a tab
	    },
	    link: function(scope, elm, attrs, tabsetCtrl, transclude) {
	      scope.$watch('active', function(active) {
	        if (active) {
	          tabsetCtrl.select(scope);
	        }
	      });

	      scope.disabled = false;
	      if (attrs.disable) {
	        scope.$parent.$watch($parse(attrs.disable), function(value) {
	          scope.disabled = !! value;
	        });
	      }

	      scope.select = function() {
	        if (!scope.disabled) {
	          scope.active = true;
	        }
	      };

	      tabsetCtrl.addTab(scope);
	      scope.$on('$destroy', function() {
	        tabsetCtrl.removeTab(scope);
	      });

	      //We need to transclude later, once the content container is ready.
	      //when this link happens, we're inside a tab heading.
	      scope.$transcludeFn = transclude;
	    }
	  };
	}])

	.directive('uibTabHeadingTransclude', function() {
	  return {
	    restrict: 'A',
	    require: ['?^uibTab', '?^tab'], // TODO: change to '^uibTab' after deprecation removal
	    link: function(scope, elm) {
	      scope.$watch('headingElement', function updateHeadingElement(heading) {
	        if (heading) {
	          elm.html('');
	          elm.append(heading);
	        }
	      });
	    }
	  };
	})

	.directive('uibTabContentTransclude', function() {
	  return {
	    restrict: 'A',
	    require: ['?^uibTabset', '?^tabset'], // TODO: change to '^uibTabset' after deprecation removal
	    link: function(scope, elm, attrs) {
	      var tab = scope.$eval(attrs.uibTabContentTransclude);

	      //Now our tab is ready to be transcluded: both the tab heading area
	      //and the tab content area are loaded.  Transclude 'em both.
	      tab.$transcludeFn(tab.$parent, function(contents) {
	        angular.forEach(contents, function(node) {
	          if (isTabHeading(node)) {
	            //Let tabHeadingTransclude know.
	            tab.headingElement = node;
	          } else {
	            elm.append(node);
	          }
	        });
	      });
	    }
	  };

	  function isTabHeading(node) {
	    return node.tagName && (
	      node.hasAttribute('tab-heading') || // TODO: remove after deprecation removal
	      node.hasAttribute('data-tab-heading') || // TODO: remove after deprecation removal
	      node.hasAttribute('x-tab-heading') || // TODO: remove after deprecation removal
	      node.hasAttribute('uib-tab-heading') ||
	      node.hasAttribute('data-uib-tab-heading') ||
	      node.hasAttribute('x-uib-tab-heading') ||
	      node.tagName.toLowerCase() === 'tab-heading' || // TODO: remove after deprecation removal
	      node.tagName.toLowerCase() === 'data-tab-heading' || // TODO: remove after deprecation removal
	      node.tagName.toLowerCase() === 'x-tab-heading' || // TODO: remove after deprecation removal
	      node.tagName.toLowerCase() === 'uib-tab-heading' ||
	      node.tagName.toLowerCase() === 'data-uib-tab-heading' ||
	      node.tagName.toLowerCase() === 'x-uib-tab-heading'
	    );
	  }
	});

	/* deprecated tabs below */

	angular.module('ui.bootstrap.tabs')

	  .value('$tabsSuppressWarning', false)

	  .controller('TabsetController', ['$scope', '$controller', '$log', '$tabsSuppressWarning', function($scope, $controller, $log, $tabsSuppressWarning) {
	    if (!$tabsSuppressWarning) {
	      $log.warn('TabsetController is now deprecated. Use UibTabsetController instead.');
	    }

	    angular.extend(this, $controller('UibTabsetController', {
	      $scope: $scope
	    }));
	  }])

	  .directive('tabset', ['$log', '$tabsSuppressWarning', function($log, $tabsSuppressWarning) {
	    return {
	      restrict: 'EA',
	      transclude: true,
	      replace: true,
	      scope: {
	        type: '@'
	      },
	      controller: 'TabsetController',
	      templateUrl: 'template/tabs/tabset.html',
	      link: function(scope, element, attrs) {

	        if (!$tabsSuppressWarning) {
	          $log.warn('tabset is now deprecated. Use uib-tabset instead.');
	        }
	        scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
	        scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
	      }
	    };
	  }])

	  .directive('tab', ['$parse', '$log', '$tabsSuppressWarning', function($parse, $log, $tabsSuppressWarning) {
	    return {
	      require: '^tabset',
	      restrict: 'EA',
	      replace: true,
	      templateUrl: 'template/tabs/tab.html',
	      transclude: true,
	      scope: {
	        active: '=?',
	        heading: '@',
	        onSelect: '&select', //This callback is called in contentHeadingTransclude
	        //once it inserts the tab's content into the dom
	        onDeselect: '&deselect'
	      },
	      controller: function() {
	        //Empty controller so other directives can require being 'under' a tab
	      },
	      link: function(scope, elm, attrs, tabsetCtrl, transclude) {
	        if (!$tabsSuppressWarning) {
	          $log.warn('tab is now deprecated. Use uib-tab instead.');
	        }

	        scope.$watch('active', function(active) {
	          if (active) {
	            tabsetCtrl.select(scope);
	          }
	        });

	        scope.disabled = false;
	        if (attrs.disable) {
	          scope.$parent.$watch($parse(attrs.disable), function(value) {
	            scope.disabled = !!value;
	          });
	        }

	        scope.select = function() {
	          if (!scope.disabled) {
	            scope.active = true;
	          }
	        };

	        tabsetCtrl.addTab(scope);
	        scope.$on('$destroy', function() {
	          tabsetCtrl.removeTab(scope);
	        });

	        //We need to transclude later, once the content container is ready.
	        //when this link happens, we're inside a tab heading.
	        scope.$transcludeFn = transclude;
	      }
	    };
	  }])

	  .directive('tabHeadingTransclude', ['$log', '$tabsSuppressWarning', function($log, $tabsSuppressWarning) {
	    return {
	      restrict: 'A',
	      require: '^tab',
	      link: function(scope, elm) {
	        if (!$tabsSuppressWarning) {
	          $log.warn('tab-heading-transclude is now deprecated. Use uib-tab-heading-transclude instead.');
	        }

	        scope.$watch('headingElement', function updateHeadingElement(heading) {
	          if (heading) {
	            elm.html('');
	            elm.append(heading);
	          }
	        });
	      }
	    };
	  }])

	  .directive('tabContentTransclude', ['$log', '$tabsSuppressWarning', function($log, $tabsSuppressWarning) {
	    return {
	      restrict: 'A',
	      require: '^tabset',
	      link: function(scope, elm, attrs) {
	        if (!$tabsSuppressWarning) {
	          $log.warn('tab-content-transclude is now deprecated. Use uib-tab-content-transclude instead.');
	        }

	        var tab = scope.$eval(attrs.tabContentTransclude);

	        //Now our tab is ready to be transcluded: both the tab heading area
	        //and the tab content area are loaded.  Transclude 'em both.
	        tab.$transcludeFn(tab.$parent, function(contents) {
	          angular.forEach(contents, function(node) {
	            if (isTabHeading(node)) {
	              //Let tabHeadingTransclude know.
	              tab.headingElement = node;
	            }
	            else {
	              elm.append(node);
	            }
	          });
	        });
	      }
	    };

	    function isTabHeading(node) {
	      return node.tagName && (
	          node.hasAttribute('tab-heading') ||
	          node.hasAttribute('data-tab-heading') ||
	          node.hasAttribute('x-tab-heading') ||
	          node.tagName.toLowerCase() === 'tab-heading' ||
	          node.tagName.toLowerCase() === 'data-tab-heading' ||
	          node.tagName.toLowerCase() === 'x-tab-heading'
	        );
	    }
	  }]);

	angular.module('ui.bootstrap.timepicker', [])

	.constant('uibTimepickerConfig', {
	  hourStep: 1,
	  minuteStep: 1,
	  showMeridian: true,
	  meridians: null,
	  readonlyInput: false,
	  mousewheel: true,
	  arrowkeys: true,
	  showSpinners: true
	})

	.controller('UibTimepickerController', ['$scope', '$element', '$attrs', '$parse', '$log', '$locale', 'uibTimepickerConfig', function($scope, $element, $attrs, $parse, $log, $locale, timepickerConfig) {
	  var selected = new Date(),
	      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
	      meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS;

	  $scope.tabindex = angular.isDefined($attrs.tabindex) ? $attrs.tabindex : 0;
	  $element.removeAttr('tabindex');

	  this.init = function(ngModelCtrl_, inputs) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelCtrl.$render = this.render;

	    ngModelCtrl.$formatters.unshift(function(modelValue) {
	      return modelValue ? new Date(modelValue) : null;
	    });

	    var hoursInputEl = inputs.eq(0),
	        minutesInputEl = inputs.eq(1);

	    var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;
	    if (mousewheel) {
	      this.setupMousewheelEvents(hoursInputEl, minutesInputEl);
	    }

	    var arrowkeys = angular.isDefined($attrs.arrowkeys) ? $scope.$parent.$eval($attrs.arrowkeys) : timepickerConfig.arrowkeys;
	    if (arrowkeys) {
	      this.setupArrowkeyEvents(hoursInputEl, minutesInputEl);
	    }

	    $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
	    this.setupInputEvents(hoursInputEl, minutesInputEl);
	  };

	  var hourStep = timepickerConfig.hourStep;
	  if ($attrs.hourStep) {
	    $scope.$parent.$watch($parse($attrs.hourStep), function(value) {
	      hourStep = parseInt(value, 10);
	    });
	  }

	  var minuteStep = timepickerConfig.minuteStep;
	  if ($attrs.minuteStep) {
	    $scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
	      minuteStep = parseInt(value, 10);
	    });
	  }

	  var min;
	  $scope.$parent.$watch($parse($attrs.min), function(value) {
	    var dt = new Date(value);
	    min = isNaN(dt) ? undefined : dt;
	  });

	  var max;
	  $scope.$parent.$watch($parse($attrs.max), function(value) {
	    var dt = new Date(value);
	    max = isNaN(dt) ? undefined : dt;
	  });

	  $scope.noIncrementHours = function() {
	    var incrementedSelected = addMinutes(selected, hourStep * 60);
	    return incrementedSelected > max ||
	      (incrementedSelected < selected && incrementedSelected < min);
	  };

	  $scope.noDecrementHours = function() {
	    var decrementedSelected = addMinutes(selected, -hourStep * 60);
	    return decrementedSelected < min ||
	      (decrementedSelected > selected && decrementedSelected > max);
	  };

	  $scope.noIncrementMinutes = function() {
	    var incrementedSelected = addMinutes(selected, minuteStep);
	    return incrementedSelected > max ||
	      (incrementedSelected < selected && incrementedSelected < min);
	  };

	  $scope.noDecrementMinutes = function() {
	    var decrementedSelected = addMinutes(selected, -minuteStep);
	    return decrementedSelected < min ||
	      (decrementedSelected > selected && decrementedSelected > max);
	  };

	  $scope.noToggleMeridian = function() {
	    if (selected.getHours() < 13) {
	      return addMinutes(selected, 12 * 60) > max;
	    } else {
	      return addMinutes(selected, -12 * 60) < min;
	    }
	  };

	  // 12H / 24H mode
	  $scope.showMeridian = timepickerConfig.showMeridian;
	  if ($attrs.showMeridian) {
	    $scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
	      $scope.showMeridian = !!value;

	      if (ngModelCtrl.$error.time) {
	        // Evaluate from template
	        var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
	        if (angular.isDefined(hours) && angular.isDefined(minutes)) {
	          selected.setHours(hours);
	          refresh();
	        }
	      } else {
	        updateTemplate();
	      }
	    });
	  }

	  // Get $scope.hours in 24H mode if valid
	  function getHoursFromTemplate() {
	    var hours = parseInt($scope.hours, 10);
	    var valid = $scope.showMeridian ? (hours > 0 && hours < 13) : (hours >= 0 && hours < 24);
	    if (!valid) {
	      return undefined;
	    }

	    if ($scope.showMeridian) {
	      if (hours === 12) {
	        hours = 0;
	      }
	      if ($scope.meridian === meridians[1]) {
	        hours = hours + 12;
	      }
	    }
	    return hours;
	  }

	  function getMinutesFromTemplate() {
	    var minutes = parseInt($scope.minutes, 10);
	    return (minutes >= 0 && minutes < 60) ? minutes : undefined;
	  }

	  function pad(value) {
	    return (angular.isDefined(value) && value.toString().length < 2) ? '0' + value : value.toString();
	  }

	  // Respond on mousewheel spin
	  this.setupMousewheelEvents = function(hoursInputEl, minutesInputEl) {
	    var isScrollingUp = function(e) {
	      if (e.originalEvent) {
	        e = e.originalEvent;
	      }
	      //pick correct delta variable depending on event
	      var delta = (e.wheelDelta) ? e.wheelDelta : -e.deltaY;
	      return (e.detail || delta > 0);
	    };

	    hoursInputEl.bind('mousewheel wheel', function(e) {
	      $scope.$apply(isScrollingUp(e) ? $scope.incrementHours() : $scope.decrementHours());
	      e.preventDefault();
	    });

	    minutesInputEl.bind('mousewheel wheel', function(e) {
	      $scope.$apply(isScrollingUp(e) ? $scope.incrementMinutes() : $scope.decrementMinutes());
	      e.preventDefault();
	    });

	  };

	  // Respond on up/down arrowkeys
	  this.setupArrowkeyEvents = function(hoursInputEl, minutesInputEl) {
	    hoursInputEl.bind('keydown', function(e) {
	      if (e.which === 38) { // up
	        e.preventDefault();
	        $scope.incrementHours();
	        $scope.$apply();
	      } else if (e.which === 40) { // down
	        e.preventDefault();
	        $scope.decrementHours();
	        $scope.$apply();
	      }
	    });

	    minutesInputEl.bind('keydown', function(e) {
	      if (e.which === 38) { // up
	        e.preventDefault();
	        $scope.incrementMinutes();
	        $scope.$apply();
	      } else if (e.which === 40) { // down
	        e.preventDefault();
	        $scope.decrementMinutes();
	        $scope.$apply();
	      }
	    });
	  };

	  this.setupInputEvents = function(hoursInputEl, minutesInputEl) {
	    if ($scope.readonlyInput) {
	      $scope.updateHours = angular.noop;
	      $scope.updateMinutes = angular.noop;
	      return;
	    }

	    var invalidate = function(invalidHours, invalidMinutes) {
	      ngModelCtrl.$setViewValue(null);
	      ngModelCtrl.$setValidity('time', false);
	      if (angular.isDefined(invalidHours)) {
	        $scope.invalidHours = invalidHours;
	      }
	      if (angular.isDefined(invalidMinutes)) {
	        $scope.invalidMinutes = invalidMinutes;
	      }
	    };

	    $scope.updateHours = function() {
	      var hours = getHoursFromTemplate(),
	        minutes = getMinutesFromTemplate();

	      if (angular.isDefined(hours) && angular.isDefined(minutes)) {
	        selected.setHours(hours);
	        if (selected < min || selected > max) {
	          invalidate(true);
	        } else {
	          refresh('h');
	        }
	      } else {
	        invalidate(true);
	      }
	    };

	    hoursInputEl.bind('blur', function(e) {
	      if (!$scope.invalidHours && $scope.hours < 10) {
	        $scope.$apply(function() {
	          $scope.hours = pad($scope.hours);
	        });
	      }
	    });

	    $scope.updateMinutes = function() {
	      var minutes = getMinutesFromTemplate(),
	        hours = getHoursFromTemplate();

	      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
	        selected.setMinutes(minutes);
	        if (selected < min || selected > max) {
	          invalidate(undefined, true);
	        } else {
	          refresh('m');
	        }
	      } else {
	        invalidate(undefined, true);
	      }
	    };

	    minutesInputEl.bind('blur', function(e) {
	      if (!$scope.invalidMinutes && $scope.minutes < 10) {
	        $scope.$apply(function() {
	          $scope.minutes = pad($scope.minutes);
	        });
	      }
	    });

	  };

	  this.render = function() {
	    var date = ngModelCtrl.$viewValue;

	    if (isNaN(date)) {
	      ngModelCtrl.$setValidity('time', false);
	      $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
	    } else {
	      if (date) {
	        selected = date;
	      }

	      if (selected < min || selected > max) {
	        ngModelCtrl.$setValidity('time', false);
	        $scope.invalidHours = true;
	        $scope.invalidMinutes = true;
	      } else {
	        makeValid();
	      }
	      updateTemplate();
	    }
	  };

	  // Call internally when we know that model is valid.
	  function refresh(keyboardChange) {
	    makeValid();
	    ngModelCtrl.$setViewValue(new Date(selected));
	    updateTemplate(keyboardChange);
	  }

	  function makeValid() {
	    ngModelCtrl.$setValidity('time', true);
	    $scope.invalidHours = false;
	    $scope.invalidMinutes = false;
	  }

	  function updateTemplate(keyboardChange) {
	    var hours = selected.getHours(), minutes = selected.getMinutes();

	    if ($scope.showMeridian) {
	      hours = (hours === 0 || hours === 12) ? 12 : hours % 12; // Convert 24 to 12 hour system
	    }

	    $scope.hours = keyboardChange === 'h' ? hours : pad(hours);
	    if (keyboardChange !== 'm') {
	      $scope.minutes = pad(minutes);
	    }
	    $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
	  }

	  function addMinutes(date, minutes) {
	    var dt = new Date(date.getTime() + minutes * 60000);
	    var newDate = new Date(date);
	    newDate.setHours(dt.getHours(), dt.getMinutes());
	    return newDate;
	  }

	  function addMinutesToSelected(minutes) {
	    selected = addMinutes(selected, minutes);
	    refresh();
	  }

	  $scope.showSpinners = angular.isDefined($attrs.showSpinners) ?
	    $scope.$parent.$eval($attrs.showSpinners) : timepickerConfig.showSpinners;

	  $scope.incrementHours = function() {
	    if (!$scope.noIncrementHours()) {
	      addMinutesToSelected(hourStep * 60);
	    }
	  };

	  $scope.decrementHours = function() {
	    if (!$scope.noDecrementHours()) {
	      addMinutesToSelected(-hourStep * 60);
	    }
	  };

	  $scope.incrementMinutes = function() {
	    if (!$scope.noIncrementMinutes()) {
	      addMinutesToSelected(minuteStep);
	    }
	  };

	  $scope.decrementMinutes = function() {
	    if (!$scope.noDecrementMinutes()) {
	      addMinutesToSelected(-minuteStep);
	    }
	  };

	  $scope.toggleMeridian = function() {
	    if (!$scope.noToggleMeridian()) {
	      addMinutesToSelected(12 * 60 * (selected.getHours() < 12 ? 1 : -1));
	    }
	  };
	}])

	.directive('uibTimepicker', function() {
	  return {
	    restrict: 'EA',
	    require: ['uibTimepicker', '?^ngModel'],
	    controller: 'UibTimepickerController',
	    controllerAs: 'timepicker',
	    replace: true,
	    scope: {},
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/timepicker/timepicker.html';
	    },
	    link: function(scope, element, attrs, ctrls) {
	      var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      if (ngModelCtrl) {
	        timepickerCtrl.init(ngModelCtrl, element.find('input'));
	      }
	    }
	  };
	});

	/* Deprecated timepicker below */

	angular.module('ui.bootstrap.timepicker')

	.value('$timepickerSuppressWarning', false)

	.controller('TimepickerController', ['$scope', '$element', '$attrs', '$controller', '$log', '$timepickerSuppressWarning', function($scope, $element, $attrs, $controller, $log, $timepickerSuppressWarning) {
	  if (!$timepickerSuppressWarning) {
	    $log.warn('TimepickerController is now deprecated. Use UibTimepickerController instead.');
	  }

	  angular.extend(this, $controller('UibTimepickerController', {
	    $scope: $scope,
	    $element: $element,
	    $attrs: $attrs
	  }));
	}])

	.directive('timepicker', ['$log', '$timepickerSuppressWarning', function($log, $timepickerSuppressWarning) {
	  return {
	    restrict: 'EA',
	    require: ['timepicker', '?^ngModel'],
	    controller: 'TimepickerController',
	    controllerAs: 'timepicker',
	    replace: true,
	    scope: {},
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/timepicker/timepicker.html';
	    },
	    link: function(scope, element, attrs, ctrls) {
	      if (!$timepickerSuppressWarning) {
	        $log.warn('timepicker is now deprecated. Use uib-timepicker instead.');
	      }
	      var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      if (ngModelCtrl) {
	        timepickerCtrl.init(ngModelCtrl, element.find('input'));
	      }
	    }
	  };
	}]);

	angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.position'])

	/**
	 * A helper service that can parse typeahead's syntax (string provided by users)
	 * Extracted to a separate service for ease of unit testing
	 */
	  .factory('uibTypeaheadParser', ['$parse', function($parse) {
	    //                      00000111000000000000022200000000000000003333333333333330000000000044000
	    var TYPEAHEAD_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
	    return {
	      parse: function(input) {
	        var match = input.match(TYPEAHEAD_REGEXP);
	        if (!match) {
	          throw new Error(
	            'Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' +
	              ' but got "' + input + '".');
	        }

	        return {
	          itemName: match[3],
	          source: $parse(match[4]),
	          viewMapper: $parse(match[2] || match[1]),
	          modelMapper: $parse(match[1])
	        };
	      }
	    };
	  }])

	  .controller('UibTypeaheadController', ['$scope', '$element', '$attrs', '$compile', '$parse', '$q', '$timeout', '$document', '$window', '$rootScope', '$uibPosition', 'uibTypeaheadParser',
	    function(originalScope, element, attrs, $compile, $parse, $q, $timeout, $document, $window, $rootScope, $position, typeaheadParser) {
	    var HOT_KEYS = [9, 13, 27, 38, 40];
	    var eventDebounceTime = 200;
	    var modelCtrl, ngModelOptions;
	    //SUPPORTED ATTRIBUTES (OPTIONS)

	    //minimal no of characters that needs to be entered before typeahead kicks-in
	    var minLength = originalScope.$eval(attrs.typeaheadMinLength);
	    if (!minLength && minLength !== 0) {
	      minLength = 1;
	    }

	    //minimal wait time after last character typed before typeahead kicks-in
	    var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;

	    //should it restrict model values to the ones selected from the popup only?
	    var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;

	    //binding to a variable that indicates if matches are being retrieved asynchronously
	    var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;

	    //a callback executed when a match is selected
	    var onSelectCallback = $parse(attrs.typeaheadOnSelect);

	    //should it select highlighted popup value when losing focus?
	    var isSelectOnBlur = angular.isDefined(attrs.typeaheadSelectOnBlur) ? originalScope.$eval(attrs.typeaheadSelectOnBlur) : false;

	    //binding to a variable that indicates if there were no results after the query is completed
	    var isNoResultsSetter = $parse(attrs.typeaheadNoResults).assign || angular.noop;

	    var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;

	    var appendToBody =  attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;

	    var appendToElementId =  attrs.typeaheadAppendToElementId || false;

	    var focusFirst = originalScope.$eval(attrs.typeaheadFocusFirst) !== false;

	    //If input matches an item of the list exactly, select it automatically
	    var selectOnExact = attrs.typeaheadSelectOnExact ? originalScope.$eval(attrs.typeaheadSelectOnExact) : false;

	    //INTERNAL VARIABLES

	    //model setter executed upon match selection
	    var parsedModel = $parse(attrs.ngModel);
	    var invokeModelSetter = $parse(attrs.ngModel + '($$$p)');
	    var $setModelValue = function(scope, newValue) {
	      if (angular.isFunction(parsedModel(originalScope)) &&
	        ngModelOptions && ngModelOptions.$options && ngModelOptions.$options.getterSetter) {
	        return invokeModelSetter(scope, {$$$p: newValue});
	      } else {
	        return parsedModel.assign(scope, newValue);
	      }
	    };

	    //expressions used by typeahead
	    var parserResult = typeaheadParser.parse(attrs.uibTypeahead);

	    var hasFocus;

	    //Used to avoid bug in iOS webview where iOS keyboard does not fire
	    //mousedown & mouseup events
	    //Issue #3699
	    var selected;

	    //create a child scope for the typeahead directive so we are not polluting original scope
	    //with typeahead-specific data (matches, query etc.)
	    var scope = originalScope.$new();
	    var offDestroy = originalScope.$on('$destroy', function() {
	      scope.$destroy();
	    });
	    scope.$on('$destroy', offDestroy);

	    // WAI-ARIA
	    var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
	    element.attr({
	      'aria-autocomplete': 'list',
	      'aria-expanded': false,
	      'aria-owns': popupId
	    });

	    //pop-up element used to display matches
	    var popUpEl = angular.element('<div uib-typeahead-popup></div>');
	    popUpEl.attr({
	      id: popupId,
	      matches: 'matches',
	      active: 'activeIdx',
	      select: 'select(activeIdx)',
	      'move-in-progress': 'moveInProgress',
	      query: 'query',
	      position: 'position'
	    });
	    //custom item template
	    if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
	      popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
	    }

	    if (angular.isDefined(attrs.typeaheadPopupTemplateUrl)) {
	      popUpEl.attr('popup-template-url', attrs.typeaheadPopupTemplateUrl);
	    }

	    var resetMatches = function() {
	      scope.matches = [];
	      scope.activeIdx = -1;
	      element.attr('aria-expanded', false);
	    };

	    var getMatchId = function(index) {
	      return popupId + '-option-' + index;
	    };

	    // Indicate that the specified match is the active (pre-selected) item in the list owned by this typeahead.
	    // This attribute is added or removed automatically when the `activeIdx` changes.
	    scope.$watch('activeIdx', function(index) {
	      if (index < 0) {
	        element.removeAttr('aria-activedescendant');
	      } else {
	        element.attr('aria-activedescendant', getMatchId(index));
	      }
	    });

	    var inputIsExactMatch = function(inputValue, index) {
	      if (scope.matches.length > index && inputValue) {
	        return inputValue.toUpperCase() === scope.matches[index].label.toUpperCase();
	      }

	      return false;
	    };

	    var getMatchesAsync = function(inputValue) {
	      var locals = {$viewValue: inputValue};
	      isLoadingSetter(originalScope, true);
	      isNoResultsSetter(originalScope, false);
	      $q.when(parserResult.source(originalScope, locals)).then(function(matches) {
	        //it might happen that several async queries were in progress if a user were typing fast
	        //but we are interested only in responses that correspond to the current view value
	        var onCurrentRequest = (inputValue === modelCtrl.$viewValue);
	        if (onCurrentRequest && hasFocus) {
	          if (matches && matches.length > 0) {
	            scope.activeIdx = focusFirst ? 0 : -1;
	            isNoResultsSetter(originalScope, false);
	            scope.matches.length = 0;

	            //transform labels
	            for (var i = 0; i < matches.length; i++) {
	              locals[parserResult.itemName] = matches[i];
	              scope.matches.push({
	                id: getMatchId(i),
	                label: parserResult.viewMapper(scope, locals),
	                model: matches[i]
	              });
	            }

	            scope.query = inputValue;
	            //position pop-up with matches - we need to re-calculate its position each time we are opening a window
	            //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
	            //due to other elements being rendered
	            recalculatePosition();

	            element.attr('aria-expanded', true);

	            //Select the single remaining option if user input matches
	            if (selectOnExact && scope.matches.length === 1 && inputIsExactMatch(inputValue, 0)) {
	              scope.select(0);
	            }
	          } else {
	            resetMatches();
	            isNoResultsSetter(originalScope, true);
	          }
	        }
	        if (onCurrentRequest) {
	          isLoadingSetter(originalScope, false);
	        }
	      }, function() {
	        resetMatches();
	        isLoadingSetter(originalScope, false);
	        isNoResultsSetter(originalScope, true);
	      });
	    };

	    // bind events only if appendToBody params exist - performance feature
	    if (appendToBody) {
	      angular.element($window).bind('resize', fireRecalculating);
	      $document.find('body').bind('scroll', fireRecalculating);
	    }

	    // Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
	    var timeoutEventPromise;

	    // Default progress type
	    scope.moveInProgress = false;

	    function fireRecalculating() {
	      if (!scope.moveInProgress) {
	        scope.moveInProgress = true;
	        scope.$digest();
	      }

	      // Cancel previous timeout
	      if (timeoutEventPromise) {
	        $timeout.cancel(timeoutEventPromise);
	      }

	      // Debounced executing recalculate after events fired
	      timeoutEventPromise = $timeout(function() {
	        // if popup is visible
	        if (scope.matches.length) {
	          recalculatePosition();
	        }

	        scope.moveInProgress = false;
	      }, eventDebounceTime);
	    }

	    // recalculate actual position and set new values to scope
	    // after digest loop is popup in right position
	    function recalculatePosition() {
	      scope.position = appendToBody ? $position.offset(element) : $position.position(element);
	      scope.position.top += element.prop('offsetHeight');
	    }

	    //we need to propagate user's query so we can higlight matches
	    scope.query = undefined;

	    //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
	    var timeoutPromise;

	    var scheduleSearchWithTimeout = function(inputValue) {
	      timeoutPromise = $timeout(function() {
	        getMatchesAsync(inputValue);
	      }, waitTime);
	    };

	    var cancelPreviousTimeout = function() {
	      if (timeoutPromise) {
	        $timeout.cancel(timeoutPromise);
	      }
	    };

	    resetMatches();

	    scope.select = function(activeIdx) {
	      //called from within the $digest() cycle
	      var locals = {};
	      var model, item;

	      selected = true;
	      locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
	      model = parserResult.modelMapper(originalScope, locals);
	      $setModelValue(originalScope, model);
	      modelCtrl.$setValidity('editable', true);
	      modelCtrl.$setValidity('parse', true);

	      onSelectCallback(originalScope, {
	        $item: item,
	        $model: model,
	        $label: parserResult.viewMapper(originalScope, locals)
	      });

	      resetMatches();

	      //return focus to the input element if a match was selected via a mouse click event
	      // use timeout to avoid $rootScope:inprog error
	      if (scope.$eval(attrs.typeaheadFocusOnSelect) !== false) {
	        $timeout(function() { element[0].focus(); }, 0, false);
	      }
	    };

	    //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
	    element.bind('keydown', function(evt) {
	      //typeahead is open and an "interesting" key was pressed
	      if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
	        return;
	      }

	      // if there's nothing selected (i.e. focusFirst) and enter or tab is hit, clear the results
	      if (scope.activeIdx === -1 && (evt.which === 9 || evt.which === 13)) {
	        resetMatches();
	        scope.$digest();
	        return;
	      }

	      evt.preventDefault();

	      if (evt.which === 40) {
	        scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
	        scope.$digest();
	      } else if (evt.which === 38) {
	        scope.activeIdx = (scope.activeIdx > 0 ? scope.activeIdx : scope.matches.length) - 1;
	        scope.$digest();
	      } else if (evt.which === 13 || evt.which === 9) {
	        scope.$apply(function () {
	          scope.select(scope.activeIdx);
	        });
	      } else if (evt.which === 27) {
	        evt.stopPropagation();

	        resetMatches();
	        scope.$digest();
	      }
	    });

	    element.bind('blur', function() {
	      if (isSelectOnBlur && scope.matches.length && scope.activeIdx !== -1 && !selected) {
	        selected = true;
	        scope.$apply(function() {
	          scope.select(scope.activeIdx);
	        });
	      }
	      hasFocus = false;
	      selected = false;
	    });

	    // Keep reference to click handler to unbind it.
	    var dismissClickHandler = function(evt) {
	      // Issue #3973
	      // Firefox treats right click as a click on document
	      if (element[0] !== evt.target && evt.which !== 3 && scope.matches.length !== 0) {
	        resetMatches();
	        if (!$rootScope.$$phase) {
	          scope.$digest();
	        }
	      }
	    };

	    $document.bind('click', dismissClickHandler);

	    originalScope.$on('$destroy', function() {
	      $document.unbind('click', dismissClickHandler);
	      if (appendToBody || appendToElementId) {
	        $popup.remove();
	      }

	      if (appendToBody) {
	        angular.element($window).unbind('resize', fireRecalculating);
	        $document.find('body').unbind('scroll', fireRecalculating);
	      }
	      // Prevent jQuery cache memory leak
	      popUpEl.remove();
	    });

	    var $popup = $compile(popUpEl)(scope);

	    if (appendToBody) {
	      $document.find('body').append($popup);
	    } else if (appendToElementId !== false) {
	      angular.element($document[0].getElementById(appendToElementId)).append($popup);
	    } else {
	      element.after($popup);
	    }

	    this.init = function(_modelCtrl, _ngModelOptions) {
	      modelCtrl = _modelCtrl;
	      ngModelOptions = _ngModelOptions;

	      //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
	      //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
	      modelCtrl.$parsers.unshift(function(inputValue) {
	        hasFocus = true;

	        if (minLength === 0 || inputValue && inputValue.length >= minLength) {
	          if (waitTime > 0) {
	            cancelPreviousTimeout();
	            scheduleSearchWithTimeout(inputValue);
	          } else {
	            getMatchesAsync(inputValue);
	          }
	        } else {
	          isLoadingSetter(originalScope, false);
	          cancelPreviousTimeout();
	          resetMatches();
	        }

	        if (isEditable) {
	          return inputValue;
	        } else {
	          if (!inputValue) {
	            // Reset in case user had typed something previously.
	            modelCtrl.$setValidity('editable', true);
	            return null;
	          } else {
	            modelCtrl.$setValidity('editable', false);
	            return undefined;
	          }
	        }
	      });

	      modelCtrl.$formatters.push(function(modelValue) {
	        var candidateViewValue, emptyViewValue;
	        var locals = {};

	        // The validity may be set to false via $parsers (see above) if
	        // the model is restricted to selected values. If the model
	        // is set manually it is considered to be valid.
	        if (!isEditable) {
	          modelCtrl.$setValidity('editable', true);
	        }

	        if (inputFormatter) {
	          locals.$model = modelValue;
	          return inputFormatter(originalScope, locals);
	        } else {
	          //it might happen that we don't have enough info to properly render input value
	          //we need to check for this situation and simply return model value if we can't apply custom formatting
	          locals[parserResult.itemName] = modelValue;
	          candidateViewValue = parserResult.viewMapper(originalScope, locals);
	          locals[parserResult.itemName] = undefined;
	          emptyViewValue = parserResult.viewMapper(originalScope, locals);

	          return candidateViewValue !== emptyViewValue ? candidateViewValue : modelValue;
	        }
	      });
	    };
	  }])

	  .directive('uibTypeahead', function() {
	    return {
	      controller: 'UibTypeaheadController',
	      require: ['ngModel', '^?ngModelOptions', 'uibTypeahead'],
	      link: function(originalScope, element, attrs, ctrls) {
	        ctrls[2].init(ctrls[0], ctrls[1]);
	      }
	    };
	  })

	  .directive('uibTypeaheadPopup', function() {
	    return {
	      scope: {
	        matches: '=',
	        query: '=',
	        active: '=',
	        position: '&',
	        moveInProgress: '=',
	        select: '&'
	      },
	      replace: true,
	      templateUrl: function(element, attrs) {
	        return attrs.popupTemplateUrl || 'template/typeahead/typeahead-popup.html';
	      },
	      link: function(scope, element, attrs) {
	        scope.templateUrl = attrs.templateUrl;

	        scope.isOpen = function() {
	          return scope.matches.length > 0;
	        };

	        scope.isActive = function(matchIdx) {
	          return scope.active == matchIdx;
	        };

	        scope.selectActive = function(matchIdx) {
	          scope.active = matchIdx;
	        };

	        scope.selectMatch = function(activeIdx) {
	          scope.select({activeIdx:activeIdx});
	        };
	      }
	    };
	  })

	  .directive('uibTypeaheadMatch', ['$templateRequest', '$compile', '$parse', function($templateRequest, $compile, $parse) {
	    return {
	      scope: {
	        index: '=',
	        match: '=',
	        query: '='
	      },
	      link:function(scope, element, attrs) {
	        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'template/typeahead/typeahead-match.html';
	        $templateRequest(tplUrl).then(function(tplContent) {
	          $compile(tplContent.trim())(scope, function(clonedElement) {
	            element.replaceWith(clonedElement);
	          });
	        });
	      }
	    };
	  }])

	  .filter('uibTypeaheadHighlight', ['$sce', '$injector', '$log', function($sce, $injector, $log) {
	    var isSanitizePresent;
	    isSanitizePresent = $injector.has('$sanitize');

	    function escapeRegexp(queryToEscape) {
	      // Regex: capture the whole query string and replace it with the string that will be used to match
	      // the results, for example if the capture is "a" the result will be \a
	      return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	    }

	    function containsHtml(matchItem) {
	      return /<.*>/g.test(matchItem);
	    }

	    return function(matchItem, query) {
	      if (!isSanitizePresent && containsHtml(matchItem)) {
	        $log.warn('Unsafe use of typeahead please use ngSanitize'); // Warn the user about the danger
	      }
	      matchItem = query? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem; // Replaces the capture string with a the same string inside of a "strong" tag
	      if (!isSanitizePresent) {
	        matchItem = $sce.trustAsHtml(matchItem); // If $sanitize is not present we pack the string in a $sce object for the ng-bind-html directive
	      }
	      return matchItem;
	    };
	  }]);

	/* Deprecated typeahead below */
	  
	angular.module('ui.bootstrap.typeahead')
	  .value('$typeaheadSuppressWarning', false)
	  .service('typeaheadParser', ['$parse', 'uibTypeaheadParser', '$log', '$typeaheadSuppressWarning', function($parse, uibTypeaheadParser, $log, $typeaheadSuppressWarning) {
	    if (!$typeaheadSuppressWarning) {
	      $log.warn('typeaheadParser is now deprecated. Use uibTypeaheadParser instead.');
	    }

	    return uibTypeaheadParser;
	  }])

	  .directive('typeahead', ['$compile', '$parse', '$q', '$timeout', '$document', '$window', '$rootScope', '$uibPosition', 'typeaheadParser', '$log', '$typeaheadSuppressWarning',
	    function($compile, $parse, $q, $timeout, $document, $window, $rootScope, $position, typeaheadParser, $log, $typeaheadSuppressWarning) {
	    var HOT_KEYS = [9, 13, 27, 38, 40];
	    var eventDebounceTime = 200;
	    return {
	      require: ['ngModel', '^?ngModelOptions'],
	      link: function(originalScope, element, attrs, ctrls) {
	        if (!$typeaheadSuppressWarning) {
	          $log.warn('typeahead is now deprecated. Use uib-typeahead instead.');
	        }
	        var modelCtrl = ctrls[0];
	        var ngModelOptions = ctrls[1];
	        //SUPPORTED ATTRIBUTES (OPTIONS)

	        //minimal no of characters that needs to be entered before typeahead kicks-in
	        var minLength = originalScope.$eval(attrs.typeaheadMinLength);
	        if (!minLength && minLength !== 0) {
	          minLength = 1;
	        }

	        //minimal wait time after last character typed before typeahead kicks-in
	        var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;

	        //should it restrict model values to the ones selected from the popup only?
	        var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;

	        //binding to a variable that indicates if matches are being retrieved asynchronously
	        var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;

	        //a callback executed when a match is selected
	        var onSelectCallback = $parse(attrs.typeaheadOnSelect);

	        //should it select highlighted popup value when losing focus?
	        var isSelectOnBlur = angular.isDefined(attrs.typeaheadSelectOnBlur) ? originalScope.$eval(attrs.typeaheadSelectOnBlur) : false;

	        //binding to a variable that indicates if there were no results after the query is completed
	        var isNoResultsSetter = $parse(attrs.typeaheadNoResults).assign || angular.noop;

	        var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;

	        var appendToBody =  attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;

	        var appendToElementId =  attrs.typeaheadAppendToElementId || false;

	        var focusFirst = originalScope.$eval(attrs.typeaheadFocusFirst) !== false;

	        //If input matches an item of the list exactly, select it automatically
	        var selectOnExact = attrs.typeaheadSelectOnExact ? originalScope.$eval(attrs.typeaheadSelectOnExact) : false;

	        //INTERNAL VARIABLES

	        //model setter executed upon match selection
	        var parsedModel = $parse(attrs.ngModel);
	        var invokeModelSetter = $parse(attrs.ngModel + '($$$p)');
	        var $setModelValue = function(scope, newValue) {
	          if (angular.isFunction(parsedModel(originalScope)) &&
	            ngModelOptions && ngModelOptions.$options && ngModelOptions.$options.getterSetter) {
	            return invokeModelSetter(scope, {$$$p: newValue});
	          } else {
	            return parsedModel.assign(scope, newValue);
	          }
	        };

	        //expressions used by typeahead
	        var parserResult = typeaheadParser.parse(attrs.typeahead);

	        var hasFocus;

	        //Used to avoid bug in iOS webview where iOS keyboard does not fire
	        //mousedown & mouseup events
	        //Issue #3699
	        var selected;

	        //create a child scope for the typeahead directive so we are not polluting original scope
	        //with typeahead-specific data (matches, query etc.)
	        var scope = originalScope.$new();
	        var offDestroy = originalScope.$on('$destroy', function() {
				    scope.$destroy();
	        });
	        scope.$on('$destroy', offDestroy);

	        // WAI-ARIA
	        var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
	        element.attr({
	          'aria-autocomplete': 'list',
	          'aria-expanded': false,
	          'aria-owns': popupId
	        });

	        //pop-up element used to display matches
	        var popUpEl = angular.element('<div typeahead-popup></div>');
	        popUpEl.attr({
	          id: popupId,
	          matches: 'matches',
	          active: 'activeIdx',
	          select: 'select(activeIdx)',
	          'move-in-progress': 'moveInProgress',
	          query: 'query',
	          position: 'position'
	        });
	        //custom item template
	        if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
	          popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
	        }

	        if (angular.isDefined(attrs.typeaheadPopupTemplateUrl)) {
	          popUpEl.attr('popup-template-url', attrs.typeaheadPopupTemplateUrl);
	        }

	        var resetMatches = function() {
	          scope.matches = [];
	          scope.activeIdx = -1;
	          element.attr('aria-expanded', false);
	        };

	        var getMatchId = function(index) {
	          return popupId + '-option-' + index;
	        };

	        // Indicate that the specified match is the active (pre-selected) item in the list owned by this typeahead.
	        // This attribute is added or removed automatically when the `activeIdx` changes.
	        scope.$watch('activeIdx', function(index) {
	          if (index < 0) {
	            element.removeAttr('aria-activedescendant');
	          } else {
	            element.attr('aria-activedescendant', getMatchId(index));
	          }
	        });

	        var inputIsExactMatch = function(inputValue, index) {
	          if (scope.matches.length > index && inputValue) {
	            return inputValue.toUpperCase() === scope.matches[index].label.toUpperCase();
	          }

	          return false;
	        };

	        var getMatchesAsync = function(inputValue) {
	          var locals = {$viewValue: inputValue};
	          isLoadingSetter(originalScope, true);
	          isNoResultsSetter(originalScope, false);
	          $q.when(parserResult.source(originalScope, locals)).then(function(matches) {
	            //it might happen that several async queries were in progress if a user were typing fast
	            //but we are interested only in responses that correspond to the current view value
	            var onCurrentRequest = (inputValue === modelCtrl.$viewValue);
	            if (onCurrentRequest && hasFocus) {
	              if (matches && matches.length > 0) {
	                scope.activeIdx = focusFirst ? 0 : -1;
	                isNoResultsSetter(originalScope, false);
	                scope.matches.length = 0;

	                //transform labels
	                for (var i = 0; i < matches.length; i++) {
	                  locals[parserResult.itemName] = matches[i];
	                  scope.matches.push({
	                    id: getMatchId(i),
	                    label: parserResult.viewMapper(scope, locals),
	                    model: matches[i]
	                  });
	                }

	                scope.query = inputValue;
	                //position pop-up with matches - we need to re-calculate its position each time we are opening a window
	                //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
	                //due to other elements being rendered
	                recalculatePosition();

	                element.attr('aria-expanded', true);

	                //Select the single remaining option if user input matches
	                if (selectOnExact && scope.matches.length === 1 && inputIsExactMatch(inputValue, 0)) {
	                  scope.select(0);
	                }
	              } else {
	                resetMatches();
	                isNoResultsSetter(originalScope, true);
	              }
	            }
	            if (onCurrentRequest) {
	              isLoadingSetter(originalScope, false);
	            }
	          }, function() {
	            resetMatches();
	            isLoadingSetter(originalScope, false);
	            isNoResultsSetter(originalScope, true);
	          });
	        };

	        // bind events only if appendToBody params exist - performance feature
	        if (appendToBody) {
	          angular.element($window).bind('resize', fireRecalculating);
	          $document.find('body').bind('scroll', fireRecalculating);
	        }

	        // Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
	        var timeoutEventPromise;

	        // Default progress type
	        scope.moveInProgress = false;

	        function fireRecalculating() {
	          if (!scope.moveInProgress) {
	            scope.moveInProgress = true;
	            scope.$digest();
	          }

	          // Cancel previous timeout
	          if (timeoutEventPromise) {
	            $timeout.cancel(timeoutEventPromise);
	          }

	          // Debounced executing recalculate after events fired
	          timeoutEventPromise = $timeout(function() {
	            // if popup is visible
	            if (scope.matches.length) {
	              recalculatePosition();
	            }

	            scope.moveInProgress = false;
	          }, eventDebounceTime);
	        }

	        // recalculate actual position and set new values to scope
	        // after digest loop is popup in right position
	        function recalculatePosition() {
	          scope.position = appendToBody ? $position.offset(element) : $position.position(element);
	          scope.position.top += element.prop('offsetHeight');
	        }

	        resetMatches();

	        //we need to propagate user's query so we can higlight matches
	        scope.query = undefined;

	        //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
	        var timeoutPromise;

	        var scheduleSearchWithTimeout = function(inputValue) {
	          timeoutPromise = $timeout(function() {
	            getMatchesAsync(inputValue);
	          }, waitTime);
	        };

	        var cancelPreviousTimeout = function() {
	          if (timeoutPromise) {
	            $timeout.cancel(timeoutPromise);
	          }
	        };

	        //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
	        //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
	        modelCtrl.$parsers.unshift(function(inputValue) {
	          hasFocus = true;

	          if (minLength === 0 || inputValue && inputValue.length >= minLength) {
	            if (waitTime > 0) {
	              cancelPreviousTimeout();
	              scheduleSearchWithTimeout(inputValue);
	            } else {
	              getMatchesAsync(inputValue);
	            }
	          } else {
	            isLoadingSetter(originalScope, false);
	            cancelPreviousTimeout();
	            resetMatches();
	          }

	          if (isEditable) {
	            return inputValue;
	          } else {
	            if (!inputValue) {
	              // Reset in case user had typed something previously.
	              modelCtrl.$setValidity('editable', true);
	              return null;
	            } else {
	              modelCtrl.$setValidity('editable', false);
	              return undefined;
	            }
	          }
	        });

	        modelCtrl.$formatters.push(function(modelValue) {
	          var candidateViewValue, emptyViewValue;
	          var locals = {};

	          // The validity may be set to false via $parsers (see above) if
	          // the model is restricted to selected values. If the model
	          // is set manually it is considered to be valid.
	          if (!isEditable) {
	            modelCtrl.$setValidity('editable', true);
	          }

	          if (inputFormatter) {
	            locals.$model = modelValue;
	            return inputFormatter(originalScope, locals);
	          } else {
	            //it might happen that we don't have enough info to properly render input value
	            //we need to check for this situation and simply return model value if we can't apply custom formatting
	            locals[parserResult.itemName] = modelValue;
	            candidateViewValue = parserResult.viewMapper(originalScope, locals);
	            locals[parserResult.itemName] = undefined;
	            emptyViewValue = parserResult.viewMapper(originalScope, locals);

	            return candidateViewValue !== emptyViewValue ? candidateViewValue : modelValue;
	          }
	        });

	        scope.select = function(activeIdx) {
	          //called from within the $digest() cycle
	          var locals = {};
	          var model, item;

	          selected = true;
	          locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
	          model = parserResult.modelMapper(originalScope, locals);
	          $setModelValue(originalScope, model);
	          modelCtrl.$setValidity('editable', true);
	          modelCtrl.$setValidity('parse', true);

	          onSelectCallback(originalScope, {
	            $item: item,
	            $model: model,
	            $label: parserResult.viewMapper(originalScope, locals)
	          });

	          resetMatches();

	          //return focus to the input element if a match was selected via a mouse click event
	          // use timeout to avoid $rootScope:inprog error
	          if (scope.$eval(attrs.typeaheadFocusOnSelect) !== false) {
	            $timeout(function() { element[0].focus(); }, 0, false);
	          }
	        };

	        //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
	        element.bind('keydown', function(evt) {
	          //typeahead is open and an "interesting" key was pressed
	          if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
	            return;
	          }

	          // if there's nothing selected (i.e. focusFirst) and enter or tab is hit, clear the results
	          if (scope.activeIdx === -1 && (evt.which === 9 || evt.which === 13)) {
	            resetMatches();
	            scope.$digest();
	            return;
	          }

	          evt.preventDefault();

	          if (evt.which === 40) {
	            scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
	            scope.$digest();
	          } else if (evt.which === 38) {
	            scope.activeIdx = (scope.activeIdx > 0 ? scope.activeIdx : scope.matches.length) - 1;
	            scope.$digest();
	          } else if (evt.which === 13 || evt.which === 9) {
	            scope.$apply(function () {
	              scope.select(scope.activeIdx);
	            });
	          } else if (evt.which === 27) {
	            evt.stopPropagation();

	            resetMatches();
	            scope.$digest();
	          }
	        });

	        element.bind('blur', function() {
	          if (isSelectOnBlur && scope.matches.length && scope.activeIdx !== -1 && !selected) {
	            selected = true;
	            scope.$apply(function() {
	              scope.select(scope.activeIdx);
	            });
	          }
	          hasFocus = false;
	          selected = false;
	        });

	        // Keep reference to click handler to unbind it.
	        var dismissClickHandler = function(evt) {
	          // Issue #3973
	          // Firefox treats right click as a click on document
	          if (element[0] !== evt.target && evt.which !== 3 && scope.matches.length !== 0) {
	            resetMatches();
	            if (!$rootScope.$$phase) {
	              scope.$digest();
	            }
	          }
	        };

	        $document.bind('click', dismissClickHandler);

	        originalScope.$on('$destroy', function() {
	          $document.unbind('click', dismissClickHandler);
	          if (appendToBody || appendToElementId) {
	            $popup.remove();
	          }

	          if (appendToBody) {
	            angular.element($window).unbind('resize', fireRecalculating);
	            $document.find('body').unbind('scroll', fireRecalculating);
	          }
	          // Prevent jQuery cache memory leak
	          popUpEl.remove();
	        });

	        var $popup = $compile(popUpEl)(scope);

	        if (appendToBody) {
	          $document.find('body').append($popup);
	        } else if (appendToElementId !== false) {
	          angular.element($document[0].getElementById(appendToElementId)).append($popup);
	        } else {
	          element.after($popup);
	        }
	      }
	    };
	  }])
	  
	  .directive('typeaheadPopup', ['$typeaheadSuppressWarning', '$log', function($typeaheadSuppressWarning, $log) {
	    return {
	      scope: {
	        matches: '=',
	        query: '=',
	        active: '=',
	        position: '&',
	        moveInProgress: '=',
	        select: '&'
	      },
	      replace: true,
	      templateUrl: function(element, attrs) {
	        return attrs.popupTemplateUrl || 'template/typeahead/typeahead-popup.html';
	      },
	      link: function(scope, element, attrs) {
	        
	        if (!$typeaheadSuppressWarning) {
	          $log.warn('typeahead-popup is now deprecated. Use uib-typeahead-popup instead.');
	        }
	        scope.templateUrl = attrs.templateUrl;

	        scope.isOpen = function() {
	          return scope.matches.length > 0;
	        };

	        scope.isActive = function(matchIdx) {
	          return scope.active == matchIdx;
	        };

	        scope.selectActive = function(matchIdx) {
	          scope.active = matchIdx;
	        };

	        scope.selectMatch = function(activeIdx) {
	          scope.select({activeIdx:activeIdx});
	        };
	      }
	    };
	  }])
	  
	  .directive('typeaheadMatch', ['$templateRequest', '$compile', '$parse', '$typeaheadSuppressWarning', '$log', function($templateRequest, $compile, $parse, $typeaheadSuppressWarning, $log) {
	    return {
	      restrict: 'EA',
	      scope: {
	        index: '=',
	        match: '=',
	        query: '='
	      },
	      link:function(scope, element, attrs) {
	        if (!$typeaheadSuppressWarning) {
	          $log.warn('typeahead-match is now deprecated. Use uib-typeahead-match instead.');
	        }

	        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'template/typeahead/typeahead-match.html';
	        $templateRequest(tplUrl).then(function(tplContent) {
	          $compile(tplContent.trim())(scope, function(clonedElement) {
	            element.replaceWith(clonedElement);
	          });
	        });
	      }
	    };
	  }])
	  
	  .filter('typeaheadHighlight', ['$sce', '$injector', '$log', '$typeaheadSuppressWarning', function($sce, $injector, $log, $typeaheadSuppressWarning) {
	    var isSanitizePresent;
	    isSanitizePresent = $injector.has('$sanitize');

	    function escapeRegexp(queryToEscape) {
	      // Regex: capture the whole query string and replace it with the string that will be used to match
	      // the results, for example if the capture is "a" the result will be \a
	      return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	    }

	    function containsHtml(matchItem) {
	      return /<.*>/g.test(matchItem);
	    }

	    return function(matchItem, query) {
	      if (!$typeaheadSuppressWarning) {
	        $log.warn('typeaheadHighlight is now deprecated. Use uibTypeaheadHighlight instead.');
	      }

	      if (!isSanitizePresent && containsHtml(matchItem)) {
	        $log.warn('Unsafe use of typeahead please use ngSanitize'); // Warn the user about the danger
	      }

	      matchItem = query? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem; // Replaces the capture string with a the same string inside of a "strong" tag
	      if (!isSanitizePresent) {
	        matchItem = $sce.trustAsHtml(matchItem); // If $sanitize is not present we pack the string in a $sce object for the ng-bind-html directive
	      }

	      return matchItem;
	    };
	  }]);

	angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/accordion/accordion-group.html",
	    "<div class=\"panel {{panelClass || 'panel-default'}}\">\n" +
	    "  <div class=\"panel-heading\" ng-keypress=\"toggleOpen($event)\">\n" +
	    "    <h4 class=\"panel-title\">\n" +
	    "      <a href tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" uib-accordion-transclude=\"heading\"><span ng-class=\"{'text-muted': isDisabled}\">{{heading}}</span></a>\n" +
	    "    </h4>\n" +
	    "  </div>\n" +
	    "  <div class=\"panel-collapse collapse\" uib-collapse=\"!isOpen\">\n" +
	    "	  <div class=\"panel-body\" ng-transclude></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/accordion/accordion.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/accordion/accordion.html",
	    "<div class=\"panel-group\" ng-transclude></div>");
	}]);

	angular.module("template/alert/alert.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/alert/alert.html",
	    "<div class=\"alert\" ng-class=\"['alert-' + (type || 'warning'), closeable ? 'alert-dismissible' : null]\" role=\"alert\">\n" +
	    "    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close({$event: $event})\">\n" +
	    "        <span aria-hidden=\"true\">&times;</span>\n" +
	    "        <span class=\"sr-only\">Close</span>\n" +
	    "    </button>\n" +
	    "    <div ng-transclude></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/carousel/carousel.html",
	    "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" +
	    "  <div class=\"carousel-inner\" ng-transclude></div>\n" +
	    "  <a role=\"button\" href class=\"left carousel-control\" ng-click=\"prev()\" ng-show=\"slides.length > 1\">\n" +
	    "    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left\"></span>\n" +
	    "    <span class=\"sr-only\">previous</span>\n" +
	    "  </a>\n" +
	    "  <a role=\"button\" href class=\"right carousel-control\" ng-click=\"next()\" ng-show=\"slides.length > 1\">\n" +
	    "    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
	    "    <span class=\"sr-only\">next</span>\n" +
	    "  </a>\n" +
	    "  <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" +
	    "    <li ng-repeat=\"slide in slides | orderBy:indexOfSlide track by $index\" ng-class=\"{ active: isActive(slide) }\" ng-click=\"select(slide)\">\n" +
	    "      <span class=\"sr-only\">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if=\"isActive(slide)\">, currently active</span></span>\n" +
	    "    </li>\n" +
	    "  </ol>\n" +
	    "</div>");
	}]);

	angular.module("template/carousel/slide.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/carousel/slide.html",
	    "<div ng-class=\"{\n" +
	    "    'active': active\n" +
	    "  }\" class=\"item text-center\" ng-transclude></div>\n" +
	    "");
	}]);

	angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/datepicker/datepicker.html",
	    "<div ng-switch=\"datepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\n" +
	    "  <uib-daypicker ng-switch-when=\"day\" tabindex=\"0\"></uib-daypicker>\n" +
	    "  <uib-monthpicker ng-switch-when=\"month\" tabindex=\"0\"></uib-monthpicker>\n" +
	    "  <uib-yearpicker ng-switch-when=\"year\" tabindex=\"0\"></uib-yearpicker>\n" +
	    "</div>");
	}]);

	angular.module("template/datepicker/day.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/datepicker/day.html",
	    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th colspan=\"{{::5 + showWeeks}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "    <tr>\n" +
	    "      <th ng-if=\"showWeeks\" class=\"text-center\"></th>\n" +
	    "      <th ng-repeat=\"label in ::labels track by $index\" class=\"text-center\"><small aria-label=\"{{::label.full}}\">{{::label.abbr}}</small></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-if=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" +
	    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" ng-class=\"::dt.customClass\">\n" +
	    "        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default btn-sm\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"::{'text-muted': dt.secondary, 'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("template/datepicker/month.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/datepicker/month.html",
	    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" ng-class=\"::dt.customClass\">\n" +
	    "        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("template/datepicker/popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/datepicker/popup.html",
	    "<ul class=\"dropdown-menu\" dropdown-nested ng-if=\"isOpen\" style=\"display: block\" ng-style=\"{top: position.top+'px', left: position.left+'px'}\" ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">\n" +
	    "	<li ng-transclude></li>\n" +
	    "	<li ng-if=\"showButtonBar\" style=\"padding:10px 9px 2px\">\n" +
	    "		<span class=\"btn-group pull-left\">\n" +
	    "			<button type=\"button\" class=\"btn btn-sm btn-info\" ng-click=\"select('today')\" ng-disabled=\"isDisabled('today')\">{{ getText('current') }}</button>\n" +
	    "			<button type=\"button\" class=\"btn btn-sm btn-danger\" ng-click=\"select(null)\">{{ getText('clear') }}</button>\n" +
	    "		</span>\n" +
	    "		<button type=\"button\" class=\"btn btn-sm btn-success pull-right\" ng-click=\"close()\">{{ getText('close') }}</button>\n" +
	    "	</li>\n" +
	    "</ul>\n" +
	    "");
	}]);

	angular.module("template/datepicker/year.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/datepicker/year.html",
	    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th colspan=\"3\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" ng-class=\"::dt.customClass\">\n" +
	    "        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("template/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/modal/backdrop.html",
	    "<div uib-modal-animation-class=\"fade\"\n" +
	    "     modal-in-class=\"in\"\n" +
	    "     ng-style=\"{'z-index': 1040 + (index && 1 || 0) + index*10}\"\n" +
	    "></div>\n" +
	    "");
	}]);

	angular.module("template/modal/window.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/modal/window.html",
	    "<div modal-render=\"{{$isRendered}}\" tabindex=\"-1\" role=\"dialog\" class=\"modal\"\n" +
	    "    uib-modal-animation-class=\"fade\"\n" +
	    "    modal-in-class=\"in\"\n" +
	    "    ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\">\n" +
	    "    <div class=\"modal-dialog\" ng-class=\"size ? 'modal-' + size : ''\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/pagination/pager.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/pagination/pager.html",
	    "<ul class=\"pager\">\n" +
	    "  <li ng-class=\"{disabled: noPrevious()||ngDisabled, previous: align}\"><a href ng-click=\"selectPage(page - 1, $event)\">{{::getText('previous')}}</a></li>\n" +
	    "  <li ng-class=\"{disabled: noNext()||ngDisabled, next: align}\"><a href ng-click=\"selectPage(page + 1, $event)\">{{::getText('next')}}</a></li>\n" +
	    "</ul>\n" +
	    "");
	}]);

	angular.module("template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/pagination/pagination.html",
	    "<ul class=\"pagination\">\n" +
	    "  <li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-first\"><a href ng-click=\"selectPage(1, $event)\">{{::getText('first')}}</a></li>\n" +
	    "  <li ng-if=\"::directionLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-prev\"><a href ng-click=\"selectPage(page - 1, $event)\">{{::getText('previous')}}</a></li>\n" +
	    "  <li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active,disabled: ngDisabled&&!page.active}\" class=\"pagination-page\"><a href ng-click=\"selectPage(page.number, $event)\">{{page.text}}</a></li>\n" +
	    "  <li ng-if=\"::directionLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-next\"><a href ng-click=\"selectPage(page + 1, $event)\">{{::getText('next')}}</a></li>\n" +
	    "  <li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-last\"><a href ng-click=\"selectPage(totalPages, $event)\">{{::getText('last')}}</a></li>\n" +
	    "</ul>\n" +
	    "");
	}]);

	angular.module("template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tooltip/tooltip-html-popup.html",
	    "<div\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\" ng-bind-html=\"contentExp()\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tooltip/tooltip-popup.html",
	    "<div\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tooltip/tooltip-template-popup.html",
	    "<div\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\"\n" +
	    "    uib-tooltip-template-transclude=\"contentExp()\"\n" +
	    "    tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/popover/popover-html.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/popover/popover-html.html",
	    "<div tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"arrow\"></div>\n" +
	    "\n" +
	    "  <div class=\"popover-inner\">\n" +
	    "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\n" +
	    "      <div class=\"popover-content\" ng-bind-html=\"contentExp()\"></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/popover/popover-template.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/popover/popover-template.html",
	    "<div tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"arrow\"></div>\n" +
	    "\n" +
	    "  <div class=\"popover-inner\">\n" +
	    "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\n" +
	    "      <div class=\"popover-content\"\n" +
	    "        uib-tooltip-template-transclude=\"contentExp()\"\n" +
	    "        tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/popover/popover.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/popover/popover.html",
	    "<div tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"arrow\"></div>\n" +
	    "\n" +
	    "  <div class=\"popover-inner\">\n" +
	    "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\n" +
	    "      <div class=\"popover-content\" ng-bind=\"content\"></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/progressbar/bar.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/progressbar/bar.html",
	    "<div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\" style=\"min-width: 0;\" ng-transclude></div>\n" +
	    "");
	}]);

	angular.module("template/progressbar/progress.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/progressbar/progress.html",
	    "<div class=\"progress\" ng-transclude aria-labelledby=\"{{::title}}\"></div>");
	}]);

	angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/progressbar/progressbar.html",
	    "<div class=\"progress\">\n" +
	    "  <div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\" style=\"min-width: 0;\" ng-transclude></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/rating/rating.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/rating/rating.html",
	    "<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\">\n" +
	    "    <span ng-repeat-start=\"r in range track by $index\" class=\"sr-only\">({{ $index < value ? '*' : ' ' }})</span>\n" +
	    "    <i ng-repeat-end ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || 'glyphicon-star') || (r.stateOff || 'glyphicon-star-empty')\" ng-attr-title=\"{{r.title}}\" aria-valuetext=\"{{r.title}}\"></i>\n" +
	    "</span>\n" +
	    "");
	}]);

	angular.module("template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tabs/tab.html",
	    "<li ng-class=\"{active: active, disabled: disabled}\">\n" +
	    "  <a href ng-click=\"select()\" uib-tab-heading-transclude>{{heading}}</a>\n" +
	    "</li>\n" +
	    "");
	}]);

	angular.module("template/tabs/tabset.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tabs/tabset.html",
	    "<div>\n" +
	    "  <ul class=\"nav nav-{{type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" +
	    "  <div class=\"tab-content\">\n" +
	    "    <div class=\"tab-pane\" \n" +
	    "         ng-repeat=\"tab in tabs\" \n" +
	    "         ng-class=\"{active: tab.active}\"\n" +
	    "         uib-tab-content-transclude=\"tab\">\n" +
	    "    </div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/timepicker/timepicker.html",
	    "<table>\n" +
	    "  <tbody>\n" +
	    "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
	    "      <td><a ng-click=\"incrementHours()\" ng-class=\"{disabled: noIncrementHours()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementHours()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
	    "      <td>&nbsp;</td>\n" +
	    "      <td><a ng-click=\"incrementMinutes()\" ng-class=\"{disabled: noIncrementMinutes()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementMinutes()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
	    "      <td ng-show=\"showMeridian\"></td>\n" +
	    "    </tr>\n" +
	    "    <tr>\n" +
	    "      <td class=\"form-group\" ng-class=\"{'has-error': invalidHours}\">\n" +
	    "        <input style=\"width:50px;\" type=\"text\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\">\n" +
	    "      </td>\n" +
	    "      <td>:</td>\n" +
	    "      <td class=\"form-group\" ng-class=\"{'has-error': invalidMinutes}\">\n" +
	    "        <input style=\"width:50px;\" type=\"text\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\">\n" +
	    "      </td>\n" +
	    "      <td ng-show=\"showMeridian\"><button type=\"button\" ng-class=\"{disabled: noToggleMeridian()}\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\" ng-disabled=\"noToggleMeridian()\" tabindex=\"{{::tabindex}}\">{{meridian}}</button></td>\n" +
	    "    </tr>\n" +
	    "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
	    "      <td><a ng-click=\"decrementHours()\" ng-class=\"{disabled: noDecrementHours()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementHours()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
	    "      <td>&nbsp;</td>\n" +
	    "      <td><a ng-click=\"decrementMinutes()\" ng-class=\"{disabled: noDecrementMinutes()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementMinutes()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
	    "      <td ng-show=\"showMeridian\"></td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/typeahead/typeahead-match.html",
	    "<a href tabindex=\"-1\" ng-bind-html=\"match.label | uibTypeaheadHighlight:query\"></a>\n" +
	    "");
	}]);

	angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/typeahead/typeahead-popup.html",
	    "<ul class=\"dropdown-menu\" ng-show=\"isOpen() && !moveInProgress\" ng-style=\"{top: position().top+'px', left: position().left+'px'}\" style=\"display: block;\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\n" +
	    "    <li ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index)\" role=\"option\" id=\"{{::match.id}}\">\n" +
	    "        <div uib-typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\n" +
	    "    </li>\n" +
	    "</ul>\n" +
	    "");
	}]);
	!angular.$$csp() && angular.element(document).find('head').prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');if(true)module.exports='ui.bootstrap';

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	module.exports = 'ngAnimate';


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * @license AngularJS v1.5.6
	 * (c) 2010-2016 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	(function(window, angular) {'use strict';

	/* jshint ignore:start */
	var noop        = angular.noop;
	var copy        = angular.copy;
	var extend      = angular.extend;
	var jqLite      = angular.element;
	var forEach     = angular.forEach;
	var isArray     = angular.isArray;
	var isString    = angular.isString;
	var isObject    = angular.isObject;
	var isUndefined = angular.isUndefined;
	var isDefined   = angular.isDefined;
	var isFunction  = angular.isFunction;
	var isElement   = angular.isElement;

	var ELEMENT_NODE = 1;
	var COMMENT_NODE = 8;

	var ADD_CLASS_SUFFIX = '-add';
	var REMOVE_CLASS_SUFFIX = '-remove';
	var EVENT_CLASS_PREFIX = 'ng-';
	var ACTIVE_CLASS_SUFFIX = '-active';
	var PREPARE_CLASS_SUFFIX = '-prepare';

	var NG_ANIMATE_CLASSNAME = 'ng-animate';
	var NG_ANIMATE_CHILDREN_DATA = '$$ngAnimateChildren';

	// Detect proper transitionend/animationend event names.
	var CSS_PREFIX = '', TRANSITION_PROP, TRANSITIONEND_EVENT, ANIMATION_PROP, ANIMATIONEND_EVENT;

	// If unprefixed events are not supported but webkit-prefixed are, use the latter.
	// Otherwise, just use W3C names, browsers not supporting them at all will just ignore them.
	// Note: Chrome implements `window.onwebkitanimationend` and doesn't implement `window.onanimationend`
	// but at the same time dispatches the `animationend` event and not `webkitAnimationEnd`.
	// Register both events in case `window.onanimationend` is not supported because of that,
	// do the same for `transitionend` as Safari is likely to exhibit similar behavior.
	// Also, the only modern browser that uses vendor prefixes for transitions/keyframes is webkit
	// therefore there is no reason to test anymore for other vendor prefixes:
	// http://caniuse.com/#search=transition
	if (isUndefined(window.ontransitionend) && isDefined(window.onwebkittransitionend)) {
	  CSS_PREFIX = '-webkit-';
	  TRANSITION_PROP = 'WebkitTransition';
	  TRANSITIONEND_EVENT = 'webkitTransitionEnd transitionend';
	} else {
	  TRANSITION_PROP = 'transition';
	  TRANSITIONEND_EVENT = 'transitionend';
	}

	if (isUndefined(window.onanimationend) && isDefined(window.onwebkitanimationend)) {
	  CSS_PREFIX = '-webkit-';
	  ANIMATION_PROP = 'WebkitAnimation';
	  ANIMATIONEND_EVENT = 'webkitAnimationEnd animationend';
	} else {
	  ANIMATION_PROP = 'animation';
	  ANIMATIONEND_EVENT = 'animationend';
	}

	var DURATION_KEY = 'Duration';
	var PROPERTY_KEY = 'Property';
	var DELAY_KEY = 'Delay';
	var TIMING_KEY = 'TimingFunction';
	var ANIMATION_ITERATION_COUNT_KEY = 'IterationCount';
	var ANIMATION_PLAYSTATE_KEY = 'PlayState';
	var SAFE_FAST_FORWARD_DURATION_VALUE = 9999;

	var ANIMATION_DELAY_PROP = ANIMATION_PROP + DELAY_KEY;
	var ANIMATION_DURATION_PROP = ANIMATION_PROP + DURATION_KEY;
	var TRANSITION_DELAY_PROP = TRANSITION_PROP + DELAY_KEY;
	var TRANSITION_DURATION_PROP = TRANSITION_PROP + DURATION_KEY;

	var isPromiseLike = function(p) {
	  return p && p.then ? true : false;
	};

	var ngMinErr = angular.$$minErr('ng');
	function assertArg(arg, name, reason) {
	  if (!arg) {
	    throw ngMinErr('areq', "Argument '{0}' is {1}", (name || '?'), (reason || "required"));
	  }
	  return arg;
	}

	function mergeClasses(a,b) {
	  if (!a && !b) return '';
	  if (!a) return b;
	  if (!b) return a;
	  if (isArray(a)) a = a.join(' ');
	  if (isArray(b)) b = b.join(' ');
	  return a + ' ' + b;
	}

	function packageStyles(options) {
	  var styles = {};
	  if (options && (options.to || options.from)) {
	    styles.to = options.to;
	    styles.from = options.from;
	  }
	  return styles;
	}

	function pendClasses(classes, fix, isPrefix) {
	  var className = '';
	  classes = isArray(classes)
	      ? classes
	      : classes && isString(classes) && classes.length
	          ? classes.split(/\s+/)
	          : [];
	  forEach(classes, function(klass, i) {
	    if (klass && klass.length > 0) {
	      className += (i > 0) ? ' ' : '';
	      className += isPrefix ? fix + klass
	                            : klass + fix;
	    }
	  });
	  return className;
	}

	function removeFromArray(arr, val) {
	  var index = arr.indexOf(val);
	  if (val >= 0) {
	    arr.splice(index, 1);
	  }
	}

	function stripCommentsFromElement(element) {
	  if (element instanceof jqLite) {
	    switch (element.length) {
	      case 0:
	        return element;
	        break;

	      case 1:
	        // there is no point of stripping anything if the element
	        // is the only element within the jqLite wrapper.
	        // (it's important that we retain the element instance.)
	        if (element[0].nodeType === ELEMENT_NODE) {
	          return element;
	        }
	        break;

	      default:
	        return jqLite(extractElementNode(element));
	        break;
	    }
	  }

	  if (element.nodeType === ELEMENT_NODE) {
	    return jqLite(element);
	  }
	}

	function extractElementNode(element) {
	  if (!element[0]) return element;
	  for (var i = 0; i < element.length; i++) {
	    var elm = element[i];
	    if (elm.nodeType == ELEMENT_NODE) {
	      return elm;
	    }
	  }
	}

	function $$addClass($$jqLite, element, className) {
	  forEach(element, function(elm) {
	    $$jqLite.addClass(elm, className);
	  });
	}

	function $$removeClass($$jqLite, element, className) {
	  forEach(element, function(elm) {
	    $$jqLite.removeClass(elm, className);
	  });
	}

	function applyAnimationClassesFactory($$jqLite) {
	  return function(element, options) {
	    if (options.addClass) {
	      $$addClass($$jqLite, element, options.addClass);
	      options.addClass = null;
	    }
	    if (options.removeClass) {
	      $$removeClass($$jqLite, element, options.removeClass);
	      options.removeClass = null;
	    }
	  }
	}

	function prepareAnimationOptions(options) {
	  options = options || {};
	  if (!options.$$prepared) {
	    var domOperation = options.domOperation || noop;
	    options.domOperation = function() {
	      options.$$domOperationFired = true;
	      domOperation();
	      domOperation = noop;
	    };
	    options.$$prepared = true;
	  }
	  return options;
	}

	function applyAnimationStyles(element, options) {
	  applyAnimationFromStyles(element, options);
	  applyAnimationToStyles(element, options);
	}

	function applyAnimationFromStyles(element, options) {
	  if (options.from) {
	    element.css(options.from);
	    options.from = null;
	  }
	}

	function applyAnimationToStyles(element, options) {
	  if (options.to) {
	    element.css(options.to);
	    options.to = null;
	  }
	}

	function mergeAnimationDetails(element, oldAnimation, newAnimation) {
	  var target = oldAnimation.options || {};
	  var newOptions = newAnimation.options || {};

	  var toAdd = (target.addClass || '') + ' ' + (newOptions.addClass || '');
	  var toRemove = (target.removeClass || '') + ' ' + (newOptions.removeClass || '');
	  var classes = resolveElementClasses(element.attr('class'), toAdd, toRemove);

	  if (newOptions.preparationClasses) {
	    target.preparationClasses = concatWithSpace(newOptions.preparationClasses, target.preparationClasses);
	    delete newOptions.preparationClasses;
	  }

	  // noop is basically when there is no callback; otherwise something has been set
	  var realDomOperation = target.domOperation !== noop ? target.domOperation : null;

	  extend(target, newOptions);

	  // TODO(matsko or sreeramu): proper fix is to maintain all animation callback in array and call at last,but now only leave has the callback so no issue with this.
	  if (realDomOperation) {
	    target.domOperation = realDomOperation;
	  }

	  if (classes.addClass) {
	    target.addClass = classes.addClass;
	  } else {
	    target.addClass = null;
	  }

	  if (classes.removeClass) {
	    target.removeClass = classes.removeClass;
	  } else {
	    target.removeClass = null;
	  }

	  oldAnimation.addClass = target.addClass;
	  oldAnimation.removeClass = target.removeClass;

	  return target;
	}

	function resolveElementClasses(existing, toAdd, toRemove) {
	  var ADD_CLASS = 1;
	  var REMOVE_CLASS = -1;

	  var flags = {};
	  existing = splitClassesToLookup(existing);

	  toAdd = splitClassesToLookup(toAdd);
	  forEach(toAdd, function(value, key) {
	    flags[key] = ADD_CLASS;
	  });

	  toRemove = splitClassesToLookup(toRemove);
	  forEach(toRemove, function(value, key) {
	    flags[key] = flags[key] === ADD_CLASS ? null : REMOVE_CLASS;
	  });

	  var classes = {
	    addClass: '',
	    removeClass: ''
	  };

	  forEach(flags, function(val, klass) {
	    var prop, allow;
	    if (val === ADD_CLASS) {
	      prop = 'addClass';
	      allow = !existing[klass];
	    } else if (val === REMOVE_CLASS) {
	      prop = 'removeClass';
	      allow = existing[klass];
	    }
	    if (allow) {
	      if (classes[prop].length) {
	        classes[prop] += ' ';
	      }
	      classes[prop] += klass;
	    }
	  });

	  function splitClassesToLookup(classes) {
	    if (isString(classes)) {
	      classes = classes.split(' ');
	    }

	    var obj = {};
	    forEach(classes, function(klass) {
	      // sometimes the split leaves empty string values
	      // incase extra spaces were applied to the options
	      if (klass.length) {
	        obj[klass] = true;
	      }
	    });
	    return obj;
	  }

	  return classes;
	}

	function getDomNode(element) {
	  return (element instanceof angular.element) ? element[0] : element;
	}

	function applyGeneratedPreparationClasses(element, event, options) {
	  var classes = '';
	  if (event) {
	    classes = pendClasses(event, EVENT_CLASS_PREFIX, true);
	  }
	  if (options.addClass) {
	    classes = concatWithSpace(classes, pendClasses(options.addClass, ADD_CLASS_SUFFIX));
	  }
	  if (options.removeClass) {
	    classes = concatWithSpace(classes, pendClasses(options.removeClass, REMOVE_CLASS_SUFFIX));
	  }
	  if (classes.length) {
	    options.preparationClasses = classes;
	    element.addClass(classes);
	  }
	}

	function clearGeneratedClasses(element, options) {
	  if (options.preparationClasses) {
	    element.removeClass(options.preparationClasses);
	    options.preparationClasses = null;
	  }
	  if (options.activeClasses) {
	    element.removeClass(options.activeClasses);
	    options.activeClasses = null;
	  }
	}

	function blockTransitions(node, duration) {
	  // we use a negative delay value since it performs blocking
	  // yet it doesn't kill any existing transitions running on the
	  // same element which makes this safe for class-based animations
	  var value = duration ? '-' + duration + 's' : '';
	  applyInlineStyle(node, [TRANSITION_DELAY_PROP, value]);
	  return [TRANSITION_DELAY_PROP, value];
	}

	function blockKeyframeAnimations(node, applyBlock) {
	  var value = applyBlock ? 'paused' : '';
	  var key = ANIMATION_PROP + ANIMATION_PLAYSTATE_KEY;
	  applyInlineStyle(node, [key, value]);
	  return [key, value];
	}

	function applyInlineStyle(node, styleTuple) {
	  var prop = styleTuple[0];
	  var value = styleTuple[1];
	  node.style[prop] = value;
	}

	function concatWithSpace(a,b) {
	  if (!a) return b;
	  if (!b) return a;
	  return a + ' ' + b;
	}

	var $$rAFSchedulerFactory = ['$$rAF', function($$rAF) {
	  var queue, cancelFn;

	  function scheduler(tasks) {
	    // we make a copy since RAFScheduler mutates the state
	    // of the passed in array variable and this would be difficult
	    // to track down on the outside code
	    queue = queue.concat(tasks);
	    nextTick();
	  }

	  queue = scheduler.queue = [];

	  /* waitUntilQuiet does two things:
	   * 1. It will run the FINAL `fn` value only when an uncanceled RAF has passed through
	   * 2. It will delay the next wave of tasks from running until the quiet `fn` has run.
	   *
	   * The motivation here is that animation code can request more time from the scheduler
	   * before the next wave runs. This allows for certain DOM properties such as classes to
	   * be resolved in time for the next animation to run.
	   */
	  scheduler.waitUntilQuiet = function(fn) {
	    if (cancelFn) cancelFn();

	    cancelFn = $$rAF(function() {
	      cancelFn = null;
	      fn();
	      nextTick();
	    });
	  };

	  return scheduler;

	  function nextTick() {
	    if (!queue.length) return;

	    var items = queue.shift();
	    for (var i = 0; i < items.length; i++) {
	      items[i]();
	    }

	    if (!cancelFn) {
	      $$rAF(function() {
	        if (!cancelFn) nextTick();
	      });
	    }
	  }
	}];

	/**
	 * @ngdoc directive
	 * @name ngAnimateChildren
	 * @restrict AE
	 * @element ANY
	 *
	 * @description
	 *
	 * ngAnimateChildren allows you to specify that children of this element should animate even if any
	 * of the children's parents are currently animating. By default, when an element has an active `enter`, `leave`, or `move`
	 * (structural) animation, child elements that also have an active structural animation are not animated.
	 *
	 * Note that even if `ngAnimteChildren` is set, no child animations will run when the parent element is removed from the DOM (`leave` animation).
	 *
	 *
	 * @param {string} ngAnimateChildren If the value is empty, `true` or `on`,
	 *     then child animations are allowed. If the value is `false`, child animations are not allowed.
	 *
	 * @example
	 * <example module="ngAnimateChildren" name="ngAnimateChildren" deps="angular-animate.js" animations="true">
	     <file name="index.html">
	       <div ng-controller="mainController as main">
	         <label>Show container? <input type="checkbox" ng-model="main.enterElement" /></label>
	         <label>Animate children? <input type="checkbox" ng-model="main.animateChildren" /></label>
	         <hr>
	         <div ng-animate-children="{{main.animateChildren}}">
	           <div ng-if="main.enterElement" class="container">
	             List of items:
	             <div ng-repeat="item in [0, 1, 2, 3]" class="item">Item {{item}}</div>
	           </div>
	         </div>
	       </div>
	     </file>
	     <file name="animations.css">

	      .container.ng-enter,
	      .container.ng-leave {
	        transition: all ease 1.5s;
	      }

	      .container.ng-enter,
	      .container.ng-leave-active {
	        opacity: 0;
	      }

	      .container.ng-leave,
	      .container.ng-enter-active {
	        opacity: 1;
	      }

	      .item {
	        background: firebrick;
	        color: #FFF;
	        margin-bottom: 10px;
	      }

	      .item.ng-enter,
	      .item.ng-leave {
	        transition: transform 1.5s ease;
	      }

	      .item.ng-enter {
	        transform: translateX(50px);
	      }

	      .item.ng-enter-active {
	        transform: translateX(0);
	      }
	    </file>
	    <file name="script.js">
	      angular.module('ngAnimateChildren', ['ngAnimate'])
	        .controller('mainController', function() {
	          this.animateChildren = false;
	          this.enterElement = false;
	        });
	    </file>
	  </example>
	 */
	var $$AnimateChildrenDirective = ['$interpolate', function($interpolate) {
	  return {
	    link: function(scope, element, attrs) {
	      var val = attrs.ngAnimateChildren;
	      if (angular.isString(val) && val.length === 0) { //empty attribute
	        element.data(NG_ANIMATE_CHILDREN_DATA, true);
	      } else {
	        // Interpolate and set the value, so that it is available to
	        // animations that run right after compilation
	        setData($interpolate(val)(scope));
	        attrs.$observe('ngAnimateChildren', setData);
	      }

	      function setData(value) {
	        value = value === 'on' || value === 'true';
	        element.data(NG_ANIMATE_CHILDREN_DATA, value);
	      }
	    }
	  };
	}];

	var ANIMATE_TIMER_KEY = '$$animateCss';

	/**
	 * @ngdoc service
	 * @name $animateCss
	 * @kind object
	 *
	 * @description
	 * The `$animateCss` service is a useful utility to trigger customized CSS-based transitions/keyframes
	 * from a JavaScript-based animation or directly from a directive. The purpose of `$animateCss` is NOT
	 * to side-step how `$animate` and ngAnimate work, but the goal is to allow pre-existing animations or
	 * directives to create more complex animations that can be purely driven using CSS code.
	 *
	 * Note that only browsers that support CSS transitions and/or keyframe animations are capable of
	 * rendering animations triggered via `$animateCss` (bad news for IE9 and lower).
	 *
	 * ## Usage
	 * Once again, `$animateCss` is designed to be used inside of a registered JavaScript animation that
	 * is powered by ngAnimate. It is possible to use `$animateCss` directly inside of a directive, however,
	 * any automatic control over cancelling animations and/or preventing animations from being run on
	 * child elements will not be handled by Angular. For this to work as expected, please use `$animate` to
	 * trigger the animation and then setup a JavaScript animation that injects `$animateCss` to trigger
	 * the CSS animation.
	 *
	 * The example below shows how we can create a folding animation on an element using `ng-if`:
	 *
	 * ```html
	 * <!-- notice the `fold-animation` CSS class -->
	 * <div ng-if="onOff" class="fold-animation">
	 *   This element will go BOOM
	 * </div>
	 * <button ng-click="onOff=true">Fold In</button>
	 * ```
	 *
	 * Now we create the **JavaScript animation** that will trigger the CSS transition:
	 *
	 * ```js
	 * ngModule.animation('.fold-animation', ['$animateCss', function($animateCss) {
	 *   return {
	 *     enter: function(element, doneFn) {
	 *       var height = element[0].offsetHeight;
	 *       return $animateCss(element, {
	 *         from: { height:'0px' },
	 *         to: { height:height + 'px' },
	 *         duration: 1 // one second
	 *       });
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * ## More Advanced Uses
	 *
	 * `$animateCss` is the underlying code that ngAnimate uses to power **CSS-based animations** behind the scenes. Therefore CSS hooks
	 * like `.ng-EVENT`, `.ng-EVENT-active`, `.ng-EVENT-stagger` are all features that can be triggered using `$animateCss` via JavaScript code.
	 *
	 * This also means that just about any combination of adding classes, removing classes, setting styles, dynamically setting a keyframe animation,
	 * applying a hardcoded duration or delay value, changing the animation easing or applying a stagger animation are all options that work with
	 * `$animateCss`. The service itself is smart enough to figure out the combination of options and examine the element styling properties in order
	 * to provide a working animation that will run in CSS.
	 *
	 * The example below showcases a more advanced version of the `.fold-animation` from the example above:
	 *
	 * ```js
	 * ngModule.animation('.fold-animation', ['$animateCss', function($animateCss) {
	 *   return {
	 *     enter: function(element, doneFn) {
	 *       var height = element[0].offsetHeight;
	 *       return $animateCss(element, {
	 *         addClass: 'red large-text pulse-twice',
	 *         easing: 'ease-out',
	 *         from: { height:'0px' },
	 *         to: { height:height + 'px' },
	 *         duration: 1 // one second
	 *       });
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * Since we're adding/removing CSS classes then the CSS transition will also pick those up:
	 *
	 * ```css
	 * /&#42; since a hardcoded duration value of 1 was provided in the JavaScript animation code,
	 * the CSS classes below will be transitioned despite them being defined as regular CSS classes &#42;/
	 * .red { background:red; }
	 * .large-text { font-size:20px; }
	 *
	 * /&#42; we can also use a keyframe animation and $animateCss will make it work alongside the transition &#42;/
	 * .pulse-twice {
	 *   animation: 0.5s pulse linear 2;
	 *   -webkit-animation: 0.5s pulse linear 2;
	 * }
	 *
	 * @keyframes pulse {
	 *   from { transform: scale(0.5); }
	 *   to { transform: scale(1.5); }
	 * }
	 *
	 * @-webkit-keyframes pulse {
	 *   from { -webkit-transform: scale(0.5); }
	 *   to { -webkit-transform: scale(1.5); }
	 * }
	 * ```
	 *
	 * Given this complex combination of CSS classes, styles and options, `$animateCss` will figure everything out and make the animation happen.
	 *
	 * ## How the Options are handled
	 *
	 * `$animateCss` is very versatile and intelligent when it comes to figuring out what configurations to apply to the element to ensure the animation
	 * works with the options provided. Say for example we were adding a class that contained a keyframe value and we wanted to also animate some inline
	 * styles using the `from` and `to` properties.
	 *
	 * ```js
	 * var animator = $animateCss(element, {
	 *   from: { background:'red' },
	 *   to: { background:'blue' }
	 * });
	 * animator.start();
	 * ```
	 *
	 * ```css
	 * .rotating-animation {
	 *   animation:0.5s rotate linear;
	 *   -webkit-animation:0.5s rotate linear;
	 * }
	 *
	 * @keyframes rotate {
	 *   from { transform: rotate(0deg); }
	 *   to { transform: rotate(360deg); }
	 * }
	 *
	 * @-webkit-keyframes rotate {
	 *   from { -webkit-transform: rotate(0deg); }
	 *   to { -webkit-transform: rotate(360deg); }
	 * }
	 * ```
	 *
	 * The missing pieces here are that we do not have a transition set (within the CSS code nor within the `$animateCss` options) and the duration of the animation is
	 * going to be detected from what the keyframe styles on the CSS class are. In this event, `$animateCss` will automatically create an inline transition
	 * style matching the duration detected from the keyframe style (which is present in the CSS class that is being added) and then prepare both the transition
	 * and keyframe animations to run in parallel on the element. Then when the animation is underway the provided `from` and `to` CSS styles will be applied
	 * and spread across the transition and keyframe animation.
	 *
	 * ## What is returned
	 *
	 * `$animateCss` works in two stages: a preparation phase and an animation phase. Therefore when `$animateCss` is first called it will NOT actually
	 * start the animation. All that is going on here is that the element is being prepared for the animation (which means that the generated CSS classes are
	 * added and removed on the element). Once `$animateCss` is called it will return an object with the following properties:
	 *
	 * ```js
	 * var animator = $animateCss(element, { ... });
	 * ```
	 *
	 * Now what do the contents of our `animator` variable look like:
	 *
	 * ```js
	 * {
	 *   // starts the animation
	 *   start: Function,
	 *
	 *   // ends (aborts) the animation
	 *   end: Function
	 * }
	 * ```
	 *
	 * To actually start the animation we need to run `animation.start()` which will then return a promise that we can hook into to detect when the animation ends.
	 * If we choose not to run the animation then we MUST run `animation.end()` to perform a cleanup on the element (since some CSS classes and styles may have been
	 * applied to the element during the preparation phase). Note that all other properties such as duration, delay, transitions and keyframes are just properties
	 * and that changing them will not reconfigure the parameters of the animation.
	 *
	 * ### runner.done() vs runner.then()
	 * It is documented that `animation.start()` will return a promise object and this is true, however, there is also an additional method available on the
	 * runner called `.done(callbackFn)`. The done method works the same as `.finally(callbackFn)`, however, it does **not trigger a digest to occur**.
	 * Therefore, for performance reasons, it's always best to use `runner.done(callback)` instead of `runner.then()`, `runner.catch()` or `runner.finally()`
	 * unless you really need a digest to kick off afterwards.
	 *
	 * Keep in mind that, to make this easier, ngAnimate has tweaked the JS animations API to recognize when a runner instance is returned from $animateCss
	 * (so there is no need to call `runner.done(doneFn)` inside of your JavaScript animation code).
	 * Check the {@link ngAnimate.$animateCss#usage animation code above} to see how this works.
	 *
	 * @param {DOMElement} element the element that will be animated
	 * @param {object} options the animation-related options that will be applied during the animation
	 *
	 * * `event` - The DOM event (e.g. enter, leave, move). When used, a generated CSS class of `ng-EVENT` and `ng-EVENT-active` will be applied
	 * to the element during the animation. Multiple events can be provided when spaces are used as a separator. (Note that this will not perform any DOM operation.)
	 * * `structural` - Indicates that the `ng-` prefix will be added to the event class. Setting to `false` or omitting will turn `ng-EVENT` and
	 * `ng-EVENT-active` in `EVENT` and `EVENT-active`. Unused if `event` is omitted.
	 * * `easing` - The CSS easing value that will be applied to the transition or keyframe animation (or both).
	 * * `transitionStyle` - The raw CSS transition style that will be used (e.g. `1s linear all`).
	 * * `keyframeStyle` - The raw CSS keyframe animation style that will be used (e.g. `1s my_animation linear`).
	 * * `from` - The starting CSS styles (a key/value object) that will be applied at the start of the animation.
	 * * `to` - The ending CSS styles (a key/value object) that will be applied across the animation via a CSS transition.
	 * * `addClass` - A space separated list of CSS classes that will be added to the element and spread across the animation.
	 * * `removeClass` - A space separated list of CSS classes that will be removed from the element and spread across the animation.
	 * * `duration` - A number value representing the total duration of the transition and/or keyframe (note that a value of 1 is 1000ms). If a value of `0`
	 * is provided then the animation will be skipped entirely.
	 * * `delay` - A number value representing the total delay of the transition and/or keyframe (note that a value of 1 is 1000ms). If a value of `true` is
	 * used then whatever delay value is detected from the CSS classes will be mirrored on the elements styles (e.g. by setting delay true then the style value
	 * of the element will be `transition-delay: DETECTED_VALUE`). Using `true` is useful when you want the CSS classes and inline styles to all share the same
	 * CSS delay value.
	 * * `stagger` - A numeric time value representing the delay between successively animated elements
	 * ({@link ngAnimate#css-staggering-animations Click here to learn how CSS-based staggering works in ngAnimate.})
	 * * `staggerIndex` - The numeric index representing the stagger item (e.g. a value of 5 is equal to the sixth item in the stagger; therefore when a
	 *   `stagger` option value of `0.1` is used then there will be a stagger delay of `600ms`)
	 * * `applyClassesEarly` - Whether or not the classes being added or removed will be used when detecting the animation. This is set by `$animate` when enter/leave/move animations are fired to ensure that the CSS classes are resolved in time. (Note that this will prevent any transitions from occurring on the classes being added and removed.)
	 * * `cleanupStyles` - Whether or not the provided `from` and `to` styles will be removed once
	 *    the animation is closed. This is useful for when the styles are used purely for the sake of
	 *    the animation and do not have a lasting visual effect on the element (e.g. a collapse and open animation).
	 *    By default this value is set to `false`.
	 *
	 * @return {object} an object with start and end methods and details about the animation.
	 *
	 * * `start` - The method to start the animation. This will return a `Promise` when called.
	 * * `end` - This method will cancel the animation and remove all applied CSS classes and styles.
	 */
	var ONE_SECOND = 1000;
	var BASE_TEN = 10;

	var ELAPSED_TIME_MAX_DECIMAL_PLACES = 3;
	var CLOSING_TIME_BUFFER = 1.5;

	var DETECT_CSS_PROPERTIES = {
	  transitionDuration:      TRANSITION_DURATION_PROP,
	  transitionDelay:         TRANSITION_DELAY_PROP,
	  transitionProperty:      TRANSITION_PROP + PROPERTY_KEY,
	  animationDuration:       ANIMATION_DURATION_PROP,
	  animationDelay:          ANIMATION_DELAY_PROP,
	  animationIterationCount: ANIMATION_PROP + ANIMATION_ITERATION_COUNT_KEY
	};

	var DETECT_STAGGER_CSS_PROPERTIES = {
	  transitionDuration:      TRANSITION_DURATION_PROP,
	  transitionDelay:         TRANSITION_DELAY_PROP,
	  animationDuration:       ANIMATION_DURATION_PROP,
	  animationDelay:          ANIMATION_DELAY_PROP
	};

	function getCssKeyframeDurationStyle(duration) {
	  return [ANIMATION_DURATION_PROP, duration + 's'];
	}

	function getCssDelayStyle(delay, isKeyframeAnimation) {
	  var prop = isKeyframeAnimation ? ANIMATION_DELAY_PROP : TRANSITION_DELAY_PROP;
	  return [prop, delay + 's'];
	}

	function computeCssStyles($window, element, properties) {
	  var styles = Object.create(null);
	  var detectedStyles = $window.getComputedStyle(element) || {};
	  forEach(properties, function(formalStyleName, actualStyleName) {
	    var val = detectedStyles[formalStyleName];
	    if (val) {
	      var c = val.charAt(0);

	      // only numerical-based values have a negative sign or digit as the first value
	      if (c === '-' || c === '+' || c >= 0) {
	        val = parseMaxTime(val);
	      }

	      // by setting this to null in the event that the delay is not set or is set directly as 0
	      // then we can still allow for negative values to be used later on and not mistake this
	      // value for being greater than any other negative value.
	      if (val === 0) {
	        val = null;
	      }
	      styles[actualStyleName] = val;
	    }
	  });

	  return styles;
	}

	function parseMaxTime(str) {
	  var maxValue = 0;
	  var values = str.split(/\s*,\s*/);
	  forEach(values, function(value) {
	    // it's always safe to consider only second values and omit `ms` values since
	    // getComputedStyle will always handle the conversion for us
	    if (value.charAt(value.length - 1) == 's') {
	      value = value.substring(0, value.length - 1);
	    }
	    value = parseFloat(value) || 0;
	    maxValue = maxValue ? Math.max(value, maxValue) : value;
	  });
	  return maxValue;
	}

	function truthyTimingValue(val) {
	  return val === 0 || val != null;
	}

	function getCssTransitionDurationStyle(duration, applyOnlyDuration) {
	  var style = TRANSITION_PROP;
	  var value = duration + 's';
	  if (applyOnlyDuration) {
	    style += DURATION_KEY;
	  } else {
	    value += ' linear all';
	  }
	  return [style, value];
	}

	function createLocalCacheLookup() {
	  var cache = Object.create(null);
	  return {
	    flush: function() {
	      cache = Object.create(null);
	    },

	    count: function(key) {
	      var entry = cache[key];
	      return entry ? entry.total : 0;
	    },

	    get: function(key) {
	      var entry = cache[key];
	      return entry && entry.value;
	    },

	    put: function(key, value) {
	      if (!cache[key]) {
	        cache[key] = { total: 1, value: value };
	      } else {
	        cache[key].total++;
	      }
	    }
	  };
	}

	// we do not reassign an already present style value since
	// if we detect the style property value again we may be
	// detecting styles that were added via the `from` styles.
	// We make use of `isDefined` here since an empty string
	// or null value (which is what getPropertyValue will return
	// for a non-existing style) will still be marked as a valid
	// value for the style (a falsy value implies that the style
	// is to be removed at the end of the animation). If we had a simple
	// "OR" statement then it would not be enough to catch that.
	function registerRestorableStyles(backup, node, properties) {
	  forEach(properties, function(prop) {
	    backup[prop] = isDefined(backup[prop])
	        ? backup[prop]
	        : node.style.getPropertyValue(prop);
	  });
	}

	var $AnimateCssProvider = ['$animateProvider', function($animateProvider) {
	  var gcsLookup = createLocalCacheLookup();
	  var gcsStaggerLookup = createLocalCacheLookup();

	  this.$get = ['$window', '$$jqLite', '$$AnimateRunner', '$timeout',
	               '$$forceReflow', '$sniffer', '$$rAFScheduler', '$$animateQueue',
	       function($window,   $$jqLite,   $$AnimateRunner,   $timeout,
	                $$forceReflow,   $sniffer,   $$rAFScheduler, $$animateQueue) {

	    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);

	    var parentCounter = 0;
	    function gcsHashFn(node, extraClasses) {
	      var KEY = "$$ngAnimateParentKey";
	      var parentNode = node.parentNode;
	      var parentID = parentNode[KEY] || (parentNode[KEY] = ++parentCounter);
	      return parentID + '-' + node.getAttribute('class') + '-' + extraClasses;
	    }

	    function computeCachedCssStyles(node, className, cacheKey, properties) {
	      var timings = gcsLookup.get(cacheKey);

	      if (!timings) {
	        timings = computeCssStyles($window, node, properties);
	        if (timings.animationIterationCount === 'infinite') {
	          timings.animationIterationCount = 1;
	        }
	      }

	      // we keep putting this in multiple times even though the value and the cacheKey are the same
	      // because we're keeping an internal tally of how many duplicate animations are detected.
	      gcsLookup.put(cacheKey, timings);
	      return timings;
	    }

	    function computeCachedCssStaggerStyles(node, className, cacheKey, properties) {
	      var stagger;

	      // if we have one or more existing matches of matching elements
	      // containing the same parent + CSS styles (which is how cacheKey works)
	      // then staggering is possible
	      if (gcsLookup.count(cacheKey) > 0) {
	        stagger = gcsStaggerLookup.get(cacheKey);

	        if (!stagger) {
	          var staggerClassName = pendClasses(className, '-stagger');

	          $$jqLite.addClass(node, staggerClassName);

	          stagger = computeCssStyles($window, node, properties);

	          // force the conversion of a null value to zero incase not set
	          stagger.animationDuration = Math.max(stagger.animationDuration, 0);
	          stagger.transitionDuration = Math.max(stagger.transitionDuration, 0);

	          $$jqLite.removeClass(node, staggerClassName);

	          gcsStaggerLookup.put(cacheKey, stagger);
	        }
	      }

	      return stagger || {};
	    }

	    var cancelLastRAFRequest;
	    var rafWaitQueue = [];
	    function waitUntilQuiet(callback) {
	      rafWaitQueue.push(callback);
	      $$rAFScheduler.waitUntilQuiet(function() {
	        gcsLookup.flush();
	        gcsStaggerLookup.flush();

	        // DO NOT REMOVE THIS LINE OR REFACTOR OUT THE `pageWidth` variable.
	        // PLEASE EXAMINE THE `$$forceReflow` service to understand why.
	        var pageWidth = $$forceReflow();

	        // we use a for loop to ensure that if the queue is changed
	        // during this looping then it will consider new requests
	        for (var i = 0; i < rafWaitQueue.length; i++) {
	          rafWaitQueue[i](pageWidth);
	        }
	        rafWaitQueue.length = 0;
	      });
	    }

	    function computeTimings(node, className, cacheKey) {
	      var timings = computeCachedCssStyles(node, className, cacheKey, DETECT_CSS_PROPERTIES);
	      var aD = timings.animationDelay;
	      var tD = timings.transitionDelay;
	      timings.maxDelay = aD && tD
	          ? Math.max(aD, tD)
	          : (aD || tD);
	      timings.maxDuration = Math.max(
	          timings.animationDuration * timings.animationIterationCount,
	          timings.transitionDuration);

	      return timings;
	    }

	    return function init(element, initialOptions) {
	      // all of the animation functions should create
	      // a copy of the options data, however, if a
	      // parent service has already created a copy then
	      // we should stick to using that
	      var options = initialOptions || {};
	      if (!options.$$prepared) {
	        options = prepareAnimationOptions(copy(options));
	      }

	      var restoreStyles = {};
	      var node = getDomNode(element);
	      if (!node
	          || !node.parentNode
	          || !$$animateQueue.enabled()) {
	        return closeAndReturnNoopAnimator();
	      }

	      var temporaryStyles = [];
	      var classes = element.attr('class');
	      var styles = packageStyles(options);
	      var animationClosed;
	      var animationPaused;
	      var animationCompleted;
	      var runner;
	      var runnerHost;
	      var maxDelay;
	      var maxDelayTime;
	      var maxDuration;
	      var maxDurationTime;
	      var startTime;
	      var events = [];

	      if (options.duration === 0 || (!$sniffer.animations && !$sniffer.transitions)) {
	        return closeAndReturnNoopAnimator();
	      }

	      var method = options.event && isArray(options.event)
	            ? options.event.join(' ')
	            : options.event;

	      var isStructural = method && options.structural;
	      var structuralClassName = '';
	      var addRemoveClassName = '';

	      if (isStructural) {
	        structuralClassName = pendClasses(method, EVENT_CLASS_PREFIX, true);
	      } else if (method) {
	        structuralClassName = method;
	      }

	      if (options.addClass) {
	        addRemoveClassName += pendClasses(options.addClass, ADD_CLASS_SUFFIX);
	      }

	      if (options.removeClass) {
	        if (addRemoveClassName.length) {
	          addRemoveClassName += ' ';
	        }
	        addRemoveClassName += pendClasses(options.removeClass, REMOVE_CLASS_SUFFIX);
	      }

	      // there may be a situation where a structural animation is combined together
	      // with CSS classes that need to resolve before the animation is computed.
	      // However this means that there is no explicit CSS code to block the animation
	      // from happening (by setting 0s none in the class name). If this is the case
	      // we need to apply the classes before the first rAF so we know to continue if
	      // there actually is a detected transition or keyframe animation
	      if (options.applyClassesEarly && addRemoveClassName.length) {
	        applyAnimationClasses(element, options);
	      }

	      var preparationClasses = [structuralClassName, addRemoveClassName].join(' ').trim();
	      var fullClassName = classes + ' ' + preparationClasses;
	      var activeClasses = pendClasses(preparationClasses, ACTIVE_CLASS_SUFFIX);
	      var hasToStyles = styles.to && Object.keys(styles.to).length > 0;
	      var containsKeyframeAnimation = (options.keyframeStyle || '').length > 0;

	      // there is no way we can trigger an animation if no styles and
	      // no classes are being applied which would then trigger a transition,
	      // unless there a is raw keyframe value that is applied to the element.
	      if (!containsKeyframeAnimation
	           && !hasToStyles
	           && !preparationClasses) {
	        return closeAndReturnNoopAnimator();
	      }

	      var cacheKey, stagger;
	      if (options.stagger > 0) {
	        var staggerVal = parseFloat(options.stagger);
	        stagger = {
	          transitionDelay: staggerVal,
	          animationDelay: staggerVal,
	          transitionDuration: 0,
	          animationDuration: 0
	        };
	      } else {
	        cacheKey = gcsHashFn(node, fullClassName);
	        stagger = computeCachedCssStaggerStyles(node, preparationClasses, cacheKey, DETECT_STAGGER_CSS_PROPERTIES);
	      }

	      if (!options.$$skipPreparationClasses) {
	        $$jqLite.addClass(element, preparationClasses);
	      }

	      var applyOnlyDuration;

	      if (options.transitionStyle) {
	        var transitionStyle = [TRANSITION_PROP, options.transitionStyle];
	        applyInlineStyle(node, transitionStyle);
	        temporaryStyles.push(transitionStyle);
	      }

	      if (options.duration >= 0) {
	        applyOnlyDuration = node.style[TRANSITION_PROP].length > 0;
	        var durationStyle = getCssTransitionDurationStyle(options.duration, applyOnlyDuration);

	        // we set the duration so that it will be picked up by getComputedStyle later
	        applyInlineStyle(node, durationStyle);
	        temporaryStyles.push(durationStyle);
	      }

	      if (options.keyframeStyle) {
	        var keyframeStyle = [ANIMATION_PROP, options.keyframeStyle];
	        applyInlineStyle(node, keyframeStyle);
	        temporaryStyles.push(keyframeStyle);
	      }

	      var itemIndex = stagger
	          ? options.staggerIndex >= 0
	              ? options.staggerIndex
	              : gcsLookup.count(cacheKey)
	          : 0;

	      var isFirst = itemIndex === 0;

	      // this is a pre-emptive way of forcing the setup classes to be added and applied INSTANTLY
	      // without causing any combination of transitions to kick in. By adding a negative delay value
	      // it forces the setup class' transition to end immediately. We later then remove the negative
	      // transition delay to allow for the transition to naturally do it's thing. The beauty here is
	      // that if there is no transition defined then nothing will happen and this will also allow
	      // other transitions to be stacked on top of each other without any chopping them out.
	      if (isFirst && !options.skipBlocking) {
	        blockTransitions(node, SAFE_FAST_FORWARD_DURATION_VALUE);
	      }

	      var timings = computeTimings(node, fullClassName, cacheKey);
	      var relativeDelay = timings.maxDelay;
	      maxDelay = Math.max(relativeDelay, 0);
	      maxDuration = timings.maxDuration;

	      var flags = {};
	      flags.hasTransitions          = timings.transitionDuration > 0;
	      flags.hasAnimations           = timings.animationDuration > 0;
	      flags.hasTransitionAll        = flags.hasTransitions && timings.transitionProperty == 'all';
	      flags.applyTransitionDuration = hasToStyles && (
	                                        (flags.hasTransitions && !flags.hasTransitionAll)
	                                         || (flags.hasAnimations && !flags.hasTransitions));
	      flags.applyAnimationDuration  = options.duration && flags.hasAnimations;
	      flags.applyTransitionDelay    = truthyTimingValue(options.delay) && (flags.applyTransitionDuration || flags.hasTransitions);
	      flags.applyAnimationDelay     = truthyTimingValue(options.delay) && flags.hasAnimations;
	      flags.recalculateTimingStyles = addRemoveClassName.length > 0;

	      if (flags.applyTransitionDuration || flags.applyAnimationDuration) {
	        maxDuration = options.duration ? parseFloat(options.duration) : maxDuration;

	        if (flags.applyTransitionDuration) {
	          flags.hasTransitions = true;
	          timings.transitionDuration = maxDuration;
	          applyOnlyDuration = node.style[TRANSITION_PROP + PROPERTY_KEY].length > 0;
	          temporaryStyles.push(getCssTransitionDurationStyle(maxDuration, applyOnlyDuration));
	        }

	        if (flags.applyAnimationDuration) {
	          flags.hasAnimations = true;
	          timings.animationDuration = maxDuration;
	          temporaryStyles.push(getCssKeyframeDurationStyle(maxDuration));
	        }
	      }

	      if (maxDuration === 0 && !flags.recalculateTimingStyles) {
	        return closeAndReturnNoopAnimator();
	      }

	      if (options.delay != null) {
	        var delayStyle;
	        if (typeof options.delay !== "boolean") {
	          delayStyle = parseFloat(options.delay);
	          // number in options.delay means we have to recalculate the delay for the closing timeout
	          maxDelay = Math.max(delayStyle, 0);
	        }

	        if (flags.applyTransitionDelay) {
	          temporaryStyles.push(getCssDelayStyle(delayStyle));
	        }

	        if (flags.applyAnimationDelay) {
	          temporaryStyles.push(getCssDelayStyle(delayStyle, true));
	        }
	      }

	      // we need to recalculate the delay value since we used a pre-emptive negative
	      // delay value and the delay value is required for the final event checking. This
	      // property will ensure that this will happen after the RAF phase has passed.
	      if (options.duration == null && timings.transitionDuration > 0) {
	        flags.recalculateTimingStyles = flags.recalculateTimingStyles || isFirst;
	      }

	      maxDelayTime = maxDelay * ONE_SECOND;
	      maxDurationTime = maxDuration * ONE_SECOND;
	      if (!options.skipBlocking) {
	        flags.blockTransition = timings.transitionDuration > 0;
	        flags.blockKeyframeAnimation = timings.animationDuration > 0 &&
	                                       stagger.animationDelay > 0 &&
	                                       stagger.animationDuration === 0;
	      }

	      if (options.from) {
	        if (options.cleanupStyles) {
	          registerRestorableStyles(restoreStyles, node, Object.keys(options.from));
	        }
	        applyAnimationFromStyles(element, options);
	      }

	      if (flags.blockTransition || flags.blockKeyframeAnimation) {
	        applyBlocking(maxDuration);
	      } else if (!options.skipBlocking) {
	        blockTransitions(node, false);
	      }

	      // TODO(matsko): for 1.5 change this code to have an animator object for better debugging
	      return {
	        $$willAnimate: true,
	        end: endFn,
	        start: function() {
	          if (animationClosed) return;

	          runnerHost = {
	            end: endFn,
	            cancel: cancelFn,
	            resume: null, //this will be set during the start() phase
	            pause: null
	          };

	          runner = new $$AnimateRunner(runnerHost);

	          waitUntilQuiet(start);

	          // we don't have access to pause/resume the animation
	          // since it hasn't run yet. AnimateRunner will therefore
	          // set noop functions for resume and pause and they will
	          // later be overridden once the animation is triggered
	          return runner;
	        }
	      };

	      function endFn() {
	        close();
	      }

	      function cancelFn() {
	        close(true);
	      }

	      function close(rejected) { // jshint ignore:line
	        // if the promise has been called already then we shouldn't close
	        // the animation again
	        if (animationClosed || (animationCompleted && animationPaused)) return;
	        animationClosed = true;
	        animationPaused = false;

	        if (!options.$$skipPreparationClasses) {
	          $$jqLite.removeClass(element, preparationClasses);
	        }
	        $$jqLite.removeClass(element, activeClasses);

	        blockKeyframeAnimations(node, false);
	        blockTransitions(node, false);

	        forEach(temporaryStyles, function(entry) {
	          // There is only one way to remove inline style properties entirely from elements.
	          // By using `removeProperty` this works, but we need to convert camel-cased CSS
	          // styles down to hyphenated values.
	          node.style[entry[0]] = '';
	        });

	        applyAnimationClasses(element, options);
	        applyAnimationStyles(element, options);

	        if (Object.keys(restoreStyles).length) {
	          forEach(restoreStyles, function(value, prop) {
	            value ? node.style.setProperty(prop, value)
	                  : node.style.removeProperty(prop);
	          });
	        }

	        // the reason why we have this option is to allow a synchronous closing callback
	        // that is fired as SOON as the animation ends (when the CSS is removed) or if
	        // the animation never takes off at all. A good example is a leave animation since
	        // the element must be removed just after the animation is over or else the element
	        // will appear on screen for one animation frame causing an overbearing flicker.
	        if (options.onDone) {
	          options.onDone();
	        }

	        if (events && events.length) {
	          // Remove the transitionend / animationend listener(s)
	          element.off(events.join(' '), onAnimationProgress);
	        }

	        //Cancel the fallback closing timeout and remove the timer data
	        var animationTimerData = element.data(ANIMATE_TIMER_KEY);
	        if (animationTimerData) {
	          $timeout.cancel(animationTimerData[0].timer);
	          element.removeData(ANIMATE_TIMER_KEY);
	        }

	        // if the preparation function fails then the promise is not setup
	        if (runner) {
	          runner.complete(!rejected);
	        }
	      }

	      function applyBlocking(duration) {
	        if (flags.blockTransition) {
	          blockTransitions(node, duration);
	        }

	        if (flags.blockKeyframeAnimation) {
	          blockKeyframeAnimations(node, !!duration);
	        }
	      }

	      function closeAndReturnNoopAnimator() {
	        runner = new $$AnimateRunner({
	          end: endFn,
	          cancel: cancelFn
	        });

	        // should flush the cache animation
	        waitUntilQuiet(noop);
	        close();

	        return {
	          $$willAnimate: false,
	          start: function() {
	            return runner;
	          },
	          end: endFn
	        };
	      }

	      function onAnimationProgress(event) {
	        event.stopPropagation();
	        var ev = event.originalEvent || event;

	        // we now always use `Date.now()` due to the recent changes with
	        // event.timeStamp in Firefox, Webkit and Chrome (see #13494 for more info)
	        var timeStamp = ev.$manualTimeStamp || Date.now();

	        /* Firefox (or possibly just Gecko) likes to not round values up
	         * when a ms measurement is used for the animation */
	        var elapsedTime = parseFloat(ev.elapsedTime.toFixed(ELAPSED_TIME_MAX_DECIMAL_PLACES));

	        /* $manualTimeStamp is a mocked timeStamp value which is set
	         * within browserTrigger(). This is only here so that tests can
	         * mock animations properly. Real events fallback to event.timeStamp,
	         * or, if they don't, then a timeStamp is automatically created for them.
	         * We're checking to see if the timeStamp surpasses the expected delay,
	         * but we're using elapsedTime instead of the timeStamp on the 2nd
	         * pre-condition since animationPauseds sometimes close off early */
	        if (Math.max(timeStamp - startTime, 0) >= maxDelayTime && elapsedTime >= maxDuration) {
	          // we set this flag to ensure that if the transition is paused then, when resumed,
	          // the animation will automatically close itself since transitions cannot be paused.
	          animationCompleted = true;
	          close();
	        }
	      }

	      function start() {
	        if (animationClosed) return;
	        if (!node.parentNode) {
	          close();
	          return;
	        }

	        // even though we only pause keyframe animations here the pause flag
	        // will still happen when transitions are used. Only the transition will
	        // not be paused since that is not possible. If the animation ends when
	        // paused then it will not complete until unpaused or cancelled.
	        var playPause = function(playAnimation) {
	          if (!animationCompleted) {
	            animationPaused = !playAnimation;
	            if (timings.animationDuration) {
	              var value = blockKeyframeAnimations(node, animationPaused);
	              animationPaused
	                  ? temporaryStyles.push(value)
	                  : removeFromArray(temporaryStyles, value);
	            }
	          } else if (animationPaused && playAnimation) {
	            animationPaused = false;
	            close();
	          }
	        };

	        // checking the stagger duration prevents an accidentally cascade of the CSS delay style
	        // being inherited from the parent. If the transition duration is zero then we can safely
	        // rely that the delay value is an intentional stagger delay style.
	        var maxStagger = itemIndex > 0
	                         && ((timings.transitionDuration && stagger.transitionDuration === 0) ||
	                            (timings.animationDuration && stagger.animationDuration === 0))
	                         && Math.max(stagger.animationDelay, stagger.transitionDelay);
	        if (maxStagger) {
	          $timeout(triggerAnimationStart,
	                   Math.floor(maxStagger * itemIndex * ONE_SECOND),
	                   false);
	        } else {
	          triggerAnimationStart();
	        }

	        // this will decorate the existing promise runner with pause/resume methods
	        runnerHost.resume = function() {
	          playPause(true);
	        };

	        runnerHost.pause = function() {
	          playPause(false);
	        };

	        function triggerAnimationStart() {
	          // just incase a stagger animation kicks in when the animation
	          // itself was cancelled entirely
	          if (animationClosed) return;

	          applyBlocking(false);

	          forEach(temporaryStyles, function(entry) {
	            var key = entry[0];
	            var value = entry[1];
	            node.style[key] = value;
	          });

	          applyAnimationClasses(element, options);
	          $$jqLite.addClass(element, activeClasses);

	          if (flags.recalculateTimingStyles) {
	            fullClassName = node.className + ' ' + preparationClasses;
	            cacheKey = gcsHashFn(node, fullClassName);

	            timings = computeTimings(node, fullClassName, cacheKey);
	            relativeDelay = timings.maxDelay;
	            maxDelay = Math.max(relativeDelay, 0);
	            maxDuration = timings.maxDuration;

	            if (maxDuration === 0) {
	              close();
	              return;
	            }

	            flags.hasTransitions = timings.transitionDuration > 0;
	            flags.hasAnimations = timings.animationDuration > 0;
	          }

	          if (flags.applyAnimationDelay) {
	            relativeDelay = typeof options.delay !== "boolean" && truthyTimingValue(options.delay)
	                  ? parseFloat(options.delay)
	                  : relativeDelay;

	            maxDelay = Math.max(relativeDelay, 0);
	            timings.animationDelay = relativeDelay;
	            delayStyle = getCssDelayStyle(relativeDelay, true);
	            temporaryStyles.push(delayStyle);
	            node.style[delayStyle[0]] = delayStyle[1];
	          }

	          maxDelayTime = maxDelay * ONE_SECOND;
	          maxDurationTime = maxDuration * ONE_SECOND;

	          if (options.easing) {
	            var easeProp, easeVal = options.easing;
	            if (flags.hasTransitions) {
	              easeProp = TRANSITION_PROP + TIMING_KEY;
	              temporaryStyles.push([easeProp, easeVal]);
	              node.style[easeProp] = easeVal;
	            }
	            if (flags.hasAnimations) {
	              easeProp = ANIMATION_PROP + TIMING_KEY;
	              temporaryStyles.push([easeProp, easeVal]);
	              node.style[easeProp] = easeVal;
	            }
	          }

	          if (timings.transitionDuration) {
	            events.push(TRANSITIONEND_EVENT);
	          }

	          if (timings.animationDuration) {
	            events.push(ANIMATIONEND_EVENT);
	          }

	          startTime = Date.now();
	          var timerTime = maxDelayTime + CLOSING_TIME_BUFFER * maxDurationTime;
	          var endTime = startTime + timerTime;

	          var animationsData = element.data(ANIMATE_TIMER_KEY) || [];
	          var setupFallbackTimer = true;
	          if (animationsData.length) {
	            var currentTimerData = animationsData[0];
	            setupFallbackTimer = endTime > currentTimerData.expectedEndTime;
	            if (setupFallbackTimer) {
	              $timeout.cancel(currentTimerData.timer);
	            } else {
	              animationsData.push(close);
	            }
	          }

	          if (setupFallbackTimer) {
	            var timer = $timeout(onAnimationExpired, timerTime, false);
	            animationsData[0] = {
	              timer: timer,
	              expectedEndTime: endTime
	            };
	            animationsData.push(close);
	            element.data(ANIMATE_TIMER_KEY, animationsData);
	          }

	          if (events.length) {
	            element.on(events.join(' '), onAnimationProgress);
	          }

	          if (options.to) {
	            if (options.cleanupStyles) {
	              registerRestorableStyles(restoreStyles, node, Object.keys(options.to));
	            }
	            applyAnimationToStyles(element, options);
	          }
	        }

	        function onAnimationExpired() {
	          var animationsData = element.data(ANIMATE_TIMER_KEY);

	          // this will be false in the event that the element was
	          // removed from the DOM (via a leave animation or something
	          // similar)
	          if (animationsData) {
	            for (var i = 1; i < animationsData.length; i++) {
	              animationsData[i]();
	            }
	            element.removeData(ANIMATE_TIMER_KEY);
	          }
	        }
	      }
	    };
	  }];
	}];

	var $$AnimateCssDriverProvider = ['$$animationProvider', function($$animationProvider) {
	  $$animationProvider.drivers.push('$$animateCssDriver');

	  var NG_ANIMATE_SHIM_CLASS_NAME = 'ng-animate-shim';
	  var NG_ANIMATE_ANCHOR_CLASS_NAME = 'ng-anchor';

	  var NG_OUT_ANCHOR_CLASS_NAME = 'ng-anchor-out';
	  var NG_IN_ANCHOR_CLASS_NAME = 'ng-anchor-in';

	  function isDocumentFragment(node) {
	    return node.parentNode && node.parentNode.nodeType === 11;
	  }

	  this.$get = ['$animateCss', '$rootScope', '$$AnimateRunner', '$rootElement', '$sniffer', '$$jqLite', '$document',
	       function($animateCss,   $rootScope,   $$AnimateRunner,   $rootElement,   $sniffer,   $$jqLite,   $document) {

	    // only browsers that support these properties can render animations
	    if (!$sniffer.animations && !$sniffer.transitions) return noop;

	    var bodyNode = $document[0].body;
	    var rootNode = getDomNode($rootElement);

	    var rootBodyElement = jqLite(
	      // this is to avoid using something that exists outside of the body
	      // we also special case the doc fragment case because our unit test code
	      // appends the $rootElement to the body after the app has been bootstrapped
	      isDocumentFragment(rootNode) || bodyNode.contains(rootNode) ? rootNode : bodyNode
	    );

	    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);

	    return function initDriverFn(animationDetails) {
	      return animationDetails.from && animationDetails.to
	          ? prepareFromToAnchorAnimation(animationDetails.from,
	                                         animationDetails.to,
	                                         animationDetails.classes,
	                                         animationDetails.anchors)
	          : prepareRegularAnimation(animationDetails);
	    };

	    function filterCssClasses(classes) {
	      //remove all the `ng-` stuff
	      return classes.replace(/\bng-\S+\b/g, '');
	    }

	    function getUniqueValues(a, b) {
	      if (isString(a)) a = a.split(' ');
	      if (isString(b)) b = b.split(' ');
	      return a.filter(function(val) {
	        return b.indexOf(val) === -1;
	      }).join(' ');
	    }

	    function prepareAnchoredAnimation(classes, outAnchor, inAnchor) {
	      var clone = jqLite(getDomNode(outAnchor).cloneNode(true));
	      var startingClasses = filterCssClasses(getClassVal(clone));

	      outAnchor.addClass(NG_ANIMATE_SHIM_CLASS_NAME);
	      inAnchor.addClass(NG_ANIMATE_SHIM_CLASS_NAME);

	      clone.addClass(NG_ANIMATE_ANCHOR_CLASS_NAME);

	      rootBodyElement.append(clone);

	      var animatorIn, animatorOut = prepareOutAnimation();

	      // the user may not end up using the `out` animation and
	      // only making use of the `in` animation or vice-versa.
	      // In either case we should allow this and not assume the
	      // animation is over unless both animations are not used.
	      if (!animatorOut) {
	        animatorIn = prepareInAnimation();
	        if (!animatorIn) {
	          return end();
	        }
	      }

	      var startingAnimator = animatorOut || animatorIn;

	      return {
	        start: function() {
	          var runner;

	          var currentAnimation = startingAnimator.start();
	          currentAnimation.done(function() {
	            currentAnimation = null;
	            if (!animatorIn) {
	              animatorIn = prepareInAnimation();
	              if (animatorIn) {
	                currentAnimation = animatorIn.start();
	                currentAnimation.done(function() {
	                  currentAnimation = null;
	                  end();
	                  runner.complete();
	                });
	                return currentAnimation;
	              }
	            }
	            // in the event that there is no `in` animation
	            end();
	            runner.complete();
	          });

	          runner = new $$AnimateRunner({
	            end: endFn,
	            cancel: endFn
	          });

	          return runner;

	          function endFn() {
	            if (currentAnimation) {
	              currentAnimation.end();
	            }
	          }
	        }
	      };

	      function calculateAnchorStyles(anchor) {
	        var styles = {};

	        var coords = getDomNode(anchor).getBoundingClientRect();

	        // we iterate directly since safari messes up and doesn't return
	        // all the keys for the coords object when iterated
	        forEach(['width','height','top','left'], function(key) {
	          var value = coords[key];
	          switch (key) {
	            case 'top':
	              value += bodyNode.scrollTop;
	              break;
	            case 'left':
	              value += bodyNode.scrollLeft;
	              break;
	          }
	          styles[key] = Math.floor(value) + 'px';
	        });
	        return styles;
	      }

	      function prepareOutAnimation() {
	        var animator = $animateCss(clone, {
	          addClass: NG_OUT_ANCHOR_CLASS_NAME,
	          delay: true,
	          from: calculateAnchorStyles(outAnchor)
	        });

	        // read the comment within `prepareRegularAnimation` to understand
	        // why this check is necessary
	        return animator.$$willAnimate ? animator : null;
	      }

	      function getClassVal(element) {
	        return element.attr('class') || '';
	      }

	      function prepareInAnimation() {
	        var endingClasses = filterCssClasses(getClassVal(inAnchor));
	        var toAdd = getUniqueValues(endingClasses, startingClasses);
	        var toRemove = getUniqueValues(startingClasses, endingClasses);

	        var animator = $animateCss(clone, {
	          to: calculateAnchorStyles(inAnchor),
	          addClass: NG_IN_ANCHOR_CLASS_NAME + ' ' + toAdd,
	          removeClass: NG_OUT_ANCHOR_CLASS_NAME + ' ' + toRemove,
	          delay: true
	        });

	        // read the comment within `prepareRegularAnimation` to understand
	        // why this check is necessary
	        return animator.$$willAnimate ? animator : null;
	      }

	      function end() {
	        clone.remove();
	        outAnchor.removeClass(NG_ANIMATE_SHIM_CLASS_NAME);
	        inAnchor.removeClass(NG_ANIMATE_SHIM_CLASS_NAME);
	      }
	    }

	    function prepareFromToAnchorAnimation(from, to, classes, anchors) {
	      var fromAnimation = prepareRegularAnimation(from, noop);
	      var toAnimation = prepareRegularAnimation(to, noop);

	      var anchorAnimations = [];
	      forEach(anchors, function(anchor) {
	        var outElement = anchor['out'];
	        var inElement = anchor['in'];
	        var animator = prepareAnchoredAnimation(classes, outElement, inElement);
	        if (animator) {
	          anchorAnimations.push(animator);
	        }
	      });

	      // no point in doing anything when there are no elements to animate
	      if (!fromAnimation && !toAnimation && anchorAnimations.length === 0) return;

	      return {
	        start: function() {
	          var animationRunners = [];

	          if (fromAnimation) {
	            animationRunners.push(fromAnimation.start());
	          }

	          if (toAnimation) {
	            animationRunners.push(toAnimation.start());
	          }

	          forEach(anchorAnimations, function(animation) {
	            animationRunners.push(animation.start());
	          });

	          var runner = new $$AnimateRunner({
	            end: endFn,
	            cancel: endFn // CSS-driven animations cannot be cancelled, only ended
	          });

	          $$AnimateRunner.all(animationRunners, function(status) {
	            runner.complete(status);
	          });

	          return runner;

	          function endFn() {
	            forEach(animationRunners, function(runner) {
	              runner.end();
	            });
	          }
	        }
	      };
	    }

	    function prepareRegularAnimation(animationDetails) {
	      var element = animationDetails.element;
	      var options = animationDetails.options || {};

	      if (animationDetails.structural) {
	        options.event = animationDetails.event;
	        options.structural = true;
	        options.applyClassesEarly = true;

	        // we special case the leave animation since we want to ensure that
	        // the element is removed as soon as the animation is over. Otherwise
	        // a flicker might appear or the element may not be removed at all
	        if (animationDetails.event === 'leave') {
	          options.onDone = options.domOperation;
	        }
	      }

	      // We assign the preparationClasses as the actual animation event since
	      // the internals of $animateCss will just suffix the event token values
	      // with `-active` to trigger the animation.
	      if (options.preparationClasses) {
	        options.event = concatWithSpace(options.event, options.preparationClasses);
	      }

	      var animator = $animateCss(element, options);

	      // the driver lookup code inside of $$animation attempts to spawn a
	      // driver one by one until a driver returns a.$$willAnimate animator object.
	      // $animateCss will always return an object, however, it will pass in
	      // a flag as a hint as to whether an animation was detected or not
	      return animator.$$willAnimate ? animator : null;
	    }
	  }];
	}];

	// TODO(matsko): use caching here to speed things up for detection
	// TODO(matsko): add documentation
	//  by the time...

	var $$AnimateJsProvider = ['$animateProvider', function($animateProvider) {
	  this.$get = ['$injector', '$$AnimateRunner', '$$jqLite',
	       function($injector,   $$AnimateRunner,   $$jqLite) {

	    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);
	         // $animateJs(element, 'enter');
	    return function(element, event, classes, options) {
	      var animationClosed = false;

	      // the `classes` argument is optional and if it is not used
	      // then the classes will be resolved from the element's className
	      // property as well as options.addClass/options.removeClass.
	      if (arguments.length === 3 && isObject(classes)) {
	        options = classes;
	        classes = null;
	      }

	      options = prepareAnimationOptions(options);
	      if (!classes) {
	        classes = element.attr('class') || '';
	        if (options.addClass) {
	          classes += ' ' + options.addClass;
	        }
	        if (options.removeClass) {
	          classes += ' ' + options.removeClass;
	        }
	      }

	      var classesToAdd = options.addClass;
	      var classesToRemove = options.removeClass;

	      // the lookupAnimations function returns a series of animation objects that are
	      // matched up with one or more of the CSS classes. These animation objects are
	      // defined via the module.animation factory function. If nothing is detected then
	      // we don't return anything which then makes $animation query the next driver.
	      var animations = lookupAnimations(classes);
	      var before, after;
	      if (animations.length) {
	        var afterFn, beforeFn;
	        if (event == 'leave') {
	          beforeFn = 'leave';
	          afterFn = 'afterLeave'; // TODO(matsko): get rid of this
	        } else {
	          beforeFn = 'before' + event.charAt(0).toUpperCase() + event.substr(1);
	          afterFn = event;
	        }

	        if (event !== 'enter' && event !== 'move') {
	          before = packageAnimations(element, event, options, animations, beforeFn);
	        }
	        after  = packageAnimations(element, event, options, animations, afterFn);
	      }

	      // no matching animations
	      if (!before && !after) return;

	      function applyOptions() {
	        options.domOperation();
	        applyAnimationClasses(element, options);
	      }

	      function close() {
	        animationClosed = true;
	        applyOptions();
	        applyAnimationStyles(element, options);
	      }

	      var runner;

	      return {
	        $$willAnimate: true,
	        end: function() {
	          if (runner) {
	            runner.end();
	          } else {
	            close();
	            runner = new $$AnimateRunner();
	            runner.complete(true);
	          }
	          return runner;
	        },
	        start: function() {
	          if (runner) {
	            return runner;
	          }

	          runner = new $$AnimateRunner();
	          var closeActiveAnimations;
	          var chain = [];

	          if (before) {
	            chain.push(function(fn) {
	              closeActiveAnimations = before(fn);
	            });
	          }

	          if (chain.length) {
	            chain.push(function(fn) {
	              applyOptions();
	              fn(true);
	            });
	          } else {
	            applyOptions();
	          }

	          if (after) {
	            chain.push(function(fn) {
	              closeActiveAnimations = after(fn);
	            });
	          }

	          runner.setHost({
	            end: function() {
	              endAnimations();
	            },
	            cancel: function() {
	              endAnimations(true);
	            }
	          });

	          $$AnimateRunner.chain(chain, onComplete);
	          return runner;

	          function onComplete(success) {
	            close(success);
	            runner.complete(success);
	          }

	          function endAnimations(cancelled) {
	            if (!animationClosed) {
	              (closeActiveAnimations || noop)(cancelled);
	              onComplete(cancelled);
	            }
	          }
	        }
	      };

	      function executeAnimationFn(fn, element, event, options, onDone) {
	        var args;
	        switch (event) {
	          case 'animate':
	            args = [element, options.from, options.to, onDone];
	            break;

	          case 'setClass':
	            args = [element, classesToAdd, classesToRemove, onDone];
	            break;

	          case 'addClass':
	            args = [element, classesToAdd, onDone];
	            break;

	          case 'removeClass':
	            args = [element, classesToRemove, onDone];
	            break;

	          default:
	            args = [element, onDone];
	            break;
	        }

	        args.push(options);

	        var value = fn.apply(fn, args);
	        if (value) {
	          if (isFunction(value.start)) {
	            value = value.start();
	          }

	          if (value instanceof $$AnimateRunner) {
	            value.done(onDone);
	          } else if (isFunction(value)) {
	            // optional onEnd / onCancel callback
	            return value;
	          }
	        }

	        return noop;
	      }

	      function groupEventedAnimations(element, event, options, animations, fnName) {
	        var operations = [];
	        forEach(animations, function(ani) {
	          var animation = ani[fnName];
	          if (!animation) return;

	          // note that all of these animations will run in parallel
	          operations.push(function() {
	            var runner;
	            var endProgressCb;

	            var resolved = false;
	            var onAnimationComplete = function(rejected) {
	              if (!resolved) {
	                resolved = true;
	                (endProgressCb || noop)(rejected);
	                runner.complete(!rejected);
	              }
	            };

	            runner = new $$AnimateRunner({
	              end: function() {
	                onAnimationComplete();
	              },
	              cancel: function() {
	                onAnimationComplete(true);
	              }
	            });

	            endProgressCb = executeAnimationFn(animation, element, event, options, function(result) {
	              var cancelled = result === false;
	              onAnimationComplete(cancelled);
	            });

	            return runner;
	          });
	        });

	        return operations;
	      }

	      function packageAnimations(element, event, options, animations, fnName) {
	        var operations = groupEventedAnimations(element, event, options, animations, fnName);
	        if (operations.length === 0) {
	          var a,b;
	          if (fnName === 'beforeSetClass') {
	            a = groupEventedAnimations(element, 'removeClass', options, animations, 'beforeRemoveClass');
	            b = groupEventedAnimations(element, 'addClass', options, animations, 'beforeAddClass');
	          } else if (fnName === 'setClass') {
	            a = groupEventedAnimations(element, 'removeClass', options, animations, 'removeClass');
	            b = groupEventedAnimations(element, 'addClass', options, animations, 'addClass');
	          }

	          if (a) {
	            operations = operations.concat(a);
	          }
	          if (b) {
	            operations = operations.concat(b);
	          }
	        }

	        if (operations.length === 0) return;

	        // TODO(matsko): add documentation
	        return function startAnimation(callback) {
	          var runners = [];
	          if (operations.length) {
	            forEach(operations, function(animateFn) {
	              runners.push(animateFn());
	            });
	          }

	          runners.length ? $$AnimateRunner.all(runners, callback) : callback();

	          return function endFn(reject) {
	            forEach(runners, function(runner) {
	              reject ? runner.cancel() : runner.end();
	            });
	          };
	        };
	      }
	    };

	    function lookupAnimations(classes) {
	      classes = isArray(classes) ? classes : classes.split(' ');
	      var matches = [], flagMap = {};
	      for (var i=0; i < classes.length; i++) {
	        var klass = classes[i],
	            animationFactory = $animateProvider.$$registeredAnimations[klass];
	        if (animationFactory && !flagMap[klass]) {
	          matches.push($injector.get(animationFactory));
	          flagMap[klass] = true;
	        }
	      }
	      return matches;
	    }
	  }];
	}];

	var $$AnimateJsDriverProvider = ['$$animationProvider', function($$animationProvider) {
	  $$animationProvider.drivers.push('$$animateJsDriver');
	  this.$get = ['$$animateJs', '$$AnimateRunner', function($$animateJs, $$AnimateRunner) {
	    return function initDriverFn(animationDetails) {
	      if (animationDetails.from && animationDetails.to) {
	        var fromAnimation = prepareAnimation(animationDetails.from);
	        var toAnimation = prepareAnimation(animationDetails.to);
	        if (!fromAnimation && !toAnimation) return;

	        return {
	          start: function() {
	            var animationRunners = [];

	            if (fromAnimation) {
	              animationRunners.push(fromAnimation.start());
	            }

	            if (toAnimation) {
	              animationRunners.push(toAnimation.start());
	            }

	            $$AnimateRunner.all(animationRunners, done);

	            var runner = new $$AnimateRunner({
	              end: endFnFactory(),
	              cancel: endFnFactory()
	            });

	            return runner;

	            function endFnFactory() {
	              return function() {
	                forEach(animationRunners, function(runner) {
	                  // at this point we cannot cancel animations for groups just yet. 1.5+
	                  runner.end();
	                });
	              };
	            }

	            function done(status) {
	              runner.complete(status);
	            }
	          }
	        };
	      } else {
	        return prepareAnimation(animationDetails);
	      }
	    };

	    function prepareAnimation(animationDetails) {
	      // TODO(matsko): make sure to check for grouped animations and delegate down to normal animations
	      var element = animationDetails.element;
	      var event = animationDetails.event;
	      var options = animationDetails.options;
	      var classes = animationDetails.classes;
	      return $$animateJs(element, event, classes, options);
	    }
	  }];
	}];

	var NG_ANIMATE_ATTR_NAME = 'data-ng-animate';
	var NG_ANIMATE_PIN_DATA = '$ngAnimatePin';
	var $$AnimateQueueProvider = ['$animateProvider', function($animateProvider) {
	  var PRE_DIGEST_STATE = 1;
	  var RUNNING_STATE = 2;
	  var ONE_SPACE = ' ';

	  var rules = this.rules = {
	    skip: [],
	    cancel: [],
	    join: []
	  };

	  function makeTruthyCssClassMap(classString) {
	    if (!classString) {
	      return null;
	    }

	    var keys = classString.split(ONE_SPACE);
	    var map = Object.create(null);

	    forEach(keys, function(key) {
	      map[key] = true;
	    });
	    return map;
	  }

	  function hasMatchingClasses(newClassString, currentClassString) {
	    if (newClassString && currentClassString) {
	      var currentClassMap = makeTruthyCssClassMap(currentClassString);
	      return newClassString.split(ONE_SPACE).some(function(className) {
	        return currentClassMap[className];
	      });
	    }
	  }

	  function isAllowed(ruleType, element, currentAnimation, previousAnimation) {
	    return rules[ruleType].some(function(fn) {
	      return fn(element, currentAnimation, previousAnimation);
	    });
	  }

	  function hasAnimationClasses(animation, and) {
	    var a = (animation.addClass || '').length > 0;
	    var b = (animation.removeClass || '').length > 0;
	    return and ? a && b : a || b;
	  }

	  rules.join.push(function(element, newAnimation, currentAnimation) {
	    // if the new animation is class-based then we can just tack that on
	    return !newAnimation.structural && hasAnimationClasses(newAnimation);
	  });

	  rules.skip.push(function(element, newAnimation, currentAnimation) {
	    // there is no need to animate anything if no classes are being added and
	    // there is no structural animation that will be triggered
	    return !newAnimation.structural && !hasAnimationClasses(newAnimation);
	  });

	  rules.skip.push(function(element, newAnimation, currentAnimation) {
	    // why should we trigger a new structural animation if the element will
	    // be removed from the DOM anyway?
	    return currentAnimation.event == 'leave' && newAnimation.structural;
	  });

	  rules.skip.push(function(element, newAnimation, currentAnimation) {
	    // if there is an ongoing current animation then don't even bother running the class-based animation
	    return currentAnimation.structural && currentAnimation.state === RUNNING_STATE && !newAnimation.structural;
	  });

	  rules.cancel.push(function(element, newAnimation, currentAnimation) {
	    // there can never be two structural animations running at the same time
	    return currentAnimation.structural && newAnimation.structural;
	  });

	  rules.cancel.push(function(element, newAnimation, currentAnimation) {
	    // if the previous animation is already running, but the new animation will
	    // be triggered, but the new animation is structural
	    return currentAnimation.state === RUNNING_STATE && newAnimation.structural;
	  });

	  rules.cancel.push(function(element, newAnimation, currentAnimation) {
	    // cancel the animation if classes added / removed in both animation cancel each other out,
	    // but only if the current animation isn't structural

	    if (currentAnimation.structural) return false;

	    var nA = newAnimation.addClass;
	    var nR = newAnimation.removeClass;
	    var cA = currentAnimation.addClass;
	    var cR = currentAnimation.removeClass;

	    // early detection to save the global CPU shortage :)
	    if ((isUndefined(nA) && isUndefined(nR)) || (isUndefined(cA) && isUndefined(cR))) {
	      return false;
	    }

	    return hasMatchingClasses(nA, cR) || hasMatchingClasses(nR, cA);
	  });

	  this.$get = ['$$rAF', '$rootScope', '$rootElement', '$document', '$$HashMap',
	               '$$animation', '$$AnimateRunner', '$templateRequest', '$$jqLite', '$$forceReflow',
	       function($$rAF,   $rootScope,   $rootElement,   $document,   $$HashMap,
	                $$animation,   $$AnimateRunner,   $templateRequest,   $$jqLite,   $$forceReflow) {

	    var activeAnimationsLookup = new $$HashMap();
	    var disabledElementsLookup = new $$HashMap();
	    var animationsEnabled = null;

	    function postDigestTaskFactory() {
	      var postDigestCalled = false;
	      return function(fn) {
	        // we only issue a call to postDigest before
	        // it has first passed. This prevents any callbacks
	        // from not firing once the animation has completed
	        // since it will be out of the digest cycle.
	        if (postDigestCalled) {
	          fn();
	        } else {
	          $rootScope.$$postDigest(function() {
	            postDigestCalled = true;
	            fn();
	          });
	        }
	      };
	    }

	    // Wait until all directive and route-related templates are downloaded and
	    // compiled. The $templateRequest.totalPendingRequests variable keeps track of
	    // all of the remote templates being currently downloaded. If there are no
	    // templates currently downloading then the watcher will still fire anyway.
	    var deregisterWatch = $rootScope.$watch(
	      function() { return $templateRequest.totalPendingRequests === 0; },
	      function(isEmpty) {
	        if (!isEmpty) return;
	        deregisterWatch();

	        // Now that all templates have been downloaded, $animate will wait until
	        // the post digest queue is empty before enabling animations. By having two
	        // calls to $postDigest calls we can ensure that the flag is enabled at the
	        // very end of the post digest queue. Since all of the animations in $animate
	        // use $postDigest, it's important that the code below executes at the end.
	        // This basically means that the page is fully downloaded and compiled before
	        // any animations are triggered.
	        $rootScope.$$postDigest(function() {
	          $rootScope.$$postDigest(function() {
	            // we check for null directly in the event that the application already called
	            // .enabled() with whatever arguments that it provided it with
	            if (animationsEnabled === null) {
	              animationsEnabled = true;
	            }
	          });
	        });
	      }
	    );

	    var callbackRegistry = {};

	    // remember that the classNameFilter is set during the provider/config
	    // stage therefore we can optimize here and setup a helper function
	    var classNameFilter = $animateProvider.classNameFilter();
	    var isAnimatableClassName = !classNameFilter
	              ? function() { return true; }
	              : function(className) {
	                return classNameFilter.test(className);
	              };

	    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);

	    function normalizeAnimationDetails(element, animation) {
	      return mergeAnimationDetails(element, animation, {});
	    }

	    // IE9-11 has no method "contains" in SVG element and in Node.prototype. Bug #10259.
	    var contains = window.Node.prototype.contains || function(arg) {
	      // jshint bitwise: false
	      return this === arg || !!(this.compareDocumentPosition(arg) & 16);
	      // jshint bitwise: true
	    };

	    function findCallbacks(parent, element, event) {
	      var targetNode = getDomNode(element);
	      var targetParentNode = getDomNode(parent);

	      var matches = [];
	      var entries = callbackRegistry[event];
	      if (entries) {
	        forEach(entries, function(entry) {
	          if (contains.call(entry.node, targetNode)) {
	            matches.push(entry.callback);
	          } else if (event === 'leave' && contains.call(entry.node, targetParentNode)) {
	            matches.push(entry.callback);
	          }
	        });
	      }

	      return matches;
	    }

	    function filterFromRegistry(list, matchContainer, matchCallback) {
	      var containerNode = extractElementNode(matchContainer);
	      return list.filter(function(entry) {
	        var isMatch = entry.node === containerNode &&
	                        (!matchCallback || entry.callback === matchCallback);
	        return !isMatch;
	      });
	    }

	    function cleanupEventListeners(phase, element) {
	      if (phase === 'close' && !element[0].parentNode) {
	        // If the element is not attached to a parentNode, it has been removed by
	        // the domOperation, and we can safely remove the event callbacks
	        $animate.off(element);
	      }
	    }

	    var $animate = {
	      on: function(event, container, callback) {
	        var node = extractElementNode(container);
	        callbackRegistry[event] = callbackRegistry[event] || [];
	        callbackRegistry[event].push({
	          node: node,
	          callback: callback
	        });

	        // Remove the callback when the element is removed from the DOM
	        jqLite(container).on('$destroy', function() {
	          var animationDetails = activeAnimationsLookup.get(node);

	          if (!animationDetails) {
	            // If there's an animation ongoing, the callback calling code will remove
	            // the event listeners. If we'd remove here, the callbacks would be removed
	            // before the animation ends
	            $animate.off(event, container, callback);
	          }
	        });
	      },

	      off: function(event, container, callback) {
	        if (arguments.length === 1 && !angular.isString(arguments[0])) {
	          container = arguments[0];
	          for (var eventType in callbackRegistry) {
	            callbackRegistry[eventType] = filterFromRegistry(callbackRegistry[eventType], container);
	          }

	          return;
	        }

	        var entries = callbackRegistry[event];
	        if (!entries) return;

	        callbackRegistry[event] = arguments.length === 1
	            ? null
	            : filterFromRegistry(entries, container, callback);
	      },

	      pin: function(element, parentElement) {
	        assertArg(isElement(element), 'element', 'not an element');
	        assertArg(isElement(parentElement), 'parentElement', 'not an element');
	        element.data(NG_ANIMATE_PIN_DATA, parentElement);
	      },

	      push: function(element, event, options, domOperation) {
	        options = options || {};
	        options.domOperation = domOperation;
	        return queueAnimation(element, event, options);
	      },

	      // this method has four signatures:
	      //  () - global getter
	      //  (bool) - global setter
	      //  (element) - element getter
	      //  (element, bool) - element setter<F37>
	      enabled: function(element, bool) {
	        var argCount = arguments.length;

	        if (argCount === 0) {
	          // () - Global getter
	          bool = !!animationsEnabled;
	        } else {
	          var hasElement = isElement(element);

	          if (!hasElement) {
	            // (bool) - Global setter
	            bool = animationsEnabled = !!element;
	          } else {
	            var node = getDomNode(element);
	            var recordExists = disabledElementsLookup.get(node);

	            if (argCount === 1) {
	              // (element) - Element getter
	              bool = !recordExists;
	            } else {
	              // (element, bool) - Element setter
	              disabledElementsLookup.put(node, !bool);
	            }
	          }
	        }

	        return bool;
	      }
	    };

	    return $animate;

	    function queueAnimation(element, event, initialOptions) {
	      // we always make a copy of the options since
	      // there should never be any side effects on
	      // the input data when running `$animateCss`.
	      var options = copy(initialOptions);

	      var node, parent;
	      element = stripCommentsFromElement(element);
	      if (element) {
	        node = getDomNode(element);
	        parent = element.parent();
	      }

	      options = prepareAnimationOptions(options);

	      // we create a fake runner with a working promise.
	      // These methods will become available after the digest has passed
	      var runner = new $$AnimateRunner();

	      // this is used to trigger callbacks in postDigest mode
	      var runInNextPostDigestOrNow = postDigestTaskFactory();

	      if (isArray(options.addClass)) {
	        options.addClass = options.addClass.join(' ');
	      }

	      if (options.addClass && !isString(options.addClass)) {
	        options.addClass = null;
	      }

	      if (isArray(options.removeClass)) {
	        options.removeClass = options.removeClass.join(' ');
	      }

	      if (options.removeClass && !isString(options.removeClass)) {
	        options.removeClass = null;
	      }

	      if (options.from && !isObject(options.from)) {
	        options.from = null;
	      }

	      if (options.to && !isObject(options.to)) {
	        options.to = null;
	      }

	      // there are situations where a directive issues an animation for
	      // a jqLite wrapper that contains only comment nodes... If this
	      // happens then there is no way we can perform an animation
	      if (!node) {
	        close();
	        return runner;
	      }

	      var className = [node.className, options.addClass, options.removeClass].join(' ');
	      if (!isAnimatableClassName(className)) {
	        close();
	        return runner;
	      }

	      var isStructural = ['enter', 'move', 'leave'].indexOf(event) >= 0;

	      var documentHidden = $document[0].hidden;

	      // this is a hard disable of all animations for the application or on
	      // the element itself, therefore  there is no need to continue further
	      // past this point if not enabled
	      // Animations are also disabled if the document is currently hidden (page is not visible
	      // to the user), because browsers slow down or do not flush calls to requestAnimationFrame
	      var skipAnimations = !animationsEnabled || documentHidden || disabledElementsLookup.get(node);
	      var existingAnimation = (!skipAnimations && activeAnimationsLookup.get(node)) || {};
	      var hasExistingAnimation = !!existingAnimation.state;

	      // there is no point in traversing the same collection of parent ancestors if a followup
	      // animation will be run on the same element that already did all that checking work
	      if (!skipAnimations && (!hasExistingAnimation || existingAnimation.state != PRE_DIGEST_STATE)) {
	        skipAnimations = !areAnimationsAllowed(element, parent, event);
	      }

	      if (skipAnimations) {
	        // Callbacks should fire even if the document is hidden (regression fix for issue #14120)
	        if (documentHidden) notifyProgress(runner, event, 'start');
	        close();
	        if (documentHidden) notifyProgress(runner, event, 'close');
	        return runner;
	      }

	      if (isStructural) {
	        closeChildAnimations(element);
	      }

	      var newAnimation = {
	        structural: isStructural,
	        element: element,
	        event: event,
	        addClass: options.addClass,
	        removeClass: options.removeClass,
	        close: close,
	        options: options,
	        runner: runner
	      };

	      if (hasExistingAnimation) {
	        var skipAnimationFlag = isAllowed('skip', element, newAnimation, existingAnimation);
	        if (skipAnimationFlag) {
	          if (existingAnimation.state === RUNNING_STATE) {
	            close();
	            return runner;
	          } else {
	            mergeAnimationDetails(element, existingAnimation, newAnimation);
	            return existingAnimation.runner;
	          }
	        }
	        var cancelAnimationFlag = isAllowed('cancel', element, newAnimation, existingAnimation);
	        if (cancelAnimationFlag) {
	          if (existingAnimation.state === RUNNING_STATE) {
	            // this will end the animation right away and it is safe
	            // to do so since the animation is already running and the
	            // runner callback code will run in async
	            existingAnimation.runner.end();
	          } else if (existingAnimation.structural) {
	            // this means that the animation is queued into a digest, but
	            // hasn't started yet. Therefore it is safe to run the close
	            // method which will call the runner methods in async.
	            existingAnimation.close();
	          } else {
	            // this will merge the new animation options into existing animation options
	            mergeAnimationDetails(element, existingAnimation, newAnimation);

	            return existingAnimation.runner;
	          }
	        } else {
	          // a joined animation means that this animation will take over the existing one
	          // so an example would involve a leave animation taking over an enter. Then when
	          // the postDigest kicks in the enter will be ignored.
	          var joinAnimationFlag = isAllowed('join', element, newAnimation, existingAnimation);
	          if (joinAnimationFlag) {
	            if (existingAnimation.state === RUNNING_STATE) {
	              normalizeAnimationDetails(element, newAnimation);
	            } else {
	              applyGeneratedPreparationClasses(element, isStructural ? event : null, options);

	              event = newAnimation.event = existingAnimation.event;
	              options = mergeAnimationDetails(element, existingAnimation, newAnimation);

	              //we return the same runner since only the option values of this animation will
	              //be fed into the `existingAnimation`.
	              return existingAnimation.runner;
	            }
	          }
	        }
	      } else {
	        // normalization in this case means that it removes redundant CSS classes that
	        // already exist (addClass) or do not exist (removeClass) on the element
	        normalizeAnimationDetails(element, newAnimation);
	      }

	      // when the options are merged and cleaned up we may end up not having to do
	      // an animation at all, therefore we should check this before issuing a post
	      // digest callback. Structural animations will always run no matter what.
	      var isValidAnimation = newAnimation.structural;
	      if (!isValidAnimation) {
	        // animate (from/to) can be quickly checked first, otherwise we check if any classes are present
	        isValidAnimation = (newAnimation.event === 'animate' && Object.keys(newAnimation.options.to || {}).length > 0)
	                            || hasAnimationClasses(newAnimation);
	      }

	      if (!isValidAnimation) {
	        close();
	        clearElementAnimationState(element);
	        return runner;
	      }

	      // the counter keeps track of cancelled animations
	      var counter = (existingAnimation.counter || 0) + 1;
	      newAnimation.counter = counter;

	      markElementAnimationState(element, PRE_DIGEST_STATE, newAnimation);

	      $rootScope.$$postDigest(function() {
	        var animationDetails = activeAnimationsLookup.get(node);
	        var animationCancelled = !animationDetails;
	        animationDetails = animationDetails || {};

	        // if addClass/removeClass is called before something like enter then the
	        // registered parent element may not be present. The code below will ensure
	        // that a final value for parent element is obtained
	        var parentElement = element.parent() || [];

	        // animate/structural/class-based animations all have requirements. Otherwise there
	        // is no point in performing an animation. The parent node must also be set.
	        var isValidAnimation = parentElement.length > 0
	                                && (animationDetails.event === 'animate'
	                                    || animationDetails.structural
	                                    || hasAnimationClasses(animationDetails));

	        // this means that the previous animation was cancelled
	        // even if the follow-up animation is the same event
	        if (animationCancelled || animationDetails.counter !== counter || !isValidAnimation) {
	          // if another animation did not take over then we need
	          // to make sure that the domOperation and options are
	          // handled accordingly
	          if (animationCancelled) {
	            applyAnimationClasses(element, options);
	            applyAnimationStyles(element, options);
	          }

	          // if the event changed from something like enter to leave then we do
	          // it, otherwise if it's the same then the end result will be the same too
	          if (animationCancelled || (isStructural && animationDetails.event !== event)) {
	            options.domOperation();
	            runner.end();
	          }

	          // in the event that the element animation was not cancelled or a follow-up animation
	          // isn't allowed to animate from here then we need to clear the state of the element
	          // so that any future animations won't read the expired animation data.
	          if (!isValidAnimation) {
	            clearElementAnimationState(element);
	          }

	          return;
	        }

	        // this combined multiple class to addClass / removeClass into a setClass event
	        // so long as a structural event did not take over the animation
	        event = !animationDetails.structural && hasAnimationClasses(animationDetails, true)
	            ? 'setClass'
	            : animationDetails.event;

	        markElementAnimationState(element, RUNNING_STATE);
	        var realRunner = $$animation(element, event, animationDetails.options);

	        // this will update the runner's flow-control events based on
	        // the `realRunner` object.
	        runner.setHost(realRunner);
	        notifyProgress(runner, event, 'start', {});

	        realRunner.done(function(status) {
	          close(!status);
	          var animationDetails = activeAnimationsLookup.get(node);
	          if (animationDetails && animationDetails.counter === counter) {
	            clearElementAnimationState(getDomNode(element));
	          }
	          notifyProgress(runner, event, 'close', {});
	        });
	      });

	      return runner;

	      function notifyProgress(runner, event, phase, data) {
	        runInNextPostDigestOrNow(function() {
	          var callbacks = findCallbacks(parent, element, event);
	          if (callbacks.length) {
	            // do not optimize this call here to RAF because
	            // we don't know how heavy the callback code here will
	            // be and if this code is buffered then this can
	            // lead to a performance regression.
	            $$rAF(function() {
	              forEach(callbacks, function(callback) {
	                callback(element, phase, data);
	              });
	              cleanupEventListeners(phase, element);
	            });
	          } else {
	            cleanupEventListeners(phase, element);
	          }
	        });
	        runner.progress(event, phase, data);
	      }

	      function close(reject) { // jshint ignore:line
	        clearGeneratedClasses(element, options);
	        applyAnimationClasses(element, options);
	        applyAnimationStyles(element, options);
	        options.domOperation();
	        runner.complete(!reject);
	      }
	    }

	    function closeChildAnimations(element) {
	      var node = getDomNode(element);
	      var children = node.querySelectorAll('[' + NG_ANIMATE_ATTR_NAME + ']');
	      forEach(children, function(child) {
	        var state = parseInt(child.getAttribute(NG_ANIMATE_ATTR_NAME));
	        var animationDetails = activeAnimationsLookup.get(child);
	        if (animationDetails) {
	          switch (state) {
	            case RUNNING_STATE:
	              animationDetails.runner.end();
	              /* falls through */
	            case PRE_DIGEST_STATE:
	              activeAnimationsLookup.remove(child);
	              break;
	          }
	        }
	      });
	    }

	    function clearElementAnimationState(element) {
	      var node = getDomNode(element);
	      node.removeAttribute(NG_ANIMATE_ATTR_NAME);
	      activeAnimationsLookup.remove(node);
	    }

	    function isMatchingElement(nodeOrElmA, nodeOrElmB) {
	      return getDomNode(nodeOrElmA) === getDomNode(nodeOrElmB);
	    }

	    /**
	     * This fn returns false if any of the following is true:
	     * a) animations on any parent element are disabled, and animations on the element aren't explicitly allowed
	     * b) a parent element has an ongoing structural animation, and animateChildren is false
	     * c) the element is not a child of the body
	     * d) the element is not a child of the $rootElement
	     */
	    function areAnimationsAllowed(element, parentElement, event) {
	      var bodyElement = jqLite($document[0].body);
	      var bodyElementDetected = isMatchingElement(element, bodyElement) || element[0].nodeName === 'HTML';
	      var rootElementDetected = isMatchingElement(element, $rootElement);
	      var parentAnimationDetected = false;
	      var animateChildren;
	      var elementDisabled = disabledElementsLookup.get(getDomNode(element));

	      var parentHost = jqLite.data(element[0], NG_ANIMATE_PIN_DATA);
	      if (parentHost) {
	        parentElement = parentHost;
	      }

	      parentElement = getDomNode(parentElement);

	      while (parentElement) {
	        if (!rootElementDetected) {
	          // angular doesn't want to attempt to animate elements outside of the application
	          // therefore we need to ensure that the rootElement is an ancestor of the current element
	          rootElementDetected = isMatchingElement(parentElement, $rootElement);
	        }

	        if (parentElement.nodeType !== ELEMENT_NODE) {
	          // no point in inspecting the #document element
	          break;
	        }

	        var details = activeAnimationsLookup.get(parentElement) || {};
	        // either an enter, leave or move animation will commence
	        // therefore we can't allow any animations to take place
	        // but if a parent animation is class-based then that's ok
	        if (!parentAnimationDetected) {
	          var parentElementDisabled = disabledElementsLookup.get(parentElement);

	          if (parentElementDisabled === true && elementDisabled !== false) {
	            // disable animations if the user hasn't explicitly enabled animations on the
	            // current element
	            elementDisabled = true;
	            // element is disabled via parent element, no need to check anything else
	            break;
	          } else if (parentElementDisabled === false) {
	            elementDisabled = false;
	          }
	          parentAnimationDetected = details.structural;
	        }

	        if (isUndefined(animateChildren) || animateChildren === true) {
	          var value = jqLite.data(parentElement, NG_ANIMATE_CHILDREN_DATA);
	          if (isDefined(value)) {
	            animateChildren = value;
	          }
	        }

	        // there is no need to continue traversing at this point
	        if (parentAnimationDetected && animateChildren === false) break;

	        if (!bodyElementDetected) {
	          // we also need to ensure that the element is or will be a part of the body element
	          // otherwise it is pointless to even issue an animation to be rendered
	          bodyElementDetected = isMatchingElement(parentElement, bodyElement);
	        }

	        if (bodyElementDetected && rootElementDetected) {
	          // If both body and root have been found, any other checks are pointless,
	          // as no animation data should live outside the application
	          break;
	        }

	        if (!rootElementDetected) {
	          // If no rootElement is detected, check if the parentElement is pinned to another element
	          parentHost = jqLite.data(parentElement, NG_ANIMATE_PIN_DATA);
	          if (parentHost) {
	            // The pin target element becomes the next parent element
	            parentElement = getDomNode(parentHost);
	            continue;
	          }
	        }

	        parentElement = parentElement.parentNode;
	      }

	      var allowAnimation = (!parentAnimationDetected || animateChildren) && elementDisabled !== true;
	      return allowAnimation && rootElementDetected && bodyElementDetected;
	    }

	    function markElementAnimationState(element, state, details) {
	      details = details || {};
	      details.state = state;

	      var node = getDomNode(element);
	      node.setAttribute(NG_ANIMATE_ATTR_NAME, state);

	      var oldValue = activeAnimationsLookup.get(node);
	      var newValue = oldValue
	          ? extend(oldValue, details)
	          : details;
	      activeAnimationsLookup.put(node, newValue);
	    }
	  }];
	}];

	var $$AnimationProvider = ['$animateProvider', function($animateProvider) {
	  var NG_ANIMATE_REF_ATTR = 'ng-animate-ref';

	  var drivers = this.drivers = [];

	  var RUNNER_STORAGE_KEY = '$$animationRunner';

	  function setRunner(element, runner) {
	    element.data(RUNNER_STORAGE_KEY, runner);
	  }

	  function removeRunner(element) {
	    element.removeData(RUNNER_STORAGE_KEY);
	  }

	  function getRunner(element) {
	    return element.data(RUNNER_STORAGE_KEY);
	  }

	  this.$get = ['$$jqLite', '$rootScope', '$injector', '$$AnimateRunner', '$$HashMap', '$$rAFScheduler',
	       function($$jqLite,   $rootScope,   $injector,   $$AnimateRunner,   $$HashMap,   $$rAFScheduler) {

	    var animationQueue = [];
	    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);

	    function sortAnimations(animations) {
	      var tree = { children: [] };
	      var i, lookup = new $$HashMap();

	      // this is done first beforehand so that the hashmap
	      // is filled with a list of the elements that will be animated
	      for (i = 0; i < animations.length; i++) {
	        var animation = animations[i];
	        lookup.put(animation.domNode, animations[i] = {
	          domNode: animation.domNode,
	          fn: animation.fn,
	          children: []
	        });
	      }

	      for (i = 0; i < animations.length; i++) {
	        processNode(animations[i]);
	      }

	      return flatten(tree);

	      function processNode(entry) {
	        if (entry.processed) return entry;
	        entry.processed = true;

	        var elementNode = entry.domNode;
	        var parentNode = elementNode.parentNode;
	        lookup.put(elementNode, entry);

	        var parentEntry;
	        while (parentNode) {
	          parentEntry = lookup.get(parentNode);
	          if (parentEntry) {
	            if (!parentEntry.processed) {
	              parentEntry = processNode(parentEntry);
	            }
	            break;
	          }
	          parentNode = parentNode.parentNode;
	        }

	        (parentEntry || tree).children.push(entry);
	        return entry;
	      }

	      function flatten(tree) {
	        var result = [];
	        var queue = [];
	        var i;

	        for (i = 0; i < tree.children.length; i++) {
	          queue.push(tree.children[i]);
	        }

	        var remainingLevelEntries = queue.length;
	        var nextLevelEntries = 0;
	        var row = [];

	        for (i = 0; i < queue.length; i++) {
	          var entry = queue[i];
	          if (remainingLevelEntries <= 0) {
	            remainingLevelEntries = nextLevelEntries;
	            nextLevelEntries = 0;
	            result.push(row);
	            row = [];
	          }
	          row.push(entry.fn);
	          entry.children.forEach(function(childEntry) {
	            nextLevelEntries++;
	            queue.push(childEntry);
	          });
	          remainingLevelEntries--;
	        }

	        if (row.length) {
	          result.push(row);
	        }

	        return result;
	      }
	    }

	    // TODO(matsko): document the signature in a better way
	    return function(element, event, options) {
	      options = prepareAnimationOptions(options);
	      var isStructural = ['enter', 'move', 'leave'].indexOf(event) >= 0;

	      // there is no animation at the current moment, however
	      // these runner methods will get later updated with the
	      // methods leading into the driver's end/cancel methods
	      // for now they just stop the animation from starting
	      var runner = new $$AnimateRunner({
	        end: function() { close(); },
	        cancel: function() { close(true); }
	      });

	      if (!drivers.length) {
	        close();
	        return runner;
	      }

	      setRunner(element, runner);

	      var classes = mergeClasses(element.attr('class'), mergeClasses(options.addClass, options.removeClass));
	      var tempClasses = options.tempClasses;
	      if (tempClasses) {
	        classes += ' ' + tempClasses;
	        options.tempClasses = null;
	      }

	      var prepareClassName;
	      if (isStructural) {
	        prepareClassName = 'ng-' + event + PREPARE_CLASS_SUFFIX;
	        $$jqLite.addClass(element, prepareClassName);
	      }

	      animationQueue.push({
	        // this data is used by the postDigest code and passed into
	        // the driver step function
	        element: element,
	        classes: classes,
	        event: event,
	        structural: isStructural,
	        options: options,
	        beforeStart: beforeStart,
	        close: close
	      });

	      element.on('$destroy', handleDestroyedElement);

	      // we only want there to be one function called within the post digest
	      // block. This way we can group animations for all the animations that
	      // were apart of the same postDigest flush call.
	      if (animationQueue.length > 1) return runner;

	      $rootScope.$$postDigest(function() {
	        var animations = [];
	        forEach(animationQueue, function(entry) {
	          // the element was destroyed early on which removed the runner
	          // form its storage. This means we can't animate this element
	          // at all and it already has been closed due to destruction.
	          if (getRunner(entry.element)) {
	            animations.push(entry);
	          } else {
	            entry.close();
	          }
	        });

	        // now any future animations will be in another postDigest
	        animationQueue.length = 0;

	        var groupedAnimations = groupAnimations(animations);
	        var toBeSortedAnimations = [];

	        forEach(groupedAnimations, function(animationEntry) {
	          toBeSortedAnimations.push({
	            domNode: getDomNode(animationEntry.from ? animationEntry.from.element : animationEntry.element),
	            fn: function triggerAnimationStart() {
	              // it's important that we apply the `ng-animate` CSS class and the
	              // temporary classes before we do any driver invoking since these
	              // CSS classes may be required for proper CSS detection.
	              animationEntry.beforeStart();

	              var startAnimationFn, closeFn = animationEntry.close;

	              // in the event that the element was removed before the digest runs or
	              // during the RAF sequencing then we should not trigger the animation.
	              var targetElement = animationEntry.anchors
	                  ? (animationEntry.from.element || animationEntry.to.element)
	                  : animationEntry.element;

	              if (getRunner(targetElement)) {
	                var operation = invokeFirstDriver(animationEntry);
	                if (operation) {
	                  startAnimationFn = operation.start;
	                }
	              }

	              if (!startAnimationFn) {
	                closeFn();
	              } else {
	                var animationRunner = startAnimationFn();
	                animationRunner.done(function(status) {
	                  closeFn(!status);
	                });
	                updateAnimationRunners(animationEntry, animationRunner);
	              }
	            }
	          });
	        });

	        // we need to sort each of the animations in order of parent to child
	        // relationships. This ensures that the child classes are applied at the
	        // right time.
	        $$rAFScheduler(sortAnimations(toBeSortedAnimations));
	      });

	      return runner;

	      // TODO(matsko): change to reference nodes
	      function getAnchorNodes(node) {
	        var SELECTOR = '[' + NG_ANIMATE_REF_ATTR + ']';
	        var items = node.hasAttribute(NG_ANIMATE_REF_ATTR)
	              ? [node]
	              : node.querySelectorAll(SELECTOR);
	        var anchors = [];
	        forEach(items, function(node) {
	          var attr = node.getAttribute(NG_ANIMATE_REF_ATTR);
	          if (attr && attr.length) {
	            anchors.push(node);
	          }
	        });
	        return anchors;
	      }

	      function groupAnimations(animations) {
	        var preparedAnimations = [];
	        var refLookup = {};
	        forEach(animations, function(animation, index) {
	          var element = animation.element;
	          var node = getDomNode(element);
	          var event = animation.event;
	          var enterOrMove = ['enter', 'move'].indexOf(event) >= 0;
	          var anchorNodes = animation.structural ? getAnchorNodes(node) : [];

	          if (anchorNodes.length) {
	            var direction = enterOrMove ? 'to' : 'from';

	            forEach(anchorNodes, function(anchor) {
	              var key = anchor.getAttribute(NG_ANIMATE_REF_ATTR);
	              refLookup[key] = refLookup[key] || {};
	              refLookup[key][direction] = {
	                animationID: index,
	                element: jqLite(anchor)
	              };
	            });
	          } else {
	            preparedAnimations.push(animation);
	          }
	        });

	        var usedIndicesLookup = {};
	        var anchorGroups = {};
	        forEach(refLookup, function(operations, key) {
	          var from = operations.from;
	          var to = operations.to;

	          if (!from || !to) {
	            // only one of these is set therefore we can't have an
	            // anchor animation since all three pieces are required
	            var index = from ? from.animationID : to.animationID;
	            var indexKey = index.toString();
	            if (!usedIndicesLookup[indexKey]) {
	              usedIndicesLookup[indexKey] = true;
	              preparedAnimations.push(animations[index]);
	            }
	            return;
	          }

	          var fromAnimation = animations[from.animationID];
	          var toAnimation = animations[to.animationID];
	          var lookupKey = from.animationID.toString();
	          if (!anchorGroups[lookupKey]) {
	            var group = anchorGroups[lookupKey] = {
	              structural: true,
	              beforeStart: function() {
	                fromAnimation.beforeStart();
	                toAnimation.beforeStart();
	              },
	              close: function() {
	                fromAnimation.close();
	                toAnimation.close();
	              },
	              classes: cssClassesIntersection(fromAnimation.classes, toAnimation.classes),
	              from: fromAnimation,
	              to: toAnimation,
	              anchors: [] // TODO(matsko): change to reference nodes
	            };

	            // the anchor animations require that the from and to elements both have at least
	            // one shared CSS class which effectively marries the two elements together to use
	            // the same animation driver and to properly sequence the anchor animation.
	            if (group.classes.length) {
	              preparedAnimations.push(group);
	            } else {
	              preparedAnimations.push(fromAnimation);
	              preparedAnimations.push(toAnimation);
	            }
	          }

	          anchorGroups[lookupKey].anchors.push({
	            'out': from.element, 'in': to.element
	          });
	        });

	        return preparedAnimations;
	      }

	      function cssClassesIntersection(a,b) {
	        a = a.split(' ');
	        b = b.split(' ');
	        var matches = [];

	        for (var i = 0; i < a.length; i++) {
	          var aa = a[i];
	          if (aa.substring(0,3) === 'ng-') continue;

	          for (var j = 0; j < b.length; j++) {
	            if (aa === b[j]) {
	              matches.push(aa);
	              break;
	            }
	          }
	        }

	        return matches.join(' ');
	      }

	      function invokeFirstDriver(animationDetails) {
	        // we loop in reverse order since the more general drivers (like CSS and JS)
	        // may attempt more elements, but custom drivers are more particular
	        for (var i = drivers.length - 1; i >= 0; i--) {
	          var driverName = drivers[i];
	          if (!$injector.has(driverName)) continue; // TODO(matsko): remove this check

	          var factory = $injector.get(driverName);
	          var driver = factory(animationDetails);
	          if (driver) {
	            return driver;
	          }
	        }
	      }

	      function beforeStart() {
	        element.addClass(NG_ANIMATE_CLASSNAME);
	        if (tempClasses) {
	          $$jqLite.addClass(element, tempClasses);
	        }
	        if (prepareClassName) {
	          $$jqLite.removeClass(element, prepareClassName);
	          prepareClassName = null;
	        }
	      }

	      function updateAnimationRunners(animation, newRunner) {
	        if (animation.from && animation.to) {
	          update(animation.from.element);
	          update(animation.to.element);
	        } else {
	          update(animation.element);
	        }

	        function update(element) {
	          var runner = getRunner(element);
	          if (runner) runner.setHost(newRunner);
	        }
	      }

	      function handleDestroyedElement() {
	        var runner = getRunner(element);
	        if (runner && (event !== 'leave' || !options.$$domOperationFired)) {
	          runner.end();
	        }
	      }

	      function close(rejected) { // jshint ignore:line
	        element.off('$destroy', handleDestroyedElement);
	        removeRunner(element);

	        applyAnimationClasses(element, options);
	        applyAnimationStyles(element, options);
	        options.domOperation();

	        if (tempClasses) {
	          $$jqLite.removeClass(element, tempClasses);
	        }

	        element.removeClass(NG_ANIMATE_CLASSNAME);
	        runner.complete(!rejected);
	      }
	    };
	  }];
	}];

	/**
	 * @ngdoc directive
	 * @name ngAnimateSwap
	 * @restrict A
	 * @scope
	 *
	 * @description
	 *
	 * ngAnimateSwap is a animation-oriented directive that allows for the container to
	 * be removed and entered in whenever the associated expression changes. A
	 * common usecase for this directive is a rotating banner or slider component which
	 * contains one image being present at a time. When the active image changes
	 * then the old image will perform a `leave` animation and the new element
	 * will be inserted via an `enter` animation.
	 *
	 * @animations
	 * | Animation                        | Occurs                               |
	 * |----------------------------------|--------------------------------------|
	 * | {@link ng.$animate#enter enter}  | when the new element is inserted to the DOM  |
	 * | {@link ng.$animate#leave leave}  | when the old element is removed from the DOM |
	 *
	 * @example
	 * <example name="ngAnimateSwap-directive" module="ngAnimateSwapExample"
	 *          deps="angular-animate.js"
	 *          animations="true" fixBase="true">
	 *   <file name="index.html">
	 *     <div class="container" ng-controller="AppCtrl">
	 *       <div ng-animate-swap="number" class="cell swap-animation" ng-class="colorClass(number)">
	 *         {{ number }}
	 *       </div>
	 *     </div>
	 *   </file>
	 *   <file name="script.js">
	 *     angular.module('ngAnimateSwapExample', ['ngAnimate'])
	 *       .controller('AppCtrl', ['$scope', '$interval', function($scope, $interval) {
	 *         $scope.number = 0;
	 *         $interval(function() {
	 *           $scope.number++;
	 *         }, 1000);
	 *
	 *         var colors = ['red','blue','green','yellow','orange'];
	 *         $scope.colorClass = function(number) {
	 *           return colors[number % colors.length];
	 *         };
	 *       }]);
	 *   </file>
	 *  <file name="animations.css">
	 *  .container {
	 *    height:250px;
	 *    width:250px;
	 *    position:relative;
	 *    overflow:hidden;
	 *    border:2px solid black;
	 *  }
	 *  .container .cell {
	 *    font-size:150px;
	 *    text-align:center;
	 *    line-height:250px;
	 *    position:absolute;
	 *    top:0;
	 *    left:0;
	 *    right:0;
	 *    border-bottom:2px solid black;
	 *  }
	 *  .swap-animation.ng-enter, .swap-animation.ng-leave {
	 *    transition:0.5s linear all;
	 *  }
	 *  .swap-animation.ng-enter {
	 *    top:-250px;
	 *  }
	 *  .swap-animation.ng-enter-active {
	 *    top:0px;
	 *  }
	 *  .swap-animation.ng-leave {
	 *    top:0px;
	 *  }
	 *  .swap-animation.ng-leave-active {
	 *    top:250px;
	 *  }
	 *  .red { background:red; }
	 *  .green { background:green; }
	 *  .blue { background:blue; }
	 *  .yellow { background:yellow; }
	 *  .orange { background:orange; }
	 *  </file>
	 * </example>
	 */
	var ngAnimateSwapDirective = ['$animate', '$rootScope', function($animate, $rootScope) {
	  return {
	    restrict: 'A',
	    transclude: 'element',
	    terminal: true,
	    priority: 600, // we use 600 here to ensure that the directive is caught before others
	    link: function(scope, $element, attrs, ctrl, $transclude) {
	      var previousElement, previousScope;
	      scope.$watchCollection(attrs.ngAnimateSwap || attrs['for'], function(value) {
	        if (previousElement) {
	          $animate.leave(previousElement);
	        }
	        if (previousScope) {
	          previousScope.$destroy();
	          previousScope = null;
	        }
	        if (value || value === 0) {
	          previousScope = scope.$new();
	          $transclude(previousScope, function(element) {
	            previousElement = element;
	            $animate.enter(element, null, $element);
	          });
	        }
	      });
	    }
	  };
	}];

	/* global angularAnimateModule: true,

	   ngAnimateSwapDirective,
	   $$AnimateAsyncRunFactory,
	   $$rAFSchedulerFactory,
	   $$AnimateChildrenDirective,
	   $$AnimateQueueProvider,
	   $$AnimationProvider,
	   $AnimateCssProvider,
	   $$AnimateCssDriverProvider,
	   $$AnimateJsProvider,
	   $$AnimateJsDriverProvider,
	*/

	/**
	 * @ngdoc module
	 * @name ngAnimate
	 * @description
	 *
	 * The `ngAnimate` module provides support for CSS-based animations (keyframes and transitions) as well as JavaScript-based animations via
	 * callback hooks. Animations are not enabled by default, however, by including `ngAnimate` the animation hooks are enabled for an Angular app.
	 *
	 * <div doc-module-components="ngAnimate"></div>
	 *
	 * # Usage
	 * Simply put, there are two ways to make use of animations when ngAnimate is used: by using **CSS** and **JavaScript**. The former works purely based
	 * using CSS (by using matching CSS selectors/styles) and the latter triggers animations that are registered via `module.animation()`. For
	 * both CSS and JS animations the sole requirement is to have a matching `CSS class` that exists both in the registered animation and within
	 * the HTML element that the animation will be triggered on.
	 *
	 * ## Directive Support
	 * The following directives are "animation aware":
	 *
	 * | Directive                                                                                                | Supported Animations                                                     |
	 * |----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
	 * | {@link ng.directive:ngRepeat#animations ngRepeat}                                                        | enter, leave and move                                                    |
	 * | {@link ngRoute.directive:ngView#animations ngView}                                                       | enter and leave                                                          |
	 * | {@link ng.directive:ngInclude#animations ngInclude}                                                      | enter and leave                                                          |
	 * | {@link ng.directive:ngSwitch#animations ngSwitch}                                                        | enter and leave                                                          |
	 * | {@link ng.directive:ngIf#animations ngIf}                                                                | enter and leave                                                          |
	 * | {@link ng.directive:ngClass#animations ngClass}                                                          | add and remove (the CSS class(es) present)                               |
	 * | {@link ng.directive:ngShow#animations ngShow} & {@link ng.directive:ngHide#animations ngHide}            | add and remove (the ng-hide class value)                                 |
	 * | {@link ng.directive:form#animation-hooks form} & {@link ng.directive:ngModel#animation-hooks ngModel}    | add and remove (dirty, pristine, valid, invalid & all other validations) |
	 * | {@link module:ngMessages#animations ngMessages}                                                          | add and remove (ng-active & ng-inactive)                                 |
	 * | {@link module:ngMessages#animations ngMessage}                                                           | enter and leave                                                          |
	 *
	 * (More information can be found by visiting each the documentation associated with each directive.)
	 *
	 * ## CSS-based Animations
	 *
	 * CSS-based animations with ngAnimate are unique since they require no JavaScript code at all. By using a CSS class that we reference between our HTML
	 * and CSS code we can create an animation that will be picked up by Angular when an the underlying directive performs an operation.
	 *
	 * The example below shows how an `enter` animation can be made possible on an element using `ng-if`:
	 *
	 * ```html
	 * <div ng-if="bool" class="fade">
	 *    Fade me in out
	 * </div>
	 * <button ng-click="bool=true">Fade In!</button>
	 * <button ng-click="bool=false">Fade Out!</button>
	 * ```
	 *
	 * Notice the CSS class **fade**? We can now create the CSS transition code that references this class:
	 *
	 * ```css
	 * /&#42; The starting CSS styles for the enter animation &#42;/
	 * .fade.ng-enter {
	 *   transition:0.5s linear all;
	 *   opacity:0;
	 * }
	 *
	 * /&#42; The finishing CSS styles for the enter animation &#42;/
	 * .fade.ng-enter.ng-enter-active {
	 *   opacity:1;
	 * }
	 * ```
	 *
	 * The key thing to remember here is that, depending on the animation event (which each of the directives above trigger depending on what's going on) two
	 * generated CSS classes will be applied to the element; in the example above we have `.ng-enter` and `.ng-enter-active`. For CSS transitions, the transition
	 * code **must** be defined within the starting CSS class (in this case `.ng-enter`). The destination class is what the transition will animate towards.
	 *
	 * If for example we wanted to create animations for `leave` and `move` (ngRepeat triggers move) then we can do so using the same CSS naming conventions:
	 *
	 * ```css
	 * /&#42; now the element will fade out before it is removed from the DOM &#42;/
	 * .fade.ng-leave {
	 *   transition:0.5s linear all;
	 *   opacity:1;
	 * }
	 * .fade.ng-leave.ng-leave-active {
	 *   opacity:0;
	 * }
	 * ```
	 *
	 * We can also make use of **CSS Keyframes** by referencing the keyframe animation within the starting CSS class:
	 *
	 * ```css
	 * /&#42; there is no need to define anything inside of the destination
	 * CSS class since the keyframe will take charge of the animation &#42;/
	 * .fade.ng-leave {
	 *   animation: my_fade_animation 0.5s linear;
	 *   -webkit-animation: my_fade_animation 0.5s linear;
	 * }
	 *
	 * @keyframes my_fade_animation {
	 *   from { opacity:1; }
	 *   to { opacity:0; }
	 * }
	 *
	 * @-webkit-keyframes my_fade_animation {
	 *   from { opacity:1; }
	 *   to { opacity:0; }
	 * }
	 * ```
	 *
	 * Feel free also mix transitions and keyframes together as well as any other CSS classes on the same element.
	 *
	 * ### CSS Class-based Animations
	 *
	 * Class-based animations (animations that are triggered via `ngClass`, `ngShow`, `ngHide` and some other directives) have a slightly different
	 * naming convention. Class-based animations are basic enough that a standard transition or keyframe can be referenced on the class being added
	 * and removed.
	 *
	 * For example if we wanted to do a CSS animation for `ngHide` then we place an animation on the `.ng-hide` CSS class:
	 *
	 * ```html
	 * <div ng-show="bool" class="fade">
	 *   Show and hide me
	 * </div>
	 * <button ng-click="bool=!bool">Toggle</button>
	 *
	 * <style>
	 * .fade.ng-hide {
	 *   transition:0.5s linear all;
	 *   opacity:0;
	 * }
	 * </style>
	 * ```
	 *
	 * All that is going on here with ngShow/ngHide behind the scenes is the `.ng-hide` class is added/removed (when the hidden state is valid). Since
	 * ngShow and ngHide are animation aware then we can match up a transition and ngAnimate handles the rest.
	 *
	 * In addition the addition and removal of the CSS class, ngAnimate also provides two helper methods that we can use to further decorate the animation
	 * with CSS styles.
	 *
	 * ```html
	 * <div ng-class="{on:onOff}" class="highlight">
	 *   Highlight this box
	 * </div>
	 * <button ng-click="onOff=!onOff">Toggle</button>
	 *
	 * <style>
	 * .highlight {
	 *   transition:0.5s linear all;
	 * }
	 * .highlight.on-add {
	 *   background:white;
	 * }
	 * .highlight.on {
	 *   background:yellow;
	 * }
	 * .highlight.on-remove {
	 *   background:black;
	 * }
	 * </style>
	 * ```
	 *
	 * We can also make use of CSS keyframes by placing them within the CSS classes.
	 *
	 *
	 * ### CSS Staggering Animations
	 * A Staggering animation is a collection of animations that are issued with a slight delay in between each successive operation resulting in a
	 * curtain-like effect. The ngAnimate module (versions >=1.2) supports staggering animations and the stagger effect can be
	 * performed by creating a **ng-EVENT-stagger** CSS class and attaching that class to the base CSS class used for
	 * the animation. The style property expected within the stagger class can either be a **transition-delay** or an
	 * **animation-delay** property (or both if your animation contains both transitions and keyframe animations).
	 *
	 * ```css
	 * .my-animation.ng-enter {
	 *   /&#42; standard transition code &#42;/
	 *   transition: 1s linear all;
	 *   opacity:0;
	 * }
	 * .my-animation.ng-enter-stagger {
	 *   /&#42; this will have a 100ms delay between each successive leave animation &#42;/
	 *   transition-delay: 0.1s;
	 *
	 *   /&#42; As of 1.4.4, this must always be set: it signals ngAnimate
	 *     to not accidentally inherit a delay property from another CSS class &#42;/
	 *   transition-duration: 0s;
	 * }
	 * .my-animation.ng-enter.ng-enter-active {
	 *   /&#42; standard transition styles &#42;/
	 *   opacity:1;
	 * }
	 * ```
	 *
	 * Staggering animations work by default in ngRepeat (so long as the CSS class is defined). Outside of ngRepeat, to use staggering animations
	 * on your own, they can be triggered by firing multiple calls to the same event on $animate. However, the restrictions surrounding this
	 * are that each of the elements must have the same CSS className value as well as the same parent element. A stagger operation
	 * will also be reset if one or more animation frames have passed since the multiple calls to `$animate` were fired.
	 *
	 * The following code will issue the **ng-leave-stagger** event on the element provided:
	 *
	 * ```js
	 * var kids = parent.children();
	 *
	 * $animate.leave(kids[0]); //stagger index=0
	 * $animate.leave(kids[1]); //stagger index=1
	 * $animate.leave(kids[2]); //stagger index=2
	 * $animate.leave(kids[3]); //stagger index=3
	 * $animate.leave(kids[4]); //stagger index=4
	 *
	 * window.requestAnimationFrame(function() {
	 *   //stagger has reset itself
	 *   $animate.leave(kids[5]); //stagger index=0
	 *   $animate.leave(kids[6]); //stagger index=1
	 *
	 *   $scope.$digest();
	 * });
	 * ```
	 *
	 * Stagger animations are currently only supported within CSS-defined animations.
	 *
	 * ### The `ng-animate` CSS class
	 *
	 * When ngAnimate is animating an element it will apply the `ng-animate` CSS class to the element for the duration of the animation.
	 * This is a temporary CSS class and it will be removed once the animation is over (for both JavaScript and CSS-based animations).
	 *
	 * Therefore, animations can be applied to an element using this temporary class directly via CSS.
	 *
	 * ```css
	 * .zipper.ng-animate {
	 *   transition:0.5s linear all;
	 * }
	 * .zipper.ng-enter {
	 *   opacity:0;
	 * }
	 * .zipper.ng-enter.ng-enter-active {
	 *   opacity:1;
	 * }
	 * .zipper.ng-leave {
	 *   opacity:1;
	 * }
	 * .zipper.ng-leave.ng-leave-active {
	 *   opacity:0;
	 * }
	 * ```
	 *
	 * (Note that the `ng-animate` CSS class is reserved and it cannot be applied on an element directly since ngAnimate will always remove
	 * the CSS class once an animation has completed.)
	 *
	 *
	 * ### The `ng-[event]-prepare` class
	 *
	 * This is a special class that can be used to prevent unwanted flickering / flash of content before
	 * the actual animation starts. The class is added as soon as an animation is initialized, but removed
	 * before the actual animation starts (after waiting for a $digest).
	 * It is also only added for *structural* animations (`enter`, `move`, and `leave`).
	 *
	 * In practice, flickering can appear when nesting elements with structural animations such as `ngIf`
	 * into elements that have class-based animations such as `ngClass`.
	 *
	 * ```html
	 * <div ng-class="{red: myProp}">
	 *   <div ng-class="{blue: myProp}">
	 *     <div class="message" ng-if="myProp"></div>
	 *   </div>
	 * </div>
	 * ```
	 *
	 * It is possible that during the `enter` animation, the `.message` div will be briefly visible before it starts animating.
	 * In that case, you can add styles to the CSS that make sure the element stays hidden before the animation starts:
	 *
	 * ```css
	 * .message.ng-enter-prepare {
	 *   opacity: 0;
	 * }
	 *
	 * ```
	 *
	 * ## JavaScript-based Animations
	 *
	 * ngAnimate also allows for animations to be consumed by JavaScript code. The approach is similar to CSS-based animations (where there is a shared
	 * CSS class that is referenced in our HTML code) but in addition we need to register the JavaScript animation on the module. By making use of the
	 * `module.animation()` module function we can register the animation.
	 *
	 * Let's see an example of a enter/leave animation using `ngRepeat`:
	 *
	 * ```html
	 * <div ng-repeat="item in items" class="slide">
	 *   {{ item }}
	 * </div>
	 * ```
	 *
	 * See the **slide** CSS class? Let's use that class to define an animation that we'll structure in our module code by using `module.animation`:
	 *
	 * ```js
	 * myModule.animation('.slide', [function() {
	 *   return {
	 *     // make note that other events (like addClass/removeClass)
	 *     // have different function input parameters
	 *     enter: function(element, doneFn) {
	 *       jQuery(element).fadeIn(1000, doneFn);
	 *
	 *       // remember to call doneFn so that angular
	 *       // knows that the animation has concluded
	 *     },
	 *
	 *     move: function(element, doneFn) {
	 *       jQuery(element).fadeIn(1000, doneFn);
	 *     },
	 *
	 *     leave: function(element, doneFn) {
	 *       jQuery(element).fadeOut(1000, doneFn);
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * The nice thing about JS-based animations is that we can inject other services and make use of advanced animation libraries such as
	 * greensock.js and velocity.js.
	 *
	 * If our animation code class-based (meaning that something like `ngClass`, `ngHide` and `ngShow` triggers it) then we can still define
	 * our animations inside of the same registered animation, however, the function input arguments are a bit different:
	 *
	 * ```html
	 * <div ng-class="color" class="colorful">
	 *   this box is moody
	 * </div>
	 * <button ng-click="color='red'">Change to red</button>
	 * <button ng-click="color='blue'">Change to blue</button>
	 * <button ng-click="color='green'">Change to green</button>
	 * ```
	 *
	 * ```js
	 * myModule.animation('.colorful', [function() {
	 *   return {
	 *     addClass: function(element, className, doneFn) {
	 *       // do some cool animation and call the doneFn
	 *     },
	 *     removeClass: function(element, className, doneFn) {
	 *       // do some cool animation and call the doneFn
	 *     },
	 *     setClass: function(element, addedClass, removedClass, doneFn) {
	 *       // do some cool animation and call the doneFn
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * ## CSS + JS Animations Together
	 *
	 * AngularJS 1.4 and higher has taken steps to make the amalgamation of CSS and JS animations more flexible. However, unlike earlier versions of Angular,
	 * defining CSS and JS animations to work off of the same CSS class will not work anymore. Therefore the example below will only result in **JS animations taking
	 * charge of the animation**:
	 *
	 * ```html
	 * <div ng-if="bool" class="slide">
	 *   Slide in and out
	 * </div>
	 * ```
	 *
	 * ```js
	 * myModule.animation('.slide', [function() {
	 *   return {
	 *     enter: function(element, doneFn) {
	 *       jQuery(element).slideIn(1000, doneFn);
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * ```css
	 * .slide.ng-enter {
	 *   transition:0.5s linear all;
	 *   transform:translateY(-100px);
	 * }
	 * .slide.ng-enter.ng-enter-active {
	 *   transform:translateY(0);
	 * }
	 * ```
	 *
	 * Does this mean that CSS and JS animations cannot be used together? Do JS-based animations always have higher priority? We can make up for the
	 * lack of CSS animations by using the `$animateCss` service to trigger our own tweaked-out, CSS-based animations directly from
	 * our own JS-based animation code:
	 *
	 * ```js
	 * myModule.animation('.slide', ['$animateCss', function($animateCss) {
	 *   return {
	 *     enter: function(element) {
	*        // this will trigger `.slide.ng-enter` and `.slide.ng-enter-active`.
	 *       return $animateCss(element, {
	 *         event: 'enter',
	 *         structural: true
	 *       });
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * The nice thing here is that we can save bandwidth by sticking to our CSS-based animation code and we don't need to rely on a 3rd-party animation framework.
	 *
	 * The `$animateCss` service is very powerful since we can feed in all kinds of extra properties that will be evaluated and fed into a CSS transition or
	 * keyframe animation. For example if we wanted to animate the height of an element while adding and removing classes then we can do so by providing that
	 * data into `$animateCss` directly:
	 *
	 * ```js
	 * myModule.animation('.slide', ['$animateCss', function($animateCss) {
	 *   return {
	 *     enter: function(element) {
	 *       return $animateCss(element, {
	 *         event: 'enter',
	 *         structural: true,
	 *         addClass: 'maroon-setting',
	 *         from: { height:0 },
	 *         to: { height: 200 }
	 *       });
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * Now we can fill in the rest via our transition CSS code:
	 *
	 * ```css
	 * /&#42; the transition tells ngAnimate to make the animation happen &#42;/
	 * .slide.ng-enter { transition:0.5s linear all; }
	 *
	 * /&#42; this extra CSS class will be absorbed into the transition
	 * since the $animateCss code is adding the class &#42;/
	 * .maroon-setting { background:red; }
	 * ```
	 *
	 * And `$animateCss` will figure out the rest. Just make sure to have the `done()` callback fire the `doneFn` function to signal when the animation is over.
	 *
	 * To learn more about what's possible be sure to visit the {@link ngAnimate.$animateCss $animateCss service}.
	 *
	 * ## Animation Anchoring (via `ng-animate-ref`)
	 *
	 * ngAnimate in AngularJS 1.4 comes packed with the ability to cross-animate elements between
	 * structural areas of an application (like views) by pairing up elements using an attribute
	 * called `ng-animate-ref`.
	 *
	 * Let's say for example we have two views that are managed by `ng-view` and we want to show
	 * that there is a relationship between two components situated in within these views. By using the
	 * `ng-animate-ref` attribute we can identify that the two components are paired together and we
	 * can then attach an animation, which is triggered when the view changes.
	 *
	 * Say for example we have the following template code:
	 *
	 * ```html
	 * <!-- index.html -->
	 * <div ng-view class="view-animation">
	 * </div>
	 *
	 * <!-- home.html -->
	 * <a href="#/banner-page">
	 *   <img src="./banner.jpg" class="banner" ng-animate-ref="banner">
	 * </a>
	 *
	 * <!-- banner-page.html -->
	 * <img src="./banner.jpg" class="banner" ng-animate-ref="banner">
	 * ```
	 *
	 * Now, when the view changes (once the link is clicked), ngAnimate will examine the
	 * HTML contents to see if there is a match reference between any components in the view
	 * that is leaving and the view that is entering. It will scan both the view which is being
	 * removed (leave) and inserted (enter) to see if there are any paired DOM elements that
	 * contain a matching ref value.
	 *
	 * The two images match since they share the same ref value. ngAnimate will now create a
	 * transport element (which is a clone of the first image element) and it will then attempt
	 * to animate to the position of the second image element in the next view. For the animation to
	 * work a special CSS class called `ng-anchor` will be added to the transported element.
	 *
	 * We can now attach a transition onto the `.banner.ng-anchor` CSS class and then
	 * ngAnimate will handle the entire transition for us as well as the addition and removal of
	 * any changes of CSS classes between the elements:
	 *
	 * ```css
	 * .banner.ng-anchor {
	 *   /&#42; this animation will last for 1 second since there are
	 *          two phases to the animation (an `in` and an `out` phase) &#42;/
	 *   transition:0.5s linear all;
	 * }
	 * ```
	 *
	 * We also **must** include animations for the views that are being entered and removed
	 * (otherwise anchoring wouldn't be possible since the new view would be inserted right away).
	 *
	 * ```css
	 * .view-animation.ng-enter, .view-animation.ng-leave {
	 *   transition:0.5s linear all;
	 *   position:fixed;
	 *   left:0;
	 *   top:0;
	 *   width:100%;
	 * }
	 * .view-animation.ng-enter {
	 *   transform:translateX(100%);
	 * }
	 * .view-animation.ng-leave,
	 * .view-animation.ng-enter.ng-enter-active {
	 *   transform:translateX(0%);
	 * }
	 * .view-animation.ng-leave.ng-leave-active {
	 *   transform:translateX(-100%);
	 * }
	 * ```
	 *
	 * Now we can jump back to the anchor animation. When the animation happens, there are two stages that occur:
	 * an `out` and an `in` stage. The `out` stage happens first and that is when the element is animated away
	 * from its origin. Once that animation is over then the `in` stage occurs which animates the
	 * element to its destination. The reason why there are two animations is to give enough time
	 * for the enter animation on the new element to be ready.
	 *
	 * The example above sets up a transition for both the in and out phases, but we can also target the out or
	 * in phases directly via `ng-anchor-out` and `ng-anchor-in`.
	 *
	 * ```css
	 * .banner.ng-anchor-out {
	 *   transition: 0.5s linear all;
	 *
	 *   /&#42; the scale will be applied during the out animation,
	 *          but will be animated away when the in animation runs &#42;/
	 *   transform: scale(1.2);
	 * }
	 *
	 * .banner.ng-anchor-in {
	 *   transition: 1s linear all;
	 * }
	 * ```
	 *
	 *
	 *
	 *
	 * ### Anchoring Demo
	 *
	  <example module="anchoringExample"
	           name="anchoringExample"
	           id="anchoringExample"
	           deps="angular-animate.js;angular-route.js"
	           animations="true">
	    <file name="index.html">
	      <a href="#/">Home</a>
	      <hr />
	      <div class="view-container">
	        <div ng-view class="view"></div>
	      </div>
	    </file>
	    <file name="script.js">
	      angular.module('anchoringExample', ['ngAnimate', 'ngRoute'])
	        .config(['$routeProvider', function($routeProvider) {
	          $routeProvider.when('/', {
	            templateUrl: 'home.html',
	            controller: 'HomeController as home'
	          });
	          $routeProvider.when('/profile/:id', {
	            templateUrl: 'profile.html',
	            controller: 'ProfileController as profile'
	          });
	        }])
	        .run(['$rootScope', function($rootScope) {
	          $rootScope.records = [
	            { id:1, title: "Miss Beulah Roob" },
	            { id:2, title: "Trent Morissette" },
	            { id:3, title: "Miss Ava Pouros" },
	            { id:4, title: "Rod Pouros" },
	            { id:5, title: "Abdul Rice" },
	            { id:6, title: "Laurie Rutherford Sr." },
	            { id:7, title: "Nakia McLaughlin" },
	            { id:8, title: "Jordon Blanda DVM" },
	            { id:9, title: "Rhoda Hand" },
	            { id:10, title: "Alexandrea Sauer" }
	          ];
	        }])
	        .controller('HomeController', [function() {
	          //empty
	        }])
	        .controller('ProfileController', ['$rootScope', '$routeParams', function($rootScope, $routeParams) {
	          var index = parseInt($routeParams.id, 10);
	          var record = $rootScope.records[index - 1];

	          this.title = record.title;
	          this.id = record.id;
	        }]);
	    </file>
	    <file name="home.html">
	      <h2>Welcome to the home page</h1>
	      <p>Please click on an element</p>
	      <a class="record"
	         ng-href="#/profile/{{ record.id }}"
	         ng-animate-ref="{{ record.id }}"
	         ng-repeat="record in records">
	        {{ record.title }}
	      </a>
	    </file>
	    <file name="profile.html">
	      <div class="profile record" ng-animate-ref="{{ profile.id }}">
	        {{ profile.title }}
	      </div>
	    </file>
	    <file name="animations.css">
	      .record {
	        display:block;
	        font-size:20px;
	      }
	      .profile {
	        background:black;
	        color:white;
	        font-size:100px;
	      }
	      .view-container {
	        position:relative;
	      }
	      .view-container > .view.ng-animate {
	        position:absolute;
	        top:0;
	        left:0;
	        width:100%;
	        min-height:500px;
	      }
	      .view.ng-enter, .view.ng-leave,
	      .record.ng-anchor {
	        transition:0.5s linear all;
	      }
	      .view.ng-enter {
	        transform:translateX(100%);
	      }
	      .view.ng-enter.ng-enter-active, .view.ng-leave {
	        transform:translateX(0%);
	      }
	      .view.ng-leave.ng-leave-active {
	        transform:translateX(-100%);
	      }
	      .record.ng-anchor-out {
	        background:red;
	      }
	    </file>
	  </example>
	 *
	 * ### How is the element transported?
	 *
	 * When an anchor animation occurs, ngAnimate will clone the starting element and position it exactly where the starting
	 * element is located on screen via absolute positioning. The cloned element will be placed inside of the root element
	 * of the application (where ng-app was defined) and all of the CSS classes of the starting element will be applied. The
	 * element will then animate into the `out` and `in` animations and will eventually reach the coordinates and match
	 * the dimensions of the destination element. During the entire animation a CSS class of `.ng-animate-shim` will be applied
	 * to both the starting and destination elements in order to hide them from being visible (the CSS styling for the class
	 * is: `visibility:hidden`). Once the anchor reaches its destination then it will be removed and the destination element
	 * will become visible since the shim class will be removed.
	 *
	 * ### How is the morphing handled?
	 *
	 * CSS Anchoring relies on transitions and keyframes and the internal code is intelligent enough to figure out
	 * what CSS classes differ between the starting element and the destination element. These different CSS classes
	 * will be added/removed on the anchor element and a transition will be applied (the transition that is provided
	 * in the anchor class). Long story short, ngAnimate will figure out what classes to add and remove which will
	 * make the transition of the element as smooth and automatic as possible. Be sure to use simple CSS classes that
	 * do not rely on DOM nesting structure so that the anchor element appears the same as the starting element (since
	 * the cloned element is placed inside of root element which is likely close to the body element).
	 *
	 * Note that if the root element is on the `<html>` element then the cloned node will be placed inside of body.
	 *
	 *
	 * ## Using $animate in your directive code
	 *
	 * So far we've explored how to feed in animations into an Angular application, but how do we trigger animations within our own directives in our application?
	 * By injecting the `$animate` service into our directive code, we can trigger structural and class-based hooks which can then be consumed by animations. Let's
	 * imagine we have a greeting box that shows and hides itself when the data changes
	 *
	 * ```html
	 * <greeting-box active="onOrOff">Hi there</greeting-box>
	 * ```
	 *
	 * ```js
	 * ngModule.directive('greetingBox', ['$animate', function($animate) {
	 *   return function(scope, element, attrs) {
	 *     attrs.$observe('active', function(value) {
	 *       value ? $animate.addClass(element, 'on') : $animate.removeClass(element, 'on');
	 *     });
	 *   });
	 * }]);
	 * ```
	 *
	 * Now the `on` CSS class is added and removed on the greeting box component. Now if we add a CSS class on top of the greeting box element
	 * in our HTML code then we can trigger a CSS or JS animation to happen.
	 *
	 * ```css
	 * /&#42; normally we would create a CSS class to reference on the element &#42;/
	 * greeting-box.on { transition:0.5s linear all; background:green; color:white; }
	 * ```
	 *
	 * The `$animate` service contains a variety of other methods like `enter`, `leave`, `animate` and `setClass`. To learn more about what's
	 * possible be sure to visit the {@link ng.$animate $animate service API page}.
	 *
	 *
	 * ## Callbacks and Promises
	 *
	 * When `$animate` is called it returns a promise that can be used to capture when the animation has ended. Therefore if we were to trigger
	 * an animation (within our directive code) then we can continue performing directive and scope related activities after the animation has
	 * ended by chaining onto the returned promise that animation method returns.
	 *
	 * ```js
	 * // somewhere within the depths of the directive
	 * $animate.enter(element, parent).then(function() {
	 *   //the animation has completed
	 * });
	 * ```
	 *
	 * (Note that earlier versions of Angular prior to v1.4 required the promise code to be wrapped using `$scope.$apply(...)`. This is not the case
	 * anymore.)
	 *
	 * In addition to the animation promise, we can also make use of animation-related callbacks within our directives and controller code by registering
	 * an event listener using the `$animate` service. Let's say for example that an animation was triggered on our view
	 * routing controller to hook into that:
	 *
	 * ```js
	 * ngModule.controller('HomePageController', ['$animate', function($animate) {
	 *   $animate.on('enter', ngViewElement, function(element) {
	 *     // the animation for this route has completed
	 *   }]);
	 * }])
	 * ```
	 *
	 * (Note that you will need to trigger a digest within the callback to get angular to notice any scope-related changes.)
	 */

	/**
	 * @ngdoc service
	 * @name $animate
	 * @kind object
	 *
	 * @description
	 * The ngAnimate `$animate` service documentation is the same for the core `$animate` service.
	 *
	 * Click here {@link ng.$animate to learn more about animations with `$animate`}.
	 */
	angular.module('ngAnimate', [])
	  .directive('ngAnimateSwap', ngAnimateSwapDirective)

	  .directive('ngAnimateChildren', $$AnimateChildrenDirective)
	  .factory('$$rAFScheduler', $$rAFSchedulerFactory)

	  .provider('$$animateQueue', $$AnimateQueueProvider)
	  .provider('$$animation', $$AnimationProvider)

	  .provider('$animateCss', $AnimateCssProvider)
	  .provider('$$animateCssDriver', $$AnimateCssDriverProvider)

	  .provider('$$animateJs', $$AnimateJsProvider)
	  .provider('$$animateJsDriver', $$AnimateJsDriverProvider);


	})(window, window.angular);


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);
	var d3 = __webpack_require__(7);

	angular.module("weatherApp")
	//Create controller.
	.controller("mainCtrl", function($scope, dataService) {

		/*
		* If the submit button is clicked the data is sent,
		* but if the user presses the return key nothing will happen.
		* So this block of code triggers the click event on the submit buttons
		* in the mainCtrl and graphCtrl (will not work if user clicks the 
		* submit button) if the return key is pressed.
		*/
		document.getElementById("searchBar")
		.addEventListener("keyup", function(event) {
		    event.preventDefault();
		    if (event.keyCode == 13) {
		        document.getElementById("submit1").click();
		        document.getElementById("submit2").click();
		    }
		});

		//Get the user input then call the getData method.
		$scope.sendData = function() {
			dataService.getData($scope.userInput, function(response) {
				var data = response.data;
				var iconUrl = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";
				var parseTime = d3.time.format("%Y%m%d%H%M%S"); //Format the time and date.

				//Set the $scope variables.
				$scope.data = data;
				$scope.cityIcon = iconUrl;





				var yMax = d3.max(organiseArray()[1
	              // (function() {
	              //   if (dataType === "1") {
	              //     return 1;
	              //   } else if(dataType === "2") {
	              //     return 2;
	              //   } else if(dataType === "3") {
	              //     return 3;
	              //   } else {
	              //     return 4;
	              //   };
	              // })()
	            ], function(element) {
	              return element + 1;
	            });

		        var yMin = d3.min(organiseArray()[1
		            // (function() {
		            //     if (dataType === "1") {
		            //       return 1;
		            //     } else if(dataType === "2") {
		            //       return 2;
		            //     } else if(dataType === "3") {
		            //       return 3;
		            //     } else {
		            //       return 4;
		            //     };
		            // })()
		        ], function(element) {
		            if((element - 1) < 0) {
		                return 0;
		            } else {
		                return element - 1;
		            };
		        });

		        var xMin = d3.min(dateTxtParser(organiseArray()[0], null), function(element) {
		            var time = element;
		            time.setTime(time.getTime() - 10800000);
		            return time;
		        });

		        var xMax = d3.max(dateTxtParser(organiseArray()[0], null), function(element) {
		            var time = element;
		            time.setTime(time.getTime() + 21600000);
		            return time;
		        });




				//Returns an array that is made up of arrays of each of the values in the list.
				function organiseArray(){

					/*
					* The yValuesArrays are to contain the measurable properties (temperature,
					* pressure etc), whereas the xValuesArray contains the list of dates on which
					* the measurable properties were recorded. These will go along the x axis.
					*/
					var yValuesArray1 = [];
					var yValuesArray2 = [];
					var yValuesArray3 = [];
					var yValuesArray4 = [];
					var xValuesArray = [];

		            for (var i = 0; i < data.list.length; i++) {
		              var containerArr = [];
		              yValuesArray1.push(data.list[i].main.temp);
		              yValuesArray2.push(data.list[i].main.pressure);
		              yValuesArray3.push(data.list[i].wind.speed);
		              yValuesArray4.push(data.list[i].main.humidity);
		              xValuesArray.push(data.list[i].dt_txt);
		              containerArr.push(xValuesArray, yValuesArray1, yValuesArray2, yValuesArray3, yValuesArray4);
		            };
		            return containerArr;
		        };

		        /*
		        * Take the date values from xValuesArray and parse them in to
		        * a time that can be read by d3.
		        */
		        function dateTxtParser(array, value) {
		        	if(array !== null && value === null) {
		        		var timeArr = [];
			            for(var i = 0; i < array.length; i++) {
			              var step1 = array[i].replace(/-/g, "");
			              var step2 = step1.replace(/:/g, "");
			              var step3 = step2.replace(/\ /g, "");
			              var time = parseTime.parse(step3);
			              timeArr.push(time);
			            }
			            return timeArr;
			        //If a single value is passed to the function instead of an array...
		        	} else if(array === null && value !== null) {
		        		var parsedValue = parseTime.parse(value);
		        		return parsedValue;
		        	}
		            
		        }

		        function finalArr(array) {
		            var arrOfDestiny = [];
		            for(var i = 0; i < data.list.length; i++) {
		              var valStore = [];
		              valStore.push(dateTxtParser(array[0], null)[i], array[1][i], array[2][i], array[3][i], array[4][i]);
		              arrOfDestiny.push(valStore);
		            }
		            return arrOfDestiny;
		        }

		        var dataObjects = finalArr(organiseArray()).map(function(d) {
		            return {
		                date: d[0],
		                close: d[1
		                    // (function() {
		                    //     if(dataType === "1") {
		                    //         return 1;
		                    //     } else if(dataType === "2") {
		                    //         return 2;
		                    //     } else if(dataType === "3") {
		                    //         return 3;
		                    //     } else {
		                    //         return 4;
		                    //     }
		                    // })()
		                ]
		            }
		        });

		        function drawGraph() {

		        	//Get container width.
		        	var container = document.getElementById("mainContainer");
		        	var containerWidth = parseFloat(window.getComputedStyle(container, null).getPropertyValue("width"));
		        	console.log(containerWidth);

		        	//Set graph width to match container.
		        	document.getElementById("graph").style.width = containerWidth;
		        	var width = containerWidth;
		        	var height = width / 2.3;
		        	var padding = 70;
		        	console.log(width);
		        	console.log(height);

		        	//Define the scale for the x axis.
				    var xScale = d3.time.scale() 
				                 .range([0, width]);
				                  
				    //Define the scale for the y axis.
				    var yScale = d3.scale.linear() 
				                 .range([height, 0]);
				                  
				    //Set up the y axis
				    var yAxis = d3.svg.axis().scale(yScale) 
				                .orient("left");
				                  
				    //Set up the x axis 
				    var xAxis = d3.svg.axis().scale(xScale) 
				                .orient("bottom")
				                .ticks(20);

				    yScale.domain([yMin, yMax]);

	                xScale.domain([xMin, xMax]);
				      
				    //Position the graph.
				    var svg = d3.select("#graph") 
				            .append("svg")
				            .attr("height", height + padding * 2)
				            .attr("width", width + padding * 2)
				            .append("g")
				            .attr("id", "svg")
				            .attr("transform", "translate(" + padding + "," + (padding - 30) + ")");





				    var valueline1 = d3.svg.line()
	                            .x(function(d) {
	                                return xScale(d.date);
	                            })
	                            .y(function(d) {
	                                return yScale(d.close);
	                            })
	                            .interpolate("cardinal");

	                var line1 = svg.append("path") //Add the valueline
	                            .attr("stroke", "#fd3400"
	                            // 	(function() {
	                            //     if(dataType === "1") {
	                            //         return "#fd3400";
	                            //     } else if(dataType === "2") {
	                            //         return "#0a9d6c";
	                            //     } else if(dataType === "3") {
	                            //         return "#976578";
	                            //     } else {
	                            //         return "#05639a";
	                            //     }
	                            // })()
	                            )
	                            .attr("stroke-width", 2)
	                            .attr("fill", "none")
	                            .attr("id", "line1")
	                            .attr("d", valueline1(dataObjects));

		            //Add x axis
		            svg.append("g")
		                .attr("class", "x axis")
		                .attr("transform", "translate(0," + height + ")")
		                .call(xAxis)
		                .selectAll("text")
		                .attr("transform", function() {
		                    return "rotate(-65)"
		                })
		                .style("text-anchor", "end")
		                .style("font-size", "10px")
		                .attr("dx", "-10px")
		                .attr("dy", "10px");

					svg.append("text")      // text label for the x axis
					    .attr("x", width / 2 )
					    .attr("y",  height + padding)
					    .style("text-anchor", "middle")
					    .text("Date/Time");
					//Add y axis
					svg.append("g")
					.attr("class", "y axis")
					.call(yAxis);

					svg.append("text")
					    .attr("transform", "rotate(-90)")
					    .attr("y", 0 - padding)
					    .attr("x",0 - (height / 2))
					    .attr("dy", "1em")
					    .style("text-anchor", "middle")
					    .text("Temperature (&deg;C)"
					    // 	function() {
					    //     switch(dataType) {
					    //         case "2":
					    //             return "Pressure (hPa)";
					    //             break;
					    //         case "3":
					    //             return "Wind Speed (meters/sec)";
					    //             break;
					    //         case "4":
					    //             return "Humidity (%)";
					    //             break;
					    //         default:
					    //             return "Temperature (&deg;C)";
					    //     }
					    // }
					    );

					var dots = svg.selectAll('circle')
					        .data(dataObjects)
					        .enter()
					        .append('circle');

					for (var i = 0; i < dataObjects.length; i++) {
					    dots.attr({"r": (containerWidth * (function() {
					            if(containerWidth >= 992) {
					                return 0.004;
					            } else {
					                return 0.007;
					            };
					        })()),
					        "cy": function(dataObjects) {
					            return yScale(dataObjects.close)
					        },
					        "cx": function(dataObjects) {
					            return xScale(dataObjects.date)
					        }
					    })
					    .style({
					    	"stroke": "#999",
					        "fill": d3.select("#line1").attr("stroke")
					    });
					};
		        }

		        drawGraph();
		        console.log(dateTxtParser(organiseArray()[0], null));
		        // console.log(dateTxtParser(null, data.list[0].dt_txt)); //Returns null, needs to return a date.
				
			});
		}
	});

/***/ },
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module("weatherApp")
	.controller("graphCtrl", function($scope, dataService, $window, $uibPosition) {
		
		//Draw the graph.
		$scope.createGraph = function() {
			//Collect the data.
			dataService.getData($scope.userInput, function(response) {
				console.log("graphCtrl");
				var data = response.data;
				// $scope.dataList = data;
				// console.log($scope.data);
				var parseTime = d3.time.format("%Y%m%d%H%M%S"); //Format the time and date.

				/*
				* The yValuesArrays are to contain the measurable properties (temperature,
				* pressure etc), whereas the xValuesArray contains the list of dates on which
				* the measurable properties were recorded. These will go along the x axis.
				*/
				var yValuesArray1 = [];
				var yValuesArray2 = [];
				var yValuesArray3 = [];
				var yValuesArray4 = [];
				var xValuesArray = [];

				//Provides an array for each of the values in the list.
				function populateArray(){
		            for (var i = 0; i < data.list.length; i++) {
		              var containerArr = [];
		              yValuesArray1.push(data.list[i].main.temp);
		              yValuesArray2.push(data.list[i].main.pressure);
		              yValuesArray3.push(data.list[i].wind.speed);
		              yValuesArray4.push(data.list[i].main.humidity);
		              xValuesArray.push(data.list[i].dt_txt);
		              containerArr.push(xValuesArray, yValuesArray1, yValuesArray2, yValuesArray3, yValuesArray4);
		            };
		            return containerArr;
		        };
		        console.log(populateArray());

		        /*
		        * Take the date values from xValuesArray and parse them in to
		        * a time that can be read by d3.
		        */
		        function dateTxtParser(array, value) {
		        	if(array !== null && value === null) {
		        		var timeArr = [];
			            for(var i = 0; i < array.length; i++) {
			              var step1 = array[i].replace(/-/g, "");
			              var step2 = step1.replace(/:/g, "");
			              var step3 = step2.replace(/\ /g, "");
			              var time = parseTime.parse(step3);
			              timeArr.push(time);
			            }
			            return timeArr;
		        	} else if(array === null && value !== null) {
		        		var parsedValue = parseTime.parse(value);
		        		return parsedValue;
		        	}
		            
		        }

		        function drawGraph(array) {

		        	//Get graph width.
		        	var width = document.getElementById("graph").width;
		        	var height = width / 2.3;
		        	var padding = 70;
		        	console.log(width);
		        	console.log(height);
		        	//Define the scale for the x axis.
				    var xScale = d3.time.scale() 
				                 .range([0, width]);
				                  
				    //Define the scale for the y axis.
				    var yScale = d3.scale.linear() 
				                 .range([height, 0]);
				                  
				    //Set up the y axis
				    var yAxis = d3.svg.axis().scale(yScale) 
				                .orient("left");
				                  
				    //Set up the x axis 
				    var xAxis = d3.svg.axis().scale(xScale) 
				                .orient("bottom")
				                .ticks(20);
				      
				    //Position the graph.
				    var svg = d3.select("#graph") 
				            .append("svg")
				            .attr("height", height + padding * 2)
				            .attr("width", width + padding * 2)
				            .append("g")
				            .attr("id", "svg")
				            .attr("transform", "translate(" + padding + "," + (padding - 30) + ")");
		        }

		        drawGraph(populateArray());
		        console.log(dateTxtParser(xValuesArray, null));
		        // console.log(dateTxtParser(null, data.list[0].dt_txt)); //Returns null, needs to return a date.
			});
		}

	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('weatherApp')
	.directive('graphDirective', function(){
	  return {
	    templateUrl: 'views/graph.html',
	    replace: true,
	    controller: 'mainCtrl'
	  }
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module("weatherApp")
	//Create service.
	.service("dataService", function($http) {
		
		//Get the data for the city entered in the search bar.
		this.getData = function(city, cb_response) {
			$http.get("/api/cityData/" + city).then(cb_response);
		}

	});

/***/ }
]);