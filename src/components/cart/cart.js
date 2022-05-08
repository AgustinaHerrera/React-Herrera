import "./Cart.css";
import Togglable from "../Togglable/Togglable";
import ContactForm from "../ContactForm/ContactForm";
import { useState, useContext, useRef } from "react";
import CartContext from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { createOrderAndUpdateStock } from "../../services/firebase/firestore";
import { useNotificationServices } from "../../Notification/notification";

const Cart = () => {
  const [processingOrder, setProcessingOrder] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    address: "",
    comment: "",
  });
  const { products, clearCart, getTotal} = useContext(CartContext);

  const contactFormRef = useRef();

  const setNotification = useNotificationServices();

  const confirmOrder = () => {
    if (
      contact.phone !== "" &&
      contact.address !== "" &&
      contact.comment !== "" &&
      contact.name !== ""
    ) {
      setProcessingOrder(true);

      const objOrder = {
        buyer: contact,
        items: products,
        total: getTotal()
      };

    createOrderAndUpdateStock (products, objOrder).then (id =>{
      clearCart()
      setNotification( 'success', `La orden se genero exitosamente, su numero de orden es: ${id}`)
    }).catch((error) => {
      setNotification("error",`El producto que seleccionó no tiene stock` ,error);
    })
    .finally(() => {
      setProcessingOrder(false);
    }); }else {
      setNotification(
        "error", "Debe completar los datos de contacto para generar la orden");
}};

  if (processingOrder) {
    return <h1 className="Sub2">Se esta procesando su orden</h1>;
  }

  if (products.length === 0) {
    return (
      <div>
        <h1 className="Sub">Cart</h1>
        <h2 className="Sub2">No hay productos en el carrito</h2>
      </div>
    );
  }

  return (
    <div>
      <h1 className="Sub">Cart</h1>
      {products.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3 className="Sub2">Total: ${getTotal()}</h3>
      <button onClick={() => clearCart()} className="Button">
        Cancelar compra
      </button>
      <button onClick={() => confirmOrder()} className="Button">
        Confirmar Compra
      </button>
      {contact.phone !== "" &&
        contact.address !== "" &&
        contact.comment !== "" &&
        contact.name !== "" && (
          <div>
            <h4 className="Text">Nombre: {contact.name}</h4>
            <h4 className="Text">Telefono: {contact.phone}</h4>
            <h4 className="Text">Direccion: {contact.address}</h4>
            <h4 className="Text">Comentario: {contact.comment}</h4>
            <button
              onClick={() =>
                setContact({ phone: "", address: "", comment: "" })
              }
              className="Button"
              style={{ backgroundColor: "#db4025" }}
            >
              Borrar datos de contacto
            </button>
          </div>
        )}
      <Togglable
        buttonLabelShow={
          contact.phone !== "" &&
          contact.address !== "" &&
          contact.comment !== "" &&
          contact.name !== ""
            ? "Editar contacto"
            : "Agregar contacto"
        }
        ref={contactFormRef}
      >
        <ContactForm
          toggleVisibility={contactFormRef}
          setContact={setContact}
        />
      </Togglable>
    </div>
  );
};

export default Cart;

