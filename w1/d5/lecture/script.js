// // console.log('hello class again')
// // //navigate to the folder with the file in it
// // //cd -> change directory
// // //example cd work
// // //changes to the work folder
// // //example cd ..
// // //goes up a folder
// // //ls or dir to show you what folders are in your current folder


// // //type node filename.js

// // //variables
// // var name = 'bob'
// // var mynum = 8
// // var arr =[]
// // var mycat ={}
// // var israining= false

// // mynum = 'five'

// // //operators

// // // + - / % && || ++ -- < > == === = != <=  >=

// // //if statements

// // if(mynum > 10){
// //     //code
// //     console.log('this will have an error')
// // }

// // //optionaly else or else if

// // if(mynum == 'four'){
// //     console.log('i like 4')
// // }else{
// //     console.log('i wish it was four')
// // }


// // if(mynum == 'five' || israining){
// //     console.log('its a dreary day')
// // }



// // //loops
// // //both count 0 -> 9
// // arr=[]
// // for(var i =0;i<10;i++){
// //     arr.push(i)
// // }

// // var i =0
// // while(i<10){
// //     console.log(i)
// //     i+=1
// // }

// //arrays
// //use array notation []
// var myarr =['a','b','c']
// //arrays are 0 indexed that just means they start at 0
// //get value at index 1
// myarr[1]
// //set value at index 2
// myarr[2] = 'cat'

// //we can store anything in an array
// //even null
// myarr[0]= null;
// //we can add to the end of an array with push

// myarr.push('zebra')
// console.log(myarr)
// //we can also remove the last item with pop
// myarr.pop()
// myarr[3] =null
// myarr[4] =null
// myarr[5] =undefined
// myarr[6] =678
// myarr.pop()
// console.log(myarr)


// //functions
// //declare
// function setx(value,value3){
//     x = value
// }
// //call
// setx(4,'a')
// //function may return a value
// //all functions return something
// //if theres no return statement they return undefined
// function makearr(num,num2,num3){
//     return[num,num2,num3]
// }
// var newarr = makearr(1,2,3)
// console.log(newarr)


console.log('page loading.....')
//pretend i changed the color of the button

function example(element){
    console.log('Element clicked', element)
}

function disapear(element){
    element.remove();
}

function over(element){
    element.style.backgroundColor = 'lime'
}

function out(element){
    element.style.backgroundColor='white'
}