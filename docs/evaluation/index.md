# 评测

评测方向回答一个问题：模型在真实任务中是否可靠、可比较、可复现。

## 评测层次

| 层次 | 例子 | 关注点 |
|---|---|---|
| 基础能力 | MMLU、GPQA、MATH、HumanEval | 知识、数学、代码 |
| 动态综合 | [LiveBench](https://livebench.ai/), [LMArena](https://lmarena.ai/) | 新鲜度、偏好、污染控制 |
| 极难任务 | [Humanity's Last Exam](https://arxiv.org/abs/2501.14249) | 专家级知识和多模态难题 |
| 工具调用 | [BFCL](https://gorilla.cs.berkeley.edu/leaderboard.html), [tau-bench](https://arxiv.org/abs/2406.12045) | 函数调用、状态、真实交互 |
| 代码仓库 | [SWE-bench](https://www.swebench.com/), [SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/) | issue 修复、测试通过率 |
| RAG | [Ragas](https://github.com/explodinggradients/ragas) | 检索质量、faithfulness、答案质量 |

## 工具栈

| 工具 | 适合场景 |
|---|---|
| [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) | 标准模型评测 |
| [lighteval](https://github.com/huggingface/lighteval) | Hugging Face 风格评测 |
| [OpenCompass](https://github.com/open-compass/opencompass) | 中文和多任务榜单 |
| [simple-evals](https://github.com/openai/simple-evals) | 小型 eval 示例 |
| [promptfoo](https://github.com/promptfoo/promptfoo) | prompt 和 LLM 回归测试 |
| [DeepEval](https://github.com/confident-ai/deepeval) | 应用层 eval |
| [Opik](https://github.com/comet-ml/opik) | eval 与观测 |
| [Arize Phoenix](https://github.com/Arize-ai/phoenix) | tracing、eval、RAG 调试 |

## 评测设计

1. 先定义用户任务，不先定义 benchmark。
2. 拆成 accuracy、cost、latency、stability、safety、tool success。
3. 建立小而硬的 golden set。
4. 对每次模型、prompt、工具、数据变更做回归测试。
5. 对 agent 任务记录完整轨迹，不能只记录最终答案。

## 岗位技能

| 岗位 | 需要证明 |
|---|---|
| Eval engineer | 能设计 benchmark，能解释指标偏差 |
| LLM app engineer | 能把用户反馈变成自动 eval |
| Agent engineer | 能评估长任务、工具调用和错误恢复 |
| Safety engineer | 能设计拒答、越狱、隐私、滥用 eval |

## 重要趋势

- 静态榜单越来越容易被训练污染。
- Arena 和真实任务更重要，但也有样本偏差。
- Agent 评测必须包含环境、工具、状态和验证器。
- 企业应用需要持续 eval，不只需要上线前测试。

