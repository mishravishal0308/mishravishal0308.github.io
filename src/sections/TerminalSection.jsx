import SectionWrapper from '../components/SectionWrapper';
import Terminal from '../components/Terminal';

export default function TerminalSection() {
  return (
    <SectionWrapper id="terminal">
      <div className="text-center mb-12">
        <h2 className="section-title">
          <span className="gradient-text">Terminal</span> Skills
        </h2>
        <p className="section-subtitle">
          Prefer the command line? Here&apos;s a quick look at who I am and what I work with.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Terminal />
      </div>
    </SectionWrapper>
  );
}
