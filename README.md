# Cursor Agents — ERP (v1.6)

Repositório público com agentes prontos para usar no **Cursor** durante o desenvolvimento do ERP (Next.js + TypeScript + Supabase), seguindo **DRY, KISS, YAGNI, Feature-based folders e Separation of Concerns**.

## 🎯 Objetivo

Padronizar a criação, revisão e testes de mudanças **em baby steps** (≤3 arquivos, ≤60 linhas), com explicações WHAT/WHY/HOW e testes mínimos por mudança.

## 📦 Estrutura (v2)

```
cursoragents/
├─ agents/
│  ├─ core-principles.json      # base comum (fonte da verdade)
│  ├─ templates/                # variações específicas (fontes)
│  │  ├─ backend.json
│  │  ├─ frontend.json
│  │  ├─ data.json
│  │  ├─ fullstack.json
│  │  └─ qa-tests.json
│  └─ build.js                  # gera backend-agent.json, etc (artefatos)
├─ docs/
│  └─ orchestration.md          # playbook de hand-offs entre agentes
├─ prompts/                     # boas práticas e metaprompts (opcional)
│  ├─ cursor-practices.md
│  ├─ system-prompt-patterns.md
│  └─ agent-usage-playbook.md
├─ .gitignore
├─ LICENSE
└─ README.md
```

> Obs.: `agents/*-agent.json` são **artefatos gerados** e estão no `.gitignore`.

## ☀️ Como usar no Cursor

1. **Cursor → Settings → Agents → New Agent**
2. Abra um arquivo gerado (ex.: `agents/backend-agent.json`) e **cole o conteúdo** em **Instructions**.
3. (Opcional) Permita executar no terminal:
   - `pnpm format`
   - `pnpm lint`
   - `pnpm test`
4. Salve. Repita para cada agente.

## 🔧 Como gerar e usar os agentes (v2 – builder)

Os arquivos finais para colar no Cursor são gerados a partir do **core** + **templates**.

- Gerar: `node agents/build.js`
- Os finais aparecem em `agents/*-agent.json` (e **não** são versionados).
- Cole no Cursor em **Settings → Agents → New Agent → Instructions**.

### Quando rodar o build?

Sempre que você alterar:

- `agents/core-principles.json` (regras comuns)
- Qualquer template em `agents/templates/*.json`

### Limpar e regenerar (opcional)

```bash
rm agents/*-agent.json 2>/dev/null || true
node agents/build.js
```

## 🔁 Fluxo recomendado

1. **Executor** (Backend/Frontend/Data/Fullstack) propõe um **baby step** com WHAT/WHY/HOW e diff pequeno.
2. **QA/Tests** roda format/lint/test, escreve/ajusta testes mínimos e dá o veredito.
3. Merge. Próximo baby step.

## ✅ Padrões (Core)

- Nunca duplicar lógica entre features (**DRY**).
- Resolver com a solução mais simples que funciona (**KISS**).
- Implementar só o necessário agora (**YAGNI**).
- **Pastas por feature**: `/src/<feature>/{components,services,hooks,db,types}`.
- **SoC**: UI exibe; services tratam; DB integra; integrações em `/src/integrations/<vendor>`.
- **Limites por step**: ≤3 arquivos e ≤60 linhas.

## 🧭 Roadmap (sugerido)

- **v1**: agentes e Core Principles (concluído neste repo).
- **v2**: orquestração e builder (este README + `agents/build.js` + `docs/orchestration.md`).
- **v3**: métricas leves (tempo de review, taxa de retrabalho, cobertura do diff).

## 📖 Glossário de Princípios

**DRY — Don’t Repeat Yourself**  
Evite duplicar lógica, estruturas e decisões. Centralize o que é reutilizável (ex.: util `validateCPF()` em `/src/shared/utils/`).

**KISS — Keep It Simple, Stupid**  
Prefira a solução mais simples que funciona. Sem over-engineering, sem camadas desnecessárias, sem padrões prematuros.

**YAGNI — You Aren’t Gonna Need It**  
Implemente apenas o que o caso de uso atual exige. Nada de features “para o futuro” sem demanda concreta.

**Feature-based folders**  
Organização por domínio: `/src/<feature>/{components,services,hooks,db,types}`. Nada de cross-feature.

**Separation of Concerns**  
UI exibe; services tratam regra; DB garante integridade; integrações ficam em `/src/integrations/<vendor>`. Testes cobrem cada camada.
