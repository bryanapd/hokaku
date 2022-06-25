import hero1 from "../img/hero1.jpg";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import { Link } from "react-router-dom";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>Hokaku</span> Photography
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          doloribus amet quod impedit quia magnam delectus rem nemo voluptatum
          soluta?
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact Us</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={hero1} alt="Section Home" />
      </Image>
      {/* <Wave /> */}
    </About>
  );
};
export default AboutSection;
