// import AIFullLanding from "../components/AIFullLandingPage";
// // import "./AILanding.css";


// export default function AILanding() {
//   return <AIFullLanding />;
// }

import AIFullLanding from "../components/AIFullLandingPage";
import "./AILanding.css";
import NewLanding from "../components/NewLanding";

export default function AILanding() {
  return (
    <main className="ai-landing-page">
      {/* <AIFullLanding /> */}
      <NewLanding /> 
    </main>
  );
}
