"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/sections/SectionHeading";
import { SectionShell } from "@/sections/SectionShell";
import { Mail, Calendar, ExternalLink, Code2, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <SectionShell id="contact" paddingY="py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something great"
          description="Ready to collaborate? I respond to every message in 24h."
        />
      </Reveal>

      <div className="mt-12 max-w-2xl mx-auto">
        <Reveal delayMs={100}>
          <GlassCard className="p-8 text-center">
            {/* Main CTA Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-black text-white mb-4">
                LET&apos;S BUILD SOMETHING GREAT
              </h3>
              
              <div className="space-y-3 text-sm leading-6 text-white/80 mb-8">
                <p>I reply to every message in 24h.</p>
                <p>Rates start at <strong className="text-white">$20/hour</strong>.</p>
                <p>Available for freelance work.</p>
              </div>

              {/* Primary Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  variant="primary"
                  href="malakhammza10@gmail.com"
                  className="flex items-center gap-2 justify-center"
                >
                  <Mail className="h-4 w-4" />
                  📧 Email Me
                </Button>
                
                <Button
                  variant="secondary"
                  href="https://calendly.com/your-calendly"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 justify-center"
                >
                  <Calendar className="h-4 w-4" />
                  📅 Schedule a Call (15min)
                </Button>
              </div>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/[0.10]" />
                </div>
                <div className="relative flex justify-center text-xs font-semibold text-white/55 uppercase tracking-[0.22em]">
                  <span className="bg-black/80 px-4">QUICK LINKS</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <motion.a
                  href="https://linkedin.com/in/malak-hamza-009529362"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-white/[0.10] bg-white/[0.05] hover:bg-white/[0.08] transition-colors"
                >
                  <ExternalLink className="h-6 w-6 text-cyan-300" />
                  <span className="text-xs font-medium text-white/80">LinkedIn</span>
                </motion.a>

                <motion.a
                  href="https://github.com/solsol-m"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-white/[0.10] bg-white/[0.05] hover:bg-white/[0.08] transition-colors"
                >
                  <Code2 className="h-6 w-6 text-cyan-300" />
                  <span className="text-xs font-medium text-white/80">GitHub</span>
                </motion.a>

                <motion.a
                  href="https://wa.me/+972597937823"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-white/[0.10] bg-white/[0.05] hover:bg-white/[0.08] transition-colors"
                >
                  <MessageCircle className="h-6 w-6 text-cyan-300" />
                  <span className="text-xs font-medium text-white/80">WhatsApp</span>
                </motion.a>

                <motion.a
                  href="mailto:malakhammza10@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-white/[0.10] bg-white/[0.05] hover:bg-white/[0.08] transition-colors"
                >
                  <Mail className="h-6 w-6 text-cyan-300" />
                  <span className="text-xs font-medium text-white/80">Email</span>
                </motion.a>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </SectionShell>
  );
}

