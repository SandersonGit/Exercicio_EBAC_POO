// Definindo a classe Personagem
class Personagem {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

// Definindo a subclasse Guerreiro que herda de Personagem
class Guerreiro extends Personagem {
    constructor(nome, idade, ataque, defesa, velocidade, especialidade) {
        super(nome, idade);
        this.ataque = ataque;
        this.defesa = defesa;
        this.velocidade = velocidade;
        this.especialidade = especialidade;
    }
}

// Definindo a subclasse Mago que herda de Personagem
class Mago extends Personagem {
    constructor(nome, idade, ataque, defesa, velocidade, especialidade) {
        super(nome, idade);
        this.ataque = ataque;
        this.defesa = defesa;
        this.velocidade = velocidade;
        this.especialidade = especialidade;
    }
}

// Criando instâncias de objetos
const guerreiro1 = new Guerreiro("Grom Hellscream", 45, 90, 80, 70, "Combate corpo a corpo");
const mago1 = new Mago("Gandalf", 1000, 75, 60, 50, "Magias poderosas");
const guerreiro2 = new Guerreiro("Aragorn", 40, 85, 85, 75, "Luta com espada");

// Exibindo informações dos personagens
console.log("Informações do Guerreiro 1:", guerreiro1);
console.log("Informações do Mago 1:", mago1);
console.log("Informações do Guerreiro 2:", guerreiro2);
