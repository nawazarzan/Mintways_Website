import "./VitalSyncSection.css";

export default function VitalSyncSection() {
  return (
    <section className="vital-wrapper">

      {/* HEADING */}
      <div className="vital-header">
        <h1>Vital Sync</h1>
        <h2>Comprehensive Clininc Management Software</h2>
        <p>
          Vital Sync streamlines patient billing, appointment and record
          management and introduces AI based service
        </p>
      </div>

      {/* FEATURES */}
      <div className="vital-features">

        {/* Card 1 */}
        <div className="vital-card">
          <img src="/images/1.png" alt="Billing Management" />
          <h3>Billing Management</h3>
          <p>Ensures smooth and accurate handling of patient billing, invoices, and payments. It minimizes errors, speeds up transactions, and keeps financial records organized. Clinics can track charges, process payments efficiently, and maintain clear financial transparency for patients and staff.</p>
        </div>

        {/* Card 2 */}
        <div className="vital-card">
          <img src="/images/Both.png" alt="Appointment Management" />
          <h3>Appointment Management</h3>
          <p>Helps clinics schedule, update, and track patient appointments efficiently. It reduces waiting times, prevents double bookings, and keeps daily operations organized. Staff can manage calendars, send reminders, and ensure each patient visit is smooth, timely, and well-coordinated.</p>
        </div>

        {/* Card 3 */}
        <div className="vital-card">
          <img src="/images/PatientsDoctor.png" alt="Patient Records" />
          <h3>Patient Records</h3>
          <p>Provides a secure digital system to store and manage patient information, history, and medical reports. It allows quick access, easy updates, and safe document uploads, helping healthcare staff improve accuracy, coordination, and patient care while maintaining strong privacy and compliance.</p>
        </div>

        {/* Card 4 */}
        <div className="vital-card">
          <img src="/images/6.png" alt="AI Prescription" />
          <h3>AI Prescription</h3>
          <p>Uses advanced AI to create accurate, personalized prescriptions based on patient consultations. It analyzes symptoms, history, and clinical notes to recommend medicines safely, reducing errors, saving doctors time, and improving treatment quality with data-driven guidance.</p>
        </div> 

        
        {/* Card 5 */}
        <div className="vital-card">
          <img src="/images/PateintReg.png" alt="Patient Registration" />
          <h3>Patient Registration</h3>
          <p>Enables quick digital onboarding by capturing accurate patient details within minutes. It supports easy profile updates, reduces manual paperwork, minimizes errors, and ensures a smooth, efficient registration experience for both new and returning patients throughout the complete clinic workflow.</p>
        </div>

        {/* Card 6 */}
        <div className="vital-card">
          <img src="/images/VisitHistory.png" alt="Visit History" />
          <h3>Visit History</h3>
          <p>Helps clinics track and review past patient visits, consultation details, diagnoses, and treatment timelines. It enables accurate follow-ups, supports stronger clinical decisions, and maintains a complete, easily accessible medical history for every returning patient across the entire care journey.</p>
        </div>

        {/* Card 7 */}
        <div className="vital-card">
          <img src="/images/DoctorStaff.png" alt="Doctor & Staff Management" />
          <h3>Doctor & Staff Management</h3>
          <p>Manages doctor and staff schedules, availability, and performance efficiently. It helps clinics organize staffing needs, track work hours, and ensure optimal resource allocation. This improves clinic operations and enhances staff productivity.</p>
        </div>

        {/* Card 8 */}
        <div className="vital-card">
          <img src="/images/Medication.png" alt="Medication & e-Prescription" />
          <h3>Medication & e-Prescription Tracking</h3>
          <p>Tracks prescribed medicines, dosage details, and refill needs while storing digital prescriptions securely. It helps doctors monitor treatment progress, reduces medication errors, improves patient safety, and ensures easy access to past prescriptions for accurate follow-ups and better clinical decision-making.</p>
        </div>




      </div>
    </section>
  );
}
