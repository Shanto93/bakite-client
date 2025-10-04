import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqItems from "./../../../../public/data/faq.json";

export default function FaqSection() {
  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">প্রশ্নোত্তর</h2>
        <p className="text-gray-500 mt-2">
          BakiTe সম্পর্কে প্রায়শই জিজ্ঞাসিত প্রশ্ন
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="border-b-0 mb-3"
          >
            <div className="border rounded-lg shadow-sm">
              <AccordionTrigger className="text-lg font-medium py-4 px-6 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600 px-6 pb-4">
                {item.answer}
              </AccordionContent>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
