// Interactions
$(document).ready(function() {
  // Draggable
  $('#draggable').draggable();

  // Droppable
  $('#droppable').droppable({
      drop: function(event, ui) {
          // Change text and color when dropped
          $('#droppable p').text('Dropped').css('color', 'green');
          $('#draggable p').text('Dropped').css('color', 'green');
      },
      out: function(event, ui) {
          // Reset text and color when dragged out
          $('#droppable p').text('Drop here').css('color', ''); // Reset color to default
          $('#draggable p').text('Drag me around').css('color', ''); // Reset color to default
      }
  });

  // Resizable
  $('#resizable').resizable();

  // Selectable
  $('#selectable').selectable({
    selecting: function(event, ui) {
        $(ui.selecting).addClass('ui-state-highlight');
    },
    unselecting: function(event, ui) {
        $(ui.unselecting).removeClass('ui-state-highlight');
    },
    stop: function() {
        var result = $('#selectable .ui-selected').map(function() {
            return $(this).text();
        }).get();
        console.log("Selected items: " + result.join(", "));
    }
  });
});

// Widgets
$(document).ready(function() {
  // Accordion
  $('#accordion').accordion();

  // Autocomplete
  var availableTags = [
      "ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure",
      "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java",
      "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"
  ];
  $('#autocomplete').autocomplete({
      source: availableTags
  });

  // Datepicker
  $('#datepicker').datepicker();

  // Initialize the slider
  $("#slider").slider({
    min: 0,
    max: 100,
    value: 50,
    slide: function(event, ui) {
        updateSliderValue(ui.value);
    }
});

// Function to update the value below the slider
function updateSliderValue(value) {
    $("#sliderValue").text("Value: " + value);
}

// Show initial slider value
updateSliderValue($("#slider").slider("value"));
});

// Effects
$(document).ready(function() {
  // Show & Hide
  $('#showHide').click(function() {
    $('#textToHide').toggle('slide', { direction: 'left' }, 1000);
  });

  // Explosion
  $('#explode').click(function() {
    var element = $(this);

    element.effect('explode', function() {
        setTimeout(function() {
            element.show('explode');
        }, 5000);
    });
  });

  // Fade-in & Fade-out
  $('#fadeInOut').click(function() {
      $(this).fadeOut().delay(500).fadeIn();
  });

  // Color animation
  $('#colorAnimation').click(function() {
      $(this).animate({
          backgroundColor: "#ffe0b2",
          color: "#333"
      }, 1000);
  });
});