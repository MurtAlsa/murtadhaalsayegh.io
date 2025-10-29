// Self-contained imports (no globals needed)
import React, { useMemo } from "https://esm.sh/react";
import { motion } from "https://esm.sh/framer-motion";
import {
  Mail, Linkedin, GraduationCap, FileText, Award, BookOpen, Cpu, Shield, Users, Github, Globe,
} from "https://esm.sh/lucide-react";

/** ====== DATA (edit freely) ====== **/
const DATA = {
  name: "Murtadha Alsayegh, Ph.D.",
  tagline: "Privacy-Preserving Multi-Robot Coordination • Reinforcement Learning • Agricultural Robotics",
  currentRole: "Postdoctoral Researcher, Dept. of Mechanical & Aerospace Engineering, University of Central Florida (UCF)",
  location: "Orlando, FL, USA",
  email: "murtadha.alsayegh@ucf.edu",
  scholarUrl: "https://scholar.google.com/citations?user=8JA9lXMAAAAJ&hl=en",
  linkedinUrl: "https://www.linkedin.com/in/murtadhaalsayegh/",
  websiteUrl: "https://murtalsa.github.io/murtadhaalsayegh.io/",
  githubUrl: "https://github.com/MurtAlsa",
  cvUrl: "https://murtalsa.github.io/murtadhaalsayegh.io/MURTADHA_ALSAYEGH_CV.pdf",

    researchFocus: [
    "Decentralized coordination and scheduling in multi-robot and cyber-physical systems",
    "Secure and privacy-preserving computation for cooperative autonomy and decision-making",
    "Learning-based control and reinforcement learning for dynamic and uncertain environments",
    "Robotics applications in precision agriculture and intelligent automation",
    ],

  publications: [
    { title: "A Secure MPC Framework for Decentralized Row Allocation in Cooperative Strawberry Harvesting", venue: "IEEE CASE, 2025", authors: "M. Alsayegh, Y. Xu", link: "https://ieeexplore.ieee.org/abstract/document/11163874" },
    { title: "Oblivious Markov Decision Processes for Robust Robotic Policy Execution", venue: "IEEE CDC, 2023", authors: "M. Alsayegh et al.", link: "https://ieeexplore.ieee.org/abstract/document/10383231/" },
    { title: "Decentralized Multi-Robot Information Gathering from Unknown Spatial Fields", venue: "IEEE RA-L, 2023", authors: "M. Alsayegh, A. Newaz, L. Bobadilla", link: "https://ieeexplore.ieee.org/abstract/document/10093018" },
    { title: "Lightweight Multi-Robot Communication Protocols for Information Synchronization", venue: "IEEE/RSJ IROS, 2020", authors: "M. Alsayegh et al.", link: "https://ieeexplore.ieee.org/abstract/document/9341480" },
    { title: "Privacy-Preserving Multi-Robot Task Allocation via Secure MPC", venue: "ECC, 2022", authors: "M. Alsayegh et al.", link: "https://ieeexplore.ieee.org/abstract/document/9838150" },
  ],

  education: [
    { degree: "Ph.D., Computer Science", org: "Florida International University (FIU)", year: "2024" },
    { degree: "M.S., Software Engineering", org: "University of Michigan–Dearborn", year: "" },
    { degree: "B.S., Computer Science", org: "Lawrence Technological University", year: "" },
  ],

  highlights: [
    "Designed decentralized auction-based algorithms for cooperative harvesters (DARA, LDARA)",
    "Integrated secure MPC and Shamir’s Secret Sharing for privacy-preserving scheduling",
    "Developed actor-critic policies robust to uncertain and partially observed velocities",
    "Applied frameworks to strawberry fields with help-evaluation and fallback strategies",
  ],

  teaching: [
    "Artificial Intelligence",
    "Reinforcement Learning",
    "Robotics & Autonomous Systems",
    "Algorithms & Data Structures",
    "Cyber-Physical Systems / ICS Security",
  ],

  service: [
    "IEEE member; reviewer for robotics and control venues",
    "Mentored graduate/undergraduate students and engaged in outreach",
  ],

  awards: [
    "High approval rates research impact indicators; national-interest aligned work (NIW)",
    "Talks at UCF AI in Agriculture Symposium (AgAAID 2025)",
  ],

  news: [
    // { date: "Oct 2025", text: "Phone interview for Research Scientist (Reinforcement Learning) at Boston Dynamics." },
    { date: "August 2025", text: "IEEE CASE paper on Secure MPC for strawberry harvesting coordination." },
  ],
};

/** ====== UI helpers ====== **/
const Section = ({ id, icon: Icon, title, children }) =>
  React.createElement(
    "section",
    { id, className: "scroll-mt-24 py-10" },
    React.createElement(
      "div",
      { className: "max-w-5xl mx-auto px-4" },
      React.createElement(
        "div",
        { className: "flex items-center gap-3 mb-6" },
        React.createElement(Icon, { className: "w-6 h-6" }),
        React.createElement("h2", { className: "text-2xl font-semibold tracking-tight" }, title)
      ),
      children
    )
  );

/** ====== Page Component ====== **/
export default function PersonalPage() {
  const hasAnyLinks = useMemo(
    () => DATA.linkedinUrl || DATA.scholarUrl || DATA.githubUrl || DATA.websiteUrl || DATA.cvUrl,
    []
  );

  return React.createElement(
    "div",
    { className: "min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900" },

    /* Header */
    React.createElement(
      "header",
      { className: "sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b" },
      React.createElement(
        "div",
        { className: "max-w-6xl mx-auto px-4 py-3 flex items-center justify-between" },
        React.createElement(
          "div",
          { className: "flex items-center gap-3" },
          React.createElement(Cpu, { className: "w-6 h-6" }),
          React.createElement("span", { className: "font-semibold" }, DATA.name)
        ),
        React.createElement(
          "nav",
          { className: "hidden md:flex gap-6 text-sm" },
          ["about", "research", "publications", "teaching", "service", "contact"].map((slug) =>
            React.createElement(
              "a",
              { key: slug, href: `#${slug}`, className: "hover:underline" },
              slug[0].toUpperCase() + slug.slice(1)
            )
          )
        )
      )
    ),

    /* Hero */
    React.createElement(
      "section",
      { className: "pt-14 pb-10" },
      React.createElement(
        "div",
        { className: "max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center" },
        React.createElement(
          motion.div,
          { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 } },
          React.createElement("h1", { className: "text-3xl md:text-4xl font-bold leading-tight" }, DATA.name),
          React.createElement("p", { className: "mt-2 text-lg text-slate-700" }, DATA.tagline),
          React.createElement("p", { className: "mt-3 text-slate-600" }, DATA.currentRole),
          React.createElement("p", { className: "mt-1 text-slate-600" }, DATA.location),
          hasAnyLinks &&
            React.createElement(
              "div",
              { className: "mt-4 flex flex-wrap items-center gap-3 text-sm" },
              DATA.email &&
                React.createElement(
                  "a",
                  { href: `mailto:${DATA.email}`, className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:shadow-sm" },
                  React.createElement(Mail, { className: "w-4 h-4" }),
                  "Email"
                ),
              DATA.linkedinUrl &&
                React.createElement(
                  "a",
                  { href: DATA.linkedinUrl, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:shadow-sm" },
                  React.createElement(Linkedin, { className: "w-4 h-4" }),
                  "LinkedIn"
                ),
              DATA.scholarUrl &&
                React.createElement(
                  "a",
                  { href: DATA.scholarUrl, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:shadow-sm" },
                  React.createElement(GraduationCap, { className: "w-4 h-4" }),
                  "Google Scholar"
                ),
              DATA.githubUrl &&
                React.createElement(
                  "a",
                  { href: DATA.githubUrl, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:shadow-sm" },
                  React.createElement(Github, { className: "w-4 h-4" }),
                  "GitHub"
                ),
              DATA.cvUrl &&
                React.createElement(
                  "a",
                  { href: DATA.cvUrl, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:shadow-sm" },
                  React.createElement(FileText, { className: "w-4 h-4" }),
                  "CV"
                )
            )
        ),
        React.createElement(
          motion.div,
          { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 } },
          React.createElement(
            "div",
            { className: "relative rounded-3xl border p-5 shadow-sm bg-white" },
            React.createElement(
              "h3",
              { className: "text-base font-semibold mb-3 flex items-center gap-2" },
              React.createElement(Shield, { className: "w-4 h-4" }),
              "Research Focus"
            ),
            React.createElement(
              "ul",
              { className: "space-y-2 text-slate-700 list-disc pl-5" },
              DATA.researchFocus.map((item, i) => React.createElement("li", { key: i }, item))
            )
          )
        )
      )
    ),

    /* Research Highlights */
    Section({
      id: "research",
      icon: Cpu,
      title: "Research Highlights & Impact",
      children: React.createElement(
        "div",
        { className: "grid md:grid-cols-2 gap-6" },
        ...DATA.highlights.map((h, i) =>
          React.createElement(
            "div",
            { key: i, className: "rounded-3xl border p-5 bg-white shadow-sm" },
            React.createElement("p", { className: "text-slate-800" }, h)
          )
        )
      ),
    }),

    /* Publications */
    Section({
      id: "publications",
      icon: BookOpen,
      title: "Selected Publications",
      children: React.createElement(
        "div",
        { className: "space-y-4" },
        ...DATA.publications.map((p, i) =>
          React.createElement(
            "div",
            { key: i, className: "rounded-2xl border p-4 bg-white" },
            React.createElement("p", { className: "font-medium" }, p.title),
            React.createElement("p", { className: "text-sm text-slate-600" }, `${p.authors} — ${p.venue}`),
            p.link &&
              React.createElement(
                "a",
                { href: p.link, target: "_blank", rel: "noreferrer", className: "text-sm underline" },
                "View paper"
              )
          )
        )
      ),
    }),

    /* Teaching */
    Section({
      id: "teaching",
      icon: Users,
      title: "Teaching Interests",
      children: React.createElement(
        "ul",
        { className: "grid md:grid-cols-2 gap-3 list-disc pl-5" },
        ...DATA.teaching.map((t, i) => React.createElement("li", { key: i, className: "text-slate-800" }, t))
      ),
    }),

    /* Service & Awards */
    Section({
      id: "service",
      icon: Award,
      title: "Service & Recognition",
      children: React.createElement(
        "div",
        { className: "grid md:grid-cols-2 gap-6" },
        React.createElement(
          "div",
          { className: "rounded-3xl border p-5 bg-white shadow-sm" },
          React.createElement("h3", { className: "text-base font-semibold mb-2" }, "Service"),
          React.createElement(
            "ul",
            { className: "list-disc pl-5 space-y-2 text-slate-800" },
            ...DATA.service.map((s, i) => React.createElement("li", { key: i }, s))
          )
        ),
        React.createElement(
          "div",
          { className: "rounded-3xl border p-5 bg-white shadow-sm" },
          React.createElement("h3", { className: "text-base font-semibold mb-2" }, "Awards & Highlights"),
          React.createElement(
            "ul",
            { className: "list-disc pl-5 space-y-2 text-slate-800" },
            ...DATA.awards.map((a, i) => React.createElement("li", { key: i }, a))
          )
        )
      ),
    }),

    /* About / Education */
    Section({
      id: "about",
      icon: GraduationCap,
      title: "Education",
      children: React.createElement(
        "div",
        { className: "grid md:grid-cols-3 gap-4" },
        ...DATA.education.map((e, i) =>
          React.createElement(
            "div",
            { key: i, className: "rounded-2xl border p-4 bg-white" },
            React.createElement("p", { className: "font-medium" }, e.degree),
            React.createElement("p", { className: "text-sm text-slate-700" }, e.org),
            React.createElement("p", { className: "text-xs text-slate-500" }, e.year)
          )
        )
      ),
    }),

    /* News */
    Section({
      id: "news",
      icon: Globe,
      title: "News",
      children: React.createElement(
        "div",
        { className: "space-y-3" },
        ...DATA.news.map((n, i) =>
          React.createElement(
            "div",
            { key: i, className: "rounded-xl border p-4 bg-white flex items-start gap-3" },
            React.createElement("span", { className: "text-xs text-slate-500 min-w-[80px]" }, n.date),
            React.createElement("p", { className: "text-slate-800" }, n.text)
          )
        )
      ),
    }),

    /* Contact */
    Section({
      id: "contact",
      icon: Mail,
      title: "Contact",
      children: React.createElement(
        "div",
        { className: "rounded-3xl border p-6 bg-white shadow-sm" },
        React.createElement("p", { className: "text-slate-800" }, "Best way to reach me:"),
        React.createElement(
          "div",
          { className: "mt-2 flex flex-wrap gap-3 text-sm" },
          DATA.email &&
            React.createElement(
              "a",
              { href: `mailto:${DATA.email}`, className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:shadow-sm" },
              React.createElement(Mail, { className: "w-4 h-4" }),
              DATA.email
            ),
          DATA.linkedinUrl &&
            React.createElement(
              "a",
              { href: DATA.linkedinUrl, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:shadow-sm" },
              React.createElement(Linkedin, { className: "w-4 h-4" }),
              "LinkedIn"
            ),
          DATA.scholarUrl &&
            React.createElement(
              "a",
              { href: DATA.scholarUrl, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:shadow-sm" },
              React.createElement(GraduationCap, { className: "w-4 h-4" }),
              "Google Scholar"
            )
        ),
        React.createElement("p", { className: "mt-4 text-xs text-slate-500" },
          "For faculty applications, please refer to me as an Assistant Professor candidate. (Site auto-formats titles accordingly.)"
        )
      ),
    }),

    /* Footer */
    React.createElement(
      "footer",
      { className: "py-10 text-center text-xs text-slate-500" },
      `© ${new Date().getFullYear()} ${DATA.name}. All rights reserved.`
    )
  );
}
