import './FormButton.style.scss'

function FormButton({color='black', backgroundColor='blue', children}) {
  
    return (
        <button className='form-button' style={{ color, backgroundColor }}>
           {children}
        </button>
    )
}

export default FormButton
