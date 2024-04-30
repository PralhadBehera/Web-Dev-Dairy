

1. **window.open(url, name, specs, replace):** Opens a new browser window or tab with the specified URL and options. Parameters:
   - url: The URL of the page to be opened.
   - name: The name of the new window.
   - specs: Optional. A string specifying various window features like dimensions, scrollbars, etc.
   - replace: Optional. Specifies whether the URL should replace the current entry in the history.

2. **window.close():** Closes the current window.

3. **window.alert(message):** Displays an alert dialog box with the specified message.

4. **window.confirm(message):** Displays a dialog box with a message and OK and Cancel buttons. Returns true if the user clicks OK, and false if the user clicks Cancel.

5. **window.prompt(message, default):** Displays a dialog box with a message, an input field, and OK and Cancel buttons. Returns the text entered by the user or null if the user clicks Cancel.

6. **window.setTimeout(function, milliseconds):** Executes a function after a specified number of milliseconds.

7. **window.setInterval(function, milliseconds):** Executes a function repeatedly, with a fixed time delay between each call.

8. **window.location.assign(url):** Loads a new document.

9. **window.location.reload(forceReload):** Reloads the current document. If forceReload is true, the page will be reloaded from the server, otherwise, it may be loaded from the cache.

10. **window.history.back():** Moves back one step in the browsing history.

11. **window.history.forward():** Moves forward one step in the browsing history.

12. **window.history.go(number):** Moves to a specific page in the browsing history, relative to the current page. Positive values move forward, negative values move backward.


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap demo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body class="position-relative">
    <div class="position-absolute top-50 start-50 translate-middle">
      <button type="button" class="btn btn-primary" id="open">Open</button>
      <button type="button" class="btn btn-primary ml-1" id="close">Close</button>
      <button type="button" class="btn btn-primary ml-1" id="alert">Alert</button>
      <button type="button" class="btn btn-primary ml-1" id="prompt">Prompt</button>
      <button type="button" class="btn btn-primary ml-1" id="confirm">Confirm</button>
      <button type="button" class="btn btn-primary ml-1" id="refresh">reload</button>


    </div>
  
    <script>
      function openNewWindow() {
        open('https://pralhad-behera-portfolio.netlify.app/', '_blank', 'width=1000,height=1000');
      }
  
      function closeNewWindow() {
        close();
      }
  
      function alertWindow() {
        alert("This is an alert");
      }
      
      function promptWindow() {
        let userInput = prompt("Enter the Text");
        if (userInput !== null) {
          console.log(`User input Text: ${userInput}`);
        } else {
          console.log(`User Pressed Cancel Key`);
        }
    }

        function confirmWindow(){
          let result= confirm("This is Confirmation for procced");
          if(result){
            console.log("OK");
          }
          else{
            console.log("Cancel")
          }
        }
      
        function  refresh(){
            window.location.reload(true);
        } 
  
      // Select the buttons and add event listeners
      let openButton = document.getElementById("open");
      openButton.addEventListener('click', openNewWindow);
  
      let closeButton = document.getElementById('close');
      closeButton.addEventListener('click', closeNewWindow);
  
      let alertButton = document.getElementById("alert");
      alertButton.addEventListener('click', alertWindow);
  
      let promptButton = document.getElementById('prompt');
      promptButton.addEventListener('click', promptWindow);

      let confirmButton= document.getElementById('confirm');
      confirmButton.addEventListener('click', confirmWindow);

      let refreshButton=document.getElementById('refresh');
      refreshButton.addEventListener('click',refresh)
    </script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
```