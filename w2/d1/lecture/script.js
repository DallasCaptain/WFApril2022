// function vroom(){
//     //code
// }


// var vroom2 = function(){
//    console.log('vrooooooooom vrooooom')
//    console.log(this.age)
// }

// var billy ={
//     'isrunning':false,
//     'age':17,
//     'second':function(){

//     },
//     'start':vroom2,
// }

// var size = 6
// var colors = 'black'
// var joe ={
//     'size':size,
//     'start':vroom2,
//     'age':28,
//     'colors':['red','green','chartruse'],
//     'bestie':billy
    
    
// }
// console.log(joe.bestie.age)
// joe.bestie.start()
// billy.start('this is the start argument')
// joe.start()

// console.log(billy.age, joe['age'])

// //console.log(this)

// // function(str){

// //     console.log('billy is starting',str)
// //     this.isrunning = true;
// //     this.second()
// //     console.log(this.isrunning)
// // }


//script for html starts here


function clicked(){
    console.log('was clicked')

    //i want to store an element from my html as a var
    var h1 = document.querySelector('h1');
    var cla = document.querySelector('#cla')

    cla.innerText = 'SDFSDFSDFSDF'

    h1.style.backgroundColor = 'firebrick';
    // h1.onmouseover=function(){
    //     h1.style.backgroundColor='green'
    // }
    // h1.onmouseout=function(){
    //     h1.style.backgroundColor='black'
    // }
}

function addclass(){
    //show you the classes on the h1
    var h1 = document.querySelector('h1')
    console.log(h1.classList)
    if(h1.classList.contains('red')){
        console.log('it already has red')
    }else{
        h1.classList.add('red')
        h1.classList.remove('bob')
    }
}

function firstclass(){
    var h1 = document.querySelector('h1')
    console.log(h1.classList[0])

}

function showname(input){
    console.log(input.value)
}

function myalert(){
    alert('This waited 3 seconds')
}


setTimeout(myalert,3000)






