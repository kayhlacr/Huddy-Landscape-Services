import { useEffect, useState, useRef } from "react";
import "./ExpandableAboutRow.css";
import PlusIcon from "../../assets/PlusIcon.png";
import MinusIcon from "../../assets/MinusIcon.png";

export default function ExpandableAboutRow({
  headingText = "",
  paragraphText,
  paragraphClassName = "",
  img,
  imgClassName = "",
}) {
  const container = useRef(null);
  const [isParagraphOverflowing, setIsParagraphOverflowing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibilityStyle, setVisibilityStyle] = useState("");

  const checkOverflow = () => {
    if (container.current) {
      const containerElement = container.current;

      const isOverflowing =
        containerElement.scrollHeight > containerElement.clientHeight + 40;

      if (isOverflowing) {
        setIsParagraphOverflowing(true);
      } else {
        setIsParagraphOverflowing(false);
      }
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);

    if (isExpanded) {
      setVisibilityStyle("");
    } else {
      setVisibilityStyle("hidden");
    }
  };

  return (
    <>
      <div
        ref={container}
        className={`paragraph-container ${paragraphClassName} ${
          isExpanded ? "expanded" : ""
        }`}
      >
        <div className="title-button-container">
          <h2 className="about-h2">{headingText}</h2>
          {isParagraphOverflowing && (
            <button className="btn-expand" onClick={handleExpandClick}>
              <img
                src={isExpanded ? MinusIcon : PlusIcon}
                alt="Expand/Collapse"
              />
            </button>
          )}
        </div>
        <p>{paragraphText}</p>
      </div>
      <img src={img} alt="" className={`${imgClassName} ${visibilityStyle}`} />
    </>
  );
}
