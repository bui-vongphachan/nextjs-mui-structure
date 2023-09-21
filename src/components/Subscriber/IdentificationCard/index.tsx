import { SectionSubTitle } from "@/components/Core/Typography";
import { SimProofDetail } from "@/types/sims";
import { PathPerson } from "@/utils/pathImages";
import Image from "next/image";
import { DataTable, ImageContainer } from "./style";
import { Fragment } from "react";

const SubscriberIdentificationCard = (props: { document: SimProofDetail }) => {
  if (!props.document)
    return (
      <SectionSubTitle color="danger">
        ບໍ່ພົບຂໍ້ມູນເອກະສານປະກອບການລົງທະບຽນ
      </SectionSubTitle>
    );

  const identification = [
    {
      key: 1,
      names: ["ປະເພດເອກະສານ", "ເລກທີເອກະສານ", "ເລກທີປະຈຳຕົວ"],
      values: [
        props.document.type?.name,
        props.document.ID_no,
        props.document.personalNo,
      ],
    },
    {
      key: 2,
      names: ["ວັນທີ່ອອກບັດ", "ວັນທີ່ໝົດອາຍຸ", "ສະຖານທີ່ອອກ"],
      values: [
        new Date(props.document.issueDate).toLocaleDateString("en-Gb"),
        new Date(props.document.expiryDate).toLocaleDateString("en-Gb"),
        props.document.issueAddress,
      ],
    },
  ];

  return (
    <div>
      <DataTable>
        {identification.map((item) => {
          return (
            <Fragment key={item.key}>
              <thead>
                <tr>
                  {item.names.map((name, index) => {
                    return <th key={`${name}-${index}`}>{name}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {item.values.map((value) => {
                    return <td key={value}>{value}</td>;
                  })}
                </tr>
              </tbody>
            </Fragment>
          );
        })}
      </DataTable>
      <ImageContainer>
        <h4>ຮູບພາບ</h4>
        <div>
          <Image
            fill
            src={PathPerson(props.document.personFile)}
            alt="pictures"
            sizes="100%"
          />
        </div>
      </ImageContainer>
    </div>
  );
};

export default SubscriberIdentificationCard;
