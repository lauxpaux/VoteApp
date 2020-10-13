let quotes = [
    "You never give up",
    "You are passionately commmitted to peace",
    "You were born a fighter",
    "You have been given no choice"
]

function newQuote() {
    let randomQuote = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomQuote];
    
}
