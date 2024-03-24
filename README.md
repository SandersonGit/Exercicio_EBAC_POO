# Exercicio_EBAC_POO

# Sistema de Personagens

Este é um sistema simples para criar personagens de um jogo de RPG. Ele utiliza conceitos de programação orientada a objetos para definir classes de personagens e criar instâncias de objetos com atributos específicos.

## Classes

### `Personagem`

- Descrição: Classe base para todos os personagens.
- Atributos:
  - `nome`: Nome do personagem.
  - `idade`: Idade do personagem.
- Métodos:
  - Construtor: Define o nome e a idade do personagem.

### `Guerreiro`

- Descrição: Subclasse de `Personagem`, representa um guerreiro.
- Atributos adicionais:
  - `ataque`: Nível de ataque do guerreiro.
  - `defesa`: Nível de defesa do guerreiro.
  - `velocidade`: Velocidade de movimento do guerreiro.
  - `especialidade`: Habilidade especial do guerreiro.
- Métodos:
  - Construtor: Define os atributos específicos do guerreiro, além do nome e idade herdados.

### `Mago`

- Descrição: Subclasse de `Personagem`, representa um mago.
- Atributos adicionais:
  - `ataque`: Nível de ataque do mago.
  - `defesa`: Nível de defesa do mago.
  - `velocidade`: Velocidade de movimento do mago.
  - `especialidade`: Habilidade especial do mago.
- Métodos:
  - Construtor: Define os atributos específicos do mago, além do nome e idade herdados.

## Instâncias de Objetos

- `guerreiro1`: Um guerreiro chamado "Grom Hellscream" com 45 anos, ataque 90, defesa 80, velocidade 70 e especialidade "Combate corpo a corpo".
- `mago1`: Um mago chamado "Gandalf" com 1000 anos, ataque 75, defesa 60, velocidade 50 e especialidade "Magias poderosas".
- `guerreiro2`: Outro guerreiro chamado "Aragorn" com 40 anos, ataque 85, defesa 85, velocidade 75 e especialidade "Luta com espada".

## Exibição de Informações

As informações dos personagens são exibidas no console usando `console.log`. Cada personagem é apresentado com seu nome e atributos específicos.

---
Este é um exemplo simples de um sistema de personagens em JavaScript usando classes e herança. Ele pode ser expandido e personalizado para atender às necessidades de um jogo de RPG mais complexo.
