
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
                        <p>{ enabled ? name : 'Identidad oculta' }</p>
                        <Counter />
                    </picture>
                :   null
            }
        </Fragment>
    );
}

/** Counter Component */
const Counter = () => {
    const [ counter, setCounter ] = useState( 0 );

    return (
        <Fragment>
            <span>{ counter }</span>
            <button onClick={ () => setCounter( counter + 1 ) }>+</button>
            <button onClick={ () => setCounter( counter - 1 ) }>-</button>
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

