import * as z from "zod";

export const formSchema = z.object({
  fullName: z.string().min(2, { message: "পূর্ণ নাম আবশ্যক।" }),
  email: z.string().email({ message: "সঠিক ইমেইল ঠিকানা দিন।" }),
  phone: z.string().min(11, { message: "সঠিক ফোন নম্বর দিন।" }),
  shopName: z.string().min(2, { message: "দোকানের নাম আবশ্যক।" }),
  address: z.string().min(5, { message: "ঠিকানা আবশ্যক।" }),
  message: z.string().min(10, { message: "বার্তাটি কমপক্ষে ১০ অক্ষরের হতে হবে।" }),
});
