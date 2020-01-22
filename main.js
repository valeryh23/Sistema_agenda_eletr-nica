



var firebaseConfig = {
    apiKey: "AIzaSyBC_tp-JRsxcj8G5hhM_TCrjSGt1W5dfNE",
    authDomain: "agenda-de-contatos-2020.firebaseapp.com",
    databaseURL: "https://agenda-de-contatos-2020.firebaseio.com",
    projectId: "agenda-de-contatos-2020",
    storageBucket: "agenda-de-contatos-2020.appspot.com",
    messagingSenderId: "1016614000913",
    appId: "1:1016614000913:web:750e1baf6f67320ed794b0",
    measurementId: "G-FS84QY4S63"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  // Cadastro de Contatos

class Contato {

  constructor ( nome, telefone, operadora){

    
    this.nome = nome;
    this.telefone=telefone;
    this.operadora=operadora;
  }
}

//classe operação

class Operacao{

  addContato(contato){
    const table = document.getElementById('list');

    firebase.firestore().collection('contatos').add({

       
       nome: contato.nome,
       telefone: contato.telefone,
       operadora: contato.operadora
    });

       const Toast = Swal.mixin({

       toast: true,
       position: 'top-end',
       showConfirmButton: false,
       timer: 3000
      });

      Toast.fire({
         icon:'success',
         title:'Add Contato'
      })   

  }

  clearForm(){

    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('operadora').value = '';
  }
}

// Evento da lista


document.getElementById('formContato').addEventListener('cadastrar', function (e){

  //pega o formulário de contato
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const operadora = document.getElementById('operadora').value;

  // Instanciando os contatos
  const contato = new Contato(nome, telefone, operadora);

  //Instanciando UI
  const operation = new Operacao();

  // Adiciona o nome na tabela

  operation.addContato(contato);


  operation.clearForm();

  e.preventDefault();

});

function deletaContato(key){
  console.log(key)
  firebase.firestore().collection("contatos".doc(ke).delete();
    const table = document.getElementById('list');
    table.innerHTML='';

    const Toast= Swal.mixin({
      toast:true,
      position: 'top-end',
      showConfirmButton: false,
      timer 3000
    })

    Toast.fire({
      icon:'success',
      title: 'Deleta Contato'
    })
}

(function(){
  const table = document.getElementById('list');
  table.innerHTML = '';
  firebase.firestore().collection("contatos").onSnapshot(function(querySnapshot){


    table.innerHTML='';
    querySnapshot.forEach(function(doc){
      table.innerHTML+=
      <tr id ="${doc.id}">
      <td>${doc.data().nome}</td>
      <td>${doc.data().telefone}</td>
      <td>${doc.data().operadora}</td>
      <td><button onclick = "deletaContato('${doc.id}'"class = "btn btn-danger"
      delete">X</button></td>
      </tr>
    });
  });

})();


