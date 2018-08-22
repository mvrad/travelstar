$(() => {

  "use strict";

  // Globals
  const akey = config.KEY,
    sygicAPI = "https://api.sygictravelapi.com/1.0/en/places/list?query=";

  // Hamburger menu animation
  $(".hamburger").on("click", () => {
    $(".hamburger").toggleClass("is-active");
    if ($(".hamburger").hasClass("is-active")) {
      $(".header").animate({marginTop: "0", height: "100vh"})
    } else ($(".header").animate({marginTop: "-295px"}));
  });

  // Set focus to fields
  $("#destination").focus();

  // Datepicker
  $("#from").datepicker();
  $("#to").datepicker();

  // Get current year
  $("#year").text(new Date().getFullYear());

  // Destination search
  $("#destination").keyup((e) => {
    let search = $("#destination").val().toLowerCase().trim(),
    value = $.trim($("#destination").val());
    if (value.length > 0) {
      $(".dropdown").addClass("is-active");
      $.ajax({
        type: "GET",
        url: sygicAPI + search,
        headers: {"x-api-key": akey},
        dataType: "json",
        success: (data) => {
          let places = data.data.places;
          $("#name-1").html(places[0].name);
          $("#name-2").html(places[1].name);
          $("#name-3").html(places[2].name);
          $("#name-4").html(places[3].name);
          $("#name-5").html(places[4].name);
          $(".dropdown-list").on("click", ".list-name", (e) => {
            $("#destination").val($(e.target).text());
            $(".dropdown").removeClass("is-active");
          }); // End on click function
        } // End data
      }); // End Sygic API search
    } else {
      $(".dropdown").removeClass("is-active");
    } // End if else statement
  }); // End keyup() function

  // On submit button click, switch layout to "/attractions".

  // Append /home input values to top left corner of modal window.

}); // End doc ready