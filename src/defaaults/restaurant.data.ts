import Pic1 from "./../assts/1.png"
import Pic2 from "./../assts/2.png"
import Pic3 from "./../assts/3.png"
import Pic4 from "./../assts/4.png"
import Pic5 from "./../assts/5.png"
import Pic6 from "./../assts/6.jpg"

export const restaurantData:RestaurantType[] = [
    {
        id: 1,
        image: Pic1,
        title: "Пицца плюс",
        time: 50,
        rating: 4.5,
        price: 900,
        category: "Пицца" 
    },

    {
        id: 2,
        image: Pic2,
        title: "Тануки ",
        time: 53,
        rating: 5.5,
        price: 950,
        category: "Пицца" 
    },

    {
        id: 3,
        image: Pic3,
        title: "FoodBand",
        time: 40,
        rating: 6.5,
        price: 640,
        category: "Band" 
    },

    {
        id: 4,
        image: Pic4,
        title: "Жадина-пицца",
        time: 35,
        rating: 7.8,
        price: 909,
        category: "Жадина" 
    },

    {
        id: 5,
        image: Pic5,
        title: "Точка еды",
        time: 45,
        rating: 2.5,
        price: 990,
        category: "еды" 
    },

    {
        id: 6,
        image: Pic6,
        title: "PizzaBurger",
        time: 59,
        rating: 8.5,
        price: 900,
        category: "Burger" 
    },
    
] as const;

export interface RestaurantType {
    id: number;
    image: string;
    title: string;
    time: number;
    rating: number;
    price: number;
    category: string;
}