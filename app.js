let rubAnim=document.querySelectorAll(".pop");
for(let i=o;i<12;i++)
{
    rubAnim[i].addEventListener("mouseenter", function(){
        rubAnim[i].classList.add("rubberBand");
        setTimeout(function(){
            rubAnim[i].classList.remove("rubberBand");
        },1000)
    })
}