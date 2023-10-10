import React from "react";
import PropTypes from "prop-types";
import { MemeFormWrapper } from "./MemeForm.styled";

const MemeForm = (props) => {
  const [state, setstate] = useState({});

  useEffect(() => {
    return () => {
      second;
    };
  }, []);

  return (
    <div className={style.MemeForm} data-testid="MemeForm">
      MemeForm Component
    </div>
  );
};

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
