<h1 align="center">
<br>
CodeCraft
</h1>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

![CodeCraft Preview](https://i.imgur.com/nvcTQxT.png)

CodeCraft Summit is a **React + Vite** application that allows users to register for an event and share registration links with friends. The platform features a **user leaderboard** showing the top link sharers and an **AI assistant** that provides insights into event registrations, link statistics, and more.

---

## Features

- **User Registration:** Sign up for the CodeCraft Summit event.
- **Link Sharing:** Send event registration links to friends.
- **Leaderboard:** Track the top users who have shared the most links.
- **AI Assistant:** Query registration data, link statistics, and more using AI-powered insights.

---

## Tech Stack

- **Frontend:** React, Next.js, TypeScript, Tailwind CSS, PostCSS
- **Backend:** Node.js, Google Gemini SDK
- **API & Validation:** Orval, Zod
- **Icons:** lucide-react

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/codecraft-summit.git
cd codecraft-summit
```
2. Install dependencies:

```
npm install
```
3. Create a .env file in the root directory and add your environment variables (API keys, etc.):
```
NEXT_PUBLIC_API_URL=your_api_url
GOOGLE_GEMINI_API_KEY=your_gemini_api_key
```
4. Run the development server:

```
npm run dev
```

Open http://localhost:3000 to view the app.

## Usage

- Register for the event.
- Share your unique registration link with friends.
- Check the leaderboard for top link sharers.
- Ask the AI assistant for insights about registrations and link statistics.

## Folder Structure
```
codecraft-summit/
├─ public/
├─ src/
│  ├─ components/   # Reusable UI components
│  ├─ pages/        # Next.js pages
│  ├─ hooks/        # Custom hooks
│  ├─ services/     # API calls
│  ├─ utils/        # Utility functions
├─ package.json
├─ tsconfig.json
└─ tailwind.config.js
```
## Contributing

Contributions are welcome! Open an issue or submit a pull request.

## License

[MIT License](https://opensource.org/licenses/MIT)
