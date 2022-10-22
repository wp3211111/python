const btnAudio = document.querySelector(".btn-audio");
const video = document.getElementById("video");

if (btnAudio) {
  btnAudio.addEventListener("click", function () {
    if (video.muted) {
      btnAudio.classList.toggle("is-click");
      video.muted = false;
    } else {
      video.muted = true;
      btnAudio.classList.toggle("is-click");
    }
  });
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function keepScrolling() {
  const body = document.body;
  const wScroll = window.pageYOffset;

  if (wScroll > 0) {
    body.classList.remove("keep-scrolling");
  } else {
    body.classList.add("keep-scrolling");
  }
}

["resize", "load", "scroll"].forEach(function (event) {
  window.addEventListener(event, function () {
    keepScrolling();
  });
});

// init swiper
if (location.href.indexOf("batistuta") != -1) {
  var swiper = new Swiper("#certify .swiper-container", {
    watchSlidesProgress: true,
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    loopedSlides: 5,
    autoplay: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination.next",
      clickable: true,
    },
    on: {
      progress: function (progress) {
        for (i = 0; i < this.slides.length; i++) {
          var slide = this.slides.eq(i);
          var slideProgress = this.slides[i].progress;
          modify = 1;
          if (Math.abs(slideProgress) > 1) {
            modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
          }
          translate = slideProgress * modify * 220 + "px";
          scale = 1 - Math.abs(slideProgress) / 5;
          zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
          slide.transform("translateX(" + translate + ") scale(" + scale + ")");
          slide.css("zIndex", zIndex);
          slide.css("opacity", 1);
          if (Math.abs(slideProgress) > 3) {
            slide.css("opacity", 0);
          }
        }
      },
      setTransition: function (transition) {
        for (var i = 0; i < this.slides.length; i++) {
          var slide = this.slides.eq(i);
          slide.transition(transition);
        }
      },
    },
  });
} else {
  // var swiper = new Swiper('.swiper-container', {
  //     loop: true,
  //     speed: 600,
  //     autoplay: {
  //         delay: 5000
  //     },
  //     pagination: {
  //         el: '.swiper-pagination',
  //         clickable: true,
  //     },
  // })
}

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

// animate all elements with slideInUp class at different triggers
gsap.utils.toArray(".slideInUp").forEach((el) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
    })
    .from(el, {
      y: 40,
      autoAlpha: 0,
    });
});

// section 2 timeline animation

// const leftLine = CSSRulePlugin.getRule(".home .section-2 .title-wrap .left:before");
// const rightLine = CSSRulePlugin.getRule(".home .section-2 .title-wrap .right:before");
gsap
  .timeline({
    defaults: {
      duration: 1,
      ease: "power.out",
    },
    scrollTrigger: {
      trigger: ".section-2",
      start: "top 80%",
    },
  })

  .from(".section-2 h1", {
    y: 40,
    autoAlpha: 0,
  })
  .from(
    ".section-2 .para",
    {
      y: 40,
      autoAlpha: 0,
    },
    "-=0.6"
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-2",
      start: "-=200 top",
      end: "+=800",
      scrub: true,
      pin: ".section-2",
    },
  })
  .from(
    ".section-2 .slideInLeft",
    {
      x: -40,
      autoAlpha: 0,
      stagger: 0.2,
    },
    "-=0.6"
  )
  .from(
    ".section-2 .left, .section-2 .right",
    {
      width: 0,
    },
    "-=0.6"
  )
  .to(
    [
      ".home .section-2 .title-wrap .left:before",
      ".home .section-2 .title-wrap .right:before",
    ],
    {
      cssRule: { height: 30 },
    }
  )
  .from(
    ".section-2 .title",
    {
      height: 0,
    },
    "<"
  );

// video animation on scroll
gsap.to(".video-container", {
  width: "100%",
  height: "100%",
  scrollTrigger: {
    trigger: ".video-pin",
    start: "+=800 top",
    end: "+=800",
    pin: ".section-2",
    toggleActions: "play none none reverse",
  },
});

ScrollTrigger.create({
  trigger: ".video-pin",
  start: "-=800 topp",
  end: "+=800",
  pin: ".btn-audio",
});

// section 3 timeline animation
gsap.from(".devices", {
  top: 144,
  autoAlpha: 0,
  scrollTrigger: {
    trigger: ".devices",
    start: "center 90%",
  },
});

function numberWithCommas(n) {
  var parts = n.toString().split(".");
  console.log("parts", parts);
  return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

gsap.utils.toArray(".section-3 .money").forEach((el) => {
  gsap.from(el, {
    innerText: 0,
    roundProps: "innerText",
    y: 40,
    autoAlpha: 0,
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
    },
    onUpdate: function () {
      this.targets().forEach((target) => {
        const val = gsap.getProperty(target, "innerText");
        target.innerText = numberWithCommas(val);
      });
    },
  });
});

gsap.from(
  ".section-3 .row .col",
  {
    y: 40,
    stagger: 0.2,
    autoAlpha: 0,
    scrollTrigger: {
      trigger: ".section-3 .row .money",
      start: "top bottom",
    },
  },
  "-=0.1"
);

// section 4  timeline animation
gsap.from(
  ".section-4 .row .col",
  {
    y: 40,
    stagger: 0.2,
    autoAlpha: 0,
    scrollTrigger: {
      trigger: ".section-4 .col",
      start: "top 90%",
    },
  },
  "-=0.1"
);

// section 5 timeline animation
gsap.from(
  ".section-5 .activities li",
  {
    x: -40,
    stagger: 0.2,
    autoAlpha: 0,
    scrollTrigger: {
      trigger: ".section-5 .activities",
      start: "top 90%",
    },
  },
  "-=0.1"
);

// section 6 timeline animation
gsap
  .timeline({
    defaults: {
      ease: "power2.ease",
      duration: 1,
    },
    scrollTrigger: {
      trigger: ".section-6",
      start: "top 80%",
    },
  })

  .from(".section-6", {
    autoAlpha: 0,
  })
  .from(
    ".section-6 .img-wrap",
    {
      margin: "0 -182px",
    },
    "-=0.8"
  )

  .from(
    ".section-6 .img-wrap",
    {
      scale: 0.8,
      autoAlpha: 0,
    },
    "-=0.7"
  )
  .from(
    ".section-6 .image",
    {
      x: 0,
      y: 0,
    },
    "-=0.5"
  );
function getQueryString(name) {
  var reg = new RegExp("(^|&|\\?)" + name + "=([^&]*)(&|$)", "i");
  var r = decodeURIComponent(window.location.search).substr(1).match(reg);
  if (r !== null) return unescape(r[2]);
  return null;
}
var PId = getQueryString("PId"); //JPRO-2111
var country = "GLO";
var language = window.location.pathname.includes("indexen.html") ? "en" : "cn";

$.ajax({
  accept: "application/json",
  type: "GET",
  dataType: "JSON",
  url:
    location.origin +
    "/api/cms/page/templates?moduleCodes=090001&country=" +
    country,
  // url: 'http://10.11.16.120:8813/api/cms/page/templates?moduleCodes=banners_pc&country=CN',
  headers: { "X-Website-Code": "HX1_PC", "accept-language": language },
}).done(function (res) {
  var _html = "";
  if (res.data && res.data.length) {
    $.each(res.data, function (index, item) {
      _html +=
        '<div class="swiper-slide" style="background-image: url(' +
        item.maxImageHttpUrl +
        ')">';
      if (item.templateButtons.length > 0) {
        let url;
        if (item.templateButtons[0].buttonAction === "") {
          url = "javascript:;";
        } else if (item.templateButtons[0].buttonAction.indexOf("http") > -1) {
          url = item.templateButtons[0].buttonAction;
        } else {
          url = window.location.origin + item.templateButtons[0].buttonAction;
        }
        _html +=
          "<a href=" +
          url +
          ' target="_blank" class="actionBtn">' +
          item.templateButtons[0].buttonName +
          "</a>";
      }
      _html += "</div>";
    });
  }
  // else{ //接口没数据就展示静态数据
  //     if(language=='cn'){
  //         _html +='<div class="swiper-slide" style="background-image: url(./assets/images/home/banner_1.jpg)"></div>'
  //         _html +='<div class="swiper-slide" style="background-image: url(./assets/images/home/banner_21new.jpg)"></div>'
  //         _html +='<div class="swiper-slide" style="background-image: url(./assets/images/home/banner_3.jpg)"></div>'
  //     }else{
  //         _html +='<div class="swiper-slide" style="background-image: url(./assets/images/home/banner_1_en.jpg)"></div>'
  //         _html +='<div class="swiper-slide" style="background-image: url(./assets/images/home/banner_21new.jpg)"></div>'
  //         _html +='<div class="swiper-slide" style="background-image: url(./assets/images/home/banner_3.jpg)"></div>'
  //     }
  // }
  $(".swiper-wrapper").html(_html);
  var swiper = new Swiper(".swiper-container", {
    loop: true,
    speed: 600,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
