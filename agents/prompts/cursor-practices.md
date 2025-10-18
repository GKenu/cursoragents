# Cursor — Practical Guidelines

- Sempre explique **WHAT / WHY / HOW** antes do diff.
- Limites: ≤3 arquivos e ≤60 linhas por step.
- Commits pequenos com mensagem clara.
- Rodar scripts locais antes de pedir review: `pnpm format && pnpm lint && pnpm test`.
- Preferir funções puras; estados globais só quando inevitável.
- Tipos e validação com zod; err dos mapeados e amigáveis.
- Integrações em `/src/integrations/<vendor>` com clientes e mapeadores separados.
