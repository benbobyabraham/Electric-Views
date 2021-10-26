import React, { useEffect, useState } from "react";
import CartItem from "../components/Common/CartItem";
import { fetchCarts } from "../reducks/cart/operations";
import { fetchItems } from "../reducks/items/operations";
import { getCarts } from "../reducks/cart/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducks/users/selectors";
import { getItems } from "../reducks/items/selectors";

const Cart = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const user = getUser(selector);
  const items = getItems(selector);

  useEffect(() => {
    if (user.token != "") {
      dispatch(fetchCarts(user.token));
      console.log(carts);
    }
  }, [user]);

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchCarts());
  }, []);
  return (
    <>
      <div class="box">
        <p>- Order your items -</p>
      </div>
      <section class="content">
        <ul class="items">
          {
            (carts,
            items &&
              carts.map((cart) => (
                <li>
                  <CartItem cart={cart.item} key={cart.item.id} />
                </li>
              )))
          }
        </ul>
      </section>
    </>
  );
};

export default Cart;
