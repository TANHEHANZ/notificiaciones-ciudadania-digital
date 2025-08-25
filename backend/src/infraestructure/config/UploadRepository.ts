import { PropsUpload } from "@/modules/approvals/individual/service/upload";
import config from "./config";

export const ConfigUploadRepository: PropsUpload[] = [
  {
    key: "sistema_id",
    value: config.sistem_id,
    type: "text",
  },
  {
    key: "collector",
    value: "presupuesto",
    type: "file",
  },
];

//   const configUpload = [
//     ...ConfigUploadRepository,
//     {
//       key: "file",
//       value: data.documento,
//       type: "file" as const,
//     },
//   ];
