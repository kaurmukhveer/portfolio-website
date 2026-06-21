import bloomMemoryImg from "../assets/Zen_Garden_Image.png";

const projects = [
  {
    id: 1,
    title: "GreenCare Lawn Services",
    category: "UI/UX Design",
    description:
      "A React-based lawn care booking system featuring customer booking and service-provider management workflows.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    prototypeUrl: "https://greencare-lawn-service.vercel.app/",
    route: "/service-site"
  },

  {
  id: 2,
  title: "Bloom Memory",
  category: "UI/UX Design & React Development",
  description:
    "A React-based memory matching game featuring two gameplay paths: a calming nature-inspired experience and an adventure-themed challenge mode. Players select difficulty levels and themed environments while testing memory through card matching mechanics. The interface incorporates visual hierarchy, Gestalt principles, responsive design, feedback systems, and theme-based user experiences.",
  image:
    bloomMemoryImg,
  prototypeUrl: "	https://bloom-memory.vercel.app/",
  route: "/memory-game"
},

  {
    id: 3,
    title: "E-Commerce Website",
    category: "Frontend Development",
    description:
      "An e-commerce experience emphasizing clean product presentation and navigation.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    status: "Coming Soon",
    route: "/ecommerce"
  },

  {
    id: 4,
    title: "Analytics Dashboard",
    category: "Data Visualization",
    description:
      "A dashboard UI concept designed for analytics, insights, and data-driven decisions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    status: "Coming Soon",
    route: "/analytics"
  }
];

export default projects