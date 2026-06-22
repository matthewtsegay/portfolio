"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/data/content";
import { Github, ExternalLink, ArrowLeft, Layers, Server, Shield, Cpu, ChevronRight } from "lucide-react";
import Link from "next/link";

const ProjectDetails = () => {
  const { slug } = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button 
            onClick={() => router.back()}
            className="text-primary hover:underline flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container px-4 md:px-6">
        {/* Navigation */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Hero Banner */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((s, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono border border-primary/20">
                  {s}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:opacity-90 transition-opacity"
              >
                <Github size={20} /> View Repository
              </a>
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-border rounded-xl font-bold hover:bg-muted transition-colors"
              >
                <ExternalLink size={20} /> Live Demo
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-video max-h-[220px] md:max-h-[260px] rounded-2xl bg-muted border border-border overflow-hidden relative group shadow-lg"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
              <span className="text-sm font-mono text-muted-foreground">Demo Video Placeholder</span>
            </div>
          </motion.div>
        </div>

        {/* Gallery */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Layers className="text-primary" /> Visual Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square max-h-[120px] rounded-xl bg-card border border-border flex items-center justify-center group overflow-hidden">
                <span className="text-xs font-mono text-muted-foreground group-hover:scale-110 transition-transform">Screenshot {i}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Details Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Shield className="text-primary" /> The Problem
              </h2>
              <div className="p-8 rounded-3xl border border-border bg-card/50 text-lg text-muted-foreground leading-relaxed">
                {project.problem}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Cpu className="text-primary" /> Architecture & Implementation
              </h2>
              <div className="p-8 rounded-3xl border border-border bg-card/50 space-y-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-primary flex items-center gap-2">
                    <Server size={18} /> System Overview
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.architecture}
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-bold text-primary">Core Features</h3>
                    <ul className="space-y-3">
                      {project.features.map((f, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <ChevronRight size={14} className="text-primary shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-bold text-primary">Technical Challenges</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.challenges}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="p-8 rounded-3xl border border-border bg-primary/5">
              <h3 className="font-bold mb-6 text-primary">Deployment Details</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center pb-4 border-b border-border/50">
                  <span className="text-muted-foreground">Hosting</span>
                  <span className="font-mono font-bold">{project.deployment}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border/50">
                  <span className="text-muted-foreground">Status</span>
                  <span className="flex items-center gap-1.5 text-green-500 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Production Ready
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Backend</span>
                  <span className="font-mono font-bold">{project.stack[1]}</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-border bg-card">
              <h3 className="font-bold mb-4">Need similar system?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                I can help architect and build scalable solutions tailored to your specific needs.
              </p>
              <Link 
                href="/#contact"
                className="block text-center py-3 rounded-xl bg-foreground text-background font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Hire Matyos
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
