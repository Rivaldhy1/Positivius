/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

const MainLayout = ({ children }) => {
  return (
    <main className="relative bg-white">
      <Navbar />
      <div className="w-full min-h-screen">{children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;
