"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Download } from "lucide-react";
import { personalInfo } from "@/data/content";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Let&apos;s Build <span className="text-primary">Something</span> Great
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                I&apos;m always open to discussing backend architecture, software design, and innovative opportunities. Whether it&apos;s a job, internship, or a community project, I&apos;d love to hear from you.
              </p>

              <div className="space-y-6">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Email Me</p>
                    <p className="font-bold">{personalInfo.email}</p>
                  </div>
                </a>

                <div className="flex gap-4">
                  <a 
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center gap-4 p-4 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all group"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Github className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Github</p>
                      <p className="font-bold">@matyos</p>
                    </div>
                  </a>
                  <a 
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center gap-4 p-4 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all group"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">LinkedIn</p>
                      <p className="font-bold">/in/matyos</p>
                    </div>
                  </a>
                </div>

                <a 
                  href="/cv.pdf"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-primary text-white font-bold hover:opacity-90 transition-opacity"
                >
                  <Download size={20} /> Download Full CV
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl border border-border bg-card shadow-2xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest ml-1">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="How can I help you?"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-foreground text-background font-bold hover:opacity-90 transition-opacity"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
