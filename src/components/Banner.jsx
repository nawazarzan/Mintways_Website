// import "./BuildingWorkCultureStartups.css";

// export default function BuildingWorkCultureStartups() {
//   return (
//     <div className="insight-banner">

//       <img
//         src="/images/certified excellence & global expertise option 2.jpg"   // 👈 apni image
//         alt="work culture"
//         className="banner-img"
//       />

//       <div className="overlay"></div>

//       <div className="content">
//         <h1>
//           Building a Strong Work Culture in Startups: The First Few Years Matter Most
//         </h1>
//       </div>

//     </div>
//   );
// }



import "./Banner.css";

export default function Banner({ image, title }) {
  return (
    <div className="insight-banner">

      <img
        src={image}
        alt="banner"
        className="banner-img"
      />

      <div className="overlay"></div>

      <div className="content">
        <h1>{title}</h1>
      </div>

    </div>
  );
}