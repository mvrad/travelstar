$(() => {

  "use strict";

  // Globals
  const akey = config.KEY,
    sygicAPI = "https://api.sygictravelapi.com/1.0/en/places/list?query=";

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
      console.log("success", data);
      // let places = data.places;
      // $.each(data.results, (i) => {
      // });
    }
  });

}); // End doc ready