# GeekNotes

<div align="center">
  <img src="src/renderer/src/assets/geeknotes-logo.svg" alt="GeekNotes Logo" width="120" height="120">
  
  <p>A modern note-taking application built with Electron + React + TypeScript</p>
  
  ![Electron](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
  ![BlockNote](https://img.shields.io/badge/BlockNote-1a1a1a?style=for-the-badge&logoColor=white)
  ![Shiki](https://img.shields.io/badge/Shiki-6B7280?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMjY2IiBoZWlnaHQ9IjI2NiIgdmlld0JveD0iMCAwIDI2NiAyNjYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnPgo8Y2lyY2xlIGN4PSIyMTkuNSIgY3k9IjQ2LjUiIHI9IjQ2LjUiIGZpbGw9IiNDQjc2NzYiLz4KPHJlY3QgeT0iNDgiIHdpZHRoPSIyNjYiIGhlaWdodD0iNjUiIGZpbGw9IiM0Qjk5NzgiLz4KPHBhdGggZD0iTTEwOS40NjMgMTQ0LjQyNkMxMDkuMDEyIDEzOC43OTIgMTA2Ljg5OSAxMzQuMzk3IDEwMy4xMjQgMTMxLjI0MkM5OS40MDUyIDEyOC4wODYgOTMuNzQyNiAxMjYuNTA5IDg2LjEzNjEgMTI2LjUwOUM4MS4yOTA1IDEyNi41MDkgNzcuMzE4MiAxMjcuMSA3NC4yMTkyIDEyOC4yODRDNzEuMTc2NiAxMjkuNDExIDY4LjkyMjggMTMwLjk2IDY3LjQ1NzkgMTMyLjkzMkM2NS45OTI5IDEzNC45MDQgNjUuMjMyMyAxMzcuMTU4IDY1LjE3NTkgMTM5LjY5M0M2NS4wNjMyIDE0MS43NzggNjUuNDI5NSAxNDMuNjY2IDY2LjI3NDcgMTQ1LjM1NkM2Ny4xNzYyIDE0Ni45OSA2OC41ODQ4IDE0OC40ODMgNzAuNTAwNSAxNDkuODM1QzcyLjQxNjIgMTUxLjEzMSA3NC44NjcyIDE1Mi4zMTUgNzcuODUzNSAxNTMuMzg1QzgwLjgzOTcgMTU0LjQ1NiA4NC4zODk0IDE1NS40MTQgODguNTAyNiAxNTYuMjU5TDEwMi43MDEgMTU5LjMwMUMxMTIuMjggMTYxLjMzIDEyMC40NzggMTY0LjAwNiAxMjcuMjk2IDE2Ny4zM0MxMzQuMTEzIDE3MC42NTUgMTM5LjY5MiAxNzQuNTcxIDE0NC4wMyAxNzkuMDc4QzE0OC4zNjkgMTgzLjUyOSAxNTEuNTUyIDE4OC41NDQgMTUzLjU4IDE5NC4xMjJDMTU1LjY2NSAxOTkuNyAxNTYuNzM2IDIwNS43ODUgMTU2Ljc5MiAyMTIuMzc4QzE1Ni43MzYgMjIzLjc1OSAxNTMuODkgMjMzLjM5NCAxNDguMjU2IDI0MS4yODNDMTQyLjYyMSAyNDkuMTcxIDEzNC41NjQgMjU1LjE3MSAxMjQuMDg0IDI1OS4yODVDMTEzLjY2IDI2My4zOTggMTAxLjEyNCAyNjUuNDU0IDg2LjQ3NDIgMjY1LjQ1NEM3MS40MzAyIDI2NS40NTQgNTguMzAxOSAyNjMuMjI5IDQ3LjA4OTMgMjU4Ljc3OEMzNS45MzMxIDI1NC4zMjYgMjcuMjU2MSAyNDcuNDggMjEuMDU4MiAyMzguMjRDMTQuOTE2NiAyMjguOTQzIDExLjgxNzcgMjE3LjA1NCAxMS43NjEzIDIwMi41NzRINTYuMzg2MkM1Ni42Njc5IDIwNy44NyA1Ny45OTIgMjEyLjMyMSA2MC4zNTg1IDIxNS45MjhDNjIuNzI1IDIxOS41MzQgNjYuMDQ5MyAyMjIuMjY2IDcwLjMzMTUgMjI0LjEyNkM3NC42NyAyMjUuOTg1IDc5LjgyNTUgMjI2LjkxNSA4NS43OTggMjI2LjkxNUM5MC44MTI3IDIyNi45MTUgOTUuMDEwNCAyMjYuMjk1IDk4LjM5MSAyMjUuMDU1QzEwMS43NzIgMjIzLjgxNiAxMDQuMzM1IDIyMi4wOTcgMTA2LjA4MiAyMTkuOUMxMDcuODI5IDIxNy43MDIgMTA4LjczIDIxNS4xOTUgMTA4Ljc4NyAyMTIuMzc4QzEwOC43MyAyMDkuNzMgMTA3Ljg1NyAyMDcuNDE5IDEwNi4xNjcgMjA1LjQ0N0MxMDQuNTMzIDIwMy40MTkgMTAxLjgyOCAyMDEuNjE2IDk4LjA1MyAyMDAuMDM4Qzk0LjI3NzkgMTk4LjQwNCA4OS4xNzg3IDE5Ni44ODMgODIuNzU1NCAxOTUuNDc0TDY1LjUxNCAxOTEuNzU2QzUwLjE4ODMgMTg4LjQzMSAzOC4xMDI0IDE4Mi44ODEgMjkuMjU2MyAxNzUuMTA2QzIwLjQ2NjYgMTY3LjI3NCAxNi4wOTk5IDE1Ni41OTcgMTYuMTU2MiAxNDMuMDc0QzE2LjA5OTkgMTMyLjA4NyAxOS4wMjk4IDEyMi40OCAyNC45NDYgMTE0LjI1NEMzMC45MTg1IDEwNS45NzEgMzkuMTcyOSA5OS41MTk3IDQ5LjcwOTQgOTQuODk5NUM2MC4zMDIxIDkwLjI3OTMgNzIuNDQ0NCA4Ny45NjkxIDg2LjEzNjEgODcuOTY5MUMxMDAuMTEgODcuOTY5MSAxMTIuMTk1IDkwLjMwNzQgMTIyLjM5NCA5NC45ODRDMTMyLjU5MiA5OS42NjA2IDE0MC40NTIgMTA2LjI1MyAxNDUuOTc0IDExNC43NjFDMTUxLjU1MiAxMjMuMjEzIDE1NC4zNjkgMTMzLjEwMSAxNTQuNDI2IDE0NC40MjZIMTA5LjQ2M1oiIGZpbGw9IiM4M0QwREEiLz4KPHJlY3QgeD0iMjE3IiB3aWR0aD0iMjY2IiBoZWlnaHQ9IjY1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAyMTcgMCkiIGZpbGw9IiNFNkNDNzgiLz4KPC9nPgo8L3N2Zz4K)
</div>

## ✨ Features

- 🚀 Built with Electron-Vite for rapid development
- ⚡ Modern development experience with React 18 + TypeScript
- 🎨 Beautiful UI design with Tailwind CSS
- 📝 Rich text editing / code blocks powered by BlockNote
- 🌈 Syntax highlighting powered by Shiki
- 🔧 Complete development toolchain configuration
- 📦 Cross-platform packaging support (Windows, macOS, Linux)

## 🚀 Getting Started

### 📦 Install Dependencies

```bash
# Using Yarn (recommended)
yarn install

# Or using npm
npm install
```

### 🔧 Development

```bash
# Start development server
yarn dev

# Or
npm run dev
```

### 🏗️ Build

```bash
# For Windows
yarn build:win

# For macOS
yarn build:mac

# For Linux
yarn build:linux

# Build only (no packaging)
yarn build
```

### 🧪 Code Quality & Formatting

```bash
# ESLint check
yarn lint

# Prettier formatting
yarn format

# TypeScript type checking
yarn typecheck
```

## 📁 Project Structure

```
geeknotes/
├── src/
│   ├── main/           # Main process code
│   ├── preload/        # Preload scripts
│   ├── renderer/       # Renderer process (React app)
│   └── shared/         # Shared code
├── resources/          # App resources
├── build/             # Build output
└── out/               # Package output
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

---

<div align="center">
  <p>⭐ If this project helps you, please give it a Star!</p>
</div>
