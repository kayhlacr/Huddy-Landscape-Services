import { useEffect, useState, useRef } from "react";
import "./Paragraph.css";

export default function Paragraph({ parentHeight, className = "" }) {
  const container = useRef(null);
  const paragraph = useRef(null);
  const [isParagraphOverflowing, setIsParagraphOverflowing] = useState(false);

  useEffect(() => {
    if (container.current) {
      const containerElement = container.current;
      const paragraphElement = paragraph.current;
      console.log("container element: ", containerElement);
      console.log("container height: ", containerElement.offsetHeight);
      console.log("container: ", container);
      if (paragraphElement.offsetHeight > containerElement.offsetHeight) {
        setIsParagraphOverflowing(true);
        console.log("paragraph is overflowing");
      }
    }
  }, []);

  return (
    <div ref={container} className={`paragraph-container ${className}`}>
      <h2 className="about-h2">Our Story</h2>
      <p ref={paragraph}>
        Our saga began with Kainoa Huddy, who, before laying the cornerstone of
        our enterprise, dedicated 28 years of his life to mastering the art of
        landscaping under the guidance of Kauai&apos;s most revered landscapers,
        Abby and Frank Santos of No Ka Oi Plants. His tenure with them was more
        than a job; it was a lifelong apprenticeship that honed his skills,
        ethic, and passion for the craft. When Abby and Frank decided to retire,
        it wasn&apos;t just the end of an era but the dawn of a new beginning
        for us. Motivated by a shared dream and our combined strengths, Kainoa
        and I, Mele Huddy, embarked on this entrepreneurial journey. With his
        unparalleled expertise and my drive to build a legacy of greatness,
        Huddy Landscape Service, Inc. was born—a family business that prides
        itself on delivering exceptional landscape solutions with a touch of
        Hawaiian spirit. Our saga began with Kainoa Huddy, who, before laying
        the cornerstone of our enterprise, dedicated 28 years of his life to
        mastering the art of landscaping under the guidance of Kauai&apos;s most
        revered landscapers, Abby and Frank Santos of No Ka Oi Plants. His
        tenure with them was more than a job; it was a lifelong apprenticeship
        that honed his skills, ethic, and passion for the craft. When Abby and
        Frank decided to retire, it wasn&apos;t just the end of an era but the
        dawn of a new beginning for us. Motivated by a shared dream and our
        combined strengths, Kainoa and I, Mele Huddy, embarked on this
        entrepreneurial journey. With his unparalleled expertise and my drive to
        build a legacy of greatness, Huddy Landscape Service, Inc. was born—a
        family business that prides itself on delivering exceptional landscape
        solutions with a touch of Hawaiian spirit. Our saga began with Kainoa
        Huddy, who, before laying the cornerstone of our enterprise, dedicated
        28 years of his life to mastering the art of landscaping under the
        guidance of Kauai&apos;s most revered landscapers, Abby and Frank Santos
        of No Ka Oi Plants. His tenure with them was more than a job; it was a
        lifelong apprenticeship that honed his skills, ethic, and passion for
        the craft. When Abby and Frank decided to retire, it wasn&apos;t just
        the end of an era but the dawn of a new beginning for us. Motivated by a
        shared dream and our combined strengths, Kainoa and I, Mele Huddy,
        embarked on this entrepreneurial journey. With his unparalleled
        expertise and my drive to build a legacy of greatness, Huddy Landscape
        Service, Inc. was born—a family business that prides itself on
        delivering exceptional landscape solutions with a touch of Hawaiian
        spirit.
      </p>
      {isParagraphOverflowing && <button className="btn-expand">EXPAND</button>}
    </div>
  );
}
