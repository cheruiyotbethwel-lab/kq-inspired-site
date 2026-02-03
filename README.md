# Next.js + Tailwind Starter (AI Agent PR workflow)

This repository is a minimal, original website inspired by an example site (structure & feel only). It includes:

- Next.js app (pages): Home, About, Contact
- Tailwind CSS for styling (mobile-first, responsive)
- Simple components: Nav, Hero, Footer
- Placeholder images/assets in `public/`
- GitHub Action & ai-agent script:
  - Manually trigger workflow (workflow_dispatch)
  - Provides `user_prompt` input
  - Calls the OpenAI API to generate files in JSON
  - Commits changes to a new branch and opens a PR (safe — human review required)

Important: The AI will be asked to produce original files inspired by the example site. Do NOT use this to reproduce copyrighted content.

## Quick start (development)

1. Install:
   ```bash
   npm install
   ```

2. Run dev server:
   ```bash
   npm run dev
   # Open http://localhost:3000
   ```

3. Build:
   ```bash
   npm run build
   npm start
   ```

## Deployment

Recommended: Vercel (Next.js first-class)
- Connect your GitHub repo to Vercel and deploy — Vercel will handle build settings automatically.

Alternative: Netlify (using Next.js adapter) or other hosts — read their docs for Next.js.

## AI Agent workflow (safe mode — opens PR)

1. Add secrets to your repository:
   - `OPENAI_API_KEY` — your OpenAI API key
   - The `GITHUB_TOKEN` secret is provided by Actions automatically; no extra step required.

2. Go to Actions → "AI: generate or update site" workflow → Run workflow.
   - Fill `user_prompt` (e.g. `Create a modern hero + 3 features + contact page with client-side validation. Keep design minimal and blue-toned.`)

3. The workflow will:
   - Run `ai-agent/ai-commit.js` which calls the OpenAI API.
   - Create a branch `ai-update-<timestamp>` with changes.
   - Open a Pull Request against the default branch for your review.

4. Review the PR, run tests or review code, then merge.

## Security & notes
- Keep `OPENAI_API_KEY` secret.
- The Action opens a PR (does not push to main). Review all AI-generated code before merging.
- The agent expects the model's response to be JSON with:
  {
    "files": [{ "path": "relative/path", "content": "..." }],
    "commit_message": "..."
  }
  The provided workflow/script includes a robust parser with basic JSON recovery.

## Customization
- Edit Tailwind config in `tailwind.config.js`.
- Add your logo in `public/`.
- Modify the AI prompt in `.github/workflows/ai-agent.yml` or send custom `user_prompt` when running the workflow.

Enjoy! If you want, I can:
- Initialize the repository on your GitHub (I’ll provide step-by-step or help guide you through OAuth),
- Or tailor the UI/design/colors further.
