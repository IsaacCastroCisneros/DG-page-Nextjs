import footerBox from "../../interfaces/footerBox";
import Link from "next/link";
import { FooterList } from "./components/FooterList";
import Image from "next/image";

const footerBoxers: Array<footerBox> = [
  {
    header: "Certificado",
    content: (
      <>
        <p className="mb-[1rem]">
          Verifica la validez de tu certificado a traves de este botón.
        </p>
        <Link
          className="rounded-[.5rem] bg-[#fff] px-[12px] py-[6px] inline-block text-[#000]"
          href={{ pathname: "/buscar_certificado" }}
        >
          Verificar Certificado
        </Link>
      </>
    ),
  },
  {
    header: "Ayuda",
    content: (
      <FooterList />
    ),
  },
  {
    header:"ISO 9001:2015",
    content:
    <>
      <p>
      COD N°. CO18.00048/U
      </p>
      <Image src="/img/Iso9001.webp" width={150} height={95} alt="DG-Iso" />
    </>
  },
  {
    header: "Contáctanos",
    content: (
      <FooterList
        list={[
          "Visítanos:",
          "Av. Julio Cesar Tello 741 - Lince",
          "Fijo: (01) 555 6005",
          "info@desarrolloglobal.pe",
        ]}
      />
    ),
  },
];

export default footerBoxers