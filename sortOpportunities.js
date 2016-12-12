(function(window) {
  'use strict';

  function define_library() {

    function _appendTerm(descArr, self) {
      return descArr.map(function(el) {
        return el.map(function(item, index) {
          var leadingSpace = index === 0 ? "" : " ";
          return leadingSpace + self.terms[index] + ": " + item;
        });
      });
    }

    function _mapDesc(item) {
      var splitString = item.split(", ");
      return [splitString[0], splitString[1], (splitString[2] + ", " + splitString[3]), (splitString[4] + "-" + splitString[5])];
    }

    function output(input, obj) {
      var self = obj;
      var inputArray = input.split("\n").sort();
      var descArr = inputArray.map(_mapDesc);
      var termDescArr = _appendTerm(descArr, self);

      return self.header + termDescArr.toString().replace(/,Title:/g, "\nTitle:");
    }

    return {
      header: "All Opportunities\n",
      terms: ["Title", "Organization", "Location", "Pay"],
      output: function(input) {
        return output(input, this);
      }
    }

  }

  //define globally if it doesn't already exist
  if (typeof(SortOpps) === 'undefined') {
    window.SortOpps = define_library();
  }

})(window);
