import { Search } from "lucide-react";
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
    <div className="container max-w-2xl mx-auto px-6 py-8 min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <CardTitle>Company Not Found</CardTitle>
              <CardDescription>
                The company you're looking for doesn't exist or has been removed
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/">Browse all companies</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
