// ==========================================
// SUPABASE CONFIGURATION
// ==========================================

const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";

const SUPABASE_PUBLISHABLE_KEY =
    "YOUR_SUPABASE_PUBLISHABLE_KEY";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);


// ==========================================
// LOGIN
// ==========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;

        const message =
            document.getElementById("loginMessage");

        message.textContent = "Signing in...";

        const { data, error } =
            await supabaseClient.auth.signInWithPassword({
                email,
                password
            });

        if (error) {

            message.textContent =
                error.message;

            return;
        }

        message.textContent =
            "Login successful. Redirecting...";

        window.location.href = "dashboard.html";
    });
}


// ==========================================
// SIGN UP
// ==========================================

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const email =
            document.getElementById("signupEmail").value.trim();

        const password =
            document.getElementById("signupPassword").value;

        const message =
            document.getElementById("signupMessage");

        message.textContent = "Creating account...";

        const { data, error } =
            await supabaseClient.auth.signUp({
                email,
                password
            });

        if (error) {

            message.textContent =
                error.message;

            return;
        }

        message.textContent =
            "Account created. Please check your email to verify your account.";

        signupForm.reset();
    });
}
