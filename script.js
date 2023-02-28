
async function url(){
    var v=fetch(`https://meowfacts.herokuapp.com/?count=${count.value}`)
    var a=await v
    var b=await a.json()
    // console.log(b.data);
    var parent=document.querySelector('.y')
    for(let i of b.data){
        // console.log(i);
        var child=document.createElement('p')
        child.innerHTML=`&rarr; ${i}`
        parent.append(child)
        
    
    }
 
    

}
var count=document.querySelector('input')
// console.log(count);
function clicking(e){
    url()
count.value=''
var parent=document.querySelector('.y')
parent.innerHTML=''
    
}