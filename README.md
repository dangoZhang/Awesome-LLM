# Awesome-LLM

> A compact, technical-report-first 2026 refresh of the original Awesome-LLM.

This fork keeps the historical backbone, removes much of the early ChatGPT-era
sprawl, and adds the recent model reports that actually changed how people build,
serve, evaluate, and use LLMs.

Last refreshed and latestness-checked: 2026-06-28.

Long-form technical map: [LLM Wiki](https://dangozhang.github.io/Awesome-LLM/).

## Table of Contents

- [LLM Wiki](#llm-wiki)
- [Curation Rules](#curation-rules)
- [Recent Surveys and Maps](#recent-surveys-and-maps)
- [Frontier Model Reports and Cards](#frontier-model-reports-and-cards)
- [Open and Open-Weight Model Reports](#open-and-open-weight-model-reports)
- [Reasoning and Post-Training](#reasoning-and-post-training)
- [Agents and Coding](#agents-and-coding)
- [Multimodal and Omni Models](#multimodal-and-omni-models)
- [Data](#data)
- [RAG and Knowledge Systems](#rag-and-knowledge-systems)
- [Evaluation](#evaluation)
- [Training, Inference, and Systems](#training-inference-and-systems)
- [Application Frameworks](#application-frameworks)
- [Courses and Books](#courses-and-books)
- [Subfield Lists](#subfield-lists)
- [Latestness Audit](#latestness-audit)
- [Refresh Notes](#refresh-notes)

## LLM Wiki

The README stays as the compact index. The longer five-track wiki now lives in
this repository under [`docs/`](docs/) and is published through GitHub Pages:

- [LLM Wiki site](https://dangozhang.github.io/Awesome-LLM/)
- [Five-year milestone map](docs/milestones.md)
- [Training](docs/training/index.md), [Data](docs/data/index.md), [Evaluation](docs/evaluation/index.md), [Infra](docs/infra/index.md), [Agent](docs/agents/index.md)
- [Technical report source index](docs/sources.md)

## Curation Rules

- Prefer technical reports, model cards, system cards, and official release notes.
- Keep surveys only when they organize an active research direction.
- Keep systems lists as support, not as the main map of the field.
- Keep older papers only when they remain a live baseline.
- Prefer resources that expose model design, data, post-training, evaluation, or deployment details.

## Recent Surveys and Maps

| Scope | Resource | Use |
|---|---|---|
| Broad taxonomy | [LLMOrbit: A Circular Taxonomy of Large Language Models](https://arxiv.org/abs/2601.14053) | 2026 map of model families, reasoning, agents, multimodality, data, efficiency, and safety. |
| Open ecosystem | [The ATOM Report](https://arxiv.org/abs/2604.07190) | Measures roughly 1.5K open language models and current open-model adoption. |
| Historical LLM survey | [A Survey of Large Language Models](https://arxiv.org/abs/2303.18223) | Still useful for pretraining, scaling, alignment, and usage basics. |
| Reasoning | [From System 1 to System 2](https://arxiv.org/abs/2502.17419) | Survey of deliberate reasoning and test-time compute. |
| Agents | [Agentic Large Language Models](https://arxiv.org/abs/2503.23037) | Organizes reasoning, acting, and interacting agents. |
| Agentic reasoning | [Agentic Reasoning for Large Language Models](https://arxiv.org/abs/2601.12538) | Links reasoning, tools, planning, and action. |
| RAG | [RAG Survey](https://arxiv.org/abs/2312.10997) | Baseline taxonomy for naive, advanced, and modular RAG. |
| Agentic RAG | [Agentic RAG Survey](https://arxiv.org/abs/2501.09136) | Current taxonomy for autonomous, graph, and multi-agent RAG. |
| Systems only | [LLMSys-PaperList](https://github.com/AmberLJC/LLMSys-PaperList) | Good systems reference; not a substitute for model technical reports. |

## Frontier Model Reports and Cards

Closed frontier labs often publish model cards or system cards instead of full
technical reports. Those still matter because they reveal capabilities, risk
evaluations, tool-use behavior, and release decisions.

| Lab | Resource | Why it matters |
|---|---|---|
| OpenAI | [GPT-4 Technical Report](https://arxiv.org/abs/2303.08774) | Historical frontier-model baseline. |
| OpenAI | [GPT-4.5 System Card](https://openai.com/index/gpt-4-5-system-card/) | Scaling-era system card with capability and safety evaluation details. |
| OpenAI | [o3 and o4-mini System Card](https://openai.com/index/o3-o4-mini-system-card/) | Reasoning, vision, tool-use, and preparedness evaluations. |
| OpenAI | [GPT-5 System Card](https://cdn.openai.com/gpt-5-system-card.pdf) | Baseline GPT-5 generation described through main/thinking model families. |
| OpenAI | [GPT-5.4 release](https://openai.com/index/introducing-gpt-5-4/) | GPT-5 series benchmark and capability disclosure for coding, tools, long context, and research tasks. |
| OpenAI | [GPT-5.5 System Card](https://openai.com/index/gpt-5-5-system-card/) | Later GPT-5 series model for complex tool-using work. |
| OpenAI | [GPT-5.6 Preview System Card](https://deploymentsafety.openai.com/gpt-5-6-preview) | Latest checked OpenAI preview family: Sol, Terra, and Luna. |
| OpenAI | [Previewing GPT-5.6 Sol](https://openai.com/index/previewing-gpt-5-6-sol/) | Latest OpenAI capability preview for coding, science, and cybersecurity. |
| Anthropic | [Claude Opus 4 and Sonnet 4 System Card](https://www.anthropic.com/claude-4-system-card) | Hybrid reasoning models with coding, computer-use, tool-use, and safety evaluation detail. |
| Anthropic | [Claude Sonnet 4.5 System Card](https://www.anthropic.com/claude-sonnet-4-5-system-card) | Major coding/agentic system-card reference. |
| Anthropic | [Claude Fable 5 and Mythos 5](https://www.anthropic.com/news/claude-fable-5-mythos-5) | Latest checked Anthropic frontier release. |
| Anthropic | [Claude Fable 5 and Mythos 5 System Card](https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf) | Safety and capability report for the June 2026 Fable/Mythos release. |
| Anthropic | [Claude system cards index](https://www.anthropic.com/system-cards) | Best entry point for newer Claude 4.x/5.x system cards. |
| Google DeepMind | [Gemini 2.5 report](https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf) | Reasoning and multimodal model report for Gemini 2.x. |
| Google DeepMind | [Gemini 3 Pro Model Card](https://deepmind.google/models/model-cards/gemini-3-pro/) | Official model-card entry for Gemini 3 family. |
| Google DeepMind | [Gemini 3.1 Pro Model Card](https://deepmind.google/models/model-cards/gemini-3-1-pro/) | Multimodal reasoning, long-context, and agentic-task disclosure. |
| Google DeepMind | [Gemini 3.1 Pro evaluation methodology](https://deepmind.google/models/evals-methodology/gemini-3-1-pro) | Evaluation details separated from the model card. |
| Google DeepMind | [Gemini 3.5](https://deepmind.google/blog/gemini-3-5-frontier-intelligence-with-action/) | Latest checked Gemini family launch, starting with 3.5 Flash. |
| Google DeepMind | [Gemini 3.5 Flash](https://deepmind.google/models/gemini/flash/) | Agentic, coding, and long-horizon Flash model. |
| xAI | [Grok 4 Model Card](https://data.x.ai/2025-08-20-grok-4-model-card.pdf) | Reasoning and tool-use model card. |
| xAI | [Grok 4 Fast Model Card](https://data.x.ai/2025-09-19-grok-4-fast-model-card.pdf) | Cost-efficient reasoning model card. |
| xAI | [Grok Code Fast 1 Model Card](https://data.x.ai/2025-08-26-grok-code-fast-1-model-card.pdf) | Coding-agent model card. |
| xAI | [Grok 4.1 Model Card](https://data.x.ai/2025-11-17-grok-4-1-model-card.pdf) | Earlier Grok 4.x behavior and safety update. |
| xAI | [Grok 4.3](https://docs.x.ai/developers/models/grok-4.3) | Latest checked xAI flagship API model; 1M context and configurable reasoning. |
| xAI | [Grok Build 0.1](https://docs.x.ai/overview) | Current xAI coding-agent model listed in official docs. |

## Open and Open-Weight Model Reports

| Lab | Report or model card | What to inspect |
|---|---|---|
| DeepSeek | [DeepSeek-V3 Technical Report](https://arxiv.org/abs/2412.19437) | MLA, DeepSeekMoE, auxiliary-loss-free load balancing, multi-token prediction. |
| DeepSeek | [DeepSeek-R1](https://arxiv.org/abs/2501.12948) | Public reference for RL-driven reasoning models. |
| DeepSeek | [DeepSeek-V4 Preview](https://arxiv.org/html/2606.19348v1) | Million-token context, hybrid attention, MoE scaling, Muon optimizer. |
| DeepSeek | [DeepSeek-V4 official release note](https://api-docs.deepseek.com/news/news260424) | Confirms V4 Preview availability and open-source release. |
| Qwen | [Qwen3 Technical Report](https://arxiv.org/abs/2505.09388) | Dense and MoE family, thinking/non-thinking modes, multilingual coverage. |
| Qwen | [Qwen3-Next](https://qwen.ai/blog?from=research.latest-advancements-list&id=4074cca80393150c248e508aa62983f9cb7d27cd) | Hybrid attention and efficiency-oriented Qwen line. |
| Qwen | [Qwen3-Coder-Next Technical Report](https://arxiv.org/abs/2603.00729) | Small-active-parameter coding-agent model trained with executable environments. |
| Qwen | [Qwen3-Max](https://qwen.ai/blog?id=qwen3-max) | 1T+ parameter proprietary Qwen release note. |
| Qwen | [Qwen3.5 and Qwen3.6](https://github.com/QwenLM/Qwen3.6) | Latest checked Qwen open-weight family, with April 2026 Qwen3.6 releases. |
| Moonshot AI | [Kimi K2](https://arxiv.org/abs/2507.20534) | 1T MoE, MuonClip, agentic data synthesis, joint RL. |
| Moonshot AI | [Kimi K2.5](https://arxiv.org/abs/2602.02276) | Multimodal agentic model and Agent Swarm. |
| Moonshot AI | [Kimi K2.6](https://www.moonshot.ai/) | Latest checked Kimi release; official page lists K2.6 as the current multimodal agentic model. |
| Z.ai | [GLM-4.5](https://arxiv.org/abs/2508.06471) | ARC model: agentic, reasoning, coding; 355B total / 32B active MoE. |
| Z.ai | [GLM-5](https://arxiv.org/html/2602.15763v1) | Long-horizon agentic engineering and sparse attention. |
| Z.ai | [GLM-5.1](https://z.ai/blog/glm-5.1) | Long-horizon agentic engineering update. |
| Z.ai | [GLM-5.2](https://z.ai/blog/glm-5.2) | Latest checked GLM release for long-horizon coding and agentic tasks. |
| Meta | [Llama 3 Herd](https://arxiv.org/abs/2407.21783) | Dense 405B open-weight baseline with tool use, coding, and multilinguality. |
| Meta | [Llama 4 release](https://ai.meta.com/blog/llama-4-multimodal-intelligence/) | Official release for open-weight multimodal MoE Scout/Maverick; no full official paper at release. |
| Google | [Gemma 3 Technical Report](https://arxiv.org/abs/2503.19786) | Lightweight open-weight multimodal and long-context models. |
| Google | [Gemma 4 model card](https://ai.google.dev/gemma/docs/core/model_card_4) | Latest checked Gemma family model card. |
| Google | [Gemma 4 12B](https://deepmind.google/blog/introducing-gemma-4-12b-a-unified-encoder-free-multimodal-model/) | Unified encoder-free multimodal open model. |
| Google | [DiffusionGemma](https://deepmind.google/blog/diffusiongemma-4x-faster-text-generation/) | Diffusion-style text generation model built on Gemma 4 research. |
| Ai2 | [OLMo 2](https://arxiv.org/abs/2501.00656) | Fully open model flow, data, code, logs, and checkpoints. |
| Ai2 | [Olmo 3](https://arxiv.org/abs/2512.13961) | Fully open reasoning, function calling, coding, and long-context model flow. |
| Ai2 | [Olmo Hybrid](https://allenai.org/blog/olmohybrid) | Latest checked Ai2 release after Olmo 3, comparing hybrid models against transformer baselines. |
| MiniMax | [MiniMax-01](https://arxiv.org/abs/2501.08313) | Lightning attention, MoE, million-token context. |
| MiniMax | [MiniMax-M1](https://arxiv.org/abs/2506.13585) | Open-weight hybrid-attention reasoning and efficient test-time compute. |
| MiniMax | [MiniMax-M2 Series](https://arxiv.org/html/2605.26494v1) | Agentic coding/cowork model family with 229.9B total / 9.8B active parameters. |
| MiniMax | [MiniMax-M2.5](https://www.minimax.io/news/minimax-m25) | Latest checked MiniMax productivity/coding update. |
| Mistral AI | [Mistral Large 2](https://mistral.ai/news/mistral-large-2407/) | Multilingual, code, and tool-use release baseline. |
| Mistral AI | [Mistral Small 3.1](https://mistral.ai/news/mistral-small-3-1/) | Earlier efficient open model with vision and 128K context. |
| Mistral AI | [Magistral](https://arxiv.org/abs/2506.10910) | Mistral's reasoning model and RL pipeline. |
| Mistral AI | [Ministral 3](https://arxiv.org/abs/2601.08584) | Dense small models and cascade distillation. |
| Mistral AI | [Mistral 3](https://mistral.ai/news/mistral-3/) | Apache-2.0 dense small models plus Large 3 MoE. |
| Mistral AI | [Mistral Small 4](https://mistral.ai/news/mistral-small-4/) | 119B/6.5B-active hybrid model for chat, coding, agents, and reasoning. |
| Mistral AI | [Mistral Medium 3.5](https://docs.mistral.ai/models/model-cards/mistral-medium-3-5-26-04) | Latest checked open-weight Mistral flagship; dense 128B, 256K context. |
| NVIDIA | [Nemotron-4 340B](https://arxiv.org/abs/2406.11704) | Synthetic data and reward-model release. |
| NVIDIA | [Llama-Nemotron](https://arxiv.org/abs/2505.00949) | Efficient reasoning models derived from Llama. |
| NVIDIA | [Nemotron 3](https://arxiv.org/abs/2512.20856) | Hybrid Mamba-Transformer MoE, 1M context, multi-environment RL. |
| NVIDIA | [Nemotron 3 Super](https://arxiv.org/abs/2604.12374) | NVFP4, LatentMoE, MTP, throughput-oriented model design. |
| NVIDIA | [Nemotron 3 Ultra](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3-Ultra-Technical-Report.pdf) | Latest checked Nemotron report: 550B total / 55B active hybrid MoE. |
| Cohere | [Aya Expanse](https://arxiv.org/abs/2412.04261) | Multilingual open-weight model report. |
| Cohere | [Command A](https://arxiv.org/abs/2504.00698) | Enterprise RAG, tool use, multilinguality, and efficiency. |
| Cohere | [Command A+](https://docs.cohere.com/docs/command-a-plus) | Open MoE enterprise model with vision and agentic tasks. |
| ByteDance Seed | [Seed1.5-Thinking](https://arxiv.org/abs/2504.13914) | Thinking-before-answering reasoning model. |
| ByteDance Seed | [Seed1.5-VL](https://arxiv.org/abs/2505.07062) | MoE VLM for multimodal reasoning and GUI/gameplay agents. |
| ByteDance Seed | [Seed1.6](https://seed.bytedance.com/en/seed1_6) | Latest checked general-purpose Seed model family. |
| ByteDance Seed | [Seed2.0 Model Card](https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf) | Newer ByteDance frontier model card focused on real-world reasoning. |
| Tencent | [Hunyuan-A13B](https://github.com/Tencent-Hunyuan/Hunyuan-A13B) | Fine-grained MoE, efficient active-parameter design, reasoning modes. |

## Reasoning and Post-Training

- [DeepSeek-R1](https://arxiv.org/abs/2501.12948) - key public reference for RL-driven reasoning.
- [open-r1](https://github.com/huggingface/open-r1) - open reproduction effort for R1-style pipelines.
- [TinyZero](https://github.com/Jiayi-Pan/TinyZero) - minimal R1-Zero-style reproduction.
- [DeepSeekMath / GRPO](https://arxiv.org/abs/2402.03300) - group relative policy optimization.
- [DPO](https://arxiv.org/abs/2305.18290) - simple preference optimization baseline.
- [MiniMax-M1](https://arxiv.org/abs/2506.13585) - long-context reasoning and efficient test-time compute.
- [Magistral](https://arxiv.org/abs/2506.10910) - reasoning model trained with Mistral's RL pipeline.
- [veRL](https://github.com/volcengine/verl) - flexible RL framework for LLMs.
- [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) - RLHF, DPO, PPO, and reinforcement fine-tuning.
- [ROLL](https://github.com/alibaba/ROLL) - reinforcement learning library for LLMs.
- [TRL](https://huggingface.co/docs/trl/en/index) - Hugging Face post-training library.
- [LLM-RL-Visualized](https://github.com/changyeyu/LLM-RL-Visualized) - visual map for LLM/RL algorithms.

## Agents and Coding

### Reports and Benchmarks

- [Qwen3-Coder-Next](https://arxiv.org/abs/2603.00729) - open-weight coding-agent model.
- [Kimi K2](https://arxiv.org/abs/2507.20534) - open MoE with strong agentic and coding results.
- [Kimi K2.6](https://www.moonshot.ai/) - latest checked Kimi multimodal agentic release.
- [GLM-4.5](https://arxiv.org/abs/2508.06471) - ARC model for agentic, reasoning, and coding tasks.
- [GLM-5.2](https://z.ai/blog/glm-5.2) - latest checked GLM long-horizon coding/agent release.
- [Mistral Medium 3.5](https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5/) - open-weight dense 128B model powering Vibe remote agents.
- [Grok 4.3](https://docs.x.ai/developers/models/grok-4.3) - xAI flagship for agentic tool calling and instruction following.
- [Grok Build 0.1](https://docs.x.ai/overview) - xAI coding-agent model.
- [Grok Code Fast 1 Model Card](https://data.x.ai/2025-08-26-grok-code-fast-1-model-card.pdf) - coding-agent-specific model card.
- [SWE-bench](https://arxiv.org/abs/2310.06770) - real GitHub issue resolution benchmark.
- [SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/) - human-validated SWE-bench subset.
- [SWE-agent](https://arxiv.org/abs/2405.15793) - agent-computer interface for software engineering.
- [Agentless](https://arxiv.org/abs/2407.01489) - simple SWE-bench repair pipeline.
- [OpenHands](https://arxiv.org/abs/2407.16741) - open platform for software development agents.
- [Aider Polyglot Benchmark](https://aider.chat/docs/leaderboards/) - practical code editing benchmark.
- [Berkeley Function Calling Leaderboard](https://gorilla.cs.berkeley.edu/leaderboard.html) - function and tool-calling benchmark.
- [tau-bench](https://arxiv.org/abs/2406.12045) - tool-agent-user interaction benchmark.

### Tools

- [OpenHands](https://github.com/All-Hands-AI/OpenHands)
- [SWE-agent](https://github.com/swe-agent/swe-agent)
- [aider](https://github.com/Aider-AI/aider)
- [LangGraph](https://github.com/langchain-ai/langgraph)
- [AutoGen](https://github.com/microsoft/autogen)
- [CrewAI](https://github.com/crewAIInc/crewAI)
- [CAMEL](https://github.com/camel-ai/camel)

## Multimodal and Omni Models

- [Gemini 2.5 report](https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf)
- [Gemini 3 Pro Model Card](https://deepmind.google/models/model-cards/gemini-3-pro/)
- [Gemini 3.5 Flash](https://deepmind.google/models/gemini/flash/)
- [Gemini 3.5 Live Translate](https://deepmind.google/models/model-cards/gemini-3-5-audio/)
- [Gemini Omni](https://deepmind.google/blog/introducing-gemini-omni/)
- [Qwen3-VL](https://arxiv.org/abs/2511.21631)
- [Qwen3-Omni](https://arxiv.org/abs/2509.17765)
- [Qwen3.5-Omni](https://arxiv.org/abs/2604.15804)
- [Kimi K2.5](https://arxiv.org/abs/2602.02276)
- [Seed1.5-VL](https://arxiv.org/abs/2505.07062)
- [Llama 4 release](https://ai.meta.com/blog/llama-4-multimodal-intelligence/)
- [Gemma 3](https://arxiv.org/abs/2503.19786)
- [Gemma 4](https://ai.google.dev/gemma/docs/core/model_card_4)
- [Mistral Small 3.1](https://mistral.ai/news/mistral-small-3-1/)
- [Mistral Small 4](https://docs.mistral.ai/models/model-cards/mistral-small-4-0-26-03)

## Data

- [FineWeb](https://arxiv.org/abs/2406.17557) - web data filtering and ablations.
- [FineWeb-Edu](https://huggingface.co/datasets/HuggingFaceFW/fineweb-edu) - education-filtered corpus.
- [DataComp-LM](https://github.com/mlfoundations/dclm) - controlled data curation experiments.
- [Dolma](https://arxiv.org/abs/2402.00159) - open corpus and toolkit used for OLMo.
- [RedPajama-Data-V2](https://huggingface.co/datasets/togethercomputer/RedPajama-Data-V2) - large Common Crawl corpus with quality signals.
- [Datatrove](https://github.com/huggingface/datatrove) - scalable data processing.
- [IBM data-prep-kit](https://github.com/IBM/data-prep-kit) - unstructured-data processing toolkit.
- [Dingo](https://github.com/DataEval/dingo) - data quality evaluation.

## RAG and Knowledge Systems

- [Original RAG paper](https://arxiv.org/abs/2005.11401)
- [RAG survey](https://arxiv.org/abs/2312.10997)
- [Modular RAG](https://arxiv.org/abs/2407.21059)
- [Agentic RAG survey](https://arxiv.org/abs/2501.09136)
- [Reasoning Agentic RAG survey](https://arxiv.org/abs/2506.10408)
- [Awesome-GraphRAG](https://github.com/DEEP-PolyU/Awesome-GraphRAG)
- [Ragas](https://github.com/explodinggradients/ragas)
- [LlamaIndex](https://github.com/run-llama/llama_index)
- [Haystack](https://github.com/deepset-ai/haystack)

## Evaluation

### Leaderboards and Benchmarks

- [LMArena](https://lmarena.ai/)
- [LiveBench](https://livebench.ai/)
- [Humanity's Last Exam](https://arxiv.org/abs/2501.14249)
- [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)
- [OpenCompass](https://rank.opencompass.org.cn/)
- [HELM](https://github.com/stanford-crfm/helm)
- [SWE-bench](https://www.swebench.com/)
- [BFCL](https://gorilla.cs.berkeley.edu/leaderboard.html)
- [tau-bench](https://github.com/sierra-research/tau2-bench)

### Evaluation Tooling

- [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness)
- [lighteval](https://github.com/huggingface/lighteval)
- [simple-evals](https://github.com/openai/simple-evals)
- [OpenCompass](https://github.com/open-compass/opencompass)
- [promptfoo](https://github.com/promptfoo/promptfoo)
- [Ragas](https://github.com/explodinggradients/ragas)
- [DeepEval](https://github.com/confident-ai/deepeval)
- [Opik](https://github.com/comet-ml/opik)
- [Arize Phoenix](https://github.com/Arize-ai/phoenix)

## Training, Inference, and Systems

Use [LLMSys-PaperList](https://github.com/AmberLJC/LLMSys-PaperList) for a
deeper systems-only reading path. The shortlist below favors tools that connect
directly to current model training and serving practice.

### Training

- [Megatron-LM](https://github.com/NVIDIA/Megatron-LM)
- [DeepSpeed](https://github.com/microsoft/DeepSpeed)
- [torchtitan](https://github.com/pytorch/torchtitan)
- [nanotron](https://github.com/huggingface/nanotron)
- [LitGPT](https://github.com/Lightning-AI/litgpt)
- [Meta Lingua](https://github.com/facebookresearch/lingua)
- [torchtune](https://github.com/pytorch/torchtune)
- [NeMo](https://github.com/NVIDIA/NeMo)
- [Axolotl](https://github.com/axolotl-ai-cloud/axolotl)
- [Unsloth](https://github.com/unslothai/unsloth)
- [Transformer Engine](https://github.com/NVIDIA/TransformerEngine)

### Inference and Serving

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM)
- [Text Generation Inference](https://github.com/huggingface/text-generation-inference)
- [llama.cpp](https://github.com/ggerganov/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LMDeploy](https://github.com/InternLM/lmdeploy)
- [FlashInfer](https://github.com/flashinfer-ai/flashinfer)
- [MInference](https://github.com/microsoft/MInference)
- [llm-d](https://github.com/llm-d/llm-d)
- [SkyPilot](https://github.com/skypilot-org/skypilot)

## Application Frameworks

- [DSPy](https://github.com/stanfordnlp/dspy)
- [LangChain](https://github.com/langchain-ai/langchain)
- [LangGraph](https://github.com/langchain-ai/langgraph)
- [LlamaIndex](https://github.com/run-llama/llama_index)
- [Dify](https://github.com/langgenius/dify)
- [Flowise](https://github.com/FlowiseAI/Flowise)
- [Langfuse](https://github.com/langfuse/langfuse)
- [MLflow](https://mlflow.org/)
- [TensorZero](https://github.com/tensorzero/tensorzero)
- [Guardrails](https://github.com/guardrails-ai/guardrails)
- [Outlines](https://github.com/dottxt-ai/outlines)
- [Guidance](https://github.com/guidance-ai/guidance)

## Courses and Books

- [Andrej Karpathy YouTube](https://www.youtube.com/@AndrejKarpathy)
- [Stanford CS324](https://stanford-cs324.github.io/winter2022/)
- [Stanford CS25](https://web.stanford.edu/class/cs25/)
- [UW CS 886](https://cs.uwaterloo.ca/~wenhuche/teaching/cs886/)
- [Hugging Face LLM Course](https://huggingface.co/learn/llm-course/chapter1/1)
- [mlabonne/llm-course](https://github.com/mlabonne/llm-course)
- [Build a Large Language Model From Scratch](https://www.manning.com/books/build-a-large-language-model-from-scratch)
- [Hands-On Large Language Models](https://www.llm-book.com/)
- [LLM-RL-Visualized](https://github.com/changyeyu/LLM-RL-Visualized)

## Subfield Lists

- [Awesome-LLM-hallucination](https://github.com/LuckyyySTA/Awesome-LLM-hallucination)
- [Awesome LLM Security](https://github.com/corca-ai/awesome-llm-security)
- [Awesome-Code-LLM](https://github.com/huybery/Awesome-Code-LLM)
- [Awesome-LLM-Compression](https://github.com/HuangOwen/Awesome-LLM-Compression)
- [Awesome-LLM-Systems](https://github.com/AmberLJC/LLMSys-PaperList)
- [Awesome-LLM-Inference](https://github.com/DefTruth/Awesome-LLM-Inference)
- [Awesome-Chinese-LLM](https://github.com/HqWu-HITCS/Awesome-Chinese-LLM)
- [Awesome-Align-LLM-Human](https://github.com/GaryYufei/AlignLLMHumanSurvey)
- [Awesome-GraphRAG](https://github.com/DEEP-PolyU/Awesome-GraphRAG)
- [LLMDataHub](https://github.com/Zjh-819/LLMDataHub)

## Latestness Audit

Checked again on 2026-06-28. Newer official work was found and added for
OpenAI, Anthropic, Google DeepMind/Gemma, xAI, Qwen, Moonshot AI, Z.ai,
Mistral, NVIDIA, MiniMax, and ByteDance Seed.

No newer official model report or model card was found during this pass beyond:

- DeepSeek: `DeepSeek-V4 Preview`
- Meta Llama: `Llama 4`
- Ai2 Olmo: `Olmo Hybrid` / `Olmo 3`
- Cohere: `Command A+`
- Tencent Hunyuan: `Hunyuan-A13B`

## Refresh Notes

See [REFRESH_2026.md](REFRESH_2026.md) for removal and addition rationale.

## Contributing

This fork is intentionally opinionated. Add a resource only if it is
foundational, current, maintained, or uniquely useful for understanding how
modern LLMs are built and evaluated.
