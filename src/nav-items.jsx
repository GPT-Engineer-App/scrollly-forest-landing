import { Home, User, Award, Briefcase, Eye } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/#about",
    icon: <User className="h-4 w-4" />,
  },
  {
    title: "Achievements",
    to: "/#achievements",
    icon: <Award className="h-4 w-4" />,
  },
  {
    title: "Projects",
    to: "/#projects",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    title: "Vision",
    to: "/#vision",
    icon: <Eye className="h-4 w-4" />,
  },
];
