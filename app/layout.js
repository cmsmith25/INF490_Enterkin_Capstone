import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export const metadata = {
  title: "First Baptist Church",
  description: "Welcome to the First Baptist Church of Norwich",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
