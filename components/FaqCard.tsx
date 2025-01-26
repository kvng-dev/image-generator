import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqCard = () => {
  return (
    <Accordion className="text-white w-full" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl lg:text-2xl">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent className="text-base md:text-lg">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-xl lg:text-2xl">
          Is it styled?
        </AccordionTrigger>
        <AccordionContent className="text-base md:text-lg">
          Yes. It uses Tailwind CSS for styling.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-xl lg:text-2xl">
          Is it animated?
        </AccordionTrigger>
        <AccordionContent className="text-base md:text-lg">
          Yes. It uses Framer Motion for animations.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default FaqCard;
