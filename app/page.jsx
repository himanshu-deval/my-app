import CompanyCarousel from "@/components/CompanyCarousel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Description } from "@radix-ui/react-dialog";
import {
  ArrowRight,
  BarChart,
  Calendar,
  ChevronRight,
  Layout,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import faqs from "./data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const features = [
    {
      title: "Feature 1",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: Layout,
    },
    {
      title: "Feature 2",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: Calendar,
    },
    {
      title: "Feature 3",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: BarChart,
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col items-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradiant-title pb-6 flex flex-col">
          Streamline Your WorkFlow with
          <span className="flex mx-auto gap-3 sm:gap-4 items-center">
            <Image
              src={"/logo2.png"}
              width={400}
              height={80}
              className="h-14 sm:h-24 w-auto object-contain"
              alt="Zscrum Logo"
            />
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Empower your team with intutive project management solutions
        </p>
        <div>
          <Link href={"/onboarding"}>
            <Button size={"lg"} className={"mr-4"}>
              Get Started <ChevronRight size={18} className="ml-1" />{" "}
            </Button>
          </Link>
          <Link href={"/onboarding"}>
            <Button size={"lg"} variant={"outline"} className={"mr-4"}>
              Learn More <ChevronRight size={18} className="ml-1" />{" "}
            </Button>
          </Link>
        </div>
      </section>
      <section id="features" className="bg-gray-900 py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Key Features</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((item, index) => {
              return (
                <Card key={index} className="bg-gray-800">
                  <CardContent className="pt-6">
                    <item.icon className="h-12 w-12 mb-4 text-blue-300" />
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.Description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <section id="Crousel" className=" py-20">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Trusted by industry leaders
          </h3>
          <CompanyCarousel />
        </div>
      </section>
      <section id="Crousel" className="bg-gray-900 py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Frequently answered Questions
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faqs, index) => {
              return (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faqs?.question}</AccordionTrigger>
                  <AccordionContent>{faqs?.answer}</AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>
      <section id="Crousel" className=" py-20 text-center px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Ready to transfrom your life
          </h3>
          <p className="text-xl mb-12">
            Join thousands of the teams using Zscrum to Streamline their
            Projects and boost their productivity
          </p>
          <Link href={"/onboarding"}>
            <Button size="lg" className={"animate-bounce"}>
              Start For Free <ArrowRight className="ml-2 h-5 w-5 " />{" "}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
