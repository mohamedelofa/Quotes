
var quotes = [
    {quote:"“Be yourself; everyone else is already taken.”",name:"― Oscar Wilde"},
    {quote:"“So many books, so little time.”",name:"― Frank Zappa"},
    {quote:"“A room without books is like a body without a soul.”",name:"― Marcus Tullius Cicero"},
    {quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",name:"― Bernard M. Baruch"},
    {quote:"“You only live once, but if you do it right, once is enough.”",name:"― Mae West"},
    {quote:"“Be the change that you wish to see in the world.”",name:"― Mahatma Gandhi"},
    {quote:"“In three words I can sum up everything I've learned about life: it goes on.”",name:"― Robert Frost"},
    {quote:"“If you tell the truth, you don't have to remember anything.”",name:"― Mark Twain"},
    {quote:"“A friend is someone who knows all about you and still loves you.”",name:"― Elbert Hubbard"},
    {quote:"“To live is the rarest thing in the world. Most people exist, that is all.”",name:"― Oscar Wilde"},
    {quote:"“We accept the love we think we deserve.”",name:"― Stephen Chbosky, The Perks of Being a Wallflower"},
    {quote:"“It is better to be hated for what you are than to be loved for what you are not.”",name:"― Andre Gide, Autumn Leaves"},
    {quote:"“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”",name:"― Albert Einstein"},
    {quote:"“It does not do to dwell on dreams and forget to live.”",name:"― J.K. Rowling, Harry Potter and the Sorcerer's Stone"},
    {quote:"“Good friends, good books, and a sleepy conscience: this is the ideal life.”",name:"― Mark Twain"},
    {quote:"“The fool doth think he is wise, but the wise man knows himself to be a fool.”",name:"― William Shakespeare"},
    {quote:"“Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).”",name:"― Mark Twain"},
    {quote:"“Life is what happens to us while we are making other plans.”",name:"― Allen Saunders"},
    {quote:"“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”",name:"― Bill Keane"},
    {quote:"“I have not failed. I've just found 10,000 ways that won't work.”",name:"― Thomas A. Edison"}
]
var haveIt = [];
function generateRandomNumbers( range){
    range = quotes.length;
    var random = Math.floor(Math.random()*quotes.length);
    if(!haveIt.includes(random))
    {
        haveIt.push(random);
        return random;
    }
    else{
        if(haveIt.length < range) 
        {
           return  generateRandomNumbers(range);
        }
        else 
        {
           haveIt=[];
           return generateRandomNumbers(range);
        }
    }
}

function display (){
var index = generateRandomNumbers(quotes.length)
  document.getElementById("quote").innerHTML = quotes[index].quote;
  document.getElementById("author").innerHTML = quotes[index].name;
  console.log(index);
}

