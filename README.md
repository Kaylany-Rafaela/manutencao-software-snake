# Manutenção Preventiva e Evolutiva do Jogo Snake

## Descrição

Este projeto foi desenvolvido como atividade da disciplina de **Manutenção de Software** da Universidade Tecnológica Federal do Paraná (UTFPR).

O trabalho consiste na realização de atividades de manutenção preventiva e evolutiva em uma implementação simples do jogo **Snake**, originalmente desenvolvida em HTML, CSS e JavaScript.

O objetivo principal foi melhorar a organização, legibilidade e manutenibilidade do sistema por meio da aplicação de técnicas de refatoração, preservando integralmente o funcionamento original do jogo.

---

## Repositório Original

A implementação utilizada como base para este projeto está disponível no seguinte repositório público:

https://gist.github.com/straker/ff00b4b49669ad3dec890306d348adc4

---

## Objetivo Geral

Realizar atividades de manutenção preventiva e evolutiva em uma implementação do jogo Snake, aplicando técnicas de refatoração para melhorar a qualidade interna do software, sem alterar seu comportamento funcional.

---

## Objetivos Específicos

- Identificar problemas de manutenibilidade no código original;
- Melhorar a organização estrutural do sistema;
- Aplicar técnicas de refatoração;
- Separar responsabilidades em funções específicas;
- Melhorar a legibilidade do código;
- Reduzir a utilização de valores fixos (Magic Numbers);
- Facilitar futuras modificações e manutenções;
- Preservar o funcionamento original da aplicação.

---

## Problemas Identificados

Durante a análise inicial do sistema foram identificados os seguintes problemas:

### Ausência de Modularização

Toda a aplicação encontrava-se concentrada em um único arquivo HTML contendo simultaneamente:

- Estrutura HTML;
- Estilos CSS;
- Lógica JavaScript.

Essa organização dificultava a manutenção e evolução do sistema.

### Função com Múltiplas Responsabilidades

A função principal do jogo era responsável por diversas tarefas simultaneamente:

- Movimentação da cobra;
- Renderização dos elementos;
- Controle de colisões;
- Controle de crescimento da cobra;
- Atualização do estado do jogo.

### Nomenclatura Pouco Descritiva

Algumas variáveis apresentavam nomes pouco intuitivos, dificultando a compreensão do código.

Exemplo:

```javascript
dx
dy
```

### Presença de Magic Numbers

O sistema utilizava diversos valores fixos espalhados pelo código, tornando futuras alterações mais difíceis.

---

## Refatorações Realizadas

### 1. Separação de Arquivos

Antes da manutenção, toda a aplicação encontrava-se em um único arquivo HTML.

Após a refatoração, o projeto foi dividido em arquivos independentes:

```text
snake.html
style.css
script.js
```

#### Benefícios

- Melhor organização;
- Maior clareza estrutural;
- Facilidade de manutenção;
- Separação adequada de responsabilidades.

---

### 2. Separação de Responsabilidades

A função principal do jogo foi simplificada por meio da criação de funções especializadas.

Foram criadas as seguintes funções:

```javascript
moveSnake()
drawApple()
drawSnake()
resetGame()
```

#### Benefícios

- Redução da complexidade da função principal;
- Melhor legibilidade;
- Código mais modular;
- Facilidade para futuras alterações.

---

### 3. Melhoria da Nomenclatura

Variáveis pouco descritivas foram substituídas por nomes mais claros.

#### Antes

```javascript
dx
dy
```

#### Depois

```javascript
velocityX
velocityY
```

#### Benefícios

- Melhor compreensão do código;
- Maior clareza semântica;
- Facilidade de leitura.

---

### 4. Remoção de Magic Numbers

Valores fixos foram substituídos por constantes descritivas.

#### Exemplo

```javascript
const GRID_SIZE = 16;
const GAME_SPEED = 4;
const TILE_COUNT = 25;
const INITIAL_POSITION = 160;
```

#### Benefícios

- Maior facilidade de manutenção;
- Melhor legibilidade;
- Alterações futuras mais simples.

---

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- HTML5
- CSS3
- JavaScript

---

## Estrutura do Projeto

```text
Snake-Manutencao/
│
├── snake.html
├── style.css
├── script.js
│
├── docs/
│   ├── Relatorio_Final.pdf
│   └── Apresentacao.pdf
│
└── README.md
```

---

## Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
```

### 2. Acessar a pasta

```bash
cd SEU-REPOSITORIO
```

### 3. Executar o sistema

Abrir o arquivo:

```text
snake.html
```

em qualquer navegador moderno.

---

## Controles do Jogo

| Tecla | Ação |
|---------|---------|
| ↑ | Mover para cima |
| ↓ | Mover para baixo |
| ← | Mover para esquerda |
| → | Mover para direita |

---

## Resultados Obtidos

Após a realização das atividades de manutenção foram observadas melhorias significativas na qualidade interna do sistema.

Principais resultados:

- Melhor organização estrutural;
- Redução da complexidade do código;
- Melhor separação de responsabilidades;
- Aumento da legibilidade;
- Facilidade para futuras manutenções;
- Preservação do comportamento original do sistema.

Todas as refatorações realizadas mantiveram o funcionamento correto do jogo.

---

## Conclusão

A execução deste projeto permitiu aplicar na prática conceitos relacionados à manutenção preventiva e evolutiva de software.

Por meio das atividades de refatoração realizadas, foi possível melhorar significativamente a organização, legibilidade e manutenibilidade do sistema, preservando integralmente sua funcionalidade original.

O trabalho demonstrou a importância da manutenção de software para aumentar a qualidade interna dos sistemas e facilitar futuras evoluções.

---

## Autor

**Kaylany Paula**

Disciplina: Manutenção de Software

Professor: Emanuel Queiroga

Universidade Tecnológica Federal do Paraná (UTFPR)

---

## Referências

PRESSMAN, Roger S. Engenharia de Software: Uma Abordagem Profissional.

SOMMERVILLE, Ian. Engenharia de Software.

STRAKER. Snake Game in JavaScript. Disponível em:

https://gist.github.com/straker/ff00b4b49669ad3dec890306d348adc4
