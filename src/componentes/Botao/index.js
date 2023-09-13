import './Botao.css'

const Botao = (prosps) => {
    return (
        <button className='botao'>
            {prosps.children}
        </button>
    )
}

export default Botao