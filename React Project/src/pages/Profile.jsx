import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getWatchlist, removeFromWatchlist } from '../services/watchlist';

const PROFILE_STORAGE_KEY = 'cinema_x_user_profile';

export default function Profile() {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // fallback
      }
    }
    return {
      name: 'Prince Amreliya',
      handle: 'princeamareliya1',
      bio: 'B.Tech CSE Student | Cinema Enthusiast & Full Stack Developer',
      joinDate: 'Aug 11, 2026',
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
    };
  });

  const [watchlist, setWatchlist] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(profile);

  useEffect(() => {
    setWatchlist(getWatchlist());
  }, []);

  const handleRemoveWatchlist = (id) => {
    const updated = removeFromWatchlist(id);
    setWatchlist(updated);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setProfile(editForm);
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(editForm));
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditForm(profile);
    setIsEditing(false);
  };

  // Genre breakdown stats
  const analyticsData = [
    { genre: 'Sci-Fi & Cyberpunk', percentage: 42, color: 'var(--secondary-neon)', count: '14 films' },
    { genre: 'Action & Thriller', percentage: 28, color: 'var(--primary-neon)', count: '10 films' },
    { genre: 'Drama & Mystery', percentage: 18, color: '#ffb800', count: '6 films' },
    { genre: 'Animation & Fantasy', percentage: 12, color: '#a855f7', count: '4 films' }
  ];

  return (
    <div>
      <div className="container-fluid px-md-5 px-4 py-5" style={{ paddingTop: '80px' }}>
        
        {/* Profile Header Card */}
        <div className="cyber-card mb-4 p-4">
          <div className="d-flex flex-column flex-xl-row align-items-start gap-4">
            
            <div className="flex-shrink-0 position-relative">
              <img 
                src={profile.avatarUrl} 
                className="rounded-circle border border-2" 
                style={{ width: '110px', height: '110px', objectFit: 'cover', borderColor: 'var(--secondary-neon)' }} 
                alt={profile.name} 
              />
              <span 
                className="position-absolute bottom-0 end-0 badge rounded-pill" 
                style={{ background: 'var(--primary-neon)', fontSize: '0.7rem' }}
              >
                PRO
              </span>
            </div>

            <div className="flex-fill">
              <div className="d-flex align-items-center gap-3 flex-wrap">
                <h2 className="mb-0 fw-bold display-6" style={{ letterSpacing: '-1px' }}>
                  {profile.name}
                </h2>
                <span className="badge" style={{ background: 'rgba(0, 240, 255, 0.15)', color: 'var(--secondary-neon)', border: '1px solid var(--secondary-neon)' }}>
                  @{profile.handle}
                </span>
              </div>

              <p className="small mt-1 mb-2" style={{ color: 'var(--text-muted)' }}>
                {profile.bio}
              </p>
              
              <p className="small mb-3" style={{ color: 'var(--secondary-neon)', fontWeight: 600 }}>
                <i className="bi bi-calendar3 me-1"></i> Member since: {profile.joinDate}
              </p>

              {/* Quick Stat Counters */}
              <div className="d-flex align-items-center flex-wrap gap-3 gap-md-4">
                <div>
                  <div className="fs-4 fw-bold text-white">{watchlist.length}</div>
                  <div className="small" style={{ color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '1px' }}>SAVED MOVIES</div>
                </div>
                <div className="stat-divider"></div>
                <div>
                  <div className="fs-4 fw-bold text-white">24</div>
                  <div className="small" style={{ color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '1px' }}>REVIEWS</div>
                </div>
                <div className="stat-divider"></div>
                <div>
                  <div className="fs-4 fw-bold text-white">4.8 ★</div>
                  <div className="small" style={{ color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '1px' }}>AVG RATING</div>
                </div>
                <div className="stat-divider"></div>
                <div>
                  <div className="fs-4 fw-bold text-white">78<span className="fs-6 text-muted">h</span></div>
                  <div className="small" style={{ color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '1px' }}>WATCH TIME</div>
                </div>
              </div>
            </div>

            {/* Action Buttons (Working Edit Button) */}
            <div className="d-flex gap-2 mt-3 mt-xl-0">
              <button 
                type="button" 
                className="btn btn-premium"
                onClick={() => setIsEditing(true)}
              >
                <i className="bi bi-pencil me-1"></i> Edit Profile
              </button>
              <Link to="/watchlist" className="btn btn-outline-cyber">
                <i className="bi bi-bookmark-fill me-1"></i> My Watchlist
              </Link>
            </div>
          </div>
        </div>

        {/* Edit Profile Modal / Form View (when active) */}
        {isEditing && (
          <div className="cyber-card mb-4 p-4 border border-info animate__animated animate__fadeIn">
            <h4 className="fw-bold text-white mb-3">
              <i className="bi bi-pencil-square me-2" style={{ color: 'var(--secondary-neon)' }}></i>
              Edit Profile Information
            </h4>
            
            <form onSubmit={handleSaveProfile}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label text-secondary small">Display Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={editForm.name} 
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    required
                  />
                </div>
                
                <div className="col-md-6">
                  <label className="form-label text-secondary small">Username Handle</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={editForm.handle} 
                    onChange={(e) => setEditForm({ ...editForm, handle: e.target.value })}
                    required
                  />
                </div>

                <div className="col-12">
                  <label className="form-label text-secondary small">Bio / Headline</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={editForm.bio} 
                    onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                  />
                </div>

                <div className="col-12">
                  <label className="form-label text-secondary small">Avatar Image URL</label>
                  <input 
                    type="url" 
                    className="form-control" 
                    value={editForm.avatarUrl} 
                    onChange={(e) => setEditForm({ ...editForm, avatarUrl: e.target.value })}
                  />
                </div>
              </div>

              <div className="d-flex gap-2 mt-4">
                <button type="submit" className="btn btn-premium px-4">
                  <i className="bi bi-check2 me-1"></i> Save Changes
                </button>
                <button type="button" className="btn btn-outline-secondary px-4" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 3-Column Content Layout */}
        <div className="row g-4">
          
          {/* Column 1: Live Real Watchlist */}
          <div className="col-lg-4 col-md-6">
            <div className="cyber-card h-100 p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h4 className="section-title-small m-0">
                  <i className="bi bi-bookmark-star me-2" style={{ color: 'var(--secondary-neon)' }}></i>
                  Quick Watchlist
                </h4>
                <span className="badge rounded-pill" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                  {watchlist.length} saved
                </span>
              </div>

              {watchlist.length === 0 ? (
                <div className="text-center py-4 text-muted">
                  <i className="bi bi-film fs-1 d-block mb-2 opacity-50"></i>
                  <p className="small mb-2">No movies in your watchlist yet.</p>
                  <Link to="/search" className="btn btn-sm btn-outline-cyber">
                    + Discover Movies
                  </Link>
                </div>
              ) : (
                <div className="d-flex flex-column gap-3">
                  {watchlist.slice(0, 4).map((movie) => (
                    <div 
                      key={movie.id} 
                      className="cyber-list-item d-flex align-items-center justify-content-between p-2"
                    >
                      <Link 
                        to={`/movie/${movie.id}`} 
                        className="d-flex align-items-center gap-3 text-decoration-none text-white flex-grow-1 text-truncate"
                      >
                        {movie.poster_path ? (
                          <img 
                            src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`} 
                            style={{ width: '40px', height: '56px', objectFit: 'cover', borderRadius: '6px' }} 
                            alt={movie.title} 
                          />
                        ) : (
                          <div 
                            style={{ width: '40px', height: '56px', background: '#1c1f2e', borderRadius: '6px' }} 
                            className="d-flex align-items-center justify-content-center small text-secondary"
                          >
                            🎬
                          </div>
                        )}
                        <div className="text-truncate">
                          <h6 className="mb-0 text-truncate text-white fw-semibold" style={{ fontSize: '0.9rem' }}>
                            {movie.title}
                          </h6>
                          <span className="small text-muted">
                            ★ {movie.vote_average?.toFixed(1) || 'N/A'} • {movie.release_date?.slice(0, 4) || 'Movie'}
                          </span>
                        </div>
                      </Link>

                      <button 
                        type="button" 
                        className="btn btn-sm text-danger border-0 p-1 ms-2"
                        title="Remove from Watchlist"
                        onClick={() => handleRemoveWatchlist(movie.id)}
                      >
                        <i className="bi bi-x-circle fs-5"></i>
                      </button>
                    </div>
                  ))}

                  {watchlist.length > 4 && (
                    <Link to="/watchlist" className="btn btn-sm btn-outline-cyber mt-2 w-100">
                      View all {watchlist.length} saved movies →
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Column 2: Full Watching Analytics Box (Fully Populated) */}
          <div className="col-lg-4 col-md-6">
            <div className="cyber-card h-100 p-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h4 className="section-title-small m-0">
                  <i className="bi bi-bar-chart-fill me-2" style={{ color: 'var(--primary-neon)' }}></i>
                  Watching Analytics
                </h4>
                <span className="small text-secondary fw-semibold">Last 30 Days</span>
              </div>

              {/* Primary Stat Highlight */}
              <div 
                className="p-3 rounded-3 mb-4 d-flex justify-content-between align-items-center"
                style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)' }}
              >
                <div>
                  <div className="text-secondary small">Top Genre Preference</div>
                  <div className="fs-5 fw-bold text-white mt-1">Sci-Fi & Action</div>
                </div>
                <div className="text-end">
                  <div className="fs-4 fw-bold" style={{ color: 'var(--secondary-neon)' }}>70%</div>
                  <span className="badge bg-success bg-opacity-25 text-success small">+12% this mo</span>
                </div>
              </div>

              {/* Progress bars for each genre */}
              <div className="d-flex flex-column gap-3">
                {analyticsData.map((item, idx) => (
                  <div key={idx}>
                    <div className="d-flex justify-content-between mb-1 small">
                      <span className="text-white fw-medium">{item.genre}</span>
                      <span className="text-muted">{item.count} ({item.percentage}%)</span>
                    </div>
                    <div className="cyber-progress mb-0" style={{ height: '7px', background: 'rgba(255,255,255,0.06)' }}>
                      <div 
                        style={{ 
                          width: `${item.percentage}%`, 
                          height: '100%', 
                          background: item.color,
                          boxShadow: `0 0 10px ${item.color}88`,
                          borderRadius: '10px'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Activity breakdown */}
              <div className="mt-4 pt-3 border-top" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <div className="d-flex justify-content-between align-items-center small text-secondary">
                  <span>Completed Movies</span>
                  <span className="text-white fw-bold">34 Titles</span>
                </div>
                <div className="d-flex justify-content-between align-items-center small text-secondary mt-2">
                  <span>Weekly Average</span>
                  <span className="text-white fw-bold">4.2 hrs / week</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Recent Activity & Favorite Badges */}
          <div className="col-lg-4 col-md-12">
            <div className="cyber-card h-100 p-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h4 className="section-title-small m-0">
                  <i className="bi bi-award-fill me-2" style={{ color: '#ffb800' }}></i>
                  Achievements & Activity
                </h4>
              </div>

              {/* Badges / Tier */}
              <div className="d-flex gap-2 flex-wrap mb-4">
                <span className="badge p-2 px-3" style={{ background: 'rgba(0, 240, 255, 0.12)', border: '1px solid var(--secondary-neon)', color: 'var(--secondary-neon)' }}>
                  🎬 Cinephile Tier II
                </span>
                <span className="badge p-2 px-3" style={{ background: 'rgba(255, 0, 85, 0.12)', border: '1px solid var(--primary-neon)', color: 'var(--primary-neon)' }}>
                  ⚡ Sci-Fi Explorer
                </span>
                <span className="badge p-2 px-3" style={{ background: 'rgba(255, 184, 0, 0.12)', border: '1px solid #ffb800', color: '#ffb800' }}>
                  ★ Top Reviewer
                </span>
              </div>

              {/* Mini Timeline of Recent Activities */}
              <h6 className="text-secondary small fw-bold mb-3 text-uppercase" style={{ letterSpacing: '0.8px' }}>
                Recent Timeline
              </h6>
              
              <div className="timeline">
                <div className="timeline-item">
                  <div className="text-white small fw-bold">Added Movie to Watchlist</div>
                  <div className="small text-muted">Interstellar • 2 hours ago</div>
                </div>
                <div className="timeline-item">
                  <div className="text-white small fw-bold">Rated a Title</div>
                  <div className="small text-muted">Dune: Part Two ★ 5.0 • Yesterday</div>
                </div>
                <div className="timeline-item mb-0">
                  <div className="text-white small fw-bold">Completed Marathon</div>
                  <div className="small text-muted">Christopher Nolan Series • 3 days ago</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
