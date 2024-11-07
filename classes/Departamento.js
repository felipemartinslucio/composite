class Departamento {
    constructor(nome) {
        this.nome = nome;
        this.empregados = [];
    }

    add(empregado) {
        this.empregados.push(empregado);
    }

    remove(empregado) {
        this.empregados = this.empregados.filter(e => e !== empregado);
    }

    getSalario() {
        return this.empregados.reduce((total, emp) => total + emp.getSalario(), 0);
    }

    showDetails() {
        console.log(`Departamento: ${this.nome}`);
        this.empregados.forEach(emp => emp.showDetails());
    }
}

module.exports = Departamento;  