/**
 * Why did we use Classes and not interfaces in Typescript?
 */
 export class Movie {

    tmdb_id: number;
    title: string;
    year: string;
    genre: string;
    rating: number;
    description: string;
    img: string;

    constructor(tmdb_id: number, title: string, year: string, genre: string, rating: number, description: string, img: string) {
        this.tmdb_id = tmdb_id;
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.description = description;
        this.img = img;
    }
}