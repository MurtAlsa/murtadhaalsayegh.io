import React, { useMemo } from "https://esm.sh/react@18";

const motion = { div: "div" };

const makeIcon = (label) => (props = {}) =>
  React.createElement(
    "span",
    {
      ...props,
      style: { display: "inline-block", fontSize: "1rem", lineHeight: 1 },
      "aria-hidden": "true",
    },
    label
  );

const Mail = makeIcon("✉️");
const Linkedin = makeIcon("in");
const GraduationCap = makeIcon("🎓");
const FileText = makeIcon("📄");
const Award = makeIcon("🏅");
const BookOpen = makeIcon("📘");
const Cpu = makeIcon("⚙️");
const Shield = makeIcon("🛡️");
const Users = makeIcon("👥");
const Github = makeIcon("GitHub");
const Globe = makeIcon("🌐");

/** ====== DATA (edit freely) ====== **/
const DATA = {
  name: "Murtadha Alsayegh, Ph.D.",
  tagline: "Robotics • Multi-Agent Systems • Privacy-Preserving AI • Reinforcement Learning",
  currentRole: "Graduate Faculty Scholar, University of Central Florida (UCF)",
  location: "Orlando, FL, USA",
  email: "murtadha.alsayegh@ucf.edu",
  scholarUrl: "https://scholar.google.com/citations?user=8JA9lXMAAAAJ&hl=en",
  linkedinUrl: "https://www.linkedin.com/in/murtadhaalsayegh/",
  websiteUrl: "https://murtalsa.github.io/murtadhaalsayegh.io/",
  githubUrl: "https://github.com/MurtAlsa",
  cvUrl: "https://murtalsa.github.io/murtadhaalsayegh.io/MURTADHA_ALSAYEGH_CV.pdf",

  researchFocus: [
    "Artificial intelligence, robotics, multi-agent systems, and distributed autonomous systems",
    "Privacy-preserving AI, secure multi-party computation, and secure robotic communication",
    "Reinforcement learning, motion planning, and decision-making under uncertainty",
    "Human-robot collaboration and agricultural robotics for intelligent automation",
  ],

  publications: [
    { title: "Decentralized Row Allocation for Harvesting Robots with Uncertain Harvesting Speeds in an Actor-Critic Structure", venue: "ANNSIM, 2026 (Accepted)", authors: "M. Alsayegh, Y. Xu", link: "" },
    { title: "Differentiable Agent-Based Modeling for Multi-Echelon Supply Chains: Gradient-Based Optimization of Heterogeneous Policies at Scale", venue: "ANNSIM, 2026 (Accepted)", authors: "B. Soykan, M. Alsayegh, S. Mondesire, G. Rabadi", link: "" },
    { title: "When One Agent Reshapes Another: Cross-Hessian Interpretation of Local Coupling in Multi-Agent Reinforcement Learning", venue: "XAI 2026 Late-Breaking Work Proceedings (Accepted)", authors: "R. Shefin, D. Gupta, M. Alsayegh, S. Alqahtani", link: "" },
    { title: "A Secure Multi-Party Computation Framework for Decentralized Row Allocation in Cooperative Strawberry Harvesting Systems", venue: "IEEE CASE, 2025", authors: "M. Alsayegh, Y. Xu", link: "https://ieeexplore.ieee.org/abstract/document/11163874" },
    { title: "Oblivious Markov Decision Processes: Planning and Policy Execution", venue: "IEEE CDC, 2023", authors: "M. Alsayegh, J. Fuentes, L. Bobadilla, D. A. Shell", link: "https://ieeexplore.ieee.org/abstract/document/10383231/" },
    { title: "Decentralized Multi-Robot Information Gathering from Unknown Spatial Fields", venue: "IEEE RA-L, 2023", authors: "A. A. R. Newaz, M. Alsayegh, T. Alam, L. Bobadilla", link: "https://ieeexplore.ieee.org/abstract/document/10093018" },
    { title: "Privacy-Preserving Multi-Robot Task Allocation via Secure Multi-Party Computation", venue: "ECC, 2022", authors: "M. Alsayegh, P. Vanegas, A. A. R. Newaz, L. Bobadilla, D. A. Shell", link: "https://ieeexplore.ieee.org/abstract/document/9838150" },
    { title: "Lightweight Multi-Robot Communication Protocols for Information Synchronization", venue: "IEEE/RSJ IROS, 2020", authors: "M. Alsayegh, A. Dutta, P. Vanegas, L. Bobadilla", link: "https://ieeexplore.ieee.org/abstract/document/9341480" },
  ],

  education: [
    { degree: "Ph.D., Computer Science", org: "Florida International University, Miami, FL", year: "July 2024" },
    { degree: "M.S., Software Engineering", org: "University of Michigan-Dearborn, Dearborn, MI", year: "April 2013" },
    { degree: "B.S., Computer Science", org: "Lawrence Technological University, Southfield, MI", year: "December 2010" },
  ],

  highlights: [
    "Developed privacy-preserving algorithms and secure communication protocols for multi-agent robotic systems",
    "Designed decentralized motion planning methods for maximally informative robot trajectories in unknown spatial fields",
    "Advanced secure multi-party computation methods for task allocation, row allocation, and cooperative autonomy",
    "Contributed to USDA-funded agricultural robotics projects and interdisciplinary proposal development",
    "Mentored graduate, undergraduate, and high school students in robotics, AI, and secure autonomous systems",
    "Brought industrial automation and SCADA cybersecurity experience into cyber-physical systems research",
  ],

  teaching: [
    "Teaching assistant for CAP 4630 Artificial Intelligence at Florida International University",
    "Teaching assistant for CDA 4625 Introduction to Mobile Robotics at Florida International University",
    "Designed and graded assignments on intelligent agents, adversarial search, motion planning, and reinforcement learning",
    "AI4ALL Discover AI instructor and mentor, supporting student projects, presentations, ethical AI, privacy, and inclusion",
    "Graduate and undergraduate mentoring in robotics, AI, multi-agent systems, and secure autonomous systems",
  ],

  service: [
    "Reviewer for the European Control Conference (ECC), 2022",
    "Reviewer for the IEEE International Conference on Robotics and Automation (ICRA), 2023-2026",
    "Graduate Faculty Scholar contributing to modeling and simulation research and graduate education at UCF",
    "Collaborator on multidisciplinary AI, robotics, autonomous systems, and workforce-development initiatives",
  ],

  awards: [
    "Contributed to NSF, USDA-NIFA, and Department of Defense proposal development",
    "Supported USDA-funded agricultural robotics and intelligent automation research",
    "Mentored students and educators through robotics projects, with student recognition for research excellence",
  ],

  news: [
    { date: "2026", text: "Three papers accepted at ANNSIM 2026 and XAI 2026 on agricultural robotics, differentiable agent-based modeling, and multi-agent reinforcement learning." },
    { date: "Jan 2026", text: "Appointed Graduate Faculty Scholar at the University of Central Florida." },
    { date: "2025", text: "IEEE CASE paper published on secure multi-party computation for cooperative strawberry harvesting systems." },
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
                  "Github"
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
          React.createElement("h3", { className: "text-base font-semibold mb-2" }, "Funding & Mentoring"),
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
