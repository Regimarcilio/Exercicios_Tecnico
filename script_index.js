window.onload = function() {
    const btComprar = document.querySelectorAll(".comprar");
    btComprar.forEach(button => {
        button.addEventListener('click', () => {
            alert('Produto adicionado ao carrinho!');
        });
    });
    
    const melhorCompra1 = document.getElementById("melhorCompra1");
        melhorCompra1.addEventListener('click', () => { 
            alert('Essa foi boa! Você ganhou um desconto de 10%!');  
        });

    const melhorCompra2 = document.getElementById("melhorCompra2");
        melhorCompra2.addEventListener('click', () => { 
            alert('Essa foi boa! Você ganhou um desconto de 10%!');
        });

    const melhorCompra3 = document.getElementById("melhorCompra3");
        melhorCompra3.addEventListener('click', () => { 
            alert('Essa foi boa! Você ganhou um desconto de 10%!');
        }); 

    const melhorCompra4 = document.getElementById("melhorCompra4");
        melhorCompra4.addEventListener('click', () => { 
            alert('Essa foi boa! Você ganhou um desconto de 10%!');
        });
};
