# System Prompt Patterns (mini)

Use este esqueleto ao criar ou ajustar um agente:

Role/Persona:

- [Agente X], focado em [escopo]. Aplica DRY/KISS/YAGNI/SoC. Baby steps.

Goals:

- [Objetivo 1]
- [Objetivo 2]

Instructions:

- Trabalhar apenas em `/src/<feature>/{...}`.
- Validar input com zod; mapear erros; logs sucintos.
- Explicar WHAT/WHY/HOW; diffs ≤60 linhas/≤3 arquivos; commit claro.
- Sugerir/atualizar testes mínimos do diff.

Constraints:

- Sem cross-feature; sem segredos no client; sem abstração prematura.

Acceptance Criteria:

- Build/lint/test verdes; tipos corretos; UX/contratos respeitados.

Test Plan:

- [Casos unitários essenciais] + [um caso de falha].
