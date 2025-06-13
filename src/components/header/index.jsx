import { CiMenuBurger, CiReceipt } from "react-icons/ci";
import { MdHexagon } from "react-icons/md";
import { useMediaQuery } from 'react-responsive';
import { DesktopContainer, MobileContainer } from "./styles";
import { Input } from "../input";
import { FiLogOut, FiSearch } from "react-icons/fi";
import { Button } from "../button";

function MobileHeader() {
  return (
    <MobileContainer>
      <CiMenuBurger />
      <h1><MdHexagon />food explorer</h1>
      <CiReceipt />
    </MobileContainer>
  );
}

function DesktopHeader() {
  return (
    <DesktopContainer>
      <h1><MdHexagon />food explorer</h1>
      <Input placeholder="Busque por pratos ou ingredientes" icon={FiSearch} />
      <Button title="Pedidos" />
      <FiLogOut />
    </DesktopContainer>
  );
}

export function Header() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <>
      {isDesktop ? <DesktopHeader /> : <MobileHeader />}
    </>
  );
}
