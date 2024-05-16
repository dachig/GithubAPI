import { InputUsername } from "./components/inputUsername";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 h-screen">
      <div className="mx-auto max-w-2xl gap-x-8 gap-y-16 px-4 lg:max-w-none">
        <div className="max-w-xl lg:max-w-lg mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Github users API
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Discover public Github repositories by simply entering an existing
            username below.
          </p>
          <InputUsername />
        </div>
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-primary-foreground opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </main>
  );
}
