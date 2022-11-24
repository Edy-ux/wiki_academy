import '../styles/globals.css';
import SideBar from './components/dropDown/SideBar';
import Header from './Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Wi Academy</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.5.4/dist/flowbite.min.css"
        />
        {/* <link sizes="192x192" rel="icon" href="/sim.png" /> */}
        <meta property="og:type" content="article"></meta>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <script src="https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"></script>
        <Header />
        <main className="mt-20 ">
          <div className="grid grid-cols-5 divide-x-2 gap-4">
              <SideBar />
            {/* element above fixed */}
            <div className="col-span-4">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
