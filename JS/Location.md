The `location` object in JavaScript provides information about the current URL of the document and allows you to interact with the browser's location (URL) programmatically. It represents the URL of the current document and provides properties and methods for navigating to different URLs. Here's an overview of the `location` object:

### Properties:

1. **location.href:** Returns the entire URL of the current page.

2. **location.protocol:** Returns the protocol of the current URL (e.g., "http:", "https:").

3. **location.hostname:** Returns the hostname of the current URL (e.g., "example.com").

4. **location.port:** Returns the port number of the current URL.

5. **location.pathname:** Returns the path and filename of the current URL.

6. **location.search:** Returns the query string of the current URL.

7. **location.hash:** Returns the anchor part of the current URL.

### Methods:

1. **location.assign(url):** Loads a new document.

   ```javascript
   location.assign("https://www.example.com");
   ```

2. **location.replace(url):** Replaces the current document with a new one.

   ```javascript
   location.replace("https://www.example.com");
   ```

3. **location.reload(forceReload):** Reloads the current document. If `forceReload` is `true`, it reloads from the server (ignoring cache).

   ```javascript
   location.reload();
   ```

### Example Usage:

```javascript
  function locationWindow(url) {
      // Accessing properties of the provided URL
      console.log("Current URL: " + url);
      console.log("Protocol: " + url.protocol);
      console.log("Hostname: " + url.hostname);
      console.log("Port: " + url.port);
      console.log("Pathname: " + url.pathname);
      console.log("Query string: " + url.search);
      console.log("Anchor: " + url.hash);
    }

 let locationButton=document.getElementById('location');
    locationButton.addEventListener('click',function(){
      let url = new URL('https://pralhad-behera-portfolio.netlify.app/');
      locationWindow(url);
    });
```

The `location` object is commonly used for URL manipulation, redirection, and reloading within web applications. It provides a convenient way to work with URLs and navigate between different pages.