# 🧪 Saucedemo UI Automation Challenge

This repository contains an automated test suite built with **Cypress** and **TypeScript**, developed as part of a technical challenge to test key UI features of the [Saucedemo](https://www.saucedemo.com/) application.

---

## 📦 Tech Stack

- ⚙️ **Cypress** `v14.5.0`
- 🧠 **TypeScript** `v5+`
- 💅 **Modular custom commands** in `/support`
- 🧪 Tests structured using `describe` + `beforeEach` blocks
- 💻 Headless and UI-friendly execution

---

## 📂 Project Structure
    saucedemo-ui/
    │
    ├── cypress/
    │ ├── e2e/ # Test cases
    │ │ ├── auth.cy.ts
    │ │ ├── cart.cy.ts
    │ │ ├── checkout.cy.ts
    │ │ ├── logout.cy.ts
    │ │ └── sort.cy.ts
    │ └── support/ # Custom commands + setup
    │ ├── commands.ts
    │ ├── e2e.ts
    │ └── index.d.ts
    │
    ├── tsconfig.json
    ├── cypress.config.ts
    └── package.json

---

## 🚀 Setup Instructions

1. **Clone the repo**:

- git clone https://github.com/AgustinaCortezMarino/saucedemo-ui
- cd saucedemo-ui

---

2. **Install dependencies**:
- npm install

3. a.  **Run Cypress test runner (UI mode)**:
- npx cypress open --e2e

3. b. **Run Cypress in headless mode**:
- npx cypress run --e2e

---
## 🙋‍♀️ Author
### Agustina Cortez Marino