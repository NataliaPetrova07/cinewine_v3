import { Collapse } from "antd";
const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat rutrum felis non mattis. Morbi id posuere ante. Vestibulum augue felis, pulvinar et venenatis vel, imperdiet viverra tellus. Vestibulum aliquam quam urna, eu mollis augue eleifend sed. 
`;
const items = [
  {
    key: "1",
    label: (
      <span
        style={{
          color: "var(--n-700)",
          fontFamily: "Roboto Mono",
          textTransform: "uppercase",
          fontSize: "1.2rem",
        }}
      >
        What is cinewine?
      </span>
    ),
    children: <p className="collapsePanel">{text}</p>,
  },
  {
    key: "2",
    label: (
      <span
        style={{
          color: "var(--n-700)",
          fontFamily: "Roboto Mono",
          textTransform: "uppercase",
          fontSize: "1.2rem",
        }}
      >
        How does cinewine work?
      </span>
    ),
    children: <p className="collapsePanel">{text}</p>,
  },
  {
    key: "3",
    label: (
      <span
        style={{
          color: "var(--n-700)",
          fontFamily: "Roboto Mono",
          textTransform: "uppercase",
          fontSize: "1.2rem",
        }}
      >
        What can I expect from a cinewine event?
      </span>
    ),
    children: <p className="collapsePanel">{text}</p>,
  },
  {
    key: "4",
    label: (
      <span
        style={{
          color: "var(--n-700)",
          fontFamily: "Roboto Mono",
          textTransform: "uppercase",
          fontSize: "1.2rem",
        }}
      >
        Do I need to be a wine connoisseur to attend?
      </span>
    ),
    children: <p className="collapsePanel">{text}</p>,
  },
  {
    key: "5",
    label: (
      <span
        style={{
          color: "var(--n-700)",
          fontFamily: "Roboto Mono",
          textTransform: "uppercase",
          fontSize: "1.2rem",
        }}
      >
        Is there food served during Cinewine events?
      </span>
    ),
    children: <p className="collapsePanel">{text}</p>,
  },
  {
    key: "6",
    label: (
      <span
        style={{
          color: "var(--n-700)",
          fontFamily: "Roboto Mono",
          textTransform: "uppercase",
          fontSize: "1.2rem",
        }}
      >
        How do I buy tickets for Cinewine events?
      </span>
    ),
    children: <p className="collapsePanel">{text}</p>,
  },
  {
    key: "7",
    label: (
      <span
        style={{
          color: "var(--n-700)",
          fontFamily: "Roboto Mono",
          textTransform: "uppercase",
          fontSize: "1.2rem",
        }}
      >
        Are Cinewine events suitable for all ages?
      </span>
    ),
    children: <p className="collapseText">{text}</p>,
  },
];
const App = () => {
  const onChange = () => {};
  return <Collapse className="collapsePanel" style={{ backgroundColor: "var(--n-300)" }} items={items} bordered={false} defaultActiveKey={["1"]} onChange={onChange} />;
};
export default App;
