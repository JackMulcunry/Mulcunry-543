/*import Image from "next/image"; */
import Section from "@/components/section";
import AccordionUI from "@/layout/ui/accordion";

export default function Home() {
  return (
      <main className="bg-green-500 flex-1 p-8 flex flex-col gap-4">
         <Section />
         <Section />
         <AccordionUI />
      </main>
  );
}
 