


const nomeProduto = []

const imagemProduto = []

const precoProduto = []


const fetchCantao = () => {
    const url = `https://cantao.vtexcommercestable.com.br/api/catalog_system/pub/products/search?fC:65&_from=1&_to=50`;
    
    fetch(url)
    
    .then(response =>{
        return response.json()
    })
    
    .then(produtos =>{


        for(i=0; i < 40; i++){
          nomeProduto.push(produtos[i].productName);
          imagemProduto.push(produtos[i]['items'][1]['images'][0].imageUrl);
          precoProduto.push(produtos[i]['items'][1]['sellers'][0]['commertialOffer']['Price']).toString;
        }
        
        function criar(){
        let pname = document.querySelector('.vitrine');
        for (var i=0; i < nomeProduto.length; i++){
            let item = document.createElement('div');
            let img = document.createElement('img');
            let preco = document.createElement('p');
            Number.parseFloat(preco)
            img.src = `${imagemProduto[i]}`
            preco.innerHTML = `R$ ${precoProduto[i]}`
            item.className = 'produto'; 
            img.className = 'produto';
            pname.appendChild(item);
            item.appendChild(img);
            item.appendChild(document.createTextNode(nomeProduto[i]));
            item.appendChild(preco);
            
        }
        }

        criar()    

        
    })

    .catch(function(e){
        console.log(e);
    });






}

fetchCantao()

