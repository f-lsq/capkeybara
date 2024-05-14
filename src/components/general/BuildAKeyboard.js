import React, { useState } from 'react';
import { StyledBuildAKeyboard } from '../styles/general/BuildAKeyboard.styled';
import buildAKeyboardBackground from '../../assets/images/build-a-keyboard.webp';
import { useNavigate } from 'react-router-dom';

const BuildAKeyboard = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const navigate = useNavigate();

  return (
    <StyledBuildAKeyboard>
      <section>
        <figure>
          <img src={buildAKeyboardBackground} alt="Wallpaper of pastel themed keyboard with cute keycaps" />
        </figure>
        <article>
          <h1>
            {pageNumber === 0 && `Building Your First Keyboard`}
            {pageNumber === 1 && `Step 1: Key in on Your Keyboard Kit`}
            {pageNumber === 2 && `Step 2: Switch it Up with Key Switches`}
            {pageNumber === 3 && `Step 3: Caps-lock Your Keycaps`}
            {pageNumber === 4 && `Step 4: Accessorize with Panache`}
            {pageNumber === 5 && `Step 5: Assemble with "Punderful" Precision`}
            {pageNumber === 6 && `Step 6: Test and Personalize with Pizzazz`}
            {pageNumber === 7 && `Step 7: Show off Your Keyboard Creativity`}
          </h1>
          <p>
            {pageNumber === 0 && `Building your own keyboard is as satisfying as a good swim in a river, offering a customized typing experience tailored to your needs. In this guide, we'll guide you through the "capy" steps of crafting your very own mechanical keyboard. `}
            {pageNumber === 1 && `Select a keyboard kit that strikes the right chord with your typing style and preferences.`}
            {pageNumber === 2 && `Find switches that make you go "Aww" with their feel and sound, whether it's linear, tactile, or clicky.`}
            {pageNumber === 3 && `Add some character to your keyboard with keycaps that put the "paws" in "applause" &U+2013; think material, profile, and design.`}
            {pageNumber === 4 && `Grab some stabilizers, lubricant, and a keycap puller to ensure your build goes "swimmingly" from start to finish.`}
            {pageNumber === 5 && `Follow the instructions with "key" attention to detail, making sure everything fits together as snugly as a Capybara in a cozy den.`}
            {pageNumber === 6 && `Plug in your keyboard, test each key, and then let your creativity run wild with macros, RGB lighting, and custom keycap sets.`}
            {pageNumber === 7 && `
Share snapshots of your "punderful" creation on social media, join online communities, and revel in the "keyboard camaraderie." Happy typing!`}
          </p>
          {pageNumber !== 0 && <button onClick={()=>setPageNumber(pageNumber-1)}>Back</button>}
          {pageNumber !== 7 && <button onClick={()=>setPageNumber(pageNumber+1)}>
            {pageNumber === 0 ? "Let's Get Started" : "Next"}</button>} 
          {pageNumber === 7 && <button onClick={() => { navigate(`/shop`)}}>Browse Shop</button>}
          
        </article>


      </section>
    </StyledBuildAKeyboard>
  );
};

export default BuildAKeyboard;