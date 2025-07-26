import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Tribly - <span className="accent">Find Yours</span>
          </h1>
          <p className="hero-subtitle">
            The all-in-one community platform for college students to connect, discover resources, and build meaningful relationships.
          </p>
          <div className="hero-buttons">
            <a href="#features" className="cta-primary">Learn More</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="screen-content">
                <div className="status-bar">
                  <div className="status-left">
                    <div className="time">9:41</div>
                  </div>
                  <div className="status-right">
                    <div className="battery"></div>
                    <div className="signal"></div>
                  </div>
                </div>
                <div className="app-header">
                  <h3 className="app-title">Tribly</h3>
                </div>
                <div className="mock-nav">
                  <div className="nav-item active">Social</div>
                  <div className="nav-item">Messages</div>
                  <div className="nav-item">Resources</div>
                </div>
                <div className="mock-content">
                  <div className="content-card">
                    <div className="card-avatar"></div>
                    <div className="card-text">
                      <div className="text-line primary"></div>
                      <div className="text-line secondary"></div>
                    </div>
                  </div>
                  <div className="content-card">
                    <div className="card-avatar"></div>
                    <div className="card-text">
                      <div className="text-line primary"></div>
                      <div className="text-line secondary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="problem">
        <div className="container">
          <h2>The Challenge Students Face</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <h3>Social Isolation</h3>
              <p>Many students struggle to form meaningful connections and find their place in college communities.</p>
            </div>
            <div className="problem-card">
              <h3>Resource Fragmentation</h3>
              <p>Academic resources are scattered across multiple platforms, making it hard to find what you need.</p>
            </div>
            <div className="problem-card">
              <h3>Communication Barriers</h3>
              <p>Limited ways to connect with peers, professors, and study groups effectively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Everything You Need in One Place</h2>
          
          <div className="feature-row">
            <div className="feature-content">
              <h3>Social Hub</h3>
              <p>Connect with fellow students, join communities, and build lasting friendships. Share experiences, find study partners, and create your college network.</p>
              <ul>
                <li>User profiles and discovery</li>
                <li>Interest-based communities</li>
                <li>Event sharing and planning</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="feature-mockup social">
                <div className="mock-posts">
                  <div className="mock-post">
                    <div className="post-avatar"></div>
                    <div className="post-content">
                      <div className="post-line"></div>
                      <div className="post-line short"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-row reverse">
            <div className="feature-content">
              <h3>Smart Messaging</h3>
              <p>Seamless communication with direct messages, group chats, and study room discussions. Stay connected with your academic and social circles.</p>
              <ul>
                <li>Real-time messaging</li>
                <li>Group conversations</li>
                <li>File and resource sharing</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="feature-mockup messages">
                <div className="mock-chats">
                  <div className="mock-chat">
                    <div className="chat-avatar"></div>
                    <div className="chat-preview"></div>
                  </div>
                  <div className="mock-chat">
                    <div className="chat-avatar"></div>
                    <div className="chat-preview"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-row">
            <div className="feature-content">
              <h3>Resource Library</h3>
              <p>Access comprehensive academic resources including courses, teachers, majors, careers, and organizations. Everything you need for academic success.</p>
              <ul>
                <li>Course catalogs and reviews</li>
                <li>Teacher ratings and feedback</li>
                <li>Career guidance and opportunities</li>
                <li>Student organizations directory</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="feature-mockup resources">
                <div className="mock-resources">
                  <div className="resource-card">
                    <div className="resource-icon"></div>
                    <div className="resource-text">
                      <div className="resource-line"></div>
                      <div className="resource-line short"></div>
                    </div>
                  </div>
                  <div className="resource-card">
                    <div className="resource-icon"></div>
                    <div className="resource-text">
                      <div className="resource-line"></div>
                      <div className="resource-line short"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="audience">
        <div className="container">
          <h2>Built for Today's Students</h2>
          <div className="audience-grid">
            <div className="audience-card">
              <div className="audience-icon">🎓</div>
              <h3>College Students</h3>
              <p>Undergraduate and graduate students looking to enhance their college experience and build meaningful connections.</p>
            </div>
            <div className="audience-card">
              <div className="audience-icon">👥</div>
              <h3>Student Communities</h3>
              <p>Student organizations, clubs, and groups seeking better ways to connect and share resources with members.</p>
            </div>
            <div className="audience-card">
              <div className="audience-icon">🏫</div>
              <h3>Educational Institutions</h3>
              <p>Universities and colleges wanting to improve student engagement and resource accessibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Find Yours?</h2>
            <p>Join thousands of students already building their college community on Tribly.</p>
            <p className="contact-info">Contact us at <span className="contact-email">triblyfindyours@gmail.com</span></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Tribly</h3>
              <p>Find Yours</p>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Contact</h4>
                <p className="contact-email">triblyfindyours@gmail.com</p>
              </div>
              <div className="link-group">
                <h4>Company</h4>
                <p>Building connections for students</p>
              </div>
              <div className="link-group">
                <h4>Platform</h4>
                <p>Available on mobile devices</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Tribly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
