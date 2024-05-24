import { useEffect, useState, useRef } from "react";
import "./ExpandableAboutRow.css";

export default function ExpandableAboutRow({
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
        <h2 className="about-h2">Our Story</h2>
        <p>{paragraphText}</p>
        {isParagraphOverflowing && (
          <button className="btn-expand" onClick={handleExpandClick}>
            {isExpanded ? "COLLAPSE" : "EXPAND"}
          </button>
        )}
      </div>
      <img src={img} alt="" className={`${imgClassName} ${visibilityStyle}`} />
    </>
  );
}
