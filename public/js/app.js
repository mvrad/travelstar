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
  // let value = $.trim($("#destination").val());
  //   search = $("#destination").val().toLowerCase().trim(),
  //   searching = sygicAPI + search;
  let search = "paris";

  // Get Sygic API
  $.ajax({
    type: "GET",
    url: sygicAPI + search,
    headers: {"x-api-key": akey},
    dataType: "json",
    success: (data) => {
      // console.log("success", data);
      // $.each(data.results, (i) => {

      // });
    }
  });

  // On keyup in destination input, get search values and append
  // values to a dropdown menu which displays immediately upon
  // keyup.

  // On submit button click, switch layout to "/attractions".

  // Append /home input values to top left corner of modal window.

}); // End doc ready