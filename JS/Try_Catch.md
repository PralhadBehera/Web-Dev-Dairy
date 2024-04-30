<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Try Catch demo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <style>
    html,
    body {
      height: 100%;
    }

    .center-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  </style>
</head>

<body>
  <div class="center-container">
    <div>
      <form>
        <div class="mb-3">
          <label for="num1" class="form-label">Num 1</label>
          <input type="text" class="form-control" id="num1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="num2" class="form-label">Num 2</label>
          <input type="text" class="form-control" id="num2">
        </div>
        <button type="button" class="btn btn-primary" id="submit">Submit</button>
        <p id="p1"></p>
      </form>
    </div>
  </div>
  <script>
    let add = () => {
      let num1 = parseInt(document.getElementById('num1').value);
      let num2 = parseInt(document.getElementById('num2').value);
      console.log(num1,num2);
      let num3 = 0;
      try {
        if (!isNaN(num1) && !isNaN(num2)) {
          num3 = num1 + num2;
          document.getElementById("p1").innerHTML = num3;
        } else {
          throw new Error("Both inputs are not valid numbers");
        }
      } catch (error) {
        document.getElementById("p1").innerHTML = error.message;
      }
    }

    try {
      let submit = document.getElementById('submit');
      submit.addEventListener('click', add);
    } catch (error) {
      document.getElementById("p1").innerHTML = error.message;
    }
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
</body>

</html>
