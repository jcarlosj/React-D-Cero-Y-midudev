
const 
    $app = document .getElementById( 'app' ),
    useState = React .useState;

const Avatar = props => {
    const 
        [ enabled, setEnabled ] = useState( true ),
        src = `https://randomuser.me/api/portraits/women/${ props .id }.jpg`,
        alt = props .name,
        imgClassName = enabled ? '' : 'disabled';

    const getSize = () => {
        if( props .size === 'small' ) {
            return 'is-small';
        } else if( props .size === 'large' ) {
            return 'is-large';
        } else {
            return '';
        }
    }

    return (
        <picture className={ getSize() }>
            <img 
                className={ `${ getSize() } ${ imgClassName }` }
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
        <Avatar id={ 79 } name={ 'Elisa María' } size="large" />
    </div>,
    $app
);

