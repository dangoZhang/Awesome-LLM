# Infra

Infra 覆盖训练系统、推理服务、内核、长上下文、部署和观测。

## 总图

| 层 | 关键问题 | 代表项目 |
|---|---|---|
| 训练框架 | 数据并行、张量并行、流水并行、MoE 并行 | [Megatron-LM](https://github.com/NVIDIA/Megatron-LM), [DeepSpeed](https://github.com/microsoft/DeepSpeed), [torchtitan](https://github.com/pytorch/torchtitan), [nanotron](https://github.com/huggingface/nanotron) |
| Fine-tuning | LoRA、QLoRA、DPO、RLHF、recipe 管理 | [Axolotl](https://github.com/axolotl-ai-cloud/axolotl), [Unsloth](https://github.com/unslothai/unsloth), [torchtune](https://github.com/pytorch/torchtune), [TRL](https://huggingface.co/docs/trl/en/index) |
| Serving | batch、KV cache、调度、吞吐和延迟 | [vLLM](https://github.com/vllm-project/vllm), [SGLang](https://github.com/sgl-project/sglang), [TGI](https://github.com/huggingface/text-generation-inference) |
| Kernel | attention、quant、prefill/decode、通信 | [FlashInfer](https://github.com/flashinfer-ai/flashinfer), [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM), [Transformer Engine](https://github.com/NVIDIA/TransformerEngine) |
| 本地推理 | 量化、端侧、CPU/GPU 混合 | [llama.cpp](https://github.com/ggerganov/llama.cpp), [Ollama](https://github.com/ollama/ollama), [LMDeploy](https://github.com/InternLM/lmdeploy) |
| 云原生 | 多租户、弹性调度、GPU 可用性 | [llm-d](https://github.com/llm-d/llm-d), [SkyPilot](https://github.com/skypilot-org/skypilot) |

## 系统论文入口

- [LLMSys-PaperList](https://github.com/AmberLJC/LLMSys-PaperList)：系统方向主参考。
- [vLLM](https://arxiv.org/abs/2309.06180)：PagedAttention 和高吞吐 serving。
- [SGLang](https://github.com/sgl-project/sglang)：结构化生成和 serving。
- [MInference](https://github.com/microsoft/MInference)：长上下文推理加速。

## 需要理解的概念

| 概念 | 为什么重要 |
|---|---|
| Prefill / decode | 决定长 prompt 和长生成的瓶颈 |
| KV cache | 决定上下文长度、显存和吞吐 |
| Continuous batching | 提升多请求吞吐 |
| Speculative decoding | 用小模型或 draft token 降低延迟 |
| Quantization | 降低显存和成本 |
| Expert parallelism | MoE 训练和 serving 的核心 |
| Disaggregated serving | prefill/decode 分离，提升集群利用率 |

## 岗位技能

| 方向 | 项目 |
|---|---|
| Serving engineer | 用 vLLM/SGLang 对比 QPS、TTFT、TPOT、显存 |
| Training infra | 跑一个小型分布式训练，记录吞吐和通信瓶颈 |
| Kernel engineer | 对比 FlashAttention、FlashInfer、普通 attention |
| Platform engineer | 用 Kubernetes 部署多模型服务，接入观测和限流 |

## 判断标准

- Infra 的指标必须同时看吞吐、延迟、成本、稳定性。
- 长上下文优化要分 prefill 和 decode。
- Agent serving 要支持工具调用、并发状态、重试、trace 和权限。

