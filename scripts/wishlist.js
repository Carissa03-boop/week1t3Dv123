$(document).ready(function() {
    $(".remove-button").click(function() {
      $(this).closest("tr").remove();
    });
  });