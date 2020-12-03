function form(){
    const email = document.forms["form"]["email"].value;
    const kritik = document.forms["form"]["kritik"].value;
    const tableOutput = document.getElementById('show')
    tableOutput.rows[1].cells[0].innerHTML = email
    tableOutput.rows[1].cells[1].innerHTML = kritik
}

function button() {
    var txt;
    if (confirm("Terima kasih atas dukungan anda")) {
      txt = "Selesai";
    } else {
      txt = "Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }