import Logo from "./../assets/Logo.svg";
import { FiMenu } from "react-icons/fi";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <img src={Logo} alt="Logo Landing" />
      <FiMenu />
    </header>
  );
}
