import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent {
  pessoas = [
    { status: true, nome: 'Elaine Souza', dataNascimento: new Date(1988, 4, 10), cidade: 'Mossoró', estado: 'RN'},
    { status: true, nome: 'Helena Lopes', dataNascimento: new Date(2009, 4, 13), cidade: 'Mossoró', estado: 'RN'},
    { status: true, nome: 'Anderson Benigno Lopes', dataNascimento: new Date(1981, 11, 13), cidade: 'Fortaleza', estado: 'CE'},
    { status: false, nome: 'Eliene Lopes', dataNascimento: new Date(1957, 12, 10), cidade: 'Mossoró', estado: 'RN'},
    { status: false, nome: 'Hélio Lopes', dataNascimento: new Date(1977, 10, 10), cidade: 'Mossoró', estado: 'RN'},
    { status: true, nome: 'Ramísia Souza', dataNascimento: new Date(2000, 5, 16), cidade: 'Mossoró', estado: 'RN'},
    { status: true, nome: 'Aline Mayara', dataNascimento: new Date(1995, 1, 28), cidade: 'Aracati', estado: 'CE'},
    { status: true, nome: 'Francisco Deassis Lopes', dataNascimento: new Date(1948, 9, 20), cidade: 'Almino Afonso', estado: 'RN'},
    { status: false, nome: 'Maria de Lourdes', dataNascimento: new Date(1964, 7, 23), cidade: 'Aracati', estado: 'CE'}
  ];

}
