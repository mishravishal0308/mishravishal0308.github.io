import SectionWrapper from '../components/SectionWrapper';
import PipelineAnimation from '../components/PipelineAnimation';

export default function Pipeline() {
  return (
    <SectionWrapper id="pipeline">
      <div className="text-center mb-12">
        <h2 className="section-title">
          Live <span className="gradient-text">CI/CD Pipeline</span>
        </h2>
        <p className="section-subtitle">
          Watch a real pipeline run — from code push to production deployment.
        </p>
      </div>

      <PipelineAnimation />
    </SectionWrapper>
  );
}
