# Agent Usage Playbook

## Backend Engineer

Entrada: “Adicionar validação PIX no `ap-bills` e rota POST segura.”
Saída esperada: service puro + zod + rota com mapeamento de erros + testes.

## Frontend Engineer

Entrada: “Form de criação de fornecedor com RHF + zod; card e tabela.”
Saída: componentes desacoplados + hook de dados + testes de render/validação.

## Data Engineer

Entrada: “Normalizar lançamentos Omie e exportar shape comum.”
Saída: adapter de leitura + model puro + job idempotente + fixture + testes.

## QA/Tests

Entrada: link/patch; Rodar scripts; Escrever/ajustar testes mínimos; Veredito.

## Fullstack

Entrada: “Slice vertical: rota → service → hook → componente.”
Saída: 2–3 commits em sequência, cada um com seu teste.
