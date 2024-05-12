import React, { useState, useEffect } from 'react';
import './Orders.css';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch
import Order from '../../components/order/Order';
import { doc, setDoc, serverTimestamp, collection } from "firebase/firestore";
import { db } from '../../config/firebase';

function Orders() {
  const user = useSelector((state) => state.user); // Access user state from slice
  const dispatch = useDispatch(); // Get dispatch for actions (if needed)

  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let unsubscribe = null;

  const fetchOrders = async () => {
    setIsLoading(true);
    setError(null);
    const fetchedOrders ={};

    try {
      // Fetch orders based on user ID (potentially from an API or local storage)
      // ... (Logic to fetch orders based on user ID)
      const fetchOrders = async () => {
        // ... (fetchOrders function body)
      };

      setOrders(fetchedOrders);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();

    unsubscribe = db.collection('users').doc(user.uid)
      .collection('orders')
      .orderBy('created', 'desc')
      .onSnapshot(snapshot => {
        setOrders(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
      }, error => {
        setError(error);
      });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [user]);

  return (
    <div className='orders'>
      {user ? (
        <>
          <h1>Your orders</h1>

          {isLoading && <p>Loading orders...</p>}
          {error && <p>Error fetching orders: {error.message}</p>}

          {!isLoading && !error && orders.length === 0 && <p>No orders found.</p>}

          <div className='orders_order'>
            {orders.map(order => (
              <Order order={order} key={order.id} />
            ))}
          </div>
        </>
      ) : (
        <div>
          <h1>You Must be Logged In to View Your Orders</h1>
        </div>
      )}
    </div>
  );
}

export default Orders;
