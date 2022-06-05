import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from "react-icons/fi";
import Logo from "./../assets/logo-white.png";

export function Footer() {
  return (
    <div className="bg-footer-bg ">
      <div className="p-6">
        <img src={Logo} className="w-[120px]" alt="Logo white" />

        <div className="flex justify-between my-12">
          <div className="text-white flex flex-col gap-4">
            <h3 className="font-[900]">Terms & policies</h3>
            <a className="font-sm font-[300]" href="#">
              Terms of Service
            </a>
            <a className="font-sm font-[300]" href="#">
              Privacy Policy
            </a>
          </div>

          <div className="text-white flex flex-col gap-4">
            <h3 className="font-[900]">Company</h3>
            <a className="font-sm font-[300]" href="#">
              Home
            </a>
            <a className="font-sm font-[300]" href="#">
              About Us
            </a>
            <a className="font-sm font-[300]" href="#">
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex my-12">
          <div className="text-white flex flex-col gap-4">
            <h3 className="font-[900]">Contact</h3>
            <a className="font-sm font-[300]" href="#">
              (+62) 893912392190
            </a>
            <a className="font-sm font-[300]" href="#">
              agecnycr@gmail.com
            </a>
          </div>
        </div>

        <div className="flex my-12">
          <div className="text-white flex flex-col gap-4">
            <h3 className="font-[900]">Location</h3>
            <a className="font-sm font-[300]" href="#">
              PT Osiris Real Estate Internasional Jl. KH. Wahid Hasyim Kel
              No.10D Jakarta, Indonesia team@OsirisRealEstate.com
            </a>
          </div>
        </div>

        <div className="text-footer-bg flex flex-wrap items-center justify-evenly">
          <div className="bg-white w-9 h-9 rounded-full flex items-center justify-center">
            <FiFacebook />
          </div>

          <div className="bg-white w-9 h-9 rounded-full flex items-center justify-center">
            <FiInstagram />
          </div>

          <div className="bg-white w-9 h-9 rounded-full flex items-center justify-center">
            <FiLinkedin />
          </div>

          <div className="bg-white w-9 h-9 rounded-full flex items-center justify-center">
            <FiMail />
          </div>

          <div className="bg-white w-9 h-9 rounded-full flex items-center justify-center">
            <FiTwitter />
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-white" />

      <div className="p-6">
        <p className="text-white font-[300] text-sm text-center">
          Copyright @ 2022 Agency Creative. All Right Reserved
        </p>
      </div>
    </div>
  );
}
