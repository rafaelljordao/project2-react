import './signup.css'
import { But } from '../../Button/Button'
import { useState, useEffect } from 'react'

function SignUp() {

    const [className1, setClassName1] = useState("formBox1")
    const [className2, setClassName2] = useState("formBox2")
    const [className3, setClassName3] = useState("formBox3")

    useEffect(() => {
      setClassName1(className2)
    }, [])
    

    return (
        <div className='signUpBody'>
            <h3 className='titleForm'>CADASTRE-SE</h3>
            <form className='formBox1'>
                

                <input type="text" className='inputBox' name="fname" placeholder="Digite seu primeiro nome..." />

                <input type="text" className='inputBox' name="lname" placeholder="Digite seu sobrenome..." />

                <input type="text" className='inputBox' name="email" placeholder="Digite seu E-mail..." />

                <input type="text" className='inputBox' name="cellphone" placeholder="Digite seu telefone..." />

                <But txt="Próximo" onClick={() => setClassName1(className2)} />
            </form>
        </div>
    )
}

export default SignUp;