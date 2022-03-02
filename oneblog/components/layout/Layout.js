import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <main>
      <Navbar />
      {props.children}
      <Footer />
    </main>
  );
};

export default Layout;
