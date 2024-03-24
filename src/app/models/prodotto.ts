export class Prodotto {
    id:number = 0;
    title:string= '';
    price:number = 0;
    description:string = '';
    category:string = '';
    image:string = '';
    rating:any = { //ho optato per questa sintassi perchè è possibile accedere alle proprietà con la notazione punto, con una classe annidata avrei dovuto definire dei metodi d'accesso e di modifica
        'rate': 0,
        'count': 0
    };
  }