
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

ReactDOM .render( el( Avatar, { id: 75, name: 'Ana María' } ), $app );

