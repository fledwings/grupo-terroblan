import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a dummy client if environment variables are missing to prevent crashes
const createDummyClient = () => {
  console.warn('Supabase environment variables are missing. Using dummy client.');
  return {
    functions: {
      invoke: async (functionName, options) => {
        console.error(`Supabase is not configured. Function ${functionName} cannot be invoked.`);
        return { data: null, error: new Error('La funcionalidad no está disponible porque Supabase no está configurado.') };
      }
    },
    from: () => ({
      select: () => ({
        eq: () => ({
          single: async () => ({ data: null, error: new Error('Supabase not configured') })
        })
      })
    }),
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    }
  };
};

export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : createDummyClient();
