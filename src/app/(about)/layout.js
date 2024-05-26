import InsightRoll from "../../components/About/InsightRoll";


const insights = [
    "This Product is under development, Stay tuned for updates!",
    "This Product is under development, Stay tuned for updates!",
    "This Product is under development, Stay tuned for updates!",
    "This Product is under development, Stay tuned for updates!",
    "This Product is under development, Stay tuned for updates!",
    "This Product is under development, Stay tuned for updates!",
    "This Product is under development, Stay tuned for updates!",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
