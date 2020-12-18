import React,{useState} from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 750,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Imagen = ({item}) => {

    //Destructuring a items de unsplash
    const {urls,likes,description,user} = item;
    const twiter="https://twitter.com/"+user.twitter_username;

    //Configuracion del modal de materialize
    const [modalStyle] = useState(getModalStyle);
    const [open,setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () =>{
        setOpen(true);
    }
    const handleClose = () =>{
        setOpen(false);
    }
    
    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card">
                    <img src={urls.regular}  
                         className="card-img-top" 
                         onClick={() =>{
                            handleOpen();
                        }}
                    />
                    <div className="card-body">
                        <p className="card-text">Autor: {user.name}</p>
                        <p className="card-text">
                          Twitter: <a href={twiter}>@{user.twitter_username}</a>
                        </p>
                    </div>
                    <Modal
                        open={open}
                        onClose={()=>{
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <img src={urls.regular} className="card-img-top" />
                            <p className="card-text">{likes} Me gusta</p>
                            <p className="card-text">Descripción: {description}</p>
                        </div>
                    </Modal>
                </div>
        </div>
     );
}
 
export default Imagen;