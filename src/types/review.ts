export interface SkeepersModerator {
  comment: string;
  date: string;
  origin: string;
  origin_type: string;
}

export interface SkeepersExtra {
  display_name: string;
  label: string;
  type: string;
  value: string;
}

export interface SkeepersReview {
  review_id: string;
  order_reference: string;
  shop_key: string;
  review_content: string;
  author_lastname: string;
  review_rate: number; // 1 à 5
  incentivization: string;
  locale: string;
  is_verified: boolean;
  order_date: string;
  review_date: string;
  is_personal_data_disclosed: boolean;
  author_firstname: string;
  publish_date: string;
  website_id: string;
  moderations: SkeepersModerator[];
  extras: Record<string, SkeepersExtra>;
}
