const quotes = [
    "Be the change that you wish to see in the world. — Mahatma Gandhi",
    "In the middle of every difficulty lies opportunity. — Albert Einstein",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "Happiness is not something ready-made. It comes from your own actions. — Dalai Lama",
    "Do what you can, with what you have, where you are. — Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. — Confucius",
    "You miss 100% of the shots you don't take. — Wayne Gretzky",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "The best way to predict the future is to create it. — Peter Drucker",
    "If you want to go fast, go alone. If you want to go far, go together. — African Proverb",
    "Life is 10% what happens to us and 90% how we react to it. — Charles R. Swindoll",
    "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
    "It always seems impossible until it’s done. — Nelson Mandela",
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
    "Dream big and dare to fail. — Norman Vaughan",
    "Act as if what you do makes a difference. It does. — William James",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair",
    "Strive not to be a success, but rather to be of value. — Albert Einstein",
    "The journey of a thousand miles begins with a single step. — Lao Tzu"
  ];
  

  function generateQuotes() {
    let index=Math.floor(Math.random()*quotes.length);
    const text=document.getElementById("quote");
    text.innerText=quotes[index];
  }

  setInterval(generateQuotes,3000);

  // Change the Background Color Every 5 sec
  const backgroundColors = [
    "#FFFFFF", // White
    "#F0F8FF", // Alice Blue
    "#FAEBD7", // Antique White
    "#7FFFD4", // Aquamarine
    "#FFE4C4", // Bisque
    "#8A2BE2", // Blue Violet
    "#5F9EA0", // Cadet Blue
    "#7FFF00", // Chartreuse
    "#D2691E", // Chocolate
    "#FF7F50", // Coral
    "#6495ED", // Cornflower Blue
    "#DC143C", // Crimson
    "#00FFFF", // Cyan
    "#006400", // Dark Green
    "#8B0000", // Dark Red
    "#FFD700", // Gold
    "#ADFF2F", // Green Yellow
    "#FF69B4", // Hot Pink
    "#CD5C5C", // Indian Red
    "#E6E6FA"  // Lavender
  ];
  

  function backgroundGenerator() {
    const body=document.querySelector('body');
    let ind=Math.floor(Math.random()*backgroundColors.length);
    body.style.backgroundColor=backgroundColors[ind];
  }

  setInterval(backgroundGenerator,3000);
 
