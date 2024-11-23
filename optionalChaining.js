// The optional chaining (?.) operator accesses an object's property or calls a function. 
// If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

// obj.val?.prop
// obj.val?.[expr]
// obj.func?.(args)


const customer = {
    name: "Carl",
    details: {
      age: 82,
      location: "Paradise Falls", // Detailed address is unknown
    },
  };
  const customerCity = customer.details?.address?.city;
  
  // This also works with optional chaining function call
  const customerName = customer.name?.getName?.(); // Method does not exist, customerName is undefined
  