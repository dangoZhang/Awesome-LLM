# Agent

Agent 方向关注 LLM 如何在环境中持续行动：调用工具、修改代码、浏览网页、读写文件、完成长任务。

## Agent 技术栈

| 层 | 关键能力 | 代表资料 |
|---|---|---|
| 模型 | 指令跟随、工具调用、长上下文、代码能力 | [Kimi K2](https://arxiv.org/abs/2507.20534), [GLM-4.5](https://arxiv.org/abs/2508.06471), [Qwen3-Coder-Next](https://arxiv.org/abs/2603.00729), [Grok 4.3](https://docs.x.ai/developers/models/grok-4.3) |
| 编排 | 状态机、图、重试、分支、权限 | [LangGraph](https://github.com/langchain-ai/langgraph), [AutoGen](https://github.com/microsoft/autogen), [CrewAI](https://github.com/crewAIInc/crewAI), [CAMEL](https://github.com/camel-ai/camel) |
| 工具 | 搜索、代码、浏览器、shell、数据库、文档 | Function calling、MCP、browser use、computer use |
| 记忆 | 短期状态、长期资料、向量库、知识图谱 | RAG、GraphRAG、workspace memory |
| 评测 | 任务成功率、工具成功率、成本、回滚 | SWE-bench、BFCL、tau-bench、WebArena |

## Coding Agent

| 项目 | 作用 |
|---|---|
| [SWE-bench](https://arxiv.org/abs/2310.06770) | 真实 GitHub issue 修复基准 |
| [SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/) | 人工验证子集 |
| [SWE-agent](https://arxiv.org/abs/2405.15793) | agent-computer interface |
| [Agentless](https://arxiv.org/abs/2407.01489) | 简洁的定位、修复、验证 pipeline |
| [OpenHands](https://arxiv.org/abs/2407.16741) | 开源软件开发 agent 平台 |
| [aider](https://github.com/Aider-AI/aider) | 终端 pair-programming agent |

## Agentic RAG

| 类型 | 特点 |
|---|---|
| Naive RAG | 一次检索，一次生成 |
| Modular RAG | query rewrite、rerank、route、verify 可组合 |
| GraphRAG | 用实体和关系组织知识 |
| Agentic RAG | agent 自主决定检索、工具、验证和下一步 |

参考：[RAG Survey](https://arxiv.org/abs/2312.10997)、[Agentic RAG Survey](https://arxiv.org/abs/2501.09136)、[Reasoning Agentic RAG](https://arxiv.org/abs/2506.10408)。

## 岗位技能

| 岗位 | 需要证明 |
|---|---|
| Agent engineer | 会状态管理、工具调用、失败恢复和 trace |
| Coding agent engineer | 会 repo 理解、patch 生成、测试验证 |
| RAG engineer | 会检索、rerank、chunk、citation、faithfulness eval |
| AI product engineer | 能把用户任务拆成工具、权限、状态和回归测试 |

## 常见失败模式

- 工具返回失败后继续编造。
- 长任务中丢失状态。
- 多工具并发导致权限和数据边界不清。
- 只评估最终答案，不评估轨迹和成本。
- Agent 能做 demo，但没有回滚、审计和安全策略。

