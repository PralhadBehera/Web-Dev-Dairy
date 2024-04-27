

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

These are just a few of the many methods available in the Browser Object Model. Each method provides specific functionalities to interact with different aspects of the browser environment.