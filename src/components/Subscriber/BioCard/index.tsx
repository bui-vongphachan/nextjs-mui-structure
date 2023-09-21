import { SectionTitle } from "@/components/Core/Typography";
import { Customer } from "@/types/customer";
import { Fragment } from "react";
import { Table } from "./style";

const SubscriberBioCard = (props: { customer: Customer }) => {
  if (!props.customer)
    return <SectionTitle color="danger">ບໍ່ພົບຂໍ້ມູນບຸກຄົນນີ້</SectionTitle>;

  const info = [
    {
      key: "ຂໍ້ມູນທົ່ວໄປ-1",
      names: ["ຊື່", "ນາມສະກຸນ", "ເພດ"],
      values: [
        props.customer.firstName,
        props.customer.lastName,
        props.customer.gender,
      ],
    },
    {
      key: "ຂໍ້ມູນທົ່ວໄປ-2",
      names: ["ບ້ານ", "ເມືອງ", "ແຂວງ"],
      values: [
        props.customer.village.name,
        props.customer.district.name,
        props.customer.province.name,
      ],
    },
    {
      key: "ຂໍ້ມູນທົ່ວໄປ-3",
      names: ["ອາຊີບ", "ລົງທະບຽນທີ່", "ເມື່ອ"],
      values: [
        props.customer.occupation?.name,
        "...",
        new Date(props.customer.createdAt).toLocaleDateString("en-GB"),
      ],
    },
  ];

  return (
    <Table>
      {info.map((item) => {
        return (
          <Fragment key={item.key}>
            <thead>
              <tr>
                {item.names.map((name, index) => {
                  return <th key={item.key + index + name}>{name}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                {item.values.map((value, index) => {
                  return <td key={item.key + index}>{value}</td>;
                })}
              </tr>
            </tbody>
          </Fragment>
        );
      })}
    </Table>
  );
};

export default SubscriberBioCard;
