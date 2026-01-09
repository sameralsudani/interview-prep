//Storing Data
localStorage.setItem("name", "Kyle")
localStorage.setItem("lastName", "Smith")
//Getting Data
localStorage.getItem("name") // Kyle

// remove data
localStorage.removeItem("name")

//Storing Data
sessionStorage.setItem("name", "Kyle")
sessionStorage.setItem("lastName", "Smith")

//Getting Data
sessionStorage.getItem("name") // Kyle

// remove data
sessionStorage.removeItem("name")


//Storing Data
document.cookie = "name=Kyle"
document.cookie = `name=Kyle; expires=${new Date(9999, 0, 1).toUTCString()}`

//Getting Data
document.cookie // name=Kyle; lastName=Smith
// remove cookie
document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 GMT"
