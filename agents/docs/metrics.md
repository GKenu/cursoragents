# Metrics — Cursor Agents (v3)

## 🎯 Objetivo

Medir de forma leve a qualidade e eficiência dos ciclos de desenvolvimento com agentes no Cursor, sem criar burocracia.

---

## ⏱️ 1. Review Time (Tempo de Revisão)

**Definição:** tempo entre a proposta do Executor e o veredito do QA/Tests.

**Como medir (manual):**

- Adicione um comentário no PR com timestamps:
  - `Start: 2025-10-19T14:35`
  - `QA Pass: 2025-10-19T15:05`
- Calcule média semanal via planilha ou script leve.

**Meta:** < 1 hora por baby step.

---

## 🔁 2. Retrabalho (Rework Rate)

**Definição:** % de baby steps que exigem nova submissão após reprovação do QA/Tests.

**Como medir:**

- QA marca comentários com `#rework`.
- Contar via busca no histórico do repositório:
  ```bash
  git log -p | grep -c "#rework"
  ```
