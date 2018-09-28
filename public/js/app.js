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
      $(".dropdown, .is-active").show();
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
            $(".dropdown, .is-active").hide();
          }); // End on click function
        } // End data
      }); // End Sygic API search
    } // End if statement
  }); // End keyup() function

  // Hide search drop down menu when clicking away
  $(document).on("click", (e) => {
    const searchContainer = $("#destination");
    if (!searchContainer.is(e.target)) {
      $(".dropdown, .is-active").hide();
    }
  }); // End on click function

  // Show drop down menu when clicking back into search bar
  $("#destination").click(function() {
    $(".dropdown, .is-active").show();
  }); // End click function

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

}); // End doc ready