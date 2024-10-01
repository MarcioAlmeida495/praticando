import './styles.css'

export default function Button({children, onClick}){
    console.log('filho renderizado')
    return (
        <button className='buttonS1' onClick={()=>onClick(30)} type="button">{children}</button>
    )
}