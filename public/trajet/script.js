arrow.addEventListener('click',function(){

    if( !visible ){
        visible= !visible;
        menu.style.display = 'flex';
        arrow.style.rotate ='180deg';
    }
    else
    {
        visible= !visible;
        menu.style.display = 'none';
        arrow.style.rotate ='0deg';
    }
    

})


let i=1
let length = document.getElementById("lengh");
let plus = document.getElementById("more")
let minuss = document.getElementById("less")

plus.addEventListener('click' , function(){

    if( i <= 5)
    {
    i++;
    console.log("Plusssssssssssssssssssssssssss");
    updater();
    }
});

minuss.addEventListener('click' , function(){

    if( i > 0)
    {
    i--;
    console.log("minusssssssssssssssssssss");
    updater();
    }
});

function updater(){
    if(i==1)
    {
        length.style.width='21%';
        console.log(length);
    }
    else
    {
        length.style.width=i*20+'%';
        console.log(length);
    }
   
}
