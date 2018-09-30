$(() => {

  "use strict";

  // Globals
  const akey = config.KEY,
    sygicAPI = "https://api.sygictravelapi.com/1.0/en/";

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

  const pathname = window.location.pathname;
  switch(pathname) {
    case "/attractions" :
      $("#attractions").toggleClass("active");
      break;
    case "/activities" :
      $("#activities").toggleClass("active");
      break;
    case "/media" :
      $("#media").toggleClass("active");
      break;
    case "/map" :
      $("#map").toggleClass("active");
      break;
  } // End switch()

  // Parses and returns URL parameters
  function getUrlVars() {
    let vars = {},
      parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m,key,value) => {
        vars[key] = value.replace(/\+/g, " ").replace(/%2F/g, "/").replace(/%C3%BC/g, "ü")
          .replace(/%C3%B6/g, "ö").replace(/%C3%/g, "å").replace(/%27/g, "'");
      });
    return vars;
  } // End getUrlVars()
  // Store getUrlVars() values in variables
  let destination = getUrlVars()["destination"],
    from = getUrlVars()["from"],
    to = getUrlVars()["to"];
  // Append input values to top left corner of modal window.
  $("#main-header-destination").append(
    `<h3>${destination}</h3>`
  );
  $("#main-header-dates").append(
    `<h3>${from} &ndash; ${to}</h3>`
  ); // End append()

  // Change href attribute on click
  $("#attractions, #activities, #media, #map").on("click", (e) => {
    let query = location.search;
    if ($(e.currentTarget).is("#attractions")) {
      $("#attractions").attr("href", `/attractions${query}`);
    } else if ($(e.currentTarget).is("#activities")) {
      $("#activities").attr("href", `/activities${query}`);
    } else if ($(e.currentTarget).is("#media")) {
      $("#media").attr("href", `/media${query}`);
    } else if ($(e.currentTarget).is("#map")) {
      $("#map").attr("href", `/map${query}`);
    }
  }); // End on click function

  // Get destination results for attractions, activities, media, and map
  $("#search").on("click", () => {
    let search = $("#destination").val().toLowerCase().trim(),
      querySearch = "places/list?query=" + search;
      // topTenPOI = "places/list?query=" + search + "&level=poi&limit=10";
    // event.preventDefault();
    $.ajax({
      type: "GET",
      url: sygicAPI + querySearch,
      headers: {"x-api-key": akey},
      dataType: "json",
      success: (data) => {
        let obj = data.data.places[0].id;
        console.log(obj);
      },
      error: (error) => {
        console.log(`Error ${error}`);
      }
    }); // End Sygic API Search
  }); // End on click function

  // media = "places/" + id + "/media";

}); // End doc ready