// npm i js-cookie
//Create a cookie, valid across the entire site:
Cookies.set('name', 'value')

// Create a cookie that expires 7 days from now, valid across the entire site:
Cookies.set('name', 'value', { expires: 7 })


//Read cookie:
Cookies.get('name') // => 'value'

//remove cookie:
Cookies.remove('name')

