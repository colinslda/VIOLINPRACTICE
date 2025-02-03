const supabaseUrl = 'https://ewduzxamepfuutshqnfb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3ZHV6eGFtZXBmdXV0c2hxbmZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1ODI4NzQsImV4cCI6MjA1NDE1ODg3NH0.xTWWs3pkiOV45q39gDN_4Sf-ZBXHMOm_WM3C55ntfbI';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        document.getElementById('authMessage').textContent = error.message;
    } else {
        localStorage.setItem('supabaseUser', JSON.stringify(data));
        window.location.href = 'index.html';
    }
}

async function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    });

    if (error) {
        document.getElementById('authMessage').textContent = error.message;
    } else {
        document.getElementById('authMessage').textContent = 'Inscription réussie ! Veuillez vérifier votre email.';
    }
}

// Vérification de session au chargement
async function checkSession() {
    const { data, error } = await supabase.auth.getSession();
    
    if (data.session) {
        localStorage.setItem('supabaseUser', JSON.stringify(data));
        window.location.href = 'index.html';
    }
}

checkSession();
