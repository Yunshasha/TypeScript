//sometimes you kown exactly what type is it.
//1 most recommand
const aLink = document.getElementById('link') as HTMLAnchorElement
aLink.href
//2 
const aLink1 = <HTMLAnchorElement> document.getElementById('link') 