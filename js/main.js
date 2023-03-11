$('#nebula').on("click", function () {
  //hide all areas
  $(".objects-container").hide();

  //show classes related to active filter
  $(".nebula").show();

  //highlight filter
  $("#nebula").addClass("highlight");

})
//filters!
$(".object-tile").filter(".nebula");
//.hide(), .show(), .toggle()