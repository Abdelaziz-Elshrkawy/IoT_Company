"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a1526] px-4">
      <div className="max-w-xl w-full space-y-8 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center"
        >
          Contact Us
        </motion.h1>

        <p className="text-center text-gray-300">
          We’d love to hear from you! Please fill out the form below and we'll
          get back to you shortly.
        </p>

        <form className="bg-white p-6 rounded-xl shadow-md space-y-6 text-black">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="John Doe" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Your message..."
              rows={4}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#0a1526] text-white hover:bg-[#121d33]"
          >
            Send Message
          </Button>
        </form>
      </div>
    </main>
  );
}
