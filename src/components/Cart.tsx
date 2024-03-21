interface Menu {
  imageUrl: string;
  title: string;
  description: string;
  categories: string[];
}

interface Cocktail {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

interface Cocktails {
  drinks: Cocktail[];
}
interface Extras {
  name: string;
  quantity: number;
}

export default function Cart() {}
