# electron-vite-shadcn

Hi 👋 thanks for checking this out!  
I’m a software engineering student who wanted a **clean, modern starting point** for building desktop apps with [Electron](https://www.electronjs.org/), [Vite](https://vitejs.dev/), and [shadcn/ui](https://ui.shadcn.com/). After spending too much time copy-pasting boilerplate, I decided to put together a template that anyone can pull and immediately start hacking on.

The goal is simple:

- ⚡ **Fast** – powered by Vite with hot-reload
- 🎨 **Modern UI** – preconfigured with shadcn/ui (Radix + Tailwind)
- 🖥️ **Desktop-ready** – Electron setup that just works

---

## 🚀 Getting Started

Clone the repo:

```bash
git clone https://github.com/ysood/electron-vite-shadcn
cd electron-vite-shadcn
npm install
npm run dev
```

This will spin up your app in development mode with hot reload.

---

## 🏷️ Customizing Your App Name

After cloning this template, you'll want to update the app name throughout the project. Here are all the files that need to be updated:

### Required Files to Update:

1. **`package.json`** (line 2)

   ```json
   "name": "your-app-name"
   ```

2. **`electron-builder.yml`** (line 2)

   ```yaml
   productName: Your App Name
   ```

3. **`electron-builder.yml`** (line 15)

   ```yaml
   executableName: your-app-name
   ```

4. **`README.md`** (line 1)

   ```markdown
   # your-app-name
   ```

5. **`dev-app-update.yml`** (line 3)
   ```yaml
   updaterCacheDirName: your-app-name-updater
   ```

### Optional Files to Update:

6. **`package.json`** (lines 6-7) - Update author and homepage:

   ```json
   "author": "Your Name",
   "homepage": "https://your-website.com"
   ```

7. **`electron-builder.yml`** (line 43) - Update auto-update URL:

   ```yaml
   url: https://your-domain.com/auto-updates
   ```

8. **`src/main/index.ts`** (line 43) - Update app user model ID:

   ```typescript
   electronApp.setAppUserModelId('com.yourcompany.yourapp')
   ```

9. **`electron-builder.yml`** (line 1) - Update app ID:
   ```yaml
   appId: com.yourcompany.yourapp
   ```

### Quick Replace Tips:

- Use your editor's "Find and Replace All" feature
- Search for `electron-vite-shadcn` and replace with your app name
- Update any remaining placeholder URLs and author information

---

## 📂 Project Structure

```
electron-vite-shadcn/
├── src/
│   ├── main/                    # Electron main process
│   │   └── index.ts            # Main process entry point
│   ├── preload/                # Preload scripts
│   │   ├── index.ts            # Preload script
│   │   └── index.d.ts          # Type definitions
│   └── renderer/               # React renderer process
│       ├── index.html          # HTML entry point
│       └── src/
│           ├── App.tsx         # Main React component
│           ├── main.tsx        # React entry point
│           ├── components/     # UI components
│           │   ├── ui/         # shadcn/ui components
│           │   └── Versions.tsx
│           ├── assets/         # Static assets
│           └── lib/            # Utility functions
├── build/                      # Build resources (icons, etc.)
├── resources/                  # App resources
├── out/                        # Built output (generated)
├── electron-builder.yml        # Electron builder config
├── electron.vite.config.ts     # Vite configuration
├── components.json             # shadcn/ui configuration
└── package.json
```

### Key Directories:

- **`src/renderer/src/App.tsx`** → Your main UI component
- **`src/main/index.ts`** → Electron main process logic
- **`src/preload/index.ts`** → Secure bridge between main and renderer
- **`src/renderer/src/components/ui/`** → shadcn/ui components
- **`build/`** → App icons and build resources

---

## 🛠️ Available Commands

```bash
npm run dev       # Start the app in dev mode
npm run build     # Build production binaries
npm run lint      # Lint code
npm run preview   # Preview production build
```

---

## ✨ Why this exists

I built this template because I wanted a **fast, unopinionated base** that still felt modern. Something I could use for my own side projects — and hopefully save someone else the headache of wiring Electron + Vite + shadcn from scratch.

It’s not perfect, but it should give you a nice head start. Feel free to fork, tweak, and make it your own.

---

## 🙌 Contributing

If you find bugs, have ideas, or just want to improve the setup — PRs and issues are super welcome.  
This is just me learning and sharing, so I’d love to see what the community builds with it.

---

## 📜 License

MIT — use it however you like. Build cool stuff. ✌️
