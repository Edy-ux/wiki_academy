import '../styles/globals.css'
import Header from './Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html>
      <head>
        <title>SIM wikis</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="article"></meta>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
      </head>
      <body >
        <Header/>
        {/* <p><strong>Childrens....</strong></p><br />  */}
        {children}  
      </body>
    </html>
  );
}
