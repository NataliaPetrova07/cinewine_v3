import { useTheme } from "@/contexts/ThemeProvider";
import Navbar from "./navbars/Navbar";
import Footer from "./footer/Footer";

const footerStyle = ({ appliedTheme }) => ({
  backgroundColor: appliedTheme === "dark" ? "var(--n-900)" : "var(--n-300)",
  color: appliedTheme === "dark" ? "var(--n-300)" : "var(--n-700)",
});

function Layout({ children }) {
  const { appliedTheme } = useTheme();

  const inlineStyles = footerStyle({ appliedTheme });
  return (
    <div style={inlineStyles}>
      <div className="contentContainer">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
