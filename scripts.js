<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Codenames Game</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-image: linear-gradient(135deg, #7f7fd5, #86a8e7, #91eae4);
      background-size: 400% 400%;
      animation: gradientBackground 10s ease infinite;
      text-align: center;
    }

    @keyframes gradientBackground {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .board {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 10px;
      width: 80%;
      margin: 0 auto;
      margin-top: 50px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      padding: 20px;
      background-color: #ffffff;
    }

    .card {
      background-color: #f1f1f1;
      padding: 20px;
      text-align: center;
      cursor: pointer;
      user-select: none;
      height: 80px;
      border-radius: 5px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
    }

    .card:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      transform: translateY(-5px);
    }

    .card.revealed {
      box-shadow: none;
      transform: translateY(0);
    }

    .red {
      background-color: #f1f1f1;
      color: red;
    }

    .blue {
      background-color: #f1f1f1;
      color: blue;
    }

    .neutral {
      background-color: #f1f1f1;
      color: gray;
    }

    .black {
      background-color: #f1f1f1;
      color: black;
    }
  </style>
</head>
<body>
  <div class="board"></div>

  <button id="toggleSpyMode">Toggle Spy Mode</button>

  <script src="script.js"></script>
</body>
</html>
