async function init() {
  initState();
  document.getElementById("uscc-ctn").style.display = "none";
  var activationCode = getURLParameter("activationCode");
  if (activationCode) {
    let result = await checkActivationCode();
    if (result.success) {
      if (result.activateState == "activated") {
        location.href = "usage.html?activationCode=" + activationCode;
      } else {
        successState();
        document.getElementById("uscc-ctn").style.display = "flex";
        document.getElementById("stateTitle").style.color = "#ffffff";
        document.getElementById("stateTitle").innerHTML =
          "Activate your Secure eSIM";
        document.getElementById("stateDescription").style.color = "#ffffff";
        document.getElementById("stateDescription").innerHTML =
          "Click 「Activate eSIM」 to activate your eSIM.";
      }
    } else {
      document.getElementById("stateTitle").style.color = "#ff0000";
      document.getElementById("stateTitle").innerHTML = result.error.title;
      document.getElementById("stateDescription").style.color = "#ff0000";
      document.getElementById("stateDescription").innerHTML =
        result.error.description;
      hideState();
    }
  } else {
    document.getElementById("stateTitle").style.color = "#ff0000";
    document.getElementById("stateTitle").innerHTML =
      "Activation code not found";
    document.getElementById("stateDescription").style.color = "#ff0000";
    document.getElementById("stateDescription").innerHTML =
      "Please check your activation link and try again.";
    hideState();
  }
}

async function checkActivationCode() {
  // 呼叫API
  var activationCode = getURLParameter("activationCode");
  var url =
    "https://esim.d8.run/checkActivationCode?activationCode=" + activationCode;
  try {
    var response = await fetch(url);
    var result = await response.json();
    initState();
    if (result.success) {
      return {
        success: true,
        activateState: result.activateState,
      };
    } else {
      return {
        success: false,
        error: {
          title: result.error.title,
          description: result.error.description,
        },
      };
    }
  } catch (e) {
    return {
      success: false,
      error: {
        title: "Error",
        description: "Please try again later.",
      },
    };
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

async function activateState() {
  checkState();
  document.getElementById("stateTitle").innerHTML = "Activating your eSIM...";
  document.getElementById("stateDescription").innerHTML =
    "Please wait while we activate your eSIM.";
  // 執行啟用
  var activationCode = getURLParameter("activationCode");
  var url =
    "https://esim.d8.run/activate?activationCode=" + activationCode;
  try {
    var response = await fetch(url);
    var result = await response.json();
    if (result.success) {
      successState();
      document.getElementById("uscc-ctn").style.display = "flex";
      document.getElementById("stateTitle").style.color = "#ffffff";
      document.getElementById("stateTitle").innerHTML =
        "Active successfully";
      document.getElementById("stateDescription").style.color = "#ffffff";
      document.getElementById("stateDescription").innerHTML =
        "Save your eSIM QR code and scan it on your phone to activate your eSIM.";
        //load static qr code
        document.getElementById("uscc-ctn").style.display = "flex";
        document.getElementById("uscc-ctn").innerHTML = '<img src="img/default.png" alt="eSIM Profile" width="100%" height="100%">';
    } else {
      document.getElementById("stateTitle").style.color = "#ff0000";
      document.getElementById("stateTitle").innerHTML = result.error.title;
      document.getElementById("stateDescription").style.color = "#ff0000";
      document.getElementById("stateDescription").innerHTML =
        result.error.description;
      hideState();
    }
  } catch (e) {
    document.getElementById("stateTitle").style.color = "#ff0000";
      document.getElementById("stateTitle").innerHTML = "Activation failed";
      document.getElementById("stateDescription").style.color = "#ff0000";
      document.getElementById("stateDescription").innerHTML = "Please try again later."
      hideState();
  }
}

function successState() {
  document.getElementById("loader-container").style.display = "";
  document.getElementsByClassName("circle-loader")[0].classList.add("load-complete");
  document.getElementsByClassName("checkmark")[0].style.display = "block";
}

function hideState() {
  document.getElementsByClassName("circle-loader")[0].classList.remove("load-complete");
  document.getElementsByClassName("checkmark")[0].style.display = "none";
  document.getElementById("loader-container").style.display = "none";
}

function checkState() {
  document.getElementsByClassName("circle-loader")[0].classList.remove("load-complete");
  document.getElementsByClassName("checkmark")[0].style.display = "none";
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
