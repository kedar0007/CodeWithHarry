//you can also write comment like this for better explanation to others
console.log('connection')

let thm = Qs.parse(location.search, {
  ignoreQueryPrefix: true
});

console.log(thm.t)

let linktag = `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/${thm.t}/bootstrap.min.css">`
console.log(linktag)

$('head').append(linktag)
