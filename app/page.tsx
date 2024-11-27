"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
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



export default function Home() {

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



      {/* Conclusion Section */}
      <section className="p-8 border border-border rounded-md space-y-4">
        <h2 className="text-2xl font-semibold">That's Just the Beginning!</h2>
        <p>Shadcn offers a wide range of components to elevate your projects. Dive deeper and explore its full potential!</p>
        <Button variant="secondary">Learn More</Button>
      </section>
    </div>
  );
}