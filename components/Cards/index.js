// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
  console.log('my cards data is', response.data)
  console.log("my articles are", response.data.articles);
  console.log("my boostrap data is", response.data.articles.bootstrap)
  console.log("my boostrap 1st author data is", response.data.articles.bootstrap[0])
  console.log("my boostrap 1st author name is", response.data.articles.bootstrap[0].authorName)
});

// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//

function cardCreator(data) {
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const span = document.createElement("span");
 

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

    card.append(headline,author);
    author.append(imgContainer,span);
    imgContainer.appendChild(img);
    
    headline.textContent=data.headline;
    img.src = data.authorPhoto;
    
    span.textContent=`By ${data.authorName}`;

    const cardEntry = document.querySelector(".cards-container");
    cardEntry.appendChild(card);

    
    return card;
};


axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
  const articlesArray = Object.keys(response.data.articles);
    
  articlesArray.forEach( item =>{
    const authorArray = response.data.articles[item];
    authorArray.forEach(author =>{
        cardCreator(author);
    })

  })  ;

});




// axios.get("https://lambda-times-backend.herokuapp.com/articles")
// .then(response => {
    
  
// });


// Create a card for each of the articles and add the card to the DOM.
