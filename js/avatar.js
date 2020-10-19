
const 
    $app = document .getElementById( 'app' );

const Avatar = params => {
    const 
        src = `https://randomuser.me/api/portraits/women/${ params .id }.jpg`,
        alt = params .name;

    return (
        <picture>
            <img 
                src={ src } 
                alt={ alt } 
                onClick={ event => {
                    event .target .classList .toggle( "disabled" );
                }}
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

