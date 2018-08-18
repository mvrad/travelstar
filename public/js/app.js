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
      // console.log("success", data);
      // $.each(data.results, (i) => {

      // });
    }
  });

  // Ping app every 5 minutes
  setInterval(function() {
    http.get("https://travelstar.herokuapp.com");
  }, 300000);

}); // End doc ready