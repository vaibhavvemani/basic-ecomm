// import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
// const supabase = createClient('https://aeyxclumolbhgmyapqjf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFleXhjbHVtb2xiaGdteWFwcWpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5MzQ4MDksImV4cCI6MjAyNDUxMDgwOX0.hsB2SCTTIyQRDkKayewdGnJL-Mw981wZvWMipzZg4C0')


// async function signUp() {
//   let user_email = email_input.value;
//   let user_password = password_input.value;
//   try {
//     const { data, error } = await supabase.auth.signUp({
//       email: user_email,
//       password: user_password,
//     })
//   } catch(err) {
//     console.error(err);
//   }
// }

const signup_btn = document.getElementById("signup-btn");
signup_btn.addEventListener('click', printer);

function printer() {
  console.log("Hello There");
}