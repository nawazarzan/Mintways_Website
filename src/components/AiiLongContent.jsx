import React from "react";
import "./AiiLongContent.css";

function AiiLongContent() {
  return (
    <section className="aii-long-section">
      <div className="aii-long-container">

        {/* LEFT CONTENT */}
        <div className="aii-long-left">

          <p>
            A perfect storm named Low Code No Code is slowly brewing which is likely to spiral into a Tornado and sweep away the whole class of traditional Software developers as we know of today.
          </p>

          <p>
            This is the stuff nightmares are made of and so it is important to understand what this
            paradigm is and what it means for the future of the software development industry and what
            opportunities along with challenges does it bring.
          </p>

          <p>
            <strong>Low-code development</strong> refers to a software dev
            elopment approach that emphasizes
            visual modeling and abstraction, enabling users to create applications with minimal hand-coding.
            These platforms provide a graphical interface where users can assemble pre-built components and logic,
            reducing the need for traditional coding practices.
          </p>

          <p>
            <strong>No-code development</strong> takes the concept of low-code a step further by eliminating the need
            for any programming or coding knowledge altogether. No code platforms provide an intuitive visual interface,
            empowering users to build applications using a collection of pre-built blocks, widgets, and logic elements.
          </p>

          <p>
            Currently there is a plethora of Low code No Code platforms available such as Amazon SageMaker,
            Microsoft Lobe, Apple CreateML, IBM Watson Studio, Appian, Google AutoML, Teachable Machine,
            MonkeyLearn, etc.
          </p>

          <p>
            This AI paradigm brings big benefits such as accelerated application development, democratization
            of AI, enhanced collaboration between technical and non-technical teams and comes with rich features
            such as Visual Interface for Designing AI Applications, Pre-built AI Components and Models, Integration
            with External Data Sources and APIs and Automated Model Training and Deployment.
          </p>

          <p>
            While there is a big concern that the future of professional developers and data scientists is at risk
            as this paradigm has broken the entry barrier for AI development and enabled individuals with minimal
            coding experience to create AI applications, they do not replace the need for domain expertise and a
            deep understanding of AI principles.
          </p>

          <p>
            For complex and mission-critical applications, the involvement of skilled developers and data scientists
            remains indispensable. They possess the knowledge and expertise required to optimize AI algorithms,
            handle data intricacies, and ensure robust performance and security.
          </p>

          <p>
            Essentially it means that traditional developers may have to upskill themselves and build a solid
            understanding of the underlying AI concepts and algorithms. This knowledge allows them to make informed
            decisions when selecting low-code or no-code platforms, ensuring compatibility with their desired AI capabilities.
          </p>

          <p>
            Additionally, they should learn to collaborate with data scientists and AI experts which can bridge the gap
            between the simplicity of low-code and no-code platforms and the complexity of advanced AI algorithms.
          </p>

          <p>
            They should also learn to assess the customization options available with the different platforms to be able
            to make informed choices.
          </p>

          <p>
            They should also keep themselves abreast of future trends and innovations happening in this space such as
            advancements in natural language processing capabilities, integration of AI with Internet of Things (IoT)
            devices and the role of augmented analytics in Low-Code and No-Code platforms.
          </p>

        </div>

        {/* RIGHT IMAGES */}
        <div className="aii-long-right">
          <img src="/images/N8N.png" alt="AI" />
          <img src="/images/Our process - Develop.jpeg" alt="AI" />
        </div>

      </div>
    </section>
  );
}

export default AiiLongContent;