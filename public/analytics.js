document.addEventListener('DOMContentLoaded', event => {
  if (document.location.hostname !== 'localhost') {
    setTimeout(initGTM, 3000);
  }
});

// Initializes Google Tag Manager
function initGTM() {
  if (window.gtmDidInit) {
    return false;
  }

  window.gtmDidInit = true;

  // Create the script
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-BR62QK8EY6');
  };
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-BR62QK8EY6';

  // We are still deferring the script
  script.defer = true;

  // Append the script to the body of the document
  document.getElementsByTagName('body')[0].appendChild(script);
}
