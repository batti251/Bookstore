function bookTemplate(booksIndex) {
  let bookObj = books[booksIndex];
  return `<div class="book-container" id="${booksIndex} books">
   <div class="collected-information border">
    <div class="book-details">
  <div id="name">${bookObj.name}</div>
    <table> 
  <tbody>
  <tr class="book-card-value">
    <td class="book-card-tbl">Autor:</td>
  </tr>
<tr class="book-card-input">
    <td class="book-card-tbl"> ${bookObj.author}</td>
  </tr>
</tbody>
  <tbody>
  <tr class="book-card-value">
    <td class="book-card-tbl">Jahr:</td>
  </tr>
<tr class="book-card-input">
    <td class="book-card-tbl"> ${bookObj.publishedYear}</td>
  </tr>
</tbody>

  <tbody>
  <tr class="book-card-value">
    <td class="book-card-tbl">Genre:</td>
  </tr>
<tr class="book-card-input">
    <td class="book-card-tbl"> ${bookObj.genre}</td>
  </tr>
</tbody>
</table>
</div>
 <img class="book-cover" src="img/book-cover.jpg" alt="book-cover">
<div class="book-miscellaneous">     
 <div class="like-button">
    <div id="${booksIndex} totalLikes">${bookObj.likes}</div>
    <div class="d-none" id="${booksIndex} liked">${bookObj.liked}</div><button id="${booksIndex} likedButton" onclick="voteLike(${booksIndex}) , setButtonColor(${booksIndex})"><img id="${booksIndex} likedHeart"  src="/img/heart.png" alt="heart" class=""></button>
  </div>
  <div class="price" id="${booksIndex} price"></div>
  </div>
</div>
     <div class="review">
    <div class="review-section border"id="${booksIndex} comments"></div>
   <input onkeydown="enterComment()" type="text" class="input-commentary" id="${booksIndex} newComment">
  </div>
  </div>`;
}

function commentsTemplate(user, message) {
  return `
<table> 
  <tbody>
  <tr class="user-nickname">
    <td>${user} :</td>
  </tr>
  <tr class="user-comment">
    <td>${message}</td>
  </tr> 
</tbody>
</table>
`;
}
