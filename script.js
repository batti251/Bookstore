function renderAll() {
  getLocalStorage();
  let booksRef = document.getElementById("booksStore");
  booksRef.innerHTML = "";
  for (let booksIndex = 0; booksIndex < books.length; booksIndex++) {
    booksRef.innerHTML += bookTemplate(booksIndex);
    getComments(booksIndex);
    localCurrency(booksIndex);
    setButtonColor(booksIndex);
  }
}

function enterComment() {
  let key = event.key;
  if (key == "Enter") {
    releaseComment();
  }
}
function getComments(booksIndex) {
  let commentsValue = books[booksIndex].comments;
  let commentsRef = document.getElementById(`${booksIndex} comments`);
  for (
    let commentsIndex = 0;
    commentsIndex < commentsValue.length;
    commentsIndex++
  ) {
    user = commentsValue[commentsIndex].name;
    message = commentsValue[commentsIndex].comment;
    commentsRef.innerHTML += commentsTemplate(user, message);
  }
}

function releaseComment() {

  for (let booksIndex = 0; booksIndex < books.length; booksIndex++) {
    let newCommentRef = document.getElementById(`${booksIndex} newComment`);
    let user = document.getElementById(`${booksIndex} userID`)
    let message = newCommentRef.value;
    if (message !== "" && user.value !== "") {
       let newComment = { name: user.value, comment: message };
      books[booksIndex].comments.push(newComment);break
    } else alert()

    
  } 
  saveLocalStorage();
  renderAll();

}

function alert() {
  let alertMessage = document.getElementById('alert');
  alertMessage.classList.remove('d-none');

  alertMessage.style.animation = "none";
  setTimeout(function() {
    alertMessage.style.animation = "fadeOut 4s forwards"; 
  }, 10);

  setTimeout(function() {
    alertMessage.classList.add('d-none');
  }, 4000);
}




function voteLike(booksIndex) {
  let objKey = books[booksIndex];
  switch (objKey.liked) {
    case false:
      objKey.liked = true;
      objKey.likes = objKey.likes + 1;
      break;
    case true:
      objKey.liked = false;
      objKey.likes = objKey.likes - 1;
      break;
  }
  saveLocalStorage();
  renderAll();
}

function setButtonColor(booksIndex) {
  let objKey = books[booksIndex];
  if (objKey.liked == true) {
    document
      .getElementById(`${booksIndex} likedHeart`)
      .classList.add("heart-icon-true");
  } else {
    document
      .getElementById(`${booksIndex} likedHeart`)
      .classList.add("heart-icon-false");
  }
  saveLocalStorage(booksIndex);
}

function localCurrency(booksIndex) {
  let commentsRef = document.getElementById(`${booksIndex} price`);
  let objKey = books[booksIndex].price;
  let newCurrency = objKey.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });
  objKey = newCurrency;
  commentsRef.innerHTML = newCurrency;
  saveLocalStorage();
}

function saveLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

function getLocalStorage() {
  let updatetedStorage = localStorage.getItem("books", JSON.stringify(books));
  if (updatetedStorage == null) {
    books = books;
  } else {
    books = JSON.parse(updatetedStorage);
  }
}
