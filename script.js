document.getElementById('signinbtn').addEventListener('click', function(){
    window.location.href = './pages/signup/singup.html';
});

document.getElementById('logo').addEventListener('click', function(){
    window.location.href = './index.html';
});

document.getElementById('startingSignIn').addEventListener('click', function(){
    window.location.href = './pages/singin/singin.html';
});
document.getElementsByClassName('class="signinfirst"').addEventListener('click', function(){
    window.location.href = './pages/singin/singin.html';
});

//important


  

  document.addEventListener('DOMContentLoaded', function() {
    const showInfoButtons = document.querySelectorAll('.btn');
    const infoDivs = document.querySelectorAll('.info');
  
    showInfoButtons.forEach(function(button, index) {//loop for all
      button.addEventListener('click', function() {
        // Toggle the display style of the corresponding infoDiv
        infoDivs[index].style.display = infoDivs[index].style.display === 'none' ? 'block' : 'none';
      });
    });
  });
  

