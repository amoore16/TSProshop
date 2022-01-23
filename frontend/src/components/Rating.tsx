import React from "react";

interface Props {
  value?: number;
  text?: string;
}

const Rating: React.FC<Props> = (props: Props) => {
  const { value, text } = props;
  const color = "#FFE000";
  return (
    <div className="rating">
      <span>
        <i
          style={{ color }}
          className={
            value
              ? value >= 1
                ? "fas fa-star"
                : value >= 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value
              ? value >= 2
                ? "fas fa-star"
                : value >= 1.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value
              ? value >= 3
                ? "fas fa-star"
                : value >= 2.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value
              ? value >= 4
                ? "fas fa-star"
                : value >= 3.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value
              ? value >= 5
                ? "fas fa-star"
                : value >= 4.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
              : "far fa-star"
          }
        ></i>
      </span>
    </div>
  );
};

export default Rating;
