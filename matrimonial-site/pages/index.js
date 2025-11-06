import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      age: 28,
      religion: "Christian",
      profession: "Software Engineer",
      location: "New York, USA",
      education: "Masters in CS",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    },
    {
      id: 2,
      name: "Priya Sharma",
      age: 26,
      religion: "Hindu",
      profession: "Doctor",
      location: "Mumbai, India",
      education: "MBBS",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"
    },
    {
      id: 3,
      name: "Michael Chen",
      age: 30,
      religion: "Buddhist",
      profession: "Business Analyst",
      location: "Singapore",
      education: "MBA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      id: 4,
      name: "Fatima Ali",
      age: 25,
      religion: "Muslim",
      profession: "Teacher",
      location: "Dubai, UAE",
      education: "B.Ed",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400"
    },
    {
      id: 5,
      name: "David Kumar",
      age: 32,
      religion: "Christian",
      profession: "Architect",
      location: "Toronto, Canada",
      education: "B.Arch",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
    },
    {
      id: 6,
      name: "Ananya Patel",
      age: 27,
      religion: "Hindu",
      profession: "Marketing Manager",
      location: "London, UK",
      education: "MBA Marketing",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400"
    }
  ]);

  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    religion: '',
    profession: '',
    location: '',
    education: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert('Registration successful! (Demo mode - no backend)');
    setShowRegister(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login successful! (Demo mode - no backend)');
    setShowLogin(false);
  };

  return (
    <>
      <Head>
        <title>Perfect Match - Find Your Life Partner</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={styles.container}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.headerContent}>
            <h1 style={styles.logo}>💑 Perfect Match</h1>
            <nav style={styles.nav}>
              <button style={styles.navButton} onClick={() => setShowLogin(true)}>Login</button>
              <button style={{...styles.navButton, ...styles.primaryButton}} onClick={() => setShowRegister(true)}>Register Free</button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <h2 style={styles.heroTitle}>Find Your Perfect Life Partner</h2>
            <p style={styles.heroSubtitle}>Join thousands of happy couples who found love through Perfect Match</p>
            <button style={styles.ctaButton} onClick={() => setShowRegister(true)}>Get Started Today</button>
          </div>
        </section>

        {/* Search Filters */}
        <section style={styles.filtersSection}>
          <div style={styles.filters}>
            <select style={styles.filterInput}>
              <option>All Religions</option>
              <option>Hindu</option>
              <option>Muslim</option>
              <option>Christian</option>
              <option>Buddhist</option>
              <option>Other</option>
            </select>
            <select style={styles.filterInput}>
              <option>All Locations</option>
              <option>USA</option>
              <option>India</option>
              <option>UK</option>
              <option>Canada</option>
              <option>UAE</option>
            </select>
            <select style={styles.filterInput}>
              <option>Age Range</option>
              <option>18-25</option>
              <option>26-30</option>
              <option>31-35</option>
              <option>36-40</option>
              <option>40+</option>
            </select>
            <button style={styles.searchButton}>Search</button>
          </div>
        </section>

        {/* Profiles Grid */}
        <section style={styles.profilesSection}>
          <h2 style={styles.sectionTitle}>Featured Profiles</h2>
          <div style={styles.profilesGrid}>
            {profiles.map(profile => (
              <div key={profile.id} style={styles.profileCard}>
                <img src={profile.image} alt={profile.name} style={styles.profileImage} />
                <div style={styles.profileInfo}>
                  <h3 style={styles.profileName}>{profile.name}</h3>
                  <p style={styles.profileDetail}>{profile.age} years • {profile.religion}</p>
                  <p style={styles.profileDetail}>{profile.profession}</p>
                  <p style={styles.profileDetail}>📍 {profile.location}</p>
                  <p style={styles.profileDetail}>🎓 {profile.education}</p>
                  <button style={styles.viewButton}>View Profile</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section style={styles.featuresSection}>
          <h2 style={styles.sectionTitle}>Why Choose Perfect Match?</h2>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>✓</div>
              <h3 style={styles.featureTitle}>Verified Profiles</h3>
              <p style={styles.featureText}>All profiles are manually verified for authenticity</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🔒</div>
              <h3 style={styles.featureTitle}>Privacy Protected</h3>
              <p style={styles.featureText}>Your data is secure and never shared</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>💬</div>
              <h3 style={styles.featureTitle}>Direct Messaging</h3>
              <p style={styles.featureText}>Chat directly with matches you like</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🎯</div>
              <h3 style={styles.featureTitle}>Smart Matching</h3>
              <p style={styles.featureText}>AI-powered matches based on compatibility</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <p style={styles.footerText}>© 2024 Perfect Match. All rights reserved.</p>
          <div style={styles.footerLinks}>
            <a href="#" style={styles.footerLink}>Privacy Policy</a>
            <a href="#" style={styles.footerLink}>Terms of Service</a>
            <a href="#" style={styles.footerLink}>Contact Us</a>
          </div>
        </footer>

        {/* Registration Modal */}
        {showRegister && (
          <div style={styles.modal} onClick={() => setShowRegister(false)}>
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <h2 style={styles.modalTitle}>Create Your Profile</h2>
              <form onSubmit={handleRegister} style={styles.form}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  style={styles.input}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  style={styles.input}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  style={styles.input}
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  style={styles.input}
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                />
                <select
                  name="gender"
                  style={styles.input}
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <select
                  name="religion"
                  style={styles.input}
                  value={formData.religion}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Religion</option>
                  <option value="hindu">Hindu</option>
                  <option value="muslim">Muslim</option>
                  <option value="christian">Christian</option>
                  <option value="buddhist">Buddhist</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="text"
                  name="profession"
                  placeholder="Profession"
                  style={styles.input}
                  value={formData.profession}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  style={styles.input}
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="education"
                  placeholder="Education"
                  style={styles.input}
                  value={formData.education}
                  onChange={handleInputChange}
                  required
                />
                <div style={styles.modalButtons}>
                  <button type="button" style={styles.cancelButton} onClick={() => setShowRegister(false)}>Cancel</button>
                  <button type="submit" style={styles.submitButton}>Register</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Login Modal */}
        {showLogin && (
          <div style={styles.modal} onClick={() => setShowLogin(false)}>
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <h2 style={styles.modalTitle}>Login</h2>
              <form onSubmit={handleLogin} style={styles.form}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  style={styles.input}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  style={styles.input}
                  required
                />
                <div style={styles.modalButtons}>
                  <button type="button" style={styles.cancelButton} onClick={() => setShowLogin(false)}>Cancel</button>
                  <button type="submit" style={styles.submitButton}>Login</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  header: {
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
  },
  logo: {
    margin: 0,
    fontSize: '1.8rem',
    color: '#e91e63',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
  },
  navButton: {
    padding: '0.6rem 1.5rem',
    border: '2px solid #e91e63',
    backgroundColor: 'transparent',
    color: '#e91e63',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.3s',
  },
  primaryButton: {
    backgroundColor: '#e91e63',
    color: '#fff',
  },
  hero: {
    background: 'linear-gradient(135deg, #e91e63 0%, #f06292 100%)',
    color: '#fff',
    padding: '5rem 2rem',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '3rem',
    margin: '0 0 1rem 0',
    fontWeight: 'bold',
  },
  heroSubtitle: {
    fontSize: '1.3rem',
    margin: '0 0 2rem 0',
    opacity: 0.95,
  },
  ctaButton: {
    padding: '1rem 3rem',
    fontSize: '1.2rem',
    backgroundColor: '#fff',
    color: '#e91e63',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s',
  },
  filtersSection: {
    padding: '2rem',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  filters: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  filterInput: {
    flex: '1',
    minWidth: '200px',
    padding: '0.8rem',
    border: '2px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
  },
  searchButton: {
    padding: '0.8rem 2rem',
    backgroundColor: '#e91e63',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  profilesSection: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '3rem 2rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '2rem',
    color: '#333',
    textAlign: 'center',
  },
  profilesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem',
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s',
    cursor: 'pointer',
  },
  profileImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
  },
  profileInfo: {
    padding: '1.5rem',
  },
  profileName: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.4rem',
    color: '#333',
  },
  profileDetail: {
    margin: '0.3rem 0',
    color: '#666',
    fontSize: '0.95rem',
  },
  viewButton: {
    width: '100%',
    marginTop: '1rem',
    padding: '0.8rem',
    backgroundColor: '#e91e63',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  featuresSection: {
    backgroundColor: '#fff',
    padding: '3rem 2rem',
  },
  featuresGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  featureCard: {
    textAlign: 'center',
    padding: '2rem',
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  featureTitle: {
    fontSize: '1.3rem',
    margin: '0 0 0.5rem 0',
    color: '#333',
  },
  featureText: {
    color: '#666',
    lineHeight: '1.6',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '2rem',
    textAlign: 'center',
  },
  footerText: {
    margin: '0 0 1rem 0',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  },
  footerLink: {
    color: '#fff',
    textDecoration: 'none',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '500px',
    maxHeight: '90vh',
    overflowY: 'auto',
  },
  modalTitle: {
    margin: '0 0 1.5rem 0',
    fontSize: '1.8rem',
    color: '#333',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.8rem',
    border: '2px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
  },
  modalButtons: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
  },
  cancelButton: {
    flex: 1,
    padding: '0.8rem',
    border: '2px solid #ddd',
    backgroundColor: '#fff',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  submitButton: {
    flex: 1,
    padding: '0.8rem',
    backgroundColor: '#e91e63',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
};
