document.querySelector('body').addEventListener('contextmenu', (e) => {
    e.preventDefault();
})

function buttonDown(){
    alert( 'Button Down');
    console.log('Hallo Welt!');
    return 12+13;
}
