
const 
    $app = document .getElementById( 'app' ),
    el = React .createElement;

const Avatar = params => {
    const 
        src = `https://randomuser.me/api/portraits/women/${ params .id }.jpg`,
        alt = params .name;

    return (
        <div>
            <img src={ src } alt={ alt } />
            <p>{ alt }</p>
        </div>
    );
}

ReactDOM .render( 
    <picture>
        <Avatar id={ 75 } name={ 'Ana María' } />
        <Avatar id={ 77 } name={ 'Luisa María' } />
        <Avatar id={ 79 } name={ 'Elisa María' } />
    </picture>,
    $app
);

