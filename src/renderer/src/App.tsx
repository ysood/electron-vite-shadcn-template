import { Button } from './components/ui/button'

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div className="relative min-h-screen w-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="h-full w-full bg-[radial-gradient(60%_60%_at_50%_0%,_rgba(99,102,241,0.15),_transparent_60%),radial-gradient(40%_50%_at_80%_80%,_rgba(16,185,129,0.12),_transparent_60%)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,_rgba(99,102,241,0.2),_transparent_60%),radial-gradient(40%_50%_at_80%_80%,_rgba(16,185,129,0.18),_transparent_60%)]" />
        </div>

        <div className="grid h-dvh place-items-center px-4">
          <div className="w-full max-w-2xl rounded-2xl border border-border/60 bg-background/70 p-8 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/50">
            <h1 className="text-2xl font-semibold tracking-tight">👋 Hey—welcome aboard.</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Electron + Vite + shadcn/ui — a fast, clean starting point for desktop apps.
            </p>

            <p className="mt-6 text-base leading-relaxed">
              I put this together so you can skip the boilerplate and get straight to building. Make
              it yours: tweak the components, break things, rebuild them. That’s the fun part.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border p-3">
                <div className="text-sm font-medium">Where to edit</div>
                <div className="mt-1 text-xs text-muted-foreground">src/App.tsx</div>
              </div>
              <div className="rounded-xl border p-3">
                <div className="text-sm font-medium">UI components</div>
                <div className="mt-1 text-xs text-muted-foreground">shadcn/ui</div>
              </div>
              <div className="rounded-xl border p-3">
                <div className="text-sm font-medium">Hot reload</div>
                <div className="mt-1 text-xs text-muted-foreground">Vite + HMR</div>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-between gap-3 sm:flex-row">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full border px-2 py-1">Electron</span>
                <span className="rounded-full border px-2 py-1">Vite</span>
                <span className="rounded-full border px-2 py-1">shadcn/ui</span>
              </div>
              <div className="flex items-center gap-3">
                <Button asChild className="rounded-full px-5">
                  <a
                    href="https://ui.shadcn.com/docs/components"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Components
                  </a>
                </Button>
                <Button asChild variant="secondary" className="rounded-full px-5">
                  <a href="https://instagram.com/yvsdna" target="_blank" rel="noopener noreferrer">
                    Connect with me!
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
