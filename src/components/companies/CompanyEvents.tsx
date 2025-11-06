import { Calendar, FileText, Headphones } from "lucide-react";
import type { CompanyEvent } from "@/lib/types/company";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CompanyEventsProps {
  events: CompanyEvent[];
}

export function CompanyEvents({ events }: CompanyEventsProps) {
  if (events.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Events</CardTitle>
          <CardDescription>No events available</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-foreground">Recent Events</h2>

      <div className="grid gap-4">
        {events.map((event) => (
          <Card key={event.eventId}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{event.eventTitle}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(event.eventDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge variant="secondary">{event.fiscalPeriod}</Badge>
                  <Badge variant="outline">{event.fiscalYear}</Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2">
                {event.reportUrl && (
                  <a
                    href={event.reportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
                  >
                    <FileText className="h-4 w-4" />
                    Report
                  </a>
                )}
                {event.pdfUrl && (
                  <a
                    href={event.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border bg-background hover:bg-accent transition-colors text-sm"
                  >
                    <FileText className="h-4 w-4" />
                    Transcript
                  </a>
                )}
                {event.audioUrl && (
                  <a
                    href={event.audioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border bg-background hover:bg-accent transition-colors text-sm"
                  >
                    <Headphones className="h-4 w-4" />
                    Audio
                  </a>
                )}
              </div>

              {event.qnaTimestamp !== null &&
                event.qnaTimestamp !== undefined && (
                  <p className="mt-3 text-sm text-muted-foreground">
                    Q&A starts at {Math.floor(event.qnaTimestamp / 60)}:
                    {String(event.qnaTimestamp % 60).padStart(2, "0")}
                  </p>
                )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
