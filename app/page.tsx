import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export default function Home() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <h1 className="text-3xl font-bold">Shadcn/UI Showcase</h1>

      {/* Buttons */}
      <div className="space-x-4">
        <Button variant="default">Default Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
      </div>

      {/* Alert */}
      <div>
        <Alert>
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>Your operation was successful.</AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
