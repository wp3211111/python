$(document).ready(function () {
  if (sessionStorage.getItem("cookieAccept") != "true") {
    let containerDiv = document.createElement("div"),
      popupText = document.createTextNode(
        $("#cookieScriptData").data("cookietext1")
      ),
      popupText2 = document.createTextNode(
        $("#cookieScriptData").data("cookietext2")
      ),
      infoLink = document.createElement("a"),
      closeDiv = document.createElement("div");

    infoLink.href = $("#cookieScriptData").data("baseloaderurl") + "/Cookies";
    infoLink.target = "_blank";
    infoLink.rel = "noopener";
    infoLink.innerText = "here";

    containerDiv.id = "cookiePopUp";
    containerDiv.classList.add("cookiePopUp");

    closeDiv.id = "cookiePopUpClose";
    closeDiv.classList.add("cookiePopUpClose");
    closeDiv.innerText = "Accept";

    containerDiv.appendChild(popupText);
    containerDiv.appendChild(infoLink);
    containerDiv.appendChild(popupText2);
    containerDiv.appendChild(closeDiv);

    $("body").prepend(containerDiv);

    $("#cookiePopUpClose, #cookieAcceptBtn").on("click", "", function () {
      sessionStorage.setItem("cookieAccept", "true");
      $("#cookiePopUp").slideUp();
    });

    $(window).on("scroll", function () {
      if (
        parseInt($(window).scrollTop()) > 0 ||
        parseInt($("html").scrollTop()) > 0 ||
        parseInt($("body").scrollTop()) > 0
      ) {
        $("#cookiePopUp").css("position", "fixed");
      } else {
        $("#cookiePopUp").css("position", "relative");
      }
    });
  }
});
