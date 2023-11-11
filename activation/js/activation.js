// JavaScript to handle form submission and validation
document.getElementById('uscc-ctn').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const emailField = document.getElementById('email-input');
    const emailError = document.getElementById('email-error');
    const serverError = document.getElementById('server-error');
    const email = emailField.value;
    const form = document.getElementById('uscc-ctn');
  
    // Validate email
    if (!email || !email.includes('@')) {
      // Display error message and apply styles to the input field
      emailError.style.display = 'block';
      emailField.style.borderColor = 'red';
      emailField.focus();
      return;
    } else {
      // Hide error message and reset styles
      emailError.style.display = 'none';
    }
  
    // Get the 'code' parameter from the URL
    const code = getURLParameter('code');
  
    // Submit the form
    try {
      const response = await fetch('https://app.marq.com/users/register/redeemCode', {
        method: 'POST',
        redirect: 'follow',
        credentials: 'include',
        body: JSON.stringify({ email, redemptionCode: code }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        // Include the 'code' parameter in the redirect URL
        if (data.redirect.startsWith("http")) {
          window.location.href = data.redirect;
        } else {
          const redirect = 'https://app.marq.com' + data.redirect + '?code=' + encodeURIComponent(code);
          window.location.href = redirect;
        }
      } else {
        // Handle server errors
        const data = await response.json();
        serverError.textContent = data.errorMessage;
        serverError.classList.add('error-message');
        serverError.style.display = 'block';
      }
    } catch (error) {
      // Handle network errors
      serverError.textContent = 'Network error: ' + error;
      serverError.classList.add('error-message');
      serverError.style.display = 'block';
    }
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