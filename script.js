document.getElementById('signinbtn').addEventListener('click', function(){
    window.location.href = '/netflixclone_own/pages/signup/singup.html';
});

document.getElementById('logo').addEventListener('click', function(){
    window.location.href = '/netflixclone_own/index.html';
});

document.getElementById('startingSignIn').addEventListener('click', function(){
    window.location.href = '/netflixclone_own/pages/singin/singin.html';
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
  