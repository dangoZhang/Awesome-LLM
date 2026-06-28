# LLM Evaluation

The older ChatGPT task-probing list is replaced with current benchmark and
tooling references. Prefer benchmarks that are dynamic, contamination-aware,
agent/tool focused, or tied to reproducible evaluation harnesses.

## Benchmarks

- (2022-11) [HELM](https://arxiv.org/abs/2211.09110) - holistic evaluation.
- (2023-10) [SWE-bench](https://arxiv.org/abs/2310.06770) - real GitHub issue resolution.
- (2024-06) [LiveBench](https://arxiv.org/abs/2406.19314) - contamination-resistant, monthly-updated benchmark.
- (2024-06) [tau-bench](https://arxiv.org/abs/2406.12045) - tool-agent-user interactions.
- (2024-08) [SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/) - human-validated SWE-bench subset.
- (2025-01) [Humanity's Last Exam](https://arxiv.org/abs/2501.14249) - expert-level multimodal benchmark.
- (2025) [Berkeley Function Calling Leaderboard](https://gorilla.cs.berkeley.edu/leaderboard.html) - function and tool-calling evaluation.

## Tooling

- [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness)
- [lighteval](https://github.com/huggingface/lighteval)
- [simple-evals](https://github.com/openai/simple-evals)
- [OpenCompass](https://github.com/open-compass/opencompass)
- [promptfoo](https://github.com/promptfoo/promptfoo)
- [Ragas](https://github.com/explodinggradients/ragas)
- [DeepEval](https://github.com/confident-ai/deepeval)
- [Opik](https://github.com/comet-ml/opik)
- [Arize Phoenix](https://github.com/Arize-ai/phoenix)
