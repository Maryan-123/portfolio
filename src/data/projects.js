// Edit this file to add, remove, or update projects.
// `image` paths point into /public/projects/. `github` links default to the
// GitHub profile until each project's exact repository URL is confirmed —
// update them once you have the real repo links to avoid dead project-specific URLs.
export const projects = [
  {
    slug: "hotel-booking",
    featured: true,
    category: "Full-Stack Application",
    name: "Hotel Booking System",
    description:
      "A full-stack hotel reservation platform (Stay Haven) designed to simplify room discovery, availability checking and booking management for customers while providing administrators with tools to manage hotels, rooms, users and reservations.",
    image: "/projects/hotel-booking.png",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    features: [
      "Hotel search by destination, check-in/check-out dates and guests",
      "Room listings and availability",
      "Booking management",
      "Authentication (login & register)",
      "User dashboard",
      "Admin dashboard",
      "Responsive interface",
    ],
    github: "https://github.com/Maryan-123",
    demo: null,
    caseStudy: {
      overview:
        "Stay Haven is a booking platform built to give hotel guests a fast way to search and reserve rooms, while giving hotel staff a simple back office to manage inventory and reservations.",
      problem:
        "Small hotels often rely on manual, phone-based booking processes that are slow, error-prone, and hard to scale as demand grows.",
      solution:
        "Built a full-stack web application with a customer-facing search and booking flow — destination, check-in/check-out, guest count — backed by a relational database for hotels, rooms, users and reservations, plus a separate admin dashboard.",
      challenges:
        "Modeling room availability correctly across overlapping date ranges, and designing an authentication flow that cleanly separates customer and admin permissions.",
      learned:
        "Gained hands-on experience designing relational schemas for booking systems, and structuring a React frontend around role-based dashboards.",
      future: [
        "Payment integration",
        "Email notifications for bookings",
        "Review and rating system",
      ],
    },
  },
  {
    slug: "carta-school",
    featured: true,
    category: "Full-Stack Application",
    name: "Carta School Management System",
    description:
      "A school management platform for primary & secondary schools, giving administrators a live dashboard over students, parents, staff, academics, attendance and finances.",
    image: "/projects/carta-school.png",
    tech: ["React", "Node.js", "PostgreSQL"],
    features: [
      "Live-connected admin dashboard",
      "Student directory & parent records",
      "Staff & payroll management",
      "Subjects, teachers, attendance and schedule modules",
      "School population analytics",
      "Finance snapshot (collections, expenses, unpaid fees)",
      "Role-based sign-in",
    ],
    github: "https://github.com/Maryan-123",
    demo: null,
    caseStudy: {
      overview:
        "Carta School is a management portal built for primary and secondary schools, giving administrators one live dashboard over people, academics and finances instead of scattered spreadsheets.",
      problem:
        "Schools often track students, staff, attendance and fees across disconnected paper records or spreadsheets, making it hard to get an accurate, real-time view of the school.",
      solution:
        "Built a role-based admin portal with a live backend: a student/parent/staff directory, academic modules for subjects, attendance and schedules, and dashboard analytics for population and finance.",
      challenges:
        "Structuring the data model to connect people (students, parents, staff), academics (subjects, attendance, schedule) and finance (fees, payroll) without duplicating records.",
      learned:
        "Learned to design a multi-module dashboard where each section (people, academic, finance) reads from a shared live backend, and to visualize school-wide metrics clearly.",
      future: [
        "Parent-facing portal",
        "Automated fee reminders",
        "Exam results and report cards module",
      ],
    },
  },
  {
    slug: "syncflow",
    featured: true,
    category: "Project Management Tool",
    name: "SyncFlow — Project Delivery Platform",
    description:
      "A Trello-style project management platform for planning, execution, reporting and client communication in one collaborative workspace.",
    image: "/projects/syncflow.png",
    tech: ["React", "Node.js", "Tailwind CSS"],
    features: [
      "Project planning and execution boards",
      "Client communication tools",
      "Reporting dashboard",
      "Real-time collaboration",
      "Fast onboarding — no credit card required",
    ],
    github: "https://github.com/Maryan-123",
    demo: null,
    caseStudy: {
      overview:
        "SyncFlow is a collaborative workspace for teams to plan, execute, report on and communicate about projects without the visual clutter of typical project management tools.",
      problem:
        "Many project management tools bury teams in visual noise, splitting planning, reporting and client communication across too many disconnected views.",
      solution:
        "Designed a single, polished workspace centered on clarity — a clean landing experience leading into project boards, reporting and client-facing communication in one flow.",
      challenges:
        "Balancing feature depth (planning, execution, reporting, communication) against a genuinely uncluttered interface.",
      learned:
        "Focused on interface restraint — deciding what not to show is as important as the features themselves in a tool meant to reduce noise.",
      future: [
        "Kanban board with drag-and-drop",
        "Team roles and permissions",
        "Client-facing shared reports",
      ],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
