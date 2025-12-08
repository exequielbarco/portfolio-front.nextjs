import { Button } from "@/components/ui/button";
import { FileDown, FolderKanban, Mail } from "lucide-react";
import Link from "next/link";

const AboutActions = () => {
  return (
    <div className="mt-4 flex justify-center gap-4 flex-wrap">
      <Button variant="secondary" asChild>
        <Link href="mailto:info@exequielbarco.com">
          <Mail className="mr-2 h-4 w-4" />
          Contactar por E-Mail
        </Link>
      </Button>

      <Button asChild>
        <Link href="/resume.pdf" target="_blank">
          <FileDown className="mr-2 h-4 w-4" />
          Ver Resumen CV
        </Link>
      </Button>
    </div>
  );
};

export default AboutActions;
