//////Задание 1
function createProductCard(productName,price,imageUrl){
    const productContainer = document.querySelector('.product-container')

    const myHeading = document.createElement('h1')
    myHeading.textContent = productName

    const mySpan = document.createElement('span')
    mySpan.textContent = price

    const myImage = document.createElement('img')
    myImage.src = imageUrl
    myImage.alt = 'dog'
    myImage.width = '200'
    myImage.height = '200'

    productContainer.prepend(myHeading,mySpan,myImage)
    return productContainer
}
const myProductCard = createProductCard('dog', '500$',"https://picsum.photos/id/237/200/300")



/////Задание 2
function createCommentMessage(author, message, timestamp){
    const commentContainer = document.querySelector('.comment-container')
    
    const newAuthor = document.createElement('h3')
    newAuthor.textContent = author

    const newMessage = document.createElement('p')
    newMessage.textContent = message

    const newTimestamp = document.createElement('p')
    newTimestamp.textContent = timestamp

    commentContainer.prepend(newAuthor,newMessage,newTimestamp)
    return commentContainer
}
const myCommentMessage = createCommentMessage('Gorkhmaz Alekbarov','Hello world','12:01')


///Задание 3
function createMenuItem(name,price,description){
    const menuContainer = document.querySelector('.menu-container')

    const newName = document.createElement('h2')
    newName.textContent = name

    const newPrice = document.createElement('span')
    newPrice.textContent = price

    const newDescription = document.createElement('p')
    newDescription.textContent = description;

    menuContainer.prepend(newName,newPrice,newDescription)
}

const myMenu = createMenuItem('Adana-kebab','5$','tasty and tender meat with delicious sauce')


