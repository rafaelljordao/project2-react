import './signup.css'
import { But } from '../../Button/Button'

export const SignUp = () => {

    return (
        <div className='signUpBody'>
            <h3 className='titleForm'>CADASTRE-SE</h3>
            <form className='formBox'>
                {/* <label htmlFor="fname">Primeiro nome:</label> */}
                <input type="text" className='inputBox' name="fname" placeholder="Digite seu primeiro nome..." />

                {/* <label htmlFor="lname">Sobrenome:</label> */}
                <input type="text" className='inputBox' name="lname" placeholder="Digite seu sobrenome..." />

                {/* <label htmlFor="email">E-mail:</label> */}
                <input type="text" className='inputBox' name="email" placeholder="Digite seu E-mail..." />

                {/* <label htmlFor="cellphone">Telefone:</label> */}
                <input type="text" className='inputBox' name="cellphone" placeholder="Digite seu telefone..." />

                {/* <div className='radioBox'>
                    <input type="radio" name="gender" className='inputRadio' />
                    <label htmlFor="gender" className='lblRadio'>Masculino</label>

                    <input type="radio" name="gender" className='inputRadio' />
                    <label htmlFor="gender">Feminino</label>
                </div> */}

                <But txt="Próximo" />
            </form>      
        </div>
    )
}