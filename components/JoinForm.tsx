"use client"

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Pen, Sparkles } from 'lucide-react';

// Define the form schema using Zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  motivation: z.string().min(10, {
    message: "Please tell us a bit more about your motivation (min. 10 characters).",
  }),
});

const JoinForm: React.FC = () => {
  // 1. Define the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      motivation: "",
    },
  });

  // 2. Define a submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // This is where you would send the data to your backend
    console.log("Form submitted!", values);
    // You could show a success message here
  }

  return (
    <section id="join-section" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Animated Background Elements - Matching Hero & Members */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 sm:-left-40 w-32 h-32 sm:w-96 sm:h-96 bg-[#2d5a3d]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 sm:-right-40 w-28 h-28 sm:w-80 sm:h-80 bg-[#c85a25]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 sm:w-72 sm:h-72 bg-[#1e5f5a]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[#c85a25]" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#c85a25] to-[#d97638]">
              Join the Club
            </h2>
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[#c85a25]" />
          </div>
          <p className="mt-4 sm:mt-5 text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to be part of our community? Take the first step and apply today.
          </p>
        </div>
        
        {/* Form Card */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-gray-200/50 animate-fade-in-up [animation-delay:0.2s]">
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="space-y-6 sm:space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base sm:text-lg font-semibold text-gray-700">Full Name</FormLabel>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-[#2d5a3d] transition-colors" />
                        <FormControl>
                          <Input 
                            placeholder="" 
                            {...field} 
                            className="pl-12 h-12 sm:h-14 text-base sm:text-lg border-gray-300 focus:border-[#2d5a3d] focus:ring-[#2d5a3d] rounded-xl transition-all duration-300 hover:border-gray-400"
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base sm:text-lg font-semibold text-gray-700">Email Address</FormLabel>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-[#2d5a3d] transition-colors" />
                        <FormControl>
                          <Input 
                            placeholder="" 
                            type="email"
                            {...field} 
                            className="pl-12 h-12 sm:h-14 text-base sm:text-lg border-gray-300 focus:border-[#2d5a3d] focus:ring-[#2d5a3d] rounded-xl transition-all duration-300 hover:border-gray-400"
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Motivation Field */}
              <FormField
                control={form.control}
                name="motivation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base sm:text-lg font-semibold text-gray-700">Why do you want to join?</FormLabel>
                    <div className="relative group">
                      <Pen className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-[#2d5a3d] transition-colors" />
                      <FormControl>
                        <Textarea
                          placeholder=""
                          {...field}
                          className="pl-12 pt-3 min-h-[140px] text-base sm:text-lg border-gray-300 focus:border-[#2d5a3d] focus:ring-[#2d5a3d] rounded-xl transition-all duration-300 hover:border-gray-400 resize-none"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button 
                  type="submit" 
                  size="lg"
                  className="group bg-gradient-to-r from-[#c85a25] to-[#d97638] hover:from-[#d97638] hover:to-[#c85a25] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg sm:text-xl font-bold px-10 sm:px-16 py-6 sm:py-7 rounded-xl"
                >
                  <span>Join Now</span>
                  <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Button>
              </div>
            </form>
          </Form>
        </div>

        {/* Bottom Note */}
        <p className="text-center mt-8 text-sm sm:text-base text-gray-500 animate-fade-in-up [animation-delay:0.4s]">
          By joining, you agree to be part of an amazing community dedicated to growth and innovation.
        </p>
      </div>
    </section>
  );
}

export default JoinForm;