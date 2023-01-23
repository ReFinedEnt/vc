import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jbtankfghltbbvarqsba.supabase.co/';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
console.log(supabase);

// fetch leaderboard for current day
export const leaderboardFetch = async () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${year}-${month}-${day}`;

  let { data: res, error } = await supabase
    .from('illuvium')
    .select()
    .eq('date', currentDate);
  console.log(res);
  return res;
};

// fetch leaderboard for previous day
export const leaderboardNextFetch = async () => {
  const date = new Date();
  const day = date.getDate() + 1;
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${year}-${month}-${day}`;

  let { data: res, error } = await supabase
    .from('illuvium')
    .select()
    .eq('date', currentDate);
  // console.log(illuvium);
  return res;
};

// fetch everything
export const supaFetch = async () => {
  let { data: res, error } = await supabase.from('illuvium').select('*');
  // console.log(illuvium);
  return res;
};

// fetch unique players
export const uniquePlayers = async () => {
  const { data, error } = await supabase.rpc('unique_players');
  return data;
};
