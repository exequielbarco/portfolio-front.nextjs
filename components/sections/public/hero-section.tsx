import { PageSection } from "@/components/layout/section";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <PageSection>
      <div className="w-full flex flex-col items-center justify-center space-y-6">
        <Card className="w-full py-4 bg-accent">
          <CardContent>
            <CardDescription>
              <p className="text-center max-w-xl text-sm text-muted-foreground">
                Hola, soy un Desarrollador Ingorriable
              </p>
            </CardDescription>
          </CardContent>
        </Card>
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-[2.5rem] font-bold tracking-normal">
              Exequiel Barco
            </h1>
            <span className="text-md tracking-tighter">
              Web Developer - Cloud - DevOps
            </span>
          </div>
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-foreground text-4xl font-bold bg-primary text-neutral-50">
            Fotito
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default HeroSection;
