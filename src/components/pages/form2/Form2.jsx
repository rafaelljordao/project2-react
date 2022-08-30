

export const Form2 = () => {

    return (
        <div className='signUpBody'>
            <h3 className='titleForm'>PARTE 2</h3>
            <form className='formBox'>
                <input type="text" className='inputBox' name="fname" placeholder="Digite seu primeiro nome..." />

                <input type="text" className='inputBox' name="lname" placeholder="Digite seu sobrenome..." />

                <input type="text" className='inputBox' name="email" placeholder="Digite seu E-mail..." />

                <input type="text" className='inputBox' name="cellphone" placeholder="Digite seu telefone..." />

                <But txt="Próximo" onClick={nextFormAgain} />
            </form>      
        </div>
    )
}