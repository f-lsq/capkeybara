import React from 'react';
import { StyledAbout } from '../styles/general/About.styled';
import aboutMainBackground from '../../assets/images/about-main.webp';
import aboutTeamBackground from '../../assets/images/about-team.webp';

const About = () => {
  return (
    <StyledAbout>
      <section>
            <h1>About Capkeybara</h1>
            <img src={aboutMainBackground} alt="Capybara cuddling with a crocodile"/>
            <p>Welcome to Capkeybara, your ultimate destination for high-quality mechanical keyboards with a touch of capybara charm. Our journey began with a passion for mechanical keyboards and a love for the gentle, sociable nature of capybaras.</p>

            <h2>Our Story</h2>
            <p>Capkeybara was founded in 2023 by a group of keyboard enthusiasts who wanted to combine their hobby with their favorite animal, the capybara. We believe that using a mechanical keyboard should be a delightful experience, just like spending time with a capybara.</p>
            <img src={aboutTeamBackground} alt="Capybara family in a pool of water"/>
            <p>Our team is dedicated to bringing you the best mechanical keyboards that are not only functional and reliable but also bring a smile to your face with their unique designs. Each keyboard we offer is carefully selected and tested to meet our high standards of quality and performance.</p>

            <h2>Why Capybara?</h2>
            <p>Capybaras are known for their calm and friendly demeanor, and they often symbolize relaxation and community. At Capkeybara, we want our products to embody these qualities, providing you with a soothing and enjoyable typing experience.</p>

            <h2>Our Products</h2>
            <p>We offer a wide range of mechanical keyboards, from compact layouts to full-sized options, catering to both beginners and experienced users. Our keyboards are available in various styles and switch types to suit your preferences.</p>

            <p>In addition to keyboards, we also provide a selection of keycaps, accessories, and customization options to help you create the perfect setup. Whether you're a gamer, writer, or programmer, we have something for everyone.</p>

            <h2>Join Our Community</h2>
            <p>At Capkeybara, we value our community of keyboard enthusiasts. We regularly host events, share tips and tricks, and provide support to help you get the most out of your mechanical keyboard. Follow us on social media and join our forums to connect with fellow capybara fans and keyboard lovers.</p>

            <p>Thank you for choosing Capkeybara. We hope you enjoy our products as much as we enjoy bringing them to you!</p>
        </section>
    </StyledAbout>
  );
};

export default About;