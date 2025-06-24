import { Routes } from "@/types/enums";
import { BoxIcon, Briefcase, HomeIcon, PercentCircle } from "lucide-react";
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
    path: Routes.About,
    name: "About",
    icon: <TbExclamationCircle className="inline text-2xl pr-1" />,
  },
];
