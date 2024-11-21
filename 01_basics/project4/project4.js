const startbtn=document.querySelector('#start')
    const stopbtn=document.querySelector('#stop')

    let stopit;

    startbtn.addEventListener('click',function(){
        stopit=setInterval(randomcolor,1000)
    })

    stopbtn.addEventListener('click',function(){
        clearInterval(stopit)
    })


  const randomcolor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}