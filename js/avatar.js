
const 
    $app = document .getElementById( 'app' ),
    { useState, Fragment } = React;

const Avatar = ({ id, name='Desconocido/a', size }) => {
    const 
        [ enabled, setEnabled ] = useState( true ),
        src = `https://randomuser.me/api/portraits/women/${ id }.jpg`,
        alt = name,
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
                            alt={ alt } 
                            onClick={ () => setEnabled( ! enabled ) }
                        />
                        <p>{ alt }</p>
                    </picture>
                :   null
            }
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

