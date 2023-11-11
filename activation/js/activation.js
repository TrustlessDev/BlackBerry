// JavaScript to handle form submission and validation
document.getElementById('uscc-ctn').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    grecaptcha.ready(function() {
        grecaptcha.execute('6LePwQspAAAAAEacgyVDupWz-Vhs6rzxmhC7ZJAI', {action: 'submit'}).then(function(token) {
            alert(token);
        });
    });
  });
  
  function getURLParameter(name) {
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
  }
    
  if (window.innerWidth > 768) {
      var iframe = document.createElement('iframe');
      iframe.src = "https://www.youtube.com/embed/g5j7ILjx-BI?si=ky8xiUzMRQyl-KMv";
      iframe.title = "How to activate an eSIM on your iPhone";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen";
      iframe.className = "wistia_embed";
      iframe.name = "wistia_embed";
      iframe.msAllowFullScreen = true;
      iframe.style.width = "100%";
      iframe.style.borderRadius = "8px";
      document.getElementById('videoContainer').appendChild(iframe);
      window._wq = window._wq || [];
      _wq.push({ id: "im4vye676u", onReady: function(video) {
          video.aspectRatio("4:3");
      }});
  }