const quotes = [{
      quotes: "“Be yourself; everyone else is already taken.”",
      author: "Oscar Wilde"
    },
    {
      quotes: "“So many books, so little time.”",
      author: "Frank Zappa"
    },

    {
      quotes: "“A room without books is like a body without a soul.”" ,
      author: "Marcus Tullius Cicero"
    } ,
    {
      quotes: "“You only live once, but if you do it right, once is enough.”",
      author: "Mae West"
    },
    {
      quotes: "“Be the change that you wish to see in the world.”",
      author: "Mahatma Gandhi"
    } ,
    {
      quotes: "“In three words I can sum up everything I've learned about life: it goes on.”",
      author: "Robert Frost"
    } ,
    {
      quotes: "“If you tell the truth, you don't have to remember anything.”",
      author: "Mark Twain"
      
    } ,
    {
      quotes:"“Always forgive your enemies; nothing annoys them so much.”",
      author: "Oscar Wilde"
    } ,
    {
      quotes: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
      author: "Mahatma Gandhi"
    } ,
    {
      quotes: "“We accept the love we think we deserve.”",
      author:"Stephen Chbosky"
    } ,
    {
      quotes: "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
      author:"Oscar Wilde, The Happy Prince and Other Stories"
    } ,
    {
      quotes: "“It is better to be hated for what you are than to be loved for what you are not.”",
      author: "Andre Gide, Autumn Leaves"
    } ,
    {
      quotes: "“A friend is someone who knows all about you and still loves you.”",
      author: "Elbert Hubbard"
    }
  ]


  const quote = document.querySelector('#quote span:first-child')
  const author = document.querySelector('#quote span:last-child')

  const todaysQuote = quotes[parseInt(Math.random() * quotes.length)]
  

quote.innerText = todaysQuote['quotes']
author.innerText = todaysQuote['author']

quote.innerText = todaysQuote.quotes
author.innerText = todaysQuote.author
