# Order Pay Monorepo

This repository contains a full-stack application with a **NestJS backend** and a **React frontend**, managed as a monorepo using Yarn workspaces.

## Project Structure

```
order-pay/
├── apps/
│   ├── backend/   # NestJS backend API
│   └── frontend/  # React frontend app
├── package.json   # Monorepo root, manages workspaces and scripts
├── tsconfig.base.json
└── ...
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)

### Install Dependencies

From the root directory:

```sh
yarn install
```

This will install dependencies for both `backend` and `frontend` apps.

### Running the Apps

To start both backend and frontend concurrently:

```sh
yarn start
```

- **Backend** runs on [http://localhost:3000](http://localhost:3000) by default.
- **Frontend** runs on [http://localhost:3000](http://localhost:3000) (or another port if 3000 is in use).

You can also start them individually:

```sh
yarn start:backend
yarn start:frontend
```

### Building the Apps

To build both apps:

```sh
yarn build
```

Or individually:

```sh
yarn build:backend
yarn build:frontend
```

## Apps Overview

### Backend ([apps/backend](apps/backend/README.md))

- Built with [NestJS](https://nestjs.com/)
- API entrypoint: [`main.ts`](apps/backend/src/main.ts)
- Environment config: `.env`
- Unit and e2e tests with Jest

See [apps/backend/README.md](apps/backend/README.md) for backend-specific details.

### Frontend ([apps/frontend](apps/frontend/README.md))

- Built with [React](https://react.dev/) (Create React App)
- Main entrypoint: [`index.tsx`](apps/frontend/src/index.tsx)
- Tests with React Testing Library and Jest

See [apps/frontend/README.md](apps/frontend/README.md) for frontend-specific details.

## Scripts

Common scripts defined in [package.json](package.json):

| Script                | Description                   |
| --------------------- | ----------------------------- |
| `yarn start`          | Start both backend & frontend |
| `yarn build`          | Build both backend & frontend |
| `yarn start:backend`  | Start backend only            |
| `yarn start:frontend` | Start frontend only           |
| `yarn build:backend`  | Build backend only            |
| `yarn build:frontend` | Build frontend only           |

## Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/feature-name`)
3. Commit your changes
4. Push to the branch (`git push origin feature/feature-name`)
5. Open a pull request
