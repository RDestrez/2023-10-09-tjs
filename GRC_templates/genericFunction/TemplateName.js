import React from "react";
import PropTypes from "prop-types";
import { TemplateNameWrapper } from "./TemplateName.styled";

const TemplateName = (props) => {
  const [state, setstate] = useState({});

  useEffect(() => {
    return () => {
      second;
    };
  }, []);

  return (
    <div className={style.TemplateName} data-testid="TemplateName">
      TemplateName Component
    </div>
  );
};

TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;
