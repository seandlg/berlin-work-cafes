import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="flex items-center space-x-2">
            <Github className="h-4 w-4" />
            <a
              href="https://github.com/seandlg/berlin-work-cafes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contribute on GitHub
            </a>
          </div>

          <p className="text-sm text-muted-foreground max-w-md">
            Want to add a cafe or suggest changes? Open an issue or PR on GitHub!
          </p>

          <p className="text-sm text-muted-foreground max-w-lg font-medium">
            ☕ Be a good guest: Support the cafes by buying food and drinks! No cafe can survive on customers who sit
            for hours with just one coffee.
          </p>
        </div>
      </div>
    </footer>
  )
}
