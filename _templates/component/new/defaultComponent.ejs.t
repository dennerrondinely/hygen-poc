---
to: src/components/<%= hierarchy%>/<%= h.changeCase.upperCaseFirst(fileName) %>/<%= h.changeCase.upperCaseFirst(fileName) %>.tsx
---
// import { Container } from './<%= h.changeCase.upperCaseFirst(fileName) %>.styles.ts';

export interface <%= h.changeCase.upperCaseFirst(fileName) %>Props {
  prop ?: string
};

const <%= h.changeCase.upperCaseFirst(fileName) %> = ({ prop }: <%= h.changeCase.upperCaseFirst(fileName) %>Props) => {
  return <div>Hello 👋, I am a <%= h.changeCase.upperCaseFirst(fileName) %> component.</div>;
}

export default <%= h.changeCase.upperCaseFirst(fileName) %>;
