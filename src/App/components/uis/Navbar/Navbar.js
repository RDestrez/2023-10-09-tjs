import React from "react";
import PropTypes from "prop-types";
import { NavbarWrapper } from "./Navbar.styled";

const Navbar = (props) => {
  const [state, setstate] = useState({});

  useEffect(() => {
    return () => {
      second;
    };
  }, []);

  return (
    <div className={style.Navbar} data-testid="Navbar">
      Navbar Component
    </div>
  );
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
