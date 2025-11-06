import { Home, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="container max-w-2xl mx-auto px-6 py-8 min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center shrink-0">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <CardTitle>404 - Page Not Found</CardTitle>
              <CardDescription>
                The page you're looking for doesn't exist or has been moved
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="gap-2">
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
