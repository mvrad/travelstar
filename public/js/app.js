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
          .replace(/%C3%B6/g, "ö").replace(/%C3%/g, "å").replace(/%27/g, "'").replace(/%3A/g, ":")
          .replace(/%2C/g, ",");
      });
    return vars;
  } // End getUrlVars()
  // Store getUrlVars() values in variables
  let destination = getUrlVars()["destination"],
    from = getUrlVars()["from"],
    to = getUrlVars()["to"],
    id = getUrlVars()["id"];
  // Append input values to top left corner of modal window.
  $("#main-header-destination").append(
    `<h3>${destination} <span id=dest-id>${id}</span></h3>`
  ); // End append()
  $("#main-header-dates").append(
    `<h3>${from} &ndash; ${to}</h3>`
  ); // End append()

  // Get Destination ID
  $("#destination").keyup(() => {
    let search = $("#destination").val().toLowerCase().trim(),
      value = $.trim($("#destination").val()),
      querySearch = "places/list?query=" + search;
    if (value.length > 0) {
      $.ajax({
        type: "GET",
        url: sygicAPI + querySearch,
        headers: {"x-api-key": akey},
        dataType: "json",
        success: (data) => {
          let id = data.data.places[0].id;
          $("#id").val(`${id}`);
        },
        error: (error) => {
          console.log(`Error ${error}`);
        } // End callbacks
      }); // End Sygic API Search
    } // End if statement
  }); // End on click function

  // Get destination results for attractions, activities, media, and map
  if (window.location.href.indexOf("attractions") > -1) {
    let idSearch = $("#dest-id").text(),
      topTenPOI = "places/list?parents=" + idSearch + "&level=poi&limit=10";
    $.ajax({
      type: "GET",
      url: sygicAPI + topTenPOI,
      headers: {"x-api-key": akey},
      dataType: "json",
      success: (data) => {
        let places = data.data.places;
        $("#attractions-main__left-list_container-content0").append(
          `<img src="${places[0].thumbnail_url}">
          <h3>${places[0].name}</h3>`
        );
        $("#attractions-main__left-list_container-content1").append(
          `<img src="${places[1].thumbnail_url}">
          <h3>${places[1].name}</h3>`
        );
        $("#attractions-main__left-list_container-content2").append(
          `<img src="${places[2].thumbnail_url}">
          <h3>${places[2].name}</h3>`
        );
        $("#attractions-main__left-list_container-content3").append(
          `<img src="${places[3].thumbnail_url}">
          <h3>${places[3].name}</h3>`
        );
        $("#attractions-main__left-list_container-content4").append(
          `<img src="${places[4].thumbnail_url}">
          <h3>${places[4].name}</h3>`
        );
        $("#attractions-main__left-list_container-content5").append(
          `<img src="${places[5].thumbnail_url}">
          <h3>${places[5].name}</h3>`
        );
        $("#attractions-main__left-list_container-content6").append(
          `<img src="${places[6].thumbnail_url}">
          <h3>${places[6].name}</h3>`
        );
        $("#attractions-main__left-list_container-content7").append(
          `<img src="${places[7].thumbnail_url}">
          <h3>${places[7].name}</h3>`
        );
        $("#attractions-main__left-list_container-content8").append(
          `<img src="${places[8].thumbnail_url}">
          <h3>${places[8].name}</h3>`
        );
        $("#attractions-main__left-list_container-content9").append(
          `<img src="${places[9].thumbnail_url}">
          <h3>${places[9].name}</h3>`
        );
      },
      error: (error) => {
        console.log(`Error ${error}`);
      } // End callbacks
    }); // End Sygic API Search
  }; // End window.onload function

  // media = "places/" + id + "/media";

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