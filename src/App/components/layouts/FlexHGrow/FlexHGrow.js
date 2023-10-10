import React from "react";
import PropTypes from "prop-types";
import { FlexHGrowWrapper } from "./FlexHGrow.styled";

const FlexHGrow = (props) => { 

  return (
    <div className={style.FlexHGrow} data-testid="FlexHGrow">
     {props.chlidren}
    </div>
  );
};

FlexHGrow.propTypes={
  children: PropTypes.any.isRequired,
};


FlexHGrow.defaultProps = {};

export default FlexHGrow;
