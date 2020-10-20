
const 
    $app = document .getElementById( 'app' ),
    useState = React .useState;

const Avatar = props => {
    const 
        [ enabled, setEnabled ] = useState( true ),
        src = `https://randomuser.me/api/portraits/women/${ props .id }.jpg`,
        alt = props .name,
        className = enabled ? '' : 'disabled';

    return (
        <picture>
            <img 
                className={ className }
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
        <Avatar id={ 75 } name={ 'Ana María' } />
        <Avatar id={ 77 } name={ 'Luisa María' } />
        <Avatar id={ 79 } name={ 'Elisa María' } />
    </div>,
    $app
);

