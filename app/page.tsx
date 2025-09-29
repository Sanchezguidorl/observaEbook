import { Analytics } from "@vercel/analytics/next";
import ObservaBook from "./ObservaBook";

export default function Home() {
  return (
    <main>
      <ObservaBook />
      <Analytics />
    </main>
  );
}
