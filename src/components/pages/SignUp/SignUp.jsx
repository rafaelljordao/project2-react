import './signup.css'

export const SignUp = () => {
    return (
        <div className='signUpBody'>
            <form className='formBox'>
                <label htmlFor="fname">Primeiro nome:</label>
                <input type="text" className='inputBox' name="fname" placeholder="Digite seu primeiro nome..." />

                <label htmlFor="lname">Sobrenome:</label>
                <input type="text" className='inputBox' name="lname" placeholder="Digite seu sobrenome..." />

                <label htmlFor="email">E-mail:</label>
                <input type="text" className='inputBox' name="email" placeholder="Digite seu E-mail..." />

                <label htmlFor="cpf">CPF:</label>
                <input type="text" className='inputBox' name="cpf" placeholder="Digite seu CPF..." />

                <div className='radioBox'>
                    <input type="radio" name="gender" className='inputRadio' />
                    <label htmlFor="gender" className='lblRadio'>Masculino</label>

                    <input type="radio" name="gender" className='inputRadio' />
                    <label htmlFor="gender">Feminino</label>
                </div>
            </form>      
        </div>
    )
}