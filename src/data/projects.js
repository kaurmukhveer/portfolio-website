import bloomMemoryImg from "../assets/BloomMemoryGameImage.png";
import serviceSiteImg from "../assets/GreenCareLawnServiceSite.png";
import ecommerceImg from "../assets/TechNestEcommerceSite.png";
import analyticsImg from "../assets/CanadianFoodPriceExplorer.png";

const projects = [
  {
    id: 1,
    title: "GreenCare Lawn Services",
    category: "UI/UX Design",
    description:
      "A React-based lawn care booking system featuring customer booking and service-provider management workflows.",
    image:
      serviceSiteImg,
    prototypeUrl: "https://greencare-lawn-service.vercel.app/",
    route: "/service-site"
  },

  {
  id: 2,
  title: "Bloom Memory",
  category: "UI/UX Design & React Development",
  description:
    "A React-based memory matching game featuring multiple difficulty levels, themed gameplay paths, responsive design, and visual design principles including Gestalt laws, visual hierarchy, and accessibility considerations.",
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
      ecommerceImg,
    prototypeUrl: "https://technest-ecommerce-azure.vercel.app/",
    route: "/ecommerce"
  },

  {
    id: 4,
    title: "Analytics Dashboard",
    category: "Data Visualization",
    description:
      "A dashboard UI concept designed for analytics, insights, and data-driven decisions.",
    image:
      analyticsImg,
    prototypeUrl: "https://food-price-dashboard.vercel.app/",
    route: "/analytics"
  }
];

export default projects