let Student =[
    
    {summaiya:{ 
    math:{
        mid : "30",
        final : "45" ,
        total : "75",
    },
    english: {
        mid : "21",
        final : "48" ,
        total : "69",
    },
    science:{
        mid : "42",
        final : "49" ,
        total : "91",
    }
    },

    fatima:
    {
        math:{
            mid : "41",
            final : "39" ,
            total : "80",
        },
        english : {
            mid : "18",
            final : "45" ,
            total : "63",
        },
        science :{
            mid : "43",
            final : "43" ,
            total : "86",
        }
    },
    
    ali:{
     math:{
        mid : "30",
        final : "40" ,
        total : "70",
    },
    english : {
        mid : "20",
        final : "20" ,
        total : "40",
    },
    science :{
        mid : "30",
        final : "45" ,
        total : "75",
    }
    },

    ahmed :{
        math:{
            mid : "48",
            final : "33" ,
            total : "81",
        },
        english : {
            mid : "30",
            final : "40" ,
            total : "70",
        },
        science :{
           
            mid : "25",
            final : "47" ,
            total : "72 / 100",
        }
    }}
];
let Sname = document.getElementById("Sname")
let subj = document.getElementById("Subjects")
let obj= Object.keys(Student[0]);
//console.log(obj);
for (let i = 0; i <obj.length; i++) {
    Sname.innerHTML +=`<option>${obj[i]}</option>`
}

let b = Student.filter(function(x){
    let a =    
    subj.disabled = false;
            if(x.categor == "fatima"){
                return i ;
            }
    }

   
    // {
    //     subj.disabled = false;
    //     if(x.categor == "fatima"){
    //         return subj.innerHTML = "";
    //              for (let i = 0; i < subject.length; i++) {
    //                 subj.innerHTML += `<option>
    //                  ${subject[i]}</option>`};
    //     }
    // }
    )
    console.log(b); 
    

// function DropDownb(){
//     subj.disabled = false;
//     //let subject = Object.keys(Student[Sname.value]);

//   subj.innerHTML = "";
//     for (let i = 0; i < subject.length; i++) {
//        subj.innerHTML += `<option>
//          ${subject[i]}</option>`};
// }

// function searchdp(){ 
//     row.innerHTML = ''
//     let tabl = document.getElementById("tablA");
//     tabl.hidden = false;
//   //  let resT =  Student[Sname.value][subj.value] ;
//     let res = Object.values(resT);
//     for (let a = 0; a < res.length; a++) {
//         row.innerHTML += `<td>
//           ${res[a]}</td>`};
//      }
     
  


// let obj = Object.keys(Student)
// console.log(obj);


////////////////////////////////////////////filter
// const words = [
//     { names: 'spray',
//     name: 'present'}
// ];
let Student =[
    {
        samsung:{ 
    A10:{
       price : "22",
        ram : "4" ,

    },
    A11: {
       price : "24",
        ram : "8" ,
        
    },
    A12:{
       price : "32",
        ram : "12" ,
       
    }
    },

    iphone:
    {
        pm11:{
            price : "41",
            ram : "30" ,
          
        },
        pm12 : {
            price : "55",
            ram : "32" ,
            
        },
       
    }}
];

// const result = Student.filter(function (e){ 
//     return e.samsung;
// })
// console.log(result);
// //access object value in array using filter function?

let Sname = document.getElementById("Sname")
let subj = document.getElementById("Subjects")
let obj= Object.keys(Student[0]);
//
for (let i = 0; i <obj.length; i++) {
    Sname.innerHTML +=`<option>${obj[i]}</option>`
}

function DropDownb(){
    subj.disabled = false;
    let subject = Object.keys(Student[0][Sname.value]);

  subj.innerHTML = "";
    for (let i = 0; i < subject.length; i++) {
       subj.innerHTML += `<option>
         ${subject[i]}</option>`};
}

let res =
Student.filter( function (e){ 
    return e.Student[0][subj.value]
    // row.innerHTML = ''
    // let tabl = document.getElementById("tablA");
    // tabl.hidden = false;
    
    // 
    // for (let a = 0; a < res.length; a++) {
    //     row.innerHTML += `<td>
    //       ${res[a]}</td>`};
     }
     )
    // function DropDow(){
     console.log(res);
     