function comprar(){

    // Recuperar o tipo de ingresso e quantidade
    
    let tipoIngresso = document.getElementById('tipo-ingresso').value;   
    let qtdSelecionada = parseInt(document.getElementById('qtd').value);
    
    let elementoQtdSupDisponivel = document.getElementById('qtd-superior');
    let qtdSuperiorDisponivel = parseInt(document.getElementById('qtd-superior').textContent); 

    let elementoQtdInfDisponivel = document.getElementById('qtd-inferior');
    let qtdInferiorDisponivel = parseInt(document.getElementById('qtd-inferior').textContent);
    
    let elementoQtdPistaDisponivel = document.getElementById('qtd-pista');
    let qtdPistaDisponivel = parseInt(document.getElementById('qtd-pista').textContent);
    

    if(tipoIngresso === 'Cadeira superior'){
    
         // Verificar se a quantidade selecionada está disponível
        if(qtdSuperiorDisponivel === 0){
            alert(`Que pena! Não temos mais nenhuma cadeira disponível para esse setor`);
        }
        else 
            if(qtdSelecionada > qtdSuperiorDisponivel){
            
                alert(`Escolha uma quantidade menor do que ${qtdSelecionada}, temos apenas ${qtdSuperiorDisponivel} cadeira(s) disponível(is)`);
        
            }
            
            // No clique do botao de comprar, reduzir da opção selecionada a qt de ingressos colocada
            else{
                qtdSuperiorDisponivel -= qtdSelecionada;
                elementoQtdSupDisponivel.textContent = qtdSuperiorDisponivel;
                console.log(qtdSuperiorDisponivel);
            }
    
    }
    
    else if(tipoIngresso === 'Cadeira inferior'){
        
         // Verificar se a quantidade selecionada está disponível
        if(qtdInferiorDisponivel === 0){
            alert(`Que pena! Não temos mais nenhuma cadeira disponível para esse setor`);
        }
        else 
            if(qtdSelecionada > qtdInferiorDisponivel){
            
                alert(`Escolha uma quantidade menor do que ${qtdSelecionada}, temos apenas ${qtdInferiorDisponivel} cadeira(s) disponível(is)`);
        
            }
            
            // No clique do botao de comprar, reduzir da opção selecionada a qt de ingressos colocada
            else{
                qtdInferiorDisponivel -= qtdSelecionada;
                elementoQtdInfDisponivel.textContent = qtdInferiorDisponivel;
                console.log(qtdInferiorDisponivel);
            }
      
    
    }
    
    else if(tipoIngresso === 'Pista'){
      
         // Verificar se a quantidade selecionada está disponível
        if(qtdPistaDisponivel === 0){
            alert(`Que pena! Não temos mais nenhuma cadeira disponível para esse setor`);
        }
        else 
            if(qtdSelecionada > qtdPistaDisponivel){
            
                alert(`Escolha uma quantidade menor do que ${qtdSelecionada}, temos apenas ${qtdPistaDisponivel} cadeira(s) disponível(is)`);
        
            }
            
            // No clique do botao de comprar, reduzir da opção selecionada a qt de ingressos colocada
            else{
                qtdPistaDisponivel -= qtdSelecionada;
                elementoQtdPistaDisponivel.textContent = qtdPistaDisponivel;
                console.log(qtdPistaDisponivel);
            }
      
    
    }

}