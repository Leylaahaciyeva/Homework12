let btn =document.querySelector('.button');

btn.onclick = function(event){
     
    let username = document.querySelector('.username').value;
    let email =document.querySelector('.email').value;
    let password=document.querySelector('.password').value;
    
    if(username.length>6){
        console.log(username)
     }
     else{
        alert('Username 6 simvoldan cox olmalidir')
    }
    if(username[0]===username[0].toUpperCase()){
        
     console.log(username)
    }
    else{
        alert(' Username boyuk herfle baslamalidir')
    }
    if(6<password.length<10){
        console.log(password)
    }
    else{
        alert('Password minimum 6 maksimum 10 simvol olmalidir')
    }
    if(password.includes('!','@','#','%','^','&','*','~','/','-','+','=','>','<',',','.')){
        console.log(true)
    }
    else{
        alert('Passwordda minimum 1 simvol olmalidir')
    }
    if(email.includes('@','.')){
        console.log(true)
    }
    else{
        alert('Emaildə @ işarəsi və nöqtə olmalıdır')
    }
    
}


