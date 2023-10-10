import React from "react";
import PropTypes from "prop-types";
import { MemeSvgViewerWrapper } from "./MemeSvgViewer.styled";

const MemeSvgViewer = (props) => {
  const [state, setstate] = useState({});

  useEffect(() => {
    return () => {
      second;
    };
  }, []);

  return (
    <div className={style.MemeSvgViewer} data-testid="MemeSvgViewer">
      MemeSvgViewer Component
    </div>
  );
};

MemeSvgViewer.propTypes = {};

MemeSvgViewer.defaultProps = {};

export default MemeSvgViewer;
