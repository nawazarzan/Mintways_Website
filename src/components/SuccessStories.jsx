import "./SuccessStories.css";

function SuccessStories() {
  return (
    <section className="success-section">
      <h2 className="title">Success Stories</h2>

      <div className="content-wrapper">

        <div className="card">
          <div className="img-box">
            <img src="/images/doctor.png" alt="" />
          </div>
          <h3>Transforming Healthcare Operations Through Digital Efficiency</h3>
          <button>Read More</button>
        </div>

        <div className="card">
          <div className="img-box">
            <img src="/images/laptop.png" alt="" />
          </div>
          <h3>Optimizing Asset Visibility with Smart Tracking Solutions</h3>
          <button>Read More</button>
        </div>

        <div className="card">
          <div className="img-box">
            <img src="/images/tracker.png" alt="" />
          </div>
          <h3>Streamlining Trademark & Patent Registration with Intelligent Automation</h3>
          <button>Read More</button>
        </div>

      </div>
    </section>
  );
}

export default SuccessStories;
