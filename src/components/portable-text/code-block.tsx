"use client"

import { Copy } from "lucide-react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { useCopyToClipboard } from "usehooks-ts"
import { Button } from "../ui/button"
import { useToast } from "../ui/use-toast"

export function CodeBlock({ value }: { value: any }) {
  const [, copy] = useCopyToClipboard()
  const { toast } = useToast()

  const handleCopy = () => {
    copy(value.code)
      .then(() => {
        toast({
          description: "Copied",
        })
      })
      .catch(() => {
        toast({
          description: "Something went wrong when copying",
          variant: "destructive",
        })
      })
  }

  return (
    <div className="group/code-block relative overflow-hidden rounded-lg border p-1 hover:border-muted-foreground/50">
      <div className="relative overflow-hidden rounded-lg">
        <div className="absolute right-2 top-2 flex items-center gap-2 transition-all md:opacity-0 md:group-hover/code-block:opacity-100">
          <p className="text-muted-foreground">{value.language}</p>
          <Button
            className="h-fit p-2 hover:border-muted-foreground/50"
            variant="outline"
            onClick={handleCopy}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <SyntaxHighlighter
          language={value.language}
          style={atomOneDark}
          showLineNumbers
        >
          {value.code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}