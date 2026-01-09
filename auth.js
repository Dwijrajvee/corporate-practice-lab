console.log("auth.js loaded ✅");

const SUPABASE_URL = "https://zfvrszqwuziwmunayfrv.supabase.co";
const SUPABASE_KEY = "sb_publishable_JXB2Q0QQAF-qToc6Rl8tqA_zy27wji3";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// IMPORTANT: attach to window so onclick can find it
window.login = async function login() {
  console.log("Login clicked ✅");

  const { data, error } = await supabaseClient.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: window.location.origin + "/dashboard.html",
    },
  });

  if (error) {
    console.error(error);
    alert("Login error: " + error.message);
  } else {
    console.log("Redirecting to:", data?.url);
  }
};

