document.addEventListener("DOMContentLoaded", function() {
    var beginnerTags = document.getElementsByClassName("beginner-tag");
    var intermediateTags = document.getElementsByClassName("intermediate-tag");
    var advancedTags = document.getElementsByClassName("advanced-tag");
  
    for (var i = 0; i < beginnerTags.length; i++) {
      beginnerTags[i].setAttribute("data-tooltip", "Recommended if you are just starting out. No prior knowledge required. It's highly recommended to learn these skills for Geomatics courses.");
    }
  
    for (var i = 0; i < intermediateTags.length; i++) {
      intermediateTags[i].setAttribute("data-tooltip", "Already known the basics? This will further improve your skills. Useful for Geomatics courses.");
    }
  
    for (var i = 0; i < advancedTags.length; i++) {
      advancedTags[i].setAttribute("data-tooltip", "This goes into advanced topics. This knowledge is not required for your Geomatics courses, but it can be useful if you want to dive deeper.");
    }
  });
  