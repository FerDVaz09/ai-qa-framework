# 🏆 AI-Powered QA Automation Framework

> **The future of Testing is here.** An E2E testing framework that uses **Google Gemini AI** to automatically generate Playwright test cases from any URL.

[![Playwright](https://img.shields.io/badge/Playwright-v1.44.0-28a745?logo=playwright)](https://playwright.dev/)
[![Gemini API](https://img.shields.io/badge/AI-Gemini_Flash-blue?logo=google-gemini)](https://ai.google.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ✨ Features
- 🤖 **AI-Driven Test Generation**: Generate full Playwright scripts just by providing a URL.
- 🚀 **Next-Gen Tech Stack**: Built with Playwright, Node.js, and Google Gemini.
- 🛡️ **Production Ready**: Includes professional reporters, Docker support, and CI/CD pipelines.
- 🐳 **Dockerized**: Run your tests anywhere with absolute consistency.
- 📈 **HTML Reports**: Beautiful, detailed execution reports with screenshots.

---

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USER/ai-qa-framework.git
   cd ai-qa-framework
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup Environment Variables:**
   Create a `.env` file in the root and add your Gemini API Key:
   ```env
   GOOGLE_API_KEY=your_api_key_here
   ```

---

## 🚀 Usage

### ⚙️ Generate Tests with AI
Generate a new test case for any website:
```bash
node src/ai-generator.js "https://www.saucedemo.com" "Login and Checkout Flow"
```

### 🧪 Run All Tests
```bash
npx playwright test
```

### 📊 View Reports
```bash
npx playwright show-report
```

---

## 🏗️ Architecture
- `src/ai-generator.js`: Core engine interacting with **Gemini AI**.
- `tests/generated/`: Where the AI stores the magic it creates.
- `tests/manual/`: High-quality base tests for critical paths.
- `.github/workflows/`: Automated CI/CD execution on every push.

---

## 🛡️ Security
This project uses `.env` files for secret management. **Never commit your `.env` file to GitHub.** A `.gitignore` is included to protect your credentials.

---

Made with ❤️ by [Ferxxos]
