# 训练

训练方向关注模型能力从哪里来：架构、数据、算力、优化、post-training、推理时计算。

## 技术地图

| 模块 | 要解决的问题 | 代表工作 |
|---|---|---|
| Scaling | 参数、token、算力如何配比 | [Scaling Laws](https://arxiv.org/abs/2001.08361), [Chinchilla](https://arxiv.org/abs/2203.15556) |
| 架构 | 更高吞吐、更长上下文、更低成本 | [Mamba](https://arxiv.org/abs/2312.00752), [DeepSeek-V3](https://arxiv.org/abs/2412.19437), [MiniMax-01](https://arxiv.org/abs/2501.08313) |
| MoE | 提高总容量，控制激活成本 | [Mixtral](https://arxiv.org/abs/2401.04088), [Qwen3](https://arxiv.org/abs/2505.09388), [Kimi K2](https://arxiv.org/abs/2507.20534) |
| Post-training | 把基座模型变成可用助手 | [InstructGPT](https://arxiv.org/abs/2203.02155), [DPO](https://arxiv.org/abs/2305.18290) |
| Reasoning RL | 用 RL 和 verifier 强化推理 | [DeepSeek-R1](https://arxiv.org/abs/2501.12948), [MiniMax-M1](https://arxiv.org/abs/2506.13585) |
| 多模态 | 文本、图像、音频、视频统一建模 | [Gemma 3](https://arxiv.org/abs/2503.19786), [Qwen3-Omni](https://arxiv.org/abs/2509.17765), [Gemini 3.5](https://deepmind.google/blog/gemini-3-5-frontier-intelligence-with-action/) |

## 必读报告

| 类型 | 资料 |
|---|---|
| 开源训练全流程 | [OLMo](https://arxiv.org/abs/2402.00838), [OLMo 2](https://arxiv.org/abs/2501.00656), [Olmo 3](https://arxiv.org/abs/2512.13961) |
| MoE 与高效训练 | [DeepSeek-V3](https://arxiv.org/abs/2412.19437), [Qwen3](https://arxiv.org/abs/2505.09388), [Kimi K2](https://arxiv.org/abs/2507.20534), [GLM-4.5](https://arxiv.org/abs/2508.06471) |
| 推理模型 | [DeepSeek-R1](https://arxiv.org/abs/2501.12948), [Magistral](https://arxiv.org/abs/2506.10910), [MiniMax-M1](https://arxiv.org/abs/2506.13585) |
| 最新核查 | [DeepSeek-V4](https://arxiv.org/html/2606.19348v1), [Qwen3.6](https://github.com/QwenLM/Qwen3.6), [GLM-5.2](https://z.ai/blog/glm-5.2), [Nemotron 3 Ultra](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3-Ultra-Technical-Report.pdf) |

## 岗位技能

| 岗位 | 需要证明的能力 | 可做项目 |
|---|---|---|
| Pretraining engineer | 分布式训练、数据管线、loss 曲线分析 | 复现 100M 到 1B 小模型训练，并记录 scaling ablation |
| Post-training engineer | SFT、DPO、GRPO/PPO、reward model | 用开源数学/代码数据做一个 tiny reasoning model |
| Model researcher | 架构和训练 recipe 判断 | 对比 dense、MoE、SSM/hybrid attention 的吞吐和质量 |
| Alignment engineer | 偏好数据、拒答、风险评测 | 构建 preference dataset，跑 DPO 与 safety eval |

## 该方向的判断标准

- 只看 benchmark 不够，要看训练数据、token 数、激活参数、上下文长度和推理成本。
- 只复现 LoRA 微调不够，要理解 SFT 到 RL 的数据闭环。
- 最新报告里最值得追的是：MoE 路由、长上下文注意力、Muon 类优化器、test-time compute、合成数据。

