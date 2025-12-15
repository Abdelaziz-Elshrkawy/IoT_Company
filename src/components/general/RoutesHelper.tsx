import { Routes } from "@/types/enums";
import {
  Book,
  BoxIcon,
  Briefcase,
  HomeIcon,
  PercentCircle,
} from "lucide-react";
import { TbExclamationCircle } from "react-icons/tb";

export const routes = [
  {
    path: Routes.Home,
    name: "Home",
    icon: <HomeIcon className="inline pr-1" />,
  },
  {
    path: Routes.Products,
    name: "Products",
    icon: <BoxIcon className="inline pr-1" />,
  },
  {
    path: Routes.Offers,
    name: "Offers",
    icon: <PercentCircle className="inline pr-1" />,
  },
  {
    path: Routes.Career,
    name: "Career",
    icon: <Briefcase className="inline pr-1" />,
  },
  {
    path: Routes.Courses,
    name: "Courses",
    icon: <Book className="inline pr-1 text-2xl" />,
  },
  {
    path: Routes.About,
    name: "About",
    icon: <TbExclamationCircle className="inline pr-1 text-2xl" />,
  },
];
