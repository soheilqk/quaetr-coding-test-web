"use client";

import { useEffect } from "react";
import { AlertCircle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to error reporting service (e.g., Sentry, LogRocket)
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="container max-w-2xl mx-auto px-6 py-8 min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <Card className="border-destructive w-full">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
              <AlertCircle className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <CardTitle>Oops! Something went wrong</CardTitle>
              <CardDescription>
                We encountered an unexpected error. Please try again.
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {process.env.NODE_ENV === "development" && (
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm font-mono text-muted-foreground break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-muted-foreground mt-2">
                  Error ID: {error.digest}
                </p>
              )}
              {error.stack && (
                <details className="mt-2">
                  <summary className="text-xs text-muted-foreground cursor-pointer hover:text-foreground">
                    Stack trace
                  </summary>
                  <pre className="text-xs text-muted-foreground mt-2 overflow-auto">
                    {error.stack}
                  </pre>
                </details>
              )}
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <Button onClick={reset} className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Try again
            </Button>
            <Button variant="outline" asChild className="gap-2">
              <Link href="/">
                <Home className="h-4 w-4" />
                Go to homepage
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
