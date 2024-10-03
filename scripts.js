function contar() {
    let segundos = document.querySelector('#segundos').value;
    
    if (segundos > 0) {
        document.querySelector('#salida').textContent = 'Contando...';
        
        setTimeout(() => {
            document.querySelector('#salida').textContent = 'ON';
            document.querySelector('#salida').style.color = 'green';
            document.querySelector('#audio').play();
        }, segundos * 1000);
    } else {
        alert("Por favor, introduce un número válido de segundos.");
    }
}

function resetear() {
    location.reload(); // Refrescar la página
}
