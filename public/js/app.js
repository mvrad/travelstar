$(() => {

  "use strict";

  // Globals
  const akey = config.KEY,
    sygicAPI = "https://api.sygictravelapi.com/1.1/en/";

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
    case "/dining" :
      $("#dining").toggleClass("active");
      break;
    case "/media" :
      $("#media").toggleClass("active");
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

  // Get destination id
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

  // Get destination results for attractions
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
        $.each(places, (i) => {
          $("#attractions-main__left-list li").append(
            `<div class=attractions-main__left-list_container-num>
            </div>
            <div class=attractions-main__left-list_container-content>` +
            ((`${places[i].thumbnail_url}` === "null") ? 
              `<img src="/img/travelstar-logo.svg" style="width: 150px">` : 
              `<img src=${places[i].thumbnail_url}>`) +
            `<h3>${i + 1}. ${places[i].name}</h3>
            </div>`
          ); // End append on left
        }); // End $.each() function
        $(".attractions-main__right").append(
          `<br>
          <h1>${places[0].name}</h1>` +
          ((`${places[0].thumbnail_url}` === "null") ? 
          `<img src="/img/travelstar-logo.svg" style="width: 150px">` : 
          `<img src=${places[0].thumbnail_url}>`) +
          `<br>
          <p>
          <span class=bold>Local Name: </span>${places[0].original_name}
          <br>
          <span class=bold>Location: </span>${places[0].name_suffix}
          <br><br>
          ${places[0].perex}
          </p>`
        ); // End append on right
      }, // End success callback
      error: (error) => {
        console.log(`Error ${error}`);
      } // End success/error callbacks
    }); // End Sygic API Search
  }; // End window.onload function

  // Get attractions POI information on click
  $("#attractions-main__left-list").on("click", "img", (e) => {
    let idSearch = $(e.currentTarget).attr("src").split("/")[4],
      POISearch = "places/" + idSearch;
    $.ajax({
      type: "GET",
      url: sygicAPI + POISearch,
      headers: {"x-api-key": akey},
      dataType: "json",
      success: (data) => {
        let place = data.data.place;
        if ($(this).text() === "") {
          $(".attractions-main__right").empty();
          $(".attractions-main__right").append(
            `<br>
            <h1>${place.name}</h1>
            <img src=${place.thumbnail_url}>
            <br>
            <p>
            <span class=bold>Local Name: </span>${place.original_name}
            <br>
            <span class=bold>Location: </span>${place.name_suffix}
            <br><br>
            ${place.perex}
            </p>`
          ); // End append
        } // End if statement
      }, // End success callback
      error: (error) => {
        console.log(`Error ${error}`);
      } // End success/error callbacks
    }); // End Sygic API Search
  }); // End on click function

  // Get destination results for activities
  if (window.location.href.indexOf("activities") > -1) {
    let idSearch = $("#dest-id").text(),
      tourSearch = "tours/viator?parent_place_id=" + idSearch;
    $.ajax({
      type: "GET",
      url: sygicAPI + tourSearch,
      headers: {"x-api-key": akey},
      dataType: "json",
      success: (data) => {
        let tours = data.data.tours;
        $.each(tours, (i) => {
          $(".activities-main__list li").append(
            `<img class=activities-main__list-img src=${tours[i].photo_url}>
            <h1>${tours[i].title}</h1>
            <p>
            <span class=bold>Price: </span>${tours[i].price}
            <br>
            <span class=bold>Duration: </span>${tours[i].duration}
            <br>
            <span class=bold>Rating: </span>${tours[i].rating}
            <br><br>
            ${tours[i].perex}
            </p>`
          ); // End append
        }); // End $.each() function
      }, // End success callback
      error: (error) => {
        console.log(`Error ${error}`);
      } // End success/error callbacks
    }); // End Sygic API Search
  }; // End window.onload function

  // Get destination results for dining
  if (window.location.href.indexOf("dining") > -1) {
    let idSearch = $("#dest-id").text(),
      diningSearch = "places/list?parents=" + idSearch + "&categories=eating&limit=20";
    $.ajax({
      type: "GET",
      url: sygicAPI + diningSearch,
      headers: {"x-api-key": akey},
      dataType: "json",
      success: (data) => {
        let dining = data.data.places;
        $.each(dining, (i) => {
          $("#dining-main__left-list li").append(
            `<div class=dining-main__left-list_container-num>
            </div>
            <div class=dining-main__left-list_container-content>` +
            ((`${dining[i].thumbnail_url}` === "null") ? 
              `<img src="/img/travelstar-logo.svg" style="width: 150px">` : 
              `<img src=${dining[i].thumbnail_url}>`) +
            `<h3>${i + 1}. ${dining[i].name}</h3>
            </div>`
          ); // End append on left
        }); // End $.each() function
        $(".dining-main__right").append(
          `<br>
          <h1>${dining[0].name}</h1>` +
          ((`${dining[0].thumbnail_url}` === "null") ? 
          `<img src="/img/travelstar-logo.svg" style="width: 150px">` : 
          `<img src=${dining[0].thumbnail_url}>`) +
          `<br>
          <p>
          <span class=bold>Local Name: </span>${dining[0].original_name}
          <br>
          <span class=bold>Location: </span>${dining[0].name_suffix}
          <br><br>
          ${dining[0].perex}
          </p>`
        ); // End append on right
      }, // End success callback
      error: (error) => {
        console.log(`Error ${error}`);
      } // End success/error callbacks
    }); // End Sygic API Search
  }; // End window.onload function

  // Get dining POI information on click
  $("#dining-main").on("click", "img", (e) => {
    let idSearch = $(e.currentTarget).attr("src").split("/")[4],
      POISearch = "places/" + idSearch;
    $.ajax({
      type: "GET",
      url: sygicAPI + POISearch,
      headers: {"x-api-key": akey},
      dataType: "json",
      success: (data) => {
        let place = data.data.place;
        if ($(this).text() === "") {
          $(".dining-main__right").empty();
          $(".dining-main__right").append(
            `<br>
            <h1>${place.name}</h1>` +
            ((place.thumbnail_url === "null") ?
              `<img src=${"./img/travelstar-logo.svg"}` :
              `<img src=${place.thumbnail_url}>`) +
            `<br>
            <p>
            <span class=bold>Local Name: </span>${place.original_name}
            <br>
            <span class=bold>Location: </span>${place.name_suffix}
            <br><br>
            ${place.perex}
            </p>`
          ); // End append
        } // End if statement
      }, // End success callback
      error: (error) => {
        console.log(`Error ${error}`);
      } // End success/error callbacks
    }); // End Sygic API Search
  }); // End on click function

  // Get destination results for media
  if (window.location.href.indexOf("media") > -1) {
    let idSearch = $("#dest-id").text(),
      mediaSearch = "places/" + idSearch + "/media";
    $.ajax({
      type: "GET",
      url: sygicAPI + mediaSearch,
      headers: {"x-api-key": akey},
      dataType: "json",
      success: (data) => {
        let media = data.data.media;
        $.each(media, (i) => {
          let imgURL = media[i].url_template,
            newURL = imgURL.replace(/({size})/, "400x200");
          $(".media-main__list li").append(
            `<img src=${newURL}>`
          ); // End append
        }); // End $.each() function
      }, // End success callback
      error: (error) => {
        console.log(`Error ${error}`);
      } // End success/error callbacks
    }); // End Sygic API Search
  }; // End window.onload function

  // Change href attribute on click
  $("#attractions, #activities, #dining, #media").on("click", (e) => {
    let query = location.search;
    if ($(e.currentTarget).is("#attractions")) {
      $("#attractions").attr("href", `/attractions${query}`);
    } else if ($(e.currentTarget).is("#activities")) {
      $("#activities").attr("href", `/activities${query}`);
    } else if ($(e.currentTarget).is("#dining")) {
      $("#dining").attr("href", `/dining${query}`);
    } else if ($(e.currentTarget).is("#media")) {
      $("#media").attr("href", `/media${query}`);
    } // End else if statements
  }); // End on click function

}); // End doc ready