
const 
    $app = document .getElementById( 'app' ),
    useState = React .useState;

const Avatar = props => {
    const 
        [ enabled, setEnabled ] = useState( true ),
        src = `https://randomuser.me/api/portraits/women/${ props .id }.jpg`,
        alt = props .name,
        smallClassName = props .size === 'small' ? 'is-small' : '',
        imgClassName = enabled ? '' : 'disabled';

    return (
        <picture className={ smallClassName }>
            <img 
                className={ `${ smallClassName } ${ imgClassName }` }
                src={ src } 
                alt={ alt } 
                onClick={ () => setEnabled( ! enabled ) }
            />
            <p>{ alt }</p>
        </picture>
    );
}

ReactDOM .render( 
    <div>
        <Avatar id={ 75 } name={ 'Ana María' } size="small" />
        <Avatar id={ 77 } name={ 'Luisa María' } />
        <Avatar id={ 79 } name={ 'Elisa María' } />
    </div>,
    $app
);

