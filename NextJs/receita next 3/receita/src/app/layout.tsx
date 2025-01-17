import React from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  console.log("montando layout");

  return (
    <html lang="en">
      <body>
        <Home />
        {children}
        <Footer />
      </body>
    </html>
  );
}


export function Footer() {
  return (
    <footer>
      <p>©Dobradinha no mesmo ano</p>
    </footer>
  );
}

export function Home() {
  return (
    <div>
      <div>Tricampeao Brasileiro</div>
    </div>
  );
}