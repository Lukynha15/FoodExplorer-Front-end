import { Container } from "./styles";

export function Input({ icon: Icon, label, ...rest }) {
  return (
    <Container>
      {label && <label>{label}</label>}
      <div className="input-wrapper">
        {Icon && <Icon size={20} />}
        <input {...rest} />
      </div>
    </Container>
  );
}
