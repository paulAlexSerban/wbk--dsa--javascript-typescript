type Purchase = {
  product: string;
  deliveryType: string;
};

let Logistics: {
  issueExpressDelivery: (product: string) => void;
  trackExpressDelivery: (product: string) => void;
  issueInsuredDelivery: (product: string) => void;
  trackInsuredDelivery: (product: string) => void;
  issueStandardDelivery: (product: string) => void;
  trackStandardDelivery: (product: string) => void;
} = {
  issueExpressDelivery: (product: string) => {
    console.log(`Express delivery issued for ${product}`);
  },
  trackExpressDelivery: (product: string) => {
    console.log(`Tracking ${product} via express delivery`);
  },
  issueInsuredDelivery: (product: string) => {
    console.log(`Insured delivery issued for ${product}`);
  },
  trackInsuredDelivery: (product: string) => {
    console.log(`Tracking ${product} via insured delivery`);
  },
  issueStandardDelivery: (product: string) => {
    console.log(`Standard delivery issued for ${product}`);
  },
  trackStandardDelivery: (product: string) => {
    console.log(`Tracking ${product} via standard delivery`);
  },

};

interface Delivery {
  deliverProduct(): void;
  trackProduct(): void;
}

class DeliveryImplementation {
  protected purchase: Purchase;

  constructor(purchase: Purchase) {
    this.purchase = purchase;
  }
}

class ExpressDelivery extends DeliveryImplementation implements Delivery {
  deliverProduct() {
    Logistics.issueExpressDelivery(this.purchase.product);
  }

  trackProduct() {
    Logistics.trackExpressDelivery(this.purchase.product);
  }
}

class InsuredDelivery extends DeliveryImplementation implements Delivery {
  deliverProduct() {
    Logistics.issueInsuredDelivery(this.purchase.product);
  }

  trackProduct() {
    Logistics.trackInsuredDelivery(this.purchase.product);
  }
}

class StandardDelivery extends DeliveryImplementation implements Delivery {
  deliverProduct() {
    Logistics.issueStandardDelivery(this.purchase.product);
  }

  trackProduct() {
    Logistics.trackStandardDelivery(this.purchase.product);
  }
}

function createDelivery(purchase: Purchase) {
  if (purchase.deliveryType === 'express') {
    delivery = new ExpressDelivery(purchase);
  } else if (purchase.deliveryType === 'insured') {
    delivery = new InsuredDelivery(purchase);
  } else {
    delivery = new StandardDelivery(purchase);
  }
  return delivery;
}

let delivery: Delivery = createDelivery({
  product: '',
  deliveryType: ''
});

delivery.deliverProduct();