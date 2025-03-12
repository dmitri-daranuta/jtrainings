export function DividerWithText({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 py-8">
      <div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0" />
      <span className="text-sm font-medium text-muted-foreground">{text}</span>
      <div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0" />
    </div>
  );
}
