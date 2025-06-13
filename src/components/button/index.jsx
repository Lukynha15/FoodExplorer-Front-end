import { Container } from "./styles";

export function Button({ title, icon: Icon, loading, disabled, ...rest }) {
  return (
    <Container 
      type="button"
      disabled={loading || disabled}
      {...rest}
    >
      {loading ? 'carregando...' : (
        <>
          {Icon && <Icon size={20} />} 
          {title}
        </>
      )}
    </Container>
  );
}
