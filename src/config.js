/**
 * This is used to add, update or remove any Component props..
 *
 * Ex: text or logo change, Adding of another NavLink etc.
 */
export const CONFIG = {
  LoaderText: "LOADING...",
  NavigationBar: {
    Logo: {
      LogoName: "SAI TARUN",
      SubLogoName: "<blogs />",
    },
    NavLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Blogs",
        link: "/all",
      },
      {
        name: "About",
        link: "/about",
      },
    ], //Array of objects
    ProfileSettings: [], //Array of objects
  },
};
