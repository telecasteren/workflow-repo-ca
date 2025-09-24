# Workflow repo for the CA

### Scripts available

```bash
npm run dev # Builds for dev mode
npm ruin build # Builds for production
```

**ESLint**

```bash
npx eslint # linting entire project
npx eslint myFolder/myFile.js # linting specific folder
```

**Prettier**

```bash
npx prettier . --write # Runs prettier on entire project
npx --write myFolder/myFile.js # Runs prettier on specific folder
```

Lint all staged files before committing with <br/>
`npx lint-staged`

### Tests

You can find all tests [here](./tests/). To run the tests:

```bash
npm run test
```
