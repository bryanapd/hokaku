import home1 from "../img/marti.jpg";
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
              <span>Aogiri</span> Photography
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>Dedicated</span> and <span>passionate</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}> photographer's.</motion.h2>
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
        <motion.img variants={photoAnim} src={home1} alt="Section Home" />
      </Image>
      <Wave />
    </About>
  );
};
export default AboutSection;
