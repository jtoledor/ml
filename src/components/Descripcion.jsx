import { Breadcrumbs, Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Buscador from './Buscador';

 function Descripcion(props){
   const [datos,setDatos] = React.useState({})

    
    React.useEffect(() =>{
        const peticion = async () => {
            let id = props.history.location.pathname.replace('/items/','')
            let options ={
                method: 'GET'
            }
            let response = await fetch('https://api.mercadolibre.com/items/'+id,options)
            if(response.status === 200){
                let datos = await response.json();
                setDatos(datos)
         
            }
    }
    peticion()
    },[])
        return (
            <div>
                
            <Buscador history={props.history}/>
                <Grid container className='bread'>
                    <Grid item lg={12}>
                    <Breadcrumbs aria-label="breadcrumb" separator='>'>
                        <Link underline="hover" color="inherit" href="/">
                        Electrónica, Audio y Video
                        </Link>
                        <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                        >
                        Ipod
                        </Link>
                        <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                        >
                        Reproductores
                        </Link>
                        <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                        >
                        Ipod Touch
                        </Link>
                        <Typography color="text.primary">32 Gb</Typography>
                    </Breadcrumbs>
                    </Grid>
                </Grid>
              <Grid container direction='column' className='descripcion-content'>
                  <Grid item xs={12}>
                    <Grid container  direction='row'>
                        <Grid item xs={9} className='img-descripcion'>
                            <img src={datos.pictures  ? datos.pictures[0].url : datos.thumbnail} alt='img' />
                        </Grid>
                        <Grid item xs={3}>
                            <p>{datos.condition} - {datos.sold_quantity} vendidos</p>
                            <h5>{datos.title}</h5>
                            <h3>$ {datos.price}</h3>
                            <div>
                            <Button variant='contained' color='primary' className='btn-comprar'>Comprar</Button>
                            </div>
                        </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <h4>Descripción del producto</h4>
                    <span>{datos.descriptions ? datos.descriptions[0] : 'Sin descripción' }</span>
                  </Grid>
              </Grid>
            </div>
        );
    
}

export default Descripcion;