import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent {
  pessoas = [
    { status: true, nome: 'Elaine Souza', dataNascimento: '10/05/1988', cidade: 'Mossoró', estado: 'RN'},
    { status: true, nome: 'Helena Lopes', dataNascimento: '13/05/2009', cidade: 'Mossoró', estado: 'RN'},
    { status: true, nome: 'Anderson Benigno Lopes', dataNascimento: '13/12/1981', cidade: 'Fortaleza', estado: 'CE'},
    { status: false, nome: 'Eliene Lopes', dataNascimento: '10/01/1952', cidade: 'Mossoró', estado: 'RN'},
    { status: false, nome: 'Hélio Lopes', dataNascimento: '10/10/1977', cidade: 'Mossoró', estado: 'RN'},
    { status: true, nome: 'Ramísia Souza', dataNascimento: '16/06/2000', cidade: 'Mossoró', estado: 'RN'},
    { status: true, nome: 'Aline Mayara', dataNascimento: '28/02/1995', cidade: 'Aracati', estado: 'CE'},
    { status: true, nome: 'Francisco Deassis Lopes', dataNascimento: '10/05/1948', cidade: 'Almino Afonso', estado: 'RN'},
    { status: false, nome: 'Maria de Lourdes', dataNascimento: '10/05/1958', cidade: 'Mossoró', estado: 'RN'}
  ];

}
