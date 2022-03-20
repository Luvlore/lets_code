/*
ATIVIDADE 1:

  Crie uma (ou mais) classe para representar um app de banco

  - Deverá ter diferenciação de clientes PJ e PF

  Pense no que deve ou não ser tratado como herança
  Pense no que deve ou não ser privado
  Pense em outras coisas que façam sentido para um app de banco e que faça consigo implementar


  No cliente pessoa física, criar um método
  onde retorna os dados de rg e cpf.
  No cliente pessoa juridica, criar um método
  onde retorna os dados do cnpj

  Utilize o conceito de Polimorfismo para execução da solicitação acima

ATIVIDADE 2:

  Crie uma Objeto Lançamentos 
  e para cada operação de saque ou depósito
  Insira os seguintes registros nessa objeto:
    - Nome do Cliente
    - Tipo da Operação (se foi saque ou se foi depósito)
    - Valor
    - Horario da Transação
  Considerando o conceito de encapsulamento
  deixe o saldo bancário do cliente inacessível fora do escopo de conta.
  Lembre-se apenas o escopo de conta poderá movimentar o saldo bancário.

  Crie um método que calcule o juros de atraso 
  de um determinado pgto, onde tenha as seguintes regras: 
  - Atraso de 1 dia juros de 1%
  - Atraso de 2 dias juros 2.5 % 
  - Atraso de 3 dias ou mais, juros composto

ATIVIDADE 3:

  - Crie um método de Leasing para o cliente
considerando as seguintes condições:
  - Se cliente PJ, considerar Juros diário de 1%
  - Se cliente PF, considerar juros diário de 0.5 %

  - Sempre que o usuário for fazer um saque, pagar uma conta, ou realizar 
  transferência e o saldo disponível em conta for menor que o valor da operação,  
  verificar se o mesmo quer fazer uso do Leasing, se sim, liberar o saque e informar o 
  valor negativo e a taxa de juros a ser aplicada.

  - Crie um método de Leasing para o cliente
considerando as seguintes condições:
  - Se cliente PJ, considerar Juros diário de 1%
  - Se cliente PF, considerar juros diário de 0.5 %

  - Sempre que o usuário for fazer um saque, pagar uma conta, ou realizar 
  transferência e o saldo disponível em conta for menor que o valor da operação,  
  verificar se o mesmo quer fazer uso do Leasing, se sim, liberar o saque e informar o 
  valor negativo e a taxa de juros a ser aplicada.

  [
    Saldo negativo:
    Juros Diário:
    Data:
    Juros Total Acumulado:
  ]

  OBS: Sempre que o cliente entrar no cheque especial o metodo precisa ser invocado

  - Crie um método que irá verificar se o cliente está com cheque especial, 
  e se ocorrer um depósito em conta, é necessário abater o valor do cheque especIAL.
 */
