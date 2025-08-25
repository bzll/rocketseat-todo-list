# ToDo List

Aplicação de lista de tarefas desenvolvida com **React**, **TypeScript** e **Vite**.

## Funcionalidades

- Adição, remoção e marcação de tarefas
- Interface moderna com componentes reutilizáveis
- Armazenamento local das tarefas
- Responsivo e fácil de usar

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [use-local-storage](https://www.npmjs.com/package/use-local-storage)
- [CVA](https://www.npmjs.com/package/class-variance-authority)

## Estrutura do Projeto

```
src/
  App.tsx
  main.tsx
  components/
  core-components/
  helpers/
  hooks/
  models/
  pages/
public/
```

## Scripts

- `pnpm dev` — inicia o servidor de desenvolvimento
- `pnpm build` — gera a build de produção
- `pnpm preview` — visualiza a build de produção
- `pnpm lint` — executa o linter

## Como rodar o projeto

1. Instale as dependências:
   ```sh
   pnpm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```sh
   pnpm dev
   ```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## Configuração do ESLint

O projeto já vem com ESLint configurado para TypeScript e React. Para regras mais avançadas, consulte o exemplo no próprio arquivo `tseslint.config.ts`.

### Exemplo de Configuração Avançada

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Outras configs...

      // Remove tseslint.configs.recommended e substitua por isso
      ...tseslint.configs.recommendedTypeChecked,
      // Alternativamente, use isso para regras mais rígidas
      ...tseslint.configs.strictTypeChecked,
      // Opcionalmente, adicione isso para regras estilísticas
      ...tseslint.configs.stylisticTypeChecked,

      // Outras configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // outras opções...
    },
  },
])
```

Você também pode instalar `eslint-plugin-react-x` e `eslint-plugin-react-dom` para regras de lint específicas do React:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Outras configs...
      // Habilita regras de lint para React
      reactX.configs['recommended-typescript'],
      // Habilita regras de lint para React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // outras opções...
    },
  },
])
```
