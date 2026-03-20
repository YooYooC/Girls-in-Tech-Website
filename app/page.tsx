import NavBar from "./components/NavBar";

export default function Page() {
    return (
        <>
            <NavBar />
            
            {/* Hero Section */}
            <div className="relative w-full h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 flex items-center justify-center overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
                
                {/* Content */}
                <div className="relative z-10 text-center px-4 md:px-8">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                        TechLab
                    </h1>
                    <p className="text-xl md:text-2xl text-yellow-200 mb-8 drop-shadow-md">
                        Explore the future of technology
                    </p>
                    <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-pink-400 text-purple-900 font-bold rounded-lg hover:from-yellow-300 hover:to-pink-300 transition transform hover:scale-105">
                        Get Started
                    </button>
                </div>
            </div>

            {/* About Us Section */}
            <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-300">About Us</h2>
                    <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8">
                        Welcome to TechLab, where innovation meets creativity. We are dedicated to bringing the latest technology education and opportunities to our community.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-pink-900 bg-opacity-50 p-6 rounded-lg border border-pink-400">
                            <h3 className="text-2xl font-bold text-yellow-300 mb-3">Innovation</h3>
                            <p className="text-pink-100">Cutting-edge technology and forward-thinking solutions</p>
                        </div>
                        <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg border border-blue-400">
                            <h3 className="text-2xl font-bold text-yellow-300 mb-3">Community</h3>
                            <p className="text-blue-100">Join a vibrant community of tech enthusiasts</p>
                        </div>
                        <div className="bg-purple-800 bg-opacity-50 p-6 rounded-lg border border-purple-400">
                            <h3 className="text-2xl font-bold text-yellow-300 mb-3">Learning</h3>
                            <p className="text-purple-100">Grow your skills with our programs</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
