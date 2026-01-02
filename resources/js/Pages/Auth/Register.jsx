import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

// Ikon Bola Naga (Sama seperti Login agar konsisten)
const DragonBallIcon = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="url(#ballGradient)" stroke="#F59E0B" strokeWidth="2"/>
        <path d="M50 25L53 35H63L55 41L58 51L50 45L42 51L45 41L37 35H47L50 25Z" fill="#DC2626"/>
        <defs>
            <radialGradient id="ballGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30 30) rotate(0) scale(70)">
                <stop stopColor="#FCD34D" />
                <stop offset="1" stopColor="#F59E0B" />
            </radialGradient>
        </defs>
    </svg>
);

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="flex min-h-screen w-full bg-slate-50 font-sans">
            <Head title="Register" />

            {/* --- BAGIAN KIRI: VISUAL (Training Ground Vibes) --- */}
            <div className="hidden lg:flex w-1/2 relative bg-blue-900 items-center justify-center overflow-hidden">
                {/* Gambar Background: Pegunungan/Training (Nuansa awal perjalanan) */}
                <img 
                    src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop" 
                    alt="Mountain Landscape" 
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-70"
                />
                
                {/* Gradient Overlay (Biru Vegeta ke Orange Goku) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/90 via-blue-800/70 to-orange-500/60"></div>
                
                {/* Efek Partikel */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                {/* Konten Text */}
                <div className="relative z-10 p-12 text-white max-w-lg text-center">
                    <div className="mb-6 flex justify-center animate-pulse">
                        <DragonBallIcon className="w-20 h-20 drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]" />
                    </div>
                    <h2 className="text-5xl font-black tracking-tighter uppercase italic drop-shadow-lg">
                        Unleash Your <br/> <span className="text-orange-400">Potential</span>
                    </h2>
                    <p className="mt-6 text-lg text-blue-50 font-medium leading-relaxed drop-shadow-md">
                        "Every journey begins with a single step. Create your account and start building your legacy today."
                    </p>
                </div>
            </div>

            {/* --- BAGIAN KANAN: FORM REGISTER --- */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-white relative">
                {/* Dekorasi Garis Miring */}
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-100 to-transparent rounded-tr-full opacity-50"></div>

                <div className="w-full max-w-md space-y-8">
                    
                    {/* Header Form */}
                    <div className="text-center">
                        <div className="lg:hidden flex justify-center mb-4">
                            <DragonBallIcon className="w-12 h-12" />
                        </div>
                        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                            New <span className="text-orange-600">Challenger?</span>
                        </h2>
                        <p className="mt-2 text-sm text-slate-500 font-medium">
                            Bergabunglah untuk memulai petualangan portfolio Anda.
                        </p>
                    </div>

                    <form onSubmit={submit} className="mt-8 space-y-5">
                        {/* Name Input */}
                        <div className="group">
                            <InputLabel htmlFor="name" value="Your Name" className="text-slate-700 font-bold uppercase text-xs tracking-wider" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg focus:border-orange-500 focus:ring-orange-500/20 focus:bg-white transition-all duration-300 font-medium text-slate-800"
                                autoComplete="name"
                                isFocused={true}
                                placeholder="Son Goku"
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        {/* Email Input */}
                        <div className="group">
                            <InputLabel htmlFor="email" value="Email Address" className="text-slate-700 font-bold uppercase text-xs tracking-wider" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg focus:border-orange-500 focus:ring-orange-500/20 focus:bg-white transition-all duration-300 font-medium text-slate-800"
                                autoComplete="username"
                                placeholder="name@example.com"
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        {/* Password Input */}
                        <div className="group">
                            <InputLabel htmlFor="password" value="Password" className="text-slate-700 font-bold uppercase text-xs tracking-wider" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg focus:border-orange-500 focus:ring-orange-500/20 focus:bg-white transition-all duration-300 font-medium text-slate-800"
                                autoComplete="new-password"
                                placeholder="••••••••"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        {/* Confirm Password Input */}
                        <div className="group">
                            <InputLabel htmlFor="password_confirmation" value="Confirm Password" className="text-slate-700 font-bold uppercase text-xs tracking-wider" />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg focus:border-orange-500 focus:ring-orange-500/20 focus:bg-white transition-all duration-300 font-medium text-slate-800"
                                autoComplete="new-password"
                                placeholder="••••••••"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />
                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>

                        {/* Button Register */}
                        <div className="pt-2">
                            <PrimaryButton 
                                className="w-full flex justify-center py-4 px-4 border-0 rounded-xl shadow-lg shadow-blue-500/30 text-sm font-black uppercase tracking-widest text-white 
                                bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 
                                hover:from-blue-500 hover:via-blue-400 hover:to-cyan-400 
                                active:scale-[0.98] transition-all duration-200 transform hover:-translate-y-1"
                                disabled={processing}
                            >
                                {processing ? 'Creating...' : 'Begin Adventure (Register)'}
                            </PrimaryButton>
                        </div>

                        {/* Link Kembali Login */}
                        <div className="text-center mt-6">
                            <span className="text-sm text-slate-500">Already have an account? </span>
                            <Link 
                                href={route('login')} 
                                className="text-sm font-bold text-orange-600 hover:text-orange-500 transition-colors uppercase tracking-wide ml-1"
                            >
                                Teleport to Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}