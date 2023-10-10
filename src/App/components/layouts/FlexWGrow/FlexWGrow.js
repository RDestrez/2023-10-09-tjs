import React from "react";
import PropTypes from "prop-types";
import { FlexWGrowWrapper } from "./FlexWGrow.styled";

const FlexWGrow = (props) => {


  return (
    <div className={style.FlexWGrow} data-testid="FlexWGrow">
      {props.chlidren}
    </div>
  );
};

FlexWGrow.propTypes={
  children: PropTypes.any.isRequired,
};

FlexWGrow.defaultProps = {};

export default FlexWGrow;
