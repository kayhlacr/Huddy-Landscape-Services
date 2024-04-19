import "./AboutPage.css";
import Owners2 from "../../assets/Owners2.jpg";
import CustomerCommunication from "../../assets/CustomerCommunication.jpg";
import LandscapeConstructon7 from "../../assets/LandscapeConstruction7.jpg";
import LandscapeConstruction10 from "../../assets/LandscapeConstruction10.jpg";

function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-us">
        <h2>About Us</h2>
        <p>
          Welcome to Huddy Landscape Service, Inc., a testament to the lush
          beauty of Kauai, nurtured and curated by the hands of a family deeply
          rooted in love for the land and our community. Founded by Kainoa and
          Mele Huddy, our company is a Hawaiian-owned, woman-led beacon of
          excellence in landscaping and commercial maintenance. Our journey in
          this industry is not just about enhancing spaces but about cultivating
          connections—with nature, with our heritage, and with the people we
          serve.
        </p>
      </div>

      <div className="right-align">
        <div className="paragraph-image-container">
          <div className="image-container">
            <img src={Owners2} alt=" Image Right" />
          </div>
          <div className="paragraph">
            <h2>Our Story</h2>
            <p className="centered">
              Our saga began with Kainoa Huddy, who, before laying the
              cornerstone of our enterprise, dedicated 28 years of his life to
              mastering the art of landscaping under the guidance of
              Kauai&apos;s most revered landscapers, Abby and Frank Santos of No
              Ka Oi Plants. His tenure with them was more than a job; it was a
              lifelong apprenticeship that honed his skills, ethic, and passion
              for the craft. When Abby and Frank decided to retire, it
              wasn&apos;t just the end of an era but the dawn of a new beginning
              for us. Motivated by a shared dream and our combined strengths,
              Kainoa and I, Mele Huddy, embarked on this entrepreneurial
              journey. With his unparalleled expertise and my drive to build a
              legacy of greatness, Huddy Landscape Service, Inc. was born—a
              family business that prides itself on delivering exceptional
              landscape solutions with a touch of Hawaiian spirit.
            </p>
          </div>
        </div>
      </div>

      <div className="left-align">
        <div className="paragraph-image-container">
          <div className="paragraph">
            <h2>Our Vision</h2>
            <p className="centered">
              At Huddy Landscape Service, Inc., we believe in more than just
              transforming spaces; we are about enriching lives. Our vision is
              to create outdoor environments that reflect the beauty and
              resilience of Kauai, offering a sanctuary for growth, peace, and
              joy. As a Hawaiian and woman-owned enterprise, we carry forward
              the legacy of those who nurtured us, channeling our skills and
              passion into every project, big or small.
            </p>
          </div>
          <div className="image-container">
            <img src={LandscapeConstruction10} alt="Image Left" />
          </div>
        </div>
      </div>

      <div className="right-align">
        <div className="paragraph-image-container">
          <div className="image-container">
            <img src={LandscapeConstructon7} alt="Image Right" />
          </div>
          <div className="paragraph">
            <h2>Our Commitment</h2>
            <p className="centered">
              We are committed to excellence, sustainability, and the aloha
              spirit in all we do. Our approach combines traditional Hawaiian
              landscaping techniques with modern, eco-friendly practices,
              ensuring that our work not only enhances the aesthetic appeal of
              your space but also contributes positively to our environment. In
              every project we undertake, we strive to weave the essence of our
              beautiful island, blending colors, textures, and fragrances that
              thrive in Kauai&apos;s unique climate, creating breathtaking
              landscapes that stand the test of time.
            </p>
          </div>
        </div>
      </div>

      <div className="left-align">
        <div className="paragraph-image-container">
          <div className="paragraph">
            <h2>Join Our Ohana</h2>
            <p className="centered">
              At Huddy Landscape Service, Inc., every client is family. Whether
              you&apos;re looking to create a serene garden oasis, enhance your
              commercial property&apos;s curb appeal, or maintain the lushness
              of your landscape, we bring our best to every project, ensuring
              your vision comes to life in ways that exceed your expectations.
              We invite you to join our ohana and experience the dedication,
              craftsmanship, and love we pour into our work. Together,
              let&apos;s create spaces that celebrate life, nature, and the
              bonds that hold us together.
            </p>

            <p className="centered">
              Mahalo for considering Huddy Landscape Service, Inc. for your
              landscaping needs. We look forward to nurturing your space and
              watching it flourish.
            </p>

            <p className="centered">With aloha, Kainoa and Mele Huddy</p>
          </div>
          <div className="image-container">
            <img src={CustomerCommunication} alt=" Image left" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
