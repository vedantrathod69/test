"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"
import { useState } from "react"

export function CopyButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button variant="ghost" size="sm" onClick={handleCopy}>
      <Copy className="h-4 w-4" />
      {copied && <span className="ml-2 text-green-600">Copied!</span>}
    </Button>
  )
}

export function EmailButton({
  email,
  subject,
  children,
}: { email: string; subject: string; children: React.ReactNode }) {
  const handleClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`
  }

  return (
    <Button className="w-full" size="lg" onClick={handleClick}>
      {children}
    </Button>
  )
}
