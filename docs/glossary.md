# 术语表

| 术语 | 简释 |
|---|---|
| Pretraining | 在大规模语料上训练基座模型。 |
| SFT | Supervised fine-tuning，用指令数据训练助手行为。 |
| RLHF | 用人类偏好训练 reward model，再用 RL 优化策略。 |
| DPO | 直接用偏好对优化模型，不显式训练 reward model。 |
| GRPO | Group relative policy optimization，DeepSeek 推理训练中常见。 |
| Test-time compute | 推理时投入更多计算，例如多步思考、搜索、验证。 |
| MoE | Mixture-of-Experts，每个 token 只激活部分专家。 |
| Active parameters | MoE 每个 token 实际使用的参数量。 |
| KV cache | Attention 中缓存 key/value，影响上下文长度和显存。 |
| Prefill | 处理输入 prompt 的阶段。 |
| Decode | 逐 token 生成阶段。 |
| TTFT | Time to first token，首 token 延迟。 |
| TPOT | Time per output token，生成阶段单 token 延迟。 |
| RAG | Retrieval-Augmented Generation，检索增强生成。 |
| GraphRAG | 用图结构组织检索和推理。 |
| Agentic RAG | 由 agent 自主规划检索、工具和验证。 |
| Tool calling | 模型输出结构化函数调用。 |
| MCP | Model Context Protocol，用于连接模型和外部工具/上下文。 |
| SWE-bench | 用真实 GitHub issue 测试 coding agent 的基准。 |
| BFCL | Berkeley Function Calling Leaderboard。 |
| Arena | 用户偏好投票式模型对战评测。 |
| Contamination | 评测题进入训练数据导致虚高。 |
| Golden set | 内部高质量、可回归的评测集。 |

