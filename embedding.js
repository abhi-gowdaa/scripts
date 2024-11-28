// (function () {
//     const scriptTag = document.currentScript;
//     const mode = scriptTag.getAttribute('data-mode') || 'embedded'; // default mode is embedded
  
//     // Define the container for embedding
//     const containerId = scriptTag.getAttribute('data-container-id') || 'react-app-container';
//     const width = scriptTag.getAttribute('data-width') || '100%';
//     const height = scriptTag.getAttribute('data-height') || '500px';
//     const appUrl = scriptTag.getAttribute('data-app-url') || 'https://your-app-hosted-url.com'; // URL to the hosted React app
  
//     // Create the container div for embedded React app
//     const container = document.createElement('div');
//     container.id = containerId;
//     container.style.width = width;
//     container.style.height = height;
//     container.style.position = 'relative';
//     document.body.appendChild(container);
  
//     if (mode === 'popup') {
//       // Create a button for popup mode
//       const button = document.createElement('button');
//       button.innerText = 'Open React App';
//       button.style.position = 'fixed';
//       button.style.bottom = '20px';
//       button.style.right = '20px';
//       button.style.zIndex = '1000';
//       document.body.appendChild(button);
  
//       button.addEventListener('click', () => {
//         window.open(appUrl, '_blank', 'width=800,height=600');
//       });
//     } else {
//       // Embed the React app using an iframe
//       const iframe = document.createElement('iframe');
//       iframe.src = appUrl;
//       iframe.style.width = '100%';
//       iframe.style.height = '100%';
//       iframe.style.border = 'none';
//       container.appendChild(iframe);
//     }
//   })();
  

(function () {
    // Define mode (popup or embedded)
    const scriptTag = document.currentScript;
    const mode = scriptTag.getAttribute('data-mode') || 'embedded';
    const buttonText = scriptTag.getAttribute('data-button-text') || 'Open Chatbot';
    const buttonPosition = scriptTag.getAttribute('data-button-position') || 'bottom-right';
    
    // Create the button to trigger the chatbot display
    const button = document.createElement('button');
    button.innerText = buttonText;
    button.style.position = 'fixed';
    button.style.zIndex = '1000';

    // Button positioning (can adjust as needed)
    if (buttonPosition === 'bottom-right') {
        button.style.bottom = '20px';
        button.style.right = '20px';
    } else if (buttonPosition === 'bottom-left') {
        button.style.bottom = '20px';
        button.style.left = '20px';
    } else if (buttonPosition === 'top-right') {
        button.style.top = '20px';
        button.style.right = '20px';
    } else if (buttonPosition === 'top-left') {
        button.style.top = '20px';
        button.style.left = '20px';
    }

    document.body.appendChild(button);

    // Create the container for the embedded content (chatbot)
    const containerId = scriptTag.getAttribute('data-container-id') || 'chatbot-container';
    const width = scriptTag.getAttribute('data-width') || '400px';
    const height = scriptTag.getAttribute('data-height') || '600px';
    
    const chatbotDiv = document.createElement('div');
    chatbotDiv.id = containerId;
    chatbotDiv.style.width = width;
    chatbotDiv.style.height = height;
    chatbotDiv.style.position = 'fixed';
    chatbotDiv.style.bottom = '20px'; // Default position
    chatbotDiv.style.right = '20px';  // Default position
    chatbotDiv.style.border = '1px solid #ccc';
    chatbotDiv.style.overflow = 'hidden';
    chatbotDiv.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.1)';
    chatbotDiv.style.display = 'none';  // Initially hidden
    document.body.appendChild(chatbotDiv);

    const iframe = document.createElement('iframe');
    iframe.src = 'https://your-chatbot-website.com'; // Update this URL
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    chatbotDiv.appendChild(iframe);

    // Button click event to toggle the embedded content (chatbot)
    button.addEventListener('click', () => {
        if (chatbotDiv.style.display === 'none') {
            chatbotDiv.style.display = 'block';  // Show chatbot
        } else {
            chatbotDiv.style.display = 'none';  // Hide chatbot
        }
    });
})();
