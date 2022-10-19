// import { Container } from './Test.styles.ts';

export interface TestProps {
  prop ?: string
};

const Test = ({ prop }: TestProps) => {
  return <div>Hello 👋, I am a Test component.</div>;
}

export default Test;
