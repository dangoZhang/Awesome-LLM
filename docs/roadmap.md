# LLM 找工地图

这页按岗位组织，不按论文顺序组织。目标是把学习路径转成可展示的项目。

## 六类岗位

| 岗位 | 核心能力 | 推荐项目 |
|---|---|---|
| Pretraining engineer | 分布式训练、数据 mix、loss 诊断 | 训练 100M 到 1B 小模型，报告吞吐、loss、数据 ablation |
| Post-training engineer | SFT、DPO、RL、reward model、reasoning | 用数学/代码数据做 SFT+DPO/GRPO，对比 pass rate |
| Data engineer | 清洗、去重、过滤、污染检测、合成数据 | 做一个 FineWeb 子集管线，输出质量分布和污染报告 |
| Eval engineer | benchmark、golden set、回归测试、agent eval | 构建小型 LiveBench 风格动态评测 |
| Infra engineer | serving、KV cache、batching、量化、调度 | 用 vLLM/SGLang 做吞吐和延迟压测 |
| Agent engineer | 工具调用、状态管理、RAG、代码修改、验证 | 做一个能修 issue 并跑测试的 coding agent |

## 12 周路线

| 周期 | 主题 | 产出 |
|---|---|---|
| 1-2 | Transformer、tokenizer、训练循环 | 从零训练 tiny GPT，写训练日志 |
| 3-4 | 数据管线和评测 | 做数据过滤、去重、污染检测和小型 eval |
| 5-6 | SFT 与偏好优化 | 跑 SFT、DPO，比较 reward/eval 指标 |
| 7-8 | 推理系统 | 部署同一模型到 vLLM/SGLang/llama.cpp，做压测 |
| 9-10 | RAG 与工具调用 | 做可引用 RAG，加 tool calling 和 trace |
| 11-12 | Agent 项目 | 完成 coding agent 或 research agent，补回归测试 |

## 每个项目都要有的证据

- 代码仓库：可运行，README 写清环境和命令。
- 实验表：模型、数据、成本、指标、失败样例。
- Trace：训练日志、eval 日志、agent 轨迹。
- 对比：至少一个 baseline。
- 复盘：哪些改动有效，哪些无效。

## 面试题地图

| 方向 | 高频问题 |
|---|---|
| 训练 | 为什么 Chinchilla 改变 token/parameter 配比？MoE 为什么难 serve？DPO 和 PPO 区别是什么？ |
| 数据 | 如何做去重和污染检测？合成数据如何避免模式坍塌？数据 mix 怎么调？ |
| 评测 | Arena 有什么偏差？SWE-bench 为什么难？如何设计企业内部 eval？ |
| Infra | TTFT、TPOT、QPS 怎么优化？KV cache 为什么贵？prefill/decode 为什么要分离？ |
| Agent | 工具调用失败怎么处理？长任务状态怎么保存？coding agent 如何验证 patch？ |

## 项目选题

| 难度 | 题目 |
|---|---|
| 入门 | 用公开数据训练 tiny GPT，并做 loss 曲线报告 |
| 入门 | 用 Ragas 评估一个 RAG demo |
| 中级 | 用 DPO 优化一个数学推理小模型 |
| 中级 | 对 vLLM、SGLang、llama.cpp 做同模型压测 |
| 中级 | 做一个 BFCL 风格工具调用评测 |
| 进阶 | 复现 mini SWE-bench agent，支持定位、patch、测试 |
| 进阶 | 做数据污染检测工具，覆盖 n-gram 和 embedding 检索 |
| 进阶 | 做 agent trace viewer，支持失败归因和回归测试 |

## 资料顺序

1. [Hugging Face LLM Course](https://huggingface.co/learn/llm-course/chapter1/1)
2. [Build a Large Language Model From Scratch](https://www.manning.com/books/build-a-large-language-model-from-scratch)
3. [CS324](https://stanford-cs324.github.io/winter2022/)
4. [LLM-RL-Visualized](https://github.com/changyeyu/LLM-RL-Visualized)
5. [LLMSys-PaperList](https://github.com/AmberLJC/LLMSys-PaperList)

