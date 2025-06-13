import { FiArrowLeft, FiUpload } from "react-icons/fi"
import { Button } from "../../components/button"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { IngredientsItem } from "../../components/ingredientsItem"
import { Input } from "../../components/input"
import { CustomSelect } from "../../components/select"
import { Textarea } from "../../components/textArea"
import { Back, Container, Form, IngredientsTags, Photo, Section } from "./styles"

export function Update() {
  return (
    <Container>
      <Header />
      <Back>
        <FiArrowLeft size={24} style={{ marginRight: 8 }} /> 
        voltar
      </Back>

      <Form>
        <h1>Editar prato</h1>
        
          <Photo>
            <label htmlFor="file" className="UploadImage">
              <FiUpload size={20} />
              Selecione imagem para altera-lá
            </label>
            <Input id="file" type="file" />
          </Photo>

          <Input type="name" placeholder="Ex.: Salada Ceasar" label="Nome" />

          <CustomSelect />
        
        <Section>
            <label htmlFor="ingredients">Ingredientes</label>
            <IngredientsTags>
              <IngredientsItem value="Pao Naan" />
              <IngredientsItem isNew placeholder="Adicionar" />
            </IngredientsTags>
        </Section>

        <Input type="number" placeholder="R$ 00,00" label="Preço"/>

        <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" label="Descrição"/>
        
        <div className="decision">
          <Button className="delete" title="Excluir prato"/>
          <Button disabled={true} title="Salvar alterações"/>
        </div>
      </Form>
      

      <Footer />
    </Container>
  )
}