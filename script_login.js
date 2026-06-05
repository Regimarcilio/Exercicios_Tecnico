window.onload = function() {
    const btEntrar = document.querySelector(".btEntre");
    btEntrar.addEventListener('click', () => { 
            alert('Conta acessada com sucesso!');  
        });
    
    const btAcessar = document.querySelector(".btAcessar");
    btAcessar.addEventListener('click', () => { 
            alert('Conta criada com sucesso!');  
        });
    
};