class PayPalGateway {
  constructor() {
    this.name = "PayPal";
  }
  processPayment(amount) {
    console.log(`Processing ${amount} through ${this.name}`);
  }
}

class StripeGateway {
  constructor() {
    this.name = "Stripe";
  }
  processPayment(amount) {
    console.log(`Processing ${amount} through ${this.name}`);
  }
}

class PaymentFactory {
  static createPaymentGateway(type) {
    switch (type) {
      case "paypal":
        return new PayPalGateway();
      case "stripe":
        return new StripeGateway();
      default:
        throw new Error(`Invalid payment gateway type: ${type}`);
    }
  }
}

function processOrder(paymentType, amount) {
  try {
    const paymentGateway = PaymentFactory.createPaymentGateway(paymentType);
    paymentGateway.processPayment(amount);
  } catch (error) {
    console.log(error.message);
  }
}

processOrder("paypal", 100);
processOrder("stripe", 200);
processOrder("upsupported", 300);
