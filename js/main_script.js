// /* Script For  Animation */
//      new WOW().init();
    //show 
document.getElementById('menu-btn').addEventListener('click', function (event) {
     document.querySelector('.food-menu-hidden').style.display = 'block';
})
     
//hide
document.getElementById('cancel-icon').addEventListener('click', function (event) {
     document.querySelector('.food-menu-hidden').style.display = 'none';
})