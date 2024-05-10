export class Pelicula{
    public codPelicula: number;
    public nombrePelicula: string;
    public protagonistaPelicula: string;
    public codgeneroPelicula: string;
    public imagenPelicula: string;
    public imagenPeliculaBase64: string;

    constructor(codp: number, nomb: string, prot: string, codg: string, imag: string, base: string){
        this.codPelicula = codp;
        this.nombrePelicula = nomb;
        this.protagonistaPelicula = prot;
        this.codgeneroPelicula =codg;
        this.imagenPelicula = imag;
        this.imagenPeliculaBase64 = base;
    }
}