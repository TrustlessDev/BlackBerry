// 畫面載入時執行
window.onload = function () {
  init();
};

function init() {
  initState();
  // 檢查 url 參數中的 activationCode
  var activationCode = getURLParameter("activationCode");
  if (activationCode) {
    
  } else {
    document.getElementById("stateTitle").innerHTML =
      "Activation code not found";
    document.getElementById("stateDescription").innerHTML =
      "Please check your activation link and try again.";
      hideState();
  }
}

function onSubmit() {
  var response = grecaptcha.getResponse();
  if (response.length == 0) {
    alert("Please verify that you are not a robot.");
  } else {
    activateState();
  }
}

function initState() {
  checkState();
  document.getElementById("stateTitle").innerHTML =
    "Checking your eSim status...";
  document.getElementById("stateDescription").innerHTML =
    "Please wait while we check your eSim status.";
}

function activateState() {
  checkState();
  document.getElementById("stateTitle").innerHTML = "Activating your eSIM...";
  document.getElementById("stateDescription").innerHTML =
    "Please wait while we activate your eSIM.";
}

function hideState() {
  document.getElementById("loader-container").style.display = "none";
}

function checkState() {
  document.getElementById("loader-container").style.display = "";
}

function getURLParameter(name) {
  return (
    decodeURIComponent(
      (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
        location.search
      ) || [, ""])[1].replace(/\+/g, "%20")
    ) || null
  );
}

if (window.innerWidth > 768) {
  var iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube.com/embed/g5j7ILjx-BI?si=ky8xiUzMRQyl-KMv";
  iframe.title = "How to activate an eSIM on your iPhone";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen";
  iframe.className = "wistia_embed";
  iframe.name = "wistia_embed";
  iframe.msAllowFullScreen = true;
  iframe.style.width = "100%";
  iframe.style.borderRadius = "8px";
  document.getElementById("videoContainer").appendChild(iframe);
  window._wq = window._wq || [];
  _wq.push({
    id: "im4vye676u",
    onReady: function (video) {
      video.aspectRatio("4:3");
    },
  });
}
