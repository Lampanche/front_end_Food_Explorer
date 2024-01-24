export function toogleComponents(vw, compMobile, compDesktop)
{
  if(vw == null || vw == '')
  {
    vw = window.innerWidth
  }

  if(Number(vw) >= 1024)
  {
    return compDesktop 
  }

    return compMobile

}