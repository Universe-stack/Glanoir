
export const handlePayment =(email,amount,nameItem,priceItem,amountItem,shipping,totalAmount) =>{
    
  const handler = PaystackPop.setup({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY, // Replace with your public key
        email,
        amount:amount*100,
        metadata:{
          custom_fields:[
            {
              display_name: "products",
              variable_name:"cart_items",
              value:`${nameItem}` 
            },
            {
              display_name: "prices",
              variable_name:"cart_prices",
              value:`${priceItem}` 
            },
            {
              display_name: "Amount",
              variable_name:"cart_amount",
              value:`${amountItem}` 
            }
          ]
        },

        onClose: ()=>{
          alert('Window closed.');
        },
        callback: function(response) {
          window.location = "/payments/info?reference=" + response.reference;
        }
      });

      handler.openIframe();
}