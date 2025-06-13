import { Container } from "./styles";

export function ButtonText({ title, children, ...rest }) {
  return (
    <Container 
      type="button"
      {...rest}
    >
      {title}{children}
    </Container>
  );
}