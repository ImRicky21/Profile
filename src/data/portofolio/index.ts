import { SiTypescript } from "react-icons/si";
import porto1 from "../../../public/Image/project/tekpend.jpg";
import {
  RiFirebaseFill,
  RiNextjsFill,
  RiNextjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";

const dataPorto = [
  {
    id: 1,
    imageUrl: porto1,
    title: "Frontend Website Teknologi Pendidikan",
    techstack: [
      { icon: RiNextjsFill, color: "text-slate-600" },
      { icon: RiFirebaseFill, color: "text-yellow-400" },
      { icon: RiTailwindCssFill, color: "text-sky-400" },
      { icon: SiTypescript, color: "text-blue-600" },
    ],
    link: "https://skripsi-riki.vercel.app/",
  },
];

export default dataPorto;
