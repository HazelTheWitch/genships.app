export const ELEMENT_COLORS: { [name: string]: string } = {
    Anemo: '#80FFD7',
    Cryo: '#99FFFF',
    Dendro: '#B2EA2A',
    Electro: '#FFACFF',
    Geo: '#FFE699',
    Hydro: '#80C0FF',
    Pyro: '#FF9999',
}

export type CharacterInfo = {
    name: string,
    fullname: string,
    title: string,
    icon: string,
    cover?: string,
    element_color: string,
    child: boolean,
}