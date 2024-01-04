import { useTheme } from "@/contexts/ThemeProvider";
import { Collapse } from "antd";

const App = () => {
  const { appliedTheme } = useTheme();

  const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat rutrum felis non mattis. Morbi id posuere ante. Vestibulum augue felis, pulvinar et venenatis vel, imperdiet viverra tellus. Vestibulum aliquam quam urna, eu mollis augue eleifend sed. 
`;

  const items = [
    {
      key: "1",
      label: (
        <span
          style={{
            color: appliedTheme === "dark" ? "var(--n-100)" : "var(--n-700)",
            fontFamily: "Roboto Mono",
            textTransform: "uppercase",
            fontSize: "1.2rem",
          }}
        >
          What is cinewine?
        </span>
      ),
      children: (
        <p
          style={{
            color: appliedTheme === "dark" ? "var(--n-100)" : "var(--n-700)",
          }}
          className="collapsePanel"
        >
          {text}
        </p>
      ),
    },
    {
      key: "2",
      label: (
        <span
          style={{
            color: appliedTheme === "dark" ? "var(--n-100)" : "var(--n-700)",
            fontFamily: "Roboto Mono",
            textTransform: "uppercase",
            fontSize: "1.2rem",
          }}
        >
          How does cinewine work?
        </span>
      ),
      children: (
        <p
          style={{
            color: appliedTheme === "dark" ? "var(--n-100)" : "var(--n-700)",
          }}
          className="collapsePanel"
        >
          {text}
        </p>
      ),
    },
    {
      key: "3",
      label: (
        <span
          style={{
            color: appliedTheme === "dark" ? "var(--n-100)" : "var(--n-700)",
            fontFamily: "Roboto Mono",
            textTransform: "uppercase",
            fontSize: "1.2rem",
          }}
        >
          What can I expect from a cinewine event?
        </span>
      ),
      children: (
        <p
          style={{
            color: appliedTheme === "dark" ? "var(--n-100)" : "var(--n-700)",
          }}
          className="collapsePanel"
        >
          {text}
        </p>
      ),
    },
    {
      key: "4",
      label: (
        <span
          style={{
            color: appliedTheme === "dark" ? "var(--n-100)" : "var(--n-700)",
            fontFamily: "Roboto Mono",
            textTransform: "uppercase",
            fontSize: "1.2rem",
          }}
        >
          Do I need to be a wine connoisseur to attend?
        </span>
      ),
      children: (
        <p
          style={{
            color: appliedTheme === "dark" ? "var(--n-100)" : "var(--n-700)",
          }}
          className="collapsePanel"
        >
          {text}
        </p>
      ),
    },
    {
      key: "5",
      label: (
        <span
          style={{
            color: appliedTheme === "dark" ? "var(--n-100)" : "var(--n-700)",
            fontFamily: "Roboto Mono",
            textTransform: "uppercase",
            fontSize: "1.2rem",
          }}
        >
          Is there food served during Cinewine events?
        </span>
      ),
      children: (
        <p
          style={{
            color: appliedTheme === "dark" ? "var(--n-100)" : "var(--n-700)",
          }}
          className="collapsePanel"
        >
          {text}
        </p>
      ),
    },
    {
      key: "6",
      label: (
        <span
          style={{
            color: appliedTheme === "dark" ? "var(--n-100)" : "var(--n-700)",
            fontFamily: "Roboto Mono",
            textTransform: "uppercase",
            fontSize: "1.2rem",
          }}
        >
          How do I buy tickets for Cinewine events?
        </span>
      ),
      children: (
        <p
          style={{
            color: appliedTheme === "dark" ? "var(--n-100)" : "var(--n-700)",
          }}
          className="collapsePanel"
        >
          {text}
        </p>
      ),
    },
    {
      key: "7",
      label: (
        <span
          style={{
            color: appliedTheme === "dark" ? "var(--n-100)" : "var(--n-700)",
            fontFamily: "Roboto Mono",
            textTransform: "uppercase",
            fontSize: "1.2rem",
          }}
        >
          Are Cinewine events suitable for all ages?
        </span>
      ),
      children: (
        <p
          style={{
            color: appliedTheme === "dark" ? "var(--n-100)" : "var(--n-700)",
          }}
          className="collapseText"
        >
          {text}
        </p>
      ),
    },
  ];

  const onChange = () => {};
  const panelStyle = {
    backgroundColor: appliedTheme === "dark" ? "var(--n-900)" : "var(--n-300)",
  };
  return <Collapse className="collapsePanel" style={panelStyle} items={items} bordered={false} defaultActiveKey={["1"]} onChange={onChange} />;
};
export default App;
