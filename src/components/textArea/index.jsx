import { Container } from "./styles";

export function Textarea({ label, value, ...rest }) {
  return (
    <Container>
      {label && <label>{label}</label>}
      <textarea value={value} {...rest} />
    </Container>
  );
}
