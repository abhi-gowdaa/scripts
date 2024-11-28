(function () {
    const scriptTag = document.currentScript;
    const mode = scriptTag.getAttribute('data-mode') || 'embedded'; // default mode is embedded
  
    // Define the container for embedding
    const containerId = scriptTag.getAttribute('data-container-id') || 'react-app-container';
    const width = scriptTag.getAttribute('data-width') || '100%';
    const height = scriptTag.getAttribute('data-height') || '500px';
    const appUrl = scriptTag.getAttribute('data-app-url') || 'https://your-app-hosted-url.com'; // URL to the hosted React app
  
    // Create the container div for embedded React app
    const container = document.createElement('div');
    container.id = containerId;
    container.style.width = width;
    container.style.height = height;
    container.style.position = 'relative';
    document.body.appendChild(container);
  
    if (mode === 'popup') {
      // Create a button for popup mode
      const button = document.createElement('button');
      button.innerText = 'Open React App';
      button.style.position = 'fixed';
      button.style.bottom = '20px';
      button.style.right = '20px';
      button.style.zIndex = '1000';
      document.body.appendChild(button);
  
      button.addEventListener('click', () => {
        window.open(appUrl, '_blank', 'width=800,height=600');
      });
    } else {
      // Embed the React app using an iframe
      const iframe = document.createElement('iframe');
      iframe.src = appUrl;
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';
      container.appendChild(iframe);
    }
  })();
  