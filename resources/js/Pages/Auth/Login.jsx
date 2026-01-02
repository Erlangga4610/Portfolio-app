import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

// Komponen Ikon Bola Naga Sederhana (4 Bintang)
const DragonBallIcon = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="url(#ballGradient)" stroke="#F59E0B" strokeWidth="2"/>
        <path d="M50 25L53 35H63L55 41L58 51L50 45L42 51L45 41L37 35H47L50 25Z" fill="#DC2626"/> {/* Bintang Atas */}
        <path d="M50 75L53 85H63L55 91L58 101L50 95L42 101L45 91L37 85H47L50 75Z" fill="#DC2626" transform="translate(0 -20) scale(0.6)"/>
        <path d="M25 50L28 60H38L30 66L33 76L25 70L17 76L20 66L12 60H22L25 50Z" fill="#DC2626" transform="translate(10 0) scale(0.6)"/>
        <path d="M75 50L78 60H88L80 66L83 76L75 70L67 76L70 66L62 60H72L75 50Z" fill="#DC2626" transform="translate(-10 0) scale(0.6)"/>
        <defs>
            <radialGradient id="ballGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30 30) rotate(0) scale(70)">
                <stop stopColor="#FCD34D" />
                <stop offset="1" stopColor="#F59E0B" />
            </radialGradient>
        </defs>
    </svg>
);

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="flex min-h-screen w-full bg-slate-50 font-sans">
            <Head title="Log in" />

            {/* --- BAGIAN KIRI: VISUAL (Awan Kinton / Langit Senja) --- */}
            <div className="hidden lg:flex w-1/2 relative bg-orange-500 items-center justify-center overflow-hidden">
                {/* Gambar Background: Langit Senja (Vibe Dragon Ball Z Ending) */}
                <img 
                    src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=2103&auto=format&fit=crop" 
                    alt="Dragon Ball Vibe Landscape" 
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80"
                />
                
                {/* Gradient Overlay (Warna Gi Goku: Orange ke Navy) */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 via-orange-500/60 to-blue-900/90"></div>
                
                {/* Efek Partikel/Bintang (CSS Dot Pattern) */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                {/* Konten Text */}
                <div className="relative z-10 p-12 text-white max-w-lg text-center">
                    <div className="mb-6 flex justify-center animate-bounce-slow">
                        <DragonBallIcon className="w-24 h-24 drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]" />
                    </div>
                    <h2 className="text-5xl font-black tracking-tighter uppercase italic drop-shadow-lg">
                        Power Up <br/> <span className="text-yellow-300">Your Portfolio</span>
                    </h2>
                    <p className="mt-6 text-lg text-orange-50 font-medium leading-relaxed drop-shadow-md">
                        "Limit breaks aren't just for Saiyans. Manage your skills and projects to the next level."
                    </p>
                </div>
            </div>

            {/* --- BAGIAN KANAN: FORM LOGIN --- */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-white relative">
                {/* Dekorasi Garis Miring (Speed Line Style) */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-100 to-transparent rounded-bl-full opacity-50"></div>

                <div className="w-full max-w-md space-y-8">
                    
                    {/* Header Form */}
                    <div className="text-center">
                        {/* Logo kecil untuk Mobile */}
                        <div className="lg:hidden flex justify-center mb-4">
                            <DragonBallIcon className="w-12 h-12" />
                        </div>
                        
                        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                            Welcome Back, <span className="text-orange-600">Warrior</span>
                        </h2>
                        <p className="mt-2 text-sm text-slate-500 font-medium">
                            Masuk ke Capsule Corp Dashboard Anda.
                        </p>
                    </div>

                    {status && (
                        <div className="mb-4 text-sm font-bold text-orange-600 bg-orange-50 p-3 rounded-lg border border-orange-200 text-center shadow-sm">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="mt-8 space-y-6">
                        <div className="space-y-5">
                            {/* Input Email */}
                            <div className="group">
                                <InputLabel htmlFor="email" value="Email Address" className="text-slate-700 font-bold uppercase text-xs tracking-wider" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg focus:border-orange-500 focus:ring-orange-500/20 focus:bg-white transition-all duration-300 font-medium text-slate-800"
                                    autoComplete="username"
                                    isFocused={true}
                                    placeholder="goku@capsulecorp.com"
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            {/* Input Password */}
                            <div className="group">
                                <div className="flex items-center justify-between">
                                    <InputLabel htmlFor="password" value="Password" className="text-slate-700 font-bold uppercase text-xs tracking-wider" />
                                    {canResetPassword && (
                                        <Link
                                            href={route('password.request')}
                                            className="text-xs font-bold text-blue-600 hover:text-orange-600 transition-colors uppercase tracking-wide"
                                        >
                                            Forgot password?
                                        </Link>
                                    )}
                                </div>
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg focus:border-orange-500 focus:ring-orange-500/20 focus:bg-white transition-all duration-300 font-medium text-slate-800"
                                    autoComplete="current-password"
                                    placeholder="••••••••"
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>
                        </div>

                        {/* Checkbox */}
                        <div className="flex items-center">
                            <label className="flex items-center cursor-pointer group">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    className="text-orange-600 focus:ring-orange-500 rounded border-gray-300 w-5 h-5 transition-transform group-hover:scale-110"
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span className="ms-2 text-sm text-slate-600 font-medium group-hover:text-orange-600 transition-colors">Remember my power level</span>
                            </label>
                        </div>

                        {/* Button Login: Super Saiyan Gradient */}
                        <PrimaryButton 
                            className="w-full flex justify-center py-4 px-4 border-0 rounded-xl shadow-lg shadow-orange-500/30 text-sm font-black uppercase tracking-widest text-white 
                            bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 
                            hover:from-orange-400 hover:via-orange-500 hover:to-red-500 
                            active:scale-[0.98] transition-all duration-200 transform hover:-translate-y-1"
                            disabled={processing}
                        >
                            {processing ? 'Gathering Ki...' : 'Kamehameha! (Login)'}
                        </PrimaryButton>

                        {/* Link Kembali */}
                        <div className="text-center mt-6">
                            <Link href="/" className="text-sm font-medium text-slate-400 hover:text-blue-900 transition-colors">
                                &larr; Return to Earth (Home)
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}