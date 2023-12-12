import { useMediaQuery } from "react-responsive";
import Mobilenav from "./Mobilenav";
import Desktopnav from "./Desktopnav";

export default function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return <header>{isMobile ? <Mobilenav /> : <Desktopnav />}</header>;
}
