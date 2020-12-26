function myFunction(){
    const email = document.forms["form"]["email"].value;
    const kritik = document.forms["form"]["kritik"].value;
    const tableOutput = document.getElementById('show')
    tableOutput.rows[1].cells[0].innerHTML = email
    tableOutput.rows[1].cells[1].innerHTML = kritik
}

var navbar = document
    .querySelectorAll(
        'ul.navbar-responsive li.navbar-children a'
    );
console.log('links', navbar);
navbar.forEach(function(link) {
    console.log('each link', link);
});

var submenu = navbar.length;
for (var i=0; i<submenu; i++) {
    var link = navbar[i];
    console.log('each submenu', link)
}
navbar.forEach(function (link){
    link.addEventListener('click', function (ev){
        console.log('link clicked', link)
    var parent = link.parentElement;
    if (parent.classList.contains('active')){
        parent.classList.remove('active');}
    else {
        parent.classList.add('active')
        }
    })
});
