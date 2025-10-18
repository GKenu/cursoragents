# Cursor Agents — ERP (v1.6)

Repositório público com agentes prontos para usar no **Cursor** durante o desenvolvimento do ERP (Next.js + TypeScript + Supabase), seguindo **DRY, KISS, YAGNI, Feature-based folders e Separation of Concerns**.

## 🎯 Objetivo

Padronizar a criação, revisão e testes de mudanças **em baby steps** (≤3 arquivos, ≤60 linhas), com explicações WHAT/WHY/HOW e testes mínimos por mudança.

## 📂 Estrutura

cursoragents/
├─ agents/
│ ├─ core-principles.json
│ ├─ backend-engineer.json
│ ├─ frontend-engineer.json
│ ├─ data-engineer.json
│ ├─ fullstack-engineer.json
│ └─ qa-tests.json
├─ prompts/ # (opcional) práticas e metaprompts
├─ docs/ # (opcional) orquestração e métricas
├─ .gitignore
└─ LICENSE

## ⚙️ Como usar no Cursor

1. **Cursor → Settings → Agents → New Agent**
2. Cole o conteúdo do arquivo JSON correspondente em **Instructions**.
3. (Opcional) Configure permissões de terminal para executar:
   - `pnpm format`
   - `pnpm lint`
   - `pnpm test`
4. Salve. Repita para cada agente que desejar.

## 🔁 Fluxo recomendado

1. **Executor** (Backend/Frontend/Data/Fullstack) propõe um **baby step** com WHAT/WHY/HOW e diff pequeno.
2. **QA/Tests** roda format/lint/test, escreve/ajusta testes mínimos e dá o veredito.
3. Merge. Próximo baby step.

## ✅ Padrões (Core)

- Nunca duplicar lógica entre features (DRY).
- Resolver com a solução mais simples que funciona (KISS).
- Implementar só o necessário agora (YAGNI).
- **Pastas por feature**: `/src/<feature>/{components,services,hooks,db,types}`.
- **SoC**: UI exibe; services tratam; DB integra; integrações em `/src/integrations/<vendor>`.
- **Limites por passo**: ≤3 arquivos e ≤60 linhas.

## 🧪 Testes

- **Backend**: Vitest para services e rota mockada (supertest/Next utils).
- **Frontend**: React Testing Library (render + interação + validação).
- **Data**: fixtures determinísticas, asserts de shape e contagens.

## 🔒 Variáveis e segurança

- Centralize env em `src/config/env.ts` com zod (sem expor segredos no client).
- Integrações em `src/integrations/<vendor>` com clientes e mapeadores separados.

## 📜 Licença

Escolha **MIT** (open source permissiva) ou **BUSL-1.1** (se pretende módulos pagos).  
Adicione o arquivo `LICENSE` conforme a escolha.

## 🧭 Roadmap (sugerido)

- v1: agentes e Core Principles (este repo).
- v2: `docs/orchestration.md` com exemplos de prompts e fluxo de PRs.
- v3: métricas leves de qualidade (tempo de review, taxa de retrabalho).

---

**Dica:** mantenha os agentes estáveis em `main` e use `dev` para experimentar ajustes de prompt.
