import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {
  tipos = [
    {label: 'Receita', value: 'RECEITA'},
    {label: 'Despesa', value: 'DESPESA'},
  ];

  pt: any;

  constructor() { }

  ngOnInit() {
    this.pt = {
      firstDayOfWeek: 0,
      dayNames: [`Domingo`, `Segunda-feira`, `Terça-feira`, `Quarta-feira`, `Quinta-feira`, `Sexta-feira`, `Sábado`],
      dayNamesShort: [`Dom`, `Seg`, `Ter`, `Qua`, `Qui`, `Sex`, `Sáb`],
      dayNamesMin: [`Dm`, `Sg`, `Tr`, `Qr`, `Qn`, `Sx`, `Sb`],
      monthNames: [`Janeiro`, `Fevereiro`, `Mar;o`, `Abril`, `Maio`, `Junho`, `Julho`, `Agosto`, `Setembro`, `Outubro`,
        `Novembro`, `Dezembro`],
      monthNamesShort: [`Jan`, `Fev`, `Mar`, `Acr`, `Mai`, `Jun`, `Jul`, `Ago`, `Set`, `Out`, `Nov`, `Dez`]
    };
  }

}
