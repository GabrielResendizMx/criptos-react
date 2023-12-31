import styled from "@emotion/styled"

const Conetendor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 3rem;
`
const Imagen = styled.img`
    display: block;
    width:150px;
`


const Texto = styled.p`
    font-size: 18px; 
    span {
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 21px; 
     span {
        font-weight: 700;
    }
`


const Resultado = ({resultado}) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOURS, IMAGEURL, LASTUPDATE} = resultado;

  return (
   <Conetendor>
        <Imagen 
        src={`https://cryptocompare.com/${IMAGEURL}`} 
        alt="Imagen criptomoneda" 
        />
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOURS}</span></Texto>
            <Texto>Última acualización: <span>{LASTUPDATE}</span></Texto>
        </div>
   </Conetendor>
  )
}

export default Resultado