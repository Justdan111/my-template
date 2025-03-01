# Setting Up a Reusable React-Vite-TypeScript Template

Here's a complete guide to create and use your own reusable template for React-Vite-TypeScript projects:

## Creating Your Template

1. Start by building a base project with Vite:
   ```bash
   npm create vite@latest my-template -- --template react-ts
   cd my-template
   ```

2. Install your preferred dependencies:
   ```bash
   npm install react-router-dom axios tailwindcss postcss autoprefixer styled-components
   # Add any other libraries you commonly use
   ```

3. Set up configuration files:
   ```bash
   # Install ESLint and Prettier
   npm install -D eslint prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-prettier eslint-config-prettier
   
   # For Tailwind (if using)
   npx tailwindcss init -p
   ```

4. Create your folder structure as outlined earlier (components, hooks, pages, etc.)

5. Add utility files, base components, and configurations you use across projects

6. Create the TEMPLATE.md file (as provided earlier)

7. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial template setup"
   git remote add origin https://github.com/yourusername/vite-react-ts-template.git
   git push -u origin main
   ```

## Using Your Template (Method 1: Vite)

To use your template for new projects:

```bash
npm create vite@latest my-new-project -- --template github:yourusername/vite-react-ts-template
cd my-new-project
npm install
```

## Using Your Template (Method 2: Degit - Recommended)

For a cleaner approach that doesn't include git history:

```bash
# Install degit globally (once)
npm install -g degit

# Create a new project from your template
degit yourusername/vite-react-ts-template my-new-project
cd my-new-project
npm install
```

## Using Your Template (Method 3: GitHub Template)

1. On GitHub, go to your template repository
2. Click Settings → "Template repository" checkbox
3. Now users can click "Use this template" when viewing your repo
4. This creates a new repository based on your template

## Post-Template Usage

After creating a new project:

1. Follow the steps in your TEMPLATE.md file
2. Update package.json with the new project name
3. Replace placeholder content
4. Configure environment-specific settings
5. Start development: `npm run dev`

This workflow saves significant setup time for each new project while ensuring your projects maintain consistent structure and dependencies.