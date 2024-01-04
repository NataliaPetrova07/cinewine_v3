import { useTheme } from "@/contexts/ThemeProvider";
import NavItem from "./NavItem";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { Switch, IconButton } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

function Desktopnav() {
  const router = useRouter();
  const { toggleDarkMode, appliedTheme } = useTheme();

  return (
    <div className={styles.Desktopnav}>
      <Link href="/" className={styles.navitem}>
        <svg width="109" height="46" viewBox="0 0 109 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <style>
            {`
    .svg-fill { fill: ${appliedTheme === "dark" ? "var(--svg-fill-dark)" : "var(--svg-fill-light)"}; }
  `}
          </style>
          <path
            className="svg-fill"
            d="M8.78897 23.8632C3.64674 23.8632 0 20.1875 0 15.3579C0 10.5284 3.64674 6.94586 8.78897 6.94586C12.9036 6.94586 16.2064 9.4066 16.9862 13.3635H12.8103C12.1558 11.9299 10.6603 10.9028 8.78897 10.9028C6.10856 10.9028 4.20788 12.8652 4.20788 15.3579C4.20788 17.8506 6.10856 19.9064 8.78897 19.9064C10.659 19.9064 12.0932 18.9404 12.7783 17.5389H16.9862C16.2384 21.4638 12.8716 23.8632 8.78897 23.8632Z"
          />
          <path className="svg-fill" d="M19.8054 4.5833V0L24.2755 0V4.5833H19.8054ZM19.8054 23.3817V7.35754H24.2755V23.3804H19.8054V23.3817Z" />
          <path
            className="svg-fill"
            d="M32.0376 12.7986V23.3819H27.5764V7.38245H32.0376V10.0898C33.285 8.19174 35.4383 6.94586 37.6849 6.94586C41.2416 6.94586 43.3935 9.34311 43.3935 13.0155V23.3805H38.9323V14.2294C38.9323 12.3314 37.965 10.9297 35.8131 10.9297C34.1282 10.9297 32.7874 11.8948 32.039 12.7972L32.0376 12.7986Z"
          />
          <path
            className="svg-fill"
            d="M54.5216 23.8632C49.6596 23.8632 46.0758 20.2181 46.0758 15.2953C46.0758 10.6536 49.7223 6.94586 54.4589 6.94586C59.85 6.94586 62.7181 11.401 62.7181 15.9801H49.9715C50.2834 18.5661 52.0599 20.1235 54.5216 20.1235C56.2355 20.1235 57.8868 19.2509 58.5425 17.7867H62.5009C61.6599 21.5251 58.356 23.8619 54.5229 23.8619L54.5216 23.8632ZM50.2207 13.4887H58.4479C57.9495 11.6502 56.5474 10.5297 54.4896 10.5297C52.4318 10.5297 50.8125 11.6515 50.2194 13.4887H50.2207Z"
          />
          <path className="svg-fill" d="M66.019 26.0396V21.4564H70.5579V26.0396H66.019ZM66.019 44.8381V28.8152H70.5579V44.8381H66.019Z" />
          <path
            className="svg-fill"
            d="M78.2707 34.2536V44.8378H73.79V28.8384H78.2707V31.546C79.5235 29.6478 81.6861 28.4018 83.9424 28.4018C87.5146 28.4018 89.6759 30.7992 89.6759 34.4719V44.8378H85.1953V35.686C85.1953 33.7877 84.2238 32.386 82.0626 32.386C80.3703 32.386 79.0237 33.3511 78.272 34.2536H78.2707Z"
          />
          <path
            className="svg-fill"
            d="M100.769 45.3192C95.8872 45.3192 92.2886 41.674 92.2886 36.7512C92.2886 32.1096 95.9501 28.4018 100.706 28.4018C106.12 28.4018 109 32.857 109 37.436H96.2004C96.5135 40.022 98.2974 41.5795 100.769 41.5795C102.49 41.5795 104.148 40.7068 104.807 39.2426H108.782C107.937 42.981 104.619 45.3179 100.771 45.3179L100.769 45.3192ZM96.4506 34.9447H104.712C104.211 33.1061 102.803 31.9857 100.737 31.9857C98.6708 31.9857 97.0448 33.1074 96.4493 34.9447H96.4506Z"
          />
          <path
            className="svg-fill"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43.3331 34.6043C42.0568 30.6396 36.6847 30.6393 35.408 34.6045L34.1557 38.4935C34.1557 38.4936 34.1557 38.4936 34.1557 38.4937C31.6099 46.4018 20.6503 46.4017 18.1046 38.4936C18.1046 38.4935 18.1046 38.4936 18.1046 38.4936L15.1986 29.4664L19.2616 28.1627L22.1676 37.1899C23.4441 41.1555 28.8162 41.1555 30.0927 37.1899L31.3451 33.3007C31.3451 33.3006 31.3451 33.3007 31.3451 33.3007C33.8906 25.3947 44.8502 25.3917 47.3961 33.3008L48.6484 37.1911C48.6484 37.1912 48.6484 37.1913 48.6484 37.1913C49.925 41.1555 55.2972 41.1555 56.5736 37.1911L59.4809 28.1625L63.5438 29.4665L60.6365 38.495C60.6365 38.495 60.6365 38.495 60.6365 38.495C58.0907 46.4017 47.1312 46.4017 44.5855 38.495L44.5854 38.4948L43.3331 34.6043C43.3331 34.6043 43.3331 34.6044 43.3331 34.6043Z"
          />
        </svg>
      </Link>
      <NavItem href="/about" text="About" isActive={router.pathname === "/about"}></NavItem>
      <NavItem href="/events" text="Events" isActive={router.pathname === "/events"}></NavItem>
      <NavItem href="/contact" text="Contact" isActive={router.pathname === "/contact"}></NavItem>
      <NavItem href="/volunteer" text="Volunteer" isActive={router.pathname === "/volunteer"}></NavItem>
      <NavItem href="/sponsor" text="Sponsor" isActive={router.pathname === "/sponsor"}></NavItem>
      <div>
        <IconButton color="inherit" onClick={toggleDarkMode}>
          {appliedTheme === "dark" ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}
        </IconButton>
        <Switch checked={appliedTheme === "dark"} onChange={toggleDarkMode} />
      </div>
    </div>
  );
}

export default Desktopnav;
