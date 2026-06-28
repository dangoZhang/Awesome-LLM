# 五年时间线

这里保留能改变研究范式、产业系统或岗位技能要求的 milestone。

## 2021 到 2026

<div class="yearline">
  <div class="year">
    <strong>2021</strong>
    <div>Foundation model 概念成型；Codex 显示代码模型潜力；FLAN/T0 推动 instruction tuning；Switch/GLaM 推动 MoE。</div>
  </div>
  <div class="year">
    <strong>2022</strong>
    <div>InstructGPT/RLHF、CoT、Chinchilla、PaLM、BLOOM、HELM 成为训练、对齐、推理和评测基线。</div>
  </div>
  <div class="year">
    <strong>2023</strong>
    <div>GPT-4、LLaMA、DPO、Mistral、Mamba、SWE-bench 推动开源模型、偏好优化、架构和 coding agent。</div>
  </div>
  <div class="year">
    <strong>2024</strong>
    <div>Llama 3、Qwen2.5、DeepSeek-V3、OLMo、FineWeb、LiveBench、vLLM/SGLang 把开源模型、数据和推理系统推到主线。</div>
  </div>
  <div class="year">
    <strong>2025</strong>
    <div>DeepSeek-R1、Qwen3、Kimi K2、GLM-4.5、Gemini 2.5、Claude 4、GPT-5 系列让 reasoning、MoE、agentic coding 成为中心。</div>
  </div>
  <div class="year">
    <strong>2026</strong>
    <div>GPT-5.6、Claude Fable/Mythos 5、Gemini 3.5、DeepSeek-V4、Qwen3.6、GLM-5.2、Gemma 4、MiniMax-M2、Nemotron 3 Ultra 继续拉高 agent、长上下文、多模态和推理效率。</div>
  </div>
</div>

## 关键报告表

| 年份 | 关键词 | 代表工作 |
|---|---|---|
| 2021 | instruction tuning | [FLAN](https://openreview.net/forum?id=gEZrGCozdqR), [T0](https://arxiv.org/abs/2110.08207) |
| 2021 | MoE | [Switch Transformer](https://arxiv.org/abs/2101.03961), [GLaM](https://arxiv.org/abs/2112.06905) |
| 2022 | RLHF | [InstructGPT](https://arxiv.org/abs/2203.02155) |
| 2022 | scaling | [Chinchilla](https://arxiv.org/abs/2203.15556), [PaLM](https://arxiv.org/abs/2204.02311) |
| 2022 | reasoning | [Chain-of-Thought](https://arxiv.org/abs/2201.11903) |
| 2023 | frontier model | [GPT-4 Technical Report](https://arxiv.org/abs/2303.08774) |
| 2023 | open model | [LLaMA](https://arxiv.org/abs/2302.13971), [Llama 2](https://arxiv.org/abs/2307.09288) |
| 2023 | preference optimization | [DPO](https://arxiv.org/abs/2305.18290) |
| 2023 | architecture | [Mamba](https://arxiv.org/abs/2312.00752), [Mixtral](https://arxiv.org/abs/2401.04088) |
| 2024 | open science | [OLMo](https://arxiv.org/abs/2402.00838), [OLMo 2](https://arxiv.org/abs/2501.00656) |
| 2024 | data | [FineWeb](https://arxiv.org/abs/2406.17557), [DCLM](https://github.com/mlfoundations/dclm), [Dolma](https://arxiv.org/abs/2402.00159) |
| 2024 | evaluation | [LiveBench](https://arxiv.org/abs/2406.19314), [SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/) |
| 2024 | model report | [Llama 3 Herd](https://arxiv.org/abs/2407.21783), [Qwen2.5](https://arxiv.org/abs/2412.15115), [DeepSeek-V3](https://arxiv.org/abs/2412.19437) |
| 2025 | reasoning RL | [DeepSeek-R1](https://arxiv.org/abs/2501.12948), [MiniMax-M1](https://arxiv.org/abs/2506.13585) |
| 2025 | agentic model | [Kimi K2](https://arxiv.org/abs/2507.20534), [GLM-4.5](https://arxiv.org/abs/2508.06471) |
| 2025 | multimodal | [Gemma 3](https://arxiv.org/abs/2503.19786), [Seed1.5-VL](https://arxiv.org/abs/2505.07062) |
| 2026 | latest frontier | [GPT-5.6](https://deploymentsafety.openai.com/gpt-5-6-preview), [Claude Fable/Mythos 5](https://www.anthropic.com/news/claude-fable-5-mythos-5), [Gemini 3.5](https://deepmind.google/blog/gemini-3-5-frontier-intelligence-with-action/) |
| 2026 | latest open/open-weight | [DeepSeek-V4](https://arxiv.org/html/2606.19348v1), [Qwen3.6](https://github.com/QwenLM/Qwen3.6), [GLM-5.2](https://z.ai/blog/glm-5.2), [Gemma 4](https://ai.google.dev/gemma/docs/core/model_card_4) |

## 趋势判断

- 大模型主线从“更大参数”转向“数据质量、MoE、长上下文、post-training、test-time compute”。
- 评测主线从静态 NLP benchmark 转向动态榜单、真实任务、代码仓库、工具调用和 agent 交互。
- Infra 主线从单模型 serving 转向高吞吐、多租户、长上下文、KV cache、调度和低精度。
- Agent 主线从 prompt orchestration 转向可执行环境、状态管理、工具安全、代码修改和长任务。

