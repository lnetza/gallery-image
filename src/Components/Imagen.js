import React from 'react';

const Imagen = ({item}) => {

    //Destructuring a items de unsplash

    const {urls,likes,description,user} = item;
    const twiter="https://twitter.com/"+user.twitter_username;

    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card">
                    <img src={urls.regular}  className="card-img-top" />
                    <div className="card-body">
                        <p className="card-text">{likes} Me gusta</p>
                        <p className="card-text">Descripción: {description}</p>
                        <p className="card-text">Autor: {user.name}</p>
                        <p className="card-text">
                          Twitter: <a href={twiter}>@{user.twitter_username}</a>
                        </p>
                    </div>
                </div>
        </div>
     );
}
 
export default Imagen;