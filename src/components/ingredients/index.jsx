import { Container } from "./styles"

export function Ingredients({ title, label }) {
  return (
    <Container>
      {label && <label>{label}</label>}
      {title}
    </Container>
  )
}
