import { createGlobalStyle } from "styled-components";

import RobotoBlackItalicTTF from '../../../assets/fonts/Roboto-BlackItalic.ttf';
import RobotoBlackTTF from '../../../assets/fonts/Roboto-Black.ttf';
import RobotoItalicTTF from '../../../assets/fonts/Roboto-Italic.ttf';
import RobotoBoldTTF from '../../../assets/fonts/Roboto-Bold.ttf';
import RobotoBoldItalicTTF from '../../../assets/fonts/Roboto-BoldItalic.ttf';
import RobotoLightTTF from '../../../assets/fonts/Roboto-Light.ttf';
import RobotoLightItalicTTF from '../../../assets/fonts/Roboto-LightItalic.ttf';
import RobotoMediumItalicTTF from '../../../assets/fonts/Roboto-MediumItalic.ttf';
import RobotoRegularTTF from '../../../assets/fonts/Roboto-Regular.ttf';
import RobotoMediumTTF from '../../../assets/fonts/Roboto-Medium.ttf';
import RobotoThinTTF from '../../../assets/fonts/Roboto-Thin.ttf';
import RobotoThinItalicTTF from '../../../assets/fonts/Roboto-ThinItalic.ttf';
import AldrichTTF from '../../../assets/fonts/Aldrich-Regular.ttf';
import CuteFontTTF from '../../../assets/fonts/CuteFont-Regular.ttf';

export const StyledFonts = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('${RobotoBlackItalicTTF}') format('truetype');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('${RobotoBlackTTF}') format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('${RobotoItalicTTF}') format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('${RobotoBoldTTF}') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('${RobotoBoldItalicTTF}') format('truetype');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('${RobotoLightTTF}') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('${RobotoLightItalicTTF}') format('truetype');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('${RobotoMediumItalicTTF}') format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('${RobotoRegularTTF}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('${RobotoMediumTTF}') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('${RobotoThinTTF}') format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('${RobotoThinItalicTTF}') format('truetype');
    font-weight: 100;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Aldrich';
    src: url('${AldrichTTF}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Cute-Font';
    src: url('${CuteFontTTF}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`