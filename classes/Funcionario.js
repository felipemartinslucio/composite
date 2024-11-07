class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    getSalario() {
        return this.salario;
    }

    showDetails() {
        console.log(`Funcionario: ${this.nome}, Salario: ${this.salario}`);
    }
}

module.exports = Funcionario;  