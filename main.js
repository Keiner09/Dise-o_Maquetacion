function abrir_ventana_video() {
    let urlvideo = "https://www.youtube.com/embed/y7u9eskL4KM";
    let ventana = window.open("", "VideoPopup", "width=560,height=315,top=100,left=100");

    if (ventana) {
        ventana.document.write(`
            <html>
                <head>
                    <title>Video</title>
                </head>
                <body style="margin:0; display:flex; justify-content:center; align-items:center; height:100vh; background-color:black;">
                    <iframe width="560" height="315" src="${urlvideo}" frameborder="0" allowfullscreen></iframe>
                </body>
            </html>
        `);
        ventana.document.close(); 
    } else {
        alert("Permite las ventanas emergentes para ver este video.");
    }
}
function abrirMenu(){
    document.getElementById("presentacion_navegacion_lista").classList.toggle("show");

}