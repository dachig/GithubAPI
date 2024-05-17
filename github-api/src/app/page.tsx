import { InputUsername } from "./components/home/inputUsername";
import LandingPageHeader from "./components/home/landingPageHeading";
import Polygon from "./components/home/polygon";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-gray-900 py-40 sm:py-64 h-screen">
      <div className="mx-auto max-w-2xl gap-y-16 px-8 lg:max-w-none">
        <div className="max-w-xl lg:max-w-lg mx-auto">
         <LandingPageHeader/>
          <InputUsername />
        </div>
       <Polygon/>
      </div>
    </main>
  );
}
