const today= Date();

// alert(today);
document.querySelector('body').addEventListener('contextmenu', (e) => {
    e.preventDefault();
})


function picture(){
    var popup = document.getElementById("popup1");
    popup.classList.toggle("show");
}
function buttonDown(){
    alert( 'Button Down');
    console.log('Hallo Welt!');
    return 12+13;
}
