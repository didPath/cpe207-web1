console.log('This is my first Js')

var str = ''
for (var i=0; i<10; i++){
    str += i+1 + ' '
}

document.querySelector('#output').innerHTML = str