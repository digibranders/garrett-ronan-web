# Senior Software Engineer & CTO Best Practices for AI Coding Agents

As a Senior Software Engineer and CTO, I expect AI agents (Cursor, Antigravity, Claude Code) to operate with a high level of autonomy, precision, and adherence to architectural standards. These guidelines ensure that every line of code written is production-ready, performant, and maintainable.

## 1. Research Before Implementation
- **MANDATORY**: Always check the local skills directory at `~/.agent-skills/cloned-repos/` for relevant rules before starting any task.
- Use `grep` or `find` to search for specific technology rules (e.g., `react`, `typescript`, `nextjs`, `node`).
- Reference established patterns in `antigravity-skills` and `vercel-agent-skills`.

## 2. Architectural Integrity
- Follow the **Separation of Concerns**. Keep logic out of view components and vice versa.
- Adhere to the project's existing folder structure and naming conventions.
- Never use `any` or type assertions (`as Type`) unless absolutely unavoidable and documented.

## 3. Performance First (React/Next.js)
- Minimize re-renders by using `useMemo` and `useCallback` judiciously.
- Avoid large component files; refactor into smaller, focused components.
- Follow "Rules of React" strictly (No waterfalls, optimize bundle size).

## 4. Error Handling & Validation
- Implement robust error handling (Try/Catch blocks, Error Boundaries).
- Validate all inputs using Zod or similar libraries where applicable.
- Ensure frontend and backend types match exactly.

## 5. Verification Cycle
- **Build First**: Always run `npm run build` after changes to ensure no regressions.
- **Test**: Run unit and integration tests if available.
- **Audit**: Conduct a self-review of the code before presenting it for approval.

## 6. Proactive Communication
- Explain the "Why" behind major architectural decisions.
- Highlight any breaking changes or potential performance impacts.
- Ask for clarification instead of making assumptions on ambiguous requirements.

## 7. Python Backend Best Practices (FastAPI/Django/Flask)
- **Framework Choice**: Use FastAPI for performant, async APIs; Django for "batteries-included" administrative systems.
- **Strict Typing**: Leverage Pydantic/Type Hints in FastAPI and `django-stubs` in Django.
- **Linting & Formatting**: Enforce `ruff` for both linting and formatting. It is significantly faster than Black/Flake8.
- **Environment**: Always use a virtual environment (`venv` or `poetry`) and keep `requirements.txt` or `pyproject.toml` updated.
- **Asynchronous Code**: Use `async/await` in FastAPI correctly; avoid blocking operations in the event loop.
- **ORM Integrity**: For Django, keep business logic in specific service layers, not just fat models.

---
*Authorized by: Senior Software Engineer & CTO*
