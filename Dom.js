let btnplus= document.getElementsByClassName("plus");
let qt=document.getElementsByClassName("nombreArticle");
let btnmoin=document.getElementsByClassName("moin");
let prixT=document.getElementsByClassName("total")
let Px=document.getElementsByClassName("prix")
let btnsup=document.getElementsByClassName("sup")
let Art=document.getElementsByClassName("article")


for(let i=0; i<btnplus.length;i++){

    //bouton plus

    btnplus[i].addEventListener('click',function(){
       qt[i].value ++;
       let ConvPx =parseInt(Px[i].innerHTML)
       let ConvQt =parseInt(qt[i].value)
       let som = ConvPx * ConvQt
       prixT[i].innerHTML= som

    })

    //button moin
    btnmoin[i].addEventListener('click',function(){

     if (qt[i].value > 0 ){
        qt[i].value --;
        let ConvPx =parseInt(Px[i].innerHTML)
       let ConvQt =parseInt(qt[i].value)
       let som = ConvPx * ConvQt
       prixT[i].innerHTML= som

        }
    }) 

    //Boutton supprimer

    btnsup[i].addEventListener("click",function(){
        Art[i].remove()
    })

   
}

