import React from "react";
const Form = () => {

  return (
    <div>

      <div>
        <label htmlFor="FirstName">Primeiro nome</label>
        <input type="text" id="FirstName" placeholder="Primeiro nome" />
      </div>

      <div>
        <label htmlFor="SurName">Sobrenome</label>
        <input type="text" id="SurName" placeholder="SobreNome" />
      </div>

      <div>
        <label htmlFor="Old">Idade</label>
        <input type="text" placeholder="Idade" />
      </div>

      <div>
        <label htmlFor="Son">Filho</label>
        <input type="number" placeholder="quantos Filhos" />
        <input type="text" placeholder="Idade" />
        <input type="text" placeholder="nome(s)" />
        
      </div>
    </div>
  )
}
export default Form;