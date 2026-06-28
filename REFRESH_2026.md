# 2026 Refresh Notes

This fork trims the original README and rebalances it toward work that still
helps readers act in 2026. A second latestness audit was run on 2026-06-28.

## Removal Rationale

- Compressed long pre-2024 checkpoint lists. Older Llama, OPT, BLOOM, T5,
  Baichuan, StableLM, and similar entries remain important historically, but
  they no longer need top-level space unless they are canonical baselines.
- Removed many one-off 2023 ChatGPT task-probing papers from the main README.
  The field now relies more on dynamic, contamination-aware, agent/tool, coding,
  and reproducible benchmark suites.
- Trimmed large product/tool directories. The README now favors maintained
  frameworks that are still central to production workflows.
- Collapsed old opinion links and prompt collections. They were useful during
  the ChatGPT launch wave but are less useful for current model-building and
  deployment decisions.
- Kept foundational papers when they explain current practice: Transformer,
  scaling laws, Chinchilla, RLHF, GPT-4, DPO, Mamba, and early RAG.
- Kept systems references as support. `AmberLJC/LLMSys-PaperList` is useful,
  but it covers systems only and does not replace current model reports.

## Addition Rationale

- Added 2025-2026 ecosystem surveys: LLMOrbit, ATOM Report, reasoning LLM
  surveys, agentic LLM surveys, and agentic RAG surveys.
- Rebuilt the README around technical reports, model cards, system cards, and
  official release notes from OpenAI, Anthropic, Google DeepMind, xAI,
  DeepSeek, Qwen, Moonshot AI, Z.ai, Meta, Google Gemma, Ai2, MiniMax, Mistral,
  NVIDIA, Cohere, ByteDance Seed, and Tencent Hunyuan.
- Added recent open/open-weight reports: DeepSeek-V3/R1/V4, Qwen3,
  Qwen3-Coder-Next, Qwen3-VL/Omni, Kimi K2/K2.5, GLM-4.5/5, Gemma 3,
  OLMo 2/3, MiniMax-01/M1, Mistral Small/Magistral/Ministral, Nemotron,
  Command A/A+, Seed1.5, and Hunyuan-A13B.
- Added newer items found in the second latestness audit: GPT-5.5/5.6,
  Claude Fable 5/Mythos 5, Gemini 3.5, Gemma 4, Grok 4.3/Grok Build,
  Qwen3.5/3.6, Kimi K2.6, GLM-5.1/5.2, Mistral Small 4/Medium 3.5,
  Nemotron 3 Ultra, MiniMax M2/M2.5, Seed1.6, and Seed2.0.
- Added proprietary model-card/system-card references for OpenAI GPT/o-series,
  Anthropic Claude 4.x, Google Gemini 2.5/3.x, and xAI Grok 4.x.
- Added modern reasoning and post-training resources: open-r1, TinyZero, GRPO,
  veRL, OpenRLHF, ROLL, TRL, and LLM-RL-Visualized.
- Added agent and coding-agent resources: SWE-agent, Agentless, OpenHands,
  Aider, SWE-bench Verified, BFCL, and tau-bench.
- Added data-curation resources: FineWeb, FineWeb-Edu, DataComp-LM, Dolma,
  RedPajama-V2, Datatrove, data-prep-kit, and Dingo.
- Added inference infrastructure that matters in current deployments: vLLM,
  SGLang, FlashInfer, TensorRT-LLM, TGI, LMDeploy, MInference, and llm-d.

## What Changed

- Rewrote `README.md` from a broad historical directory into a shorter,
  technical-report-first 2026 reading map.
- Split frontier closed-model disclosures from open/open-weight reports so the
  reader can distinguish technical reports from system/model cards.
- Added `LLMSys-PaperList` as a systems-only reference instead of using it as
  the main field map.
- Filled previously empty or stale subfield files:
  - `paper_list/RLHF.md`
  - `paper_list/moe.md`
  - `paper_list/code_pretraining.md`
  - `paper_list/Retrieval_Augmented_Generation.md`
  - `paper_list/evaluation.md`
- Preserved existing repository structure so upstream users can still navigate
  the familiar categories.

## Curation Rule Going Forward

Add a resource only if it is one of:

- historically foundational;
- a current technical report for a widely used model family;
- a maintained framework used in real workflows;
- a survey that organizes an active research area;
- an evaluation or data resource that improves reproducibility.
