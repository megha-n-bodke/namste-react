import React from "react";
import ReactDOM from "react-dom/client";
import "./Index.css";
//const heading = React.createElement(
/*   "h1",
  {
    id: "Heading",
  },
  "React Heading"
);

console.log(heading);

const Heading = () => <h1>JSX Heading {10 + 20}</h1>;

const element = (
  <h1>
    Element......
    {Heading()}
    <Heading />
  </h1>
);
console.log(element);
 */
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("h1", { id: "heading" }, "Child Heading"),
//   React.createElement("h2", { id: "Sibling" }, "Sibling heading"),
// ]);

// Planning
/* - Header
  Logo 2)menubar
- Body
  - Resaurant Card Container
  - Resaurant card

-Footer
 */
const Heading = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img
          src="https://www.clipartmax.com/png/small/155-1558209_take-away-food-logos.png"
          alt="Take Away Food Logos @clipartmax.com"
          className="logo-img"
        ></img>
      </div>
      <div className="menu">
        <ul>
          <li>Home </li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resData }) => {
  console.log(resData);
  return (
    <div className="cardContainer">
      <img src="" alt="resto image"></img>
      <h2>{resData.info.name}</h2>
      <h3>Cusine</h3>
    </div>
  );
};

// Body
const Body = () => {
  const restaurants = [
    {
      info: {
        id: "513845",
        name: "Dairy Day Ice Creams & Frozen Desserts",
        cloudinaryImageId: "ii3jbgb9juhquxqvq3oj",
        locality: "Rahatani Road",
        areaName: "Pimple Saudagar",
        costForTwo: "₹200 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.2,
        veg: true,
        feeDetails: {
          restaurantId: "513845",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 10200,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 10200,
        },
        parentId: "68031",
        avgRatingString: "4.2",
        totalRatingsString: "100+",
        promoted: true,
        adTrackingId:
          "cid=8482928~p=1~eid=0000018a-dba4-eecd-4f54-d03500ef0179~srvts=1695902133965~45995",
        sla: {
          deliveryTime: 50,
          lastMileTravel: 9.6,
          serviceability: "SERVICEABLE",
          slaString: "50 mins",
          lastMileTravelString: "9.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-09-28 23:58:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "ABOVE ₹500",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=513845",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "584695",
        name: "Domino's Pizza",
        cloudinaryImageId: "h2d8scemdxaqjyabmzuo",
        locality: "Square Chikali",
        areaName: "Nigdi",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 3.8,
        feeDetails: {
          restaurantId: "584695",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3500,
        },
        parentId: "2456",
        avgRatingString: "3.8",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 25,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-09-28 23:55:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹999",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=584695",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "622162",
        name: "MOJO Pizza - 2X Toppings",
        cloudinaryImageId: "59b64f9bb67234987652437f21d379c2",
        locality: "Jijamata Park Marg",
        areaName: "Nigdi",
        costForTwo: "₹250 for two",
        cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
        avgRating: 4.4,
        feeDetails: {
          restaurantId: "622162",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3900,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3900,
        },
        parentId: "11329",
        avgRatingString: "4.4",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "28-38 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-09-29 02:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    iconId: "guiltfree/GF_Logo_android_3x",
                    description: "",
                    shortDescription: "options available",
                    fontColor: "#7E808C",
                  },
                },
              ],
            },
            textBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=622162",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "681323",
        name: "GLOBO Ice Creams Of The World",
        cloudinaryImageId: "e9fe9e59fea2e0e1175032eff8bd617c",
        locality: "Jijamata Park Marg",
        areaName: "Nigdi",
        costForTwo: "₹150 for two",
        cuisines: ["Ice Cream", "Desserts", "Bakery"],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "681323",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3500,
        },
        parentId: "22303",
        avgRatingString: "4.2",
        totalRatingsString: "20+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "17-27 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-09-29 02:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=681323",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "692188",
        name: "BOOM Sandwich - Sub of India",
        cloudinaryImageId: "96aaf72372ad1b0297b7cc304ced7e33",
        locality: "Jijamata Park Marg",
        areaName: "Chinchwad",
        costForTwo: "₹250 for two",
        cuisines: ["Snacks", "Indian", "Desserts"],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "692188",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3500,
        },
        parentId: "401169",
        avgRatingString: "3.9",
        totalRatingsString: "20+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "26-36 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-09-29 02:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    description: "",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=692188",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "433339",
        name: "Mealful Rolls - India's Biggest Rolls",
        cloudinaryImageId: "0d959f87516479195952893fa26b11c9",
        locality: "Mahatma Phule nagar",
        areaName: "Chinchwad",
        costForTwo: "₹250 for two",
        cuisines: ["Fast Food", "Snacks", "North Indian", "Desserts"],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "433339",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3200,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3200,
        },
        parentId: "10390",
        avgRatingString: "3.9",
        totalRatingsString: "50+",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "30-40 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-09-29 02:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    iconId: "guiltfree/GF_Logo_android_3x",
                    description: "",
                    shortDescription: "options available",
                    fontColor: "#7E808C",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=433339",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "643794",
        name: "WeFit-Bowls, Salads & Sandwiches",
        cloudinaryImageId: "3556974afd25b138a2c56dac5795ac2b",
        locality: "Jijamata Park Marg",
        areaName: "Gachibowli",
        costForTwo: "₹250 for two",
        cuisines: ["Healthy Food", "Salads", "Keto", "Snacks"],
        avgRating: 4.6,
        feeDetails: {
          restaurantId: "643794",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3500,
        },
        parentId: "355285",
        avgRatingString: "4.6",
        totalRatingsString: "20+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "31-41 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-09-29 02:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "brand",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    iconId: "guiltfree/GF_Logo_android_3x",
                    description: "",
                    shortDescription: "brand",
                    fontColor: "#7E808C",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=643794",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "681572",
        name: "LeanCrust Pizza- ThinCrust Experts",
        cloudinaryImageId: "aae01c4344d8cd8a49fe4cf54a46c690",
        locality: "Jijamata Park Marg",
        areaName: "Chinchwad",
        costForTwo: "₹300 for two",
        cuisines: ["Pizzas", "Italian", "Desserts"],
        avgRating: 4.4,
        feeDetails: {
          restaurantId: "681572",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3500,
        },
        parentId: "11216",
        avgRatingString: "4.4",
        totalRatingsString: "20+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "29-39 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-09-29 02:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    shortDescription: "options available",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=681572",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "433343",
        name: "NH1 Bowls - Highway To North",
        cloudinaryImageId: "94654fdf308764cd0faf83dba35bcdc3",
        locality: "Jijamata Park",
        areaName: "Chinchwad",
        costForTwo: "₹250 for two",
        cuisines: ["North Indian", "Punjabi", "Home Food"],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "433343",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3200,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3200,
        },
        parentId: "22452",
        avgRatingString: "4.3",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "22-32 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-09-29 02:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    description: "",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=433343",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "433342",
        name: "ZAZA Mughal Biryani",
        cloudinaryImageId: "e12f3a72ab92442dc088f803a04d4293",
        locality: "Shivaji Marg",
        areaName: "Nigdi",
        costForTwo: "₹250 for two",
        cuisines: ["Biryani", "North Indian", "Awadhi"],
        avgRating: 3.8,
        feeDetails: {
          restaurantId: "433342",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3200,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3200,
        },
        parentId: "22473",
        avgRatingString: "3.8",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "23-33 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-09-29 02:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    description: "",
                    shortDescription: "options available",
                  },
                },
              ],
            },
            textBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹499",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=433342",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "128129",
        name: "Oven Story Pizza - Standout Toppings",
        cloudinaryImageId: "f986df6f1a1fcf2ff24d2eaf44d570a7",
        locality: "INDRAYANI NAGAR",
        areaName: "Bhosari",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "128129",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 7000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 7000,
        },
        parentId: "3534",
        avgRatingString: "4.1",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 6.8,
          serviceability: "SERVICEABLE",
          slaString: "25-35 mins",
          lastMileTravelString: "6.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-09-28 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textExtendedBadges: {},
            textBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=128129",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "433337",
        name: "BOX8 - Desi Meals",
        cloudinaryImageId: "69a061b7e0f951cef2b4947946f94ec6",
        locality: "Jijamata Park Marg",
        areaName: "Chinchwad",
        costForTwo: "₹250 for two",
        cuisines: ["North Indian", "Biryani", "Thalis", "Home Food"],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "433337",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3200,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3200,
        },
        parentId: "10655",
        avgRatingString: "4.2",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "23-33 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-09-29 02:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    description: "",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=433337",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
  ];
  return (
    <div>
      {/* <RestaurantCard resData={restaurants[3]} /> */}
      {restaurants.map((restaurant) => (
        <RestaurantCard resData={restaurant} />
      ))}
    </div>
  );
};

//Page
const Page = () => {
  return (
    <>
      <Heading />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Page />);
