import { useEffect } from 'react';
import axios from '../../middleware/axios';
import { db } from '../../config/firebase';
import { doc, setDoc, collection } from "firebase/firestore";

const Stripe = ({ basket, user, clientSecret, setProcessing, setSucceeded, setError, dispatch, navigate }) => {

  useEffect(() => {
    const handlePayment = async () => {
      setProcessing(true);

      try {
        const response = await axios.post(`/payments/create?total=${getBasketTotal(basket) * 100}`);
        const stripe = await loadStripe('<YOUR_STRIPE_PUBLIC_KEY>');

        if (!stripe) {
          throw new Error("Stripe.js has not loaded correctly.");
        }

        const { error } = await stripe.redirectToCheckout({
          sessionId: response.data.id,
        });

        if (error) {
          throw new Error(error.message);
        }

        const userDocRef = doc(db, 'users', `${user?.uid}`);
        const orderDocRef = doc(collection(userDocRef, 'orders'), response.data.id);

        await setDoc(orderDocRef, {
          basket: basket,
          amount: response.data.amount,
          created: response.data.created,
        });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch(emptyBasket());
        navigate("/orders", { replace: true });
      } catch (error) {
        setError(error.message);
        setProcessing(false);
      }
    };

    if (clientSecret) {
      handlePayment();
    }
  }, [clientSecret, basket, user, setProcessing, setSucceeded, setError, dispatch, navigate]);

  return null; // No need to render anything in Stripe.js
};

export default Stripe;
