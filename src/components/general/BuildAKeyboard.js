import React, { useState } from 'react';
import { StyledBuildAKeyboard } from '../styles/general/BuildAKeyboard.styled';
import buildAKeyboardBackground from '../../assets/images/build-a-keyboard.webp';
import { useNavigate } from 'react-router-dom';

const BuildAKeyboard = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const navigate = useNavigate();

  return (
    <StyledBuildAKeyboard>
      <figure>
        <img src={buildAKeyboardBackground} alt="Wallpaper of pastel themed keyboard with cute keycaps" />
      </figure>
      <article>
        {pageNumber === 0 && <h1>Building Your <span>First</span> Keyboard</h1>}
        {pageNumber === 1 && <h1>Step 1: Key in on Your <span>Keyboard Kit</span></h1>}
        {pageNumber === 2 && <h1>Step 2: Switch it Up with <span>Key Switches</span></h1>}
        {pageNumber === 3 && <h1>Step 3: Caps-lock Your <span>Keycaps</span></h1>}
        {pageNumber === 4 && <h1>Step 4: <span>Accessorize</span> with Panache</h1>}
        {pageNumber === 5 && <h1>Step 5: <span>Assemble</span> with "Punderful" Precision</h1>}
        {pageNumber === 6 && <h1>Step 6: Test and <span>Personalize</span> with Pizzazz</h1>}
        {pageNumber === 7 && <h1>Step 7: <span>Show off</span> Your Keyboard Creativity</h1>}
        {pageNumber === 0 &&
          <>
            <p>Building your own keyboard is as satisfying as a good swim in a river, offering a customized typing experience tailored to your needs.</p>
            <p>In this guide, we'll guide you through the "capy" steps of crafting your very own mechanical keyboard.</p>
          </>
        }
        {pageNumber === 1 && <p>Select a keyboard kit that strikes the right chord with your typing style and preferences.</p>}
        {pageNumber === 2 && <p>Find switches that make you go "Aww" with their feel and sound, whether it's linear, tactile, or clicky.</p>}
        {pageNumber === 3 && <p>Add some character to your keyboard with keycaps that put the "paws" in "applause" - think material, profile, and design.</p>}
        {pageNumber === 4 && <p>Grab some stabilizers, lubricant, and a keycap puller to ensure your build goes "swimmingly" from start to finish.</p>}
        {pageNumber === 5 && <p>Follow the instructions with "key" attention to detail, making sure everything fits together as snugly as a Capybara in a cozy den.</p>}
        {pageNumber === 6 && <p>Plug in your keyboard, test each key, and then let your creativity run wild with macros, RGB lighting, and custom keycap sets.</p>}
        {pageNumber === 7 && <p>Share snapshots of your "punderful" creation on social media, join online communities, and revel in the "keyboard camaraderie." Happy typing!</p>}
        <div>
          {pageNumber !== 0 && <button onClick={() => setPageNumber(pageNumber - 1)}>Back</button>}
          {pageNumber !== 7 && <button onClick={() => setPageNumber(pageNumber + 1)}><div className='circle'></div>
          {pageNumber === 0 ? "Let's Get Started" : "Next"}</button>}
          {pageNumber === 7 && <button id="build-shop-btn" onClick={() => { navigate(`/shop`) }}>Browse Shop</button>}
        </div>

      </article>
    </StyledBuildAKeyboard>
  );
};

export default BuildAKeyboard;