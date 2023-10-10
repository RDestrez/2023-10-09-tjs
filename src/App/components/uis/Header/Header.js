import React from "react";
import PropTypes from "prop-types";
import { HeaderWrapper } from "./Header.styled";

const Header = (props) => {
  const [state, setstate] = useState({});

  useEffect(() => {
    return () => {
      second;
    };
  }, []);

  return (
    <div className={style.Header} data-testid="Header">
      Header Component
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
