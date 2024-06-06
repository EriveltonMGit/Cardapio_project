

 






function ancora() {
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}


window.addEventListener('scroll', function() {
    
    var section2 = document.getElementById('servicos');
    
  
    var section2Top = section2.getBoundingClientRect().top;
    
   
    var scrollBtn = document.getElementById('ancora');

  
    if (section2Top < window.innerHeight) {
        scrollBtn.style.display = 'block'; 
    } else {
        scrollBtn.style.display = 'none'; 
    }
});

