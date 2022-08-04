export interface TwitterData {
  data: TweetsContent[];
  meta: MetaData;
}

export interface TweetsContent {
  id: string;
  text: string;
}

export interface MetaData {
  result_count: number;
  oldest_id: string;
  newest_id: string;
  next_token: string;
}

export interface Msg {
  msg: string;
}
