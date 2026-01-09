console.log("auth.js loaded ✅");

const SUPABASE_URL = "https://zfvrszqwuziwmunayfrv.supabase.co";
const SUPABASE_KEY = "PASTE_FULL_PUBLISHABLE_KEY_HERE";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

window.login = async function () {
  console.log("Login clicked ✅");

  const { data, error } = await supabaseClient.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: window.location.origin + "/dashboard.html",
    },
  });

  if (error) {
    console.error(error);
    alert(error.message);
  }
};
