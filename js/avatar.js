const $app = document .getElementById( 'app' );

const Avatar = params => {
    const 
        src = `https://randomuser.me/api/portraits/women/${ params .id }.jpg`,
        alt = params .name;

    return `
        <picture>
            <img src="${ src }" alt="${ alt }" />
            <p>${ params .name }</p>
        </picture>
    `;
}

$app .innerHTML += Avatar({ id: 75, name: 'Ana María' });
$app .innerHTML += Avatar({ id: 77, name: 'Luisa María' });
$app .innerHTML += Avatar({ id: 79, name: 'Elisa María' });

$app .querySelectorAll( 'img') .forEach( img => {
    img .addEventListener( 'click', () => {
        img .classList .toggle( 'disabled' );
    });
});