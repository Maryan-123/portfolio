// Edit this file to add, remove, or update projects.
// `image` paths point into /public/projects/.
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
    github: "https://github.com/Maryan-123/hotel-booking",
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
    github: "https://github.com/Maryan-123/Carta-primary-secondary-school",
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
    category: "Full-Stack Application",
    name: "SyncFlow — Project Delivery Platform",
    description:
      "A real-time, Trello-style project management platform with drag-and-drop kanban boards, live collaboration and file attachments, for planning, execution and reporting in one workspace.",
    image: "/projects/syncflow.png",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Redis", "Socket.io"],
    features: [
      "Drag-and-drop kanban boards (dnd-kit)",
      "Real-time collaboration via WebSockets (Socket.io + Redis)",
      "JWT authentication",
      "File attachments (AWS S3)",
      "Reporting dashboard with charts",
      "Rate limiting and hardened API security (Helmet)",
    ],
    github: "https://github.com/Maryan-123/task-management-system",
    demo: null,
    caseStudy: {
      overview:
        "SyncFlow is a real-time project management platform inspired by tools like Trello, built to let teams plan, execute and report on projects together in one live workspace.",
      problem:
        "Many project management tools bury teams in visual noise, and few make real-time collaboration between team members feel truly instant.",
      solution:
        "Built a full-stack app with a drag-and-drop kanban board on the frontend and an Express/PostgreSQL backend, using Socket.io with a Redis adapter to broadcast board changes to every connected client instantly.",
      challenges:
        "Keeping board state in sync across multiple connected clients in real time, and securing file uploads and the API surface (rate limiting, JWT auth, hardened headers) without slowing the app down.",
      learned:
        "Learned to design a real-time architecture around WebSockets and a Redis adapter for horizontal scaling, and to structure a drag-and-drop UI backed by optimistic state updates.",
      future: [
        "Team roles and permissions",
        "Client-facing shared reports",
        "Notifications and activity feed",
      ],
    },
  },
  {
    slug: "freshbite",
    featured: true,
    category: "Frontend Web Application",
    name: "FreshBite — Online Food Ordering",
    description:
      "A full-featured, frontend-only food ordering platform built with vanilla HTML, CSS and JavaScript — restaurant browsing, cart, coupons, checkout and order tracking, all simulated client-side.",
    image: "/projects/freshbite.png",
    tech: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Restaurant listing with search, filters and sorting",
      "Menu pages with dish customization and reviews",
      "Cart with coupon codes and single-restaurant-per-order rule",
      "Checkout with simulated payment (Cash, Card, Mobile)",
      "5-stage simulated order tracking",
      "Account dashboard: order history, wishlist, saved addresses",
      "Dark mode, global search, and notification center",
    ],
    github: "https://github.com/Maryan-123/freshbite-food-ordering",
    demo: "https://maryan-123.github.io/freshbite-food-ordering/",
    caseStudy: {
      overview:
        "FreshBite is a frontend internship project simulating a complete food-ordering experience — browsing, cart, checkout and order tracking — entirely in the browser with no backend.",
      problem:
        "The task was to prove a full e-commerce food-ordering flow could be built with only HTML, CSS and vanilla JavaScript, with no frameworks or build tools.",
      solution:
        "Built every stage of the ordering journey — restaurant discovery, menu browsing, cart, coupons, checkout, simulated payment and 5-stage order tracking — using modular JavaScript files and `localStorage` for all persistence.",
      challenges:
        "Simulating stateful flows like authentication, payment outcomes and order tracking convincingly without any real backend or database.",
      learned:
        "Learned to structure a large vanilla-JS app into clean, single-responsibility modules (cart, auth, orders, reviews, etc.) the way a framework would otherwise organize for you.",
      future: [
        "Connect to a real backend and database",
        "Real payment gateway integration",
        "Live order tracking via WebSockets",
      ],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
