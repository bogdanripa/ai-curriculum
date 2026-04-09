const curriculum = [
  {
    phase: "Phase 1: Understanding the foundations",
    description: "Build mental models for how AI works under the hood — by building things from scratch.",
    color: { bg: "#E6F1FB", text: "#0C447C", accent: "#185FA5", light: "#B5D4F4" },
    lessons: [
      {
        id: 1, title: "What is a neural network?", subtitle: "The building block of all modern AI", duration: "3–4 hours",
        tutorial: { title: "Neural Networks: Zero to Hero — Lecture 1 (Andrej Karpathy)", url: "https://karpathy.ai/zero-to-hero.html", description: "The best starting point. Karpathy walks you through building micrograd — a tiny neural network engine from scratch in Python. You'll implement backpropagation, understand weights and gradients, and train a small net. It's a 2.5-hour video with code you follow along with. Supplement with 3Blue1Brown's visual series for intuition." },
        extras: [
          { label: "3Blue1Brown: Neural Networks series (visual intuition)", url: "https://www.3blue1brown.com/topics/neural-networks" },
          { label: "TensorFlow Playground (interactive, no code)", url: "https://playground.tensorflow.org" },
          { label: "micrograd GitHub repo", url: "https://github.com/karpathy/micrograd" },
        ],
        keyTakeaway: "A neural network is just math: multiply inputs by weights, add them up, squish through a function, repeat across layers. Training = adjusting weights until the output matches what you want.",
        devopsAnalogy: "Think of it like a pipeline of load balancers. Each layer routes and transforms the signal. Training is like auto-tuning your config until latency (error) is minimized.",
      },
      {
        id: 2, title: "How LLMs work", subtitle: "From neural nets to language models", duration: "3–4 hours",
        tutorial: { title: "Let's build GPT from scratch (Andrej Karpathy)", url: "https://karpathy.ai/zero-to-hero.html", description: "Code along with Karpathy as you build a GPT-style language model from scratch in Python. You'll implement tokenization, attention, and next-token prediction — the actual mechanics inside every LLM. By the end you'll have a working (tiny) language model that generates text. Use the Wolfram essay as a companion read to fill in the conceptual gaps." },
        extras: [
          { label: "What Is ChatGPT Doing… and Why Does It Work? (Stephen Wolfram)", url: "https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/" },
          { label: "OpenAI Tokenizer tool (see tokens in action)", url: "https://platform.openai.com/tokenizer" },
          { label: "Karpathy: Let's build the GPT Tokenizer (video)", url: "https://karpathy.ai/zero-to-hero.html" },
        ],
        keyTakeaway: "An LLM doesn't \"understand\" anything. It predicts the most likely next token given all previous tokens. This simple mechanism, scaled massively, produces remarkably useful output.",
        devopsAnalogy: "The model is a stateless API: tokens in, tokens out. The weights are like a massive compressed config file (~hundreds of GB) encoding patterns from training data.",
      },
      {
        id: 3, title: "Tool use: how LLMs interact with the world", subtitle: "Search, code execution, and beyond", duration: "1.5–2 hours",
        tutorial: { title: "Build a weather tool with OpenAI function calling (DataCamp)", url: "https://www.datacamp.com/tutorial/open-ai-function-calling-tutorial", description: "Follow this step-by-step tutorial to build a Python script where an LLM calls a real weather API. You'll define a tool schema in JSON, send it to the API, handle the function call response, execute the actual API request, and feed the result back. By the end you'll have a working tool-using chatbot." },
        extras: [
          { label: "OpenAI Function Calling Guide (reference docs)", url: "https://platform.openai.com/docs/guides/function-calling" },
          { label: "Anthropic: Tool use with Claude", url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use" },
        ],
        keyTakeaway: "LLMs don't \"go online.\" They output a structured request (JSON function call), the system executes it, and the result is injected back as text.",
        devopsAnalogy: "It's exactly like a webhook-driven pipeline. The LLM is the orchestrator, tools are microservices. Structured call out, response piped back in.",
      },
      {
        id: 4, title: "Reasoning: thinking before answering", subtitle: "Chain-of-thought, o1/o3, extended thinking", duration: "1.5–2 hours",
        tutorial: { title: "Reasoning with o1 (DeepLearning.AI + OpenAI)", url: "https://www.deeplearning.ai/short-courses/reasoning-with-o1/", description: "Free 1.5-hour course where you build a multi-step orchestration system: o1 creates plans, GPT-4o-mini executes them. Six hands-on code exercises in Jupyter notebooks covering: prompting reasoning models, building a planning + execution pipeline, coding tasks with performance testing, image reasoning, and meta-prompting. You'll compare reasoning vs non-reasoning approaches with real results." },
        extras: [
          { label: "Anthropic: Extended Thinking in Claude (docs)", url: "https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking" },
          { label: "OpenAI: Reasoning models guide (o1, o3)", url: "https://platform.openai.com/docs/guides/reasoning" },
          { label: "Prompt engineering guide: chain-of-thought", url: "https://www.promptingguide.ai/techniques/cot" },
        ],
        keyTakeaway: "Reasoning models generate internal thinking tokens to decompose problems before answering. More thinking = better answers, higher cost.",
        devopsAnalogy: "Like a pre-deploy validation pipeline. Instead of pushing straight to prod, the model runs checks and analysis first, then deploys the answer.",
      },
      {
        id: 5, title: "Context and memory", subtitle: "How LLMs remember (and forget)", duration: "1.5–2 hours",
        tutorial: { title: "Build a chatbot with persistent memory (Python + SQLite)", url: "https://medium.com/@kpdebree/solving-chatbot-amnesia-building-an-ai-agent-with-persistent-memory-using-python-openai-and-b9ec166c298a", description: "Build a chatbot with both short-term memory (sliding context window) and long-term memory (SQLite database). You'll implement the full architecture from scratch: embedding user inputs, storing in a vector-like DB, retrieving relevant past memories, building context, and sending to the LLM. The end result is a chatbot that remembers your name and details across separate sessions." },
        extras: [
          { label: "OpenAI: Managing Conversation History (reference)", url: "https://platform.openai.com/docs/guides/conversation-state" },
          { label: "Anthropic: How Claude's memory works", url: "https://support.anthropic.com/en/articles/10090875-how-does-memory-work" },
          { label: "Understanding context windows (Anthropic docs)", url: "https://docs.anthropic.com/en/docs/build-with-claude/context-windows" },
        ],
        keyTakeaway: "There's no magic memory. The full conversation is re-sent with every request. Product \"memory\" is a layer on top that stores summaries and injects them into the system prompt.",
        devopsAnalogy: "It's a stateless container. Every request carries its full context, like a JWT. \"Memory\" is just an external store (like Redis) that gets loaded into the request.",
      },
    ],
  },
  {
    phase: "Phase 2: Building with LLM APIs",
    description: "Start writing code. Build increasingly sophisticated apps using LLM APIs, from a simple chatbot to a full agentic system.",
    color: { bg: "#EEEDFE", text: "#3C3489", accent: "#534AB7", light: "#CECBF6" },
    lessons: [
      {
        id: 6, title: "Your first LLM API call", subtitle: "Build the simplest possible AI app", duration: "1.5–2 hours",
        tutorial: { title: "Build an interactive CLI chatbot from scratch", url: "https://dev.to/zachary62/build-an-llm-web-app-in-python-from-scratch-part-1-local-cli-4824", description: "Build a human-in-the-loop CLI chatbot from scratch. The app generates jokes on user-requested topics, requires human approval before delivering them, and learns from rejections. You'll implement the full loop: get input → call LLM → present result → get feedback → iterate. It produces a working CLI app, not just a single API call." },
        extras: [
          { label: "OpenAI Quickstart: Your First API Request", url: "https://platform.openai.com/docs/quickstart" },
          { label: "Anthropic API Getting Started", url: "https://docs.anthropic.com/en/docs/initial-setup" },
          { label: "OpenAI API reference: Chat Completions", url: "https://platform.openai.com/docs/api-reference/chat" },
        ],
        keyTakeaway: "An LLM API call is just an HTTP POST with a JSON body. You send messages, you get text back. Everything else is built on top of this.",
        devopsAnalogy: "It's literally just a REST API call. You've done this a thousand times. The only new concept is the messages array format.",
      },
      {
        id: 7, title: "The agentic loop", subtitle: "Build the core loop with web search as your first tool", duration: "3–4 hours",
        tutorial: { title: "How to Build a General-Purpose AI Agent in 131 Lines of Python (O'Reilly)", url: "https://www.oreilly.com/radar/how-to-build-a-general-purpose-ai-agent-in-131-lines-of-python/", description: "A brilliant tutorial that builds a working AI agent from scratch in ~130 lines. No frameworks. It covers the core agentic loop (call LLM → check for tool calls → execute → feed back → repeat), tool definitions, and conversation history. You'll implement web search as your first tool — seeing both the built-in provider approach and the DIY version. This is THE tutorial for understanding agents." },
        extras: [
          { label: "OpenAI: Web Search Tool (Responses API)", url: "https://platform.openai.com/docs/guides/tools-web-search" },
          { label: "Building an AI Agent from Scratch (Leonie Monigatti)", url: "https://www.leoniemonigatti.com/blog/ai-agent-from-scratch-in-python.html" },
          { label: "freeCodeCamp: Build an AI Coding Agent (2hr video)", url: "https://www.freecodecamp.org/news/build-an-ai-coding-agent-in-python/" },
          { label: "Boot.dev: Build an AI Agent in Python (interactive course)", url: "https://www.boot.dev/courses/build-ai-agent-python" },
        ],
        keyTakeaway: "The agentic loop is the fundamental pattern: LLM decides what to do → you execute it → feed result back. This loop is the backbone of every AI agent. Web search is just the first tool you plug in.",
        devopsAnalogy: "It's a control loop — like a Kubernetes reconciliation loop. Desired state → observe → act → repeat until converged.",
      },
      {
        id: 8, title: "Multi-tool agents", subtitle: "Define and orchestrate multiple functions", duration: "3–4 hours",
        tutorial: { title: "OpenAI Cookbook: How to Call Functions with Chat Models", url: "https://cookbook.openai.com/examples/how_to_call_functions_with_chat_models", description: "The official OpenAI Cookbook tutorial for multi-function calling. It walks through defining multiple tools, handling parallel tool calls, and implementing the conversation flow. Build on your agentic loop from lesson 7 by adding 3–4 tools and seeing the model route between them." },
        extras: [
          { label: "o3/o4-mini Function Calling Guide (advanced)", url: "https://cookbook.openai.com/examples/o-series/o3o4-mini_prompting_guide" },
          { label: "Anthropic: Tool use patterns", url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use" },
        ],
        keyTakeaway: "You don't tell the LLM which tool to use — you describe all available tools and it picks. Your job is to define clear schemas and execute reliably.",
        devopsAnalogy: "You're building a service mesh. The LLM is the ingress controller, tools are backend services. You define routing rules (schemas), the LLM handles dispatch.",
      },
      {
        id: 9, title: "MCP servers", subtitle: "The standard protocol for AI tool integration", duration: "3–4 hours",
        tutorial: { title: "Build an MCP Server (official Model Context Protocol tutorial)", url: "https://modelcontextprotocol.io/docs/develop/build-server", description: "The official MCP tutorial from Anthropic. You build a weather server that exposes two tools, then connect it to Claude Desktop. It covers the MCP architecture, Python SDK, tool definitions with decorators, and stdio transport. Perfect hands-on intro." },
        extras: [
          { label: "Anthropic Academy: Introduction to MCP (free course)", url: "https://anthropic.skilljar.com/introduction-to-model-context-protocol" },
          { label: "Microsoft: MCP for Beginners (multi-language curriculum)", url: "https://github.com/microsoft/mcp-for-beginners" },
          { label: "MCP Server Tutorial: Build Your First Server (Towards Data Science)", url: "https://towardsdatascience.com/model-context-protocol-mcp-tutorial-build-your-first-mcp-server-in-6-steps/" },
        ],
        keyTakeaway: "MCP standardizes how tools are exposed to AI. Build an MCP server once, use it with any compatible client.",
        devopsAnalogy: "MCP is like gRPC or OpenAPI for AI tools. You expose endpoints with typed schemas, and any compatible client can discover and call them.",
      },
      {
        id: 10, title: "RAG: retrieval-augmented generation", subtitle: "Give your agent a knowledge base", duration: "4–5 hours",
        tutorial: { title: "Build a RAG system from scratch — no frameworks (Dataquest)", url: "https://www.dataquest.io/blog/build-a-rag-system-from-scratch/", description: "Build \"GitQuest\" — a RAG system that answers Git questions using official documentation, with source citations. No LangChain, no LlamaIndex — just Python, ChromaDB, and the OpenAI API. You implement the full pipeline from a blank file: document ingestion, chunking, embedding, retrieval, reranking, context management, and diagnostic tooling to catch subtle failures." },
        extras: [
          { label: "Code a Simple RAG from Scratch (Hugging Face blog, minimal code)", url: "https://huggingface.co/blog/ngxson/make-your-own-rag" },
          { label: "RAG from Scratch — no frameworks (learnbybuilding.ai)", url: "https://learnbybuilding.ai/tutorial/rag-from-scratch/" },
          { label: "RAG from Scratch — Full Course (freeCodeCamp + LangChain, video)", url: "https://www.freecodecamp.org/news/mastering-rag-from-scratch/" },
        ],
        keyTakeaway: "RAG lets you give an LLM access to private data without fine-tuning. Embed docs, search by similarity, stuff relevant chunks into the prompt.",
        devopsAnalogy: "It's Elasticsearch for AI. Instead of keyword search, you do semantic search. The vector DB is your index, embeddings are the indexed representations.",
      },
    ],
  },
  {
    phase: "Phase 3: Power tools and real-world building",
    description: "Level up with production-grade tools. Build complete apps, then let AI build them for you.",
    color: { bg: "#E1F5EE", text: "#085041", accent: "#0F6E56", light: "#9FE1CB" },
    lessons: [
      {
        id: 11, title: "AI-powered IDEs and coding assistants", subtitle: "Cursor, Copilot, and the new dev workflow", duration: "2–3 hours",
        tutorial: { title: "Build a memory card game with Cursor AI (Codecademy)", url: "https://www.codecademy.com/article/how-to-use-cursor-ai-a-complete-guide-with-practical-examples", description: "Build a complete memory card matching game with a 4x4 grid, card flipping mechanics, 3D animations, timer, move counter, scoring, and local storage leaderboard — all using Cursor AI. You'll learn Chat modes, Agent features, and CMD+K shortcuts through actual building, not docs reading." },
        extras: [
          { label: "Cursor: Official Documentation", url: "https://docs.cursor.com" },
          { label: "GitHub Copilot docs", url: "https://docs.github.com/en/copilot/quickstart" },
          { label: "Cline (VS Code extension — open source agentic coding)", url: "https://github.com/cline/cline" },
        ],
        keyTakeaway: "AI coding tools span from autocomplete to fully agentic. Different tools for different tasks — just like DevOps.",
        devopsAnalogy: "Think of the IaC evolution: manual CLI → scripts → Terraform → Pulumi. AI coding tools follow a similar trajectory.",
      },
      {
        id: 12, title: "Vibe coding with Claude Code", subtitle: "Let AI build the entire app for you", duration: "4–6 hours",
        tutorial: { title: "Claude Code: Official Getting Started", url: "https://code.claude.com/docs/en/overview", description: "Start with Anthropic's official Claude Code docs and quickstart. Install it, set up CLAUDE.md, and vibe-code a full-stack app from scratch. Then read the Nate's Newsletter deep dive for advanced patterns and real-world workflow tips." },
        extras: [
          { label: "Nate's Newsletter: The Claude Code Complete Guide", url: "https://natesnewsletter.substack.com/p/the-claude-code-complete-guide-learn" },
          { label: "Coursera: Vibe Coding with Claude Code (Scrimba)", url: "https://www.coursera.org/learn/introduction-to-claude-code" },
          { label: "InfoWorld: Vibe Coding with Claude Code (real-world experience)", url: "https://www.infoworld.com/article/3853805/vibe-coding-with-claude-code.html" },
          { label: "Vibe Coding SaaS MVP in a Weekend (practical framework)", url: "https://use-apify.com/blog/vibe-coding-claude-code-saas-mvp" },
        ],
        keyTakeaway: "Claude Code turns you from coder into technical director. Your DevOps skills (infra, deployment, architecture) become even more valuable.",
        devopsAnalogy: "Claude Code is like a very fast junior dev who knows every framework but needs your architectural guidance. You're the tech lead now.",
      },
      {
        id: 13, title: "Claude Skills", subtitle: "On-demand capabilities that don't bloat the prompt", duration: "2–3 hours",
        tutorial: { title: "Build a lesson plan generator skill (Codecademy)", url: "https://www.codecademy.com/article/how-to-build-claude-skills", description: "Build a complete Claude Skill that generates structured lesson plans. You'll create the SKILL.md file with YAML frontmatter (name, description, trigger conditions), write the instruction body, add a templates/ folder with lesson_template.md, and an examples/ folder with sample outputs. Package it, upload it, and test it live in Claude." },
        extras: [
          { label: "Anthropic: Prompt engineering docs", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering" },
          { label: "Claude.ai: Custom styles and project instructions", url: "https://support.anthropic.com/en/articles/9517075-what-are-projects" },
        ],
        keyTakeaway: "Skills are just-in-time documentation Claude reads when needed. MCPs preload all schemas into context. Skills scale better with many capabilities.",
        devopsAnalogy: "MCP = sidecar containers always running. Skills = serverless functions loaded on demand.",
      },
      {
        id: 14, title: "Claude Computer Use and Cowork", subtitle: "AI that operates your actual computer", duration: "2–3 hours",
        tutorial: { title: "Automate real tasks with Claude Cowork (DataCamp)", url: "https://www.datacamp.com/tutorial/claude-cowork-tutorial", description: "Use Claude Cowork to automate three real tasks hands-on: organize files on your computer, generate formatted documents from scattered notes, and automate browser tasks like extracting data from websites. You'll grant Cowork access to a local folder and watch it autonomously plan and execute multi-step workflows." },
        extras: [
          { label: "Anthropic: Computer Use API docs", url: "https://docs.anthropic.com/en/docs/build-with-claude/computer-use" },
          { label: "Anthropic: Cowork (desktop automation tool)", url: "https://www.anthropic.com/products/cowork" },
          { label: "Claude in Chrome (browsing agent)", url: "https://www.anthropic.com/products/claude-in-chrome" },
        ],
        keyTakeaway: "Computer use closes the last gap: any task a human can do by clicking and typing, AI can now attempt. APIs are better when available, but this makes everything automatable.",
        devopsAnalogy: "It's Selenium/Playwright, but general-purpose and driven by natural language. Describe the goal, the AI figures out the clicks.",
      },
      {
        id: 15, title: "Capstone: the everything agent", subtitle: "Combine tools, RAG, MCP, and skills into one app", duration: "6–8 hours",
        tutorial: { title: "Build a DevOps Copilot (your own project!)", url: null, description: "This is YOUR project. Combine everything from the entire curriculum into one agent. Build a DevOps assistant that can: search the web for docs, query your internal runbooks via RAG, check cluster status via MCP, and use skills for complex workflows. Use Claude Code to vibe-code it. Start with architecture design, then implement piece by piece." },
        extras: [
          { label: "Anthropic: Building effective agents (official guide)", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" },
          { label: "Coursera: AI Agents and Agentic AI in Python (Vanderbilt)", url: "https://www.coursera.org/specializations/ai-agents-python" },
        ],
        keyTakeaway: "Real agents combine multiple techniques. The art is choosing the right tool for each sub-problem and orchestrating them smoothly.",
        devopsAnalogy: "You're building the AI equivalent of your monitoring + alerting + runbook stack, unified into one conversational interface.",
      },
    ],
  },
];

export default curriculum;
