import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

// Define the team members' data
const teamMembers = [
  {
    name: "আবদুল্লাহ রহমান",
    role: "সহ-প্রতিষ্ঠাতা এবং সিইও",
    avatar: "https://github.com/shadcn.png", // Replace with actual image path
    social: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      email: "mailto:abdullah@example.com",
    },
  },
  {
    name: "ফাতেমা খান",
    role: "সহ-প্রতিষ্ঠাতা এবং সিটিও",
    avatar: "https://github.com/shadcn.png", // Replace with actual image path
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      email: "mailto:fatema@example.com",
    },
  },
  {
    name: "রহিম আহমেদ",
    role: "পণ্য প্রধান",
    avatar: "https://github.com/shadcn.png", // Replace with actual image path
    social: {
      linkedin: "https://linkedin.com",
      email: "mailto:rahim@example.com",
    },
  },
];

export function TeamSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-16 bg-[#E6F4F4]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
              আমাদের টিম
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-md">
              বাংলাদেশের খুচরা ক্রেডিট ইকোসিস্টেম ডিজিটাল করতে কাজ করছেন এমন
              প্রতিশ্রুতিবদ্ধ ব্যক্তিবর্গ
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden rounded-2xl shadow-lg">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <Avatar className="mb-4 h-24 w-24 border-4 border-white">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <div className="mt-4 flex space-x-2">
                  {member.social.facebook && (
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-lg border-none bg-white hover:bg-gray-100"
                    >
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="h-5 w-5 text-[#008585]" />
                      </a>
                    </Button>
                  )}
                  {member.social.instagram && (
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-lg border-none bg-white hover:bg-gray-100"
                    >
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="h-5 w-5 text-[#008585]" />
                      </a>
                    </Button>
                  )}
                  {member.social.linkedin && (
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-lg border-none bg-white hover:bg-gray-100"
                    >
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5 text-[#008585]" />
                      </a>
                    </Button>
                  )}
                  {member.social.email && (
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-lg border-none bg-white hover:bg-gray-100"
                    >
                      <a href={member.social.email}>
                        <Mail className="h-5 w-5 text-[#008585]" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button className="rounded-lg bg-[#008585] px-8 text-white hover:bg-[#006A6A]">
            আরও দেখুন
          </Button>
        </div>
      </div>
    </section>
  );
}
