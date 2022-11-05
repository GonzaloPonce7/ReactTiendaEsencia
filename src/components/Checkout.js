import React, { useState } from 'react'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { useCart } from '../context/CartContext'
import { Formik, Field, Form } from 'formik'
import { Link } from 'react-router-dom';
import * as yup from 'yup';

const Order = () => {

  const [user, setUser] = useState({})
  const {cartList, getTotal, clearCart} = useCart();

  const putOrder = ( newUser ) => {

    setUser(newUser)
    const order = {
      buyer: user,
      items: cartList,
      total: getTotal
    };
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    addDoc( ordersCollection, order )
      .then( ({id}) => {
        alert("Se creo la orden con el id: " + id );
        clearCart()
    })
      .catch((err) => {
        alert("Error: " + err)
      } )
  };

  let SignupSchema = yup.object().shape({
    name: yup.string().min(2, 'Minimo 2 caracteres').max(50, 'Max 50 caracteres').required('Campo requerido'),
    phone: yup.number('Solo numeros').required('Campo requerido').positive('Invalido').integer('Posta? Donde vivis?'),
    email: yup.string().email('Email invalido').required('Requerido'),
    createdOn: yup.date().default(function () {
      return new Date();
    }),
  });

  return (
    <div>
      <h1 className='text-5xl'>Orden</h1>
      {cartList.map( (e, i)  => <li key={i}>{e.item.name}</li> )}
      <div className='text-info'>Total: {getTotal}</div>

    {
      cartList.length === 0? 
      <>
        <strong>No hay elementos en el carrito</strong>
        <div>
          <Link to='/shop' >
            <button className='btn'>Volver al catalogo</button>
          </Link>
        </div>
      </>
      : 
      <Formik initialValues={{ name: '', phone: '', email: ''}} onSubmit={putOrder} validationSchema={SignupSchema}>
        {({ errors, touched }) => (
        <Form>
          <div>
            <label htmlFor="name">Nombre</label>
            <Field id="name" name="name"/>
              {errors.name && touched.name ? (<div className='text-warning'>{errors.name}</div>) : null}
          </div> <br/>

          <div>
            <label htmlFor="phone">Telefono</label>
            <Field id="phone" name="phone"/>
              {errors.phone && touched.phone ? (<div className='text-warning'>{errors.phone}</div>) : null}
          </div> <br/>

          <div>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email"/>
              {errors.email && touched.email ? <div className='text-warning'>{errors.email}</div> : null}
          </div><br/>
          <button className='btn'  type="submit">Enviar orden</button>
        </Form>
        )}
      </Formik>
    }
    </div>
  )
};

export default Order