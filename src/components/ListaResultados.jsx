import { Grid } from '@material-ui/core';
import React from 'react';
import LocalShippingOutlined from '@material-ui/icons';

import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import '../assets/css/style.css'
import img from '../assets/img/img.jpg';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';

import { NavLink } from "react-router-dom";
import Buscador from './Buscador';

function ListaResultados (props){
    const [datos,setDatos] = React.useState([]);   
  
    React.useEffect(()=>{
        let search = props.history.location.search.replace('?search=','')
        
        const peticion = async () =>{
            let options = {
                method: 'GET'
            }
            const result = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + search,options);
            if(result.status === 200){
                let datos = await result.json();
                setDatos(datos.results)
            }
        }
        peticion() 
    },[])

    const handleClickProducto = id => e => {
        e.preventDefault();
        props.history.push('/items/'+id);
    }
        return (
            <>
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
                <div className='content'>
                    {datos.map(r =>(
                        <>
                        <Grid container className='list-content' onClick={handleClickProducto(r.id)}>
                        <Grid item lg={2} className='p-2'>
                                <img src={r.thumbnail} width={120} height={120}/>
                        </Grid>
                        <Grid item lg={8}>
                            <Grid container direction={'column'} className='txt-producto'>
                                <Grid item lg={12} className='txt-costo'>
                                        <span>${r.price}</span>
                                        {r.shipping.free_shipping ? 
                                        <span className='icon-truck'><LocalShippingOutlinedIcon className='icon-shipping'/></span>
                                        : ''}
                                </Grid>
                                <Grid item lg={9} className='txt-descripcion'>
                                    <h5>{r.title}</h5>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={2} className='mt-2'>
                            <h6>{r.address.city_name}</h6>
                        </Grid>
                    </Grid>
                    <Grid container className='list-content'>
                        <Grid item lg={12} >
                            <hr className='line'></hr>
                        </Grid>
                    </Grid>
                    </>
                    ))}
                </div>
            </>
        );
}

export default ListaResultados;