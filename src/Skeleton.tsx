import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Skeleton.css";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  circle?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "1rem",
  circle = false,
  className = "",
  style = {},
}) => {
  const baseStyle = {
    width,
    height,
    borderRadius: circle ? "50%" : "4px",
    ...style,
  };

  return (
    <div className={classNames("skeleton-loader", className)}
      style={baseStyle}
    />
  );
};

Skeleton.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  circle: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Skeleton;
