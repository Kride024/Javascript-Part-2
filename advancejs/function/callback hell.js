 //*____________________________________________
 //*   Callback hell
 //*___________________________________________

 //? Callback hell, also known as the Pyramid of Doom, refers to a situation in asynchronous JavaScript programming where multiple nested callbacks ara used to handle asynchronous operations.This often results in code that is difficult to read,understand,and maintain due to its deeply nested structure.

 const getStudentData=()=>{
    setTimeout(()=>{
        console.log("Hi,My name is vinod");
        setTimeout(()=>{
            console.log("kya bhai");
            setTimeout(()=>{
                console.log("knight");
                setTimeout(()=>{
                    console.log("hum");
                    setTimeout(()=>{
                        console.log("krishna");
                        
                    },1000);                    
                },1000);
                
            },1000);
            
        },1000);
        
    },1000);
 };
 getStudentData();