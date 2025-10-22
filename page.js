// Uses global React, FramerMotion, Lucide from index.html
const { useMemo } = React;
const { motion } = FramerMotion;
const {
  Mail, Linkedin, GraduationCap, FileText, Award, BookOpen, Cpu, Shield, Users, Github, Globe,
} = Lucide;

const DATA = {
  name: "Murtadha Alsayegh, Ph.D.",
  tagline: "Privacy-Preserving Multi-Robot Coordination • Reinforcement Learning • Agricultural Robotics",
  currentRole: "Postdoctoral Researcher, Dept. of Mechanical & Aerospace Engineering, University of Central Florida (UCF)",
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
      title: "A Secure MPC Framework for Decentralized Row Allocation in Cooperative Strawberry Harvesting",
      venue: "IEEE CASE, 2025",
      authors: "M. Alsayegh, Y. Xu",
      link: "https://ieeexplore.ieee.org/abstract/document/11163874",
    },
    {
      title: "Oblivious Markov Decision Processes for Robust Robotic Policy Execution",
      venue: "IEEE CDC, 2023",
      authors: "M. Alsayegh et al.",
      link: "https://ieeexplore.ieee.org/abstract/document/10383231/",
    },
    {
      title: "Decentralized Multi-Robot Information Gathering from Unknown Spatial Fields",
      venue: "IEEE RA-L, 2023",
      authors: "M. Alsayegh, A. Newaz, L. Bobadilla",
      link: "https://ieeexplore.ieee.org/abstract/document/10093018",
    },
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
    { date: "Oct 2025", text: "Phone interview for Research Scientist (Reinforcement Learning) at Boston Dynamics." },
    { date: "2025", text: "IEEE CASE paper on Secure MPC for strawberry harvesting coordination." },
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
        React.createElement("h2", { className: "text-2xl font-semibold tracking-tight" }, title)
      ),
      children
    )
  );

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

    /* About Section */
    Section({
      id: "about",
      icon: Award,
      title: "About Me",
      children: React.createElement("p", { className: "text-slate-700", children: "Passionate researcher with a focus on privacy-preserving multi-robot coordination and reinforcement learning, applied to agricultural robotics." }),
    }),

    /* Research Section */
    Section({
      id: "research",
      icon: BookOpen,
      title: "Research Interests",
      children: React.createElement(
        "ul",
        { className: "space-y-2 text-slate-700 list-disc pl-5" },
        DATA.researchFocus.map((item, i) => React.createElement("li", { key: i }, item))
      ),
    }),

    /* Publications Section */
    Section({
      id: "publications",
      icon: FileText,
      title: "Publications",
      children: React.createElement(
        "ul",
        { className: "space-y-2 text-slate-700 list-disc pl-5" },
        DATA.publications.map((pub) =>
          React.createElement(
            "li",
            { key: pub.title },
            React.createElement(
              "a",
              {
                href: pub.link,
                target: "_blank",
                rel: "noreferrer",
                className: "text-blue-600 hover:underline",
              },
              pub.title
            ),
            ` — ${pub.authors}, ${pub.venue}`
          )
        )
      ),
    }),

    /* Teaching Section */
    Section({
      id: "teaching",
      icon: Users,
      title: "Teaching",
      children: React.createElement(
        "ul",
        { className: "space-y-2 text-slate-700 list-disc pl-5" },
        DATA.teaching.map((subject) => React.createElement("li", { key: subject }, subject))
      ),
    }),

    /* Service Section */
    Section({
      id: "service",
      icon: Shield,
      title: "Service",
      children: React.createElement(
        "ul",
        { className: "space-y-2 text-slate-700 list-disc pl-5" },
        DATA.service.map((item) => React.createElement("li", { key: item }, item))
      ),
    }),

    /* Awards Section */
    Section({
      id: "awards",
      icon: Award,
      title: "Awards & Honors",
      children: React.createElement(
        "ul",
        { className: "space-y-2 text-slate-700 list-disc pl-5" },
        DATA.awards.map((award) => React.createElement("li", { key: award }, award))
      ),
    }),

    /* News Section */
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
    })
  );
}
