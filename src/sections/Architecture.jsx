import SectionWrapper from '../components/SectionWrapper';
import CloudArchitecture from '../components/CloudArchitecture';

export default function Architecture() {
  return (
    <SectionWrapper id="architecture">
      <div className="text-center mb-12">
        <h2 className="section-title">
          Cloud <span className="gradient-text">Architecture</span>
        </h2>
        <p className="section-subtitle">
          A production-grade cloud infrastructure — designed for scale, security, and observability.
        </p>
      </div>

      <CloudArchitecture />
    </SectionWrapper>
  );
}
