/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const BASE_PRICE = 178000;

const DiscountPerDays = {
  '1 a 7 días': 0,
  '8 a 11 días': 0.02,
  '12 a 19 días': 0.04,
  '20 días o más': 0.06,
};

const DiscountPerPlan = {
  Mensual: 0,
  Trimestral: 0.08,
  Semestral: 0.1,
  Anual: 0.16,
};

export function calculatePrice(days: number, plan: string) {
  let volumeDiscount = 0;

  if (days >= 8 && days <= 11) {
    volumeDiscount = DiscountPerDays['8 a 11 días'];
  } else if (days >= 12 && days <= 19) {
    volumeDiscount = DiscountPerDays['12 a 19 días'];
  } else if (days >= 20) {
    volumeDiscount = DiscountPerDays['20 días o más'];
  }

  plan = DiscountPerPlan[plan] ? plan : 'Mensual';

  const planDiscount = DiscountPerPlan[plan];

  const brutalPrice = BASE_PRICE * days;

  const volumeDiscountAmount = brutalPrice * volumeDiscount;

  const priceAfterVolumeDiscount = brutalPrice - volumeDiscountAmount;

  const planDiscountAmount = priceAfterVolumeDiscount * planDiscount;

  const finalPrice = priceAfterVolumeDiscount - planDiscountAmount;

  return {
    finalPrice,
    brutalPrice,
    volumeDiscount,
    planDiscount,
  };
}
