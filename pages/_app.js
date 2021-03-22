import { useState } from "react";
import AddToCartContext from "../components/Context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    const [items, setItems] = useState([]);
    const addItem = (it, price, id, key , img) => {
        let card = [];
        let addNew = true;

        if (items) {
            card = items;
            card.forEach((item, i) => {
                if (id == item.id) {
                    card[i].balance = item.balance + 1;
                    addNew = false;
                }
            });
        }

        if (addNew) {
            card.push({
                id: id,
                balance: 1,
                name: it,
                price: price,
                img : img
            });
        }
        setItems([...card]);
    };
    const plus = (it, price, id, key) => {
        let tempCard = [...items];

        tempCard.forEach((item, i) => {
            if (id == item.id) {
                tempCard[i].balance = item.balance + 1;
            }
        });

        setItems(tempCard);
    };

    const neg = (it, price, id, key) => {
        let tempCard = [...items];
        let shouldRemoveId = false;
        tempCard.forEach((item, i) => {
            if (id == item.id) {
                if (item.balance > 1) {
                    tempCard[i].balance = item.balance - 1;
                } else {
                    shouldRemoveId = item.id;
                }
            }
        });

        if (shouldRemoveId !== false) {
            tempCard = tempCard.filter((item) => {
                return !(item.id === shouldRemoveId);
            });
        }

        setItems(tempCard);
    };
    const clear = () => {
        setItems("")
    }
    return (
        <AddToCartContext.Provider
            value={{
                items,
                addItem,
                plus,
                neg,
                clear
            }}
        >
            <Component {...pageProps} />
        </AddToCartContext.Provider>
    );
}

export default MyApp;
