# Orchestration — Cursor Agents (v2)

## 🎯 Objetivo

Definir como os agentes colaboram em baby steps, minimizando retrabalho e garantindo testes mínimos por mudança.

## 🔁 Fluxo base

1. **Executor** (Backend/Frontend/Data/Fullstack) descreve WHAT/WHY/HOW e propõe um diff pequeno (≤3 arquivos, ≤60 linhas).
2. Abre PR (ou descreve patch) e menciona **QA/Tests**.
3. **QA/Tests**:
   - Roda `pnpm format && pnpm lint && pnpm test`
   - Escreve/ajusta testes mínimos do diff
   - Dá veredito **Pass/Fail** + próximos passos
4. Merge. Próximo baby step.

## 🤝 Hand-offs recomendados

- **Fullstack → Backend**: mudou contrato de API (tipos/zod/schema).
- **Backend → Data**: novo evento/CDC a ser normalizado nos jobs.
- **Frontend → QA**: alteração de validação/UX em formulário.
- **Data → QA**: qualquer mudança de shape/contagens em jobs.

## 🧪 Checklist do QA/Tests

- Respeita DRY/KISS/YAGNI e limites por step.
- Tipos corretos e contratos explícitos (zod/types).
- Sem cross-feature. Sem segredos em client.
- Testes mínimos cobrindo linhas alteradas:
  - Backend: unit de services + rota mockada
  - Frontend: render + interação/validação
  - Data: fixture + asserts de shape/contagem

## 🔎 Comentários padrão (exemplos)

- “Fatiar em 2 commits: service e hook separados.”
- “Adicionar teste de validação zod para campo `pixKey`.”
- “Transformar função em pura e mover para `/services`.”
- “Fixture pequena com 3 linhas cobrindo erro de parse.”

## 🧷 Convenções

- Mensagens de commit com **racional curto** (WHAT/WHY).
- Ao mudar contratos, atualizar tipos **antes** do código.
- Evitar snapshots frágeis; priorizar asserts explícitos.
