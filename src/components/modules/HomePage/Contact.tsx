// "use client";

// import React from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { FaWhatsapp, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";
// import { LuSend } from "react-icons/lu";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { formSchema } from "@/validation/contactZodValidation";
// import * as z from "zod";

// const contactInfo = [
//   {
//     icon: <FaWhatsapp />,
//     title: "হটসএপ সাপোর্ট",
//     line1: "WhatsApp-এ তাৎক্ষণিক সাহায্য পান",
//     line2: "আমাদের সাথে চ্যাট করুন",
//     isLink: true,
//   },
//   {
//     icon: <FaRegEnvelope />,
//     title: "ইমেইল সাপোর্ট",
//     line1: "support@bakite.com",
//     line2: "আমরা ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করব",
//     isLink: false,
//     href: "mailto:support@bakite.com",
//   },
//   {
//     icon: <FaPhoneAlt />,
//     title: "আমাদের কল করুন",
//     line1: "+৮৮০১ XXXX-XXXXXX",
//     line2: "সোম-শুক্র সকাল ৯টা - সন্ধ্যা ৬টা (ঢাকা সময়)",
//     isLink: false,
//   },
// ];

// export function Contact() {
//   // 2. Define your form.
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       fullName: "",
//       email: "",
//       phone: "",
//       shopName: "",
//       address: "",
//       message: "",
//     },
//   });

//   //Define a submit handler.
//   function onSubmit(values: z.infer<typeof formSchema>) {
//     console.log(values);
//     alert("বার্তা পাঠানো হয়েছে!");
//     form.reset();
//   }

//   return (
//     <section className="bg-white py-16 md:py-20">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
//             যোগাযোগ করুন
//           </h2>
//           <p className="text-gray-600 mt-2">
//             আপনার ব্যবসার প্রয়োজন জানান। আমাদের টিম আপনার সাথে যোগাযোগ করবে
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Left Column: Contact Info */}
//           <div className="space-y-6 flex flex-col justify-center">
//             {contactInfo.map((info, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-6 p-6 border border-gray-200 rounded-2xl shadow-sm"
//               >
//                 <div className="text-[#0aa9a2] bg-[#E0F7FA] p-4 rounded-full">
//                   {React.cloneElement(info.icon, { size: 28 })}
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="font-bold text-lg text-gray-800">
//                     {info.title}
//                   </h3>
//                   <p className="text-gray-600">{info.line1}</p>
//                   {info.isLink ? (
//                     <Button className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-lg border border-gray-300 shadow-sm hover:bg-gray-100 transition-transform transform hover:scale-105">{info.line1} </Button>
//                   ) : (
//                     <p className="text-gray-500 text-sm">{info.line2}</p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right Column: Contact Form */}
//           <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
//             <Form {...form}>
//               <form
//                 onSubmit={form.handleSubmit(onSubmit)}
//                 className="space-y-6"
//               >
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   <FormField
//                     control={form.control}
//                     name="fullName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>পূর্ণ নাম *</FormLabel>
//                         <FormControl>
//                           <Input placeholder="আপনার নাম লিখুন" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>ইমেইল ঠিকানা</FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="আপনার ইমেইল ঠিকানা লিখুন"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   <FormField
//                     control={form.control}
//                     name="phone"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>ফোন নম্বর *</FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="আপনার ফোন নম্বর লিখুন"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="shopName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>দোকানের নাম *</FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="আপনার দোকানের নাম লিখুন"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//                 <FormField
//                   control={form.control}
//                   name="address"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>ঠিকানা *</FormLabel>
//                       <FormControl>
//                         <Textarea placeholder="আপনার ঠিকানা লিখুন" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="message"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>আপনার বার্তা *</FormLabel>
//                       <FormControl>
//                         <Textarea
//                           placeholder="আপনার বার্তা লিখুন"
//                           rows={4}
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <Button
//                   type="submit"
//                   size="lg"
//                   className="w-full bg-[#0aa9a2] hover:bg-[#08918a]"
//                 >
//                   <LuSend className="mr-2 h-4 w-4" /> বার্তা পাঠান
//                 </Button>
//               </form>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("বার্তা পাঠানো হয়েছে!");
    form.reset();
  }

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-10 text-center md:mb-12 lg:mb-16">
          <h2 className="mb-3 text-2xl font-bold text-gray-800 sm:text-3xl md:mb-4 md:text-3xl lg:text-5xl">
            যোগাযোগ করুন
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-md">
            আপনার ব্যবসার প্রয়োজন জানান। আমাদের টিম আপনার সাথে যোগাযোগ করবে
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column: Contact Info Cards */}
          <div className="flex flex-col justify-center space-y-4 md:space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-2xl border border-gray-200 p-5 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-center sm:gap-5 sm:p-6 md:gap-6"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#E0F7FA] text-[#0aa9a2] sm:h-16 sm:w-16">
                  {React.cloneElement(info.icon, {
                    size: 24,
                    className: "sm:w-7 sm:h-7",
                  })}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-1 sm:space-y-2">
                  <h3 className="text-base font-bold text-gray-800 sm:text-lg">
                    {info.title}
                  </h3>
                  <p className="text-sm text-gray-600 sm:text-base">
                    {info.line1}
                  </p>
                  {info.isLink ? (
                    <Button
                      className="mt-2 w-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition-all hover:scale-105 hover:bg-gray-100 sm:w-auto sm:px-6 sm:py-3"
                      size="sm"
                    >
                      চ্যাট শুরু করুন
                    </Button>
                  ) : (
                    <p className="text-xs text-gray-500 sm:text-sm">
                      {info.line2}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Contact Form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 md:space-y-6"
              >
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium sm:text-base">
                          পূর্ণ নাম *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="আপনার নাম লিখুন"
                            className="h-11 text-sm sm:h-12 sm:text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium sm:text-base">
                          ইমেইল ঠিকানা
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="আপনার ইমেইল ঠিকানা লিখুন"
                            className="h-11 text-sm sm:h-12 sm:text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Phone and Shop Name Row */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium sm:text-base">
                          ফোন নম্বর *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="আপনার ফোন নম্বর লিখুন"
                            className="h-11 text-sm sm:h-12 sm:text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="shopName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium sm:text-base">
                          দোকানের নাম *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="আপনার দোকানের নাম লিখুন"
                            className="h-11 text-sm sm:h-12 sm:text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Address Field */}
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium sm:text-base">
                        ঠিকানা *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="আপনার ঠিকানা লিখুন"
                          className="min-h-[80px] resize-none text-sm sm:min-h-[90px] sm:text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium sm:text-base">
                        আপনার বার্তা *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="আপনার বার্তা লিখুন"
                          rows={4}
                          className="resize-none text-sm sm:text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full bg-[#0aa9a2] text-sm font-semibold transition-all hover:bg-[#08918a] sm:h-14 sm:text-base"
                >
                  <LuSend className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> বার্তা পাঠান
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
