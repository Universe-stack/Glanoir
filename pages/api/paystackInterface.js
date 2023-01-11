
export const handlePayment =(email,amount) =>{
    const handler = PaystackPop.setup({
        key: 'pk_test_2bac86ed63ea670da42d698224dd35021ae59a49', // Replace with your public key
        email,
        amount:amount*100,

        onClose: ()=>{
          alert('Window closed.');
        },
        callback: function(response) {
          window.location = "/payments/info?reference=" + response.reference;
        }
      });

      handler.openIframe();
}