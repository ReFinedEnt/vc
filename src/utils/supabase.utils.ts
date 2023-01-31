// Supabase
import { createClient } from "@supabase/supabase-js";
// Supabase URL
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// Supabase API Key
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
if (!supabaseKey || !supabaseUrl)
  throw new Error("invalid config, check your .env");
// Supabase Client
const supabase = createClient(supabaseUrl, supabaseKey);

import {
  TWITTER_ID_FOUNDER_ONE,
  TWITTER_ID_FOUNDER_TWO,
} from "../constants/constants";

// fetch balance sheet
export const queryTwitter = async (
  // if no twitterId, use mock
  twitterId: string = "founder_mock"
): Promise<any> => {
  // instantiate founder string
  let founder: string = "";
  // twitterId == founder_one
  if (twitterId == TWITTER_ID_FOUNDER_ONE) {
    founder = "founder_one";
    // twitterId == founder_two
  } else if (twitterId == TWITTER_ID_FOUNDER_TWO) {
    founder = "founder_two";
    // if no twitterId, use mock
  } else if (twitterId == "founder_mock") {
    founder = "founder_mock";
  }
  console.log(founder);
  // query supabase
  let { data: res, error } = await supabase.from(founder).select("*");
  // log error if any
  if (error) console.log(error);
  // log result
  //   console.log(res);
  return res;
};
