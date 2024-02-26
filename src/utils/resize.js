export function resizeWidth(setVw)
{
  window.addEventListener("resize", function(event){
    setVw(event.target.innerWidth)
  })
}
