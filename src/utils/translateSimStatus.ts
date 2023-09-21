import { SimStatus } from "@/types/sims";

export const translateSimStatus = (status: SimStatus) => {
  switch (status) {
    case SimStatus.APPROVED:
      return "ອະນຸມດັສຳເລັດ";
    case SimStatus.REJECTED:
      return "ປະຕິເສດ";
    case SimStatus.INITIATED:
      return "ກຳລັງກຽມເອກະສານ";
    default:
      return "ລໍຖ້າການອະນຸມັດ";
  }
};
