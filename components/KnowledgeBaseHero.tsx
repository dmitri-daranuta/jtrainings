import KnowledgeBaseSearchInput from '@/components/KnowledgeBaseSearchInput';

export default function KnowledgeBaseHero() {
  return (
    <div className="relative h-[45vh] w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/55 dark:from-white/15 dark:to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />

      <div className="relative container mx-auto px-4 h-full flex flex-col text-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
          JTrainings Knowledge Base
        </h1>
        <p className="text-xl text-muted-foreground">
          Find in-depth articles, step-by-step tutorials, and comprehensive
          guides to help you learn, troubleshoot, and master new skills.
        </p>

        <KnowledgeBaseSearchInput />
      </div>
    </div>
  );
}
