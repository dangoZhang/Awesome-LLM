# 数据

数据方向决定模型上限，也决定训练、post-training 和评测是否可信。

## 数据类型

| 类型 | 作用 | 代表资源 |
|---|---|---|
| 预训练数据 | 提供语言、知识、代码和多模态基础 | [FineWeb](https://arxiv.org/abs/2406.17557), [Dolma](https://arxiv.org/abs/2402.00159), [DCLM](https://github.com/mlfoundations/dclm) |
| 教育/高质量数据 | 提升知识密度和推理质量 | [FineWeb-Edu](https://huggingface.co/datasets/HuggingFaceFW/fineweb-edu), [Cosmopedia](https://huggingface.co/datasets/HuggingFaceTB/cosmopedia) |
| 代码数据 | 支撑补全、仓库理解和 agent coding | [The Stack v2](https://arxiv.org/abs/2402.19173), [Qwen2.5-Coder](https://arxiv.org/abs/2409.12186) |
| 偏好数据 | 支撑 reward model、DPO、RLHF | [InstructGPT](https://arxiv.org/abs/2203.02155), [DPO](https://arxiv.org/abs/2305.18290) |
| 合成数据 | 放大高质量训练信号 | [Phi-4](https://arxiv.org/abs/2412.08905), [Nemotron-4 340B](https://arxiv.org/abs/2406.11704) |
| Agent 数据 | 工具调用、执行轨迹、代码修改、网页任务 | [SWE-bench](https://arxiv.org/abs/2310.06770), [tau-bench](https://arxiv.org/abs/2406.12045), [Kimi K2](https://arxiv.org/abs/2507.20534) |

## 数据管线

1. 获取：Common Crawl、代码仓库、书籍、论文、网页、合成轨迹。
2. 清洗：语言识别、去重、PII 过滤、质量分类、毒性过滤。
3. 选择：按 domain、difficulty、freshness、token budget 分配。
4. 混合：预训练 mix、SFT mix、RL task mix、eval holdout。
5. 审计：污染检查、许可、隐私、重复率、训练数据泄漏。

## 必看工具

| 工具 | 用途 |
|---|---|
| [Datatrove](https://github.com/huggingface/datatrove) | 大规模文本处理 |
| [IBM data-prep-kit](https://github.com/IBM/data-prep-kit) | 非结构化数据处理 |
| [Dingo](https://github.com/DataEval/dingo) | 数据质量评估 |
| [RedPajama-Data-V2](https://huggingface.co/datasets/togethercomputer/RedPajama-Data-V2) | 带质量信号的开放网页语料 |
| [Hugging Face datasets](https://huggingface.co/docs/datasets/index) | 数据加载、处理、发布 |

## 岗位技能

| 能力 | 产出 |
|---|---|
| 数据过滤 | 做一个 CC 子集过滤器，报告去重率和质量分布 |
| 数据混合 | 训练小模型，对比 code/math/web 不同比例 |
| 污染检测 | 对 benchmark 做 n-gram 和 embedding 检索污染检查 |
| 合成数据 | 用强模型生成任务，再用弱模型训练并评测收益 |

## 常见坑

- 数据量大不等于数据好，低质量 token 会吃掉训练预算。
- benchmark 泄漏会让模型看起来“会推理”。
- 合成数据需要 diversity、verification 和 rejection，不应只做批量生成。
- Agent 数据要保留状态、工具结果、错误恢复和最终验证。

