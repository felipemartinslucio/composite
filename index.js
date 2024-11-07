const Funcionario = require('./classes/Funcionario');
const Departamento = require('./classes/Departamento');

// Criação de funcionários
const joao = new Funcionario("João", 3000);
const maria = new Funcionario("Maria", 4000);
const pedro = new Funcionario("Pedro", 3500);
const ana = new Funcionario("Ana", 5000);

// Criação de departamentos
const departamentoTI = new Departamento("TI");
const departamentoRH = new Departamento("RH");
const empresa = new Departamento("Empresa");

// Adicionando funcionários aos departamentos
departamentoTI.add(joao);
departamentoTI.add(maria);

departamentoRH.add(pedro);

// Adicionando departamentos e funcionários à empresa
empresa.add(departamentoTI);
empresa.add(departamentoRH);
empresa.add(ana);

// Exibindo a estrutura e calculando o salário total
console.log("Estrutura da organização:");
empresa.showDetails();

console.log("\nSalário total da organização:");
console.log(empresa.getSalario());