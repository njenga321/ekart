import React, { useState, useEffect, useContext } from 'react';
import { db } from './firebase';
import './Orders.css';
import Order from './Order';
import { useStateValue } from './StateProvider';

function Orders() {
  const [{ user }, dispatch] = useStateValue(); // Correctly destructure the user object
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Start with loading off
  const [error, setError] = useState(null);
  let unsubscribe = null;

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) {
        // Handle case where user not logged in (optional: display message)
        <div>
          <h1>You Must be Logged In to View Your Orders</h1>
        </div>
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const userRef = db.collection('users').doc(user.uid);
        const userSnapshot = await userRef.collection('orders')
          .orderBy('created', 'desc')
          .get();

        const userOrders = userSnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
        setOrders(userOrders);
        console.log("Fetched orders:", userOrders);
      } catch (error) {
        setError(error);
        console.error("Error fetching orders:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();

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
