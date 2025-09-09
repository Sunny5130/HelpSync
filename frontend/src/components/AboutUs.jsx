import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/userAuth";

const AboutUs = () => {
  const authUser = useAuthStore((state) => state.authUser);
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Hero Section - Above the fold */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('/abouhome.png')`,
              filter: "brightness(0.7) contrast(1.2) saturate(1.4)",
            }}
          />

          {/* Vibrant Overlays - Matching Home Page */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-blue-600/20 to-orange-600/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-yellow-400/20 to-red-400/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            {/* Logo-style heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-white drop-shadow-2xl filter brightness-125">
                About{" "}
              </span>
              <span className="text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text font-extrabold drop-shadow-2xl filter brightness-110">
                HelpSync
              </span>
            </h1>

            {/* Main message with creative styling */}
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl md:text-2xl lg:text-3xl text-center leading-relaxed tracking-wide drop-shadow-2xl">
                <span className="text-orange-200 font-medium">
                  At HelpSync, we believe that{" "}
                </span>
                <span className="text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text font-extrabold">
                  helping is healing
                </span>
                <span className="text-orange-200 font-medium">.</span>
              </p>

              <p className="text-lg md:text-xl lg:text-2xl text-white font-light tracking-wide drop-shadow-xl leading-relaxed">
                We're building a trusted community platform that connects
                neighbors and fosters{" "}
                <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text font-semibold">
                  genuine human connections
                </span>
              </p>

              <p className="text-base md:text-lg lg:text-xl text-white font-light tracking-wide drop-shadow-lg leading-relaxed">
                Whether you need assistance or want to help others, HelpSync
                makes community support{" "}
                <span className="text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text font-semibold">
                  accessible, dignified, and meaningful
                </span>
              </p>
            </div>

            {/* Floating particles effect */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-orange-400 rounded-full opacity-50 animate-bounce"></div>
            <div className="absolute bottom-32 left-20 w-5 h-5 bg-red-400 rounded-full opacity-40 animate-ping"></div>
          </div>
        </div>
      </section>

      {/* Scrollable Content Sections */}
      <div className="relative">
        {/* Slightly Darker Orange Unified Background for all sections */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-orange-300 to-yellow-200" />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/70 via-orange-200/70 to-orange-300/70" />
        {/* Content sections */}
        {/* Mission & Vision Section */}
        <section className="relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400/10 rounded-full blur-3xl animate-bounce"></div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 drop-shadow-2xl">
                Our{" "}
                <span className="text-transparent bg-gradient-to-r from-yellow-700 via-orange-700 to-red-700 bg-clip-text">
                  Foundation
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed font-light">
                Built on principles of trust, community, and{" "}
                <span className="text-transparent bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text font-semibold">
                  meaningful connection
                </span>
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="group relative bg-gradient-to-br from-yellow-100 via-orange-100 to-yellow-50 backdrop-blur-xl border border-yellow-400/20 rounded-3xl p-10 md:p-12 hover:border-yellow-400/40 transition-all duration-500 shadow-xl hover:shadow-yellow-400/10">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/30 to-orange-200/30 rounded-3xl"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl font-bold">M</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 drop-shadow-lg">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-base md:text-lg text-gray-900 leading-relaxed font-light">
                    To create a trusted, inclusive, and hyperlocal support
                    network where every individual can offer or receive help
                    with{" "}
                    <span className="text-transparent bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text font-semibold">
                      dignity, respect, and ease
                    </span>
                    .
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="group relative bg-gradient-to-br from-orange-100 via-yellow-100 to-red-50 backdrop-blur-xl border border-orange-400/20 rounded-3xl p-10 md:p-12 hover:border-orange-400/40 transition-all duration-500 shadow-xl hover:shadow-orange-400/10">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-red-200/30 rounded-3xl"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl font-bold">V</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 drop-shadow-lg">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-base md:text-lg text-gray-900 leading-relaxed font-light">
                    A world where communities are strengthened through acts of
                    kindness, where helping each other is{" "}
                    <span className="text-transparent bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text font-semibold">
                      natural, accessible, and celebrated
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 drop-shadow-2xl">
                What We{" "}
                <span className="text-transparent bg-gradient-to-r from-yellow-700 via-orange-700 to-red-700 bg-clip-text">
                  Do
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed font-light">
                HelpSync connects kind-hearted individuals through{" "}
                <span className="text-transparent bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text font-semibold">
                  modern technology and community-first design
                </span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Peer-to-Peer Support",
                  description:
                    "Direct connections between community members for mutual aid and assistance.",
                  gradient: "from-blue-400 to-cyan-400",
                  iconBg: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Local Discovery",
                  description:
                    "Find help and helpers in your immediate neighborhood with location-based matching.",
                  gradient: "from-green-400 to-emerald-400",
                  iconBg: "from-green-500 to-emerald-500",
                },
                {
                  title: "Community Building",
                  description:
                    "Foster relationships through discussions, resource sharing, and local initiatives.",
                  gradient: "from-purple-400 to-violet-400",
                  iconBg: "from-purple-500 to-violet-500",
                },
                {
                  title: "Safe & Secure",
                  description:
                    "Privacy-first design with optional verification for peace of mind.",
                  gradient: "from-yellow-400 to-orange-400",
                  iconBg: "from-yellow-500 to-orange-500",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 backdrop-blur-xl border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 shadow-lg hover:scale-105"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-10 rounded-2xl group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>
                  <div className="relative">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${feature.iconBg} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="w-5 h-5 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 drop-shadow-lg">
                      {feature.title}
                    </h3>
                    <p className="text-gray-900 leading-relaxed font-light text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Indian Values Section */}
        <section className="relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="relative bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 backdrop-blur-xl border border-yellow-400/10 rounded-3xl p-12 md:p-16 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 to-orange-200/20 rounded-3xl"></div>
              <div className="relative max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 drop-shadow-2xl">
                  Rooted in{" "}
                  <span className="text-transparent bg-gradient-to-r from-yellow-700 via-orange-700 to-red-700 bg-clip-text">
                    Indian Values
                  </span>
                </h2>
                <p className="text-base md:text-lg text-gray-900 leading-relaxed font-light">
                  Our platform draws inspiration from the rich tradition of
                  Indian neighborhoods, where{" "}
                  <span className="text-transparent bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text font-semibold">
                    community support has always been fundamental
                  </span>
                  . From sharing meals during festivals to helping during
                  difficult times, we're digitizing this beautiful aspect of
                  Indian culture for the modern world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 drop-shadow-2xl">
                  Our{" "}
                  <span className="text-transparent bg-gradient-to-r from-yellow-700 via-orange-700 to-red-700 bg-clip-text">
                    Story
                  </span>
                </h2>
                <div className="space-y-6">
                  <p className="text-base md:text-lg text-gray-900 leading-relaxed font-light">
                    HelpSync began as a simple observation: in our increasingly
                    digital world, we were losing the{" "}
                    <span className="text-transparent bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text font-semibold">
                      natural connections that make communities strong
                    </span>
                    .
                  </p>
                  <p className="text-base md:text-lg text-gray-900 leading-relaxed font-light">
                    What started as a vision to make community support more
                    accessible has grown into a platform where{" "}
                    <span className="text-transparent bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text font-semibold">
                      empathy meets action, where technology serves humanity
                    </span>
                    .
                  </p>
                  <p className="text-base md:text-lg text-gray-900 leading-relaxed font-light">
                    Today, we're building bridges between neighbors, fostering a
                    culture of mutual aid, and proving that{" "}
                    <span className="text-transparent bg-gradient-to-r from-yellow-700 via-orange-700 to-red-700 bg-clip-text font-semibold">
                      small acts of kindness can create profound change
                    </span>
                    .
                  </p>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-yellow-100 via-orange-100 to-yellow-50 backdrop-blur-xl border border-yellow-400/20 rounded-3xl p-8 md:p-10 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/30 to-orange-200/30 rounded-3xl"></div>
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center">
                      <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">
                    Innovation Meets{" "}
                    <span className="text-transparent bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text">
                      Compassion
                    </span>
                  </h3>
                  <p className="text-gray-900 leading-relaxed text-base font-light">
                    We combine cutting-edge technology with timeless human
                    values to create meaningful connections and lasting positive
                    impact in communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA Section (now just another section, no own background) */}
        <section className="relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-orange-400/20 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-red-400/15 rounded-full blur-3xl animate-ping"></div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center relative bg-gradient-to-br from-yellow-100 via-orange-100 to-yellow-50 backdrop-blur-xl border border-yellow-400/20 rounded-3xl p-12 md:p-16 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/30 to-orange-200/30 rounded-3xl"></div>
              <div className="relative">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 drop-shadow-2xl">
                  Join Our{" "}
                  <span className="text-transparent bg-gradient-to-r from-yellow-700 via-orange-700 to-red-700 bg-clip-text">
                    Community
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-900 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                  Be part of a movement that values{" "}
                  <span className="text-transparent bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text font-semibold">
                    humanity over hierarchy
                  </span>
                  . Whether you want to give, receive, or simply belong—HelpSync
                  is your space.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                  {authUser ? (
                    <button
                      onClick={() => navigate("/dashboard")}
                      className="group relative bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-yellow-400/25 hover:scale-105 text-base"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
                      <div className="relative flex items-center space-x-2 cursor-pointer">
                        <span className="text-lg">📋</span>
                        <span>Go to Dashboard</span>
                      </div>
                    </button>
                  ) : (
                    <button
                      onClick={() => navigate("/auth")}
                      className="group relative bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-yellow-400/25 hover:scale-105 text-base"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
                      <div className="relative flex items-center space-x-2 cursor-pointer">
                        <span className="text-lg">🚀</span>
                        <span>Join Community</span>
                      </div>
                    </button>
                  )}
                </div>
                <p className="text-lg md:text-xl font-semibold drop-shadow-lg">
                  <span className="text-transparent bg-gradient-to-r from-yellow-700 via-orange-700 to-red-700 bg-clip-text">
                    Let's build a kinder world, one connection at a time.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
