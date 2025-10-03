"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaWhatsapp, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
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
import { formSchema } from "@/validation/contactZodValidation";
import * as z from "zod";

const contactInfo = [
  {
    icon: <FaWhatsapp />,
    title: "হটসএপ সাপোর্ট",
    line1: "WhatsApp-এ তাৎক্ষণিক সাহায্য পান",
    line2: "আমাদের সাথে চ্যাট করুন",
    isLink: true,
  },
  {
    icon: <FaRegEnvelope />,
    title: "ইমেইল সাপোর্ট",
    line1: "support@bakite.com",
    line2: "আমরা ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করব",
    isLink: false,
    href: "mailto:support@bakite.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "আমাদের কল করুন",
    line1: "+৮৮০১ XXXX-XXXXXX",
    line2: "সোম-শুক্র সকাল ৯টা - সন্ধ্যা ৬টা (ঢাকা সময়)",
    isLink: false,
  },
];

export function Contact() {
  // 2. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      shopName: "",
      address: "",
      message: "",
    },
  });

  //Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("বার্তা পাঠানো হয়েছে!");
    form.reset();
  }

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
            যোগাযোগ করুন
          </h2>
          <p className="text-gray-600 mt-2">
            আপনার ব্যবসার প্রয়োজন জানান। আমাদের টিম আপনার সাথে যোগাযোগ করবে
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Contact Info */}
          <div className="space-y-6 flex flex-col justify-center">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center gap-6 p-6 border border-gray-200 rounded-2xl shadow-sm"
              >
                <div className="text-[#0aa9a2] bg-[#E0F7FA] p-4 rounded-full">
                  {React.cloneElement(info.icon, { size: 28 })}
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-gray-800">
                    {info.title}
                  </h3>
                  <p className="text-gray-600">{info.line1}</p>
                  {info.isLink ? (
                    <Button className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-lg border border-gray-300 shadow-sm hover:bg-gray-100 transition-transform transform hover:scale-105">{info.line1} </Button>
                  ) : (
                    <p className="text-gray-500 text-sm">{info.line2}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>পূর্ণ নাম *</FormLabel>
                        <FormControl>
                          <Input placeholder="আপনার নাম লিখুন" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ইমেইল ঠিকানা</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="আপনার ইমেইল ঠিকানা লিখুন"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ফোন নম্বর *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="আপনার ফোন নম্বর লিখুন"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="shopName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>দোকানের নাম *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="আপনার দোকানের নাম লিখুন"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ঠিকানা *</FormLabel>
                      <FormControl>
                        <Textarea placeholder="আপনার ঠিকানা লিখুন" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>আপনার বার্তা *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="আপনার বার্তা লিখুন"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#0aa9a2] hover:bg-[#08918a]"
                >
                  <LuSend className="mr-2 h-4 w-4" /> বার্তা পাঠান
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
