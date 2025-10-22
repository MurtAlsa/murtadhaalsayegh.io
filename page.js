import { useMemo } from "https://esm.sh/react";
import { motion } from "https://esm.sh/framer-motion";
import {
  Mail,
  Linkedin,
  GraduationCap,
  FileText,
  Award,
  BookOpen,
  Cpu,
  Shield,
  Users,
} from "https://esm.sh/lucide-react";

const DATA = {
  name: "Murtadha Alsayegh, Ph.D.",
  tagline:
    "Privacy-Preserving Multi-Robot Coordination • Reinforcement Learning • Agricultural Robotics",
  currentRole:
    "Postdoctoral Researcher, Dept. of Mechanical & Aerospace Engineering, University of Central Florida (UCF)",
  location: "Orlando, FL, USA",
  email: "murtadha.alsayegh@ucf.edu",
  scholarUrl: "https://scholar.google.com/citations?user=8JA9lXMAAAAJ&hl=en",
  linkedinUrl: "https://www.linkedin.com/in/murtadhaalsayegh/",
  websiteUrl: "",
  githubUrl: "",
  cvUrl: "https://murtalsa.github.io/murtadhaalsayegh.io/Murtadha_Alsayegh_CV.pdf",
  researchFocus: [
    "Privacy-preserving multi-robot coordination (DARA, PP-DARA, NNDARA, LDARA)",
    "Decentralized scheduling & secure multi-party computation (MPC) with Shamir’s Secret Sharing",
    "Actor-critic reinforcement learning for uncertain harvesting speeds",
    "Field robotics for agriculture—strawberry harvesting systems",
  ],
  publications: [
    {
      title:
        "A Secure MPC Framework for Decentralized Row Allocation in Cooperative Strawberry Harvesting",
      venue: "IEEE CASE, 2025",
      authors: "M. Alsayegh, Y. Xu",
      link: "https://ieeexplore.ieee.org/abstract/document/11163874",
    },
    {
      title:
        "Oblivious Markov Decision Processes for Robust Robotic Policy Execution",
      venue: "IEEE CDC, 2023",
      authors: "M. Alsayegh et al.",
      link: "https://ieeexplore.ieee.org/abstract/document/10383231/",
    },
    {
      title:
        "Decentralized Multi-Robot Information Gathering from Unknown Spatial Fields",
      venue: "IEEE RA-L, 2023",
      authors: "M. Alsayegh, A. Newaz, L. Bobadilla",
      link: "https://ieeexplore.ieee.org/abstract/document/10093018",
    },
  ],
  education: [
    {
      degree: "Ph.D., Computer Science",
      org: "Florida International University (FIU)",
      year: "2024",
    },
    {
      degree: "M.S., Software Engineering",
      org: "University of Michigan–Dearborn",
      year: "",
    },
    {
      degree: "B.S., Computer Science",
      org: "Lawrence Technological University",
      year: "",
    },
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
    {
      date: "Oct 2025",
      text: "Phone interview for Research Scientist (Reinforcement Learning) at Boston Dynamics.",
    },
    {
      date: "2025",
      text: "IEEE CASE paper on Secure MPC for strawberry harvesting coordination.",
    },
  ],
};

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
        React.createElement("h2", {
          className: "text-2xl font-semibold tracking-tight",
          children: title,
        })
      ),
      children
    )
  );

export default function PersonalPage() {
  const hasAnyLinks = useMemo(
    () =>
      DATA.linkedinUrl || DATA.scholarUrl || DATA.githubUrl || DATA.websiteUrl,
    []
  );

  // Add sections for anchor navigation
  return React.createElement(
    "div",
    { className: "min-h-screen bg-gradient-to-b from-white to-slate-50" },
    // --- Header ---
    React.createElement(
      "header",
      {
        className:
          "sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b",
      },
      React.createElement(
        "div",
        {
          className:
            "max-w-6xl mx-auto px-4 py-3 flex items-center justify-between",
        },
        React.createElement(
          "div",
          { className: "flex items-center gap-3" },
          React.createElement(Cpu, { className: "w-6 h-6" }),
          React.createElement("span", { className: "font-semibold" }, DATA.name)
        ),
        React.createElement(
          "nav",
          { className: "hidden md:flex gap-6 text-sm" },
          ["About", "Research", "Publications", "Teaching", "Service", "Contact"].map(
            (n) =>
              React.createElement(
                "a",
                { key: n, href: `#${n.toLowerCase()}`, className: "hover:underline" },
                n
              )
          )
        )
      )
    ),

    // --- Sections ---
    React.createElement(
      Section,
      { id: "about", icon: Cpu, title: "About" },
      React.createElement("div", {},
        React.createElement("p", { className: "mb-2", children: DATA.tagline }),
        React.createElement("p", { className: "mb-2", children: DATA.currentRole }),
        React.createElement("p", { className: "mb-2", children: DATA.location })
      )
    ),
    React.createElement(
      Section,
      { id: "research", icon: Shield, title: "Research Focus" },
      React.createElement("ul", { className: "list-disc pl-5" },
        DATA.researchFocus.map((item, i) => React.createElement("li", { key: i }, item))
      )
    ),
    React.createElement(
      Section,
      { id: "publications", icon: BookOpen, title: "Publications" },
      React.createElement("ul", { className: "list-disc pl-5" },
        DATA.publications.map((pub, i) =>
          React.createElement("li", { key: i },
            React.createElement("a", { href: pub.link, target: "_blank", rel: "noreferrer", className: "text-blue-600 underline" }, pub.title),
            ` (${pub.venue}) - ${pub.authors}`
          )
        )
      )
    ),
    React.createElement(
      Section,
      { id: "teaching", icon: Award, title: "Teaching" },
      React.createElement("ul", { className: "list-disc pl-5" },
        DATA.teaching.map((item, i) => React.createElement("li", { key: i }, item))
      )
    ),
    React.createElement(
      Section,
      { id: "service", icon: Users, title: "Service" },
      React.createElement("ul", { className: "list-disc pl-5" },
        DATA.service.map((item, i) => React.createElement("li", { key: i }, item))
      )
    ),
    React.createElement(
      Section,
      { id: "contact", icon: Mail, title: "Contact" },
      React.createElement("div", { className: "flex flex-wrap gap-3" },
        DATA.email && React.createElement("a", { href: `mailto:${DATA.email}`, className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:shadow-sm" }, React.createElement(Mail, { className: "w-4 h-4" }), "Email"),
        DATA.linkedinUrl && React.createElement("a", { href: DATA.linkedinUrl, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:shadow-sm" }, React.createElement(Linkedin, { className: "w-4 h-4" }), "LinkedIn"),
        DATA.scholarUrl && React.createElement("a", { href: DATA.scholarUrl, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:shadow-sm" }, React.createElement(GraduationCap, { className: "w-4 h-4" }), "Google Scholar"),
        DATA.cvUrl && React.createElement("a", { href: DATA.cvUrl, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:shadow-sm" }, React.createElement(FileText, { className: "w-4 h-4" }), "Resume / CV")
      )
    )
  );
}
