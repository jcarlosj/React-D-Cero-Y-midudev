
const 
    $app = document .getElementById( 'app' ),
    { useState, Fragment } = React;

/** Avatar Component */
const Avatar = ({ id, name='Desconocido/a', size }) => {
    const 
        [ enabled, setEnabled ] = useState( true ),
        src = `https://randomuser.me/api/portraits/women/${ id }.jpg`,
        imgClassName = enabled ? '' : 'disabled';

    const getSize = () => {
        if( size === 'small' ) {
            return 'is-small';
        } else if( size === 'large' ) {
            return 'is-large';
        } else {
            return '';
        }
    }

    return (
        <Fragment>
            { id 
                ?   <picture className={ getSize() }>
                        <img 
                            className={ `${ getSize() } ${ imgClassName }` }
                            src={ src } 
                            alt={ name } 
                            onClick={ () => setEnabled( ! enabled ) }
                        />
                        { enabled 
                            ?   <Fragment>
                                    <p>{ name }</p>
                                    <Counter />
                                </Fragment>
                            :   <p>Identidad oculta</p>
                        }
                    </picture>
                :   null
            }
        </Fragment>
    );
}

/** Counter Component */
const Counter = () => {
    const [ votes, setVotes ] = useState({
        likes: 0,
        unlikes: 0,
        total: 0
    });

    return (
        <Fragment>
            <span>Votos { votes .total }</span>
            <button onClick={ () => { 
                setVotes({
                    ...votes,
                    likes: votes .likes + 1,
                    total: votes .total + 1
                }); 
            } }>like ({ votes .likes })</button>
            <button onClick={ () => { 
                setVotes({
                    ...votes,
                    unlikes: votes .unlikes + 1,
                    total: votes .total + 1
                });
            } }>unlike ({ votes .unlikes })</button>
        </Fragment>
    );
}

ReactDOM .render( 
    <div>
        <Avatar />
        <Avatar id={ 75 } name={ 'Ana María' } size="small" />
        <Avatar id={ 77 } />
        <Avatar id={ 79 } name={ 'Elisa María' } size="large" />
    </div>,
    $app
);

