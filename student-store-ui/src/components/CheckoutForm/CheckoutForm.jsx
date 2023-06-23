// import React, { useState } from 'react';
// import './CheckoutForm.css'


// const CheckoutForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [agree, setAgree] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Add logic for handling form submission here

//     // Reset the form fields
//     setName('');
//     setEmail('');
//     setAgree(false);
//   };

//   return (
//     <div className="checkout-form">
//       <h2>Checkout</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="agree">
//             <input
//               type="checkbox"
//               id="agree"
//               checked={agree}
//               onChange={(e) => setAgree(e.target.checked)}
//             />
//             I agree to the terms and conditions
//           </label>
//         </div>
//         <button type="submit" disabled={!agree}>
//           Checkout
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CheckoutForm;

