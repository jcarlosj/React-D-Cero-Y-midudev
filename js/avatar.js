
const 
    $app = document .getElementById( 'app' ),
    el = React .createElement;

const Avatar = params => {
    const 
        src = `https://randomuser.me/api/portraits/women/${ params .id }.jpg`,
        alt = params .name;

    return el( 'img', {
        src, alt
    });
}

ReactDOM .render( 
    el( 
        'div', 
        null, 
        [
            el( Avatar, { id: 75, name: 'Ana María' } ),
            el( Avatar, { id: 77, name: 'Luisa María' } ),
            el( Avatar, { id: 79, name: 'Elisa María' } )
        ]),
        $app
);
