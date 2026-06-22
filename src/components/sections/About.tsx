"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { personalInfo, education } from "@/data/content";
import {
  User,
  Target,
  Shield,
  BookOpen,
  MapPin,
  GraduationCap,
  Sparkles,
  Quote,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: 0.2 + i * 0.14,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const highlights = [
  {
    icon: Target,
    title: "Vision",
    description: "Building technology companies that solve societal problems.",
    gradient: "from-primary/20 to-accent/10",
  },
  {
    icon: Shield,
    title: "Core Values",
    description: "Discipline, consistency, and structured problem-solving.",
    gradient: "from-accent/20 to-primary/10",
  },
  {
    icon: BookOpen,
    title: "Focus",
    description: "Deep expertise in backend systems and software design.",
    gradient: "from-primary/15 to-cream-dark/30",
  },
];

const stats = [
  { label: "CGPA", value: education.cgpa, suffix: "" },
  { label: "Status", value: "Final", suffix: "-year" },
  { label: "Focus", value: "Backend", suffix: "" },
];

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-80, 80], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-6, 6]), {
    stiffness: 300,
    damping: 30,
  });

  return (
    <motion.div
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const About = () => {
  const initials = personalInfo.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <section id="about" className="relative py-12 md:py-16 overflow-hidden about-gradient">
      {/* Ambient orbs */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="about-orb absolute -top-24 -left-24 w-80 h-80 rounded-full bg-primary/30 pointer-events-none"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="about-orb absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-accent/25 pointer-events-none"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="about-orb absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-primary/15 pointer-events-none"
      />

      <div className="relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/8 text-primary text-xs font-mono tracking-widest mb-8">
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <User size={14} />
                </motion.span>
                ABOUT ME
              </div>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight"
            >
              Engineering{" "}
              <span className="relative inline-block">
                <span className="text-primary">Impactful</span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-primary via-accent to-transparent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>{" "}
              Systems
            </motion.h2>

            {/* Profile chip */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <TiltCard className="inline-block">
                <div className="relative group">
                  <motion.div
                    className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 via-accent/30 to-primary/20 opacity-70 blur-sm"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="relative flex items-center gap-4 px-5 py-4 rounded-2xl glass shadow-lg">
                    <div className="relative">
                      <motion.div
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-md"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {initials}
                      </motion.div>
                      <motion.span
                        className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent border-2 border-card"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{personalInfo.name}</p>
                      <p className="text-xs text-muted-foreground font-mono">
                        {personalInfo.title.split("|")[0].trim()}
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>

              <div className="flex flex-wrap gap-2">
                <motion.span
                  variants={itemVariants}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-muted/80 text-muted-foreground border border-border/60"
                >
                  <MapPin size={12} className="text-primary" />
                  {personalInfo.location}
                </motion.span>
                <motion.span
                  variants={itemVariants}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-muted/80 text-muted-foreground border border-border/60"
                >
                  <GraduationCap size={12} className="text-primary" />
                  {education.school}
                </motion.span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-5 text-lg text-muted-foreground leading-relaxed mb-10">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {personalInfo.about}
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mb-10"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="text-center p-4 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm shadow-sm"
                >
                  <motion.p
                    className="text-2xl md:text-3xl font-bold text-primary"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {stat.value}
                    {stat.suffix && (
                      <span className="text-sm font-normal text-muted-foreground">
                        {stat.suffix}
                      </span>
                    )}
                  </motion.p>
                  <p className="text-xs font-mono text-muted-foreground mt-1 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Philosophy quote */}
            <motion.blockquote
              variants={itemVariants}
              className="relative pl-6 pr-4 py-5 rounded-2xl border-l-4 border-primary/50 bg-card/50 backdrop-blur-sm"
            >
              <Quote
                size={20}
                className="absolute top-4 right-4 text-primary/20"
              />
              <p className="text-foreground/90 italic leading-relaxed">
                &ldquo;{personalInfo.philosophy}&rdquo;
              </p>
              <footer className="mt-3 flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <Sparkles size={12} className="text-accent" />
                Engineering Philosophy
              </footer>
            </motion.blockquote>
          </motion.div>

          {/* Right column — highlight cards */}
          <div className="grid gap-5">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  whileHover={{
                    y: -6,
                    transition: { type: "spring", stiffness: 400, damping: 25 },
                  }}
                  className="group relative"
                >
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                  />
                  <div className="relative p-6 md:p-7 rounded-2xl border border-border/80 bg-card/70 backdrop-blur-md shadow-sm group-hover:border-primary/35 group-hover:shadow-lg group-hover:shadow-primary/5 transition-all duration-400">
                    <div className="flex items-start gap-5">
                      <motion.div
                        className="p-3.5 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 border border-primary/10"
                        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="text-primary" size={22} />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <motion.span
                            className="h-1.5 w-1.5 rounded-full bg-accent"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3,
                            }}
                          />
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <motion.div
                      className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.15, duration: 0.6 }}
                    />
                  </div>
                </motion.div>
              );
            })}

            {/* Interest tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap gap-2 pt-2 pl-1"
            >
              {personalInfo.terminalData.interest.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.08 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="px-4 py-2 rounded-full text-xs font-mono border border-primary/20 bg-primary/8 text-primary cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
