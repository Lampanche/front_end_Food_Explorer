export function resize(setVw)
{
  window.addEventListener("resize", function(event){
    setVw(event.target.innerWidth)
  })
}