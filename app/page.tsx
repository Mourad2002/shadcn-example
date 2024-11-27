"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as React from "react"
import { Moon, MoonIcon, Sun } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Switch } from "@/components/ui/switch"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useTheme } from "next-themes"


export default function Home() {
  const { setTheme } = useTheme()

  return (
    <div className="p-8 space-y-16 bg-background text-foreground">
      {/* Intro Section */}
      <section className="p-8 border border-border rounded-md space-y-4">
        <h1 className="text-4xl font-extrabold text-primary">Shadcn/UI Showcase</h1>
        <p className="text-lg">
          Explore dynamic buttons, input fields, progress bars, and skeleton loaders using Shadcn/UI.
        </p>
      </section>

      {/* Buttons Section */}
      <section className="p-8 border border-border rounded-md space-y-4">
        <h2 className="text-2xl font-semibold">Dynamic Buttons</h2>
        <p>Explore buttons of different variants, sizes, and states.</p>
        <div className="space-y-4">
          <div className="space-x-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
          <div className="space-x-4">
            <Button variant="default" size="sm">
              Small
            </Button>
            <Button variant="default" size="lg">
              Large
            </Button>
            <Button variant="default" disabled>
              Disabled
            </Button>
          </div>
        </div>
      </section>

      {/* Input Fields Section */}
      <section className="p-8 border border-border rounded-md space-y-4">
        <h2 className="text-2xl font-semibold">Accessible Input Fields</h2>
        <p>Effortlessly create forms with styled input fields.</p>
        <div className="space-y-4">
          <Input placeholder="Enter your name" />
          <Input type="password" placeholder="Enter your password" />
          <Input type="search" placeholder="Search..." />
          <Input disabled placeholder="Disabled input" />
        </div>
      </section>

  {/* Accordion Section */}
  <section className="p-8 border border-border rounded-md space-y-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Click here for Accordion!!</AccordionTrigger>
          <AccordionContent>
            Congrats you have unlocked all the secrets hidden here!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
  </section>

  {/* Accordion Section */}
  <section className="p-8 border border-border rounded-md space-y-4">
      <Carousel>
      <CarouselContent>
        <CarouselItem>First Item in the Carousel</CarouselItem>
        <CarouselItem>Second Item in the Carousel</CarouselItem>
        <CarouselItem>Third Item in the Carousel</CarouselItem>
        <CarouselItem>Fourth Item in the Carousel</CarouselItem>
        <CarouselItem>Fourth Item in the Carousel</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>


 
  <section className="p-8 border border-border rounded-md space-y-4">
    <h1>Airplane Mode</h1>
    <Switch />
  </section>

  <section className="p-8 border border-border rounded-md space-y-4">
    <h1>Click here to enable Dark Mode!</h1>
  <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </section>



      {/* Conclusion Section */}
      <section className="p-8 border border-border rounded-md space-y-4">
        <h2 className="text-2xl font-semibold">That's Just the Beginning!</h2>
        <p>Shadcn offers a wide range of components to elevate your projects. Dive deeper and explore its full potential!</p>
        <Button variant="secondary">Learn More</Button>
      </section>
    </div>
  );
}