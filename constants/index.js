import {
  SEACRET_API_KEY,
  SEACRET_API_URL,
  SEACRET_MDX_PROFILEID,
  SEACRET_TOKEN_KEY,
  SEACRET_LOGIN_ROUTE,
  SEACRET_REGISTER_ROUTE,
  SEACRET_CHECK_TOKEN,
  SEACRET_USER_INFO_ROUTE,
  SEACRET_USER_SCREENS_ROUTE,
} from "@env";

// KEYS
export const API_KEY = SEACRET_API_KEY;
export const TOKEN_KEY = SEACRET_TOKEN_KEY;
export const MDX_PROFILEID = SEACRET_MDX_PROFILEID;

// ROUTES
export const API_URL = SEACRET_API_URL;
// AUTH --> USER
export const LOGIN_ROUTE = API_URL + SEACRET_LOGIN_ROUTE;
export const REGISTER_ROUTE = API_URL + SEACRET_REGISTER_ROUTE;
export const CHECK_TOKEN = API_URL + SEACRET_CHECK_TOKEN;

//?USER (NEED A TOKEN TO THIS ENDPOINT)
export const USER_INFO_ROUTE = API_URL + SEACRET_USER_INFO_ROUTE;
export const USER_SCREENS_ROUTE = API_URL + SEACRET_USER_SCREENS_ROUTE;

export const avatars = [
  "https://st2.depositphotos.com/1005049/7860/v/450/depositphotos_78600018-stock-illustration-mustache-and-glasses.jpg",
  "https://th.bing.com/th/id/OIP.jYC30qyWl8ODY9vHzueNIAHaHa?rs=1&pid=ImgDetMain",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png",
  "https://ih1.redbubble.net/image.618369215.1083/flat,800x800,075,f.u2.jpg",
  "https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png",
  "https://live.staticflickr.com/65535/52051814302_0bc57191b4_n.jpg",
  "https://th.bing.com/th/id/OIP.u3aU45q2Pcum--knQuaiSwAAAA?rs=1&pid=ImgDetMain",
  "https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u1.jpg",
];

// background images
export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/d049a3bd-40ee-411b-9f16-d1def798d43b/e31351a9-f2f0-4bab-87cc-6c863bf29ca1/IL-en-20230313-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const LOGO_N_IMAGE =
  "https://th.bing.com/th/id/R.df7c249866b2de3b50eee84d6eb5f6be?rik=c3Ti4SyYba8h3g&pid=ImgRaw&r=0";
