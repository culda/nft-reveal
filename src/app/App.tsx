import RevealBox from "./components/RevealBox";
import useMouseAnimation from "./hooks/useMouseAnimation";
import MouseAnimation from "./components/MouseAnimation";

export default function App() {
  const [mouseX, mouseY, setXY, signalFromBox, enabled] = useMouseAnimation();

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center items-center h-screen">
        <RevealBox
          url={
            "https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01.jpg"
          }
          setXY={setXY}
          signalFromBox={(isInside) => signalFromBox(0, isInside)}
        />

        <RevealBox
          url={
            "https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01.jpg"
          }
          setXY={setXY}
          signalFromBox={(isInside) => signalFromBox(1, isInside)}
        />

        <RevealBox
          url={
            "https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01.jpg"
          }
          setXY={setXY}
          signalFromBox={(isInside) => signalFromBox(2, isInside)}
        />

        <RevealBox
          url={
            "https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01.jpg"
          }
          setXY={setXY}
          signalFromBox={(isInside) => signalFromBox(3, isInside)}
        />
      </div>
      <MouseAnimation enabled={enabled} x={mouseX} y={mouseY} />
    </>
  );
}
