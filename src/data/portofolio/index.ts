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
      { icon: RiFirebaseFill, color: "fill-red-600" },
      { icon: RiTailwindCssFill, color: "text-slate-600" },
    ],
    link: "https://skripsi-riki.vercel.app/",
  },
];

export default dataPorto;
